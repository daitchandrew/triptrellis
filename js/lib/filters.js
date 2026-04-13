// Filter and options functions

import { normalizeText, escapeAttribute } from "./utils.js";
import { CATEGORY_OPTIONS } from "./constants.js";
import { getRenderedDayItems } from "./itinerary.js";
import { scoreDayForItem } from "./scoring.js";

function displayCategoryLabel(category) {
  return category === "Nightlife & Entertainment" ? "Nightlife" : category;
}

export function getReplacementItemTitle(plan) {
  if (!plan.libraryOverlay?.open || plan.libraryOverlay.mode !== "replace") {
    return "";
  }
  const day = plan.days[plan.libraryOverlay.targetDayIndex];
  const item = (day?.itineraryItems || []).find((entry) => entry.id === plan.libraryOverlay.targetItemId);
  return item?.title || "";
}

export function getFilteredLibraryItems(plan) {
  const term = normalizeText(plan.librarySearch || "");
  const isFoodMode = plan.libraryCategory === "Food";
  const cuisineFilter = normalizeText(plan.libraryCuisineFilter || "all");
  const priceFilter = String(plan.libraryPriceFilter || "all").trim();
  const areaFilter = normalizeText(plan.libraryAreaFilter || "all");
  const addedTitles = new Set(
    plan.days.flatMap((day) => getRenderedDayItems(day).map((item) => normalizeText(item.title)))
  );
  const replacementTitle = getReplacementItemTitle(plan);
  if (replacementTitle) {
    addedTitles.delete(normalizeText(replacementTitle));
  }

  return plan.libraryItems.filter((item) => {
    if (addedTitles.has(normalizeText(item.name))) {
      return false;
    }

    const matchesCategory = plan.libraryCategory === "all" || item.categoryLabel === plan.libraryCategory;
    const matchesCuisine = !isFoodMode || cuisineFilter === "all" || normalizeText(item.cuisine || "") === cuisineFilter;
    const matchesPrice = priceFilter === "all" || item.priceTier === priceFilter;
    const matchesArea = areaFilter === "all" || normalizeText(item.areaLabel || item.area || "") === areaFilter;
    const matchesSearch = !term || [
      item.name,
      item.description,
      item.areaLabel,
      item.categoryLabel,
      item.cuisine,
      item.priceTier,
      item.michelinStatus,
      item.guideNote,
      ...(item.tags || []),
    ].some((value) => normalizeText(String(value || "")).includes(term));
    return matchesCategory && matchesCuisine && matchesPrice && matchesArea && matchesSearch;
  });
}

function getOverlayTargetDay(plan) {
  const dayIndex = plan.libraryOverlay?.targetDayIndex;
  if (Number.isInteger(dayIndex)) {
    return plan.days[dayIndex] || null;
  }
  return null;
}

function getPlannedCategoryCounts(day) {
  return (day?.itineraryItems || []).reduce((counts, item) => {
    const key = item.categoryLabel || "Other";
    counts[key] = (counts[key] || 0) + 1;
    return counts;
  }, {});
}

function getPlannedCuisineCounts(day) {
  return (day?.itineraryItems || []).reduce((counts, item) => {
    if (!item.cuisine) return counts;
    counts[item.cuisine] = (counts[item.cuisine] || 0) + 1;
    return counts;
  }, {});
}

function buildLibraryMatch(item, plan, targetDay) {
  const reasons = [];
  let score = item.score || 0;
  let dayFitScore = 0;
  let routeScore = 0;
  let varietyScore = 0;

  if (targetDay) {
    dayFitScore = scoreDayForItem(targetDay, item, plan.guide, plan.hotelBase, plan.totalDays, plan.focuses || [plan.focus]);
    score += dayFitScore * 1.6;
  }

  const dayAreas = new Set((targetDay?.itineraryItems || []).map((entry) => entry.area).filter(Boolean));
  const nearbyAreas = new Set([
    plan.hotelBase.areaKey,
    ...dayAreas,
    ...[...dayAreas].flatMap((areaKey) => plan.guide.areaAdjacency[areaKey] || []),
    ...(plan.guide.areaAdjacency[plan.hotelBase.areaKey] || []),
  ]);
  if (targetDay && dayAreas.has(item.area)) {
    routeScore = 4;
    score += routeScore;
    reasons.push("Keeps the route elegantly compact");
  } else if (nearbyAreas.has(item.area)) {
    routeScore = 2.2;
    score += routeScore;
    reasons.push("Easy from the current route");
  }

  const categoryCounts = getPlannedCategoryCounts(targetDay);
  const cuisineCounts = getPlannedCuisineCounts(targetDay);
  if (targetDay && (categoryCounts[item.categoryLabel] || 0) === 0) {
    varietyScore = 1.6;
    score += varietyScore;
    reasons.push("Adds a different kind of texture");
  } else if ((categoryCounts[item.categoryLabel] || 0) >= 1) {
    score -= 1.6;
  }
  if (item.cuisine && (cuisineCounts[item.cuisine] || 0) >= 1) {
    score -= 1.4;
  }

  if (targetDay && dayFitScore >= 4.5 && routeScore >= 2.2) {
    reasons.unshift("Best fit for this exact moment");
  }
  if (!targetDay && item.area === plan.hotelBase.areaKey) {
    score += 1.8;
    reasons.push("Easy from your base");
  }
  if (!reasons.length) {
    reasons.push(targetDay ? "Strong alternate for this stretch of the day" : "Strong city-wide fit");
  }

  return {
    score,
    dayFitScore,
    routeScore,
    varietyScore,
    reasons: [...new Set(reasons)].slice(0, 2),
    group: targetDay
      ? (dayFitScore >= 4.5 && routeScore >= 2.2 ? "best" : varietyScore > 0 ? "variety" : routeScore > 0 ? "nearby" : "more")
      : (item.area === plan.hotelBase.areaKey ? "nearBase" : "more"),
  };
}

export function getRankedLibraryItems(plan) {
  const targetDay = getOverlayTargetDay(plan);
  return getFilteredLibraryItems(plan)
    .map((item) => ({
      ...item,
      libraryMatch: buildLibraryMatch(item, plan, targetDay),
    }))
    .sort((left, right) => right.libraryMatch.score - left.libraryMatch.score);
}

export function groupRankedLibraryItems(items, plan) {
  const hasTargetDay = Number.isInteger(plan.libraryOverlay?.targetDayIndex);
  if (hasTargetDay) {
    const withGroupReason = (item, fallbackReason) => ({
      ...item,
      libraryMatch: {
        ...item.libraryMatch,
        reasons: [
          fallbackReason,
          ...(item.libraryMatch.reasons || []).filter((reason) => reason !== "Best fit for this day" && reason !== fallbackReason),
        ].slice(0, 2),
      },
    });
    const best = items.slice(0, 12);
    const bestIds = new Set(best.map((item) => item.id));
    const remaining = items.filter((item) => !bestIds.has(item.id));
    const variety = remaining.filter((item) => item.libraryMatch.varietyScore > 0).slice(0, 18).map((item) => withGroupReason(item, "Adds variety"));
    const varietyIds = new Set(variety.map((item) => item.id));
    const nearby = remaining
      .filter((item) => !varietyIds.has(item.id) && item.libraryMatch.routeScore > 0)
      .slice(0, 18)
      .map((item) => withGroupReason(item, "Near the current route"));
    const nearbyIds = new Set(nearby.map((item) => item.id));
    const more = remaining
      .filter((item) => !varietyIds.has(item.id) && !nearbyIds.has(item.id))
      .map((item) => withGroupReason(item, "Strong alternate"));

    return [
      { key: "best", title: "Best fits for this moment", subtitle: "The strongest options for this exact stretch of the day.", items: best },
      { key: "variety", title: "Adds a different texture", subtitle: "Useful when the day needs more contrast, energy, or range.", items: variety },
      { key: "nearby", title: "Easy to fold into the route", subtitle: "Natural additions that keep the route elegant and compact.", items: nearby },
      { key: "more", title: "Broader city options", subtitle: "Still strong, but less essential for this exact moment.", items: more },
    ].filter((group) => group.items.length);
  }

  const definitions = hasTargetDay
    ? [
        { key: "best", title: "Best fits for this day", subtitle: "Prioritized by route, timing, and what is already planned." },
        { key: "variety", title: "Adds a different texture", subtitle: "Useful when the day needs more contrast, energy, or range." },
        { key: "nearby", title: "Easy to fold into the route", subtitle: "Natural additions that keep the route elegant and compact." },
        { key: "more", title: "Broader city options", subtitle: "Still strong, but less essential for this exact moment." },
      ]
    : [
        { key: "nearBase", title: "Easy near your base", subtitle: "Useful when you want a graceful add without reshaping the day." },
        { key: "more", title: "Broader city options", subtitle: "Sorted by overall fit for the whole brief." },
      ];

  return definitions
    .map((group) => ({
      ...group,
      items: items.filter((item) => item.libraryMatch.group === group.key),
    }))
    .filter((group) => group.items.length);
}

export function renderCategoryOptions(selected) {
  return CATEGORY_OPTIONS
    .map((category) => `<option value="${category}" ${selected === category ? "selected" : ""}>${category === "all" ? "All categories" : displayCategoryLabel(category)}</option>`)
    .join("");
}

export function renderCuisineOptions(selected, libraryItems) {
  const cuisines = [...new Set(
    (libraryItems || [])
      .filter((item) => item.categoryLabel === "Food")
      .map((item) => String(item.cuisine || "").trim())
      .filter(Boolean)
  )].sort((left, right) => left.localeCompare(right));

  return [
    `<option value="all" ${selected === "all" ? "selected" : ""}>All cuisines</option>`,
    ...cuisines.map((cuisine) => `<option value="${escapeAttribute(cuisine)}" ${selected === cuisine ? "selected" : ""}>${cuisine}</option>`),
  ].join("");
}

export function renderPriceOptions(selected) {
  return ["all", "$", "$$", "$$$", "$$$$"]
    .map((price) => `<option value="${price}" ${selected === price ? "selected" : ""}>${price === "all" ? "All prices" : price}</option>`)
    .join("");
}

export function renderAllPriceOptions(selected) {
  return ["all", "Free", "$", "$$", "$$$", "$$$$"]
    .map((price) => `<option value="${price}" ${selected === price ? "selected" : ""}>${price === "all" ? "All prices" : price}</option>`)
    .join("");
}

export function renderAreaOptions(selected, libraryItems) {
  const areas = [...new Map(
    (libraryItems || [])
      .filter((item) => item.areaLabel || item.area)
      .map((item) => {
        const key = item.areaLabel || item.area || "";
        return [key.toLowerCase(), key];
      })
  ).values()].sort((a, b) => a.localeCompare(b));

  return [
    `<option value="all" ${selected === "all" ? "selected" : ""}>All areas</option>`,
    ...areas.map((area) => `<option value="${escapeAttribute(normalizeText(area))}" ${normalizeText(selected) === normalizeText(area) ? "selected" : ""}>${area}</option>`),
  ].join("");
}
