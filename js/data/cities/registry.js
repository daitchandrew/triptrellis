export const CITY_REGISTRY = {
  seoul: { module: () => import('./seoul.js'), expansionRegion: 'asia' },
  tokyo: { module: () => import('./tokyo.js'), expansionRegion: 'asia' },
  kyoto: { module: () => import('./kyoto.js'), expansionRegion: 'asia' },
  osaka: { module: () => import('./osaka.js'), expansionRegion: 'asia' },
  bangkok: { module: () => import('./bangkok.js'), expansionRegion: 'asia' },
  'hoi-an': { module: () => import('./hoi-an.js'), expansionRegion: 'asia' },
  singapore: { module: () => import('./singapore.js'), expansionRegion: 'asia' },
  'hong-kong': { module: () => import('./hong-kong.js'), expansionRegion: 'asia' },
  bali: { module: () => import('./bali.js'), expansionRegion: 'asia' },
  prague: { module: () => import('./prague.js'), expansionRegion: 'europe-central' },
  copenhagen: { module: () => import('./copenhagen.js'), expansionRegion: 'europe-central' },
  berlin: { module: () => import('./berlin.js'), expansionRegion: 'europe-central' },
  paris: { module: () => import('./paris.js'), expansionRegion: 'europe-west' },
  barcelona: { module: () => import('./barcelona.js'), expansionRegion: 'europe-west' },
  venice: { module: () => import('./venice.js'), expansionRegion: 'europe-west' },
  amsterdam: { module: () => import('./amsterdam.js'), expansionRegion: 'europe-west' },
  lisbon: { module: () => import('./lisbon.js'), expansionRegion: 'europe-west' },
  'new-york': { module: () => import('./new-york.js'), expansionRegion: 'americas' },
  'los-angeles': { module: () => import('./los-angeles.js'), expansionRegion: 'americas' },
  'mexico-city': { module: () => import('./mexico-city.js'), expansionRegion: 'americas' },
  'buenos-aires': { module: () => import('./buenos-aires.js'), expansionRegion: 'americas' },
  dubai: { module: () => import('./dubai.js'), expansionRegion: 'mea' },
  istanbul: { module: () => import('./istanbul.js'), expansionRegion: 'mea' },
  marrakech: { module: () => import('./marrakech.js'), expansionRegion: 'mea' },
};

const EXPANSION_REGION_LOADERS = {
  asia: () => import('./expansions/asia.js'),
  'europe-central': () => import('./expansions/europe-central.js'),
  'europe-west': () => import('./expansions/europe-west.js'),
  americas: () => import('./expansions/americas.js'),
  mea: () => import('./expansions/mea.js'),
};

export function getCityRegistryEntry(cityKey) {
  return CITY_REGISTRY[cityKey] || null;
}

export function getExpansionRegionLoader(regionKey) {
  return EXPANSION_REGION_LOADERS[regionKey] || null;
}

export function listRegisteredCities() {
  return Object.keys(CITY_REGISTRY);
}
