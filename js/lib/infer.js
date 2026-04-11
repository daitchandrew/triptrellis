// Inference functions: cuisine, price tier, category, description polishing

import { normalizeText } from "./utils.js";

function getCuisineGroups(cityKey = "") {
  const defaultGroups = [
    [["indian"], "Indian"],
    [["taco", "mexican"], "Mexican"],
    [["levantine", "kebab"], "Middle Eastern"],
    [["french"], "French"],
    [["italian", "pizza", "pasta"], "Italian"],
    [["german", "currywurst"], "German"],
    [["viennese", "austrian"], "Central European"],
    [["modern european", "european cafe-brasserie", "seasonal european", "european"], "European"],
    [["steak", "barbecue", "grill"], "Steakhouse & Grill"],
    [["seafood"], "Seafood"],
    [["vegetarian"], "Vegetarian"],
    [["wine bar"], "Wine Bar"],
    [["burger", "fried chicken"], "Casual Comfort Food"],
    [["dessert", "donut", "sweets", "tea and sweets"], "Desserts"],
    [["coffee", "bakery", "pastries", "breakfast", "brunch", "cafe"], "Cafe & Bakery"],
    [["market", "street food", "food hall"], "Market & Street Food"],
    [["tasting", "fine dining", "contemporary tasting", "creative tasting", "seasonal tasting"], "Fine Dining"],
  ];

  const citySpecific = {
    seoul: [
      [["korean barbecue", "barbecue", "hanwoo"], "Korean BBQ"],
      [["fried chicken"], "Korean Fried Chicken"],
      [["bibimbap", "gukbap", "rice bowl"], "Bibimbap & Rice Bowls"],
      [["samgyetang", "dakhanmari", "gomtang"], "Korean Soups & Hot Pot"],
      [["naengmyeon", "kalguksu", "noodles and dumplings", "jajang", "ramyeon"], "Korean Noodles & Dumplings"],
      [["jokbal"], "Late-Night Korean"],
      [["traditional tea", "tea and sweets"], "Tea & Traditional Sweets"],
      [["buddhist temple"], "Temple Cuisine"],
      [["modern korean", "fine-dining korean", "refined korean", "traditional korean comfort", "contemporary korean", "creative korean", "korean"], "Korean"],
    ],
    tokyo: [
      [["omakase", "sushi"], "Sushi"],
      [["kaiseki"], "Kaiseki"],
      [["ramen", "tsukemen"], "Ramen"],
      [["udon", "soba"], "Noodles"],
      [["tempura"], "Tempura"],
      [["yakitori"], "Yakitori"],
      [["izakaya", "bar hopping"], "Izakaya"],
      [["okonomiyaki", "omurice", "unagi", "gyukatsu"], "Japanese Specialties"],
      [["japanese grill", "seafood-focused japanese", "japanese"], "Japanese"],
      [["department-store food hall", "food hall"], "Depachika & Food Hall"],
      [["coffee", "kissa", "bakery", "pastries"], "Cafe & Bakery"],
      [["french-japanese", "creative japanese tasting", "innovative japanese tasting"], "Fine Dining"],
    ],
    kyoto: [
      [["kaiseki", "tofu"], "Kyoto Kaiseki & Tofu"],
      [["tea", "sweets"], "Tea & Sweets"],
      [["ramen", "udon", "soba"], "Japanese Noodles"],
      [["tempura", "yakitori", "izakaya"], "Japanese Specialties"],
      [["bakery", "coffee", "breakfast"], "Cafe & Bakery"],
      [["japanese"], "Japanese"],
    ],
    osaka: [
      [["okonomiyaki"], "Okonomiyaki"],
      [["takoyaki"], "Takoyaki"],
      [["kushikatsu"], "Kushikatsu"],
      [["yakitori"], "Yakitori"],
      [["ramen"], "Ramen"],
      [["sushi"], "Sushi"],
      [["kaiseki"], "Kaiseki"],
      [["bakery", "coffee", "dessert", "cake"], "Cafe & Bakery"],
      [["barbecue", "yakiniku", "grill"], "Japanese Grill"],
      [["japanese"], "Japanese"],
    ],
    bangkok: [
      [["southern thai"], "Southern Thai"],
      [["isan", "papaya salad"], "Isan Thai"],
      [["thai"], "Thai"],
      [["street food", "market", "food hall"], "Street Food & Markets"],
      [["coffee", "bakery", "dessert"], "Cafe & Bakery"],
      [["seafood"], "Seafood"],
    ],
    prague: [
      [["cafe", "coffee", "bakery", "dessert"], "Cafe & Bakery"],
      [["czech", "central european", "viennese", "austrian"], "Czech & Central European"],
      [["wine bar"], "Wine Bar"],
    ],
    copenhagen: [
      [["smorrebrod", "smørrebrød"], "Smorrebrod"],
      [["new nordic", "nordic", "danish", "korean-nordic"], "Nordic"],
      [["bakery", "coffee", "breakfast"], "Cafe & Bakery"],
      [["wine bar"], "Wine Bar"],
    ],
    berlin: [
      [["currywurst"], "Currywurst"],
      [["kebab"], "Kebab"],
      [["brunch", "coffee", "donuts", "bakery"], "Cafe & Bakery"],
      [["modern european", "seasonal european", "european"], "Modern European"],
      [["tasting", "fine dining"], "Fine Dining"],
    ],
  };

  return [...(citySpecific[cityKey] || []), ...defaultGroups];
}

export function normalizeCuisineLabel(value, cityKey = "") {
  const haystack = normalizeText(value);
  const match = getCuisineGroups(cityKey).find(([needles]) => needles.some((needle) => haystack.includes(needle)));
  return match ? match[1] : "Local Specialty";
}

export function inferFoodCuisine(item) {
  if (item.cuisine) {
    return normalizeCuisineLabel(item.cuisine, item.cityKey);
  }

  const haystack = normalizeText(`${item.name} ${item.description} ${(item.tags || []).join(" ")}`);
  const match = getCuisineGroups(item.cityKey).find(([needles]) => needles.some((needle) => haystack.includes(needle)));
  if (match) {
    return match[1];
  }

  return "Local Specialty";
}

export function inferFoodPriceTier(item) {
  if (item.priceTier) {
    return item.priceTier;
  }

  const haystack = normalizeText(`${item.name} ${item.description} ${item.reservation} ${item.cuisine}`);
  const tags = new Set(item.tags || []);

  if (
    tags.has("luxury")
    || haystack.includes("michelin")
    || haystack.includes("fine dining")
    || haystack.includes("tasting")
    || haystack.includes("omakase")
    || haystack.includes("kaiseki")
    || haystack.includes("book months")
    || haystack.includes("book far")
  ) {
    return "$$$$";
  }

  if (
    haystack.includes("reserve ahead")
    || haystack.includes("reserve early")
    || haystack.includes("book ahead")
    || haystack.includes("splurge")
    || haystack.includes("wagyu")
    || haystack.includes("hanwoo")
    || haystack.includes("high-end")
  ) {
    return "$$$";
  }

  if (
    haystack.includes("brunch")
    || haystack.includes("coffee")
    || haystack.includes("bakery")
    || haystack.includes("dessert")
    || haystack.includes("market")
    || haystack.includes("food hall")
    || haystack.includes("street food")
    || haystack.includes("casual")
    || haystack.includes("no booking")
    || haystack.includes("flexible")
  ) {
    return "$";
  }

  return "$$";
}

export function inferFoodTiming(item) {
  if (item.timing && item.timing !== "evening") {
    return item.timing;
  }

  const haystack = normalizeText(`${item.name} ${item.description} ${item.reservation} ${item.cuisine}`);

  if (
    haystack.includes("breakfast")
    || haystack.includes("brunch")
    || haystack.includes("coffee")
    || haystack.includes("bakery")
    || haystack.includes("pastries")
    || haystack.includes("toast")
    || haystack.includes("dessert")
    || haystack.includes("food hall")
  ) {
    return "morning";
  }

  if (
    haystack.includes("market")
    || haystack.includes("street food")
    || haystack.includes("ramen")
    || haystack.includes("tsukemen")
    || haystack.includes("tonkatsu")
    || haystack.includes("lunch")
    || haystack.includes("depachika")
    || haystack.includes("casual")
  ) {
    return "afternoon";
  }

  if (
    haystack.includes("tasting")
    || haystack.includes("omakase")
    || haystack.includes("kaiseki")
    || haystack.includes("fine dining")
    || haystack.includes("reserve")
    || haystack.includes("book")
    || haystack.includes("cocktail")
  ) {
    return "evening";
  }

  return item.timing || "evening";
}

export function inferActivityPriceTier(item) {
  if (item.priceTier) {
    return item.priceTier;
  }
  const tags = new Set(item.tags || []);
  const haystack = normalizeText(`${item.name} ${item.description} ${item.reservation} ${item.categoryLabel} ${(item.tags || []).join(" ")}`);
  const categoryLabel = (item.categoryLabel || "").toLowerCase();

  if (
    tags.has("luxury")
    || haystack.includes("luxury")
    || haystack.includes("splurge")
    || haystack.includes("private")
    || haystack.includes("spa")
    || haystack.includes("well ahead")
  ) {
    return "$$$$";
  }
  if (
    categoryLabel === "place to wander"
    || categoryLabel === "nature"
    || categoryLabel === "shopping"
    || haystack.includes("walk")
    || haystack.includes("stroll")
    || haystack.includes("wander")
    || haystack.includes("street")
    || haystack.includes("lane")
    || haystack.includes("park")
    || haystack.includes("river")
    || haystack.includes("beach")
    || haystack.includes("forest")
    || haystack.includes("trail")
    || haystack.includes("market")
    || haystack.includes("village")
  ) {
    return "Free";
  }
  if (
    haystack.includes("observatory")
    || haystack.includes("tower")
    || haystack.includes("theme park")
    || haystack.includes("ticketed")
    || haystack.includes("immersive")
    || haystack.includes("show")
  ) {
    return "$$$";
  }
  if (categoryLabel === "museum" || categoryLabel === "cultural sight") {
    return "$";
  }
  if (categoryLabel === "nightlife & entertainment" || categoryLabel === "amusement & activities") {
    return "$$";
  }
  return "$$";
}

export function categorizeLibraryItem(item, baseCategory) {
  if (item.categoryLabel) {
    return item.categoryLabel;
  }
  if (baseCategory === "food") {
    return "Food";
  }

  const haystack = normalizeText(`${item.name} ${item.description} ${(item.tags || []).join(" ")}`);
  if (haystack.includes("museum")) return "Museum";
  if (haystack.includes("garden") || haystack.includes("park") || haystack.includes("forest") || haystack.includes("river") || haystack.includes("canal") || haystack.includes("sunset") || haystack.includes("beach")) return "Nature";
  if (haystack.includes("shopping") || haystack.includes("boutique") || haystack.includes("flagship") || haystack.includes("market")) return "Shopping";
  if (haystack.includes("wander") || haystack.includes("walk") || haystack.includes("lane") || haystack.includes("street") || haystack.includes("district") || haystack.includes("stroll")) return "Place to Wander";
  if (haystack.includes("palace") || haystack.includes("temple") || haystack.includes("shrine") || haystack.includes("cathedral") || haystack.includes("memorial") || haystack.includes("gate") || haystack.includes("history") || haystack.includes("castle") || haystack.includes("clock")) return "Cultural Sight";
  if (/\b(bar|bars|club|clubs|cocktail|jazz|concert|nightlife)\b/.test(haystack) || haystack.includes("after dark")) return "Nightlife & Entertainment";
  if (haystack.includes("tour") || haystack.includes("ride") || haystack.includes("activity") || haystack.includes("theme park") || haystack.includes("boat") || haystack.includes("amusement") || haystack.includes("karaoke")) return "Amusement & Activities";
  if ((item.tags || []).includes("culture")) return "Cultural Sight";
  if ((item.tags || []).includes("shopping")) return "Shopping";
  if ((item.tags || []).includes("wellness")) return "Nature";
  return "Other";
}

export function polishLibraryDescription(description) {
  const replacements = [
    [/^A very good /i, "A "],
    [/^A stronger /i, "A "],
    [/^A strong /i, "A "],
    [/^A useful /i, "A "],
    [/^A simple /i, "An easy "],
    [/^Good if /i, "Best if "],
    [/^Useful if /i, "Best for "],
    [/^Useful when /i, "Best when "],
    [/^Perfect after /i, "Best after "],
    [/^Helpful if /i, "Best if "],
    [/\btrip wants\b/gi, "you want"],
    [/\bthe trip leans\b/gi, "you want"],
    [/\bthe itinerary needs\b/gi, "you need"],
    [/\bthe day needs\b/gi, "you need"],
    [/\bworks beautifully\b/gi, "works especially well"],
    [/\bworks well\b/gi, "fits well"],
    [/\bvery useful\b/gi, "especially convenient"],
    [/\blower-key\b/gi, "more low-key"],
    [/\bold-school\b/gi, "classic"],
    [/\bshareable\b/gi, "visually strong"],
    [/\bside-street-heavy\b/gi, "side-street-oriented"],
    [/\bfood-rich\b/gi, "more snack-filled"],
    [/\bcity move\b/gi, "city stop"],
    [/\s+/g, " "],
  ];

  let next = String(description || "").trim();
  replacements.forEach(([pattern, replacement]) => {
    next = next.replace(pattern, replacement);
  });

  if (!next) {
    return "";
  }

  next = next.charAt(0).toUpperCase() + next.slice(1);

  if (!/[.!?]$/.test(next)) {
    next += ".";
  }

  return next;
}

function buildAreaSentence(areaLabel, phrase) {
  return areaLabel ? `${phrase} in ${areaLabel}.` : `${phrase}.`;
}

function buildFoodDescription(item) {
  const base = polishLibraryDescription(item.description);
  const areaLabel = item.areaLabel || item.area || "";
  const cuisine = item.cuisine || "";
  const tags = new Set(item.tags || []);
  const cuisineText = normalizeText(cuisine);
  const isCafeLike = cuisineText.includes("cafe") || cuisineText.includes("bakery") || cuisineText.includes("coffee") || cuisineText.includes("dessert") || tags.has("wellness");

  let followUp = "";
  if (tags.has("luxury")) {
    followUp = cuisine
      ? buildAreaSentence(areaLabel, `A more destination-worthy ${cuisine.toLowerCase()} reservation to build a dinner around`)
      : buildAreaSentence(areaLabel, "A more destination-worthy reservation to build a dinner around");
  } else if (isCafeLike) {
    followUp = buildAreaSentence(areaLabel, "A strong café or lighter daytime stop when you want the neighborhood to carry the mood");
  } else if (tags.has("nightlife")) {
    followUp = buildAreaSentence(areaLabel, "A stronger pick when dinner should flow naturally into a bigger evening");
  } else if (tags.has("culture")) {
    followUp = buildAreaSentence(areaLabel, "An especially good fit on a more culture-heavy day");
  } else if (tags.has("wellness")) {
    followUp = buildAreaSentence(areaLabel, "A softer meal stop that helps pace the day");
  } else {
    followUp = cuisine
      ? buildAreaSentence(areaLabel, `A reliable ${cuisine.toLowerCase()} stop when you want the meal to feel specific to the neighborhood`)
      : buildAreaSentence(areaLabel, "A reliable meal stop when you want the neighborhood to shape the plan");
  }

  return [base, followUp].filter(Boolean).join(" ");
}

function buildActivityDescription(item, categoryLabel) {
  const base = polishLibraryDescription(item.description);
  const areaLabel = item.areaLabel || item.area || "";
  const tags = new Set(item.tags || []);
  const timing = item.timing || "";

  let followUp = "";
  if (categoryLabel === "Museum") {
    followUp = buildAreaSentence(areaLabel, "One of the better structured museum stops to give the day a stronger anchor");
  } else if (categoryLabel === "Place to Wander") {
    followUp = buildAreaSentence(areaLabel, "Best treated as a slower wandering block rather than a quick in-and-out stop");
  } else if (categoryLabel === "Nightlife & Entertainment") {
    followUp = buildAreaSentence(areaLabel, "Best saved for later in the day when the neighborhood has more energy");
  } else if (tags.has("wellness") || categoryLabel === "Nature") {
    followUp = buildAreaSentence(areaLabel, "A good way to slow the pace and keep the trip from feeling over-programmed");
  } else if (tags.has("culture")) {
    followUp = buildAreaSentence(areaLabel, "A strong way to add more local context without derailing the rest of the day");
  } else if (tags.has("shopping")) {
    followUp = buildAreaSentence(areaLabel, "Easy to pair with coffee, lunch, or a nearby browse-heavy district block");
  } else if (timing === "evening") {
    followUp = buildAreaSentence(areaLabel, "Works best as part of an evening sequence rather than an early-day anchor");
  } else if (timing === "morning") {
    followUp = buildAreaSentence(areaLabel, "Usually strongest earlier in the day before the neighborhood gets busier");
  } else {
    followUp = buildAreaSentence(areaLabel, "A flexible addition if you want that neighborhood to carry more of the day");
  }

  return [base, followUp].filter(Boolean).join(" ");
}

export function expandLibraryDescription(item, categoryLabel) {
  if (categoryLabel === "Food") {
    return buildFoodDescription(item);
  }

  return buildActivityDescription(item, categoryLabel);
}

export function buildLibraryDetailLine(item, categoryLabel) {
  const areaLabel = item.areaLabel || "";
  const reservation = String(item.reservation || "").trim();
  const cuisine = String(item.cuisine || "").trim();
  const reservationText = formatReservationLine(reservation);

  if (categoryLabel === "Food") {
    const cuisineLine = cuisine;
    if (reservationText) {
      return cuisineLine ? `${cuisineLine}. ${reservationText}` : reservationText;
    }
    if (cuisineLine) {
      return `${cuisineLine}. A strong pick to build a meal around.`;
    }
    return areaLabel ? `Worth adding when you want a meal stop in ${areaLabel}.` : "Worth adding when you want a real meal stop.";
  }

  if (categoryLabel === "Place to Wander") {
    return areaLabel
      ? `Best explored on foot in ${areaLabel}, with time to drift into side streets and cafés.`
      : "Best explored slowly on foot rather than as a quick stop.";
  }

  if (categoryLabel === "Museum") {
    return areaLabel
      ? `A good dedicated museum stop in ${areaLabel}; give it at least an hour if you can.`
      : "A good dedicated museum stop; give it at least an hour if you can.";
  }

  if (categoryLabel === "Shopping") {
    return areaLabel
      ? `Most useful when you want real browsing time in ${areaLabel}, not just a quick pass-through.`
      : "Most useful when you want real browsing time, not just a quick pass-through.";
  }

  if (categoryLabel === "Nature") {
    return "Best in daylight or clear weather, when you can actually enjoy the setting rather than rush through it.";
  }

  if (categoryLabel === "Cultural Sight") {
    return areaLabel
      ? `Easy to pair with other historic stops in ${areaLabel} if you want the day to feel coherent.`
      : "Easy to pair with other historic stops if you want the day to feel coherent.";
  }

  if (categoryLabel === "Nightlife & Entertainment") {
    return reservationText || "Best later in the day, once dinner or the main sightseeing part of the itinerary is done.";
  }

  if (categoryLabel === "Amusement & Activities") {
    return "Best treated as a dedicated activity block instead of trying to squeeze it into a rushed gap.";
  }

  return areaLabel
    ? `A flexible stop in ${areaLabel} that works well when you want more texture beyond the headline sights.`
    : "A flexible stop that adds more texture beyond the headline sights.";
}

function formatReservationLine(reservation) {
  if (!reservation) {
    return "";
  }

  const normalized = normalizeText(reservation);
  if (normalized === "flexible") {
    return "Usually easy to do without advance planning.";
  }
  if (normalized.includes("no reservation")) {
    return "Usually does not require a reservation.";
  }
  if (normalized.includes("go early")) {
    return "Best earlier in the day to avoid the heaviest crowds.";
  }
  if (normalized.includes("same day")) {
    return "Usually manageable with same-day planning.";
  }
  if (normalized.includes("book") || normalized.includes("reserve")) {
    return reservation;
  }
  return reservation;
}
