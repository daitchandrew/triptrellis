// Shared mutable state with getter/setter pattern, and persistence functions

import { hashString, formatDate } from "./utils.js";
import { STORAGE_KEY, LEGACY_STORAGE_KEYS, budgetProfiles } from "./constants.js";
import { buildTravelAvailabilityRules, enforceTravelAnchorsAndBoundaries, fillMissingFirstDayCoreSlots, migrateDayItems, refreshDayState } from "./itinerary.js";

// ---- Mutable state ----
let _currentPlan = null;
let _allTrips = [];
let _draggedItineraryItem = null;

export function getCurrentPlan() { return _currentPlan; }
export function setCurrentPlan(plan) { _currentPlan = plan; }

export function getAllTrips() { return _allTrips; }
export function setAllTrips(trips) { _allTrips = trips; }

export function getDraggedItineraryItem() { return _draggedItineraryItem; }
export function setDraggedItineraryItem(item) { _draggedItineraryItem = item; }

// ---- Persistence ----

export function loadSavedItineraries() {
  try {
    const current = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    if (current.length) {
      return current;
    }

    const legacy = LEGACY_STORAGE_KEYS
      .flatMap((key) => JSON.parse(localStorage.getItem(key) || "[]"))
      .filter(Boolean);
    if (legacy.length) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(legacy));
    }
    return legacy;
  } catch {
    return [];
  }
}

export function saveTrips(trips) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(trips));
}

export function serializePlan(plan) {
  const {
    guide,
    cityKey,
    totalDays,
    budget,
    budgetProfile,
    focus,
    arrivalTime,
    departureTime,
    travelAvailabilityRules,
    notes,
    hotelStatus,
    selectedHotelName,
    tripRequest,
    hotelBase,
    paceRule,
    focusTheme,
    noteProfile,
    hotelRecommendations,
    cantMiss,
    doThese,
    restaurants,
    dontMiss,
    librarySearch,
    libraryCategory,
    libraryCuisineFilter,
    libraryPriceFilter,
    libraryAreaFilter,
    libraryOverlay,
    libraryItems,
    bookingWatchlist,
    unresolved,
    adjustmentHistory,
    days,
  } = plan;

  return {
    id: `${plan.cityKey}-${hashString(`${plan.startDate.toISOString()}-${plan.hotelBase.hotelName}-${plan.notes}`)}`,
    title: `${plan.guide.label} ${formatDate(plan.startDate)} plan`,
    city: plan.guide.label,
    days: plan.totalDays,
    dateRange: `${formatDate(plan.startDate)} to ${formatDate(plan.endDate)}`,
    hotelName: plan.hotelBase.hotelName,
    updatedAt: new Date().toISOString(),
    payload: {
      guide,
      cityKey,
      totalDays,
      budget,
      budgetProfile,
      focus,
      arrivalTime,
      departureTime,
      travelAvailabilityRules,
      notes,
      hotelStatus,
      selectedHotelName,
      tripRequest,
      hotelBase,
      paceRule,
      focusTheme,
      noteProfile,
      hotelRecommendations,
      cantMiss,
      doThese,
      restaurants,
      dontMiss,
      librarySearch,
      libraryCategory,
      libraryCuisineFilter,
      libraryPriceFilter,
      libraryAreaFilter,
      libraryOverlay,
      libraryItems,
      bookingWatchlist,
      unresolved,
      adjustmentHistory,
      days,
      startDate: plan.startDate.toISOString(),
      endDate: plan.endDate.toISOString(),
    },
  };
}

export function hydratePlan(savedTrip) {
  const plan = savedTrip.payload;
  const hydrated = {
    ...plan,
    startDate: new Date(plan.startDate),
    endDate: new Date(plan.endDate),
    budgetProfile: plan.budgetProfile || budgetProfiles[plan.budget || "premium"],
    hotelRecommendations: plan.hotelRecommendations || [],
    dontMiss: plan.dontMiss || [],
    libraryCategory: plan.libraryCategory || "all",
    libraryCuisineFilter: plan.libraryCuisineFilter || "all",
    libraryPriceFilter: plan.libraryPriceFilter || "all",
    libraryAreaFilter: plan.libraryAreaFilter || "all",
    selectedHotelName: plan.selectedHotelName || "",
    adjustmentHistory: plan.adjustmentHistory || [],
    arrivalTime: plan.arrivalTime || "afternoon",
    departureTime: plan.departureTime || "morning",
    travelAvailabilityRules: plan.travelAvailabilityRules || plan.tripRequest?.availabilityRules || buildTravelAvailabilityRules(plan.arrivalTime, plan.departureTime),
    tripRequest: {
      ...(plan.tripRequest || {}),
      startDate: new Date((plan.tripRequest && plan.tripRequest.startDate) || plan.startDate),
      endDate: new Date((plan.tripRequest && plan.tripRequest.endDate) || plan.endDate),
      arrivalTime: (plan.tripRequest && plan.tripRequest.arrivalTime) || plan.arrivalTime || "afternoon",
      departureTime: (plan.tripRequest && plan.tripRequest.departureTime) || plan.departureTime || "morning",
    },
    libraryOverlay: {
      open: false,
      mode: "add",
      targetDayIndex: null,
      targetItemId: null,
      targetSlot: "",
    },
    days: (plan.days || []).map((day) => ({
      ...day,
      itineraryItems: migrateDayItems(day),
    })),
  };

  fillMissingFirstDayCoreSlots(hydrated);
  enforceTravelAnchorsAndBoundaries(hydrated);
  hydrated.days.forEach((day) => refreshDayState(day, hydrated));
  return hydrated;
}
