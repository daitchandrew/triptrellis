// Standalone mexico-city city data

export const mexicoCityGuide = {
  "label": "Mexico City",
  "country": "Mexico",
  "currency": "Rideshares are often easiest, but traffic and neighborhood clustering matter more than raw distance.",
  "transferNote": "The best Mexico City days stay district-led so you spend your energy on food and streets rather than on traffic.",
  "areaAdjacency": {
    "roma-norte": [
      "condesa",
      "polanco"
    ],
    "condesa": [
      "centro",
      "roma-norte"
    ],
    "centro": [
      "polanco",
      "condesa"
    ],
    "polanco": [
      "roma-norte",
      "centro"
    ]
  },
  "hotelAreas": {
    "roma-norte": {
      "label": "Roma Norte",
      "mood": "current and restaurant-led",
      "strengths": [
        "food",
        "nightlife",
        "design"
      ]
    },
    "condesa": {
      "label": "Condesa",
      "mood": "green and walkable",
      "strengths": [
        "walkability",
        "cafes",
        "food"
      ]
    },
    "centro": {
      "label": "Centro Histórico",
      "mood": "grand and historic",
      "strengths": [
        "culture",
        "walkability",
        "shopping"
      ]
    },
    "polanco": {
      "label": "Polanco",
      "mood": "polished and upscale",
      "strengths": [
        "luxury",
        "shopping",
        "food"
      ]
    }
  },
  "hotels": {
    "luxury": [
      {
        "name": "Las Alcobas",
        "area": "polanco",
        "vibe": "A refined smaller luxury base if dining and comfort matter most.",
        "bestFor": [
          "luxury",
          "food",
          "shopping"
        ]
      },
      {
        "name": "Four Seasons Hotel Mexico City",
        "area": "condesa",
        "vibe": "A classic city luxury stay with calmer courtyard energy.",
        "bestFor": [
          "luxury",
          "wellness",
          "food"
        ]
      },
      {
        "name": "Sofitel Mexico City Reforma",
        "area": "polanco",
        "vibe": "A skyline-facing luxury base with better central convenience.",
        "bestFor": [
          "luxury",
          "design",
          "food"
        ]
      }
    ],
    "premium": [
      {
        "name": "Nima Local House Hotel",
        "area": "roma-norte",
        "vibe": "A boutique Roma Norte stay that makes the trip feel more neighborhood-led from the moment you arrive.",
        "bestFor": [
          "design",
          "food",
          "nightlife"
        ]
      },
      {
        "name": "Casa Polanco",
        "area": "polanco",
        "vibe": "A stylish Polanco stay for trips that want quieter luxury with galleries and serious dining nearby.",
        "bestFor": [
          "design",
          "luxury",
          "food"
        ]
      },
      {
        "name": "Condesa DF",
        "area": "condesa",
        "vibe": "A social design hotel if parks, drinks, and restaurants should shape the trip.",
        "bestFor": [
          "nightlife",
          "design",
          "food"
        ]
      },
      {
        "name": "Brick Hotel",
        "area": "roma-norte",
        "vibe": "A richer Roma Norte base that keeps the trip neighborhood-led while still feeling dressed up.",
        "bestFor": [
          "design",
          "food",
          "nightlife"
        ]
      }
    ],
    "smart": [
      {
        "name": "Hotel Stanza",
        "area": "roma-norte",
        "vibe": "A Roma base that puts cafés, bakeries, and dinner reservations within an easy walk or short ride.",
        "bestFor": [
          "food",
          "value",
          "nightlife"
        ]
      },
      {
        "name": "Casa Decu",
        "area": "condesa",
        "vibe": "A calmer Condesa base for greener mornings, park loops, and an easier neighborhood rhythm.",
        "bestFor": [
          "cafes",
          "walkability",
          "value"
        ]
      },
      {
        "name": "Historico Central",
        "area": "centro",
        "vibe": "A strong-value stay if historic core logistics matter most.",
        "bestFor": [
          "culture",
          "walkability",
          "value"
        ]
      },
      {
        "name": "Ignacia Guest House",
        "area": "roma-norte",
        "vibe": "A smaller stay if the trip wants Roma charm without a luxury spend.",
        "bestFor": [
          "design",
          "food",
          "value"
        ]
      }
    ]
  },
  "cantMiss": [
    {
      "name": "Zócalo and Metropolitan Cathedral",
      "area": "centro",
      "tags": [
        "culture"
      ],
      "description": "The monumental heart of the city, and still the clearest place to feel Mexico City's scale and historical weight."
    },
    {
      "name": "Palacio de Bellas Artes",
      "area": "centro",
      "tags": [
        "culture",
        "design"
      ],
      "description": "A major architecture-and-culture anchor that gives Centro a much richer visual payoff than the square alone."
    },
    {
      "name": "Chapultepec Park edge",
      "area": "polanco",
      "tags": [
        "nature",
        "culture"
      ],
      "description": "A west-side reset that anchors museums, long walks, and a softer break from the city's denser central blocks."
    },
    {
      "name": "Roma Norte street wander",
      "area": "roma-norte",
      "tags": [
        "design",
        "walkability"
      ],
      "description": "A district where tree-lined streets, art nouveau façades, and restaurants make the atmosphere itself the draw."
    },
    {
      "name": "Condesa park loop",
      "area": "condesa",
      "tags": [
        "walkability",
        "wellness"
      ],
      "description": "A softer, greener sequence that gives the city a lighter rhythm between bigger meals and heavier historic blocks."
    },
    {
      "name": "Biblioteca Vasconcelos",
      "area": "centro",
      "tags": [
        "design",
        "culture"
      ],
      "description": "A dramatic civic-space stop when the trip wants one more architectural counterpoint to the historic core."
    },
    {
      "name": "Coyoacán central plazas",
      "area": "condesa",
      "tags": [
        "culture",
        "walkability"
      ],
      "description": "A larger detour for trips that want a slower, more residential district with historic weight."
    }
  ],
  "activities": [
    {
      "name": "Museo Nacional de Antropología",
      "area": "polanco",
      "tags": [
        "museum",
        "culture"
      ],
      "description": "The city's strongest museum anchor, and the right pick when the trip wants one serious cultural block with real depth."
    },
    {
      "name": "Mercado de San Juan browse",
      "area": "centro",
      "tags": [
        "food"
      ],
      "description": "A market stop that adds culinary texture and a more lived-in side of the center beyond its grand monuments."
    },
    {
      "name": "Roma cafés and boutiques",
      "area": "roma-norte",
      "tags": [
        "cafes",
        "shopping"
      ],
      "description": "A lower-friction daytime block built around coffee, design stores, and the neighborhood's easy social rhythm."
    },
    {
      "name": "Condesa wine-bar evening",
      "area": "condesa",
      "tags": [
        "nightlife",
        "food"
      ],
      "description": "An easy social evening where the neighborhood itself keeps the logistics light and the mood relaxed."
    },
    {
      "name": "Lucha libre night",
      "area": "centro",
      "tags": [
        "nightlife",
        "culture"
      ],
      "description": "A fun distinctly local entertainment move if the night should feel bigger."
    },
    {
      "name": "Centro rooftop-and-tile route",
      "area": "centro",
      "tags": [
        "design",
        "nightlife"
      ],
      "description": "A central-city sequence if the trip wants architecture plus an easier evening follow-through."
    },
    {
      "name": "Coyoacán café and market drift",
      "area": "condesa",
      "tags": [
        "cafes",
        "culture",
        "walkability"
      ],
      "description": "A softer half-day if the trip wants one more residential and local-feeling district."
    }
  ],
  "food": [
    {
      "name": "Pujol",
      "area": "polanco",
      "tags": [
        "food",
        "luxury"
      ],
      "cuisine": "Contemporary Mexican",
      "description": "A major splurge dinner if the trip wants one top-table reservation.",
      "reservation": "Reserve ahead."
    },
    {
      "name": "Contramar",
      "area": "roma-norte",
      "tags": [
        "food"
      ],
      "cuisine": "Seafood",
      "description": "A city-classic lunch or early dinner with exactly the kind of bright, social energy Mexico City does so well.",
      "reservation": ""
    },
    {
      "name": "Máximo Bistrot",
      "area": "roma-norte",
      "tags": [
        "food"
      ],
      "cuisine": "Seasonal contemporary",
      "description": "A Roma Norte dinner that still feels tied to the neighborhood rather than floating above it.",
      "reservation": ""
    },
    {
      "name": "El Cardenal",
      "area": "centro",
      "tags": [
        "food"
      ],
      "cuisine": "Traditional Mexican breakfast",
      "description": "A classic central breakfast if the day begins in Centro.",
      "reservation": ""
    },
    {
      "name": "Lardo",
      "area": "condesa",
      "tags": [
        "food",
        "cafes"
      ],
      "cuisine": "Mediterranean café",
      "description": "A lighter Condesa meal that works especially well when the day wants one more easygoing pause.",
      "reservation": ""
    },
    {
      "name": "Taquería Orinoco",
      "area": "roma-norte",
      "tags": [
        "food",
        "value"
      ],
      "cuisine": "Tacos",
      "description": "A lower-friction taco stop that works especially well late, when the night needs a more casual landing.",
      "reservation": ""
    },
    {
      "name": "Quintonil",
      "area": "polanco",
      "tags": [
        "food",
        "luxury"
      ],
      "cuisine": "Contemporary Mexican",
      "description": "Another major splurge if the trip wants a high-end meal with real Mexico City stature.",
      "reservation": "Reserve ahead."
    },
    {
      "name": "Rosetta",
      "area": "roma-norte",
      "tags": [
        "food"
      ],
      "cuisine": "Current city classic",
      "description": "A Roma Norte table if the trip wants another polished destination meal.",
      "reservation": ""
    },
    {
      "name": "Expendio de Maíz",
      "area": "roma-norte",
      "tags": [
        "food",
        "culture"
      ],
      "cuisine": "Maize-forward Mexican cooking",
      "description": "A deeply place-specific meal for trips that want one table built around maize, craft, and local context.",
      "reservation": ""
    }
  ]
};

export const mexicoCitySupplements = [
  {
    "name": "Casa Luis Barragán",
    "area": "condesa",
    "tags": [
      "design",
      "culture"
    ],
    "description": "A design pilgrimage that gives the city one of its most specific architectural notes."
  },
  {
    "name": "Coyoacán and Frida Kahlo option",
    "area": "condesa",
    "tags": [
      "culture",
      "walkability"
    ],
    "description": "A larger add-on day if the trip wants a more residential and historic contrast."
  },
  {
    "name": "Polanco avenue-and-galleries drift",
    "area": "polanco",
    "tags": [
      "shopping",
      "design"
    ],
    "description": "An upscale district block of galleries, storefronts, and broad avenues when the trip leans browse-heavy."
  },
  {
    "name": "Taquería El Califa de León",
    "area": "roma-norte",
    "tags": [
      "food",
      "value"
    ],
    "cuisine": "Tacos",
    "description": "A smart classic taco stop if the day wants one more direct and local-feeling meal.",
    "reservation": ""
  },
  {
    "name": "Sud 777",
    "area": "polanco",
    "tags": [
      "food",
      "luxury"
    ],
    "cuisine": "Contemporary Mexican",
    "description": "A city-classic reservation when the trip wants one major table outside the Roma-heavy center of gravity.",
    "reservation": "Reserve ahead."
  },
  {
    "name": "El Vilsito",
    "area": "roma-norte",
    "tags": [
      "food",
      "value",
      "nightlife"
    ],
    "cuisine": "Late-night tacos",
    "description": "A late-running taco stop with exactly the kind of energetic, slightly chaotic payoff that suits a longer night.",
    "reservation": ""
  },
  {
    "name": "Museo Jumex and Plaza Carso add-on",
    "area": "polanco",
    "tags": [
      "design",
      "culture"
    ],
    "description": "A modern-art stop that pairs especially well with a more design-led west-side sequence."
  },
  {
    "name": "Centro rooftop-and-tiles circuit",
    "area": "centro",
    "tags": [
      "design",
      "nightlife",
      "culture"
    ],
    "description": "A central-city route that lets architecture, rooftops, and dinner click into one coherent sequence."
  },
  {
    "name": "Nicos",
    "area": "polanco",
    "tags": [
      "food",
      "culture"
    ],
    "cuisine": "Classic Mexican",
    "description": "A stronger old-school lunch or dinner if the trip wants depth over trendiness.",
    "reservation": ""
  },
  {
    "name": "Panadería Rosetta",
    "area": "roma-norte",
    "tags": [
      "cafes",
      "food"
    ],
    "cuisine": "Bakery",
    "description": "A Roma morning anchor for pastries, coffee, and the kind of slow start the neighborhood does well.",
    "reservation": ""
  },
  {
    "name": "Chapultepec Castle hillside add-on",
    "area": "polanco",
    "tags": [
      "culture",
      "nature"
    ],
    "description": "A strong west-side extension if the trip wants one more historic-and-viewpoint stop."
  },
  {
    "name": "Masala y Maíz",
    "area": "roma-norte",
    "tags": [
      "food"
    ],
    "cuisine": "Afro-Asian-Latin fusion",
    "description": "A smart current-feeling table if the trip wants one more inventive Roma dinner.",
    "reservation": ""
  },
  {
    "name": "Café Nin",
    "area": "roma-norte",
    "tags": [
      "cafes",
      "food"
    ],
    "cuisine": "Breakfast and pastries",
    "description": "A polished breakfast stop that fits naturally into a Roma or Condesa morning.",
    "reservation": ""
  },
  {
    "name": "Monumento a la Revolución and plaza line",
    "area": "centro",
    "tags": [
      "culture",
      "design"
    ],
    "description": "A broader civic-axis stop if the trip wants one more central monumental layer."
  },
  {
    "name": "Roma and Condesa art-bookstore drift",
    "area": "roma-norte",
    "tags": [
      "cafes",
      "shopping",
      "design"
    ],
    "description": "A softer neighborhood add-on if the trip wants more browse-heavy daytime texture."
  },
  {
    "name": "Merotoro",
    "area": "roma-norte",
    "tags": [
      "food"
    ],
    "cuisine": "Baja-Mediterranean",
    "description": "A Roma Norte dinner that feels local, current, and worthy of protecting a full evening for.",
    "reservation": ""
  }
];

export default { guide: mexicoCityGuide, supplements: mexicoCitySupplements };
