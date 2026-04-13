// Standalone buenos-aires city data

export const buenosAiresGuide = {
  "label": "Buenos Aires",
  "country": "Argentina",
  "currency": "Rideshares help, but the trip works best when each day stays within one cluster of barrios.",
  "transferNote": "Neighborhood personality is the whole point here, so avoid building days that hop around too much.",
  "areaAdjacency": {
    "palermo": [
      "recoleta",
      "puerto-madero"
    ],
    "recoleta": [
      "san-telmo",
      "palermo"
    ],
    "san-telmo": [
      "puerto-madero",
      "recoleta"
    ],
    "puerto-madero": [
      "palermo",
      "san-telmo"
    ]
  },
  "hotelAreas": {
    "palermo": {
      "label": "Palermo",
      "mood": "stylish and restaurant-led",
      "strengths": [
        "food",
        "nightlife",
        "design"
      ]
    },
    "recoleta": {
      "label": "Recoleta",
      "mood": "elegant and classic",
      "strengths": [
        "culture",
        "luxury",
        "walkability"
      ]
    },
    "san-telmo": {
      "label": "San Telmo",
      "mood": "historic and atmospheric",
      "strengths": [
        "culture",
        "walkability",
        "nightlife"
      ]
    },
    "puerto-madero": {
      "label": "Puerto Madero",
      "mood": "modern and cleaner-lined",
      "strengths": [
        "luxury",
        "nature",
        "food"
      ]
    }
  },
  "hotels": {
    "luxury": [
      {
        "name": "Alvear Palace Hotel",
        "area": "recoleta",
        "vibe": "A grand classic splurge if Buenos Aires should feel formal and elegant.",
        "bestFor": [
          "luxury",
          "culture",
          "food"
        ]
      },
      {
        "name": "Faena Hotel Buenos Aires",
        "area": "puerto-madero",
        "vibe": "A dramatic design-led luxury stay with more nightlife energy than the quieter classic districts.",
        "bestFor": [
          "luxury",
          "design",
          "nightlife"
        ]
      },
      {
        "name": "Four Seasons Buenos Aires",
        "area": "recoleta",
        "vibe": "An international luxury base with easy central leverage and a more formal Recoleta feel.",
        "bestFor": [
          "luxury",
          "food",
          "culture"
        ]
      }
    ],
    "premium": [
      {
        "name": "Palo Santo Hotel",
        "area": "palermo",
        "vibe": "A Palermo base for food, bars, and easy neighborhood energy from the moment you step outside.",
        "bestFor": [
          "food",
          "design",
          "nightlife"
        ]
      },
      {
        "name": "Hub Porteño",
        "area": "recoleta",
        "vibe": "A more intimate luxury-leaning boutique stay in a classic district.",
        "bestFor": [
          "culture",
          "food",
          "luxury"
        ]
      },
      {
        "name": "L'Adresse Hôtel Boutique",
        "area": "san-telmo",
        "vibe": "An atmospheric stay for a slower historic-core version of the city.",
        "bestFor": [
          "culture",
          "walkability",
          "food"
        ]
      },
      {
        "name": "CasaSur Recoleta",
        "area": "recoleta",
        "vibe": "A classic-district option for trips led by museums, cafés, and older-city elegance.",
        "bestFor": [
          "culture",
          "food",
          "luxury"
        ]
      }
    ],
    "smart": [
      {
        "name": "Mine Hotel",
        "area": "palermo",
        "vibe": "A Palermo value pick that keeps the trip restaurant-led.",
        "bestFor": [
          "food",
          "nightlife",
          "value"
        ]
      },
      {
        "name": "Up Recoleta Hotel",
        "area": "recoleta",
        "vibe": "A classic-district base if walking and museums matter more.",
        "bestFor": [
          "culture",
          "value",
          "walkability"
        ]
      },
      {
        "name": "Patios de San Telmo",
        "area": "san-telmo",
        "vibe": "A lower-friction historic-quarter base with real character.",
        "bestFor": [
          "culture",
          "value",
          "walkability"
        ]
      },
      {
        "name": "Legado Mítico Buenos Aires",
        "area": "palermo",
        "vibe": "A better-value boutique Palermo stay when neighborhood feel matters more than big-hotel gloss.",
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
      "name": "Recoleta Cemetery area",
      "area": "recoleta",
      "tags": [
        "culture"
      ],
      "description": "A classic first-trip Buenos Aires stop, with enough grandeur and eccentricity to keep it from feeling obligatory."
    },
    {
      "name": "San Telmo streets and Plaza Dorrego",
      "area": "san-telmo",
      "tags": [
        "culture",
        "walkability"
      ],
      "description": "The atmospheric old-city block where cobblestones, antiques, and worn façades make Buenos Aires feel most itself."
    },
    {
      "name": "Palermo parks and rose garden edge",
      "area": "palermo",
      "tags": [
        "nature",
        "walkability"
      ],
      "description": "A needed green reset in a city that can otherwise lean heavily toward meals, bars, and late nights."
    },
    {
      "name": "Teatro Colón exterior and central axis",
      "area": "recoleta",
      "tags": [
        "culture",
        "design"
      ],
      "description": "A monumental-city anchor near the center."
    },
    {
      "name": "Puerto Madero waterfront",
      "area": "puerto-madero",
      "tags": [
        "nature",
        "design"
      ],
      "description": "A cleaner-lined contrast to the city's older neighborhoods, best used as a lighter visual break rather than the soul of the trip."
    },
    {
      "name": "Palacio Barolo and Avenida de Mayo line",
      "area": "san-telmo",
      "tags": [
        "culture",
        "design"
      ],
      "description": "An architectural route for trips that want one more civic and literary Buenos Aires axis."
    },
    {
      "name": "Caminito-adjacent La Boca color block",
      "area": "san-telmo",
      "tags": [
        "culture",
        "design"
      ],
      "description": "Best used selectively as a color-and-history detour rather than a whole afternoon."
    }
  ],
  "activities": [
    {
      "name": "MALBA museum stop",
      "area": "palermo",
      "tags": [
        "museum",
        "culture"
      ],
      "description": "The right modern-art anchor when the trip wants one cultural block without leaving the Palermo orbit."
    },
    {
      "name": "Palermo Soho boutiques and cafés",
      "area": "palermo",
      "tags": [
        "shopping",
        "cafes"
      ],
      "description": "A browse-heavy daytime stretch where design shops, café stops, and tree-lined streets do most of the work."
    },
    {
      "name": "Sunday San Telmo market wander",
      "area": "san-telmo",
      "tags": [
        "shopping",
        "food"
      ],
      "description": "Best if the dates line up and the trip wants local street energy."
    },
    {
      "name": "Tango show evening",
      "area": "san-telmo",
      "tags": [
        "nightlife",
        "culture"
      ],
      "description": "A distinctly Buenos Aires night if you want one bigger entertainment move."
    },
    {
      "name": "Bookstores and Belle Époque Recoleta walk",
      "area": "recoleta",
      "tags": [
        "culture",
        "walkability"
      ],
      "description": "A daytime route for the more elegant, literary side of Buenos Aires."
    },
    {
      "name": "Parque Tres de Febrero morning loop",
      "area": "palermo",
      "tags": [
        "nature",
        "wellness"
      ],
      "description": "A greener start if the trip wants to balance heavier meals and nights out."
    },
    {
      "name": "Late-night café and vermouth circuit",
      "area": "palermo",
      "tags": [
        "nightlife",
        "cafes"
      ],
      "description": "A lower-pressure night if the trip wants social energy beyond big tango or steakhouse evenings."
    }
  ],
  "food": [
    {
      "name": "Don Julio",
      "area": "palermo",
      "tags": [
        "food"
      ],
      "cuisine": "Parrilla",
      "description": "Still the obvious steakhouse move, but the room, ritual, and meat quality justify it when booked properly.",
      "reservation": "Reserve ahead."
    },
    {
      "name": "El Preferido de Palermo",
      "area": "palermo",
      "tags": [
        "food"
      ],
      "cuisine": "Argentine comfort food",
      "description": "A classic meal with more room character and more point of view than a random steakhouse fallback.",
      "reservation": ""
    },
    {
      "name": "Mishiguene",
      "area": "palermo",
      "tags": [
        "food",
        "luxury"
      ],
      "cuisine": "Jewish-Argentine",
      "description": "A more specific destination dinner if the trip wants something beyond steak.",
      "reservation": ""
    },
    {
      "name": "Café Tortoni",
      "area": "recoleta",
      "tags": [
        "cafes",
        "culture"
      ],
      "cuisine": "Historic café",
      "description": "Worth doing once if you want the canonical old-Buenos-Aires café room.",
      "reservation": ""
    },
    {
      "name": "La Brigada",
      "area": "san-telmo",
      "tags": [
        "food"
      ],
      "cuisine": "Parrilla",
      "description": "A San Telmo dinner when the day is already south-side and wants a more traditional neighborhood finish.",
      "reservation": ""
    },
    {
      "name": "Niño Gordo",
      "area": "palermo",
      "tags": [
        "food",
        "nightlife"
      ],
      "cuisine": "Current fusion",
      "description": "A lively, more irreverent dinner when Palermo nightlife should follow naturally.",
      "reservation": ""
    },
    {
      "name": "Sarkis",
      "area": "palermo",
      "tags": [
        "food",
        "value"
      ],
      "cuisine": "Armenian",
      "description": "A lower-friction local favorite if the trip wants range beyond steak.",
      "reservation": ""
    },
    {
      "name": "Gran Dabbang",
      "area": "palermo",
      "tags": [
        "food"
      ],
      "cuisine": "Current small plates",
      "description": "An off-classic Palermo dinner if the trip wants something more contemporary and less obvious.",
      "reservation": ""
    },
    {
      "name": "El Obrero",
      "area": "san-telmo",
      "tags": [
        "food",
        "culture"
      ],
      "cuisine": "Old-school parrilla and classics",
      "description": "A more atmospheric south-side meal if the day already leans historic and local.",
      "reservation": ""
    }
  ]
};

export const buenosAiresSupplements = [
  {
    "name": "El Ateneo Grand Splendid",
    "area": "recoleta",
    "tags": [
      "culture",
      "design"
    ],
    "description": "A city-specific stop if the trip wants one more elegant indoor landmark."
  },
  {
    "name": "Puerto Madero reserve and waterfront loop",
    "area": "puerto-madero",
    "tags": [
      "nature",
      "walkability"
    ],
    "description": "A cleaner more open route when the trip needs a break from dense urban texture."
  },
  {
    "name": "Palermo wine-bar crawl",
    "area": "palermo",
    "tags": [
      "nightlife",
      "food"
    ],
    "description": "A social evening that keeps the night neighborhood-led."
  },
  {
    "name": "Anafe",
    "area": "palermo",
    "tags": [
      "food"
    ],
    "cuisine": "Current Argentine small plates",
    "description": "A current-feeling dinner if the trip wants range beyond parrilla.",
    "reservation": ""
  },
  {
    "name": "Las Violetas",
    "area": "recoleta",
    "tags": [
      "cafes",
      "culture"
    ],
    "cuisine": "Historic café",
    "description": "A classic room for breakfast or merienda if the day leans elegant.",
    "reservation": ""
  },
  {
    "name": "El Banco Rojo",
    "area": "san-telmo",
    "tags": [
      "food",
      "value"
    ],
    "cuisine": "Casual local bites",
    "description": "A lower-friction San Telmo stop that works well during a market-heavy day.",
    "reservation": ""
  },
  {
    "name": "Museo Nacional de Bellas Artes",
    "area": "recoleta",
    "tags": [
      "museum",
      "culture"
    ],
    "description": "A strong classic museum anchor if the trip wants one more formal cultural block."
  },
  {
    "name": "Costanera and ecological reserve edge",
    "area": "puerto-madero",
    "tags": [
      "nature",
      "walkability"
    ],
    "description": "An open-air route when the city days need more air and distance from traffic."
  },
  {
    "name": "La Carnicería",
    "area": "palermo",
    "tags": [
      "food"
    ],
    "cuisine": "Parrilla",
    "description": "A Palermo steak move if the trip wants one more meat-focused dinner with a dressed-up room.",
    "reservation": ""
  },
  {
    "name": "Bar El Federal",
    "area": "san-telmo",
    "tags": [
      "cafes",
      "culture"
    ],
    "cuisine": "Historic bar and café",
    "description": "An old-Buenos-Aires stop if the day is already south-side.",
    "reservation": ""
  },
  {
    "name": "Recoleta Cemetery and plaza edge",
    "area": "recoleta",
    "tags": [
      "culture",
      "walkability"
    ],
    "description": "A classic stop if the elegant side of the city should feel more complete."
  },
  {
    "name": "Julia",
    "area": "palermo",
    "tags": [
      "food"
    ],
    "cuisine": "Contemporary Argentine",
    "description": "A destination dinner if the trip wants something more distinct than another parrilla room.",
    "reservation": ""
  }
];

export default { guide: buenosAiresGuide, supplements: buenosAiresSupplements };
