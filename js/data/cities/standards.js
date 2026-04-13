export const CATEGORY_LABELS = [
  "Nature",
  "Food",
  "Cultural Sight",
  "Shopping",
  "Museum",
  "Place to Wander",
  "Nightlife & Entertainment",
  "Amusement & Activities",
  "Other",
  "Wellness",
];

export const ALLOWED_CATEGORY_LABELS = new Set(CATEGORY_LABELS);

export function isValidCategoryLabel(label) {
  return ALLOWED_CATEGORY_LABELS.has(label);
}

export function isValidHotelVibe(vibe) {
  return typeof vibe === "string" && vibe.trim().length >= 20 && /[.]$/.test(vibe.trim());
}
