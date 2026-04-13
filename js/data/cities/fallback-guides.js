import { fallbackCityGuides as asiaFallbackCityGuides, fallbackCitySupplements as asiaFallbackCitySupplements } from './fallback-asia.js';
import { fallbackCityGuides as europeWestFallbackCityGuides, fallbackCitySupplements as europeWestFallbackCitySupplements } from './fallback-europe-west.js';
import { fallbackCityGuides as americasFallbackCityGuides, fallbackCitySupplements as americasFallbackCitySupplements } from './fallback-americas.js';
import { fallbackCityGuides as meaFallbackCityGuides, fallbackCitySupplements as meaFallbackCitySupplements } from './fallback-mea.js';

export const fallbackCityGuides = {
  ...asiaFallbackCityGuides,
  ...europeWestFallbackCityGuides,
  ...americasFallbackCityGuides,
  ...meaFallbackCityGuides,
};

export const fallbackCitySupplements = {
  ...asiaFallbackCitySupplements,
  ...europeWestFallbackCitySupplements,
  ...americasFallbackCitySupplements,
  ...meaFallbackCitySupplements,
};
