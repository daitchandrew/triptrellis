import { cityGuides } from "./data/cities/index.js?v=triptrellis-library-expansion-20260411-008";
import { buildTripPlan, parseExistingHotels } from "./lib/plan-builder.js?v=triptrellis-prague-clock-cleanup-20260411-007";
import { populateSuggestedItinerary } from "./lib/itinerary.js";
import { hydratePlan, loadSavedItineraries, setAllTrips, setCurrentPlan } from "./lib/state.js";
import { renderEmptyState, renderInputError, renderTripPlan, renderSavedItinerariesSection } from "./lib/render-current.js?v=triptrellis-refine-panel-position-20260411-009";
import {
  handleDragEnd,
  handleDragOver,
  handleDragStart,
  handleDrop,
  handleResultsChange,
  handleResultsClick,
  handleResultsInput,
  setBuildTripPlanFn,
  syncHotelFields,
} from "./lib/handlers.js?v=triptrellis-refine-panel-position-20260411-009";
import { shiftDate, toInputDate } from "./lib/utils.js";

function getResults() {
  return document.querySelector("#results");
}

function getForm() {
  return document.querySelector("#planner-form");
}

function getGenerateButton() {
  return document.querySelector("#generate-trip-button");
}

function getEmptyStateTemplate() {
  return document.querySelector("#empty-state-template");
}

function getExistingHotelFields() {
  return document.querySelector("#existing-hotel-fields");
}

function getSavedDrawer() {
  return document.querySelector("#saved-trips-drawer");
}

function getSavedBackdrop() {
  return document.querySelector("#saved-trips-backdrop");
}

function getSavedDrawerContent() {
  return document.querySelector("#saved-trips-content");
}

function getSavedButton() {
  return document.querySelector("#my-trips-button");
}

let savedTripsSearch = "";
let savedTripsFilter = "all";

function getHotelStatusInputs() {
  return document.querySelectorAll('input[name="hotel-status"]');
}

function initializeDates() {
  const startField = document.querySelector("#start-date");
  const endField = document.querySelector("#end-date");
  const today = new Date();

  if (startField && !startField.value) {
    startField.value = toInputDate(shiftDate(today, 18));
  }

  if (endField && !endField.value) {
    endField.value = toInputDate(shiftDate(today, 22));
  }

}

function buildPlan(options) {
  return buildTripPlan(options, loadSavedItineraries, populateSuggestedItinerary);
}

let lastGenerateAt = 0;

function showGenerationError(error) {
  const results = getResults();
  console.error("TripTrellis failed to generate a plan:", error);
  if (results) {
    results.innerHTML = `
      <section class="section-card">
        <p class="section-kicker">Generation error</p>
        <h2 class="section-title">The trip could not be generated.</h2>
        <p class="card-subtitle">${error?.message || "Unknown browser error."}</p>
      </section>
    `;
    results.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function renderSavedDrawer() {
  const content = getSavedDrawerContent();
  if (!content) return;
  content.innerHTML = renderSavedItinerariesSection(loadSavedItineraries(), true, {
    search: savedTripsSearch,
    filter: savedTripsFilter,
  });
}

function setSavedDrawerOpen(open) {
  const drawer = getSavedDrawer();
  const backdrop = getSavedBackdrop();
  const button = getSavedButton();
  if (!drawer || !backdrop || !button) return;

  if (open) {
    renderSavedDrawer();
  }
  drawer.classList.toggle("is-open", open);
  drawer.setAttribute("aria-hidden", String(!open));
  backdrop.hidden = !open;
  button.setAttribute("aria-expanded", String(open));
}

function reopenSavedTrip(saveId) {
  const savedTrip = loadSavedItineraries().find((trip) => trip.id === saveId);
  const results = getResults();
  if (!savedTrip || !results) return;

  const plan = hydratePlan(savedTrip);
  plan.savedTrips = loadSavedItineraries();
  setCurrentPlan(plan);
  renderTripPlan(plan, results);
  setSavedDrawerOpen(false);
  window.setTimeout(() => {
    results.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 80);
}

export function generateFromForm(form) {
  if (!form) {
    showGenerationError(new Error("TripTrellis could not find the planner form."));
    return;
  }

  if (typeof form.reportValidity === "function" && !form.reportValidity()) {
    return;
  }

  const now = Date.now();
  if (now - lastGenerateAt < 250) {
    return;
  }
  lastGenerateAt = now;

  const results = getResults();
  try {
    const formData = new FormData(form);
    const cityKey = String(formData.get("city") || "");
    const guide = cityGuides[cityKey];
    const startDate = new Date(String(formData.get("start-date") || ""));
    const endDate = new Date(String(formData.get("end-date") || ""));
    const arrivalTime = String(formData.get("arrival-time") || "afternoon");
    const departureTime = String(formData.get("departure-time") || "morning");
    const budget = String(formData.get("budget") || "premium");
    const pace = String(formData.get("pace") || "balanced");
    const focuses = formData.getAll("focus").filter(Boolean);
    const focus = focuses[0] || "culture";
    const notes = String(formData.get("notes") || "").trim();
    const hotelStatus = String(formData.get("hotel-status") || "need-hotel");
    const existingHotels = parseExistingHotels(
      String(formData.get("existing-hotels") || ""),
      cityKey,
      guide?.label || "",
    );

    if (!guide || Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime()) || startDate > endDate) {
      renderInputError(results);
      return;
    }

    const plan = buildPlan({
      cityKey,
      guide,
      startDate,
      endDate,
      budget,
      pace,
      focus,
      focuses,
      notes,
      hotelStatus,
      existingHotels,
      arrivalTime,
      departureTime,
    });

    setCurrentPlan(plan);
    renderTripPlan(plan, results);

    window.setTimeout(() => {
      results?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  } catch (error) {
    showGenerationError(error);
  }
}

function handlePlannerSubmit(event) {
  event.preventDefault();
  generateFromForm(event.currentTarget);
}

globalThis.TripTrellisGenerate = generateFromForm;
globalThis.TripTrellisShowLoadError = () => {
  showGenerationError(new Error("The app script has not finished loading. Refresh the local server page and try again."));
};

function initializeApp() {
  setAllTrips(loadSavedItineraries());
  initializeDates();
  renderEmptyState(getResults(), getEmptyStateTemplate());

  const existingHotelFields = getExistingHotelFields();
  if (existingHotelFields) {
    syncHotelFields(existingHotelFields);
  }

  setBuildTripPlanFn(buildPlan);
}

function bindEvents() {
  const form = getForm();
  const generateButton = getGenerateButton();
  const results = getResults();
  const existingHotelFields = getExistingHotelFields();
  const savedButton = getSavedButton();
  const savedDrawer = getSavedDrawer();
  const savedBackdrop = getSavedBackdrop();
  const savedClose = document.querySelector("#saved-trips-close");

  form?.addEventListener("submit", handlePlannerSubmit);
  generateButton?.addEventListener("click", () => {
    generateFromForm(form);
  });

  savedButton?.addEventListener("click", () => setSavedDrawerOpen(true));
  savedClose?.addEventListener("click", () => setSavedDrawerOpen(false));
  savedBackdrop?.addEventListener("click", () => setSavedDrawerOpen(false));
  savedDrawer?.addEventListener("input", (event) => {
    if (event.target?.id !== "saved-trips-search") return;
    savedTripsSearch = event.target.value || "";
    renderSavedDrawer();
    const searchInput = document.querySelector("#saved-trips-search");
    if (searchInput) {
      searchInput.focus();
      searchInput.setSelectionRange(savedTripsSearch.length, savedTripsSearch.length);
    }
  });
  savedDrawer?.addEventListener("click", (event) => {
    const filterButton = event.target.closest('[data-action="saved-filter"]');
    if (filterButton) {
      event.preventDefault();
      savedTripsFilter = filterButton.dataset.filter || "all";
      renderSavedDrawer();
      return;
    }
    const reopenButton = event.target.closest('[data-action="reopen-itinerary"]');
    if (reopenButton) {
      event.preventDefault();
      reopenSavedTrip(reopenButton.dataset.saveId);
      return;
    }
    handleResultsClick(event);
    renderSavedDrawer();
  });

  getHotelStatusInputs().forEach((input) => {
    input.addEventListener("change", () => {
      if (existingHotelFields) {
        syncHotelFields(existingHotelFields);
      }
    });
  });

  results?.addEventListener("click", handleResultsClick);
  results?.addEventListener("input", handleResultsInput);
  results?.addEventListener("change", handleResultsChange);
  results?.addEventListener("dragstart", handleDragStart);
  results?.addEventListener("dragend", handleDragEnd);
  results?.addEventListener("dragover", handleDragOver);
  results?.addEventListener("drop", handleDrop);
}

initializeApp();
bindEvents();
