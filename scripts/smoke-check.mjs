import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { loadCategorySupplementLibrary, loadCityGuide, listSupportedCities } from "../js/data/cities/index.js";

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

    summaries.push(`${guide.label}: ${hotelCount} hotels, ${coreCount} core picks, ${supplements.length} supplements`);
  }

  console.log("TripTrellis smoke check passed.");
  summaries.forEach((summary) => console.log(`- ${summary}`));
}

main().catch((error) => {
  console.error("TripTrellis smoke check failed.");
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
