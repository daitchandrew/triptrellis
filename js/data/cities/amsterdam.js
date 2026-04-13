// Standalone amsterdam city data

export const amsterdamGuide = {
  "label": "Amsterdam",
  "country": "Netherlands",
  "currency": "Walk, tram, and bike cover most needs, but museum timing matters more than distance on busier days.",
  "transferNote": "Museum districts and canal belts are easy to combine, but jumping across the city too often flattens the day.",
  "areaAdjacency": {
    "canal-belt": [
      "jordaan",
      "de-pijp"
    ],
    "jordaan": [
      "museumplein",
      "canal-belt"
    ],
    "museumplein": [
      "de-pijp",
      "jordaan"
    ],
    "de-pijp": [
      "canal-belt",
      "museumplein"
    ]
  },
  "hotelAreas": {
    "canal-belt": {
      "label": "Canal Belt",
      "mood": "canal-side and composed",
      "strengths": [
        "walkability",
        "culture",
        "food"
      ]
    },
    "jordaan": {
      "label": "Jordaan",
      "mood": "local and slower",
      "strengths": [
        "food",
        "walkability",
        "cafes"
      ]
    },
    "museumplein": {
      "label": "Museumplein",
      "mood": "art-led and elegant",
      "strengths": [
        "museum",
        "luxury",
        "culture"
      ]
    },
    "de-pijp": {
      "label": "De Pijp",
      "mood": "lively and food-forward",
      "strengths": [
        "food",
        "nightlife",
        "design"
      ]
    }
  },
  "hotels": {
    "luxury": [
      {
        "name": "Waldorf Astoria Amsterdam",
        "area": "canal-belt",
        "vibe": "A major canal-house splurge with quiet polish and serious service.",
        "bestFor": [
          "luxury",
          "culture",
          "food"
        ]
      },
      {
        "name": "Conservatorium Hotel",
        "area": "museumplein",
        "vibe": "The strongest luxury base if museums and design matter most.",
        "bestFor": [
          "luxury",
          "design",
          "museum"
        ]
      },
      {
        "name": "Pulitzer Amsterdam",
        "area": "jordaan",
        "vibe": "A romantic canal-house luxury stay with deeper neighborhood character than the grander chain options.",
        "bestFor": [
          "luxury",
          "walkability",
          "food"
        ]
      }
    ],
    "premium": [
      {
        "name": "The Hoxton Amsterdam",
        "area": "canal-belt",
        "vibe": "A current-feeling canal-belt base that keeps bars, cafés, and easy evening movement within a short walk.",
        "bestFor": [
          "design",
          "nightlife",
          "food"
        ]
      },
      {
        "name": "Hotel De Hallen",
        "area": "de-pijp",
        "vibe": "A sharper premium pick for a more local-feeling Amsterdam stay.",
        "bestFor": [
          "design",
          "food",
          "nightlife"
        ]
      },
      {
        "name": "Morgan & Mees",
        "area": "jordaan",
        "vibe": "A boutique Jordaan base for slower canal-side days.",
        "bestFor": [
          "food",
          "walkability",
          "design"
        ]
      },
      {
        "name": "Pillows Maurits at the Park",
        "area": "museumplein",
        "vibe": "A park-edge premium stay for museum-heavy trips that want quieter elegance than the canal core.",
        "bestFor": [
          "luxury",
          "museum",
          "food"
        ]
      }
    ],
    "smart": [
      {
        "name": "Volkshotel",
        "area": "de-pijp",
        "vibe": "A social value stay if the trip leans younger and more nightlife-heavy.",
        "bestFor": [
          "nightlife",
          "design",
          "value"
        ]
      },
      {
        "name": "Hotel Estheréa",
        "area": "canal-belt",
        "vibe": "A charming canal-house stay with especially easy first-trip logic and a softer classic Amsterdam mood.",
        "bestFor": [
          "culture",
          "walkability",
          "value"
        ]
      },
      {
        "name": "Conscious Hotel Museum Square",
        "area": "museumplein",
        "vibe": "A museum-district base when art and parks matter most.",
        "bestFor": [
          "museum",
          "value",
          "walkability"
        ]
      },
      {
        "name": "Hotel Not Hotel",
        "area": "de-pijp",
        "vibe": "A more personality-driven smart-spend option if the trip wants something playful and local-feeling.",
        "bestFor": [
          "design",
          "nightlife",
          "value"
        ]
      }
    ]
  },
  "cantMiss": [
    {
      "name": "Rijksmuseum",
      "area": "museumplein",
      "tags": [
        "museum",
        "culture"
      ],
      "description": "The city's defining art anchor, and still the museum that most rewards protecting real time for."
    },
    {
      "name": "Nine Streets canal walk",
      "area": "canal-belt",
      "tags": [
        "walkability",
        "shopping"
      ],
      "description": "The classic Amsterdam browse route, where smaller bridges, shopfronts, and canal turns make wandering feel especially rewarding."
    },
    {
      "name": "Anne Frank House area",
      "area": "jordaan",
      "tags": [
        "culture"
      ],
      "description": "An essential historic pocket, with the surrounding Jordaan canals and lanes adding the right gravity to the visit."
    },
    {
      "name": "Vondelpark edge",
      "area": "museumplein",
      "tags": [
        "nature",
        "wellness"
      ],
      "description": "A greener reset that gives the museum district air, openness, and a little more breathing room."
    },
    {
      "name": "Albert Cuyp Market",
      "area": "de-pijp",
      "tags": [
        "food",
        "walkability"
      ],
      "description": "A better food-and-neighborhood move than another souvenir-heavy pass through the center."
    },
    {
      "name": "Museumplein lawn and architecture line",
      "area": "museumplein",
      "tags": [
        "design",
        "walkability"
      ],
      "description": "A spatial anchor that makes the museum district feel more intentional and legible."
    },
    {
      "name": "Magere Brug and Amstel evening line",
      "area": "canal-belt",
      "tags": [
        "walkability",
        "design"
      ],
      "description": "A twilight canal route for days that want one softer classic-city finish."
    }
  ],
  "activities": [
    {
      "name": "Van Gogh Museum",
      "area": "museumplein",
      "tags": [
        "museum",
        "culture"
      ],
      "description": "The strongest second museum anchor if the day is leaning fully into Amsterdam's art-and-design side."
    },
    {
      "name": "Canal cruise at dusk",
      "area": "canal-belt",
      "tags": [
        "culture",
        "nightlife"
      ],
      "description": "One of the easiest evening wins in the city, especially when the light starts catching the bridges and canal houses."
    },
    {
      "name": "Jordaan café and indie-shop drift",
      "area": "jordaan",
      "tags": [
        "cafes",
        "shopping"
      ],
      "description": "A slower neighborhood block where small cafés, storefronts, and canal corners do most of the work."
    },
    {
      "name": "De Pijp wine-bar evening",
      "area": "de-pijp",
      "tags": [
        "food",
        "nightlife"
      ],
      "description": "An easy, social night option outside the most obvious center."
    },
    {
      "name": "NDSM or Noord ferry add-on",
      "area": "de-pijp",
      "tags": [
        "design",
        "nightlife"
      ],
      "description": "A more current-feeling detour if the trip wants industrial creativity and a different angle on the city."
    },
    {
      "name": "Canal-belt brown-café circuit",
      "area": "canal-belt",
      "tags": [
        "nightlife",
        "food"
      ],
      "description": "A lower-pressure evening if the trip wants cozy neighborhood atmosphere."
    },
    {
      "name": "Museum district coffee-and-bookshop pause",
      "area": "museumplein",
      "tags": [
        "cafes",
        "walkability"
      ],
      "description": "A softer museum-side add-on that keeps the day from feeling too strictly checklist-driven."
    }
  ],
  "food": [
    {
      "name": "De Kas",
      "area": "de-pijp",
      "tags": [
        "food",
        "luxury"
      ],
      "cuisine": "Farm-to-table tasting menu",
      "description": "A destination dinner with glasshouse drama and a calmer, greener edge than most city splurges.",
      "reservation": "Reserve ahead."
    },
    {
      "name": "Café Winkel 43",
      "area": "jordaan",
      "tags": [
        "cafes",
        "food"
      ],
      "cuisine": "Dutch apple pie",
      "description": "A classic sweet stop if you're already in Jordaan.",
      "reservation": ""
    },
    {
      "name": "Breda",
      "area": "canal-belt",
      "tags": [
        "food"
      ],
      "cuisine": "Modern Dutch",
      "description": "A canal-belt dinner that feels grounded in the city rather than formal for its own sake.",
      "reservation": ""
    },
    {
      "name": "Foodhallen",
      "area": "de-pijp",
      "tags": [
        "food",
        "nightlife"
      ],
      "cuisine": "Food hall",
      "description": "A flexible social evening when the group wants range, energy, and less commitment than one sit-down dinner.",
      "reservation": ""
    },
    {
      "name": "Van Kerkwijk",
      "area": "canal-belt",
      "tags": [
        "food"
      ],
      "cuisine": "Dutch-European comfort food",
      "description": "A neighborhood meal with far more point of view than the generic tourist menus nearby.",
      "reservation": ""
    },
    {
      "name": "Pata Negra",
      "area": "jordaan",
      "tags": [
        "food",
        "nightlife"
      ],
      "cuisine": "Tapas and wine",
      "description": "A sociable evening stop if the trip leans casual and candlelit rather than dressy.",
      "reservation": ""
    },
    {
      "name": "Bakers & Roasters",
      "area": "de-pijp",
      "tags": [
        "cafes",
        "food"
      ],
      "cuisine": "Brunch",
      "description": "A midday anchor when the day needs an easy reset.",
      "reservation": ""
    },
    {
      "name": "Café Restaurant Amsterdam",
      "area": "canal-belt",
      "tags": [
        "food"
      ],
      "cuisine": "Dutch-European brasserie",
      "description": "A handsome larger-room dinner when the trip wants one more Amsterdam meal with real room presence.",
      "reservation": ""
    },
    {
      "name": "Dignita Vondelpark",
      "area": "museumplein",
      "tags": [
        "cafes",
        "food"
      ],
      "cuisine": "Breakfast and brunch",
      "description": "A museum-district breakfast if the day starts on the park side.",
      "reservation": ""
    }
  ]
};

export const amsterdamSupplements = [
  {
    "name": "Begijnhof courtyard",
    "area": "canal-belt",
    "tags": [
      "culture",
      "walkability"
    ],
    "description": "A quieter central stop that adds a more tucked-away historical layer."
  },
  {
    "name": "Rembrandt House Museum",
    "area": "canal-belt",
    "tags": [
      "museum",
      "culture"
    ],
    "description": "A smaller museum option when the day is already canal-belt centered."
  },
  {
    "name": "Oud-West café and design browse",
    "area": "jordaan",
    "tags": [
      "cafes",
      "design"
    ],
    "description": "A softer neighborhood add-on if the trip wants less museum density."
  },
  {
    "name": "Moeders",
    "area": "jordaan",
    "tags": [
      "food"
    ],
    "cuisine": "Dutch comfort food",
    "description": "A classic meal if the trip wants one more explicitly Dutch dinner.",
    "reservation": ""
  },
  {
    "name": "Restaurant 212",
    "area": "museumplein",
    "tags": [
      "food",
      "luxury"
    ],
    "cuisine": "Chef's counter tasting menu",
    "description": "A major splurge meal if the trip wants one high-end reservation anchor.",
    "reservation": "Reserve ahead."
  },
  {
    "name": "Herring stand canal-side snack stop",
    "area": "canal-belt",
    "tags": [
      "food",
      "value"
    ],
    "cuisine": "Dutch street snack",
    "description": "A small local addition that helps the city feel more specific.",
    "reservation": ""
  },
  {
    "name": "Westerkerk and canal-side west loop",
    "area": "jordaan",
    "tags": [
      "culture",
      "walkability"
    ],
    "description": "A nice companion route to a Jordaan-heavy day without becoming a full museum block."
  },
  {
    "name": "A'DAM Lookout or Noord ferry wander",
    "area": "de-pijp",
    "tags": [
      "design",
      "nightlife"
    ],
    "description": "A worthwhile add-on if the trip wants one more contemporary cross-river perspective."
  },
  {
    "name": "Café Papeneiland",
    "area": "jordaan",
    "tags": [
      "cafes",
      "food"
    ],
    "cuisine": "Apple pie and brown café",
    "description": "A cozy classic stop that makes a Jordaan day feel more rooted.",
    "reservation": ""
  },
  {
    "name": "Scheepskameel",
    "area": "canal-belt",
    "tags": [
      "food"
    ],
    "cuisine": "Seafood-focused Dutch",
    "description": "A quieter dinner if the trip wants something more composed than casual grazing.",
    "reservation": ""
  },
  {
    "name": "Hortus Botanicus pause",
    "area": "museumplein",
    "tags": [
      "nature",
      "wellness"
    ],
    "description": "A greener add-on if the trip wants a softer museum-side hour."
  },
  {
    "name": "Fiaschetteria Pistoia",
    "area": "jordaan",
    "tags": [
      "food",
      "nightlife"
    ],
    "cuisine": "Italian and wine",
    "description": "A cozy Jordaan evening if the trip wants one more social dinner room.",
    "reservation": ""
  },
  {
    "name": "Eastern Docklands architecture loop",
    "area": "canal-belt",
    "tags": [
      "design",
      "walkability"
    ],
    "description": "An add-on for one more modern side of Amsterdam beyond the classic canal belt."
  },
  {
    "name": "Gebr. Hartering",
    "area": "canal-belt",
    "tags": [
      "food"
    ],
    "cuisine": "Seasonal Dutch-influenced plates",
    "description": "A canal-belt dinner if the trip wants one more current but grounded Amsterdam table.",
    "reservation": ""
  }
];

export default { guide: amsterdamGuide, supplements: amsterdamSupplements };
