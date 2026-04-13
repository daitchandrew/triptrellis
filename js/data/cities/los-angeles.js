// Standalone los-angeles city data

export const losAngelesGuide = {
  "label": "Los Angeles",
  "country": "United States",
  "currency": "Drive times matter more than distance, so each day should stay very zone-specific.",
  "transferNote": "The best LA days commit to one side of the city at a time instead of burning hours crossing between neighborhoods.",
  "areaAdjacency": {
    "west-hollywood": [
      "santa-monica",
      "silver-lake"
    ],
    "santa-monica": [
      "downtown-la",
      "west-hollywood"
    ],
    "downtown-la": [
      "silver-lake",
      "santa-monica"
    ],
    "silver-lake": [
      "west-hollywood",
      "downtown-la"
    ]
  },
  "hotelAreas": {
    "west-hollywood": {
      "label": "West Hollywood",
      "mood": "social and polished",
      "strengths": [
        "nightlife",
        "food",
        "shopping"
      ]
    },
    "santa-monica": {
      "label": "Santa Monica",
      "mood": "coastal and easygoing",
      "strengths": [
        "nature",
        "food",
        "walkability"
      ]
    },
    "downtown-la": {
      "label": "Downtown LA",
      "mood": "artsy and mixed",
      "strengths": [
        "culture",
        "food",
        "design"
      ]
    },
    "silver-lake": {
      "label": "Silver Lake / Los Feliz",
      "mood": "local and café-led",
      "strengths": [
        "cafes",
        "nightlife",
        "design"
      ]
    }
  },
  "hotels": {
    "luxury": [
      {
        "name": "Sunset Tower Hotel",
        "area": "west-hollywood",
        "vibe": "A classic glamour stay if LA should feel like an occasion.",
        "bestFor": [
          "luxury",
          "nightlife",
          "food"
        ]
      },
      {
        "name": "Shutters on the Beach",
        "area": "santa-monica",
        "vibe": "A strong coastal splurge when the trip wants ocean and slower mornings.",
        "bestFor": [
          "luxury",
          "nature",
          "food"
        ]
      },
      {
        "name": "The Proper Hotel Downtown LA",
        "area": "downtown-la",
        "vibe": "A design-heavy luxury stay if DTLA culture and food are leading the trip.",
        "bestFor": [
          "luxury",
          "design",
          "food"
        ]
      }
    ],
    "premium": [
      {
        "name": "Palihouse West Hollywood",
        "area": "west-hollywood",
        "vibe": "A West Hollywood base that keeps restaurants, rooftops, and late reservations feeling easy.",
        "bestFor": [
          "food",
          "nightlife",
          "design"
        ]
      },
      {
        "name": "The Georgian Hotel",
        "area": "santa-monica",
        "vibe": "A beachfront-ish base for a lighter coastal version of LA.",
        "bestFor": [
          "food",
          "nature",
          "design"
        ]
      },
      {
        "name": "The Hoxton Downtown LA",
        "area": "downtown-la",
        "vibe": "A stylish DTLA base that makes galleries, rooftop drinks, and destination dinners feel neatly connected.",
        "bestFor": [
          "food",
          "design",
          "nightlife"
        ]
      },
      {
        "name": "Petit Ermitage",
        "area": "west-hollywood",
        "vibe": "A richer boutique option if the trip wants one more romantic and design-heavy West Hollywood stay.",
        "bestFor": [
          "nightlife",
          "design",
          "food"
        ]
      }
    ],
    "smart": [
      {
        "name": "Mama Shelter Los Angeles",
        "area": "west-hollywood",
        "vibe": "A Hollywood-area value pick for trips that care more about rooftops and range than retreat-like quiet.",
        "bestFor": [
          "nightlife",
          "value",
          "food"
        ]
      },
      {
        "name": "Sea Blue Hotel",
        "area": "santa-monica",
        "vibe": "A simple coastal base for a beach-first LA day structure.",
        "bestFor": [
          "nature",
          "value",
          "walkability"
        ]
      },
      {
        "name": "Silver Lake Pool & Inn",
        "area": "silver-lake",
        "vibe": "A neighborhood-led base if cafés and local nightlife matter most.",
        "bestFor": [
          "design",
          "food",
          "value"
        ]
      },
      {
        "name": "The Adler a Hollywood Hotel",
        "area": "west-hollywood",
        "vibe": "An easier Hollywood-side stay if you want access to Los Feliz and West Hollywood without overspending.",
        "bestFor": [
          "value",
          "food",
          "nightlife"
        ]
      }
    ]
  },
  "cantMiss": [
    {
      "name": "Griffith Observatory",
      "area": "silver-lake",
      "tags": [
        "nature",
        "culture"
      ],
      "description": "Still one of the city's best overview-and-sunset anchors."
    },
    {
      "name": "Santa Monica beach and pier edge",
      "area": "santa-monica",
      "tags": [
        "nature",
        "walkability"
      ],
      "description": "A coastal reset that works best when the west side is already setting the tone for the day."
    },
    {
      "name": "The Broad and Grand Avenue",
      "area": "downtown-la",
      "tags": [
        "museum",
        "design"
      ],
      "description": "The clearest DTLA culture block when the day is built around museums, architecture, and a downtown dinner."
    },
    {
      "name": "Sunset Strip after dark",
      "area": "west-hollywood",
      "tags": [
        "nightlife"
      ],
      "description": "The city's most legible glamour-and-neon night block when LA should feel a little theatrical."
    },
    {
      "name": "Silver Lake Reservoir area",
      "area": "silver-lake",
      "tags": [
        "walkability",
        "wellness"
      ],
      "description": "A better local-feeling daytime reset than another long drive."
    },
    {
      "name": "Getty Villa coastal detour",
      "area": "santa-monica",
      "tags": [
        "culture",
        "nature"
      ],
      "description": "A west-side detour where antiquities and sea air make the museum stop feel far more atmospheric."
    },
    {
      "name": "LACMA and tar-pits district",
      "area": "west-hollywood",
      "tags": [
        "culture",
        "design"
      ],
      "description": "A central cultural route when the trip wants more than shopping and restaurants."
    }
  ],
  "activities": [
    {
      "name": "Melrose and West Hollywood browse",
      "area": "west-hollywood",
      "tags": [
        "shopping",
        "design"
      ],
      "description": "A daytime block built around boutiques, coffee, and people-watching rather than major sights."
    },
    {
      "name": "Abbot Kinney detour",
      "area": "santa-monica",
      "tags": [
        "shopping",
        "food"
      ],
      "description": "A browse-heavy west-side add-on that works best when the day is already leaning coastal."
    },
    {
      "name": "Arts District food-and-gallery circuit",
      "area": "downtown-la",
      "tags": [
        "food",
        "design"
      ],
      "description": "A current-feeling DTLA sequence."
    },
    {
      "name": "Los Feliz café and bookstore block",
      "area": "silver-lake",
      "tags": [
        "cafes",
        "walkability"
      ],
      "description": "A slower neighborhood route that feels more local than obvious LA tourism."
    },
    {
      "name": "Hollywood Bowl or rooftop-bar evening",
      "area": "west-hollywood",
      "tags": [
        "nightlife",
        "culture"
      ],
      "description": "A higher-energy night finish when you want LA to feel more cinematic."
    },
    {
      "name": "Echo Park and Sunset Boulevard drift",
      "area": "silver-lake",
      "tags": [
        "walkability",
        "cafes",
        "design"
      ],
      "description": "An east-side half-day if the trip wants more local city texture."
    },
    {
      "name": "Venice Canals and oceanfront bike stretch",
      "area": "santa-monica",
      "tags": [
        "nature",
        "walkability"
      ],
      "description": "A breezier coastal route when the west-side day should feel more open-air."
    }
  ],
  "food": [
    {
      "name": "Bestia",
      "area": "downtown-la",
      "tags": [
        "food"
      ],
      "cuisine": "Italian",
      "description": "A destination DTLA dinner if the day is already arts-district centered.",
      "reservation": "Reserve ahead."
    },
    {
      "name": "Gjelina",
      "area": "santa-monica",
      "tags": [
        "food"
      ],
      "cuisine": "California seasonal",
      "description": "A Venice meal with the kind of stylish patio energy LA does especially well.",
      "reservation": ""
    },
    {
      "name": "Night + Market",
      "area": "west-hollywood",
      "tags": [
        "food",
        "nightlife"
      ],
      "cuisine": "Thai",
      "description": "A loud, high-reward dinner for the kind of West Hollywood night that starts late and stays social.",
      "reservation": ""
    },
    {
      "name": "Courage Bagels",
      "area": "silver-lake",
      "tags": [
        "cafes",
        "food"
      ],
      "cuisine": "Bagels and brunch",
      "description": "An east-side breakfast or lunch anchor that gives the day an easy, local start.",
      "reservation": ""
    },
    {
      "name": "Republique",
      "area": "west-hollywood",
      "tags": [
        "food"
      ],
      "cuisine": "French-Californian",
      "description": "A classic brunch or dinner stop with real room presence.",
      "reservation": ""
    },
    {
      "name": "Holbox",
      "area": "downtown-la",
      "tags": [
        "food"
      ],
      "cuisine": "Seafood tacos",
      "description": "A genuinely easy lower-friction LA lunch stop.",
      "reservation": ""
    },
    {
      "name": "Musso & Frank Grill",
      "area": "west-hollywood",
      "tags": [
        "food",
        "culture"
      ],
      "cuisine": "Classic steakhouse",
      "description": "Worth doing once if the trip wants old Hollywood weight.",
      "reservation": ""
    },
    {
      "name": "Found Oyster",
      "area": "silver-lake",
      "tags": [
        "food"
      ],
      "cuisine": "Seafood",
      "description": "An east-side seafood dinner that feels current, crowded, and properly neighborhood-led.",
      "reservation": ""
    },
    {
      "name": "Great White",
      "area": "santa-monica",
      "tags": [
        "cafes",
        "food"
      ],
      "cuisine": "All-day café",
      "description": "A west-side breakfast or lunch stop that keeps a coastal morning easy and unforced.",
      "reservation": ""
    }
  ]
};

export const losAngelesSupplements = [
  {
    "name": "Getty Center terraces",
    "area": "west-hollywood",
    "tags": [
      "culture",
      "design",
      "nature"
    ],
      "description": "A visual-and-museum anchor if the trip wants one more expansive LA daytime move."
  },
  {
    "name": "Venice canals and Abbott Kinney morning",
    "area": "santa-monica",
    "tags": [
      "walkability",
      "shopping",
      "design"
    ],
    "description": "A better coastal-side sequence when the west side is the point of the day."
  },
  {
    "name": "Silver Lake music-bar evening",
    "area": "silver-lake",
    "tags": [
      "nightlife",
      "food"
    ],
    "description": "A stronger east-side night if the trip wants less Hollywood and more local energy."
  },
  {
    "name": "Osteria Mozza",
    "area": "west-hollywood",
    "tags": [
      "food"
    ],
    "cuisine": "Italian",
    "description": "A classic LA dining room for nights that should feel polished, grown-up, and a little old-school.",
    "reservation": ""
  },
  {
    "name": "Gjusta",
    "area": "santa-monica",
    "tags": [
      "cafes",
      "food"
    ],
    "cuisine": "Bakery and brunch",
    "description": "A west-side breakfast or lunch anchor when the coastal day needs one memorable food stop.",
    "reservation": ""
  },
  {
    "name": "Bavel",
    "area": "downtown-la",
    "tags": [
      "food"
    ],
    "cuisine": "Middle Eastern",
    "description": "A stronger destination dinner if the DTLA day wants a bigger finish.",
    "reservation": ""
  },
  {
    "name": "LACMA and Academy Museum edge",
    "area": "west-hollywood",
    "tags": [
      "culture",
      "design"
    ],
    "description": "A useful museum-and-architecture cluster when the west side day wants more culture."
  },
  {
    "name": "Echo Park Lake and Sunset Boulevard drift",
    "area": "silver-lake",
    "tags": [
      "walkability",
      "cafes",
      "design"
    ],
    "description": "A softer east-side afternoon if the trip wants one more local-feeling sequence."
  },
  {
    "name": "All Time",
    "area": "silver-lake",
    "tags": [
      "food"
    ],
    "cuisine": "California all-day dining",
    "description": "A stronger Los Feliz-side meal if the east-side day wants one more polished neighborhood table.",
    "reservation": ""
  },
  {
    "name": "Gjelina Take Away lunch stop",
    "area": "santa-monica",
    "tags": [
      "cafes",
      "food"
    ],
    "cuisine": "Sandwiches and salads",
    "description": "A lower-friction daytime stop when the west-side plan needs a smart reset rather than a full sit-down meal.",
    "reservation": ""
  },
  {
    "name": "Venice boardwalk and canals cycle stretch",
    "area": "santa-monica",
    "tags": [
      "nature",
      "walkability"
    ],
    "description": "A breezier coastal add-on if the west-side day should feel more open-air."
  },
  {
    "name": "Quarter Sheets",
    "area": "silver-lake",
    "tags": [
      "food"
    ],
    "cuisine": "Pizza and desserts",
    "description": "A strong neighborhood dinner if the trip wants one more relaxed but excellent east-side table.",
    "reservation": ""
  },
  {
    "name": "Cara Hotel courtyard breakfast",
    "area": "silver-lake",
    "tags": [
      "cafes",
      "food"
    ],
    "cuisine": "Breakfast and brunch",
    "description": "A softer Los Feliz-side breakfast if the day starts east.",
    "reservation": ""
  },
  {
    "name": "Point Dume overlook detour",
    "area": "santa-monica",
    "tags": [
      "nature"
    ],
    "description": "A worthwhile scenic add-on if the trip wants one more ocean-and-cliff moment."
  },
  {
    "name": "Arts District coffee-and-design drift",
    "area": "downtown-la",
    "tags": [
      "cafes",
      "design",
      "walkability"
    ],
    "description": "A lower-pressure DTLA add-on that gives the day more texture than one more museum room."
  },
  {
    "name": "Jon & Vinny's",
    "area": "west-hollywood",
    "tags": [
      "food"
    ],
    "cuisine": "Italian-American",
    "description": "A polished but easy LA dinner option when the night should feel good without becoming the whole event.",
    "reservation": ""
  }
];

export default { guide: losAngelesGuide, supplements: losAngelesSupplements };
