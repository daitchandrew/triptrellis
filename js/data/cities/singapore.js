// Standalone singapore city data

export const singaporeGuide = {
  "label": "Singapore",
  "country": "Singapore",
  "currency": "Use MRT and Grab, and expect hawker meals to be the smartest-value food move in the city.",
  "transferNote": "Humidity and sudden rain matter more than raw distance, so cluster neighborhoods instead of overcommitting.",
  "areaAdjacency": {
    "marina-bay": [
      "chinatown",
      "orchard"
    ],
    "chinatown": [
      "kampong-glam",
      "marina-bay"
    ],
    "kampong-glam": [
      "orchard",
      "chinatown"
    ],
    "orchard": [
      "marina-bay",
      "kampong-glam"
    ]
  },
  "hotelAreas": {
    "marina-bay": {
      "label": "Marina Bay",
      "mood": "sleek, tropical, and skyline-driven",
      "strengths": [
        "luxury",
        "design",
        "shopping"
      ]
    },
    "chinatown": {
      "label": "Chinatown",
      "mood": "food-heavy and historic",
      "strengths": [
        "food",
        "culture",
        "walkability"
      ]
    },
    "kampong-glam": {
      "label": "Kampong Glam",
      "mood": "creative and café-led",
      "strengths": [
        "design",
        "cafes",
        "nightlife"
      ]
    },
    "orchard": {
      "label": "Orchard",
      "mood": "efficient and retail-focused",
      "strengths": [
        "shopping",
        "luxury",
        "transit"
      ]
    }
  },
  "hotels": {
    "luxury": [
      {
        "name": "Marina Bay Sands",
        "area": "marina-bay",
        "vibe": "A dramatic skyline splurge with serious dinner and pool leverage.",
        "bestFor": [
          "luxury",
          "design",
          "shopping"
        ]
      },
      {
        "name": "The Fullerton Bay Hotel",
        "area": "marina-bay",
        "vibe": "Refined waterfront luxury with more romance and skyline drama than most Marina Bay stays.",
        "bestFor": [
          "luxury",
          "food",
          "design"
        ]
      },
      {
        "name": "Raffles Singapore",
        "area": "kampong-glam",
        "vibe": "A classic grand-hotel stay that makes the trip feel ceremonial.",
        "bestFor": [
          "luxury",
          "culture",
          "food"
        ]
      }
    ],
    "premium": [
      {
        "name": "The Clan Hotel",
        "area": "chinatown",
        "vibe": "A central base that keeps hawker stops, heritage streets, and the river within easy reach.",
        "bestFor": [
          "food",
          "culture",
          "design"
        ]
      },
      {
        "name": "The Standard Singapore",
        "area": "orchard",
        "vibe": "Current-feeling and social without losing the city-center advantage.",
        "bestFor": [
          "design",
          "nightlife",
          "food"
        ]
      },
      {
        "name": "Naumi Hotel",
        "area": "marina-bay",
        "vibe": "Boutique and stylish with a core-city position that keeps both the bay and the older quarters easy.",
        "bestFor": [
          "design",
          "food",
          "transit"
        ]
      },
      {
        "name": "The Warehouse Hotel",
        "area": "chinatown",
        "vibe": "A design-led option for trips that want more character than another interchangeable glass tower.",
        "bestFor": [
          "design",
          "food",
          "nightlife"
        ]
      }
    ],
    "smart": [
      {
        "name": "Hotel Mono",
        "area": "chinatown",
        "vibe": "A straightforward Chinatown stay for food-led, walkable days.",
        "bestFor": [
          "food",
          "walkability",
          "value"
        ]
      },
      {
        "name": "YOTEL Singapore Orchard Road",
        "area": "orchard",
        "vibe": "A clean Orchard base if fast transit and retail access matter most.",
        "bestFor": [
          "shopping",
          "transit",
          "value"
        ]
      },
      {
        "name": "Hotel Boss",
        "area": "kampong-glam",
        "vibe": "An easy lower-friction pick near several of the city's best day-and-night districts.",
        "bestFor": [
          "value",
          "food",
          "transit"
        ]
      },
      {
        "name": "The Vagabond Club",
        "area": "kampong-glam",
        "vibe": "A boutique Kampong Glam stay with real character without drifting into full luxury pricing.",
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
      "name": "Gardens by the Bay",
      "area": "marina-bay",
      "tags": [
        "design",
        "nature"
      ],
      "description": "Singapore's signature futuristic garden complex and still one of the city's strongest anchors."
    },
    {
      "name": "Singapore River and Boat Quay",
      "area": "marina-bay",
      "tags": [
        "design",
        "walkability"
      ],
      "description": "A first-night walk that delivers skyline views and an immediate sense of how the core fits together."
    },
    {
      "name": "Buddha Tooth Relic Temple",
      "area": "chinatown",
      "tags": [
        "culture"
      ],
      "description": "A compact, visually rich heritage stop that works well inside a Chinatown day."
    },
    {
      "name": "Sultan Mosque and Arab Street",
      "area": "kampong-glam",
      "tags": [
        "culture",
        "design"
      ],
      "description": "One of the best district pairings for heritage, textiles, cafés, and lower-rise wandering."
    },
    {
      "name": "Singapore Botanic Gardens",
      "area": "orchard",
      "tags": [
        "nature",
        "wellness"
      ],
      "description": "A greener reset that balances the city's denser core especially well."
    },
    {
      "name": "Peranakan shophouses and Katong lanes",
      "area": "kampong-glam",
      "tags": [
        "culture",
        "design",
        "walkability"
      ],
      "description": "A more residential heritage-and-color route that broadens the city beyond the central skyline core."
    },
    {
      "name": "Esplanade and Marina waterfront arc",
      "area": "marina-bay",
      "tags": [
        "design",
        "walkability"
      ],
      "description": "An evening route that works best once the day already leans Marina Bay."
    }
  ],
  "activities": [
    {
      "name": "National Gallery Singapore",
      "area": "marina-bay",
      "tags": [
        "culture",
        "design"
      ],
      "description": "One of the city's best museum anchors, especially if you want serious Southeast Asian art."
    },
    {
      "name": "Maxwell Food Centre crawl",
      "area": "chinatown",
      "tags": [
        "food",
        "walkability"
      ],
      "description": "A low-friction hawker stop that turns Chinatown into a real lunch district."
    },
    {
      "name": "Haji Lane and boutique browse",
      "area": "kampong-glam",
      "tags": [
        "design",
        "shopping"
      ],
      "description": "A lighter block for local labels, coffee, and streets that feel smaller and more personal."
    },
    {
      "name": "ION Orchard and design retail walk",
      "area": "orchard",
      "tags": [
        "shopping",
        "design"
      ],
      "description": "A shopping stretch for trips that want one clean, high-gloss retail run."
    },
    {
      "name": "Clarke Quay evening bar hop",
      "area": "marina-bay",
      "tags": [
        "nightlife",
        "food"
      ],
      "description": "A simple high-energy night option when you want the evening to stay easy."
    },
    {
      "name": "Tiong Bahru books, coffee, and bakery block",
      "area": "chinatown",
      "tags": [
        "cafes",
        "design",
        "walkability"
      ],
      "description": "A neighborhood sequence if the trip wants something more lived-in and current."
    },
    {
      "name": "Haw Par Villa curiosity stop",
      "area": "orchard",
      "tags": [
        "culture"
      ],
      "description": "A more unusual Singapore detour if the trip wants one stranger, more specific stop."
    }
  ],
  "food": [
    {
      "name": "Lau Pa Sat satay night",
      "area": "marina-bay",
      "tags": [
        "food",
        "nightlife"
      ],
      "cuisine": "Hawker satay",
      "description": "A classic evening food move when you want local flavor without losing skyline energy.",
      "reservation": ""
    },
    {
      "name": "Burnt Ends",
      "area": "orchard",
      "tags": [
        "food",
        "luxury"
      ],
      "cuisine": "Modern barbecue",
      "description": "One of Singapore's most talked-about destination dinners.",
      "reservation": "Book well ahead."
    },
    {
      "name": "Odette",
      "area": "marina-bay",
      "tags": [
        "food",
        "luxury"
      ],
      "cuisine": "Contemporary tasting menu",
      "description": "A major splurge dinner if the trip wants one reservation-led Singapore night.",
      "reservation": "Reserve in advance."
    },
    {
      "name": "Tian Tian Hainanese Chicken Rice",
      "area": "chinatown",
      "tags": [
        "food",
        "value"
      ],
      "cuisine": "Hainanese chicken rice",
      "description": "A headline hawker classic that still works if you go in with realistic expectations.",
      "reservation": ""
    },
    {
      "name": "Kok Sen",
      "area": "chinatown",
      "tags": [
        "food"
      ],
      "cuisine": "Zi char",
      "description": "A neighborhood-led dinner if you want something more local-feeling than the obvious global names.",
      "reservation": ""
    },
    {
      "name": "The Coconut Club",
      "area": "kampong-glam",
      "tags": [
        "food",
        "design"
      ],
      "cuisine": "Nasi lemak",
      "description": "A local pick that still feels unmistakably specific to Singapore.",
      "reservation": ""
    },
    {
      "name": "Atlas Bar",
      "area": "kampong-glam",
      "tags": [
        "nightlife",
        "luxury"
      ],
      "cuisine": "Cocktails",
      "description": "A glamorous cocktail stop when the night should feel a little more dressed up.",
      "reservation": ""
    },
    {
      "name": "Song Fa Bak Kut Teh",
      "area": "chinatown",
      "tags": [
        "food",
        "value"
      ],
      "cuisine": "Peppery pork-rib soup",
      "description": "A local lunch or dinner that keeps the food layer feeling grounded in classic Singapore comfort dishes.",
      "reservation": ""
    },
    {
      "name": "Common Man Coffee Roasters",
      "area": "orchard",
      "tags": [
        "cafes",
        "food"
      ],
      "cuisine": "Brunch and coffee",
      "description": "A daytime café anchor when the plan needs a clean breakfast or a quieter reset.",
      "reservation": ""
    }
  ]
};

export const singaporeSupplements = [
  {
    "name": "Jewel Changi Rain Vortex",
    "area": "marina-bay",
    "tags": [
      "design",
      "nature"
    ],
    "description": "A spectacle stop that works surprisingly well on an arrival or departure day, especially when the trip wants one more futuristic Singapore moment."
  },
  {
    "name": "East Coast Park cycle and seafood block",
    "area": "marina-bay",
    "tags": [
      "nature",
      "food"
    ],
    "description": "A breezier coastal stretch when the trip wants a less vertical, more everyday side of Singapore."
  },
  {
    "name": "Tiong Bahru café and bookshop drift",
    "area": "chinatown",
    "tags": [
      "cafes",
      "design",
      "walkability"
    ],
    "description": "A softer neighborhood add-on for mornings that should feel local, current, and a little less headline-driven."
  },
  {
    "name": "Candlenut",
    "area": "orchard",
    "tags": [
      "food"
    ],
    "cuisine": "Peranakan",
    "description": "A strong Singapore-specific dinner if the trip wants more depth than hawker classics.",
    "reservation": ""
  },
  {
    "name": "Jumbo Seafood Riverside Point",
    "area": "marina-bay",
    "tags": [
      "food"
    ],
    "cuisine": "Singapore chili crab",
    "description": "A classic seafood dinner when the trip wants one unmistakably local table and doesn't mind leaning into the city's best-known dish.",
    "reservation": ""
  },
  {
    "name": "Killiney Kopitiam",
    "area": "orchard",
    "tags": [
      "cafes",
      "food",
      "value"
    ],
    "cuisine": "Kaya toast breakfast",
      "description": "A quick local breakfast anchor when the day needs to start early without losing character.",
    "reservation": ""
  },
  {
    "name": "MacRitchie TreeTop Walk approach",
    "area": "orchard",
    "tags": [
      "nature",
      "wellness"
    ],
    "description": "A greener half-day move if the trip wants one stronger nature reset beyond the ultra-polished city core."
  },
  {
    "name": "Katong shophouse and laksa loop",
    "area": "kampong-glam",
    "tags": [
      "food",
      "culture",
      "walkability"
    ],
    "description": "A more residential food-and-architecture route that adds Peranakan texture beyond the central core."
  },
  {
    "name": "Hill Street Tai Hwa Pork Noodle",
    "area": "chinatown",
    "tags": [
      "food",
      "value"
    ],
    "cuisine": "Bak chor mee",
    "description": "A stronger local hawker add if the trip wants one more truly specific noodle stop.",
    "reservation": ""
  },
  {
    "name": "Atlas afternoon tea or cocktails",
    "area": "kampong-glam",
    "tags": [
      "cafes",
      "luxury"
    ],
    "cuisine": "Tea and cocktails",
    "description": "A dressed-up pause if the trip wants one glamorous room without turning the whole night overly formal.",
    "reservation": ""
  },
  {
    "name": "Singapore Art Museum at Tanjong Pagar Distripark",
    "area": "chinatown",
    "tags": [
      "design",
      "museum"
    ],
    "description": "A stronger contemporary-art stop if the trip wants one more current cultural layer."
  },
  {
    "name": "Chin Mee Chin Confectionery",
    "area": "kampong-glam",
    "tags": [
      "cafes",
      "food",
      "culture"
    ],
    "cuisine": "Kaya toast and kopi",
      "description": "A heritage-leaning breakfast if the day starts on the east side of the core.",
    "reservation": ""
  }
];

export default { guide: singaporeGuide, supplements: singaporeSupplements };
