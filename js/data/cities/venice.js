// Standalone venice city data

export const veniceGuide = {
  "label": "Venice",
  "country": "Italy",
  "currency": "Vaporetto passes help, but the city works best when you treat each day like a walking island circuit.",
  "transferNote": "Bridges, luggage, and water-bus waits all add friction, so a tight district plan matters more here than in most cities.",
  "areaAdjacency": {
    "san-marco": [
      "dorsoduro",
      "castello"
    ],
    "dorsoduro": [
      "cannaregio",
      "san-marco"
    ],
    "cannaregio": [
      "castello",
      "dorsoduro"
    ],
    "castello": [
      "san-marco",
      "cannaregio"
    ]
  },
  "hotelAreas": {
    "san-marco": {
      "label": "San Marco",
      "mood": "classic and ceremonial",
      "strengths": [
        "culture",
        "luxury",
        "walkability"
      ]
    },
    "dorsoduro": {
      "label": "Dorsoduro",
      "mood": "art-led and calmer",
      "strengths": [
        "culture",
        "design",
        "walkability"
      ]
    },
    "cannaregio": {
      "label": "Cannaregio",
      "mood": "local and food-friendly",
      "strengths": [
        "food",
        "walkability",
        "value"
      ]
    },
    "castello": {
      "label": "Castello",
      "mood": "quieter and residential",
      "strengths": [
        "walkability",
        "culture",
        "wellness"
      ]
    }
  },
  "hotels": {
    "luxury": [
      {
        "name": "The Gritti Palace",
        "area": "san-marco",
        "vibe": "A grand-canal splurge that gives Venice full theatrical weight.",
        "bestFor": [
          "luxury",
          "culture",
          "food"
        ]
      },
      {
        "name": "Aman Venice",
        "area": "san-marco",
        "vibe": "A deeply atmospheric palazzo luxury stay for a slower, more romantic Venice.",
        "bestFor": [
          "luxury",
          "culture",
          "design"
        ]
      },
      {
        "name": "Belmond Hotel Cipriani",
        "area": "castello",
        "vibe": "A more retreat-like luxury stay if you want Venice to feel quieter and more removed.",
        "bestFor": [
          "luxury",
          "wellness",
          "food"
        ]
      }
    ],
    "premium": [
      {
        "name": "Palazzo Veneziano",
        "area": "dorsoduro",
        "vibe": "A refined Dorsoduro base that keeps Venice slower and easier than a full San Marco stay.",
        "bestFor": [
          "design",
          "culture",
          "food"
        ]
      },
      {
        "name": "Ca' Pisani",
        "area": "dorsoduro",
        "vibe": "A style-forward boutique option in one of Venice's best districts for wandering.",
        "bestFor": [
          "design",
          "walkability",
          "food"
        ]
      },
      {
        "name": "NH Collection Venezia Murano Villa",
        "area": "cannaregio",
        "vibe": "A smarter premium pick if you want a quieter lagoon-side mood.",
        "bestFor": [
          "design",
          "wellness",
          "food"
        ]
      },
      {
        "name": "Londra Palace Venezia",
        "area": "castello",
        "vibe": "A lagoon-edge stay that keeps eastern Venice and San Marco both within easy reach.",
        "bestFor": [
          "luxury",
          "culture",
          "food"
        ]
      }
    ],
    "smart": [
      {
        "name": "Hotel Antiche Figure",
        "area": "cannaregio",
        "vibe": "An arrival-friendly base that still gives you real Venice atmosphere.",
        "bestFor": [
          "transit",
          "food",
          "value"
        ]
      },
      {
        "name": "Generator Venice",
        "area": "dorsoduro",
        "vibe": "A value pick if location matters more than full-service luxury.",
        "bestFor": [
          "value",
          "walkability",
          "design"
        ]
      },
      {
        "name": "Hotel Rio",
        "area": "castello",
        "vibe": "A simple base for first-time sightseeing without a heavy spend.",
        "bestFor": [
          "culture",
          "walkability",
          "value"
        ]
      },
      {
        "name": "Hotel Ai Cavalieri di Venezia",
        "area": "cannaregio",
        "vibe": "A dressed-up option if you want central Venice convenience without top-end pricing.",
        "bestFor": [
          "culture",
          "walkability",
          "value"
        ]
      }
    ]
  },
  "cantMiss": [
    {
      "name": "Piazza San Marco and Basilica exterior",
      "area": "san-marco",
      "tags": [
        "culture"
      ],
      "description": "The essential ceremonial heart of Venice, and still most magical before the crowds harden the whole square."
    },
    {
      "name": "Doge's Palace",
      "area": "san-marco",
      "tags": [
        "culture",
        "museum"
      ],
      "description": "One of the city's richest interiors, where state rooms and staircases finally give the Venetian myth some scale."
    },
    {
      "name": "Accademia Bridge and Grand Canal line",
      "area": "dorsoduro",
      "tags": [
        "design",
        "walkability"
      ],
      "description": "One of the clearest ways to understand Venice's light, water, and movement without overcomplicating the route."
    },
    {
      "name": "Cannaregio canals and Jewish Ghetto area",
      "area": "cannaregio",
      "tags": [
        "culture",
        "walkability"
      ],
      "description": "A slower, more local Venice route where quieter canals and older residential texture balance the ceremonial core."
    },
    {
      "name": "Arsenale and eastern Castello lanes",
      "area": "castello",
      "tags": [
        "walkability",
        "culture"
      ],
      "description": "A quieter residential side of Venice that adds balance to the trip."
    },
    {
      "name": "Santa Maria della Salute and Punta della Dogana line",
      "area": "dorsoduro",
      "tags": [
        "design",
        "walkability"
      ],
      "description": "A Venice silhouette-and-waterfront pairing that lands especially well in softer light."
    },
    {
      "name": "Rialto Bridge and Grand Canal market edge",
      "area": "san-marco",
      "tags": [
        "culture",
        "walkability"
      ],
      "description": "Still one of the city's key orientation anchors when handled early and woven into a broader route."
    }
  ],
  "activities": [
    {
      "name": "Peggy Guggenheim Collection",
      "area": "dorsoduro",
      "tags": [
        "museum",
        "design"
      ],
      "description": "A smaller museum anchor if the day wants modern art without overload."
    },
    {
      "name": "Rialto market morning",
      "area": "san-marco",
      "tags": [
        "food",
        "walkability"
      ],
      "description": "A morning block for when Venice should feel connected to produce, kitchens, and actual neighborhood life."
    },
    {
      "name": "Cicchetti crawl in Cannaregio",
      "area": "cannaregio",
      "tags": [
        "food",
        "nightlife"
      ],
      "description": "One of the smartest ways to make Venice dinner feel local, loose, and properly rooted in the city."
    },
    {
      "name": "Zattere waterfront stroll",
      "area": "dorsoduro",
      "tags": [
        "walkability",
        "wellness"
      ],
      "description": "A calmer waterfront route where the city opens up and the day can finally exhale a little."
    },
    {
      "name": "Murano glass afternoon",
      "area": "cannaregio",
      "tags": [
        "design",
        "shopping"
      ],
      "description": "A worthwhile add-on only if you want craft and lagoon movement in the plan."
    },
    {
      "name": "Teatro La Fenice district stop",
      "area": "san-marco",
      "tags": [
        "culture",
        "design"
      ],
      "description": "A central add-on if the trip wants one more refined interior and theatrical old-city layer."
    },
    {
      "name": "Quiet convent-and-campo drift in Castello",
      "area": "castello",
      "tags": [
        "walkability",
        "wellness"
      ],
      "description": "A counterweight to the busiest ceremonial parts of Venice."
    }
  ],
  "food": [
    {
      "name": "Osteria alle Testiere",
      "area": "san-marco",
      "tags": [
        "food"
      ],
      "cuisine": "Seafood",
      "description": "A small seafood dinner if the trip wants one serious Venetian table.",
      "reservation": "Reserve ahead."
    },
    {
      "name": "Cantina Do Mori",
      "area": "san-marco",
      "tags": [
        "food",
        "nightlife"
      ],
      "cuisine": "Cicchetti",
      "description": "A classic standing cicchetti stop near Rialto, best when you want one old-Venice snack-and-spritz moment.",
      "reservation": ""
    },
    {
      "name": "Antiche Carampane",
      "area": "san-marco",
      "tags": [
        "food"
      ],
      "cuisine": "Venetian seafood",
      "description": "An old-school seafood dinner that feels properly Venetian rather than just historic on paper.",
      "reservation": ""
    },
    {
      "name": "Al Timon",
      "area": "cannaregio",
      "tags": [
        "food",
        "nightlife"
      ],
      "cuisine": "Cicchetti and wine",
      "description": "A more local-feeling evening choice in Cannaregio.",
      "reservation": ""
    },
    {
      "name": "Osteria Enoteca Ai Artisti",
      "area": "dorsoduro",
      "tags": [
        "food"
      ],
      "cuisine": "Venetian bistro",
      "description": "A quieter Dorsoduro dinner with real neighborhood warmth and less ceremony than the bigger-name rooms.",
      "reservation": ""
    },
    {
      "name": "Gelateria Nico",
      "area": "dorsoduro",
      "tags": [
        "cafes",
        "food"
      ],
      "cuisine": "Gelato",
      "description": "A simple Venice sweet stop on the Zattere.",
      "reservation": ""
    },
    {
      "name": "Nevodi",
      "area": "castello",
      "tags": [
        "food"
      ],
      "cuisine": "Seafood",
      "description": "An eastern-Venice dinner when the day should stay out of the busiest zones.",
      "reservation": ""
    },
    {
      "name": "Osteria Al Squero",
      "area": "dorsoduro",
      "tags": [
        "food",
        "value"
      ],
      "cuisine": "Cicchetti",
      "description": "A low-friction snack or aperitivo stop when the day is already on the Dorsoduro side.",
      "reservation": ""
    },
    {
      "name": "Trattoria alla Madonna",
      "area": "san-marco",
      "tags": [
        "food"
      ],
      "cuisine": "Classic Venetian seafood and pasta",
      "description": "A central meal if the trip wants one more old-school room close to Rialto.",
      "reservation": ""
    }
  ]
};

export const veniceSupplements = [
  {
    "name": "Basilica dei Frari",
    "area": "dorsoduro",
    "tags": [
      "culture"
    ],
      "description": "A church interior if the day wants one quieter major art-and-history anchor."
  },
  {
    "name": "Burano color-block detour",
    "area": "cannaregio",
    "tags": [
      "design",
      "walkability"
    ],
    "description": "A worthwhile lagoon add-on when the trip can afford one bigger island move."
  },
  {
    "name": "Bookshop-and-backstreets Castello loop",
    "area": "castello",
    "tags": [
      "walkability",
      "culture"
    ],
    "description": "A slower eastern-Venice route that keeps the day from feeling too ceremonial."
  },
  {
    "name": "Cantinone già Schiavi",
    "area": "dorsoduro",
    "tags": [
      "food",
      "nightlife"
    ],
    "cuisine": "Cicchetti",
    "description": "One of the smartest casual food stops in Dorsoduro.",
    "reservation": ""
  },
  {
    "name": "Trattoria da Romano",
    "area": "cannaregio",
    "tags": [
      "food"
    ],
    "cuisine": "Lagoon seafood and risotto",
    "description": "A strong Burano-side meal if the day already commits to the islands.",
    "reservation": ""
  },
  {
    "name": "Rosticceria Gislon",
    "area": "san-marco",
    "tags": [
      "food",
      "value"
    ],
    "cuisine": "Quick Venetian snacks",
      "description": "A low-friction lunch near Rialto and San Marco.",
    "reservation": ""
  },
  {
    "name": "Scuola Grande di San Rocco",
    "area": "dorsoduro",
    "tags": [
      "culture",
      "design"
    ],
    "description": "A richer art-and-interior stop if the trip wants one more serious Venetian room."
  },
  {
    "name": "Giudecca waterfront detour",
    "area": "dorsoduro",
    "tags": [
      "walkability",
      "nature"
    ],
      "description": "A breathing-room move if central Venice starts feeling too compressed."
  },
  {
    "name": "Vino Vero",
    "area": "cannaregio",
    "tags": [
      "food",
      "nightlife"
    ],
    "cuisine": "Natural wine and cicchetti",
    "description": "A stronger Cannaregio evening stop when the trip wants a more current local feel.",
    "reservation": ""
  },
  {
    "name": "Osteria Bancogiro",
    "area": "san-marco",
    "tags": [
      "food"
    ],
    "cuisine": "Canal-side Venetian plates",
      "description": "An atmospheric meal around the Rialto zone.",
    "reservation": ""
  },
  {
    "name": "San Giorgio Maggiore island viewpoint",
    "area": "san-marco",
    "tags": [
      "culture",
      "nature"
    ],
    "description": "A worthwhile quick crossing if the trip wants one more grand panorama without a huge detour."
  },
  {
    "name": "Al Covo",
    "area": "castello",
    "tags": [
      "food"
    ],
    "cuisine": "Seasonal Venetian cooking",
      "description": "A Castello dinner if the trip wants one more polished local table away from San Marco crowds.",
    "reservation": ""
  }
];

export default { guide: veniceGuide, supplements: veniceSupplements };
