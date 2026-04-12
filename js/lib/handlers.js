// Event handlers

import { getCurrentPlan, setCurrentPlan, loadSavedItineraries, serializePlan, hydratePlan, getDraggedItineraryItem, setDraggedItineraryItem } from "./state.js";
import { renderTripPlan, renderEmptyState, openPrintView } from "./render.js?v=triptrellis-upgrades-20260411-004";
import {
  refreshDayState, getSlotLabel, chooseBestSlotForItem,
  createItineraryItemFromLibrary, dayAlreadyHasItem, buildContextualFitNote,
} from "./itinerary.js";
import { scoreDayForItem } from "./scoring.js?v=triptrellis-transit-balanced-20260411-010";
import { DAY_SLOT_ORDER, STORAGE_KEY } from "./constants.js";

// ---- DOM references (resolved lazily via getters to avoid TDZ issues) ----
function getResults() { return document.querySelector("#results"); }
function getEmptyStateTemplate() { return document.querySelector("#empty-state-template"); }
function showToast(message, type = "info") {
  globalThis.TripTrellisToast?.(message, type);
}

// ---- Injected dependencies set up at init time ----
let _buildTripPlanFn = null;
export function setBuildTripPlanFn(fn) { _buildTripPlanFn = fn; }

// ---- State-mutating helpers ----

export function saveCurrentItinerary() {
  const currentPlan = getCurrentPlan();
  if (!currentPlan) {
    return;
  }
  const saved = loadSavedItineraries();
  const payload = serializePlan(currentPlan);
  const withoutSame = saved.filter((trip) => trip.id !== payload.id);
  const next = [payload, ...withoutSame].slice(0, 12);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  currentPlan.savedTrips = next;
  renderTripPlan(currentPlan, getResults());
  showToast("Itinerary saved to My Trips.", "success");
}

export function downloadSavedItinerary(saveId) {
  const saved = loadSavedItineraries();
  const match = saved.find((trip) => trip.id === saveId);
  if (!match) {
    return;
  }
  const plan = hydratePlan(match);
  openPrintView(plan);
}

export function deleteSavedItinerary(saveId) {
  const next = loadSavedItineraries().filter((trip) => trip.id !== saveId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  const currentPlan = getCurrentPlan();
  if (currentPlan) {
    currentPlan.savedTrips = next;
    renderTripPlan(currentPlan, getResults());
    return;
  }
  renderEmptyState(getResults(), getEmptyStateTemplate());
  showToast("Saved trip deleted.", "info");
}

export function removeItineraryItem(dayIndex, itemId) {
  const currentPlan = getCurrentPlan();
  if (!currentPlan) {
    return;
  }
  const day = currentPlan.days[Number(dayIndex)];
  if (!day) {
    return;
  }
  day.itineraryItems = (day.itineraryItems || []).filter((item) => item.id !== itemId);
  refreshDayState(day, currentPlan);
  currentPlan.savedTrips = loadSavedItineraries();
  renderTripPlan(currentPlan, getResults());
  showToast("Stop removed from the itinerary.", "info");
}

export function moveItineraryItemToAdjacentSlot(dayIndex, itemId, direction = 1) {
  const currentPlan = getCurrentPlan();
  if (!currentPlan) {
    return;
  }

  const day = currentPlan.days[Number(dayIndex)];
  if (!day) {
    return;
  }

  const itemIndex = (day.itineraryItems || []).findIndex((item) => item.id === itemId);
  if (itemIndex === -1) {
    return;
  }

  const item = day.itineraryItems[itemIndex];
  if (!item || item.type === "transit_anchor") {
    return;
  }

  const currentSlotIndex = DAY_SLOT_ORDER.indexOf(item.slot || "");
  if (currentSlotIndex === -1) {
    return;
  }

  const nextSlotIndex = currentSlotIndex + Number(direction);
  if (nextSlotIndex < 0 || nextSlotIndex >= DAY_SLOT_ORDER.length) {
    return;
  }

  const nextSlot = DAY_SLOT_ORDER[nextSlotIndex];
  const movedItem = {
    ...item,
    slot: nextSlot,
    label: getSlotLabel(nextSlot),
  };

  day.itineraryItems[itemIndex] = movedItem;
  movedItem.fitNote = buildContextualFitNote(day, movedItem, currentPlan, nextSlot);
  refreshDayState(day, currentPlan);
  currentPlan.savedTrips = loadSavedItineraries();
  renderTripPlan(currentPlan, getResults());
  showToast(`Moved ${item.title} to ${getSlotLabel(nextSlot).toLowerCase()}.`, "success");
}

export function openLibraryOverlay({ mode = "add", dayIndex = null, itemId = null, slot = "" } = {}) {
  const currentPlan = getCurrentPlan();
  if (!currentPlan) {
    return;
  }
  const shouldPresetFood = ["lunch", "dinner"].includes(slot);
  currentPlan.libraryOverlay = {
    open: true,
    mode,
    targetDayIndex: Number.isInteger(dayIndex) ? dayIndex : null,
    targetItemId: itemId || null,
    targetSlot: slot || "",
  };
  currentPlan.librarySearch = "";
  currentPlan.libraryCategory = shouldPresetFood ? "Food" : "all";
  currentPlan.libraryCuisineFilter = "all";
  currentPlan.libraryPriceFilter = "all";
  currentPlan.libraryAreaFilter = "all";
  renderTripPlan(currentPlan, getResults());
  const nextInput = document.querySelector("#library-search");
  if (nextInput) {
    nextInput.focus();
  }
}

export function closeLibraryOverlay() {
  const currentPlan = getCurrentPlan();
  if (!currentPlan) {
    return;
  }
  currentPlan.libraryOverlay = {
    open: false,
    mode: "add",
    targetDayIndex: null,
    targetItemId: null,
    targetSlot: "",
  };
  currentPlan.savedTrips = loadSavedItineraries();
  renderTripPlan(currentPlan, getResults());
}

export function applyLibrarySelection(itemId) {
  const currentPlan = getCurrentPlan();
  if (!currentPlan) {
    return;
  }

  const mode = currentPlan.libraryOverlay?.mode || "add";
  if (mode === "replace") {
    replaceItineraryItem(itemId);
    return;
  }

  const dayIndex = currentPlan.libraryOverlay?.targetDayIndex;
  if (Number.isInteger(dayIndex)) {
    addItemToSpecificDay(itemId, dayIndex, currentPlan.libraryOverlay?.targetSlot || "");
    return;
  }

  autoPlaceLibraryItem(itemId);
}

export function addItemToSpecificDay(itemId, dayIndex, slot = "") {
  const currentPlan = getCurrentPlan();
  const item = currentPlan.libraryItems.find((entry) => entry.id === itemId);
  const day = currentPlan.days[Number(dayIndex)];
  if (!item || !day || dayAlreadyHasItem(day, item.name)) {
    return;
  }

  const targetSlot = slot || "";
  day.itineraryItems.push(createItineraryItemFromLibrary({
    ...item,
    fitNote: buildContextualFitNote(day, item, currentPlan, targetSlot),
  }, "manual", targetSlot ? getSlotLabel(targetSlot) : "", targetSlot));
  refreshDayState(day, currentPlan);
  closeLibraryOverlay();
}

export function replaceItineraryItem(itemId) {
  const currentPlan = getCurrentPlan();
  const item = currentPlan.libraryItems.find((entry) => entry.id === itemId);
  const dayIndex = currentPlan.libraryOverlay?.targetDayIndex;
  const targetItemId = currentPlan.libraryOverlay?.targetItemId;
  const targetSlot = currentPlan.libraryOverlay?.targetSlot || "";
  const day = currentPlan.days[Number(dayIndex)];
  if (!item || !day || !targetItemId) {
    return;
  }

  const index = (day.itineraryItems || []).findIndex((entry) => entry.id === targetItemId);
  if (index === -1) {
    return;
  }

  const contextualDay = {
    ...day,
    itineraryItems: (day.itineraryItems || []).filter((entry) => entry.id !== targetItemId),
  };
  day.itineraryItems[index] = createItineraryItemFromLibrary({
    ...item,
    fitNote: buildContextualFitNote(contextualDay, item, currentPlan, targetSlot),
  }, "manual", targetSlot ? getSlotLabel(targetSlot) : "", targetSlot);
  refreshDayState(day, currentPlan);
  closeLibraryOverlay();
}

export function autoPlaceLibraryItem(itemId) {
  const currentPlan = getCurrentPlan();
  const item = currentPlan.libraryItems.find((entry) => entry.id === itemId);
  if (!item) {
    return;
  }

  const bestDay = currentPlan.days
    .map((day, index) => ({ day, index, score: scoreDayForItem(day, item, currentPlan.guide, currentPlan.hotelBase, currentPlan.days.length, currentPlan.focuses || currentPlan.focus) }))
    .sort((left, right) => right.score - left.score)[0];

  if (!bestDay || dayAlreadyHasItem(bestDay.day, item.name)) {
    return;
  }

  const bestSlot = chooseBestSlotForItem(bestDay.day, item);
  bestDay.day.itineraryItems.push(createItineraryItemFromLibrary({
    ...item,
    fitNote: buildContextualFitNote(bestDay.day, item, currentPlan, bestSlot),
  }, "manual", getSlotLabel(bestSlot), bestSlot));
  refreshDayState(bestDay.day, currentPlan);
  currentPlan.savedTrips = loadSavedItineraries();
  closeLibraryOverlay();
}

export function rebuildPlanForSelectedHotel(hotelName, buildTripPlanFn) {
  const currentPlan = getCurrentPlan();
  if (!currentPlan || !hotelName) {
    return;
  }

  const request = currentPlan.tripRequest || {};
  const newPlan = buildTripPlanFn({
    cityKey: request.cityKey || currentPlan.cityKey,
    guide: currentPlan.guide,
    startDate: request.startDate || currentPlan.startDate,
    endDate: request.endDate || currentPlan.endDate,
    budget: request.budget || currentPlan.budget,
    pace: request.pace || currentPlan.pace,
    focus: request.focus || currentPlan.focus,
    focuses: request.focuses || currentPlan.focuses,
    notes: request.notes || currentPlan.notes,
    hotelStatus: "need-hotel",
    existingHotels: [],
    selectedHotelName: hotelName,
  });
  newPlan.savedTrips = loadSavedItineraries();
  setCurrentPlan(newPlan);
  renderTripPlan(newPlan, getResults());
}

export function applyTripAdjustment(adjustment, buildTripPlanFn) {
  const currentPlan = getCurrentPlan();
  if (!currentPlan || !buildTripPlanFn) {
    return;
  }

  const request = currentPlan.tripRequest || {};
  const nextFocuses = [...new Set([...(request.focuses || currentPlan.focuses || [currentPlan.focus]).filter(Boolean)])];
  let nextBudget = request.budget || currentPlan.budget;
  let nextPace = request.pace || currentPlan.pace;
  let nextHotelStatus = request.hotelStatus || currentPlan.hotelStatus;
  let nextExistingHotels = request.existingHotels || [];
  let nextSelectedHotelName = currentPlan.selectedHotelName || "";
  const noteAdditions = [];

  if (adjustment === "more-local") {
    noteAdditions.push("Prefer more local, less obvious, not too touristy places.");
  }
  if (adjustment === "less-walking") {
    nextPace = "slow";
    noteAdditions.push("Keep days more walkable and reduce cross-city movement.");
  }
  if (adjustment === "more-food" && !nextFocuses.includes("food")) {
    nextFocuses.unshift("food");
  }
  if (adjustment === "more-premium") {
    nextBudget = "luxury";
    noteAdditions.push("Prioritize polished, premium, reservation-worthy choices.");
  }
  if (adjustment === "more-relaxed") {
    nextPace = "slow";
    noteAdditions.push("Make the itinerary more relaxed with more breathing room.");
  }
  if (adjustment === "more-nightlife" && !nextFocuses.includes("nightlife")) {
    nextFocuses.unshift("nightlife");
  }
  if (adjustment === "swap-base") {
    const alternateHotel = (currentPlan.hotelRecommendations || []).find((hotel) => !hotel.isPrimary);
    if (alternateHotel) {
      nextHotelStatus = "need-hotel";
      nextExistingHotels = [];
      nextSelectedHotelName = alternateHotel.name;
      noteAdditions.push(`Try a different hotel base around ${alternateHotel.areaLabel}.`);
    }
  }

  const currentNotes = request.notes || currentPlan.notes || "";
  const nextNotes = [...new Set([currentNotes, ...noteAdditions].map((note) => String(note || "").trim()).filter(Boolean))].join(" ");
  const newPlan = buildTripPlanFn({
    cityKey: request.cityKey || currentPlan.cityKey,
    guide: currentPlan.guide,
    startDate: request.startDate || currentPlan.startDate,
    endDate: request.endDate || currentPlan.endDate,
    arrivalTime: request.arrivalTime || currentPlan.arrivalTime,
    departureTime: request.departureTime || currentPlan.departureTime,
    budget: nextBudget,
    pace: nextPace,
    focus: nextFocuses[0] || request.focus || currentPlan.focus,
    focuses: nextFocuses,
    notes: nextNotes,
    hotelStatus: nextHotelStatus,
    existingHotels: nextExistingHotels,
    selectedHotelName: nextSelectedHotelName,
  });
  newPlan.adjustmentHistory = [
    ...(currentPlan.adjustmentHistory || []),
    adjustment,
  ].slice(-6);
  newPlan.savedTrips = loadSavedItineraries();
  setCurrentPlan(newPlan);
  renderTripPlan(newPlan, getResults());
}

export function syncHotelFields(existingHotelFields) {
  const status = document.querySelector('input[name="hotel-status"]:checked')?.value;
  const hasHotels = status === "have-hotel";
  existingHotelFields.classList.toggle("hidden", !hasHotels);
  existingHotelFields.setAttribute("aria-hidden", String(!hasHotels));
}

export function handleResultsClick(event) {
  const actionTarget = event.target.closest("[data-action]");
  if (!actionTarget) {
    return;
  }

  const action = actionTarget.dataset.action;

  if (action === "download-itinerary") {
    downloadSavedItinerary(actionTarget.dataset.saveId);
    return;
  }

  if (action === "delete-itinerary") {
    deleteSavedItinerary(actionTarget.dataset.saveId);
    return;
  }

  if (action === "open-saved-drawer") {
    document.dispatchEvent(new CustomEvent("triptrellis:open-saved-drawer"));
    return;
  }

  const currentPlan = getCurrentPlan();
  if (!currentPlan) {
    return;
  }

  if (action === "open-library") {
    openLibraryOverlay();
    return;
  }

  if (action === "open-add-day") {
    openLibraryOverlay({ mode: "add", dayIndex: Number(actionTarget.dataset.dayIndex) });
    return;
  }

  if (action === "open-add-slot") {
    openLibraryOverlay({
      mode: "add",
      dayIndex: Number(actionTarget.dataset.dayIndex),
      slot: actionTarget.dataset.slot,
    });
    return;
  }

  if (action === "replace-item") {
    openLibraryOverlay({
      mode: "replace",
      dayIndex: Number(actionTarget.dataset.dayIndex),
      itemId: actionTarget.dataset.itineraryId,
      slot: actionTarget.dataset.slot || "",
    });
    return;
  }

  if (action === "close-library") {
    closeLibraryOverlay();
    return;
  }

  if (action === "choose-library-item") {
    applyLibrarySelection(actionTarget.dataset.itemId);
    return;
  }

  if (action === "save-itinerary") {
    saveCurrentItinerary();
    return;
  }

  if (action === "print-current-itinerary") {
    openPrintView(currentPlan);
    return;
  }

  if (action === "select-hotel") {
    rebuildPlanForSelectedHotel(actionTarget.dataset.hotelName, _buildTripPlanFn);
    return;
  }

  if (action === "adjust-trip") {
    applyTripAdjustment(actionTarget.dataset.adjustment, _buildTripPlanFn);
    return;
  }

  if (action === "remove-item") {
    removeItineraryItem(actionTarget.dataset.dayIndex, actionTarget.dataset.itineraryId);
    return;
  }

  if (action === "move-item-earlier") {
    moveItineraryItemToAdjacentSlot(actionTarget.dataset.dayIndex, actionTarget.dataset.itineraryId, -1);
    return;
  }

  if (action === "move-item-later") {
    moveItineraryItemToAdjacentSlot(actionTarget.dataset.dayIndex, actionTarget.dataset.itineraryId, 1);
    return;
  }
}

export function handleResultsInput(event) {
  const currentPlan = getCurrentPlan();
  if (event.target.id !== "library-search" || !currentPlan) {
    return;
  }
  const cursorStart = event.target.selectionStart;
  const cursorEnd = event.target.selectionEnd;
  currentPlan.librarySearch = event.target.value;
  renderTripPlan(currentPlan, getResults());
  const nextInput = document.querySelector("#library-search");
  if (nextInput) {
    nextInput.focus();
    nextInput.setSelectionRange(cursorStart, cursorEnd);
  }
}

export function handleResultsChange(event) {
  const currentPlan = getCurrentPlan();
  if (!currentPlan) {
    return;
  }

  if (event.target.id === "library-category") {
    currentPlan.libraryCategory = event.target.value;
    if (event.target.value !== "Food") {
      currentPlan.libraryCuisineFilter = "all";
      currentPlan.libraryPriceFilter = "all";
    }
    renderTripPlan(currentPlan, getResults());
    return;
  }

  if (event.target.id === "library-cuisine") {
    currentPlan.libraryCuisineFilter = event.target.value;
    renderTripPlan(currentPlan, getResults());
    return;
  }

  if (event.target.id === "library-price") {
    currentPlan.libraryPriceFilter = event.target.value;
    renderTripPlan(currentPlan, getResults());
    return;
  }

  if (event.target.id === "library-area") {
    currentPlan.libraryAreaFilter = event.target.value;
    renderTripPlan(currentPlan, getResults());
  }
}

export function handleDragStart(event) {
  const item = event.target.closest("[data-itinerary-id]");
  const currentPlan = getCurrentPlan();
  if (!item || !currentPlan) {
    return;
  }
  setDraggedItineraryItem({
    itineraryId: item.dataset.itineraryId,
    fromDayIndex: Number(item.dataset.dayIndex),
  });
  item.classList.add("is-dragging");
  event.dataTransfer.effectAllowed = "move";
}

export function handleDragEnd() {
  document.querySelectorAll(".itinerary-item.is-dragging").forEach((item) => item.classList.remove("is-dragging"));
  setDraggedItineraryItem(null);
}

export function handleDragOver(event) {
  const dropZone = event.target.closest("[data-day-index]");
  const draggedItineraryItem = getDraggedItineraryItem();
  if (!dropZone || !draggedItineraryItem) {
    return;
  }
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
}

export function handleDrop(event) {
  const dropZone = event.target.closest(".drop-zone, .slot-card, .empty-itinerary-slot, .day-card");
  const draggedItineraryItem = getDraggedItineraryItem();
  const currentPlan = getCurrentPlan();
  if (!dropZone || !draggedItineraryItem || !currentPlan) {
    return;
  }
  event.preventDefault();
  const targetDayIndex = Number(dropZone.dataset.dayIndex);
  const targetSlot = dropZone.dataset.slot || "";
  const fromDay = currentPlan.days[draggedItineraryItem.fromDayIndex];
  const targetDay = currentPlan.days[targetDayIndex];
  if (!fromDay || !targetDay) {
    setDraggedItineraryItem(null);
    return;
  }

  const movingItem = (fromDay.itineraryItems || []).find((item) => item.id === draggedItineraryItem.itineraryId);
  if (!movingItem) {
    setDraggedItineraryItem(null);
    return;
  }

  fromDay.itineraryItems = (fromDay.itineraryItems || []).filter((item) => item.id !== draggedItineraryItem.itineraryId);
  const moved = {
    ...movingItem,
    slot: targetSlot || movingItem.slot,
    label: getSlotLabel(targetSlot || movingItem.slot),
  };
  targetDay.itineraryItems = [...(targetDay.itineraryItems || []), moved];
  refreshDayState(fromDay, currentPlan);
  refreshDayState(targetDay, currentPlan);
  setDraggedItineraryItem(null);
  renderTripPlan(currentPlan, getResults());
  showToast("Stop moved to a new slot.", "success");
}
