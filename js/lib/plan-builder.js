// Plan construction functions

import { normalizeText, hashString, basePlaceName, getPlaceIdentityKeys, formatDate, formatFocus, shiftDate, differenceInDays } from "./utils.js?v=triptrellis-semantic-dedupe-20260411-006";
import { focusThemes, budgetProfiles, paceRules, buildMergedFocusTheme } from "./constants.js";
import { categorySupplementLibraries } from "../data/cities/index.js";
import { categorizeLibraryItem, inferFoodCuisine, inferFoodPriceTier, inferFoodTiming, inferActivityPriceTier, expandLibraryDescription, buildLibraryDetailLine, polishLibraryDescription } from "./infer.js";
import { buildTravelAvailabilityRules } from "./itinerary.js";
import { buildNoteProfile, rankHotels, scoreCollection, detectAreaFromText, bestAreaFromNotes } from "./scoring.js";

export function formatFocusKey(focusTheme) {
  const match = Object.entries(focusThemes).find(([, value]) => value === focusTheme);
  return match ? formatFocus(match[0]).toLowerCase() : "well-matched";
}

function joinReadableList(items) {
  if (!items.length) return "";
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

function inferHotelAmenities(hotel, area) {
  if (hotel.amenities?.length) return hotel.amenities.slice(0, 3);

  const amenityPool = [];
  const tier = hotel.tier || "premium";

  if (tier === "luxury") {
    amenityPool.push("a proper spa or wellness floor", "destination dining", "high-touch concierge service");
  } else if (tier === "smart") {
    amenityPool.push("comfortable streamlined rooms", "well-run public spaces", "easy neighborhood access");
  } else {
    amenityPool.push("design-led rooms", "a polished social space", "strong location leverage");
  }

  if (hotel.bestFor?.includes("food")) amenityPool.push("a strong restaurant or breakfast program");
  if (hotel.bestFor?.includes("nightlife")) amenityPool.push("an easy bar or late-night scene nearby");
  if (hotel.bestFor?.includes("wellness")) amenityPool.push("spa, pool, or recovery-friendly quiet");
  if (hotel.bestFor?.includes("design")) amenityPool.push("thoughtful interiors with more character than a generic chain stay");
  if (hotel.bestFor?.includes("culture")) amenityPool.push(`walkable access to ${area.label}'s cultural sights`);
  if (hotel.bestFor?.includes("shopping")) amenityPool.push("quick reach to the city's best shopping stretches");
  if (hotel.bestFor?.includes("value")) amenityPool.push("a better price-to-location ratio than most central options");

  return [...new Set(amenityPool)].slice(0, 3);
}

function buildHotelAmenityLine(hotel, area) {
  const amenityHighlights = inferHotelAmenities(hotel, area);
  return amenityHighlights.length ? `Amenities and strengths: ${joinReadableList(amenityHighlights)}.` : "";
}

function buildHotelOptionSummary(hotel, area) {
  const tierLead = hotel.tier === "luxury"
    ? "A polished luxury base"
    : hotel.tier === "smart"
      ? "A practical, good-value base"
      : "A strong, well-located base";
  return `${tierLead} in ${area.label} with ${hotel.vibe.charAt(0).toLowerCase()}${hotel.vibe.slice(1)}`;
}

function getFallbackAreaKey(guide) {
  return Object.keys(guide.hotelAreas || {})[0] || "";
}

function resolveAreaKey(guide, areaKey = "") {
  if (areaKey && guide.hotelAreas?.[areaKey]) {
    return areaKey;
  }
  return getFallbackAreaKey(guide);
}

function resolveArea(guide, areaKey = "") {
  const safeAreaKey = resolveAreaKey(guide, areaKey);
  return {
    areaKey: safeAreaKey,
    area: guide.hotelAreas?.[safeAreaKey] || {
      label: "Central area",
      mood: "practical and central",
      strengths: [],
    },
  };
}

function getAllKnownHotels(guide) {
  return Object.values(guide.hotels || {}).flat().filter(Boolean);
}

function findKnownHotelMatch(guide, hotelName = "") {
  const normalizedHotelName = normalizeText(hotelName);
  if (!normalizedHotelName) return null;

  return getAllKnownHotels(guide).find((hotel) => {
    const normalizedKnownName = normalizeText(hotel.name);
    return normalizedHotelName === normalizedKnownName
      || normalizedHotelName.includes(normalizedKnownName)
      || normalizedKnownName.includes(normalizedHotelName);
  }) || null;
}

function buildHotelRecommendationDescription(hotel, area, guide) {
  const { areaKey } = resolveArea(guide, hotel.area);
  const nearbyLabels = (guide.areaAdjacency?.[areaKey] || [])
    .map((areaKey) => guide.hotelAreas[areaKey]?.label)
    .filter(Boolean)
    .slice(0, 2);
  const movementLine = nearbyLabels.length
    ? `It works especially well if you want to move easily between ${area.label} and ${nearbyLabels.join(" and ")} without wasting the trip on extra transit.`
    : `It works well when you want days that feel anchored in ${area.label} instead of scattered across the whole city.`;
  const intro = hotel.description || hotel.vibe;
  const amenityLine = buildHotelAmenityLine(hotel, area);
  return [intro, amenityLine, movementLine].filter(Boolean).join(" ");
}

export function parseExistingHotels(text, cityKey, cityLabel) {
  if (!text || !text.trim()) return [];

  return text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const dashParts = line.split("-").map((part) => part.trim()).filter(Boolean);
      const first = normalizeText(dashParts[0] || "");
      const looksLikeCity = first === normalizeText(cityLabel) || first === cityKey;

      if (dashParts.length >= 2 && looksLikeCity) {
        return {
          cityKey,
          hotel: dashParts[1] || "",
          area: dashParts[2] || "",
        };
      } else if (dashParts.length >= 2) {
        return {
          cityKey,
          hotel: dashParts[0] || "",
          area: dashParts[1] || "",
        };
      } else {
        return {
          cityKey,
          hotel: line,
          area: "",
        };
      }
    })
    .filter((entry) => entry.hotel && entry.hotel.trim());
}

export function buildSelectedHotelDescription(hotel, areaKey, area, guide) {
  const hotelName = typeof hotel === "string" ? hotel : hotel?.name || "Your hotel";
  const nearbyLabels = (guide.areaAdjacency[areaKey] || [])
    .map((areaKey) => guide.hotelAreas[areaKey]?.label)
    .filter(Boolean)
    .slice(0, 2);
  const strengths = (area.strengths || []).slice(0, 3);
  const walkabilityLine = nearbyLabels.length
    ? `From here you can build easy days around ${area.label}, with straightforward reach to ${nearbyLabels.join(" and ")} without the trip feeling scattered.`
    : `From here you can build easy days around ${area.label} without forcing long zig-zag travel across the city.`;
  const strengthsLine = strengths.length
    ? `${area.label} is especially strong for ${strengths.join(", ")}, so ${hotelName} gives the trip a more useful base than a generic central pick.`
    : `${area.label} gives the trip a more coherent neighborhood identity than just staying somewhere random and central.`;
  const descriptionLine = typeof hotel === "object" && hotel
    ? buildHotelRecommendationDescription(hotel, area, guide)
    : "";

  return [descriptionLine, `${area.mood.charAt(0).toUpperCase() + area.mood.slice(1)} is the mood here.`, walkabilityLine, strengthsLine]
    .filter(Boolean)
    .join(" ");
}

export function determineHotelBase({ cityKey, guide, budget, focuses, hotelStatus, existingHotels, noteProfile, rankedHotels, selectedHotelName = "" }) {
  const existing = existingHotels.find((entry) => entry.cityKey === cityKey) || existingHotels[0];

  if (hotelStatus === "have-hotel" && existing) {
    const knownMatch = findKnownHotelMatch(guide, existing.hotel);
    const detectedAreaKey = knownMatch?.area
      || detectAreaFromText(guide, `${existing.hotel} ${existing.area} ${noteProfile.text}`)
      || bestAreaFromNotes(guide, noteProfile);
    const { areaKey, area } = resolveArea(guide, detectedAreaKey);
    const vibe = knownMatch
      ? knownMatch.vibe
      : `Your base in ${area.label}, which feels ${area.mood}.`;
    const hotelName = knownMatch?.name || existing.hotel;
    return {
      hotelName,
      areaKey,
      areaLabel: area.label,
      source: "Your booked hotel",
      vibe,
      strategy: `Suggestions are now heavily weighted toward ${area.label} and adjacent neighborhoods so the itinerary actually changes based on where you are staying.`,
      influence: `Hotel influence: high. The planner is biasing sights, meals, and evenings toward ${area.label}${guide.areaAdjacency[areaKey]?.length ? ` plus ${guide.areaAdjacency[areaKey].map((key) => guide.hotelAreas[key]?.label).filter(Boolean).slice(0, 2).join(" and ")}` : ""}.`,
      longDescription: buildSelectedHotelDescription(knownMatch || hotelName, areaKey, area, guide),
      amenityLine: knownMatch ? buildHotelAmenityLine(knownMatch, area) : "",
    };
  }

  const selectedRecommended = rankedHotels.find(({ hotel }) => hotel.name === selectedHotelName)?.hotel;
  const recommended = selectedRecommended || (rankedHotels[0] || {}).hotel;
  if (!recommended) {
    const fallback = (guide.hotels?.[budget] || Object.values(guide.hotels || {}).flat())[0];
    const { areaKey: fallbackAreaKey, area: fallbackArea } = resolveArea(guide, fallback?.area);
    return {
      hotelName: fallback?.name || "Selected hotel",
      areaKey: fallbackAreaKey,
      areaLabel: fallbackArea.label,
      source: "Selected hotel",
      vibe: fallback?.vibe || `A practical base in ${fallbackArea.label}.`,
      strategy: `${fallback?.name || "This hotel"} is recommended because ${fallbackArea.label} best supports this version of the trip.`,
      influence: `Planner bias: ${fallbackArea.label} is being used as the primary anchor for routing, food picks, and evening suggestions.`,
      longDescription: buildSelectedHotelDescription(fallback, fallbackAreaKey, fallbackArea, guide),
      amenityLine: fallback ? buildHotelAmenityLine(fallback, fallbackArea) : "",
    };
  }
  const { areaKey, area } = resolveArea(guide, recommended.area);

  return {
    hotelName: recommended.name,
    areaKey,
    areaLabel: area.label,
    source: "Selected hotel",
    vibe: recommended.vibe,
    strategy: `${recommended.name} is recommended because ${area.label} best supports this version of the trip.`,
    influence: `Planner bias: ${area.label} is being used as the primary anchor for routing, food picks, and evening suggestions.`,
    longDescription: buildSelectedHotelDescription(recommended, areaKey, area, guide),
    amenityLine: buildHotelAmenityLine(recommended, area),
  };
}

export function buildHotelRecommendations(rankedHotels, guide, hotelBase, budgetProfile, focus, focusTheme, noteProfile, hasExistingHotel = false) {
  const recommendations = rankedHotels.slice(0, 4).map(({ hotel }) => {
    const { areaKey, area } = resolveArea(guide, hotel.area);
    const matchedTags = hotel.bestFor.filter((tag) => (
      focusTheme.wantedTags.includes(tag)
      || budgetProfile.wantedTags.includes(tag)
      || noteProfile.tags.includes(tag)
    )).slice(0, 2);
    const matchLine = matchedTags.length
      ? `Best for ${matchedTags.join(" and ")}.`
      : `Best for a ${budgetProfile.label.toLowerCase()} ${formatFocus(focus).toLowerCase()} trip.`;
    return {
      name: hotel.name,
      areaKey,
      areaLabel: area.label,
      tierLabel: hotel.tier ? hotel.tier.charAt(0).toUpperCase() + hotel.tier.slice(1) : "",
      vibe: hotel.vibe,
      summary: buildHotelOptionSummary(hotel, area),
      description: buildHotelRecommendationDescription(hotel, area, guide),
      amenitiesLine: buildHotelAmenityLine(hotel, area),
      matchLine,
      isPrimary: hotel.name === hotelBase.hotelName,
    };
  });

  if (hasExistingHotel && !recommendations.some((r) => r.name === hotelBase.hotelName)) {
    return [{
      name: hotelBase.hotelName,
      areaKey: hotelBase.areaKey,
      areaLabel: hotelBase.areaLabel,
      tierLabel: "",
      vibe: hotelBase.vibe,
      summary: `${hotelBase.areaLabel} base with ${hotelBase.vibe.charAt(0).toLowerCase()}${hotelBase.vibe.slice(1)}`,
      description: hotelBase.longDescription || hotelBase.vibe,
      amenitiesLine: "",
      matchLine: "Your selected hotel",
      isPrimary: true,
    }, ...recommendations.slice(0, 3)];
  }

  return recommendations;
}

export function buildDontMissWhy(item, hotelBase, focusTheme, budgetProfile, noteProfile) {
  const reasons = [];
  const itemAreaLabel = item.areaLabel || "";

  if (item.area === hotelBase.areaKey) {
    reasons.push(`right by your base in ${hotelBase.areaLabel}`);
  } else if ((item.tags || []).some((tag) => focusTheme.wantedTags.includes(tag))) {
    reasons.push(`strong match for a ${formatFocusKey(focusTheme)} trip`);
  }

  if ((item.tags || []).some((tag) => budgetProfile.wantedTags.includes(tag))) {
    reasons.push(`fits a ${budgetProfile.label.toLowerCase()} plan`);
  }

  if ((item.tags || []).some((tag) => noteProfile.tags.includes(tag))) {
    reasons.push("matches your notes");
  }

  if (!reasons.length && itemAreaLabel) {
    reasons.push(`easy to work into a ${itemAreaLabel} day`);
  }

  return reasons[0] ? `Why it surfaced: ${reasons[0]}.` : "Why it surfaced: high overall fit for this version of the trip.";
}

export function buildDontMissList({ rankedCantMiss, rankedActivities, rankedRestaurants, guide, hotelBase, focusTheme, budgetProfile, noteProfile }) {
  const pool = [
    ...rankedCantMiss.slice(0, 10).map((item) => ({ ...item, sourceCategory: "Cultural Sight" })),
    ...rankedActivities.slice(0, 10).map((item) => ({ ...item, sourceCategory: categorizeLibraryItem(item, "activity") })),
    ...rankedRestaurants.slice(0, 10).map((item) => ({ ...item, sourceCategory: "Food" })),
  ];

  const seen = new Set();
  return pool
    .sort((left, right) => {
      const leftPenalty = getPlaceIdentityKeys(left.name).length > 2 ? 1.4 : 0;
      const rightPenalty = getPlaceIdentityKeys(right.name).length > 2 ? 1.4 : 0;
      return (right.score - rightPenalty) - (left.score - leftPenalty);
    })
    .filter((item) => {
      const keys = getPlaceIdentityKeys(item.name);
      if (keys.some((key) => seen.has(key))) return false;
      keys.forEach((key) => seen.add(key));
      return true;
    })
    .slice(0, 8)
    .map((item) => ({
      name: item.name,
      description: polishLibraryDescription(item.description),
      categoryLabel: item.categoryLabel || item.sourceCategory,
      areaLabel: item.areaLabel || guide.hotelAreas[item.area]?.label || item.area,
      why: buildDontMissWhy(item, hotelBase, focusTheme, budgetProfile, noteProfile),
    }));
}

export function buildDayPlan({ guide, hotelBase, noteProfile, budgetProfile, focusTheme, dayNumber, totalDays, date, paceRule }) {
  const isArrivalDay = dayNumber === 1;
  const isDepartureDay = dayNumber === totalDays;
  return {
    title: isArrivalDay ? "Arrival and orientation" : isDepartureDay && totalDays > 1 ? "Departure and final highlights" : `Day ${dayNumber}`,
    dateLabel: formatDate(date),
    flow: `Start with ${hotelBase.areaLabel} and build this day around one or two connected neighborhoods.`,
    baseNote: `Hotel: ${hotelBase.hotelName} in ${hotelBase.areaLabel}.`,
    summary: `Suggested around a ${budgetProfile.label.toLowerCase()} ${focusTheme.headline.toLowerCase().replace(/\.$/, "")}.`,
    areaKeysUsed: [hotelBase.areaKey],
    itineraryItems: [],
    reservationNote: `Good pacing for a ${paceRule.label.toLowerCase()}`,
  };
}

export function buildBookingWatchlist(guide, hotelBase, noteProfile, budgetProfile) {
  const list = [
    `Base logistics: confirm how you'll move in and out of ${hotelBase.areaLabel}.`,
    ...guide.food
      .filter((item) => item.tags.includes("luxury") || item.reservation.toLowerCase().includes("book"))
      .slice(0, 3)
      .map((item) => `Food: ${item.name} - ${item.reservation}`),
  ];

  list.unshift(`Budget lens: ${budgetProfile.headline}`);

  if (noteProfile.tags.includes("nightlife")) {
    list.push("Night plan: leave one evening flexible in case you want to stay out longer than expected.");
  }

  if (noteProfile.tags.includes("wellness")) {
    list.push("Pacing: protect one slower morning so the trip does not get flattened by back-to-back big days.");
  }

  return [...new Set(list)];
}

export function buildUnresolvedList(guide, hotelBase, noteProfile, budgetProfile, focusTheme) {
  const list = [
    `Transit timing around ${hotelBase.areaLabel} can still change based on weather and traffic.`,
    guide.transferNote,
  ];

  list.push(`Trip focus: ${focusTheme.headline}`);

  if (noteProfile.tags.includes("shopping")) {
    list.push("Shopping-heavy days usually go longer than expected, so leave room for drift.");
  }

  if (noteProfile.tags.includes("culture")) {
    list.push("Headline cultural sights are best early, so avoid late nights beforehand.");
  }

  if (budgetProfile.label === "Luxury") {
    list.push("Higher-end meals and hotel-driven experiences often need firmer timing than the rest of the trip.");
  }

  if (budgetProfile.label === "Smart spend") {
    list.push("Keep a little flexibility for queues, markets, and casual places that are worth doing even without reservations.");
  }

  return [...new Set(list)];
}

export function normalizeLibraryItem(item, category, index, cityKey = "") {
  const categoryLabel = item.categoryLabel || categorizeLibraryItem(item, category);
  const areaLabel = item.areaLabel || item.area || "";
  const normalizedItem = {
    ...item,
    cityKey,
    areaLabel,
    reservation: item.reservation || "",
    cuisine: item.cuisine || "",
    tags: item.tags || [],
    timing: item.timing || (category === "food" ? inferFoodTiming({ ...item, cityKey }) : "afternoon"),
  };
  const cuisine = categoryLabel === "Food"
    ? inferFoodCuisine(normalizedItem)
    : normalizedItem.cuisine;
  const priceTier = categoryLabel === "Food"
    ? inferFoodPriceTier({ ...normalizedItem, cuisine })
    : inferActivityPriceTier({ ...normalizedItem, categoryLabel });

  return {
    id: `${category}-${index}-${hashString(item.name)}`,
    category,
    categoryLabel,
    name: item.name,
    description: expandLibraryDescription(normalizedItem, categoryLabel),
    area: normalizedItem.area,
    areaLabel: normalizedItem.areaLabel,
    tags: normalizedItem.tags,
    timing: normalizedItem.timing,
    detailLine: buildLibraryDetailLine({ ...normalizedItem, cuisine, priceTier }, categoryLabel),
    reservation: normalizedItem.reservation,
    cuisine,
    priceTier,
    score: item.score || 0,
  };
}

function scoreLibraryNameForDedupe(item) {
  const name = normalizeText(item.name);
  const identityCount = getPlaceIdentityKeys(item.name).length;
  let score = item.score || 0;

  if (!/\b(?:experience|visit|history deep dive|paper model|spectacle|tick|tower climb|pairing|circuit|wander|walk|evening|morning|afternoon)\b/.test(name)) {
    score += 20;
  }
  if (name === basePlaceName(item.name)) {
    score += 8;
  }
  if (item.category === "supplement") {
    score += 2;
  }
  if (identityCount > 2) {
    score -= 18;
  }
  if (/\b(?:and|to|plus)\b/.test(name) && identityCount > 1) {
    score -= 8;
  }
  score -= Math.max(0, name.length - 36) * 0.03;

  return score;
}

function chooseCleanerLibraryDuplicate(existing, candidate) {
  return scoreLibraryNameForDedupe(candidate) > scoreLibraryNameForDedupe(existing)
    ? candidate
    : existing;
}

export function buildLibraryItems({ cityKey, guide, cantMiss, doThese, restaurants }) {
  const combined = [
    ...cantMiss.map((item, index) => normalizeLibraryItem(item, "sight", index, cityKey)),
    ...doThese.map((item, index) => normalizeLibraryItem(item, "activity", index, cityKey)),
    ...restaurants.map((item, index) => normalizeLibraryItem(item, "food", index, cityKey)),
    ...(categorySupplementLibraries[cityKey] || []).map((item, index) => normalizeLibraryItem(item, "supplement", index + 1000, cityKey)),
  ];

  const byPlace = new Map();
  combined
    .map((item) => ({
      ...item,
      areaLabel: guide.hotelAreas[item.area]?.label || item.areaLabel || item.area,
    }))
    .forEach((item) => {
      const key = `${item.area || "any"}:${basePlaceName(item.name)}`;
      const identityKeys = getPlaceIdentityKeys(item.name);
      const conflictingKey = identityKeys.find((identityKey) => byPlace.has(identityKey));
      const mapKey = conflictingKey || key;
      const existing = byPlace.get(mapKey);
      const chosen = existing ? chooseCleanerLibraryDuplicate(existing, item) : item;
      if (existing && chosen === item) {
        [...byPlace.entries()].forEach(([existingKey, value]) => {
          if (value === existing) byPlace.delete(existingKey);
        });
      }
      identityKeys.forEach((identityKey) => byPlace.set(identityKey, chosen));
      byPlace.set(key, chosen);
    });

  return [...new Map([...byPlace.values()].map((item) => [item.id, item])).values()];
}

export function buildTripPlan({ cityKey, guide, startDate, endDate, arrivalTime = "afternoon", departureTime = "morning", budget, pace, focus, focuses, notes, hotelStatus, existingHotels, selectedHotelName = "" }, loadSavedItinerariesFn, populateSuggestedItineraryFn) {
  focuses = focuses && focuses.length ? focuses : [focus || "culture"];
  const totalDays = differenceInDays(startDate, endDate) + 1;
  const mergedFocusTheme = buildMergedFocusTheme(focuses);
  const noteProfile = buildNoteProfile(notes, guide, focuses);
  const travelAvailabilityRules = buildTravelAvailabilityRules(arrivalTime, departureTime);
  const budgetProfile = budgetProfiles[budget];
  const rankedHotels = rankHotels({ guide, budget, focuses, noteProfile });
  const hotelBase = determineHotelBase({ cityKey, guide, budget, focuses, hotelStatus, existingHotels, noteProfile, rankedHotels, selectedHotelName });
  const paceRule = paceRules[pace];
  const rankedCantMiss = scoreCollection(guide.cantMiss, guide, hotelBase, noteProfile, focuses, budget, { includeTimingBoost: false, baseCategory: "sight" });
  const rankedActivities = scoreCollection(guide.activities, guide, hotelBase, noteProfile, focuses, budget, { includeTimingBoost: true, baseCategory: "activity" });
  const rankedRestaurants = scoreCollection(guide.food, guide, hotelBase, noteProfile, focuses, budget, { includeTimingBoost: false, baseCategory: "food" });
  const cantMiss = rankedCantMiss.slice(0, 10);
  const doThese = rankedActivities.slice(0, 14);
  const restaurants = rankedRestaurants.slice(0, 14);
  const libraryItems = buildLibraryItems({ cityKey, guide, cantMiss: rankedCantMiss, doThese: rankedActivities, restaurants: rankedRestaurants });
  const days = Array.from({ length: totalDays }, (_, index) =>
    buildDayPlan({
      guide,
      hotelBase,
      noteProfile,
      budgetProfile,
      focusTheme: mergedFocusTheme,
      dayNumber: index + 1,
      totalDays,
      date: shiftDate(startDate, index),
      paceRule,
    })
  );

  const plan = {
    cityKey,
    guide,
    startDate,
    endDate,
    arrivalTime,
    departureTime,
    travelAvailabilityRules,
    totalDays,
    budget,
    budgetProfile,
    focus,
    focuses,
    notes,
    hotelStatus,
    selectedHotelName,
    tripRequest: {
      cityKey,
      startDate,
      endDate,
      arrivalTime,
      departureTime,
      availabilityRules: travelAvailabilityRules,
      generationInstructions: travelAvailabilityRules.generationInstructions,
      budget,
      pace,
      focus,
      focuses,
      notes,
      hotelStatus,
      existingHotels,
    },
    hotelBase,
    paceRule,
    focusTheme: mergedFocusTheme,
    noteProfile,
    hotelRecommendations: [],
    cantMiss,
    doThese,
    restaurants,
    dontMiss: [],
    librarySearch: "",
    libraryCategory: "all",
    libraryCuisineFilter: "all",
    libraryPriceFilter: "all",
    libraryAreaFilter: "all",
    libraryOverlay: {
      open: false,
      mode: "add",
      targetDayIndex: null,
      targetItemId: null,
      targetSlot: "",
    },
    savedTrips: loadSavedItinerariesFn(),
    libraryItems,
    bookingWatchlist: buildBookingWatchlist(guide, hotelBase, noteProfile, budgetProfile),
    unresolved: buildUnresolvedList(guide, hotelBase, noteProfile, budgetProfile, mergedFocusTheme),
    days,
  };

  const hotelRecommendations = buildHotelRecommendations(rankedHotels, guide, hotelBase, budgetProfile, focuses, mergedFocusTheme, noteProfile, hotelStatus === "have-hotel");
  const dontMiss = buildDontMissList({
    rankedCantMiss,
    rankedActivities,
    rankedRestaurants,
    guide,
    hotelBase,
    focusTheme: mergedFocusTheme,
    budgetProfile,
    noteProfile,
  });
  plan.hotelRecommendations = hotelRecommendations;
  plan.dontMiss = dontMiss;
  populateSuggestedItineraryFn(plan);
  return plan;
}
