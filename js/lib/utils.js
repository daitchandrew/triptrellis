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
    culture: "Culture",
    wellness: "Wellness",
    nightlife: "Nightlife",
    amusement: "Amusement",
    design: "Amusement",
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
  const normalized = normalizeText(name)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\([^)]*\)/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (
    normalized.includes("astronomical clock")
    || (normalized.includes("old town square") && /\b(?:clock tower|clock)\b/.test(normalized))
  ) {
    return "prague astronomical clock";
  }

  const aliasRules = [
    { match: /\bprague city museum\b/, key: "prague city museum" },
    { match: /\bbangkok national museum\b/, key: "bangkok national museum" },
    { match: /\bkyoto national museum\b/, key: "kyoto national museum" },
    { match: /\btokyo national museum\b/, key: "tokyo national museum" },
    { match: /\bnational museum of denmark\b/, key: "national museum of denmark" },
    { match: /\bnational museum of art osaka\b/, key: "national museum of art osaka" },
    { match: /\bnational museum\b(?!\s+of\s+royal\s+barges)/, key: "national museum" },
  ];
  const alias = aliasRules.find((rule) => rule.match.test(normalized));
  if (alias) {
    return alias.key;
  }

  return normalized
    .replace(/\b(?:history deep dive|paper model visit|tower climb|art nouveau|spectacle|tick|experience|visit|morning|afternoon|evening|block|stop|pass|night|crawl|loop|run|start|route|window|pairing|reset|wander|drift|hour|break|add on|detour|circuit|flow|walk|climb)\b/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function getPlaceIdentityKeys(name) {
  const normalized = normalizeText(name)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\([^)]*\)/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const keys = new Set([basePlaceName(normalized)]);

  const landmarkAliases = [
    { match: /\bcharles bridge\b/, key: "charles bridge" },
    { match: /\bst vitus\b|\bsaint vitus\b/, key: "st vitus cathedral" },
    { match: /\bprague castle\b/, key: "prague castle" },
    { match: /\b(?:old town square|astronomical clock|clock tower)\b/, key: normalized.includes("clock") ? "prague astronomical clock" : "old town square" },
    { match: /\bstrahov monastery library\b|\bstrahov library\b/, key: "strahov monastery library" },
    { match: /\bclementinum\b/, key: "clementinum" },
    { match: /\bpetri?n lookout\b|\bpetrin tower\b/, key: "petrin lookout tower" },
    { match: /\bprague city museum\b|\blangweil\b/, key: "prague city museum" },
    { match: /\bnational museum\b(?!\s+of\s+royal\s+barges)/, key: "national museum" },
    { match: /\bdancing house\b/, key: "dancing house" },
    { match: /\bu fleku\b|\bu fleku\b/, key: "u fleku" },
    { match: /\bletna\b.*beer garden|\bletna beer garden\b/, key: "letna beer garden" },
    { match: /\briegrovy sady\b/, key: "riegrovy sady" },
    { match: /\bkampa park\b|\bkampa island\b/, key: "kampa island" },
    { match: /\bfranciscan garden\b/, key: "franciscan garden" },
    { match: /\bnerudova\b/, key: "nerudova street" },
    { match: /\bmunicipal house\b/, key: "municipal house" },
    { match: /\bpowder gate\b/, key: "powder gate" },
  ];

  landmarkAliases.forEach((rule) => {
    if (rule.match.test(normalized)) {
      keys.add(rule.key);
    }
  });

  normalized
    .split(/\b(?:and|to|or|plus)\b/g)
    .map((part) => basePlaceName(part))
    .filter((part) => part && part.split(" ").length >= 2)
    .forEach((part) => keys.add(part));

  keys.delete("");
  return [...keys];
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
