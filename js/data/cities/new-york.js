// Standalone new-york city data

export const newYorkGuide = {
  "label": "New York",
  "country": "United States",
  "currency": "Subway and walking cover most needs, but crossing boroughs too often makes the day feel more logistical than fun.",
  "transferNote": "Keep Manhattan days neighborhood-clustered, and only cross the river when the destination is really worth making the point of the day.",
  "areaAdjacency": {
    "soho": [
      "west-village",
      "lower-east-side"
    ],
    "west-village": [
      "midtown",
      "soho"
    ],
    "midtown": [
      "lower-east-side",
      "west-village"
    ],
    "lower-east-side": [
      "soho",
      "midtown"
    ]
  },
  "hotelAreas": {
    "soho": {
      "label": "SoHo / NoHo",
      "mood": "stylish and walkable",
      "strengths": [
        "shopping",
        "food",
        "design"
      ]
    },
    "west-village": {
      "label": "West Village",
      "mood": "classic and restaurant-led",
      "strengths": [
        "food",
        "walkability",
        "nightlife"
      ]
    },
    "midtown": {
      "label": "Midtown",
      "mood": "efficient and central",
      "strengths": [
        "transit",
        "shopping",
        "culture"
      ]
    },
    "lower-east-side": {
      "label": "Lower East Side",
      "mood": "lively and current",
      "strengths": [
        "nightlife",
        "food",
        "design"
      ]
    }
  },
  "hotels": {
    "luxury": [
      {
        "name": "The Greenwich Hotel",
        "area": "west-village",
        "vibe": "A downtown luxury stay with real neighborhood feeling, where Tribeca calm softens the city without disconnecting from it.",
        "bestFor": [
          "luxury",
          "food",
          "design"
        ]
      },
      {
        "name": "The Mercer",
        "area": "soho",
        "vibe": "A classic SoHo luxury base if style and shopping matter most.",
        "bestFor": [
          "luxury",
          "shopping",
          "design"
        ]
      },
      {
        "name": "The Whitby Hotel",
        "area": "midtown",
        "vibe": "A brighter Midtown splurge for first-trip convenience with much more personality than the usual central luxury tower.",
        "bestFor": [
          "luxury",
          "culture",
          "shopping"
        ]
      }
    ],
    "premium": [
      {
        "name": "The Ludlow",
        "area": "lower-east-side",
        "vibe": "A sharp downtown stay for nightlife and current restaurant energy.",
        "bestFor": [
          "nightlife",
          "food",
          "design"
        ]
      },
      {
        "name": "The Bowery Hotel",
        "area": "lower-east-side",
        "vibe": "Atmospheric and social with stronger late-night leverage.",
        "bestFor": [
          "nightlife",
          "food",
          "design"
        ]
      },
      {
        "name": "Walker Hotel Greenwich Village",
        "area": "west-village",
        "vibe": "A Village base for travelers who care more about classic Manhattan mood than oversized rooms.",
        "bestFor": [
          "food",
          "walkability",
          "culture"
        ]
      },
      {
        "name": "Nine Orchard",
        "area": "lower-east-side",
        "vibe": "A richer downtown base if the trip wants a more elevated current Lower East Side stay.",
        "bestFor": [
          "luxury",
          "food",
          "design"
        ]
      }
    ],
    "smart": [
      {
        "name": "citizenM Bowery",
        "area": "lower-east-side",
        "vibe": "A value pick that still keeps you in a lively downtown zone with easy Lower East Side access.",
        "bestFor": [
          "value",
          "nightlife",
          "food"
        ]
      },
      {
        "name": "Arlo SoHo",
        "area": "soho",
        "vibe": "A smaller-footprint SoHo base for shopping and downtown access.",
        "bestFor": [
          "shopping",
          "value",
          "food"
        ]
      },
      {
        "name": "Pod Times Square",
        "area": "midtown",
        "vibe": "A lower-friction central option if transit and Broadway matter more than atmosphere.",
        "bestFor": [
          "transit",
          "value",
          "culture"
        ]
      },
      {
        "name": "The Marlton Hotel",
        "area": "west-village",
        "vibe": "A smarter-value Village option if classic downtown mood matters more than room size.",
        "bestFor": [
          "culture",
          "food",
          "value"
        ]
      }
    ]
  },
  "cantMiss": [
    {
      "name": "Central Park edge and museum axis",
      "area": "midtown",
      "tags": [
        "culture",
        "nature"
      ],
      "description": "Still one of the strongest New York anchors even if done selectively."
    },
    {
      "name": "West Village and Washington Square route",
      "area": "west-village",
      "tags": [
        "walkability",
        "culture"
      ],
      "description": "A classic downtown route of brownstones, side streets, and Washington Square energy that still deserves protected time."
    },
    {
      "name": "Brooklyn Bridge walk",
      "area": "soho",
      "tags": [
        "walkability",
        "design"
      ],
      "description": "A strong skyline-and-city-layout move best done early or near sunset."
    },
    {
      "name": "SoHo cast-iron streets",
      "area": "soho",
      "tags": [
        "design",
        "shopping"
      ],
      "description": "A browse-heavy district anchor of cast-iron facades, designer retail, and side-street coffee stops."
    },
    {
      "name": "Lower East Side tenement and street grid",
      "area": "lower-east-side",
      "tags": [
        "culture"
      ],
      "description": "A stronger historic-and-current New York pairing than a generic Midtown block."
    },
    {
      "name": "Bryant Park and New York Public Library axis",
      "area": "midtown",
      "tags": [
        "culture",
        "walkability"
      ],
      "description": "A useful central-city route if the day wants a less tourist-heavy Midtown anchor."
    },
    {
      "name": "DUMBO skyline and bridge-front blocks",
      "area": "soho",
      "tags": [
        "design",
        "walkability"
      ],
      "description": "A stronger Brooklyn-side visual route when the plan intentionally crosses the river."
    }
  ],
  "activities": [
    {
      "name": "MoMA or nearby gallery block",
      "area": "midtown",
      "tags": [
        "museum",
        "design"
      ],
      "description": "A serious art anchor if the trip wants one museum stop with real cultural weight."
    },
    {
      "name": "Chelsea Market and High Line stretch",
      "area": "west-village",
      "tags": [
        "food",
        "walkability"
      ],
      "description": "A reliable midday sequence that still works for first-timers."
    },
    {
      "name": "Lower East Side wine-bar evening",
      "area": "lower-east-side",
      "tags": [
        "nightlife",
        "food"
      ],
      "description": "An easy downtown night if the trip wants real energy."
    },
    {
      "name": "Fifth Avenue and Rockefeller circuit",
      "area": "midtown",
      "tags": [
        "shopping",
        "culture"
      ],
      "description": "A central day block when first-trip landmarks still matter."
    },
    {
      "name": "East Village café and bookstore drift",
      "area": "lower-east-side",
      "tags": [
        "cafes",
        "walkability"
      ],
      "description": "A strong lighter afternoon if the plan needs texture more than headlines."
    },
    {
      "name": "Williamsburg night crossing",
      "area": "soho",
      "tags": [
        "nightlife",
        "food",
        "design"
      ],
      "description": "A stronger Brooklyn evening if the trip wants one more current-feeling night away from Manhattan."
    },
    {
      "name": "West Village jazz-and-cocktail finish",
      "area": "west-village",
      "tags": [
        "nightlife",
        "culture"
      ],
      "description": "A lower-pressure polished night if the trip wants atmosphere over spectacle."
    }
  ],
  "food": [
    {
      "name": "Via Carota",
      "area": "west-village",
      "tags": [
        "food"
      ],
      "cuisine": "Italian",
      "description": "A polished downtown classic that still earns a place if you can get in.",
      "reservation": ""
    },
    {
      "name": "Katz's Delicatessen",
      "area": "lower-east-side",
      "tags": [
        "food"
      ],
      "cuisine": "Jewish deli",
      "description": "A classic New York stop worth doing once, especially in a downtown day.",
      "reservation": ""
    },
    {
      "name": "The Four Horsemen",
      "area": "lower-east-side",
      "tags": [
        "food",
        "nightlife"
      ],
      "cuisine": "Wine bar and plates",
      "description": "A smarter evening if the trip wants current dining energy.",
      "reservation": ""
    },
    {
      "name": "Le Bernardin",
      "area": "midtown",
      "tags": [
        "food",
        "luxury"
      ],
      "cuisine": "Seafood",
      "description": "A full splurge dinner if the trip wants one major New York reservation.",
      "reservation": "Reserve ahead."
    },
    {
      "name": "Balthazar",
      "area": "soho",
      "tags": [
        "food"
      ],
      "cuisine": "French brasserie",
      "description": "Still useful if the day is already in SoHo and the trip wants a classic room.",
      "reservation": ""
    },
    {
      "name": "Caffe Reggio",
      "area": "west-village",
      "tags": [
        "cafes",
        "culture"
      ],
      "cuisine": "Historic café",
      "description": "A classic coffee stop with more actual downtown feeling than a generic chain.",
      "reservation": ""
    },
    {
      "name": "Russ & Daughters Cafe",
      "area": "lower-east-side",
      "tags": [
        "food"
      ],
      "cuisine": "Appetizing and brunch",
      "description": "A strong New York breakfast or lunch anchor.",
      "reservation": ""
    },
    {
      "name": "L'Artusi",
      "area": "west-village",
      "tags": [
        "food"
      ],
      "cuisine": "Italian",
      "description": "A stronger West Village dinner if the trip wants one more dependable downtown table.",
      "reservation": ""
    },
    {
      "name": "Superiority Burger",
      "area": "lower-east-side",
      "tags": [
        "food",
        "value"
      ],
      "cuisine": "Vegetarian comfort food",
      "description": "A useful lower-pressure downtown meal if the trip wants more range than steaks and deli classics.",
      "reservation": ""
    }
  ]
};

export const newYorkSupplements = [
  {
    "name": "The Met steps and Upper East Side edge",
    "area": "midtown",
    "tags": [
      "culture",
      "museum"
    ],
    "description": "A strong classic-city move if the trip wants one uptown culture block."
  },
  {
    "name": "DUMBO waterfront and skyline route",
    "area": "soho",
    "tags": [
      "design",
      "walkability"
    ],
    "description": "A worthwhile river-crossing move when the day intentionally points toward Brooklyn."
  },
  {
    "name": "Broadway or jazz-club night",
    "area": "midtown",
    "tags": [
      "nightlife",
      "culture"
    ],
    "description": "A useful bigger-evening anchor when the trip wants one classic New York night."
  },
  {
    "name": "Don Angie",
    "area": "west-village",
    "tags": [
      "food"
    ],
    "cuisine": "Italian-American",
    "description": "A stronger Village dinner if the trip wants one more polished downtown reservation room.",
    "reservation": ""
  },
  {
    "name": "Los Tacos No. 1",
    "area": "soho",
    "tags": [
      "food",
      "value"
    ],
    "cuisine": "Tacos",
    "description": "A lower-friction stop that still feels very New York in how useful it is.",
    "reservation": ""
  },
  {
    "name": "Crown Shy",
    "area": "midtown",
    "tags": [
      "food"
    ],
    "cuisine": "Contemporary American",
    "description": "A strong polished dinner if the day is running more central or financial-district adjacent.",
    "reservation": "",
    "michelinStatus": "One Star",
    "guideNote": "Michelin praises the soaring Art Deco room and the kitchen's approachable but precise modern American style.",
    "guideUrl": "https://guide.michelin.com/tr/tr/new-york-state/new-york/restaurant/crown-shy"
  },
  {
    "name": "The Cloisters or upper-Hudson detour",
    "area": "midtown",
    "tags": [
      "culture",
      "nature"
    ],
    "description": "A bigger northbound move if the trip wants one more unusual and atmospheric museum setting."
  },
  {
    "name": "Williamsburg dinner-and-walk night",
    "area": "soho",
    "tags": [
      "nightlife",
      "food",
      "design"
    ],
    "description": "A stronger Brooklyn evening if the trip wants one more current-feeling night out."
  },
  {
    "name": "Cervo's",
    "area": "lower-east-side",
    "tags": [
      "food",
      "nightlife"
    ],
    "cuisine": "Seafood and Iberian small plates",
    "description": "A smart Lower East Side dinner if the night wants something lively but not too formal.",
    "reservation": ""
  },
  {
    "name": "Russ & Daughters Appetizers counter stop",
    "area": "lower-east-side",
    "tags": [
      "food",
      "cafes"
    ],
    "cuisine": "Appetizing and smoked fish",
    "description": "A good quick local add-on when the day is already downtown.",
    "reservation": ""
  },
  {
    "name": "Upper West Side bookstore-and-brownstone drift",
    "area": "midtown",
    "tags": [
      "walkability",
      "culture"
    ],
    "description": "A softer Manhattan add-on if the trip wants one more residential city rhythm."
  },
  {
    "name": "Lucali-style Brooklyn pizza night",
    "area": "soho",
    "tags": [
      "food",
      "nightlife"
    ],
    "cuisine": "Pizza",
    "description": "A stronger cross-river evening if the trip intentionally heads into Brooklyn for dinner.",
    "reservation": ""
  },
  {
    "name": "Lower Manhattan harbor-front walk",
    "area": "midtown",
    "tags": [
      "walkability",
      "design"
    ],
    "description": "A useful downtown add-on if the trip wants one more skyline-and-water edge without turning into a full ferry excursion."
  },
  {
    "name": "Raoul's",
    "area": "soho",
    "tags": [
      "food"
    ],
    "cuisine": "French downtown classic",
    "description": "A strong SoHo dinner if the trip wants one more old-school New York room.",
    "reservation": ""
  }
];

export default { guide: newYorkGuide, supplements: newYorkSupplements };
