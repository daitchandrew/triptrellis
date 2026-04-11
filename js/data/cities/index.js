// Aggregated city guide data

import { seoulGuide, seoulSupplements } from './seoul.js';
import { tokyoGuide, tokyoSupplements } from './tokyo.js';
import { kyotoGuide, kyotoSupplements } from './kyoto.js';
import { osakaGuide, osakaSupplements } from './osaka.js';
import { bangkokGuide, bangkokSupplements } from './bangkok.js';
import { pragueGuide, pragueSupplements } from './prague.js';
import { copenhagenGuide, copenhagenSupplements } from './copenhagen.js';
import { berlinGuide, berlinSupplements } from './berlin.js';
import { enrichCityGuidesWithHotelDetails } from '../hotel-details.js';
import { basePlaceName, getPlaceIdentityKeys } from '../../lib/utils.js?v=triptrellis-prague-clock-cleanup-20260411-007';

const rawCityGuides = {
  seoul: seoulGuide,
  tokyo: tokyoGuide,
  kyoto: kyotoGuide,
  osaka: osakaGuide,
  bangkok: bangkokGuide,
  prague: pragueGuide,
  copenhagen: copenhagenGuide,
  berlin: berlinGuide,
};

function scoreCanonicalLibraryEntry(item, source = "") {
  const name = String(item?.name || "");
  const normalizedName = basePlaceName(name);
  const identityCount = getPlaceIdentityKeys(name).length;
  let score = Number(item?.score || 0);

  if (source === "cantMiss") score += 35;
  if (source === "food") score += 30;
  if (source === "activities") score += 22;
  if (source === "supplement") score += 10;
  if (item?.description && String(item.description).length > 90) score += 3;
  if (item?.categoryLabel) score += 2;
  if (name && basePlaceName(name) === normalizedName && name.length <= 42) score += 5;
  if (/\b(?:visit|experience|deep dive|spectacle|tick|paper model|pairing|block|stop|wander|walk|stroll|climb|night|reset|loop|circuit)\b/i.test(name)) score -= 8;
  if (identityCount > 2) score -= 18;
  if (/\b(?:and|to|plus)\b/i.test(name) && identityCount > 1) score -= 8;
  score -= Math.max(0, name.length - 52) * 0.05;

  return score;
}

function dedupeEntries(entries) {
  const byPlace = new Map();
  const reservedKeys = new Map();

  entries.forEach((entry) => {
    const item = entry.item || entry;
    const key = `${item.area || "any"}:${basePlaceName(item.name)}`;
    if (!key || key.endsWith(":")) return;
    const identityKeys = getPlaceIdentityKeys(item.name);
    const conflictingKey = identityKeys.find((identityKey) => reservedKeys.has(identityKey));
    const existingMapKey = conflictingKey ? reservedKeys.get(conflictingKey) : key;
    const existing = byPlace.get(existingMapKey);
    const candidate = entry.item ? entry : { item, source: "" };
    if (!existing || scoreCanonicalLibraryEntry(item, entry.source) > scoreCanonicalLibraryEntry(existing.item, existing.source)) {
      if (existing) {
        [...byPlace.entries()].forEach(([mapKey, value]) => {
          if (value === existing) byPlace.delete(mapKey);
        });
      }
      byPlace.set(key, candidate);
      identityKeys.forEach((identityKey) => reservedKeys.set(identityKey, key));
    }
  });

  return [...byPlace.values()];
}

function cleanGuideLibrary(guide) {
  const usedIdentityKeys = new Set();
  const cleaned = { ...guide };

  ["cantMiss", "activities", "food"].forEach((source) => {
    cleaned[source] = dedupeEntries((guide[source] || []).map((item) => ({ item, source })))
      .filter((entry) => {
        const keys = getPlaceIdentityKeys(entry.item.name);
        if (keys.some((key) => usedIdentityKeys.has(key))) return false;
        keys.forEach((key) => usedIdentityKeys.add(key));
        return true;
      })
      .map((entry) => entry.item);
  });

  return cleaned;
}

const cleanedCityGuides = Object.fromEntries(
  Object.entries(rawCityGuides).map(([cityKey, guide]) => [cityKey, cleanGuideLibrary(guide)])
);

export const cityGuides = enrichCityGuidesWithHotelDetails(cleanedCityGuides);

function cleanSupplementsForCity(cityKey, supplements) {
  const guide = cleanedCityGuides[cityKey];
  const primaryKeys = new Set(
    ["cantMiss", "activities", "food"].flatMap((source) =>
      (guide[source] || []).flatMap((item) => getPlaceIdentityKeys(item.name))
    )
  );

  return dedupeEntries((supplements || []).map((item) => ({ item, source: "supplement" })))
    .filter((entry) => !getPlaceIdentityKeys(entry.item.name).some((key) => primaryKeys.has(key)))
    .map((entry) => entry.item);
}

export const categorySupplementLibraries = {
  seoul: cleanSupplementsForCity("seoul", seoulSupplements),
  tokyo: cleanSupplementsForCity("tokyo", tokyoSupplements),
  kyoto: cleanSupplementsForCity("kyoto", kyotoSupplements),
  osaka: cleanSupplementsForCity("osaka", osakaSupplements),
  bangkok: cleanSupplementsForCity("bangkok", bangkokSupplements),
  prague: cleanSupplementsForCity("prague", pragueSupplements),
  copenhagen: cleanSupplementsForCity("copenhagen", copenhagenSupplements),
  berlin: cleanSupplementsForCity("berlin", berlinSupplements),
};
