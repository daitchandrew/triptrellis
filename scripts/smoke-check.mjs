import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { loadCategorySupplementLibrary, loadCityGuide, listSupportedCities } from "../js/data/cities/index.js";
import { CATEGORY_LABELS, isValidCategoryLabel, isValidHotelVibe } from "../js/data/cities/standards.js";
import { buildTripPlan } from "../js/lib/plan-builder.js";
import { populateSuggestedItinerary } from "../js/lib/itinerary.js";
import { hydratePlan, serializePlan } from "../js/lib/state.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

async function readPlannerCityOptions() {
  const html = await readFile(path.join(rootDir, "index.html"), "utf8");
  const citySelectMatch = html.match(/<select[^>]+id="city"[\s\S]*?>([\s\S]*?)<\/select>/i);
  if (!citySelectMatch) {
    throw new Error("Could not find the city select in index.html.");
  }

  return [...citySelectMatch[1].matchAll(/<option\s+value="([^"]+)"/g)].map((match) => match[1]);
}

async function main() {
  const plannerCities = await readPlannerCityOptions();
  const supportedCities = listSupportedCities();
  const missingLoaders = plannerCities.filter((cityKey) => !supportedCities.includes(cityKey));

  if (missingLoaders.length) {
    throw new Error(`Cities present in the planner but missing loaders: ${missingLoaders.join(", ")}`);
  }

  const summaries = [];

  for (const cityKey of plannerCities) {
    const guide = await loadCityGuide(cityKey);
    const supplements = await loadCategorySupplementLibrary(cityKey);

    if (!guide?.label) {
      throw new Error(`Guide failed to load for "${cityKey}".`);
    }

    const hotelCount = Object.values(guide.hotels || {}).flat().length;
    const coreCount = (guide.cantMiss?.length || 0) + (guide.activities?.length || 0) + (guide.food?.length || 0);

    if (!hotelCount) {
      throw new Error(`No hotel inventory found for "${cityKey}".`);
    }

    if (!coreCount) {
      throw new Error(`No core library content found for "${cityKey}".`);
    }

    const invalidSupplementLabels = supplements
      .map((entry) => entry?.categoryLabel)
      .filter((label) => label && !isValidCategoryLabel(label));

    if (invalidSupplementLabels.length) {
      throw new Error(
        `Invalid supplement category labels for "${cityKey}": ${[...new Set(invalidSupplementLabels)].join(", ")}`
      );
    }

    const guideCollections = [
      ...(guide.cantMiss || []),
      ...(guide.activities || []),
      ...(guide.food || []),
    ];
    const invalidGuideLabels = guideCollections
      .map((entry) => entry?.categoryLabel)
      .filter((label) => label && !isValidCategoryLabel(label));

    if (invalidGuideLabels.length) {
      throw new Error(
        `Invalid core category labels for "${cityKey}": ${[...new Set(invalidGuideLabels)].join(", ")}`
      );
    }

    const hotelVibes = Object.values(guide.hotels || {}).flat().map((hotel) => hotel?.vibe);
    const invalidHotelVibes = hotelVibes.filter((vibe) => !isValidHotelVibe(vibe));

    if (invalidHotelVibes.length) {
      throw new Error(`One or more hotel vibe lines failed validation for "${cityKey}".`);
    }

    summaries.push(`${guide.label}: ${hotelCount} hotels, ${coreCount} core picks, ${supplements.length} supplements`);
  }

  const sampleCityKeys = ["seoul", "hoi-an", "paris", "new-york"];
  for (const cityKey of sampleCityKeys) {
    const guide = await loadCityGuide(cityKey);
    const supplements = await loadCategorySupplementLibrary(cityKey);
    const startDate = new Date("2026-05-01");
    const endDate = new Date("2026-05-04");
    const plan = buildTripPlan({
      cityKey,
      guide,
      startDate,
      endDate,
      budget: "premium",
      pace: "balanced",
      focus: "culture",
      focuses: ["culture", "food"],
      notes: "Walkable base, one special dinner, and calmer arrival day.",
      hotelStatus: "need-hotel",
      existingHotels: [],
      supplements,
    }, () => [], populateSuggestedItinerary);

    if (!plan.hotelBase?.hotelName) {
      throw new Error(`Trip generation failed to choose a hotel base for "${cityKey}".`);
    }

    if (!plan.days?.length) {
      throw new Error(`Trip generation failed to create days for "${cityKey}".`);
    }

    if (!plan.dontMiss?.length) {
      throw new Error(`Trip generation failed to create anchors for "${cityKey}".`);
    }

    const serialized = serializePlan(plan);
    const hydrated = hydratePlan(serialized);

    if (!serialized.title?.includes(guide.label)) {
      throw new Error(`Serialized title failed for "${cityKey}".`);
    }

    if (hydrated.hotelBase?.hotelName !== plan.hotelBase?.hotelName) {
      throw new Error(`Hydration changed the hotel base for "${cityKey}".`);
    }

    if ((hydrated.days || []).length !== (plan.days || []).length) {
      throw new Error(`Hydration changed the day count for "${cityKey}".`);
    }
  }

  console.log("TripTrellis smoke check passed.");
  console.log(`- Canonical categories: ${CATEGORY_LABELS.join(", ")}`);
  summaries.forEach((summary) => console.log(`- ${summary}`));
  console.log("- Sample generation checks: seoul, hoi-an, paris, new-york");
}

main().catch((error) => {
  console.error("TripTrellis smoke check failed.");
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
