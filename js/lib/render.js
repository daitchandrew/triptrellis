// HTML rendering functions

import { escapeHtml, escapeAttribute, formatDate, formatDateSafe, formatFocus, normalizeText } from "./utils.js";
import { getRankedLibraryItems, groupRankedLibraryItems, renderCategoryOptions, renderCuisineOptions, renderAllPriceOptions, renderAreaOptions } from "./filters.js";
import { enforceTravelAnchorsAndBoundaries, getSlotLabel, getSlotItems, getVisibleSlotsForDay } from "./itinerary.js";
import { loadSavedItineraries } from "./state.js";

function displayCategoryLabel(category) {
  if (category === "Amusement & Activities") return "Amusement";
  return category === "Nightlife & Entertainment" ? "Nightlife" : category;
}

function displayMichelinLabel(status) {
  const value = String(status || "").trim();
  if (!value) return "";
  if (value === "MICHELIN Guide") return "Guide";
  return value;
}

export function renderLibraryMetaLine(item) {
  return [displayCategoryLabel(item.categoryLabel), item.areaLabel, item.cuisine, item.priceTier, displayMichelinLabel(item.michelinStatus)].filter(Boolean).join(" • ");
}

export function renderItemBadges(item, options = {}) {
  const {
    includeCuisine = false,
    rowClass = "lib-tag-row",
  } = options;
  const tags = [];

  if (item.categoryLabel) {
    tags.push(`<span class="lib-tag lib-tag--category">${escapeHtml(displayCategoryLabel(item.categoryLabel))}</span>`);
  }
  if (item.michelinStatus) {
    tags.push(`<span class="lib-tag lib-tag--michelin">${escapeHtml(displayMichelinLabel(item.michelinStatus))}</span>`);
  }
  const areaLabel = item.areaLabel || item.area;
  if (areaLabel) {
    tags.push(`<span class="lib-tag lib-tag--area">${escapeHtml(areaLabel)}</span>`);
  }
  if (item.priceTier) {
    tags.push(`<span class="lib-tag lib-tag--price">${escapeHtml(item.priceTier)}</span>`);
  }
  if (includeCuisine && item.cuisine) {
    tags.push(`<span class="lib-tag lib-tag--cuisine">${escapeHtml(item.cuisine)}</span>`);
  }

  return tags.length ? `<div class="${rowClass}">${tags.join("")}</div>` : "";
}

export function renderLibraryTags(item) {
  return renderItemBadges(item);
}

function renderWorkspaceStats(plan) {
  const totalPlannedStops = plan.days.reduce((count, day) => count + (day.itineraryItems || []).length, 0);
  const uniqueAreas = new Set(
    plan.days.flatMap((day) => (day.itineraryItems || []).map((item) => item.areaLabel || item.area).filter(Boolean))
  ).size;

  return `
    <div class="workspace-stats">
      <article class="workspace-stat">
        <span class="workspace-stat-label">Draft scope</span>
        <strong>${totalPlannedStops}</strong>
        <p>${plan.totalDays} days of anchors, meals, and routeable stops already holding the brief together.</p>
      </article>
      <article class="workspace-stat">
        <span class="workspace-stat-label">Area balance</span>
        <strong>${uniqueAreas || 1}</strong>
        <p>Areas already represented in this version before you tighten, simplify, or pull the trip another way.</p>
      </article>
      <article class="workspace-stat">
        <span class="workspace-stat-label">Editing depth</span>
        <strong>${plan.libraryItems.length}</strong>
        <p>Places you can add, replace, and reorder without throwing away the whole brief.</p>
      </article>
    </div>
  `;
}

function getTripAdjustmentOptions(plan) {
  const options = [
    { key: "more-local", label: "More local", detail: "Less obvious, more neighborhood-led picks." },
    { key: "less-walking", label: "Less walking", detail: "Tighter routing with fewer cross-town jumps." },
    { key: "more-food", label: "More food", detail: "Restaurants, cafes, markets, and snack stops lead more of the plan." },
    { key: "more-premium", label: "More premium", detail: "More polished, reservation-worthy, special-feeling choices." },
    { key: "more-relaxed", label: "More relaxed", detail: "Slower days with more breathing room." },
    { key: "more-nightlife", label: "More nightlife", detail: "Stronger evening finishes and after-dark energy." },
  ];

  if ((plan.hotelRecommendations || []).some((hotel) => !hotel.isPrimary)) {
    options.push({ key: "swap-base", label: "Try another base", detail: "Recenter the trip around another strong hotel area." });
  }

  return options;
}

function renderTripAdjustmentPanel(plan) {
  const history = plan.adjustmentHistory || [];
  return `
    <section class="section-card trip-adjust-panel">
      <div class="trip-adjust-head">
        <div>
          <p class="section-kicker">Refine after review</p>
          <h3 class="section-title">Steer the brief without rebuilding it</h3>
          <p class="card-subtitle">Shift the pace, neighborhood mix, restaurant weight, or evening tone once you know what should change next.</p>
        </div>
        ${history.length ? `<span class="adjust-history-pill">${history.length} refinement${history.length === 1 ? "" : "s"} applied</span>` : ""}
      </div>
      <div class="trip-adjust-grid">
        ${getTripAdjustmentOptions(plan).map((option) => `
          <button class="trip-adjust-card" type="button" data-action="adjust-trip" data-adjustment="${escapeAttribute(option.key)}">
            <span>${escapeHtml(option.label)}</span>
            <small>${escapeHtml(option.detail)}</small>
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function getAreaUsage(plan) {
  const counts = new Map();
  (plan.days || []).forEach((day) => {
    (day.itineraryItems || []).forEach((item) => {
      if (item.type === "transit_anchor") return;
      const key = item.area || normalizeText(item.areaLabel || "");
      if (!key) return;
      const existing = counts.get(key) || {
        key,
        label: item.areaLabel || plan.guide.hotelAreas?.[key]?.label || key,
        count: 0,
      };
      existing.count += 1;
      counts.set(key, existing);
    });
  });
  return [...counts.values()].sort((left, right) => right.count - left.count);
}

function renderAreaSummary(plan) {
  const areas = getAreaUsage(plan);
  const primary = areas[0] || { label: plan.hotelBase.areaLabel, count: 0 };
  const adjacent = (plan.guide.areaAdjacency?.[plan.hotelBase.areaKey] || [])
    .map((areaKey) => plan.guide.hotelAreas?.[areaKey]?.label)
    .filter(Boolean)
    .slice(0, 3);

  return `
    <section class="section-card area-compass-section">
      <div class="area-compass-main">
        <p class="section-kicker">Where the trip is centered</p>
        <h3 class="section-title">${escapeHtml(primary.label)}</h3>
        <p class="card-subtitle">${escapeHtml(plan.hotelBase.hotelName)} anchors the plan in ${escapeHtml(plan.hotelBase.areaLabel)}, with the busiest days clustered around the areas that keep transit friction lower and the trip easier to live inside.</p>
      </div>
      <div class="area-compass-grid">
        <article>
          <span>Hotel base</span>
          <strong>${escapeHtml(plan.hotelBase.areaLabel)}</strong>
          <p>${escapeHtml(plan.hotelBase.vibe)}</p>
        </article>
        <article>
          <span>Most-used area</span>
          <strong>${escapeHtml(primary.label)}</strong>
          <p>${primary.count ? `${primary.count} planned stops appear here or connect through it.` : "The plan will build around this once stops are added."}</p>
        </article>
        <article>
          <span>Easy adjacent areas</span>
          <strong>${adjacent.length ? escapeHtml(adjacent.join(" / ")) : "Nearby cluster"}</strong>
          <p>These are the easiest areas to pair when you want the trip to branch out without losing the calm logic of the base.</p>
        </article>
      </div>
    </section>
  `;
}

function getDayQualityLabels(day, plan) {
  const items = day.itineraryItems || [];
  const areas = [...new Set(items.map((item) => item.area).filter(Boolean))];
  const categories = items.map((item) => item.categoryLabel).filter(Boolean);
  const labels = [];

  if (areas.length <= 2) labels.push("Low transit");
  if (items.some((item) => item.cuisine || item.categoryLabel === "Food")) labels.push("Food-forward");
  if (categories.some((category) => ["Cultural Sight", "Museum"].includes(category))) labels.push("Culture day");
  if (items.some((item) => item.slot === "late-night" || item.categoryLabel === "Nightlife & Entertainment")) labels.push("Nightlife finish");
  if (items.some((item) => ["Museum", "Shopping"].includes(item.categoryLabel))) labels.push("Rain-friendly");
  if (areas.includes(plan.hotelBase.areaKey)) labels.push("Hotel-adjacent");

  return [...new Set(labels)].slice(0, 4);
}

function getUniqueDayAreas(day, plan) {
  return [...new Set((day.itineraryItems || [])
    .map((item) => item.areaLabel || plan.guide.hotelAreas?.[item.area]?.label || item.area)
    .filter(Boolean))];
}

function renderDayMeta(day) {
  const plannedStops = (day.itineraryItems || []).length;
  const areaCount = [...new Set((day.itineraryItems || []).map((item) => item.areaLabel || item.area).filter(Boolean))].length;
  const hasTransit = (day.itineraryItems || []).some((item) => item.type === "transit_anchor");
  const routeLabel = hasTransit
    ? "Anchored day"
    : areaCount >= 3
      ? "Cross-town route"
      : "Compact route";

  return `
    <div class="day-meta-row">
      <span class="day-meta-pill">${plannedStops} ${plannedStops === 1 ? "planned stop" : "planned stops"}</span>
      <span class="day-meta-pill">${areaCount || 1} ${areaCount === 1 ? "area" : "areas"}</span>
      <span class="day-meta-pill">${routeLabel}</span>
    </div>
  `;
}

function buildDaySequenceNarrative(day, plan) {
  const items = (day.itineraryItems || []).filter((item) => item.type !== "transit_anchor");
  const first = items[0];
  const last = items[items.length - 1];
  const areas = getUniqueDayAreas(day, plan);

  if (!items.length) {
    return `This day is still open enough to steer once you know where you want the strongest energy, reservation, or neighborhood pull to land.`;
  }

  if (first && last && first !== last) {
    const firstArea = first.areaLabel || plan.guide.hotelAreas?.[first.area]?.label || first.area || plan.hotelBase.areaLabel;
    const lastArea = last.areaLabel || plan.guide.hotelAreas?.[last.area]?.label || last.area || plan.hotelBase.areaLabel;
    return `It opens around ${firstArea}, then gradually resolves toward ${lastArea} so the day feels sequenced instead of scattered.`;
  }

  if (areas.length === 1) {
    return `Most of the day stays anchored in ${areas[0]}, which helps it feel calm, coherent, and easy to keep editing.`;
  }

  return `The structure keeps the day readable while still letting it move between ${areas.slice(0, 2).join(" and ")} without losing the route.`;
}

function renderDayRouteStory(day, plan) {
  const areas = getUniqueDayAreas(day, plan);
  const routeLabels = [plan.hotelBase.areaLabel, ...areas].filter(Boolean).slice(0, 4);
  if (!routeLabels.length) return "";

  return `
    <div class="day-story-panel">
      <p class="day-story-kicker">Route logic</p>
      <div class="day-story-route">
        ${routeLabels.map((label, index) => `
          ${index ? `<span class="day-story-arrow" aria-hidden="true">→</span>` : ""}
          <span class="day-story-chip ${index === 0 ? "day-story-chip--base" : ""}">${escapeHtml(label)}</span>
        `).join("")}
      </div>
      <p class="day-story-copy">${escapeHtml(buildDaySequenceNarrative(day, plan))}</p>
    </div>
  `;
}

function renderActiveLibraryFilters(plan, filteredLibraryItems) {
  const active = [];
  if (plan.libraryCategory && plan.libraryCategory !== "all") active.push(plan.libraryCategory);
  if (plan.libraryAreaFilter && plan.libraryAreaFilter !== "all") active.push(plan.libraryAreaFilter);
  if (plan.libraryPriceFilter && plan.libraryPriceFilter !== "all") active.push(plan.libraryPriceFilter);
  if (plan.libraryCuisineFilter && plan.libraryCuisineFilter !== "all") active.push(plan.libraryCuisineFilter);
  if (!active.length && !plan.librarySearch) {
    return `<p class="library-filter-summary">Showing the full city library for this brief.</p>`;
  }

  return `
    <div class="library-filter-summary-row">
      ${plan.librarySearch ? `<span class="library-filter-pill">Search: ${escapeHtml(plan.librarySearch)}</span>` : ""}
      ${active.map((value) => `<span class="library-filter-pill">${escapeHtml(displayCategoryLabel(String(value)))}</span>`).join("")}
      <span class="library-filter-pill library-filter-pill--count">${filteredLibraryItems.length} results</span>
    </div>
  `;
}

export function getOverlayCopy(mode) {
  if (mode === "replace") {
    return {
      kicker: "Replace a stop",
      title: "Replace from the library",
      body: "Ranked by route fit, nearby flow, and contrast.",
      subtle: "Used places stay hidden so the best options stay readable.",
    };
  }

  return {
    kicker: "Add to itinerary",
    title: "Add from the library",
    body: "Browse by day fit, nearby areas, and richer additions.",
    subtle: "Open from a specific day to place it there. Otherwise TripTrellis routes it where it fits best.",
  };
}

function splitHotelDescription(description) {
  return String(description || "")
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);
}

function hotelInitials(name) {
  return String(name || "Hotel")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() || "")
    .join("");
}

function renderHotelMeta(label, areaLabel, tierLabel = "") {
  const parts = [label, areaLabel, tierLabel].filter(Boolean);
  return `
    <p class="preview-label hotel-card-eyebrow">
      ${parts.map((part, index) => `${index ? `<span class="hotel-eyebrow-separator">•</span>` : ""}<span>${escapeHtml(part)}</span>`).join("")}
    </p>
  `;
}

function renderHotelShiftNote(hotel) {
  if (!hotel?.strategyLine) return "";
  return `<p class="hotel-shift-note">${escapeHtml(hotel.strategyLine)}</p>`;
}

function formatHotelFitLabel(tag) {
  const labels = {
    food: "Best for food",
    nightlife: "Best for evenings",
    wellness: "Best for recharge",
    design: "Best for style",
    culture: "Best for sights",
    shopping: "Best for shopping",
    value: "Best for value",
    luxury: "Best for luxury",
  };

  return labels[tag] || `Best for ${String(tag || "").replace(/-/g, " ")}`;
}

function renderHotelFitChips(hotel) {
  const fits = (hotel?.bestFor || []).filter(Boolean).slice(0, 3);
  if (!fits.length) return "";

  return `
    <div class="hotel-fit-row">
      ${fits.map((fit) => `<span class="hotel-fit-chip">${escapeHtml(formatHotelFitLabel(fit))}</span>`).join("")}
    </div>
  `;
}

function renderDontMissMeta(categoryLabel, areaLabel) {
  const parts = [categoryLabel, areaLabel].filter(Boolean);
  return `
    <p class="preview-label dont-miss-eyebrow">
      ${parts.map((part, index) => `${index ? `<span class="dont-miss-separator">•</span>` : ""}<span>${escapeHtml(part)}</span>`).join("")}
    </p>
  `;
}

function renderConciergeWhy(why) {
  return escapeHtml(String(why || "").replace(/^Why it surfaced:\s*/i, ""));
}

function renderFitNote(fitNote) {
  const note = String(fitNote || "").replace(/^Why here:\s*/i, "").trim();
  if (!note) return "";

  return `
    <div class="footer-note item-fit-note">
      <strong>Why here:</strong>
      <span>${escapeHtml(note)}</span>
    </div>
  `;
}

function renderGuideNote(item, className = "library-guide-note") {
  if (!item?.michelinStatus && !item?.guideNote) return "";
  const lead = item?.michelinStatus ? `${displayMichelinLabel(item.michelinStatus)}:` : "Guide note:";
  const note = item?.guideNote || "Verified in the official MICHELIN Guide.";
  return `<p class="${className}"><strong>${escapeHtml(lead)}</strong> ${escapeHtml(note)}</p>`;
}

function notifyProduct(message, type = "info") {
  if (globalThis.TripTrellisToast) {
    globalThis.TripTrellisToast(message, type);
    return;
  }

  window.alert(message);
}

function getSavedTripMetaLine(trip) {
  return [
    trip.dateRange,
    formatSavedTripUpdatedAt(trip),
  ].filter(Boolean).join(" • ");
}

function renderSelectedHotelNarrative(plan) {
  const descriptionSentences = splitHotelDescription(plan.hotelBase.longDescription);
  const vibeCopy = plan.hotelBase.vibe || descriptionSentences[0] || "A polished base for this trip.";
  const locationCopy = descriptionSentences.slice(1, 3).join(" ") || `${plan.hotelBase.areaLabel} gives this itinerary a coherent base for days, meals, and evenings.`;
  const whyCopy = [descriptionSentences.slice(3).join(" "), plan.hotelBase.strategy].filter(Boolean).join(" ");
  const amenities = String(plan.hotelBase.amenityLine || "")
    .replace(/^Amenities and strengths:\s*/i, "")
    .replace(/\.$/, "")
    .split(/,\s+|\s+and\s+/)
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 6);
  const fallbackAmenities = [
    "Strong neighborhood base",
    "Better itinerary routing",
    "Easy food and evening access",
    "Trip-style fit",
  ];
  const amenityItems = amenities.length ? amenities : fallbackAmenities;

  return `
    <div class="hotel-hero-image" aria-label="Hotel image placeholder">
      <span>${escapeHtml(hotelInitials(plan.hotelBase.hotelName))}</span>
      <small>${escapeHtml(plan.hotelBase.areaLabel)} stay</small>
    </div>

    <div class="hotel-copy-stack selected-hotel-copy">
      <section class="hotel-story-section">
        <p class="hotel-story-kicker">The vibe</p>
        <p class="card-subtitle">${escapeHtml(vibeCopy)}</p>
      </section>

      <section class="hotel-story-section">
        <p class="hotel-story-kicker">The location</p>
        <p class="footer-note">${escapeHtml(locationCopy)}</p>
      </section>

      <section class="hotel-story-section">
        <p class="hotel-story-kicker">Why we chose it</p>
        <p class="footer-note">${escapeHtml(whyCopy || plan.hotelBase.strategy)}</p>
      </section>

      <section class="hotel-story-section hotel-amenities-section">
        <p class="hotel-story-kicker">Amenities and strengths</p>
        <ul class="hotel-amenity-list">
          ${amenityItems.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </section>
    </div>
  `;
}

export function renderInputError(results) {
  results.innerHTML = `
    <section class="section-card">
      <p class="section-kicker">Input check</p>
      <h2 class="section-title">Choose a city and valid dates.</h2>
      <p class="card-subtitle">Make sure the trip has a destination and a valid travel window so TripTrellis can build the first routeable version of the brief.</p>
    </section>
  `;
}

export function renderGenerationLoading(results, message = "Locating optimal hotel areas...") {
  if (!results) return;
  results.innerHTML = `
    <section class="generation-loading-shell section-card" aria-live="polite" aria-busy="true">
      <div class="generation-loading-orb" aria-hidden="true">
        <span></span>
        <span></span>
      </div>
      <div class="generation-loading-copy">
        <p class="section-kicker">Building your trip brief</p>
        <h2 class="section-title">TripTrellis is shaping the route.</h2>
        <p class="card-subtitle" id="generation-loading-message">${escapeHtml(message)}</p>
      </div>
      <div class="generation-loading-steps" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  `;
}

function getSavedTripTags(trip) {
  const focusLabel = formatFocus((trip.payload?.focuses && trip.payload.focuses.length) ? trip.payload.focuses : [trip.payload?.focus].filter(Boolean));
  return [
    trip.city,
    `${trip.days} days`,
    focusLabel,
    trip.payload?.budgetProfile?.label,
    trip.payload?.paceRule?.label,
  ].filter(Boolean).slice(0, 5);
}

function getSavedTripSearchText(trip) {
  return normalizeText([
    trip.title,
    trip.city,
    trip.dateRange,
    trip.hotelName,
    trip.payload?.hotelBase?.areaLabel,
    trip.payload?.notes,
    ...getSavedTripTags(trip),
  ].filter(Boolean).join(" "));
}

function getSavedTripDescription(trip) {
  const area = trip.payload?.hotelBase?.areaLabel;
  const hotel = trip.hotelName || trip.payload?.hotelBase?.hotelName;
  if (area && hotel) {
    return `${hotel} anchors this ${area} itinerary, with your saved day edits ready to reopen or export.`;
  }
  if (hotel) {
    return `${hotel} anchors this saved itinerary, with your day edits ready to reopen or export.`;
  }
  return "A saved trip brief with your hotel, pacing, and itinerary edits preserved.";
}

function formatSavedTripUpdatedAt(trip) {
  if (!trip.updatedAt) return "";
  const date = new Date(trip.updatedAt);
  if (Number.isNaN(date.getTime())) return "";
  return `Updated ${date.toLocaleDateString(undefined, { month: "short", day: "numeric" })}`;
}

function renderSavedQuickFilters(savedTrips, activeFilter = "all") {
  const seen = new Set();
  const filters = savedTrips
    .flatMap((trip) => [trip.city, ...(trip.payload?.focuses || []), trip.payload?.budgetProfile?.label])
    .filter(Boolean)
    .map((value) => String(value))
    .filter((value) => {
      const key = normalizeText(value);
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, 8);

  if (!filters.length) return "";

  return `
    <div class="saved-filter-row" aria-label="Saved trip quick filters">
      <button class="saved-filter-chip ${activeFilter === "all" ? "is-active" : ""}" type="button" data-action="saved-filter" data-filter="all">All</button>
      ${filters.map((filter) => `
        <button class="saved-filter-chip ${normalizeText(activeFilter) === normalizeText(filter) ? "is-active" : ""}" type="button" data-action="saved-filter" data-filter="${escapeAttribute(filter)}">${escapeHtml(filter)}</button>
      `).join("")}
    </div>
  `;
}

export function renderSavedItinerariesSection(savedTrips, isFrontPage = false, options = {}) {
  const search = String(options.search || "").trim();
  const activeFilter = String(options.filter || "all");
  const normalizedSearch = normalizeText(search);
  const normalizedFilter = normalizeText(activeFilter);
  const filteredTrips = savedTrips.filter((trip) => {
    const haystack = getSavedTripSearchText(trip);
    const matchesSearch = !normalizedSearch || haystack.includes(normalizedSearch);
    const matchesFilter = normalizedFilter === "all" || haystack.includes(normalizedFilter);
    return matchesSearch && matchesFilter;
  });

  return `
    <section class="section-card saved-section">
      <div class="section-head">
        <div>
          <p class="section-kicker">Saved itineraries</p>
          <h3 class="section-title">${isFrontPage ? "Reopen a saved trip before starting over" : "Saved trips worth reopening"}</h3>
          ${isFrontPage ? `<p class="card-subtitle">Saved briefs stay here so you can reopen, export, or keep refining them without starting over.</p>` : `<p class="card-subtitle">Saved drafts stay here so you can reopen, export, or keep refining them without dropping back into a blank planner.</p>`}
        </div>
      </div>
      <div class="saved-search-panel">
        <label class="saved-search-label" for="saved-trips-search">Search saved trips</label>
        <input
          id="saved-trips-search"
          class="saved-search-input"
          type="search"
          placeholder="Search city, base, dates, focus, or notes..."
          value="${escapeAttribute(search)}"
          autocomplete="off"
        />
        ${renderSavedQuickFilters(savedTrips, activeFilter)}
      </div>
      <p class="saved-result-count">${filteredTrips.length} ${filteredTrips.length === 1 ? "saved trip" : "saved trips"} in view</p>
      <div class="saved-grid">
        ${filteredTrips.length
          ? filteredTrips.map((trip) => `
              <article class="saved-trip-card">
                <div class="saved-card-head">
                  <div>
                    <p class="saved-card-kicker">${escapeHtml(trip.city)} brief</p>
                    <h4>${escapeHtml(trip.title)}</h4>
                  </div>
                  <span class="saved-card-date">${escapeHtml(getSavedTripMetaLine(trip))}</span>
                </div>
                <p class="saved-card-body">${escapeHtml(getSavedTripDescription(trip))}</p>
                <div class="saved-card-tags">
                  ${getSavedTripTags(trip).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
                </div>
                <div class="saved-card-footer">
                  <span class="saved-card-hotel">${escapeHtml(trip.hotelName ? `Base: ${trip.hotelName}` : "Base saved")}</span>
                  <div class="saved-actions">
                    <button class="mini-button saved-reopen-button" type="button" data-action="reopen-itinerary" data-save-id="${trip.id}">Open</button>
                    <button class="mini-button saved-download-button" type="button" data-action="download-itinerary" data-save-id="${trip.id}">Export</button>
                    <button class="mini-button saved-delete-button" type="button" data-action="delete-itinerary" data-save-id="${trip.id}">Delete</button>
                  </div>
                </div>
              </article>
            `).join("")
          : `<article class="saved-trip-card saved-card saved-empty"><h4>No saved itineraries found</h4><p>${savedTrips.length ? "Try another city, base, focus, or date search." : "Once you save a trip, it will appear here so you can reopen it, export it, or keep refining it later."}</p><div class="saved-empty-actions"><a class="mini-button" href="#planner-form">Start a new brief</a></div></article>`
        }
      </div>
    </section>
  `;
}

export function renderEmptyState(results, emptyStateTemplate) {
  results.innerHTML = "";
  results.append(emptyStateTemplate.content.cloneNode(true));
}

export function renderTripPlan(plan, results) {
  enforceTravelAnchorsAndBoundaries(plan);
  const filteredLibraryItems = getRankedLibraryItems(plan);
  const groupedLibraryItems = groupRankedLibraryItems(filteredLibraryItems, plan);
  const overlayCopy = getOverlayCopy(plan.libraryOverlay?.mode || "add");
  results.innerHTML = `
    <section class="overview-shell">
      <section class="section-card hero-result">
        <div class="trip-header">
          <div class="trip-hero-copy">
            <p class="section-kicker">Generated city brief</p>
            <h2 class="trip-title">${plan.guide.label}</h2>
            <p class="trip-lede">A ${plan.totalDays}-day brief shaped around ${plan.hotelBase.areaLabel}, with a strong base, cleaner day flow, and room to keep refining without losing the trip’s logic.</p>
            <div class="trip-meta-pills">
              <span class="trip-meta-pill">${formatDate(plan.startDate)} to ${formatDate(plan.endDate)}</span>
              <span class="trip-meta-pill">${plan.totalDays} days</span>
              <span class="trip-meta-pill">${formatFocus(plan.focuses || [plan.focus])}</span>
              <span class="trip-meta-pill">${plan.budgetProfile.label}</span>
              <span class="trip-meta-pill">${plan.guide.country}</span>
            </div>
          </div>
          <div class="confidence-note">
            <p class="confidence-kicker">What is steering this draft</p>
            <strong>${plan.focusTheme.headline}</strong>
            <p>${plan.hotelBase.influence}</p>
            <p>${plan.budgetProfile.headline}</p>
          </div>
        </div>
        <div class="trip-at-a-glance">
          <article class="glance-card">
            <span class="glance-label">Hotel base</span>
            <strong>${plan.hotelBase.areaLabel}</strong>
            <p>${plan.hotelStatus === "have-hotel" ? "Built around your selected stay." : "Currently centered on the hotel area giving this version its strongest overall shape."}</p>
          </article>
          <article class="glance-card">
            <span class="glance-label">Priority</span>
            <strong>${formatFocus(plan.focuses || [plan.focus])}</strong>
            <p>${plan.focusTheme.headline}</p>
          </article>
          <article class="glance-card">
            <span class="glance-label">Tempo</span>
            <strong>${plan.paceRule.label}</strong>
            <p>${plan.paceRule.summary || "The itinerary is paced to avoid cluster-heavy routing and keep each day readable."}</p>
          </article>
          <article class="glance-card">
            <span class="glance-label">Current draft</span>
            <strong>${plan.totalDays}-day draft</strong>
            <p>${plan.notes ? "Custom notes are already steering the shape of the brief." : "Add notes if you want the neighborhoods, meals, and pacing to lean more clearly in your direction."}</p>
          </article>
        </div>
        <div class="tag-row">
          <span class="tag">${plan.hotelStatus === "have-hotel" ? "Using your hotel" : "Planner-picked hotel"}</span>
          <span class="tag">${plan.budgetProfile.label}</span>
          <span class="tag">${plan.paceRule.label}</span>
          ${plan.noteProfile.hasNotes ? `<span class="tag">Notes are shaping the recommendations</span>` : ""}
        </div>
        ${renderWorkspaceStats(plan)}
      </section>

      ${renderAreaSummary(plan)}

      <section class="summary-grid compact-summary-grid">
        <article class="info-card selected-hotel-card">
            <p class="section-kicker">${plan.hotelBase.source}</p>
            <h3 class="section-title">${plan.hotelBase.hotelName}</h3>
            <p class="strategy-source">${plan.hotelBase.areaLabel}</p>
          ${renderHotelFitChips(plan.hotelBase)}
          ${renderSelectedHotelNarrative(plan)}
          ${plan.notes ? `<p class="notes-callout">${plan.notes}</p>` : ""}
        </article>

        <article class="info-card hotel-selector-card">
          ${plan.hotelRecommendations.length ? `
            <p class="section-kicker">Alternate bases</p>
            <h3 class="section-title">Other strong bases for the trip</h3>
          <p class="card-subtitle hotel-selector-intro">If you want the trip to lean harder into another neighborhood, these alternates keep the days coherent and easy to live inside.</p>
            <div class="stacked-cards">
              ${plan.hotelRecommendations.map((hotel, index) => `
                <article class="recommendation-card hotel-option-card ${hotel.isPrimary ? "is-selected" : ""}">
                  <span class="hotel-option-rank">${String(index + 1).padStart(2, "0")}</span>
                  <div class="hotel-option-layout">
                    <div class="hotel-thumb" aria-hidden="true">
                      <span>${escapeHtml(hotelInitials(hotel.name))}</span>
                    </div>
                    <div class="hotel-option-copy">
                      ${renderHotelMeta(hotel.isPrimary ? "Current base" : "Alternative base", hotel.areaLabel, hotel.tierLabel)}
                      <h4>${hotel.name}</h4>
                      <p class="hotel-option-summary">${hotel.summary || hotel.vibe}</p>
                      ${hotel.positioningLabel ? `<p class="hotel-positioning-line">${escapeHtml(hotel.positioningLabel)}</p>` : ""}
                      ${renderHotelFitChips(hotel)}
                      <p class="footer-note">${hotel.matchLine}</p>
                      ${renderHotelShiftNote(hotel)}
                      ${hotel.tradeoffLine ? `<p class="hotel-tradeoff-line">${escapeHtml(hotel.tradeoffLine)}</p>` : ""}
                    </div>
                  </div>
                  <div class="item-actions hotel-select-actions">
                    ${hotel.isPrimary
                      ? `<span class="hotel-current-pill">Current base</span>`
                      : `<button class="mini-button hotel-outline-button" type="button" data-action="select-hotel" data-hotel-name="${escapeAttribute(hotel.name)}">Recenter here</button>`
                    }
                  </div>
                </article>
              `).join("")}
            </div>
          ` : `
            <p class="section-kicker">Money + booking</p>
            <h3 class="section-title">Before you book</h3>
            <ul class="detail-list">
              <li>${plan.guide.currency}</li>
              ${plan.bookingWatchlist.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          `}
        </article>
      </section>
    </section>

    ${plan.hotelRecommendations.length ? `
      <section class="section-card utility-section">
        <p class="section-kicker">Money + booking</p>
        <h3 class="section-title">Before you book</h3>
        <ul class="detail-list">
          <li>${plan.guide.currency}</li>
          ${plan.bookingWatchlist.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>
    ` : ""}

    <section class="section-card dont-miss-section">
      <div class="section-head">
        <div>
          <p class="section-kicker">Don't miss</p>
        <h3 class="section-title">Anchors shaping this draft</h3>
          <p class="card-subtitle dont-miss-intro">These are the stops doing the most work in the brief before you start refining around your own pace and taste.</p>
        </div>
      </div>
      <div class="recommendation-grid">
        ${plan.dontMiss.slice(0, 5).map((item, index) => `
          <article class="recommendation-card dont-miss-card" data-category="${item.categoryLabel || ''}">
            <span class="dont-miss-rank-number">${String(index + 1).padStart(2, "0")}</span>
            <div class="dont-miss-card-body">
              ${renderDontMissMeta(item.categoryLabel, item.areaLabel)}
              <h4>${item.name}</h4>
              <p>${item.description}</p>
              <div class="footer-note dont-miss-why">
                <span class="dont-miss-insight-icon" aria-hidden="true">✦</span>
                <p><strong>Why it fits:</strong> ${renderConciergeWhy(item.why)}</p>
              </div>
            </div>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="section-card itinerary-focus-shell">
      <div class="section-head itinerary-focus-head">
        <div>
          <p class="section-kicker">Itinerary</p>
          <h3 class="section-title">The itinerary</h3>
          <p class="card-subtitle">This first pass already accounts for your base, pace, notes, and city logic. Keep editing until it feels like something you would genuinely book and share.</p>
        </div>
        <div class="itinerary-focus-actions">
          <div class="results-action-group">
            <span class="results-action-label">Edit in place</span>
            <button class="secondary-button secondary-button--strong" data-action="open-library" type="button">Open library</button>
          </div>
          <div class="results-action-group results-action-group--secondary">
            <span class="results-action-label">Save or share</span>
            <button class="secondary-button" data-action="save-itinerary" type="button">Save draft</button>
            <button class="secondary-button" data-action="print-current-itinerary" type="button">Export / print</button>
          </div>
        </div>
      </div>
      <div class="day-grid itinerary-only-grid">
        ${plan.days.map((day, dayIndex) => `
          <article class="day-card" data-day-index="${dayIndex}">
            <div class="day-heading" data-day="${dayIndex + 1}">
              <div class="day-heading-main">
                <h3>${day.title}</h3>
                <p class="trip-meta">${day.dateLabel}</p>
                ${renderDayMeta(day)}
              </div>
              <div class="day-heading-actions">
                <button class="secondary-button mini-button" type="button" data-action="open-add-day" data-day-index="${dayIndex}">Add stop</button>
              </div>
            </div>
            <div class="day-intro">
              <div class="day-quality-row">
                ${getDayQualityLabels(day, plan).map((label) => `<span class="day-quality-pill">${escapeHtml(label)}</span>`).join("")}
              </div>
              ${renderDayRouteStory(day, plan)}
              <p class="day-summary">${day.summary}</p>
            </div>
            <div class="slot-stack">
              ${getVisibleSlotsForDay(dayIndex, plan).map((slot) => {
                const slotItems = getSlotItems(day, slot);
                const hasTransitAnchor = slotItems.some((item) => item.type === "transit_anchor" || item.sourceType === "transit_anchor");
                return `
                <section class="slot-card ${hasTransitAnchor ? "slot-card--full" : ""} drop-zone" data-day-index="${dayIndex}" data-slot="${slot}">
                  <div class="slot-head">
                    <div class="slot-head-copy">
                      <p class="slot-kicker">${getSlotLabel(slot)}</p>
                      <p class="slot-status">${slotItems.length ? `${slotItems.length} planned` : "Open slot"}</p>
                    </div>
                    <button class="secondary-button mini-button" type="button" data-action="open-add-slot" data-day-index="${dayIndex}" data-slot="${slot}">Add</button>
                  </div>
                  <ul class="highlight-list slot-list" data-day-index="${dayIndex}" data-slot="${slot}">
                    ${slotItems.length ? slotItems.map((item) => `
                      <li
                        class="itinerary-item ${item.sourceType === "suggested" ? "suggested-item" : "manual-item"} ${item.type === "transit_anchor" ? "transit-anchor-item" : ""}"
                        draggable="${item.type === "transit_anchor" ? "false" : "true"}"
                        data-itinerary-id="${item.id}"
                        data-day-index="${dayIndex}"
                      >
                        ${item.type === "transit_anchor" ? "" : `<div class="itinerary-item-topbar"><span class="drag-handle" aria-hidden="true">⋮⋮</span><span class="drag-hint">Drag or move earlier/later</span></div>`}
                        ${renderItemBadges({ categoryLabel: item.categoryLabel || "Stop", priceTier: item.priceTier, areaLabel: item.areaLabel || item.area, michelinStatus: item.michelinStatus }, { rowClass: "lib-tag-row lib-tag-row--itinerary" })}
                        <strong>${item.title}</strong>
                        <p>${item.description}</p>
                        ${renderGuideNote(item, "item-guide-note")}
                        ${renderFitNote(item.fitNote)}
                        ${item.detailLine ? `<p class="footer-note item-detail">${item.detailLine}</p>` : ""}
                        ${item.type === "transit_anchor" ? "" : `<div class="item-actions">
                          <button class="mini-button secondary-button" type="button" data-action="move-item-earlier" data-day-index="${dayIndex}" data-itinerary-id="${item.id}">Move earlier</button>
                          <button class="mini-button secondary-button" type="button" data-action="move-item-later" data-day-index="${dayIndex}" data-itinerary-id="${item.id}">Move later</button>
                          <button class="mini-button secondary-button" type="button" data-action="replace-item" data-day-index="${dayIndex}" data-slot="${slot}" data-itinerary-id="${item.id}">Swap stop</button>
                          <button class="mini-button danger-button" type="button" data-action="remove-item" data-day-index="${dayIndex}" data-itinerary-id="${item.id}">Remove</button>
                        </div>`}
                      </li>
                    `).join("") : `<li class="empty-itinerary-slot" data-day-index="${dayIndex}" data-slot="${slot}">Nothing is placed here yet. Add something for ${getSlotLabel(slot).toLowerCase()} and TripTrellis will keep the route coherent around it.</li>`}
                  </ul>
                </section>
              `}).join("")}
            </div>
            <p class="footer-note day-reservation-note">${day.reservationNote}</p>
          </article>
        `).join("")}
      </div>
      <div class="itinerary-bottom-actions">
        <button class="secondary-button secondary-button--strong" data-action="save-itinerary" type="button">Save draft</button>
        <button class="secondary-button" data-action="print-current-itinerary" type="button">Export / print</button>
      </div>
    </section>

    <button class="mobile-add-fab" type="button" data-action="open-library">Open library</button>

    ${plan.libraryOverlay?.open ? `
      <section class="library-overlay" data-overlay="library">
        <div class="library-overlay-backdrop" data-action="close-library"></div>
        <div class="library-overlay-panel section-card">
          <div class="section-head library-overlay-head">
            <div>
              <p class="section-kicker">${overlayCopy.kicker}</p>
              <h3 class="section-title">${overlayCopy.title}</h3>
              <p class="card-subtitle">${overlayCopy.body}</p>
            </div>
            <button class="secondary-button" data-action="close-library" type="button">Close</button>
          </div>
          <div class="builder-toolbar overlay-toolbar">
            <div class="builder-controls builder-controls--always">
              <select id="library-category" class="library-filter">
                ${renderCategoryOptions(plan.libraryCategory)}
              </select>
              <input
                type="search"
                id="library-search"
                class="library-search"
                placeholder="Search sights, restaurants, bars, coffee, museums, streets..."
                value="${escapeAttribute(plan.librarySearch)}"
              />
              <select id="library-area" class="library-filter">
                ${renderAreaOptions(plan.libraryAreaFilter, plan.libraryItems)}
              </select>
              <select id="library-price" class="library-filter">
                ${renderAllPriceOptions(plan.libraryPriceFilter)}
              </select>
              ${plan.libraryCategory === "Food" ? `
                <select id="library-cuisine" class="library-filter">
                  ${renderCuisineOptions(plan.libraryCuisineFilter, plan.libraryItems)}
                </select>
              ` : ""}
            </div>
            <div class="workspace-note-row">
              <p class="footer-note">${overlayCopy.subtle}</p>
              <p class="library-count">${filteredLibraryItems.length} options</p>
            </div>
            ${renderActiveLibraryFilters(plan, filteredLibraryItems)}
          </div>
          <div class="library-results-stack overlay-results-scroll">
            ${filteredLibraryItems.length ? groupedLibraryItems.map((group) => `
              <section class="library-result-group">
                <div class="library-result-group-head">
                  <div>
                    <p class="preview-label">${group.title}</p>
                    <p class="footer-note">${group.subtitle}</p>
                  </div>
                  <span class="library-count">${group.items.length}</span>
                </div>
                <div class="library-grid overlay-library-grid">
                  ${group.items.map((item) => `
                    <article class="recommendation-card library-card">
                      ${renderLibraryTags(item)}
                      <h4>${item.name}</h4>
                      <p class="library-card-description">${item.description}</p>
                      ${renderGuideNote(item)}
                      ${item.libraryMatch?.reasons?.length ? `<p class="library-match-line">${item.libraryMatch.reasons.join(" • ")}</p>` : ""}
                      <div class="library-actions">
                        <span class="footer-note library-detail-line">${item.detailLine}</span>
                        <button class="mini-button library-choose-button" type="button" data-action="choose-library-item" data-item-id="${item.id}">${plan.libraryOverlay.mode === "replace" ? "Replace stop" : "Add stop"}</button>
                      </div>
                    </article>
                  `).join("")}
                </div>
              </section>
            `).join("") : `<article class="recommendation-card saved-card saved-empty"><h4>No library items match that filter</h4><p>Try another category, search term, or area. The strongest results usually return once the library is a little less constrained.</p></article>`}
          </div>
        </div>
      </section>
    ` : ""}

    ${renderTripAdjustmentPanel(plan)}

    <section class="summary-grid lower-summary-grid">
      <article class="section-card utility-section">
        <p class="section-kicker">Still unresolved</p>
        <h3 class="section-title">Soft edges to keep flexible</h3>
        <p class="card-subtitle utility-intro">These are the parts most likely to shift once weather, energy, and real reservation timing start shaping the trip in real life.</p>
        <ul class="list-panel">
          ${plan.unresolved.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </article>
      <article class="section-card utility-section">
        <p class="section-kicker">Hotel impact</p>
        <h3 class="section-title">How the base is steering the trip</h3>
        <p class="card-subtitle">${plan.hotelBase.influence}</p>
        <p class="footer-note utility-intro">Change the hotel area or point the notes toward another neighborhood, and the mix of restaurants, districts, and daily flow will shift with it.</p>
      </article>
    </section>
  `;
}

export function buildPrintableItineraryHtml(plan) {
  enforceTravelAnchorsAndBoundaries(plan);
  const guideLabel = plan?.guide?.label || plan?.city || "Saved trip";
  const hotelName = plan?.hotelBase?.hotelName || plan?.hotelName || "Hotel base";
  const hotelArea = plan?.hotelBase?.areaLabel || "Area not specified";
  const hotelDescription = plan?.hotelBase?.longDescription || plan?.hotelBase?.strategy || plan?.hotelBase?.vibe || "Trip anchor for this itinerary.";
  const bookingWatchlist = Array.isArray(plan?.bookingWatchlist) && plan.bookingWatchlist.length
    ? plan.bookingWatchlist
    : ["Double-check reservations, ticketed sights, and any timed entries before you go."];
  const focusLabel = formatFocus((plan?.focuses && plan.focuses.length) ? plan.focuses : [plan?.focus].filter(Boolean)) || "Custom trip";
  const budgetLabel = plan?.budgetProfile?.label || plan?.budget || "Planned budget";
  const dayMarkup = (plan?.days || []).map((day, dayIndex) => `
    <section class="print-day">
      <header class="print-day-head">
        <div>
          <h2>${escapeHtml(day?.title || "Trip day")}</h2>
          <p>${escapeHtml(day?.dateLabel || "Date TBD")}</p>
        </div>
        <div class="print-day-meta">${escapeHtml(day?.baseNote || `Hotel: ${hotelName}`)}</div>
      </header>
          <p class="print-day-summary">${escapeHtml(day?.summary || "A paced day built around your hotel base and trip preferences.")}</p>
      <div class="print-slot-grid">
        ${getVisibleSlotsForDay(dayIndex, plan).map((slot) => {
          const items = getSlotItems(day, slot);
          return `
            <article class="print-slot">
              <h3>${escapeHtml(getSlotLabel(slot))}</h3>
              ${items.length ? items.map((item) => `
                <div class="print-item">
                  <strong>${escapeHtml(item.title)}</strong>
                  <p>${escapeHtml(item.description)}</p>
                  ${item.detailLine ? `<p class="print-detail">${escapeHtml(item.detailLine)}</p>` : ""}
                </div>
              `).join("") : `<p class="print-empty">Open slot</p>`}
            </article>
          `;
        }).join("")}
      </div>
    </section>
  `).join("");

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${escapeHtml(guideLabel)} itinerary</title>
        <style>
          :root {
            --ink: #17120d;
            --muted: #6f6256;
            --line: rgba(23, 18, 13, 0.12);
            --gold: #9d6520;
            --paper: #fffdf8;
            --panel: #f7f0e5;
          }
          * { box-sizing: border-box; }
          body {
            margin: 0;
            font-family: "Helvetica Neue", Arial, sans-serif;
            color: var(--ink);
            background: var(--paper);
          }
          .print-shell {
            max-width: 980px;
            margin: 0 auto;
            padding: 40px 32px 56px;
          }
          .print-hero {
            padding-bottom: 24px;
            border-bottom: 1px solid var(--line);
            margin-bottom: 28px;
          }
          .print-kicker {
            margin: 0 0 10px;
            text-transform: uppercase;
            letter-spacing: 0.18em;
            font-size: 11px;
            font-weight: 700;
            color: var(--gold);
          }
          .print-hero h1 {
            margin: 0 0 10px;
            font-size: 40px;
            line-height: 1;
            font-family: Georgia, "Times New Roman", serif;
          }
          .print-meta,
          .print-submeta,
          .print-day-head p,
          .print-day-summary,
          .print-item p,
          .print-detail,
          .print-empty {
            margin: 0;
            color: var(--muted);
            line-height: 1.55;
          }
          .print-meta { margin-bottom: 6px; }
          .print-submeta { margin-top: 8px; }
          .print-summary-grid {
            display: grid;
            grid-template-columns: 1.1fr 0.9fr;
            gap: 18px;
            margin: 24px 0 28px;
          }
          .print-panel {
            padding: 18px;
            border: 1px solid var(--line);
            border-radius: 18px;
            background: var(--panel);
          }
          .print-panel h2 {
            margin: 0 0 10px;
            font-size: 20px;
            font-family: Georgia, "Times New Roman", serif;
          }
          .print-panel ul {
            margin: 10px 0 0;
            padding-left: 18px;
          }
          .print-panel li {
            margin: 0 0 8px;
            color: var(--muted);
          }
          .print-day {
            margin-top: 28px;
            page-break-inside: avoid;
          }
          .print-day-head {
            display: flex;
            justify-content: space-between;
            gap: 18px;
            align-items: flex-end;
            padding-bottom: 12px;
            border-bottom: 1px solid var(--line);
            margin-bottom: 14px;
          }
          .print-day-head h2 {
            margin: 0 0 4px;
            font-size: 26px;
            font-family: Georgia, "Times New Roman", serif;
          }
          .print-day-meta {
            color: var(--gold);
            font-weight: 700;
            font-size: 14px;
          }
          .print-day-summary {
            margin-bottom: 14px;
          }
          .print-slot-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
          }
          .print-slot {
            padding: 14px;
            border: 1px solid var(--line);
            border-radius: 14px;
            background: #fff;
            min-height: 120px;
          }
          .print-slot h3 {
            margin: 0 0 10px;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.14em;
            color: var(--gold);
          }
          .print-item + .print-item {
            margin-top: 12px;
            padding-top: 12px;
            border-top: 1px solid var(--line);
          }
          .print-item strong {
            display: block;
            margin-bottom: 4px;
            font-size: 15px;
          }
          .print-detail {
            margin-top: 6px;
            font-size: 13px;
          }
          .print-empty {
            font-style: italic;
          }
          @media print {
            body { background: white; }
            .print-shell { padding: 0; }
          }
        </style>
      </head>
      <body>
        <main class="print-shell">
          <section class="print-hero">
            <p class="print-kicker">TripTrellis itinerary</p>
            <h1>${escapeHtml(guideLabel)}</h1>
            <p class="print-meta">${escapeHtml(formatDateSafe(plan?.startDate, "Dates TBD"))} to ${escapeHtml(formatDateSafe(plan?.endDate, "Dates TBD"))} • ${escapeHtml(String(plan?.totalDays || (plan?.days || []).length || ""))} days • ${escapeHtml(focusLabel)} • ${escapeHtml(budgetLabel)}</p>
            <p class="print-submeta">${escapeHtml(hotelName)} • ${escapeHtml(hotelArea)}</p>
            ${plan?.notes ? `<p class="print-submeta">${escapeHtml(plan.notes)}</p>` : ""}
          </section>

          <section class="print-summary-grid">
            <article class="print-panel">
              <h2>Hotel base</h2>
              <p>${escapeHtml(plan?.hotelBase?.vibe || "This hotel anchors the shape and flow of your itinerary.")}</p>
              <p class="print-submeta">${escapeHtml(hotelDescription)}</p>
            </article>
            <article class="print-panel">
              <h2>Pre-trip notes</h2>
              <ul>
                <li>${escapeHtml(plan?.guide?.currency || "Check local payment methods, booking policies, and opening hours before you go.")}</li>
                ${bookingWatchlist.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
              </ul>
            </article>
          </section>

          ${dayMarkup}
        </main>
        <script>
          window.addEventListener('load', () => {
            setTimeout(() => {
              window.print();
            }, 250);
          });
        </script>
      </body>
    </html>
  `;
}

export function openPrintView(plan) {
  let html = "";
  try {
    html = buildPrintableItineraryHtml(plan);
  } catch (error) {
    console.error("Unable to build printable itinerary.", error);
    notifyProduct("The PDF export hit a problem with this trip. Please resave the draft and try again.", "error");
    return;
  }

  const printWindow = window.open("", "_blank", "width=1100,height=900");
  if (!printWindow) {
    notifyProduct("Please allow pop-ups to export this itinerary as a PDF.", "error");
    return;
  }

  printWindow.document.open();
  printWindow.document.write(html);
  printWindow.document.close();
  printWindow.document.title = `${plan?.guide?.label || "TripTrellis"} itinerary`;
  printWindow.focus();
}
