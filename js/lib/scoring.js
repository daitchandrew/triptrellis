// Scoring and ranking functions

import { normalizeText, stableSeedShuffle } from "./utils.js";
import { focusThemes, budgetProfiles, noteKeywordRules, noteIntentRules, buildMergedFocusTheme } from "./constants.js";
import { categorizeLibraryItem } from "./infer.js";

const NOTE_STOPWORDS = new Set([
  "the", "and", "for", "with", "that", "this", "from", "into", "want", "wants", "wanting",
  "have", "having", "more", "less", "very", "just", "really", "also", "than", "then",
  "about", "around", "after", "before", "near", "good", "great", "best", "place", "places",
  "trip", "days", "day", "night", "nights", "some", "much", "still", "feel", "feels",
  "make", "makes", "keep", "stops", "stop", "things", "thing", "would", "like",
]);

function extractPreferredTerms(text) {
  return [...new Set(
    text
      .split(/[^a-z0-9]+/g)
      .map((token) => token.trim())
      .filter((token) => token.length >= 4 && !NOTE_STOPWORDS.has(token))
  )];
}

function extractAvoidTerms(text) {
  const patterns = [
    /\b(?:no|avoid|skip|not into|dont want|don't want)\s+([a-z0-9\s&-]+)/g,
  ];
  const results = [];
  patterns.forEach((pattern) => {
    for (const match of text.matchAll(pattern)) {
      const phrase = normalizeText(match[1] || "");
      phrase.split(/[^a-z0-9]+/g).forEach((token) => {
        if (token.length >= 4 && !NOTE_STOPWORDS.has(token)) {
          results.push(token);
        }
      });
    }
  });
  return [...new Set(results)];
}

function getIntentPhraseTokens(text) {
  const tokens = [];
  noteIntentRules.forEach((rule) => {
    rule.match.forEach((phrase) => {
      if (!text.includes(phrase)) return;
      phrase.split(/[^a-z0-9]+/g).forEach((token) => {
        if (token.length >= 4 && !NOTE_STOPWORDS.has(token)) {
          tokens.push(token);
        }
      });
    });
  });
  return [...new Set(tokens)];
}

function scoreNoteTextMatch(haystack, positiveTerms, negativeTerms, positiveWeight = 0.7, negativeWeight = 1.3) {
  let score = 0;
  positiveTerms.forEach((term) => {
    if (haystack.includes(term)) {
      score += positiveWeight;
    }
  });
  negativeTerms.forEach((term) => {
    if (haystack.includes(term)) {
      score -= negativeWeight;
    }
  });
  return score;
}

function getIntentFlags(text) {
  const flags = new Set();
  noteIntentRules.forEach((rule) => {
    if (rule.match.some((phrase) => text.includes(phrase))) {
      rule.flags.forEach((flag) => flags.add(flag));
    }
  });
  return [...flags];
}

function scoreIntentFlagsForHotel(hotel, guide, noteProfile) {
  let score = 0;
  const haystack = normalizeText(`${hotel.name} ${hotel.description || ""} ${hotel.vibe || ""} ${(hotel.bestFor || []).join(" ")} ${guide.hotelAreas[hotel.area]?.label || ""}`);
  const area = guide.hotelAreas[hotel.area];

  if (noteProfile.intentFlags.includes("walkable") && (hotel.bestFor || []).includes("walkability")) score += 2.1;
  if (noteProfile.intentFlags.includes("walkable") && area?.strengths?.includes("walkability")) score += 1.4;

  if (noteProfile.intentFlags.includes("romantic")) {
    if ((hotel.bestFor || []).includes("romance")) score += 2.4;
    if ((hotel.bestFor || []).includes("luxury")) score += 1.2;
    if (haystack.includes("quiet") || haystack.includes("romantic") || haystack.includes("serene")) score += 1.1;
  }

  if (noteProfile.intentFlags.includes("solo")) {
    if ((hotel.bestFor || []).includes("value")) score += 1.2;
    if (haystack.includes("central") || haystack.includes("easy") || haystack.includes("practical")) score += 1.1;
  }

  if (noteProfile.intentFlags.includes("family")) {
    if ((hotel.bestFor || []).includes("wellness")) score += 0.8;
    if (haystack.includes("large") || haystack.includes("spacious") || haystack.includes("pool")) score += 1.2;
  }

  if (noteProfile.intentFlags.includes("birthday") || noteProfile.intentFlags.includes("anniversary")) {
    if ((hotel.bestFor || []).includes("luxury")) score += 1.8;
    if (haystack.includes("spa") || haystack.includes("view") || haystack.includes("special")) score += 1.1;
  }

  if (noteProfile.intentFlags.includes("avoid_touristy")) {
    if (haystack.includes("first-timer") || haystack.includes("first trip") || haystack.includes("central")) score -= 1.6;
  }

  if (noteProfile.intentFlags.includes("prefer_local")) {
    if (haystack.includes("local") || haystack.includes("neighborhood") || haystack.includes("character")) score += 1.4;
  }

  return score;
}

function scoreIntentFlagsForItem(item, guide, noteProfile, categoryLabel, options) {
  let score = 0;
  const haystack = normalizeText(`${item.name} ${item.description || ""} ${item.reservation || ""} ${item.cuisine || ""} ${item.michelinStatus || ""} ${item.guideNote || ""} ${(item.tags || []).join(" ")} ${guide.hotelAreas[item.area]?.label || ""} ${categoryLabel}`);

  if (noteProfile.intentFlags.includes("walkable")) {
    if ((item.tags || []).includes("walkability")) score += 1.8;
    if (categoryLabel === "Place to Wander") score += 1.2;
  }

  if (noteProfile.intentFlags.includes("romantic")) {
    if ((item.tags || []).includes("wellness") || (item.tags || []).includes("luxury")) score += 1.2;
    if (haystack.includes("sunset") || haystack.includes("garden") || haystack.includes("view") || haystack.includes("lantern") || haystack.includes("romantic")) score += 1.3;
  }

  if (noteProfile.intentFlags.includes("first_night")) {
    if (item.area === Object.keys(guide.hotelAreas)[0] || haystack.includes("easy") || haystack.includes("low-friction")) score += 0.8;
    if (options?.includeTimingBoost && item.timing === "evening") score += 1.1;
  }

  if (noteProfile.intentFlags.includes("rainy_day")) {
    if (["Museum", "Shopping", "Food"].includes(categoryLabel)) score += 1.8;
    if (haystack.includes("indoor") || haystack.includes("gallery") || haystack.includes("spa")) score += 1.1;
    if (categoryLabel === "Nature") score -= 1.6;
  }

  if (noteProfile.intentFlags.includes("family")) {
    if ((item.tags || []).includes("wellness") || categoryLabel === "Amusement & Activities") score += 1.5;
    if (haystack.includes("family") || haystack.includes("park") || haystack.includes("aquarium")) score += 1.2;
    if (categoryLabel === "Nightlife & Entertainment") score -= 1.8;
  }

  if (noteProfile.intentFlags.includes("solo")) {
    if (categoryLabel === "Place to Wander" || categoryLabel === "Museum") score += 1.2;
    if (haystack.includes("easy") || haystack.includes("casual") || haystack.includes("counter")) score += 0.9;
  }

  if (noteProfile.intentFlags.includes("birthday") || noteProfile.intentFlags.includes("anniversary")) {
    if ((item.tags || []).includes("luxury")) score += 1.7;
    if (haystack.includes("tasting") || haystack.includes("rooftop") || haystack.includes("special") || haystack.includes("view")) score += 1.2;
  }

  if (noteProfile.intentFlags.includes("avoid_touristy")) {
    if (haystack.includes("classic") || haystack.includes("iconic") || haystack.includes("headline") || haystack.includes("most famous")) score -= 1.4;
  }

  if (noteProfile.intentFlags.includes("prefer_local")) {
    if (haystack.includes("local") || haystack.includes("neighborhood") || haystack.includes("less obvious")) score += 1.3;
  }

  return score;
}

export function buildNoteProfile(notes, guide, focuses) {
  const focusArr = Array.isArray(focuses) ? focuses : [focuses];
  const text = normalizeText(notes);
  const tags = new Set(focusArr.flatMap((f) => focusThemes[f]?.defaultCommentTags || []));
  const boostedAreas = new Set();
  const intentPhraseTokens = getIntentPhraseTokens(text);
  const preferredTerms = extractPreferredTerms(text).filter((term) => !intentPhraseTokens.includes(term));
  const avoidTerms = extractAvoidTerms(text);
  const intentFlags = getIntentFlags(text);

  noteKeywordRules.forEach((rule) => {
    if (rule.match.some((word) => text.includes(word))) {
      rule.tags.forEach((tag) => tags.add(tag));
    }
  });

  Object.entries(guide.hotelAreas).forEach(([areaKey, area]) => {
    if (text.includes(areaKey) || text.includes(normalizeText(area.label))) {
      boostedAreas.add(areaKey);
    }
  });

  return {
    text,
    tags: [...tags],
    boostedAreas: [...boostedAreas],
    preferredTerms,
    avoidTerms,
    intentFlags,
    hasNotes: Boolean(text),
    seed: hashString(text || `${guide.label}-${focusArr.join(",")}`),
  };
}

function hashString(value) {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) >>> 0;
  }
  return hash;
}

export function detectAreaFromText(guide, text) {
  const normalized = normalizeText(text);
  const entry = Object.entries(guide.hotelAreas).find(([key, area]) => normalized.includes(key) || normalized.includes(normalizeText(area.label)));
  return entry ? entry[0] : "";
}

export function bestAreaFromNotes(guide, noteProfile) {
  if (!noteProfile.boostedAreas.length) {
    return "";
  }
  return noteProfile.boostedAreas[0];
}

export function scoreHotel(hotel, guide, focus, noteProfile) {
  let score = 1;
  const focusArr = Array.isArray(focus) ? focus : [focus];
  const wantedTags = [...new Set(focusArr.flatMap((f) => focusThemes[f]?.wantedTags || []))];
  wantedTags.forEach((tag) => {
    if (hotel.bestFor.includes(tag)) {
      score += 2.2;
    }
  });

  noteProfile.tags.forEach((tag) => {
    if (hotel.bestFor.includes(tag)) {
      score += 1.2;
    }
  });

  noteProfile.boostedAreas.forEach((areaKey) => {
    if (hotel.area === areaKey) {
      score += 2.4;
    }
  });

  const hotelHaystack = normalizeText(`${hotel.name} ${hotel.description || ""} ${hotel.vibe || ""} ${(hotel.bestFor || []).join(" ")} ${guide.hotelAreas[hotel.area]?.label || ""}`);
  score += scoreNoteTextMatch(hotelHaystack, noteProfile.preferredTerms || [], noteProfile.avoidTerms || [], 1.25, 2.2);
  score += scoreIntentFlagsForHotel(hotel, guide, noteProfile);

  return score;
}

export function rankHotels({ guide, budget, focuses, noteProfile }) {
  const focus = Array.isArray(focuses) ? focuses[0] : focuses;
  return (guide.hotels[budget] || [])
    .map((hotel) => ({
      hotel,
      score: scoreHotel(hotel, guide, focus, noteProfile),
    }))
    .sort((left, right) => right.score - left.score);
}

export function scoreCollection(items, guide, hotelBase, noteProfile, focuses, budget, options) {
  const scored = items.map((item, index) => ({
    ...item,
    areaLabel: guide.hotelAreas[item.area]?.label || item.area,
    score: scoreItem(item, guide, hotelBase, noteProfile, focuses, budget, options) - index * 0.01,
  }));
  const shuffled = stableSeedShuffle(scored, noteProfile.seed);
  return shuffled.sort((left, right) => right.score - left.score);
}

export function scoreItem(item, guide, hotelBase, noteProfile, focuses, budget, options) {
  let score = 1;
  const focusArr = Array.isArray(focuses) ? focuses : [focuses];
  const primaryArea = hotelBase.areaKey;
  const adjacent = new Set(guide.areaAdjacency[primaryArea] || []);
  const categoryLabel = item.categoryLabel || categorizeLibraryItem(item, options.baseCategory);
  const budgetProfile = budgetProfiles[budget];
  const focusTheme = buildMergedFocusTheme(focusArr);

  if (item.area === primaryArea) {
    score += 1.8;
  } else if (adjacent.has(item.area)) {
    score += 1.15;
  }

  noteProfile.tags.forEach((tag) => {
    if (item.tags?.includes(tag)) {
      score += 1.8;
    }
  });

  focusTheme.wantedTags.forEach((tag) => {
    if (item.tags?.includes(tag)) {
      score += 1.7;
    }
  });

  budgetProfile.wantedTags.forEach((tag) => {
    if (item.tags?.includes(tag)) {
      score += 1.25;
    }
  });

  budgetProfile.avoidTags.forEach((tag) => {
    if (item.tags?.includes(tag)) {
      score -= 1.5;
    }
  });

  noteProfile.boostedAreas.forEach((areaKey) => {
    if (item.area === areaKey) {
      score += 2.4;
    }
  });

  const itemHaystack = normalizeText(`${item.name} ${item.description || ""} ${item.reservation || ""} ${item.cuisine || ""} ${item.michelinStatus || ""} ${item.guideNote || ""} ${(item.tags || []).join(" ")} ${guide.hotelAreas[item.area]?.label || ""} ${categoryLabel}`);
  score += scoreNoteTextMatch(itemHaystack, noteProfile.preferredTerms || [], noteProfile.avoidTerms || [], 1.05, 1.9);
  score += scoreIntentFlagsForItem(item, guide, noteProfile, categoryLabel, options);

  if (categoryLabel === "Food" && item.michelinStatus) {
    if (item.michelinStatus === "Three Stars") score += 2.8;
    else if (item.michelinStatus === "Two Stars") score += 2.2;
    else if (item.michelinStatus === "One Star") score += 1.6;
    else if (item.michelinStatus === "Bib Gourmand") score += 1.15;
    else score += 0.7;
  }

  const areaStrengths = guide.hotelAreas[item.area]?.strengths || [];
  areaStrengths.forEach((strength) => {
    if (noteProfile.tags.includes(strength)) {
      score += 0.6;
    }
    if (focusTheme.wantedTags.includes(strength)) {
      score += 0.55;
    }
    if (budgetProfile.wantedTags.includes(strength)) {
      score += 0.45;
    }
  });

  if (options.includeTimingBoost) {
    if (noteProfile.tags.includes("nightlife") && item.timing === "evening") {
      score += 0.9;
    }
    if (noteProfile.tags.includes("wellness") && item.timing === "morning") {
      score += 0.7;
    }
  }

  const reservationText = normalizeText(item.reservation || "");
  if (reservationText.includes("book") || reservationText.includes("reserve")) {
    score += budgetProfile.reservationWeight;
  }

  if (focusArr.includes("food") && categoryLabel === "Food") score += 3;
  if (focusArr.includes("culture") && ["Cultural Sight", "Museum", "Place to Wander"].includes(categoryLabel)) score += 2.6;
  if (focusArr.includes("wellness") && ["Nature", "Place to Wander", "Food"].includes(categoryLabel)) score += 2.1;
  if (focusArr.includes("nightlife") && ["Nightlife & Entertainment", "Food", "Amusement & Activities"].includes(categoryLabel)) score += 2.8;
  if (focusArr.includes("design") && ["Place to Wander", "Cultural Sight", "Museum"].includes(categoryLabel)) score += 2.2;
  if (focusArr.includes("museum") && categoryLabel === "Museum") score += 3.2;
  if (focusArr.includes("shopping") && categoryLabel === "Shopping") score += 3;
  if (focusArr.includes("nature") && categoryLabel === "Nature") score += 3.2;
  if (focusArr.includes("luxury") && ["Food", "Nightlife & Entertainment", "Shopping"].includes(categoryLabel)) score += 2.5;

  if (budget === "luxury" && ["Food", "Nightlife & Entertainment", "Shopping"].includes(categoryLabel)) score += 1.2;
  if (budget === "smart" && ["Museum", "Cultural Sight", "Place to Wander", "Food"].includes(categoryLabel)) score += 1.1;

  return score;
}

export function scoreDayForItem(day, item, guide, hotelBase, totalDays, focus) {
  let score = 10 - (day.itineraryItems || []).length;
  const adjacent = new Set(guide.areaAdjacency[item.area] || []);
  const categoryLabel = item.categoryLabel || categorizeLibraryItem(item, item.category);

  if (day.areaKeysUsed.includes(item.area)) {
    score += 4.2;
  } else if (day.areaKeysUsed.some((areaKey) => adjacent.has(areaKey))) {
    score += 1.8;
  }

  if (item.area === hotelBase.areaKey) {
    score += 0.55;
  }

  if (item.timing === "evening" && day.title.toLowerCase().includes("departure")) {
    score -= 6;
  }

  if (item.timing === "morning" && day.title.toLowerCase().includes("arrival")) {
    score -= 2;
  }

  if (totalDays <= 2 && item.category === "sight") {
    score += 1;
  }

  const focusArr2 = Array.isArray(focus) ? focus : [focus];
  if (focusArr2.includes("food") && categoryLabel === "Food") {
    score += item.timing === "evening" ? 2 : 1;
  }

  if (focusArr2.includes("culture") && ["Cultural Sight", "Museum"].includes(categoryLabel) && item.timing !== "evening") {
    score += 1.6;
  }

  if (focusArr2.includes("wellness") && ["Nature", "Place to Wander"].includes(categoryLabel) && item.timing !== "evening") {
    score += 1.4;
  }

  if (focusArr2.includes("nightlife") && categoryLabel === "Nightlife & Entertainment") {
    score += 2.2;
  }

  return score;
}
