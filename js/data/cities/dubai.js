// Standalone dubai city data

export const dubaiGuide = {
  "label": "Dubai",
  "country": "United Arab Emirates",
  "currency": "Taxis and Metro are easiest, but each day should stay zone-led because moving between districts takes longer than it looks.",
  "transferNote": "Heat, distance, and mall-scale walking all add up here, so each day needs one clear center of gravity.",
  "areaAdjacency": {
    "downtown": [
      "jumeirah",
      "marina"
    ],
    "jumeirah": [
      "old-dubai",
      "downtown"
    ],
    "old-dubai": [
      "marina",
      "jumeirah"
    ],
    "marina": [
      "downtown",
      "old-dubai"
    ]
  },
  "hotelAreas": {
    "downtown": {
      "label": "Downtown Dubai",
      "mood": "polished and spectacle-driven",
      "strengths": [
        "luxury",
        "shopping",
        "design"
      ]
    },
    "jumeirah": {
      "label": "Jumeirah",
      "mood": "coastal and upscale",
      "strengths": [
        "nature",
        "luxury",
        "food"
      ]
    },
    "old-dubai": {
      "label": "Old Dubai",
      "mood": "historic and more textured",
      "strengths": [
        "culture",
        "food",
        "walkability"
      ]
    },
    "marina": {
      "label": "Dubai Marina",
      "mood": "vertical and nightlife-led",
      "strengths": [
        "nightlife",
        "shopping",
        "food"
      ]
    }
  },
  "hotels": {
    "luxury": [
      {
        "name": "Burj Al Arab Jumeirah",
        "area": "jumeirah",
        "vibe": "A full fantasy splurge if the trip wants Dubai at maximum spectacle.",
        "bestFor": [
          "luxury",
          "design",
          "food"
        ]
      },
      {
        "name": "Address Downtown",
        "area": "downtown",
        "vibe": "A Downtown luxury base with mall and fountain leverage.",
        "bestFor": [
          "luxury",
          "shopping",
          "food"
        ]
      },
      {
        "name": "One&Only Royal Mirage",
        "area": "jumeirah",
        "vibe": "A calmer resort-leaning luxury stay if beach and slower pacing matter most.",
        "bestFor": [
          "luxury",
          "nature",
          "wellness"
        ]
      }
    ],
    "premium": [
      {
        "name": "Vida Downtown",
        "area": "downtown",
        "vibe": "A cleaner-lined premium base for a more current version of central Dubai.",
        "bestFor": [
          "design",
          "food",
          "shopping"
        ]
      },
      {
        "name": "25hours Hotel One Central",
        "area": "downtown",
        "vibe": "A playful premium option with more personality than the average Dubai tower stay.",
        "bestFor": [
          "design",
          "nightlife",
          "food"
        ]
      },
      {
        "name": "The First Collection Marina",
        "area": "marina",
        "vibe": "A value-conscious premium pick if evenings and waterfront towers are the point.",
        "bestFor": [
          "nightlife",
          "food",
          "value"
        ]
      },
      {
        "name": "Jumeirah Al Naseem",
        "area": "jumeirah",
        "vibe": "A beachfront base if the trip should feel softer, sunnier, and more resort-like than Downtown.",
        "bestFor": [
          "luxury",
          "nature",
          "food"
        ]
      }
    ],
    "smart": [
      {
        "name": "Rove Downtown",
        "area": "downtown",
        "vibe": "A Downtown stay with easier pricing and clean first-trip convenience.",
        "bestFor": [
          "shopping",
          "transit",
          "value"
        ]
      },
      {
        "name": "XVA Art Hotel",
        "area": "old-dubai",
        "vibe": "A more character-rich old-quarter option if texture matters more than towers.",
        "bestFor": [
          "culture",
          "design",
          "value"
        ]
      },
      {
        "name": "Rove La Mer Beach",
        "area": "jumeirah",
        "vibe": "A better-value coastal base if beach time should feel easy to reach and easy to repeat.",
        "bestFor": [
          "nature",
          "food",
          "value"
        ]
      },
      {
        "name": "Zabeel House The Greens",
        "area": "marina",
        "vibe": "A smart-spend pick if the trip wants modern Dubai access without full-resort pricing.",
        "bestFor": [
          "food",
          "value",
          "design"
        ]
      }
    ]
  },
  "cantMiss": [
    {
      "name": "Burj Khalifa and Dubai Fountain axis",
      "area": "downtown",
      "tags": [
        "design",
        "shopping"
      ],
      "description": "Still the city's clearest spectacle anchor, especially if the trip wants one full-strength Dubai set piece."
    },
    {
      "name": "Dubai Creek and Al Fahidi",
      "area": "old-dubai",
      "tags": [
        "culture",
        "walkability"
      ],
      "description": "The most convincing corrective to the idea that Dubai is only towers, malls, and pure newness."
    },
    {
      "name": "Jumeirah Beach and Burj Al Arab line",
      "area": "jumeirah",
      "tags": [
        "nature",
        "design"
      ],
      "description": "A scenic coastal route that brings air, light, and a more relaxed version of the city into the plan."
    },
    {
      "name": "Dubai Marina promenade",
      "area": "marina",
      "tags": [
        "nightlife",
        "walkability"
      ],
      "description": "Best treated as an evening waterfront district, where the towers and light feel more alive than they do in flat midday sun."
    },
    {
      "name": "Museum of the Future exterior and district",
      "area": "downtown",
      "tags": [
        "design"
      ],
      "description": "A major visual anchor even if you do not build a whole day around it."
    },
    {
      "name": "Dubai Opera and Burj Park line",
      "area": "downtown",
      "tags": [
        "design",
        "walkability"
      ],
      "description": "A cleaner Downtown route if the day wants more urban polish than pure mall time."
    },
    {
      "name": "Jumeirah Mosque area at golden hour",
      "area": "jumeirah",
      "tags": [
        "culture",
        "design"
      ],
      "description": "A softer cityscape stop on a more coastal or heritage-leaning day."
    }
  ],
  "activities": [
    {
      "name": "Dubai Mall browse and aquarium option",
      "area": "downtown",
      "tags": [
        "shopping",
        "food"
      ],
      "description": "A spectacle-driven block that works when the trip is leaning fully into the classic, maximal side of Dubai."
    },
    {
      "name": "Al Seef and spice-souk drift",
      "area": "old-dubai",
      "tags": [
        "culture",
        "shopping"
      ],
      "description": "A better old-city add-on than another mall-heavy afternoon, especially if the plan needs more texture and contrast."
    },
    {
      "name": "Beach club afternoon",
      "area": "jumeirah",
      "tags": [
        "nature",
        "nightlife"
      ],
      "description": "A slower luxury afternoon if the trip needs breathing room and a more sun-led version of Dubai."
    },
    {
      "name": "Marina rooftop drinks",
      "area": "marina",
      "tags": [
        "nightlife"
      ],
      "description": "An easy night move if the evening should feel high-energy without too much planning overhead."
    },
    {
      "name": "Desert dinner excursion",
      "area": "jumeirah",
      "tags": [
        "nature",
        "culture"
      ],
      "description": "A bigger add-on if the trip wants one Dubai-only set piece."
    },
    {
      "name": "Kite Beach walk and café stop",
      "area": "jumeirah",
      "tags": [
        "nature",
        "cafes",
        "walkability"
      ],
      "description": "A daylight reset if the trip should feel less indoor and more coastal."
    },
    {
      "name": "Old Dubai museum-and-merchant-house block",
      "area": "old-dubai",
      "tags": [
        "culture",
        "design"
      ],
      "description": "A historic-side sequence if the plan wants more texture than the souks alone can provide."
    }
  ],
  "food": [
    {
      "name": "Trèsind Studio",
      "area": "downtown",
      "tags": [
        "food",
        "luxury"
      ],
      "cuisine": "Contemporary Indian",
      "description": "A major splurge dinner if the trip wants one destination meal.",
      "reservation": "Reserve ahead."
    },
    {
      "name": "Orfali Bros",
      "area": "jumeirah",
      "tags": [
        "food"
      ],
      "cuisine": "Current Middle Eastern",
      "description": "A sharper modern Dubai dinner than a generic hotel room, with real personality and city-wide draw.",
      "reservation": ""
    },
    {
      "name": "Al Ustad Special Kabab",
      "area": "old-dubai",
      "tags": [
        "food",
        "value"
      ],
      "cuisine": "Persian kebabs",
      "description": "A classic older-Dubai lunch or dinner with real city texture.",
      "reservation": ""
    },
    {
      "name": "Arabian Tea House",
      "area": "old-dubai",
      "tags": [
        "cafes",
        "food"
      ],
      "cuisine": "Emirati café",
      "description": "A heritage-core breakfast or lunch anchor.",
      "reservation": ""
    },
    {
      "name": "3 Fils",
      "area": "jumeirah",
      "tags": [
        "food"
      ],
      "cuisine": "Seafood and Asian-influenced small plates",
    "description": "A waterside dinner if the west side is already the point.",
      "reservation": ""
    },
    {
      "name": "CÉ LA VI",
      "area": "downtown",
      "tags": [
        "food",
        "nightlife",
        "luxury"
      ],
      "cuisine": "Rooftop dinner and cocktails",
      "description": "A skyline dinner for a classic Dubai night when you want the full height-and-light effect.",
      "reservation": ""
    },
    {
      "name": "Time Out Market Dubai",
      "area": "downtown",
      "tags": [
        "food"
      ],
      "cuisine": "Food hall",
      "description": "A flexible downtown meal option without overcommitting the night.",
      "reservation": ""
    },
    {
      "name": "Aseelah",
      "area": "old-dubai",
      "tags": [
        "food",
        "culture"
      ],
      "cuisine": "Emirati and regional cuisine",
    "description": "An old-Dubai dinner if the trip wants one more rooted local meal.",
      "reservation": ""
    },
    {
      "name": "Lana Lusa",
      "area": "jumeirah",
      "tags": [
        "cafes",
        "food"
      ],
      "cuisine": "Beach-club breakfast and lunch",
      "description": "A daytime stop if the Jumeirah side should feel relaxed, bright, and a little more resort-like.",
      "reservation": ""
    }
  ]
};

export const dubaiSupplements = [
  {
    "name": "Alserkal Avenue",
    "area": "jumeirah",
    "tags": [
      "design",
      "culture"
    ],
    "description": "A stronger current-art-and-design anchor if the trip wants a more creative side of Dubai."
  },
  {
    "name": "Jumeirah Mosque and coastal district route",
    "area": "jumeirah",
    "tags": [
      "culture",
      "walkability"
    ],
    "description": "A heritage-meets-coast sequence for a lighter daytime block."
  },
  {
    "name": "Abra ride and creek crossing",
    "area": "old-dubai",
    "tags": [
      "culture",
      "walkability"
    ],
    "description": "A small but specific move that makes the old-city side feel much more textured."
  },
  {
    "name": "Ninive",
    "area": "downtown",
    "tags": [
      "food",
      "nightlife"
    ],
    "cuisine": "Middle Eastern garden dining",
    "description": "An evening for nights that should feel more atmospheric than mall-adjacent.",
    "reservation": ""
  },
  {
    "name": "Al Fanar",
    "area": "old-dubai",
    "tags": [
      "food",
      "culture"
    ],
    "cuisine": "Emirati",
    "description": "A local-leaning meal if the trip wants something more rooted in place.",
    "reservation": ""
  },
  {
    "name": "Moonrise",
    "area": "jumeirah",
    "tags": [
      "food",
      "luxury"
    ],
    "cuisine": "Chef's counter tasting menu",
    "description": "A more niche Dubai splurge if the trip wants something harder to replicate elsewhere.",
    "reservation": "Reserve ahead."
  },
  {
    "name": "Dubai Frame park-side stop",
    "area": "downtown",
    "tags": [
      "design",
      "culture"
    ],
    "description": "A visual anchor if the trip wants one more clean skyline-and-old-city contrast."
  },
  {
    "name": "Madinat Jumeirah evening stroll",
    "area": "jumeirah",
    "tags": [
      "walkability",
      "food",
      "nightlife"
    ],
    "description": "A night option with easier dinner follow-through than some of the city's bigger spectacle zones."
  },
  {
    "name": "Trèsind Dubai",
    "area": "downtown",
    "tags": [
      "food",
      "luxury"
    ],
    "cuisine": "Modern Indian",
    "description": "A strong alternative splurge if the trip wants one more serious destination table.",
    "reservation": "Reserve ahead."
  },
  {
    "name": "Logma",
    "area": "downtown",
    "tags": [
      "food",
      "culture"
    ],
    "cuisine": "Khaleeji comfort food",
    "description": "A local-leaning lunch or dinner that keeps the city feeling specific.",
    "reservation": ""
  },
  {
    "name": "Museum of the Future exterior-and-visit option",
    "area": "downtown",
    "tags": [
      "design",
      "culture"
    ],
    "description": "A strong contemporary icon if the trip wants one more sharply futuristic Dubai stop."
  },
  {
    "name": "Bu Qtair",
    "area": "jumeirah",
    "tags": [
      "food",
      "value"
    ],
    "cuisine": "Casual seafood",
    "description": "A local-feeling seafood meal if the Jumeirah side of the day stays relaxed.",
    "reservation": ""
  }
];

export default { guide: dubaiGuide, supplements: dubaiSupplements };
