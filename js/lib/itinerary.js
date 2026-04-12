// Itinerary and day logic functions

import { normalizeText, hashString, basePlaceName, highlightLabel } from "./utils.js";
import { DAY_SLOT_ORDER } from "./constants.js";
import { categorizeLibraryItem } from "./infer.js";
import { scoreDayForItem } from "./scoring.js?v=triptrellis-transit-balanced-20260411-010";

const ARRIVAL_AVAILABILITY_RULES = {
  morning: {
    label: "Morning arrival",
    availableFrom: "2:00 PM",
    instruction: "User available for activities starting at 2:00 PM.",
    anchorSlot: "morning",
    firstActivitySlot: "afternoon",
  },
  afternoon: {
    label: "Afternoon arrival",
    availableFrom: "6:00 PM",
    instruction: "User available for activities starting at 6:00 PM (Dinner).",
    anchorSlot: "afternoon",
    firstActivitySlot: "dinner",
  },
  evening: {
    label: "Evening arrival",
    availableFrom: "late night",
    instruction: "User is only available for late-night hotel-adjacent food. Main itinerary starts Day 2.",
    anchorSlot: "dinner",
    firstActivitySlot: "late-night",
    hotelAdjacentFoodOnly: true,
  },
};

const DEPARTURE_AVAILABILITY_RULES = {
  morning: {
    label: "Morning departure",
    instruction: "Morning departure means no activities on the final day; only checkout and transit.",
    anchorSlot: "morning",
    lastActivitySlot: "",
  },
  afternoon: {
    label: "Afternoon departure",
    instruction: "Afternoon departure allows only morning and lunch plans before checkout and transit.",
    anchorSlot: "afternoon",
    lastActivitySlot: "lunch",
  },
  evening: {
    label: "Evening departure",
    instruction: "Evening departure allows daytime plans, with checkout and departure as the final event.",
    anchorSlot: "late-night",
    lastActivitySlot: "dinner",
  },
};

function normalizeTravelTime(value, fallback) {
  const normalized = normalizeText(value);
  return ["morning", "afternoon", "evening"].includes(normalized) ? normalized : fallback;
}

export function buildTravelAvailabilityRules(arrivalTime = "afternoon", departureTime = "morning") {
  const arrivalKey = normalizeTravelTime(arrivalTime, "afternoon");
  const departureKey = normalizeTravelTime(departureTime, "morning");
  return {
    arrivalTime: arrivalKey,
    departureTime: departureKey,
    arrival: ARRIVAL_AVAILABILITY_RULES[arrivalKey],
    departure: DEPARTURE_AVAILABILITY_RULES[departureKey],
    generationInstructions: [
      "RULE 1: You must create an explicit event called 'Arrival & Check-in' as the very first item on Day 1. Do not schedule any activities, meals, or tours before the user's stated availability time on Day 1.",
      "RULE 2: You must create an explicit event called 'Checkout & Departure' as the final item on the last day. Do not schedule any activities after this.",
      ARRIVAL_AVAILABILITY_RULES[arrivalKey].instruction,
      DEPARTURE_AVAILABILITY_RULES[departureKey].instruction,
    ],
  };
}

function slotIndex(slot) {
  return DAY_SLOT_ORDER.indexOf(slot);
}

export function isFoodItem(item) {
  return item.categoryLabel === "Food";
}

function getDayType(dayIndex, totalDays) {
  if (totalDays <= 1) return "single";
  if (dayIndex === 0) return "arrival";
  if (dayIndex === totalDays - 1) return "departure";
  return "full";
}

function normalizeHaystack(item) {
  return normalizeText(`${item.name} ${item.description} ${item.detailLine || ""} ${(item.tags || []).join(" ")}`);
}

function isLightFoodCandidate(item) {
  const haystack = normalizeHaystack(item);
  return haystack.includes("coffee")
    || haystack.includes("bakery")
    || haystack.includes("dessert")
    || haystack.includes("pastries")
    || haystack.includes("breakfast")
    || haystack.includes("brunch")
    || haystack.includes("snack")
    || haystack.includes("food hall")
    || haystack.includes("market");
}

function isDinnerCandidate(item) {
  const haystack = normalizeHaystack(item);
  if (isLightFoodCandidate(item) && !(item.tags || []).includes("luxury") && !haystack.includes("reserve") && !haystack.includes("tasting")) {
    return false;
  }
  return (item.tags || []).includes("luxury")
    || haystack.includes("reserve")
    || haystack.includes("book")
    || haystack.includes("tasting")
    || haystack.includes("omakase")
    || haystack.includes("kaiseki")
    || haystack.includes("fine dining")
    || haystack.includes("cocktail")
    || item.timing === "evening";
}

export function getSlotLabel(slot) {
  return {
    morning: "Morning",
    lunch: "Lunch",
    afternoon: "Afternoon",
    dinner: "Dinner",
    "late-night": "Late night",
  }[slot] || "Stop";
}

export function guessSlotForItem(item) {
  if (item.slot) {
    return item.slot;
  }
  if (item.categoryLabel === "Food") {
    if (isDinnerCandidate(item)) return "dinner";
    return isLightFoodCandidate(item) ? "lunch" : (item.timing === "evening" ? "dinner" : "lunch");
  }
  if (item.categoryLabel === "Nightlife & Entertainment") {
    return "late-night";
  }
  if (item.timing === "morning") {
    return "morning";
  }
  if (item.timing === "evening") {
    return "late-night";
  }
  return "afternoon";
}

export function isLateNightCandidate(item) {
  return item.categoryLabel === "Nightlife & Entertainment"
    || item.timing === "evening"
    || normalizeText(`${item.name} ${item.description} ${(item.tags || []).join(" ")}`).includes("bar")
    || normalizeText(`${item.name} ${item.description} ${(item.tags || []).join(" ")}`).includes("cocktail")
    || normalizeText(`${item.name} ${item.description} ${(item.tags || []).join(" ")}`).includes("club");
}

function isMorningSafeCandidate(item) {
  const haystack = normalizeHaystack(item);
  return !isFoodItem(item)
    && !isLateNightCandidate(item)
    && item.timing !== "evening"
    && ![" at night", "night", "late", "neon", "dinner", "beer", "cocktail", "club"].some((word) => haystack.includes(word));
}

export function dayHasSlotFilled(day, slot) {
  return (day.itineraryItems || []).some((item) => item.slot === slot);
}

export function findItemBySlot(day, slot) {
  return (day.itineraryItems || []).find((item) => item.slot === slot);
}

export function getSlotItems(day, slot) {
  return (day.itineraryItems || []).filter((item) => item.slot === slot);
}

export function getFilledSlotCount(day) {
  return DAY_SLOT_ORDER.filter((slot) => getSlotItems(day, slot).length).length;
}

export function getRenderedDayItems(day) {
  return day.itineraryItems || [];
}

export function dayAlreadyHasItem(day, name) {
  return getRenderedDayItems(day).some((item) => item.title === name);
}

export function autoItemLabel(item) {
  if (item.categoryLabel === "Food") return "Meal stop";
  if (item.timing === "evening") return "Evening";
  if (item.timing === "morning") return "Morning";
  if (item.categoryLabel === "Nightlife & Entertainment") return "Night out";
  return "Stop";
}

export function createItineraryItemFromLibrary(item, sourceType, forcedLabel = "", forcedSlot = "") {
  const slot = forcedSlot || guessSlotForItem(item);
  return {
    id: `${sourceType}-${hashString(`${item.id}-${Date.now()}-${Math.random()}`)}`,
    label: forcedLabel || getSlotLabel(slot) || autoItemLabel(item),
    title: item.name,
    description: item.description,
    detailLine: item.detailLine,
    area: item.area,
    areaLabel: item.areaLabel || item.area,
    timing: item.timing,
    slot,
    categoryLabel: item.categoryLabel,
    cuisine: item.cuisine || "",
    priceTier: item.priceTier,
    michelinStatus: item.michelinStatus || "",
    guideNote: item.guideNote || "",
    guideUrl: item.guideUrl || "",
    libraryItemId: item.id,
    sourceType,
    type: item.type || (item.categoryLabel === "Food" ? "dining" : "activity"),
    fitNote: item.fitNote || "",
  };
}

export function chooseBestSlotForItem(day, item) {
  const preferred = guessSlotForItem(item);
  if (!dayHasSlotFilled(day, preferred)) {
    return preferred;
  }

  const fallbackSlots = isFoodItem(item)
    ? ["lunch", "dinner", "late-night"]
    : ["morning", "afternoon", "late-night"];

  return fallbackSlots.find((slot) => !dayHasSlotFilled(day, slot)) || preferred;
}

export function countCategories(items) {
  return items.reduce((counts, item) => {
    const key = item.categoryLabel || "Other";
    counts[key] = (counts[key] || 0) + 1;
    return counts;
  }, {});
}

function countAreas(items) {
  return items.reduce((counts, item) => {
    if (!item.area) return counts;
    counts[item.area] = (counts[item.area] || 0) + 1;
    return counts;
  }, {});
}

function getPlanAreaCounts(plan) {
  return plan.days.reduce((counts, day) => {
    (day.itineraryItems || []).forEach((item) => {
      if (!item.area) return;
      counts[item.area] = (counts[item.area] || 0) + 1;
    });
    return counts;
  }, {});
}

function countPlanCuisines(plan) {
  return plan.days.reduce((counts, day) => {
    (day.itineraryItems || []).forEach((item) => {
      if (!item.cuisine) return;
      counts[item.cuisine] = (counts[item.cuisine] || 0) + 1;
    });
    return counts;
  }, {});
}

function classifyExperience(item) {
  const haystack = normalizeHaystack(item);
  if (item.categoryLabel === "Food") {
    if (haystack.includes("coffee") || haystack.includes("bakery") || haystack.includes("dessert")) return "cafe";
    if (haystack.includes("market") || haystack.includes("street food") || haystack.includes("food hall")) return "market-food";
    if (haystack.includes("tasting") || haystack.includes("omakase") || haystack.includes("fine dining")) return "special-dinner";
    return "meal";
  }
  if (item.categoryLabel === "Museum") return "museum";
  if (item.categoryLabel === "Shopping") return "shopping";
  if (item.categoryLabel === "Place to Wander") return "wander";
  if (item.categoryLabel === "Nightlife & Entertainment") return "nightlife";
  if (item.categoryLabel === "Nature") return "nature";
  return item.categoryLabel || "other";
}

function countExperiences(items) {
  return items.reduce((counts, item) => {
    const key = classifyExperience(item);
    counts[key] = (counts[key] || 0) + 1;
    return counts;
  }, {});
}

function getPreferredAreaKeysForDay(dayIndex, plan) {
  const cityTemplate = getCityDayTemplate(dayIndex, plan);
  if (cityTemplate?.areas?.length) {
    return cityTemplate.areas;
  }

  const hotelArea = plan.hotelBase.areaKey;
  const areaScores = {};
  plan.libraryItems.forEach((item) => {
    if (!item.area) return;
    areaScores[item.area] = (areaScores[item.area] || 0) + (item.score || 1);
  });
  const adjacent = (plan.guide.areaAdjacency[hotelArea] || [])
    .slice()
    .sort((left, right) => (areaScores[right] || 0) - (areaScores[left] || 0));
  const widerPool = Object.keys(areaScores)
    .filter((areaKey) => areaKey !== hotelArea && !adjacent.includes(areaKey))
    .sort((left, right) => (areaScores[right] || 0) - (areaScores[left] || 0))
    .slice(0, 4);
  const rotationPool = [...adjacent, ...widerPool, hotelArea].filter(Boolean);
  if (!rotationPool.length) {
    return [hotelArea];
  }

  if (dayIndex === 0 || dayIndex === plan.totalDays - 1) {
    return [...new Set([hotelArea, ...adjacent.slice(0, 1), ...widerPool.slice(0, 1)])];
  }

  const primary = rotationPool[(dayIndex - 1) % rotationPool.length];
  const primaryAdjacent = (plan.guide.areaAdjacency[primary] || [])
    .filter((areaKey) => areaKey !== hotelArea)
    .sort((left, right) => (areaScores[right] || 0) - (areaScores[left] || 0));
  const secondary = primaryAdjacent[0] || rotationPool[dayIndex % rotationPool.length];
  const includeHotelBase = dayIndex % 3 === 0;
  return [...new Set([primary, secondary, includeHotelBase ? hotelArea : ""])].filter(Boolean);
}

const OSAKA_DAY_TEMPLATES = {
  nambaFoodNight: {
    label: "Namba food night",
    areas: ["namba", "shinsaibashi"],
    categories: ["Food", "Place to Wander", "Nightlife & Entertainment"],
    keywords: ["dotonbori", "kuromon", "hozenji", "ura namba", "namba", "takoyaki", "kushikatsu", "okonomiyaki", "ramen", "yakiniku"],
  },
  umedaNakanoshimaCulture: {
    label: "Umeda and Nakanoshima culture",
    areas: ["umeda", "shinsaibashi"],
    categories: ["Museum", "Cultural Sight", "Nature", "Place to Wander", "Shopping"],
    keywords: ["umeda", "nakanoshima", "museum", "art", "science", "rose", "sky", "grand front", "hankyu"],
  },
  tennojiShinsekaiRetro: {
    label: "Tennoji and Shinsekai retro day",
    areas: ["tennoji", "namba"],
    categories: ["Cultural Sight", "Place to Wander", "Food", "Amusement & Activities"],
    keywords: ["tennoji", "shinsekai", "tsutenkaku", "shitenno", "abeno", "janjan", "spa world", "kushikatsu"],
  },
  shinsaibashiStyle: {
    label: "Shinsaibashi style and shopping",
    areas: ["shinsaibashi", "namba"],
    categories: ["Shopping", "Place to Wander", "Food"],
    keywords: ["shinsaibashi", "americamura", "amemura", "orange street", "horie", "minami-senba", "midosuji", "den den"],
  },
  bayAreaSpectacle: {
    label: "Bay Area activity day",
    areas: ["namba", "umeda"],
    categories: ["Amusement & Activities", "Other", "Shopping", "Nature"],
    keywords: ["universal", "aquarium", "tempozan", "bay", "maishima", "kyocera", "water bus", "ferris", "rinku"],
  },
  natureEscape: {
    label: "Parks and nature escape",
    areas: ["tennoji", "umeda"],
    categories: ["Nature", "Cultural Sight", "Amusement & Activities"],
    keywords: ["park", "garden", "minoo", "minoh", "expo", "nagai", "falls", "mount", "kongo", "ikoma", "katsuoji", "sakur"],
  },
};

function getOsakaTemplateRotation(plan) {
  const focuses = plan.focuses || [plan.focus];
  const rotation = [
    OSAKA_DAY_TEMPLATES.umedaNakanoshimaCulture,
    OSAKA_DAY_TEMPLATES.tennojiShinsekaiRetro,
    OSAKA_DAY_TEMPLATES.shinsaibashiStyle,
    OSAKA_DAY_TEMPLATES.bayAreaSpectacle,
    OSAKA_DAY_TEMPLATES.natureEscape,
  ];

  if (focuses.includes("food") || focuses.includes("nightlife")) {
    rotation.unshift(OSAKA_DAY_TEMPLATES.nambaFoodNight);
  }
  if (focuses.includes("nature") || focuses.includes("wellness")) {
    rotation.unshift(OSAKA_DAY_TEMPLATES.natureEscape);
  }
  if (focuses.includes("shopping") || focuses.includes("design")) {
    rotation.unshift(OSAKA_DAY_TEMPLATES.shinsaibashiStyle);
  }
  if (focuses.includes("museum") || focuses.includes("culture")) {
    rotation.unshift(OSAKA_DAY_TEMPLATES.umedaNakanoshimaCulture);
  }

  return [...new Map(rotation.map((template) => [template.label, template])).values()];
}

function getCityDayTemplate(dayIndex, plan) {
  if (plan.cityKey !== "osaka") {
    return null;
  }

  const dayType = getDayType(dayIndex, plan.totalDays);
  if (dayType === "arrival") {
    return OSAKA_DAY_TEMPLATES.nambaFoodNight;
  }
  if (dayType === "departure") {
    return plan.hotelBase.areaKey === "tennoji"
      ? OSAKA_DAY_TEMPLATES.tennojiShinsekaiRetro
      : OSAKA_DAY_TEMPLATES.umedaNakanoshimaCulture;
  }

  const rotation = getOsakaTemplateRotation(plan);
  return rotation[(dayIndex - 1) % rotation.length] || null;
}

function scoreCityDayTemplate(item, template) {
  if (!template) {
    return 0;
  }

  let score = 0;
  const haystack = normalizeHaystack(item);
  if (template.areas.includes(item.area)) {
    score += 2.6;
  }
  if (template.categories.includes(item.categoryLabel)) {
    score += 2.1;
  }
  if (template.keywords.some((keyword) => haystack.includes(keyword))) {
    score += 2.4;
  }
  if (!template.areas.includes(item.area) && !template.categories.includes(item.categoryLabel)) {
    score -= 1.2;
  }
  return score;
}

export function getActivitySlotRules(dayIndex, plan) {
  const travelRules = plan.travelAvailabilityRules || buildTravelAvailabilityRules(plan.arrivalTime, plan.departureTime);
  let firstAllowedIndex = 0;
  let lastAllowedIndex = DAY_SLOT_ORDER.length - 1;

  if (dayIndex === 0) {
    firstAllowedIndex = Math.max(firstAllowedIndex, slotIndex(travelRules.arrival.firstActivitySlot));
  }

  if (dayIndex === plan.totalDays - 1) {
    const departureLastSlot = travelRules.departure.lastActivitySlot;
    lastAllowedIndex = departureLastSlot ? Math.min(lastAllowedIndex, slotIndex(departureLastSlot)) : -1;
  }

  if (firstAllowedIndex < 0 || lastAllowedIndex < firstAllowedIndex) {
    return [];
  }

  return DAY_SLOT_ORDER.slice(firstAllowedIndex, lastAllowedIndex + 1);
}

export function getVisibleSlotsForDay(dayIndex, plan) {
  const travelRules = plan.travelAvailabilityRules || buildTravelAvailabilityRules(plan.arrivalTime, plan.departureTime);
  const slots = new Set(getActivitySlotRules(dayIndex, plan));

  if (dayIndex === 0) {
    slots.add(travelRules.arrival.anchorSlot);
  }

  if (dayIndex === plan.totalDays - 1) {
    slots.add(travelRules.departure.anchorSlot);
  }

  return DAY_SLOT_ORDER.filter((slot) => slots.has(slot));
}

function isSlotAllowedForActivity(dayIndex, plan, slot) {
  return getActivitySlotRules(dayIndex, plan).includes(slot);
}

function isHotelAdjacentLateFood(item, day, plan) {
  if (!isFoodItem(item)) return false;
  const adjacent = new Set(plan.guide.areaAdjacency[plan.hotelBase.areaKey] || []);
  return item.area === plan.hotelBase.areaKey || adjacent.has(item.area) || (day.areaKeysUsed || []).includes(item.area);
}

function slotFilterForAvailability(dayIndex, plan, slotRule) {
  return (item, day, activePlan) => {
    if (!isSlotAllowedForActivity(dayIndex, activePlan, slotRule.slot)) {
      return false;
    }
    if (dayIndex === 0 && activePlan.travelAvailabilityRules?.arrival.hotelAdjacentFoodOnly && slotRule.slot === "late-night") {
      return isHotelAdjacentLateFood(item, day, activePlan);
    }
    return slotRule.filter(item, day, activePlan);
  };
}

function getRequiredSlotsForDay(dayIndex, plan) {
  const totalDays = plan.totalDays;
  const dayType = getDayType(dayIndex, totalDays);
  const allowedSlots = new Set(getActivitySlotRules(dayIndex, plan));

  if (dayType === "arrival") {
    return [
      { slot: "morning", label: "Morning", filter: isMorningSafeCandidate, preferredTimings: ["morning", "afternoon"] },
      { slot: "lunch", label: "Lunch", filter: (item) => isFoodItem(item) && !isDinnerCandidate(item), preferredTimings: ["morning", "afternoon"] },
      { slot: "afternoon", label: "Afternoon", filter: (item) => !isFoodItem(item), preferredTimings: ["afternoon", "evening"] },
      { slot: "dinner", label: "Dinner", filter: (item) => isFoodItem(item) && isDinnerCandidate(item), preferredTimings: ["evening", "afternoon"] },
      { slot: "late-night", label: "Late night", filter: (item) => isLateNightCandidate(item), preferredTimings: ["evening"] },
    ].filter((slotRule) => allowedSlots.has(slotRule.slot));
  }

  if (dayType === "departure") {
    return [
      { slot: "morning", label: "Morning", filter: isMorningSafeCandidate, preferredTimings: ["morning", "afternoon"] },
      { slot: "lunch", label: "Lunch", filter: (item) => isFoodItem(item) && !isDinnerCandidate(item), preferredTimings: ["morning", "afternoon"] },
      { slot: "afternoon", label: "Afternoon", filter: (item) => !isFoodItem(item) && item.timing !== "evening", preferredTimings: ["afternoon", "morning"] },
    ].filter((slotRule) => allowedSlots.has(slotRule.slot));
  }

  return [
    { slot: "morning", label: "Morning", filter: isMorningSafeCandidate, preferredTimings: ["morning", "afternoon"] },
    { slot: "lunch", label: "Lunch", filter: (item) => isFoodItem(item) && !isDinnerCandidate(item), preferredTimings: ["morning", "afternoon"] },
    { slot: "afternoon", label: "Afternoon", filter: (item) => !isFoodItem(item), preferredTimings: ["afternoon", "morning"] },
    { slot: "dinner", label: "Dinner", filter: (item) => isFoodItem(item) && isDinnerCandidate(item), preferredTimings: ["evening", "afternoon"] },
    { slot: "late-night", label: "Late night", filter: (item) => isLateNightCandidate(item), preferredTimings: ["evening", "afternoon"] },
  ].filter((slotRule) => allowedSlots.has(slotRule.slot));
}

export function detectAreaLabelFromText(guide, text) {
  const normalized = normalizeText(text);
  const entry = Object.entries(guide.hotelAreas).find(([key, area]) => normalized.includes(key) || normalized.includes(normalizeText(area.label)));
  return entry ? entry[1].label : "";
}

export function buildFlowLine(guide, hotelBase, highlights) {
  const areaLabels = highlights
    .map((item) => guide.hotelAreas[item.area]?.label || detectAreaLabelFromText(guide, item.title))
    .filter(Boolean);
  const unique = [...new Set(areaLabels)].slice(0, 3);
  if (!unique.length) {
    return `Use ${hotelBase.areaLabel} as the practical base, then choose the strongest area for the day.`;
  }
  return `Flow the day through ${unique.join(" + ")} so it feels organized while still exploring beyond the hotel orbit.`;
}

export function buildDaySummary(day, plan) {
  const items = getRenderedDayItems(day);
  if (!items.length) {
    return `Keep this one open and use the city library when you know what kind of energy you want that day.`;
  }

  const uniqueAreas = [...new Set(items.map((item) => item.areaLabel || plan.guide.hotelAreas[item.area]?.label).filter(Boolean))];
  const areaLine = uniqueAreas.length
    ? `The day stays mostly around ${uniqueAreas.slice(0, 2).join(uniqueAreas.length > 1 ? " and " : "")}.`
    : "";

  const morning = findItemBySlot(day, "morning")?.title;
  const lunch = findItemBySlot(day, "lunch")?.title;
  const afternoon = findItemBySlot(day, "afternoon")?.title;
  const dinner = findItemBySlot(day, "dinner")?.title;
  const cityTemplateLine = day.cityTheme
    ? `This day is shaped around ${day.cityTheme.toLowerCase()}.`
    : "";

  if (morning && afternoon && dinner) {
    return [cityTemplateLine, `Start with ${morning}, break for ${lunch || "lunch nearby"}, move into ${afternoon}, and use ${dinner} as the dinner anchor.`, areaLine]
      .filter(Boolean)
      .join(" ");
  }

  const labels = items.slice(0, 3).map((item) => item.title);
  if (labels.length === 1) {
    return [cityTemplateLine, `${labels[0]} is the anchor for this day, with the rest of the timing left flexible around the strongest nearby additions.`, areaLine]
      .filter(Boolean)
      .join(" ");
  }
  if (labels.length === 2) {
    return [cityTemplateLine, `Start with ${labels[0]}, then flow into ${labels[1]} so the day feels connected instead of scattered.`, areaLine]
      .filter(Boolean)
      .join(" ");
  }
  return [cityTemplateLine, `Start with ${labels[0]}, move into ${labels[1]}, and finish with ${labels[2]} for a day that keeps the pace coherent.`, areaLine]
    .filter(Boolean)
    .join(" ");
}

export function buildDayReservationNote(day, plan) {
  const items = getRenderedDayItems(day);
  const bookAheadCount = items.filter((item) => normalizeText(item.detailLine || "").includes("book") || normalizeText(item.description || "").includes("reserve")).length;
  const foodCount = items.filter((item) => item.categoryLabel === "Food").length;
  const lateNightCount = items.filter((item) => item.slot === "late-night" || item.categoryLabel === "Nightlife & Entertainment").length;
  const uniqueAreas = [...new Set(items.map((item) => item.areaLabel || plan.guide.hotelAreas[item.area]?.label).filter(Boolean))];
  const dayIndex = plan.days.findIndex((candidate) => candidate === day);
  const dayType = getDayType(dayIndex, plan.totalDays);

  if (dayType === "arrival") {
    return `Keep this first day light and local around ${plan.hotelBase.areaLabel}, especially if arrival timing shifts.`;
  }

  if (dayType === "departure") {
    return `Keep this last day easy to trim if needed, with anything essential done before checkout and transfer time.`;
  }

  if (bookAheadCount >= 2) {
    return "This day has a couple of things worth timing in advance, so lock the sequence before the trip.";
  }

  if (lateNightCount && foodCount >= 2) {
    return "This is a bigger day, so keep the middle flexible enough that dinner and late-night plans do not start to feel rushed.";
  }

  if (lateNightCount) {
    return "Protect a slower late afternoon here so the night still feels fun instead of over-scheduled.";
  }

  if (bookAheadCount === 1 && foodCount >= 1) {
    return "Time the reservation anchor first, then let the rest of the day flex around it.";
  }

  if (uniqueAreas.length >= 3) {
    return "This is one of the more movement-heavy days, so leave extra buffer for transit and avoid overcommitting the timing.";
  }

  if (foodCount >= 2) {
    return "A meal-led day works best when you leave room to linger rather than treating every stop like a strict appointment.";
  }

  const pf2 = plan.focuses || [plan.focus];
  if (pf2.includes("wellness")) {
    return "Leave small gaps between stops so the day stays calm instead of turning into a checklist.";
  }
  if (pf2.includes("culture")) {
    return "Try to start on time here, since the earlier cultural stops tend to feel better before the crowds build.";
  }

  return "Keep a little breathing room between the anchors so the day can still absorb queues, weather, or one longer-than-expected stop.";
}

export function refreshDayState(day, plan) {
  const items = getRenderedDayItems(day);
  day.areaKeysUsed = [...new Set(items.map((item) => item.area).filter(Boolean))];
  day.flow = buildFlowLine(plan.guide, plan.hotelBase, items);
  day.summary = buildDaySummary(day, plan);
  day.reservationNote = buildDayReservationNote(day, plan);
}

export function getSuggestedCountForDay(dayIndex, totalDays, paceRule) {
  const paceBase = {
    Slow: 4,
    Balanced: 5,
    Packed: 6,
  }[paceRule.label] || 5;

  if (totalDays === 1) {
    return Math.max(4, paceBase);
  }

  const dayType = getDayType(dayIndex, totalDays);
  if (dayType === "arrival") {
    return Math.max(5, paceBase);
  }
  if (dayType === "departure") {
    return Math.max(3, paceBase - 2);
  }

  return paceBase;
}

export function pickBestSuggestedItem({ day, sortedPool, usedNames, plan, filter = null, preferredTimings = [], slot = "" }) {
  let best = null;
  let bestScore = -Infinity;
  const categoryCounts = countCategories(day.itineraryItems || []);
  const areaCounts = countAreas(day.itineraryItems || []);
  const planAreaCounts = getPlanAreaCounts(plan);
  const planCuisineCounts = countPlanCuisines(plan);
  const experienceCounts = countExperiences(day.itineraryItems || []);
  const adjacentToHotel = new Set(plan.guide.areaAdjacency[plan.hotelBase.areaKey] || []);
  const dayIndex = plan.days.findIndex((candidate) => candidate === day);
  const preferredAreas = new Set(getPreferredAreaKeysForDay(dayIndex, plan));
  const cityTemplate = getCityDayTemplate(dayIndex, plan);

  sortedPool.forEach((item) => {
    const candidateSlot = slot || guessSlotForItem(item);
    if (dayIndex >= 0 && !isSlotAllowedForActivity(dayIndex, plan, candidateSlot)) {
      return;
    }
    if (dayIndex === 0 && plan.travelAvailabilityRules?.arrival.hotelAdjacentFoodOnly && candidateSlot === "late-night" && !isHotelAdjacentLateFood(item, day, plan)) {
      return;
    }
    const normalizedName = normalizeText(item.name);
    const baseName = basePlaceName(item.name);
    if (usedNames.has(normalizedName) || usedNames.has(baseName)) {
      return;
    }
    if (filter && !filter(item, day, plan)) {
      return;
    }

    let score = scoreDayForItem(day, item, plan.guide, plan.hotelBase, plan.days.length, plan.focuses || [plan.focus]);
    score += (item.score || 0) * 0.2;
    score += scoreCityDayTemplate(item, cityTemplate);

    if ((categoryCounts[item.categoryLabel] || 0) >= 1) {
      score -= 2.4;
    }

    if (preferredTimings.length) {
      if (preferredTimings.includes(item.timing)) {
        score += 1.8;
      } else {
        score -= 0.8;
      }
    }

    if (slot && dayHasSlotFilled(day, slot)) {
      score -= 8;
    }

    if (areaCounts[item.area]) {
      score += 2.6;
      if (areaCounts[item.area] >= 2) {
        score -= 1.5;
      }
    } else if ((day.areaKeysUsed || []).includes(item.area)) {
      score += 1.8;
    } else if ((day.areaKeysUsed || []).some((areaKey) => (plan.guide.areaAdjacency[areaKey] || []).includes(item.area))) {
      score += 0.9;
    }

    if ((planAreaCounts[item.area] || 0) >= Math.max(2, plan.totalDays)) {
      score -= 1.8;
    }

    if (preferredAreas.has(item.area)) {
      score += 1.45;
    } else if (preferredAreas.size && !areaCounts[item.area]) {
      score -= 0.35;
    }

    if (!day.itineraryItems?.length && item.area === plan.hotelBase.areaKey) {
      score += 0.35;
    }

    if (item.area === plan.hotelBase.areaKey && (planAreaCounts[item.area] || 0) >= Math.max(2, Math.ceil(plan.totalDays / 2))) {
      score -= 2.4;
    }

    if ((item.categoryLabel === "Nightlife & Entertainment" || item.slot === "late-night") && !(item.area === plan.hotelBase.areaKey || adjacentToHotel.has(item.area))) {
      score -= 0.75;
    }

    if (isFoodItem(item)) {
      const foodCount = (day.itineraryItems || []).filter((entry) => entry.categoryLabel === "Food").length;
      if (foodCount >= 2) {
        score -= 3;
      }
      if (item.cuisine && (planCuisineCounts[item.cuisine] || 0) >= 2) {
        score -= 2.2;
      }
      if ((day.itineraryItems || []).some((entry) => entry.slot === "dinner" && entry.area === item.area)) {
        score += 1;
      }
    }

    if ((categoryCounts[item.categoryLabel] || 0) >= 2) {
      score -= 2.2;
    }

    if ((experienceCounts[classifyExperience(item)] || 0) >= 1) {
      score -= 1.6;
    }

    const pf = plan.focuses || [plan.focus];
    if (pf.includes("food") && item.categoryLabel === "Food") score += 2;
    if (pf.includes("culture") && ["Cultural Sight", "Museum", "Place to Wander"].includes(item.categoryLabel)) score += 1.8;
    if (pf.includes("wellness") && ["Nature", "Place to Wander", "Food"].includes(item.categoryLabel)) score += 1.4;
    if (pf.includes("nightlife") && ["Nightlife & Entertainment", "Food", "Amusement & Activities"].includes(item.categoryLabel)) score += 1.8;
    if (pf.includes("design") && ["Place to Wander", "Cultural Sight"].includes(item.categoryLabel)) score += 1.6;
    if (pf.includes("museum") && item.categoryLabel === "Museum") score += 2.2;
    if (pf.includes("shopping") && item.categoryLabel === "Shopping") score += 2;
    if (pf.includes("nature") && item.categoryLabel === "Nature") score += 2.2;
    if (pf.includes("luxury") && ["Food", "Nightlife & Entertainment"].includes(item.categoryLabel)) score += 1.6;

    if (score > bestScore) {
      best = item;
      bestScore = score;
    }
  });

  return best;
}

function buildItemFitNote(day, item, plan, slot) {
  const existingItems = day.itineraryItems || [];
  const previousItem = existingItems.at(-1);
  const eveningAnchor = existingItems.find((entry) => ["dinner", "late-night"].includes(entry.slot) || entry.categoryLabel === "Nightlife & Entertainment");
  const areaLabel = item.areaLabel || plan.guide.hotelAreas[item.area]?.label || item.area;
  const previousAreaLabel = previousItem?.areaLabel || plan.guide.hotelAreas[previousItem?.area]?.label || previousItem?.area || "";

  if (slot === "dinner" && item.categoryLabel === "Food") {
    return `Why here: Works as the dinner anchor for this ${areaLabel} day${previousItem ? ` after ${previousItem.title}` : ""}.`;
  }

  if (slot === "late-night") {
    return `Why here: Best saved for later, especially after the day has already settled around ${areaLabel}.`;
  }

  if (slot === "lunch" && item.categoryLabel === "Food") {
    return previousItem
      ? `Why here: Easy midday stop after ${previousItem.title}, keeping the route practical around ${areaLabel}.`
      : `Why here: Easy midday anchor before the day gets heavier around ${areaLabel}.`;
  }

  if (previousItem && previousItem.area === item.area) {
    return `Why here: Good after ${previousItem.title} because it keeps you in ${areaLabel}${eveningAnchor && eveningAnchor.title !== previousItem.title ? ` before ${eveningAnchor.title}` : ""}.`;
  }

  if (previousItem && (plan.guide.areaAdjacency[previousItem.area] || []).includes(item.area)) {
    return `Why here: Good after ${previousItem.title} because ${areaLabel} connects naturally from ${previousAreaLabel}.`;
  }

  const reasons = [];
  if (item.area === plan.hotelBase.areaKey) {
    reasons.push(`close to your base in ${plan.hotelBase.areaLabel}`);
  } else if ((day.areaKeysUsed || []).includes(item.area)) {
    reasons.push(`keeps this day centered around ${areaLabel}`);
  } else if ((plan.guide.areaAdjacency[item.area] || []).some((key) => (day.areaKeysUsed || []).includes(key))) {
    reasons.push(`fits naturally with the rest of the ${areaLabel} route`);
  }
  if (slot === "morning") {
    reasons.push("stronger earlier before the area gets busier");
  }
  const focuses = plan.focuses || [plan.focus];
  if (focuses.includes("design") && ["Museum", "Place to Wander", "Cultural Sight"].includes(item.categoryLabel)) {
    reasons.push("supports the trip's design focus");
  }
  if (focuses.includes("food") && item.categoryLabel === "Food") {
    reasons.push("fits the food-forward version of the trip");
  }
  if (day.cityTheme) {
    reasons.push(`supports the ${day.cityTheme.toLowerCase()}`);
  }

  return reasons.length ? `Why here: ${reasons.slice(0, 2).join("; ")}.` : "";
}

export function buildContextualFitNote(day, item, plan, slot = "") {
  return buildItemFitNote(day, item, plan, slot || guessSlotForItem(item));
}

function createTransitAnchor({ id, label, title, description, slot, plan }) {
  return {
    id,
    label,
    title,
    description,
    detailLine: plan.hotelBase?.hotelName ? `Hotel base: ${plan.hotelBase.hotelName}` : "",
    area: plan.hotelBase?.areaKey || "",
    areaLabel: plan.hotelBase?.areaLabel || "",
    timing: slot === "late-night" ? "evening" : slot,
    slot,
    categoryLabel: "Transit",
    cuisine: "",
    priceTier: "",
    libraryItemId: "",
    sourceType: "transit_anchor",
    type: "transit_anchor",
    fitNote: "",
    locked: true,
  };
}

function createArrivalAnchor(plan) {
  const rule = plan.travelAvailabilityRules?.arrival || buildTravelAvailabilityRules(plan.arrivalTime, plan.departureTime).arrival;
  return createTransitAnchor({
    id: `arrival-anchor-${hashString(`${plan.cityKey}-${plan.startDate.toISOString()}-${plan.arrivalTime}`)}`,
    label: "Arrival",
    title: "Arrival & Check-in",
    description: `${rule.label}. ${rule.instruction}`,
    slot: rule.anchorSlot,
    plan,
  });
}

function createDepartureAnchor(plan) {
  const rule = plan.travelAvailabilityRules?.departure || buildTravelAvailabilityRules(plan.arrivalTime, plan.departureTime).departure;
  return createTransitAnchor({
    id: `departure-anchor-${hashString(`${plan.cityKey}-${plan.endDate.toISOString()}-${plan.departureTime}`)}`,
    label: "Departure",
    title: "Checkout & Departure",
    description: `${rule.label}. ${rule.instruction}`,
    slot: rule.anchorSlot,
    plan,
  });
}

function addTravelAnchors(plan) {
  if (!plan.days?.length) return;
  const firstDay = plan.days[0];
  firstDay.itineraryItems = [
    createArrivalAnchor(plan),
    ...(firstDay.itineraryItems || []).filter((item) => item.type !== "transit_anchor" || item.title !== "Arrival & Check-in"),
  ];

  const lastDay = plan.days[plan.days.length - 1];
  lastDay.itineraryItems = [
    ...(lastDay.itineraryItems || []).filter((item) => item.type !== "transit_anchor" || item.title !== "Checkout & Departure"),
    createDepartureAnchor(plan),
  ];
}

export function enforceTravelAnchorsAndBoundaries(plan) {
  if (!plan?.days?.length) return plan;

  plan.travelAvailabilityRules = plan.travelAvailabilityRules || buildTravelAvailabilityRules(plan.arrivalTime, plan.departureTime);

  plan.days.forEach((day, dayIndex) => {
    day.itineraryItems = (day.itineraryItems || []).filter((item) => {
      if (item.type === "transit_anchor" || item.sourceType === "transit_anchor") {
        return false;
      }

      const slot = item.slot || guessSlotForItem(item);
      if (!isSlotAllowedForActivity(dayIndex, plan, slot)) {
        return false;
      }

      if (dayIndex === 0 && plan.travelAvailabilityRules.arrival.hotelAdjacentFoodOnly) {
        return slot === "late-night" && isHotelAdjacentLateFood(item, day, plan);
      }

      return true;
    });
  });

  addTravelAnchors(plan);
  plan.days.forEach((day) => refreshDayState(day, plan));
  return plan;
}

export function addSuggestedItemToDay(day, item, usedNames, plan, forcedSlot = "", forcedLabel = "") {
  const slot = forcedSlot || guessSlotForItem(item);
  day.itineraryItems.push(createItineraryItemFromLibrary({
    ...item,
    fitNote: buildItemFitNote(day, item, plan, slot),
  }, "suggested", forcedLabel, slot));
  usedNames.add(normalizeText(item.name));
  usedNames.add(basePlaceName(item.name));
  refreshDayState(day, plan);
}

export function fillMissingFirstDayCoreSlots(plan) {
  const firstDay = plan.days?.[0];
  if (!firstDay) {
    return;
  }

  const usedNames = new Set(
    plan.days.flatMap((day) => (day.itineraryItems || []).flatMap((item) => [normalizeText(item.title), basePlaceName(item.title)]))
  );
  const sortedPool = [...plan.libraryItems].sort((left, right) => (right.score || 0) - (left.score || 0));
  const slotRules = [
    { slot: "morning", label: "Morning", filter: isMorningSafeCandidate, preferredTimings: ["morning", "afternoon"] },
    { slot: "lunch", label: "Lunch", filter: (item) => isFoodItem(item) && !isDinnerCandidate(item), preferredTimings: ["morning", "afternoon"] },
  ].filter((slotRule) => isSlotAllowedForActivity(0, plan, slotRule.slot));

  slotRules.forEach((slotRule) => {
    if (dayHasSlotFilled(firstDay, slotRule.slot)) {
      return;
    }
    const nextItem = pickBestSuggestedItem({
      day: firstDay,
      sortedPool,
      usedNames,
      plan,
      filter: slotFilterForAvailability(0, plan, slotRule),
      preferredTimings: slotRule.preferredTimings,
      slot: slotRule.slot,
    });
    if (nextItem) {
      addSuggestedItemToDay(firstDay, nextItem, usedNames, plan, slotRule.slot, slotRule.label);
    }
  });
}

export function populateSuggestedItinerary(plan) {
  const usedNames = new Set();
  const sortedPool = [...plan.libraryItems].sort((left, right) => (right.score || 0) - (left.score || 0));

  plan.travelAvailabilityRules = plan.travelAvailabilityRules || buildTravelAvailabilityRules(plan.arrivalTime, plan.departureTime);
  addTravelAnchors(plan);

  plan.days.forEach((day, dayIndex) => {
    const cityTemplate = getCityDayTemplate(dayIndex, plan);
    if (cityTemplate) {
      day.cityTheme = cityTemplate.label;
      day.areaKeysUsed = [...new Set(cityTemplate.areas || [])];
      day.title = getDayType(dayIndex, plan.totalDays) === "arrival"
        ? "Arrival and Namba food night"
        : getDayType(dayIndex, plan.totalDays) === "departure"
          ? "Final Osaka highlights"
          : cityTemplate.label;
    }

    const requiredSlots = getRequiredSlotsForDay(dayIndex, plan);
    requiredSlots.forEach((slotRule) => {
      const nextItem = pickBestSuggestedItem({
        day,
        sortedPool,
        usedNames,
        plan,
        filter: slotFilterForAvailability(dayIndex, plan, slotRule),
        preferredTimings: slotRule.preferredTimings || [],
        slot: slotRule.slot,
      });
      if (!nextItem) {
        return;
      }
      addSuggestedItemToDay(day, nextItem, usedNames, plan, slotRule.slot, slotRule.label);
    });

    const activityTargetCount = Math.min(
      getSuggestedCountForDay(dayIndex, plan.totalDays, plan.paceRule),
      getActivitySlotRules(dayIndex, plan).length,
    );
    while ((day.itineraryItems || []).filter((item) => item.type !== "transit_anchor").length < activityTargetCount) {
      const nextItem = pickBestSuggestedItem({
        day,
        sortedPool,
        usedNames,
        plan,
      });
      if (!nextItem) {
        break;
      }
      addSuggestedItemToDay(day, nextItem, usedNames, plan);
    }
  });

  fillMissingFirstDayCoreSlots(plan);
  enforceTravelAnchorsAndBoundaries(plan);
  plan.days.forEach((day) => refreshDayState(day, plan));
}

export function migrateDayItems(day) {
  if (day.itineraryItems?.length) {
    return day.itineraryItems.map((item, index) => ({
      ...item,
      id: item.id || `itinerary-${hashString(`${day.dateLabel}-${item.title}-${index}`)}`,
      sourceType: item.sourceType || "manual",
      type: item.type || (item.categoryLabel === "Food" ? "dining" : "activity"),
      slot: item.slot || guessSlotForItem(item),
      label: item.label || getSlotLabel(item.slot || guessSlotForItem(item)),
      categoryLabel: item.categoryLabel || "Other",
      detailLine: item.detailLine || "",
      michelinStatus: item.michelinStatus || "",
      guideNote: item.guideNote || "",
      guideUrl: item.guideUrl || "",
    }));
  }

  const highlights = (day.highlights || []).map((item, index) => ({
    id: item.id || `suggested-${hashString(`${day.dateLabel}-${item.title}-${index}`)}`,
    label: item.label || highlightLabel(item.timing || "afternoon"),
    title: item.title,
    description: item.description,
    detailLine: item.detailLine || "",
    area: item.area,
    timing: item.timing || "afternoon",
    slot: item.slot || guessSlotForItem(item),
    categoryLabel: item.categoryLabel || "Other",
    michelinStatus: item.michelinStatus || "",
    guideNote: item.guideNote || "",
    guideUrl: item.guideUrl || "",
    libraryItemId: item.libraryItemId || "",
    sourceType: "suggested",
    type: item.type || (item.categoryLabel === "Food" ? "dining" : "activity"),
  }));
  const manualItems = (day.manualItems || []).map((item, index) => ({
    id: item.id || `manual-${hashString(`${day.dateLabel}-${item.title}-${index}`)}`,
    label: item.label || "Stop",
    title: item.title,
    description: item.description,
    detailLine: item.detailLine || "",
    area: item.area,
    timing: item.timing || "afternoon",
    slot: item.slot || guessSlotForItem(item),
    categoryLabel: item.categoryLabel || "Other",
    michelinStatus: item.michelinStatus || "",
    guideNote: item.guideNote || "",
    guideUrl: item.guideUrl || "",
    libraryItemId: item.libraryItemId || "",
    sourceType: "manual",
    type: item.type || (item.categoryLabel === "Food" ? "dining" : "activity"),
  }));

  return [...highlights, ...manualItems];
}
