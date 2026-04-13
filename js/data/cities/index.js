import { basePlaceName, getPlaceIdentityKeys } from '../../lib/utils.js?v=triptrellis-prague-clock-cleanup-20260411-007';

const cityModuleLoaders = {
  seoul: () => import('./seoul.js'),
  tokyo: () => import('./tokyo.js'),
  kyoto: () => import('./kyoto.js'),
  osaka: () => import('./osaka.js'),
  bangkok: () => import('./bangkok.js'),
  "hoi-an": () => import('./hoi-an.js'),
  prague: () => import('./prague.js'),
  copenhagen: () => import('./copenhagen.js'),
  berlin: () => import('./berlin.js'),
  singapore: () => import('./singapore.js'),
  "hong-kong": () => import('./hong-kong.js'),
  bali: () => import('./bali.js'),
  paris: () => import('./paris.js'),
  barcelona: () => import('./barcelona.js'),
  venice: () => import('./venice.js'),
  amsterdam: () => import('./amsterdam.js'),
  lisbon: () => import('./lisbon.js'),
  "new-york": () => import('./new-york.js'),
  "los-angeles": () => import('./los-angeles.js'),
  "mexico-city": () => import('./mexico-city.js'),
  "buenos-aires": () => import('./buenos-aires.js'),
  dubai: () => import('./dubai.js'),
  istanbul: () => import('./istanbul.js'),
  marrakech: () => import('./marrakech.js'),
};

const cityModuleMeta = {
  seoul: { guide: 'seoulGuide', supplements: 'seoulSupplements' },
  tokyo: { guide: 'tokyoGuide', supplements: 'tokyoSupplements' },
  kyoto: { guide: 'kyotoGuide', supplements: 'kyotoSupplements' },
  osaka: { guide: 'osakaGuide', supplements: 'osakaSupplements' },
  bangkok: { guide: 'bangkokGuide', supplements: 'bangkokSupplements' },
  "hoi-an": { guide: 'hoiAnGuide', supplements: 'hoiAnSupplements' },
  prague: { guide: 'pragueGuide', supplements: 'pragueSupplements' },
  copenhagen: { guide: 'copenhagenGuide', supplements: 'copenhagenSupplements' },
  berlin: { guide: 'berlinGuide', supplements: 'berlinSupplements' },
  singapore: { guide: 'singaporeGuide', supplements: 'singaporeSupplements' },
  "hong-kong": { guide: 'hongKongGuide', supplements: 'hongKongSupplements' },
  bali: { guide: 'baliGuide', supplements: 'baliSupplements' },
  paris: { guide: 'parisGuide', supplements: 'parisSupplements' },
  barcelona: { guide: 'barcelonaGuide', supplements: 'barcelonaSupplements' },
  venice: { guide: 'veniceGuide', supplements: 'veniceSupplements' },
  amsterdam: { guide: 'amsterdamGuide', supplements: 'amsterdamSupplements' },
  lisbon: { guide: 'lisbonGuide', supplements: 'lisbonSupplements' },
  "new-york": { guide: 'newYorkGuide', supplements: 'newYorkSupplements' },
  "los-angeles": { guide: 'losAngelesGuide', supplements: 'losAngelesSupplements' },
  "mexico-city": { guide: 'mexicoCityGuide', supplements: 'mexicoCitySupplements' },
  "buenos-aires": { guide: 'buenosAiresGuide', supplements: 'buenosAiresSupplements' },
  dubai: { guide: 'dubaiGuide', supplements: 'dubaiSupplements' },
  istanbul: { guide: 'istanbulGuide', supplements: 'istanbulSupplements' },
  marrakech: { guide: 'marrakechGuide', supplements: 'marrakechSupplements' },
};

const expansionLoaders = {
  seoul: () => import('./expansions/asia.js'),
  tokyo: () => import('./expansions/asia.js'),
  kyoto: () => import('./expansions/asia.js'),
  osaka: () => import('./expansions/asia.js'),
  bangkok: () => import('./expansions/asia.js'),
  "hoi-an": () => import('./expansions/asia.js'),
  singapore: () => import('./expansions/asia.js'),
  "hong-kong": () => import('./expansions/asia.js'),
  bali: () => import('./expansions/asia.js'),
  prague: () => import('./expansions/europe-central.js'),
  copenhagen: () => import('./expansions/europe-central.js'),
  berlin: () => import('./expansions/europe-central.js'),
  paris: () => import('./expansions/europe-west.js'),
  barcelona: () => import('./expansions/europe-west.js'),
  venice: () => import('./expansions/europe-west.js'),
  amsterdam: () => import('./expansions/europe-west.js'),
  lisbon: () => import('./expansions/europe-west.js'),
  "new-york": () => import('./expansions/americas.js'),
  "los-angeles": () => import('./expansions/americas.js'),
  "mexico-city": () => import('./expansions/americas.js'),
  "buenos-aires": () => import('./expansions/americas.js'),
  dubai: () => import('./expansions/mea.js'),
  istanbul: () => import('./expansions/mea.js'),
  marrakech: () => import('./expansions/mea.js'),
};

const cityModuleCache = new Map();
const cityGuideCache = new Map();
const supplementLibraryCache = new Map();

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

function cleanSupplementsForCity(guide, supplements) {
  if (!guide) return [];
  const allSupplements = [...(supplements || [])];
  const primaryKeys = new Set(
    ["cantMiss", "activities", "food"].flatMap((source) =>
      (guide[source] || []).flatMap((item) => getPlaceIdentityKeys(item.name))
    )
  );

  return dedupeEntries(allSupplements.map((item) => ({ item, source: "supplement" })))
    .filter((entry) => !getPlaceIdentityKeys(entry.item.name).some((key) => primaryKeys.has(key)))
    .map((entry) => entry.item);
}

async function loadCityModuleData(cityKey) {
  if (cityModuleCache.has(cityKey)) {
    return cityModuleCache.get(cityKey);
  }

  const loader = cityModuleLoaders[cityKey];
  const meta = cityModuleMeta[cityKey];
  const loadPromise = Promise.resolve(loader ? loader() : null).then((module) => ({
    guide: module?.[meta?.guide] || null,
    supplements: module?.[meta?.supplements] || [],
  }));
  cityModuleCache.set(cityKey, loadPromise);
  return loadPromise;
}

export async function loadCityGuide(cityKey) {
  if (cityGuideCache.has(cityKey)) {
    return cityGuideCache.get(cityKey);
  }

  const loadPromise = loadCityModuleData(cityKey).then((data) => (
    data?.guide ? cleanGuideLibrary(data.guide) : null
  ));
  cityGuideCache.set(cityKey, loadPromise);
  return loadPromise;
}

export async function loadCategorySupplementLibrary(cityKey) {
  if (supplementLibraryCache.has(cityKey)) {
    return supplementLibraryCache.get(cityKey);
  }

  const loadPromise = Promise.all([
    loadCityGuide(cityKey),
    loadCityModuleData(cityKey),
    Promise.resolve(expansionLoaders[cityKey] ? expansionLoaders[cityKey]() : null),
  ]).then(([guide, data, expansionModule]) => {
    const baseSupplements = data?.supplements || [];
    const expandedSupplements = expansionModule?.expandedSupplements?.[cityKey] || [];
    return cleanSupplementsForCity(guide, [...baseSupplements, ...expandedSupplements]);
  });

  supplementLibraryCache.set(cityKey, loadPromise);
  return loadPromise;
}
