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

export const cityGuides = enrichCityGuidesWithHotelDetails(rawCityGuides);

export const categorySupplementLibraries = {
  seoul: seoulSupplements,
  tokyo: tokyoSupplements,
  kyoto: kyotoSupplements,
  osaka: osakaSupplements,
  bangkok: bangkokSupplements,
  prague: pragueSupplements,
  copenhagen: copenhagenSupplements,
  berlin: berlinSupplements,
};
