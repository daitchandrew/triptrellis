// Pure utility functions

export function normalizeText(value) {
  return String(value || "").trim().toLowerCase().replace(/\s+/g, " ");
}

export function hashString(value) {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) >>> 0;
  }
  return hash;
}

export function escapeAttribute(value) {
  return String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

export function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function formatDateSafe(date, fallback = "") {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
    return fallback;
  }
  return formatDate(date);
}

export function formatFocus(focus) {
  const labels = {
    food: "Food & Drink",
    culture: "Culture & History",
    wellness: "Wellness",
    nightlife: "Nightlife",
    design: "Design",
    museum: "Museums",
    shopping: "Shopping & Style",
    nature: "Nature",
    luxury: "Luxury",
  };
  if (Array.isArray(focus)) {
    return focus.map((f) => labels[f] || f).join(", ");
  }
  return labels[focus] || focus;
}

export function basePlaceName(name) {
  return normalizeText(name)
    .replace(/\s+(visit|morning|afternoon|evening|block|stop|pass|night|crawl|loop|run|start|route|window|pairing|reset|wander|drift|hour|break|add-on|add on|detour|circuit|flow)$/i, "")
    .trim();
}

export function shiftDate(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

export function differenceInDays(start, end) {
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const utcStart = Date.UTC(start.getFullYear(), start.getMonth(), start.getDate());
  const utcEnd = Date.UTC(end.getFullYear(), end.getMonth(), end.getDate());
  return Math.round((utcEnd - utcStart) / millisecondsPerDay);
}

export function toInputDate(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

export function stableSeedShuffle(items, seed) {
  return [...items]
    .map((item, index) => ({
      item,
      rank: hashString(`${seed}-${index}-${item.name}`),
    }))
    .sort((left, right) => left.rank - right.rank)
    .map((entry) => entry.item);
}

export function highlightLabel(timing) {
  if (timing === "morning") return "Morning";
  if (timing === "evening") return "Evening";
  return "Stop";
}
