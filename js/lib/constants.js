// Constants shared across the application

export const DAY_SLOT_ORDER = ["morning", "lunch", "afternoon", "dinner", "late-night"];

export const CATEGORY_OPTIONS = [
  "all",
  "Nature",
  "Food",
  "Cultural Sight",
  "Shopping",
  "Museum",
  "Place to Wander",
  "Nightlife & Entertainment",
  "Amusement & Activities",
  "Other",
];

export const STORAGE_KEY = "triptrellis-saved-itineraries-v1";
export const LEGACY_STORAGE_KEYS = [`${"voy"}${"agr"}-saved-itineraries-v1`];

export const focusThemes = {
  food: { label: "Food & Drink", headline: "Optimized for meals worth building the trip around.", wantedTags: ["food", "luxury", "nightlife"], defaultCommentTags: ["food"] },
  culture: { label: "Culture", headline: "Optimized for the city's most meaningful places.", wantedTags: ["culture", "design", "walkability"], defaultCommentTags: ["culture"] },
  wellness: { label: "Wellness", headline: "Optimized to feel elegant, balanced, and restorative.", wantedTags: ["wellness", "culture", "food"], defaultCommentTags: ["wellness"] },
  nightlife: { label: "Nightlife", headline: "Optimized for energy after dark without wasting the days.", wantedTags: ["nightlife", "food", "design"], defaultCommentTags: ["nightlife"] },
  design: { label: "Architecture", headline: "Optimized for architecture, design districts, and visual texture.", wantedTags: ["design", "culture", "museum"], defaultCommentTags: ["design"] },
  museum: { label: "Museums", headline: "Optimized for galleries, collections, and cultural institutions.", wantedTags: ["museum", "culture", "design"], defaultCommentTags: ["culture", "museum"] },
  shopping: { label: "Shopping & Style", headline: "Optimized for markets, boutiques, and the city's best retail.", wantedTags: ["shopping", "food", "design"], defaultCommentTags: ["shopping"] },
  nature: { label: "Nature", headline: "Optimized for parks, outdoor spaces, and natural settings.", wantedTags: ["nature", "wellness", "culture"], defaultCommentTags: ["wellness", "nature"] },
  luxury: { label: "Luxury & Splurge", headline: "Optimized for the best hotels, restaurants, and experiences.", wantedTags: ["luxury", "food", "design"], defaultCommentTags: ["luxury"] },
};

export const budgetProfiles = {
  luxury: {
    label: "Luxury",
    headline: "Luxury is prioritizing splurge hotels, polished neighborhoods, and places worth planning ahead for.",
    wantedTags: ["luxury", "design", "nightlife"],
    avoidTags: [],
    reservationWeight: 1.1,
  },
  premium: {
    label: "Premium",
    headline: "Premium is balancing strong hotels, standout meals, and high-value city coverage without leaning too maximal.",
    wantedTags: ["food", "culture", "design"],
    avoidTags: [],
    reservationWeight: 0.45,
  },
  smart: {
    label: "Smart spend",
    headline: "Smart spend is favoring strong value, easier logistics, and great city experiences that do not require constant splurges.",
    wantedTags: ["value", "culture", "food", "walkability"],
    avoidTags: ["luxury"],
    reservationWeight: -0.35,
  },
};

export const paceRules = {
  slow: { highlightsPerDay: 4, label: "Light pace with breathing room." },
  balanced: { highlightsPerDay: 5, label: "Balanced pace with full but graceful days." },
  packed: { highlightsPerDay: 6, label: "Packed pace with ambitious coverage and tighter routing." },
};

export function buildMergedFocusTheme(focuses) {
  const valid = focuses.filter((f) => focusThemes[f]);
  if (!valid.length) valid.push("culture");
  const primary = focusThemes[valid[0]];
  const allWantedTags = [...new Set(valid.flatMap((f) => focusThemes[f].wantedTags))];
  const allDefaultTags = [...new Set(valid.flatMap((f) => focusThemes[f].defaultCommentTags))];
  const headline = valid.length === 1
    ? primary.headline
    : `Optimized for ${valid.map((f) => focusThemes[f].label.toLowerCase()).join(", ")}.`;
  return { ...primary, wantedTags: allWantedTags, defaultCommentTags: allDefaultTags, headline };
}

export const noteKeywordRules = [
  { match: ["coffee", "cafe", "bakery", "pastry"], tags: ["food", "wellness", "design"] },
  { match: ["shopping", "boutique", "fashion", "vintage"], tags: ["shopping", "design"] },
  { match: ["museum", "history", "temple", "shrine", "palace"], tags: ["culture"] },
  { match: ["nightlife", "bar", "cocktail", "club", "late"], tags: ["nightlife"] },
  { match: ["quiet", "slow", "relax", "rest", "wellness", "spa"], tags: ["wellness"] },
  { match: ["luxury", "splurge", "special"], tags: ["luxury", "food"] },
  { match: ["local", "street food", "authentic"], tags: ["food", "culture"] },
  { match: ["design", "architecture", "modern"], tags: ["design"] },
  { match: ["nature", "park", "garden", "river"], tags: ["wellness"] },
  { match: ["kid", "family"], tags: ["wellness", "culture"] },
  { match: ["romantic"], tags: ["luxury", "wellness", "nightlife"] },
  { match: ["view", "sunset", "rooftop"], tags: ["design", "nightlife", "wellness"] },
];

export const noteIntentRules = [
  { match: ["not too touristy", "less touristy", "avoid touristy", "not touristy"], flags: ["avoid_touristy", "prefer_local"] },
  { match: ["walkable", "easy to walk", "on foot", "without transit"], flags: ["walkable"] },
  { match: ["romantic", "couples trip", "date trip"], flags: ["romantic"] },
  { match: ["first night", "arrival night", "first evening"], flags: ["first_night"] },
  { match: ["rainy day", "if it rains", "rain plan", "bad weather"], flags: ["rainy_day"] },
  { match: ["family-friendly", "family friendly", "with kids", "kid-friendly", "traveling with kids"], flags: ["family"] },
  { match: ["solo trip", "traveling solo", "by myself", "on my own"], flags: ["solo"] },
  { match: ["birthday", "birthday trip", "birthday dinner"], flags: ["birthday"] },
  { match: ["anniversary", "honeymoon"], flags: ["anniversary", "romantic"] },
];
