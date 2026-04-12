import { cityGuides } from "./data/cities/index.js?v=triptrellis-library-expansion-20260412-003";
import { buildTripPlan, parseExistingHotels } from "./lib/plan-builder.js?v=triptrellis-ui-logic-20260412-001";
import { populateSuggestedItinerary } from "./lib/itinerary.js?v=triptrellis-ui-logic-20260412-001";
import { hydratePlan, loadSavedItineraries, setAllTrips, setCurrentPlan } from "./lib/state.js";
import { renderEmptyState, renderGenerationLoading, renderInputError, renderTripPlan, renderSavedItinerariesSection } from "./lib/render-current.js?v=triptrellis-ui-render-20260412-001";
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
} from "./lib/handlers.js?v=triptrellis-ui-render-20260412-001";
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
let isGenerating = false;
let loadingMessageTimer = null;

const generationLoadingMessages = [
  "Locating optimal hotel areas...",
  "Curating neighborhood spots...",
  "Balancing transit and standout detours...",
  "Structuring your daily flow...",
  "Polishing the trip brief...",
];

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

function setGenerateButtonLoading(loading) {
  const button = getGenerateButton();
  if (!button) return;
  button.disabled = loading;
  button.classList.toggle("is-loading", loading);
  button.setAttribute("aria-busy", String(loading));
  button.innerHTML = loading
    ? `Building your trip <span aria-hidden="true">…</span>`
    : `Generate my trip brief <span aria-hidden="true">→</span>`;
}

function startGenerationLoading(results) {
  window.clearInterval(loadingMessageTimer);
  renderGenerationLoading(results, generationLoadingMessages[0]);
  results?.scrollIntoView({ behavior: "smooth", block: "start" });
  let messageIndex = 0;
  loadingMessageTimer = window.setInterval(() => {
    messageIndex = (messageIndex + 1) % generationLoadingMessages.length;
    const messageNode = document.querySelector("#generation-loading-message");
    if (messageNode) {
      messageNode.textContent = generationLoadingMessages[messageIndex];
    }
  }, 850);
}

function stopGenerationLoading() {
  window.clearInterval(loadingMessageTimer);
  loadingMessageTimer = null;
  isGenerating = false;
  setGenerateButtonLoading(false);
}

// ---- Form Enhancement Functions ----

function updateDurationCounter() {
  const startField = document.querySelector("#start-date");
  const endField = document.querySelector("#end-date");
  const durationCounter = document.querySelector("#duration-counter");
  
  if (!startField || !endField || !durationCounter) return;
  
  const start = new Date(startField.value);
  const end = new Date(endField.value);
  
  if (!startField.value || !endField.value || isNaN(start) || isNaN(end)) {
    durationCounter.innerHTML = '<span class="duration-days">—</span> <span class="duration-nights">days</span>';
    return;
  }
  
  if (end <= start) {
    durationCounter.innerHTML = '<span class="duration-days">0</span> <span class="duration-nights">days</span>';
    return;
  }
  
  const diffTime = Math.abs(end - start);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
  
  durationCounter.innerHTML = `<span class="duration-days">${diffDays}</span> <span class="duration-nights">${diffDays === 1 ? 'day' : 'days'}</span>`;
}

function updateFormSummary() {
  const form = getForm();
  if (!form) return;
  
  const citySelect = form.querySelector("#city");
  const budgetSelect = form.querySelector("#budget");
  const durationCounter = document.querySelector("#duration-counter");
  const focusCheckboxes = form.querySelectorAll('input[name="focus"]:checked');
  
  if (document.querySelector("#summary-city")) {
    document.querySelector("#summary-city").textContent = citySelect?.options[citySelect.selectedIndex]?.text || "Select city";
  }
  
  if (document.querySelector("#summary-budget")) {
    const budgetOption = budgetSelect?.options[budgetSelect.selectedIndex]?.text;
    document.querySelector("#summary-budget").textContent = budgetOption || "Select budget";
  }
  
  if (document.querySelector("#summary-dates")) {
    const durationText = document.querySelector("#duration-counter")?.querySelector(".duration-days")?.textContent || "—";
    const numericDuration = Number(durationText);
    document.querySelector("#summary-dates").textContent = Number.isFinite(numericDuration) && numericDuration > 0
      ? `${durationText} ${numericDuration === 1 ? "day" : "days"}`
      : "Choose dates";
  }
  
  if (document.querySelector("#summary-interests")) {
    const count = focusCheckboxes.length;
    let interestsText = "No interests selected";
    if (count === 1) {
      const firstFocus = focusCheckboxes[0].closest(".focus-card");
      const titleText = firstFocus?.querySelector(".focus-card-label")?.textContent?.replace(/\s+/g, " ").trim();
      interestsText = titleText || "1 interest";
    } else if (count > 1) {
      const firstFocus = focusCheckboxes[0].closest(".focus-card");
      const firstTitle = firstFocus?.querySelector(".focus-card-label")?.textContent?.replace(/\s+/g, " ").trim();
      interestsText = `${firstTitle}, and ${count - 1} more`;
    }
    document.querySelector("#summary-interests").textContent = interestsText;
  }
}

// ---- Form Save/Load Functions ----

const FORM_PREFS_KEY = "triptrellis-form-prefs";

function saveFormPreferences() {
  const form = getForm();
  if (!form) return;

  const prefs = {
    city: form.querySelector("#city")?.value,
    startDate: form.querySelector("#start-date")?.value,
    endDate: form.querySelector("#end-date")?.value,
    arrivalTime: form.querySelector("#arrival-time")?.value,
    departureTime: form.querySelector("#departure-time")?.value,
    budget: form.querySelector("#budget")?.value,
    pace: form.querySelector("#pace")?.value,
    hotelStatus: form.querySelector('input[name="hotel-status"]:checked')?.value,
    focus: Array.from(form.querySelectorAll('input[name="focus"]:checked')).map(c => c.value),
    notes: form.querySelector("#notes")?.value,
    savedAt: new Date().toISOString(),
  };

  localStorage.setItem(FORM_PREFS_KEY, JSON.stringify(prefs));

  // Visual feedback
  const saveBtn = document.querySelector("#save-form-button");
  if (saveBtn) {
    saveBtn.classList.add("saved");
    setTimeout(() => saveBtn.classList.remove("saved"), 2000);
  }
}

function loadFormPreferences() {
  const prefs = localStorage.getItem(FORM_PREFS_KEY);
  if (!prefs) return false;

  try {
    const data = JSON.parse(prefs);
    const form = getForm();
    if (!form) return false;

    // Load all form values
    if (data.city) form.querySelector("#city").value = data.city;
    if (data.startDate) form.querySelector("#start-date").value = data.startDate;
    if (data.endDate) form.querySelector("#end-date").value = data.endDate;
    if (data.arrivalTime) form.querySelector("#arrival-time").value = data.arrivalTime;
    if (data.departureTime) form.querySelector("#departure-time").value = data.departureTime;
    if (data.budget) form.querySelector("#budget").value = data.budget;
    if (data.pace) form.querySelector("#pace").value = data.pace;
    if (data.hotelStatus) {
      const radioBtn = form.querySelector(`input[name="hotel-status"][value="${data.hotelStatus}"]`);
      if (radioBtn) radioBtn.checked = true;
    }
    if (data.focus && data.focus.length > 0) {
      form.querySelectorAll('input[name="focus"]').forEach(cb => {
        cb.checked = data.focus.includes(cb.value);
      });
    }
    if (data.notes) form.querySelector("#notes").value = data.notes;

    // Trigger updates
    updateDurationCounter();
    updateFormSummary();
    
    const existingHotelFields = getExistingHotelFields();
    if (existingHotelFields) {
      syncHotelFields(existingHotelFields);
    }

    return true;
  } catch (error) {
    console.error("Failed to load form preferences:", error);
    return false;
  }
}

function hasFormPreferences() {
  return !!localStorage.getItem(FORM_PREFS_KEY);
}
// ---- City Search Functions ----
// (Removed - using standard select with optgroups)

// ---- Date Validation Functions ----

function validateDates() {
  const startField = document.querySelector("#start-date");
  const endField = document.querySelector("#end-date");
  const startError = document.querySelector("#start-date-error");
  const endError = document.querySelector("#end-date-error");

  if (!startField || !endField) return true;

  let isValid = true;
  const startDate = new Date(startField.value);
  const endDate = new Date(endField.value);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Check start date is not in past
  if (startField.value && startDate < today) {
    showFieldError(startField, startError, "Arrival date must be in the future");
    isValid = false;
  } else {
    clearFieldError(startField, startError);
  }

  // Check end date is after start date
  if (startField.value && endField.value && endDate <= startDate) {
    showFieldError(endField, endError, "Departure must be after arrival");
    isValid = false;
  } else {
    clearFieldError(endField, endError);
  }

  return isValid;
}

function showFieldError(field, errorEl, message) {
  if (!field || !errorEl) return;
  field.setAttribute("aria-invalid", "true");
  errorEl.textContent = message;
  errorEl.hidden = false;
}

function clearFieldError(field, errorEl) {
  if (!field || !errorEl) return;
  field.removeAttribute("aria-invalid");
  errorEl.textContent = "";
  errorEl.hidden = true;
}

export function generateFromForm(form) {
  if (!form) {
    showGenerationError(new Error("TripTrellis could not find the planner form."));
    return;
  }

  if (typeof form.reportValidity === "function" && !form.reportValidity()) {
    return;
  }

  if (!validateDates()) {
    return;
  }

  const now = Date.now();
  if (isGenerating || now - lastGenerateAt < 250) {
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

    isGenerating = true;
    setGenerateButtonLoading(true);
    startGenerationLoading(results);

    window.setTimeout(() => {
      try {
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
      } finally {
        stopGenerationLoading();
      }
    }, 1050);
  } catch (error) {
    stopGenerationLoading();
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
  
  // Initialize new form features
  updateDurationCounter();
  updateFormSummary();
  
  // Load stored preferences if available
  loadFormPreferences();
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

  // Date and duration tracking
  const startField = document.querySelector("#start-date");
  const endField = document.querySelector("#end-date");
  startField?.addEventListener("change", () => {
    updateDurationCounter();
    updateFormSummary();
    validateDates();
    saveFormPreferences();
  });
  endField?.addEventListener("change", () => {
    updateDurationCounter();
    updateFormSummary();
    validateDates();
    saveFormPreferences();
  });

  // Validate on blur too
  startField?.addEventListener("blur", validateDates);
  endField?.addEventListener("blur", validateDates);

  // Form summary updates
  const citySelect = form?.querySelector("#city");
  const budgetSelect = form?.querySelector("#budget");
  const focusCheckboxes = form?.querySelectorAll('input[name="focus"]');
  
  citySelect?.addEventListener("change", () => {
    updateFormSummary();
    saveFormPreferences();
  });
  budgetSelect?.addEventListener("change", () => {
    updateFormSummary();
    saveFormPreferences();
  });
  focusCheckboxes?.forEach(cb => {
    cb.addEventListener("change", () => {
      updateFormSummary();
      saveFormPreferences();
    });
  });

  // Reset form
  const resetButton = document.querySelector("#reset-form-button");
  resetButton?.addEventListener("click", () => {
    form?.reset();
    initializeDates();
    updateDurationCounter();
    updateFormSummary();
  });

  // Save form preferences
  const saveButton = document.querySelector("#save-form-button");
  saveButton?.addEventListener("click", () => {
    saveFormPreferences();
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
      saveFormPreferences();
    });
  });

  // Auto-save notes field
  const notesField = form?.querySelector("#notes");
  notesField?.addEventListener("input", saveFormPreferences);

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
