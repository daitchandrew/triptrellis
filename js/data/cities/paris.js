// Standalone paris city data

export const parisGuide = {
  "label": "Paris",
  "country": "France",
  "currency": "Use the Metro for most movement and expect reservations to matter more for stronger dinners.",
  "transferNote": "Paris is walkable in stretches, but crossing the city multiple times in one day drains the mood fast.",
  "areaAdjacency": {
    "marais": [
      "saint-germain",
      "opera"
    ],
    "saint-germain": [
      "montmartre",
      "marais"
    ],
    "montmartre": [
      "opera",
      "saint-germain"
    ],
    "opera": [
      "marais",
      "montmartre"
    ]
  },
  "hotelAreas": {
    "marais": {
      "label": "Le Marais",
      "mood": "walkable, lively, and layered",
      "strengths": [
        "food",
        "walkability",
        "shopping"
      ]
    },
    "saint-germain": {
      "label": "Saint-Germain-des-Prés",
      "mood": "classic and polished",
      "strengths": [
        "culture",
        "food",
        "luxury"
      ]
    },
    "montmartre": {
      "label": "Montmartre",
      "mood": "atmospheric and hilltop",
      "strengths": [
        "culture",
        "nightlife",
        "walkability"
      ]
    },
    "opera": {
      "label": "Opéra / Louvre",
      "mood": "central and first-trip friendly",
      "strengths": [
        "transit",
        "shopping",
        "culture"
      ]
    }
  },
  "hotels": {
    "luxury": [
      {
        "name": "Cheval Blanc Paris",
        "area": "opera",
        "vibe": "A major Seine-side splurge with serious polish and dining leverage.",
        "bestFor": [
          "luxury",
          "food",
          "design"
        ]
      },
      {
        "name": "Hôtel Lutetia",
        "area": "saint-germain",
        "vibe": "A grand Left Bank luxury base for a more classic Paris mood.",
        "bestFor": [
          "luxury",
          "food",
          "culture"
        ]
      },
      {
        "name": "Le Bristol Paris",
        "area": "opera",
        "vibe": "An old-school Paris luxury address for travelers who want gilt, ceremony, and faultless classic service.",
        "bestFor": [
          "luxury",
          "food",
          "shopping"
        ]
      }
    ],
    "premium": [
      {
        "name": "Hôtel Providence",
        "area": "marais",
        "vibe": "A moodier boutique base that drops you straight into one of Paris's best dinner-and-wine-bar zones.",
        "bestFor": [
          "design",
          "food",
          "nightlife"
        ]
      },
      {
        "name": "Relais Christine",
        "area": "saint-germain",
        "vibe": "A romantic Left Bank stay with quieter charm.",
        "bestFor": [
          "culture",
          "luxury",
          "walkability"
        ]
      },
      {
        "name": "Grand Pigalle Hotel",
        "area": "montmartre",
        "vibe": "A stylish northern base for bistros and late nights.",
        "bestFor": [
          "food",
          "nightlife",
          "design"
        ]
      },
      {
        "name": "Le Grand Mazarin",
        "area": "marais",
        "vibe": "A richer Marais boutique option if the trip wants a more dressed-up right-bank base.",
        "bestFor": [
          "luxury",
          "food",
          "design"
        ]
      }
    ],
    "smart": [
      {
        "name": "Hôtel des Grands Boulevards",
        "area": "opera",
        "vibe": "A central first-trip base with enough character to keep Opéra from feeling purely logistical.",
        "bestFor": [
          "transit",
          "food",
          "value"
        ]
      },
      {
        "name": "Hôtel Fabric",
        "area": "marais",
        "vibe": "A design-forward stay on the quieter eastern edge of the Marais, with easier pricing and strong food access.",
        "bestFor": [
          "design",
          "food",
          "value"
        ]
      },
      {
        "name": "Hôtel Rochechouart",
        "area": "montmartre",
        "vibe": "A good-value base for north-Paris wandering and nightlife.",
        "bestFor": [
          "nightlife",
          "culture",
          "value"
        ]
      },
      {
        "name": "Hôtel du Sentier",
        "area": "opera",
        "vibe": "A central option with easier movement and more personality than a generic Opéra stay.",
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
      "name": "Louvre exterior and Tuileries axis",
      "area": "opera",
      "tags": [
        "culture",
        "design"
      ],
      "description": "A grand first-pass through ceremonial Paris, with palace scale, garden order, and some of the city's best sightline drama."
    },
    {
      "name": "Île de la Cité and Notre-Dame area",
      "area": "saint-germain",
      "tags": [
        "culture",
        "walkability"
      ],
      "description": "One of the city's most rewarding walking cores, where bridges, old stone, and river views keep the route feeling fully Parisian."
    },
    {
      "name": "Place des Vosges and old Marais lanes",
      "area": "marais",
      "tags": [
        "culture",
        "shopping"
      ],
      "description": "A beautifully preserved Marais sequence where aristocratic squares give way to smaller lanes, galleries, and boutiques."
    },
    {
      "name": "Sacré-Cœur and upper Montmartre",
      "area": "montmartre",
      "tags": [
        "culture",
        "walkability"
      ],
      "description": "A dramatic high-ground Paris route best done early or near evening."
    },
    {
      "name": "Musée d'Orsay",
      "area": "saint-germain",
      "tags": [
        "culture",
        "museum"
      ],
      "description": "The strongest single museum anchor for a classic Paris art day, especially if you want one beautiful room rather than an all-day marathon."
    },
    {
      "name": "Palais Garnier and Opéra district arc",
      "area": "opera",
      "tags": [
        "design",
        "culture"
      ],
      "description": "A central Paris architecture anchor if the day already leans Opéra and grand boulevard drama."
    },
    {
      "name": "Canal Saint-Martin bridges and quays",
      "area": "marais",
      "tags": [
        "walkability",
        "design"
      ],
      "description": "A more current-feeling water-side route when the trip wants less formal Paris texture."
    }
  ],
  "activities": [
    {
      "name": "Left Bank bookshops and café route",
      "area": "saint-germain",
      "tags": [
        "culture",
        "cafes",
        "walkability"
      ],
      "description": "A slower Saint-Germain stretch of bookshops, café terraces, and the kind of elegant wandering Paris does best."
    },
    {
      "name": "Marché des Enfants Rouges lunch wander",
      "area": "marais",
      "tags": [
        "food",
        "walkability"
      ],
      "description": "An easy midday Marais anchor when the day wants market energy, lighter bites, and a softer pace between bigger sights."
    },
    {
      "name": "Galeries Lafayette and Opéra retail circuit",
      "area": "opera",
      "tags": [
        "shopping",
        "design"
      ],
      "description": "A central browse-heavy route where Belle Époque interiors and polished shopping make the district feel more elegant than purely practical."
    },
    {
      "name": "Canal Saint-Martin stroll",
      "area": "marais",
      "tags": [
        "walkability",
        "design"
      ],
      "description": "A more relaxed, current-feeling Paris afternoon, with bridges, waterside light, and less formal city texture than the big monuments."
    },
    {
      "name": "Montmartre wine-bar evening",
      "area": "montmartre",
      "tags": [
        "nightlife",
        "food"
      ],
      "description": "A stronger night finish when the trip wants atmosphere rather than formality."
    },
    {
      "name": "Rue Montorgueil food-and-browse route",
      "area": "opera",
      "tags": [
        "food",
        "walkability"
      ],
      "description": "A useful central sequence if the day wants more local life and less monument density."
    },
    {
      "name": "Le Marais gallery and vintage drift",
      "area": "marais",
      "tags": [
        "shopping",
        "design"
      ],
      "description": "A stronger current-feeling right-bank block when the trip leans browse-heavy."
    }
  ],
  "food": [
    {
      "name": "Septime",
      "area": "marais",
      "tags": [
        "food",
        "luxury"
      ],
      "cuisine": "Contemporary French",
      "description": "A destination dinner if you want one headline modern Paris reservation.",
      "reservation": "Reserve ahead.",
      "michelinStatus": "One Star",
      "guideNote": "Michelin highlights its confident modern cooking and cool industrial room.",
      "guideUrl": "https://guide.michelin.com/es/es/ile-de-france/paris/restaurante/septime"
    },
    {
      "name": "Clamato",
      "area": "marais",
      "tags": [
        "food"
      ],
      "cuisine": "Seafood small plates",
      "description": "A lively seafood dinner with real neighborhood energy, especially if you want Paris to feel current rather than ceremonial.",
      "reservation": ""
    },
    {
      "name": "Le Comptoir du Relais",
      "area": "saint-germain",
      "tags": [
        "food"
      ],
      "cuisine": "Bistro",
      "description": "A classic Left Bank bistro room that still delivers the compact, crowded, deeply Parisian version of dinner.",
      "reservation": ""
    },
    {
      "name": "Breizh Café",
      "area": "marais",
      "tags": [
        "food"
      ],
      "cuisine": "Crêpes and cider",
      "description": "A flexible lighter meal that still feels specific to the city.",
      "reservation": ""
    },
    {
      "name": "Frenchie Bar à Vins",
      "area": "opera",
      "tags": [
        "food",
        "nightlife"
      ],
      "cuisine": "Wine bar",
      "description": "A polished but energetic central-night option if you want a stronger room than a casual walk-in bar.",
      "reservation": ""
    },
    {
      "name": "Bouillon Pigalle",
      "area": "montmartre",
      "tags": [
        "food",
        "value"
      ],
      "cuisine": "Classic French comfort food",
      "description": "A useful lower-friction meal when the day is already in the north.",
      "reservation": ""
    },
    {
      "name": "Café de Flore",
      "area": "saint-germain",
      "tags": [
        "cafes",
        "culture"
      ],
      "cuisine": "Classic Paris café",
      "description": "Worth doing once if the trip wants the canonical café version of Paris.",
      "reservation": ""
    },
    {
      "name": "Le Chateaubriand",
      "area": "marais",
      "tags": [
        "food"
      ],
      "cuisine": "Contemporary bistro",
      "description": "A still-relevant destination bistro for a more irreverent, current side of Paris dining.",
      "reservation": ""
    },
    {
      "name": "Du Pain et des Idées breakfast stop",
      "area": "marais",
      "tags": [
        "cafes",
        "food"
      ],
      "cuisine": "Bakery and pastries",
      "description": "A useful morning anchor if the plan starts on the northeast side of the city.",
      "reservation": ""
    }
  ]
};

export const parisSupplements = [
  {
    "name": "Palais Royal and covered passages route",
    "area": "opera",
    "tags": [
      "culture",
      "walkability"
    ],
    "description": "A smarter central Paris walk when the day should feel elegant without being museum-heavy."
  },
  {
    "name": "Musée Rodin and garden hour",
    "area": "saint-germain",
    "tags": [
      "museum",
      "culture",
      "nature"
    ],
    "description": "A lighter museum stop that works especially well on a calmer Left Bank day."
  },
  {
    "name": "Canal Saint-Martin wine-bar evening",
    "area": "marais",
    "tags": [
      "nightlife",
      "food"
    ],
    "description": "A more local-feeling night option when the trip wants to step away from postcard Paris."
  },
  {
    "name": "Le Servan",
    "area": "marais",
    "tags": [
      "food"
    ],
    "cuisine": "Modern bistro",
    "description": "A stronger destination bistro if the trip wants something current rather than canonical.",
    "reservation": ""
  },
  {
    "name": "Du Pain et des Idées",
    "area": "marais",
    "tags": [
      "cafes",
      "food"
    ],
    "cuisine": "Bakery",
    "description": "A great morning pastry stop if the day is already northeast-leaning.",
    "reservation": ""
  },
  {
    "name": "Parcelles",
    "area": "marais",
    "tags": [
      "food"
    ],
    "cuisine": "French bistro",
    "description": "A polished Marais dinner with a quieter, more neighborhood-led mood.",
    "reservation": ""
  },
  {
    "name": "Petit Palais and bridge approach",
    "area": "opera",
    "tags": [
      "culture",
      "design"
    ],
    "description": "A good elegant add-on when the day is already moving through the central monumental axis."
  },
  {
    "name": "Luxembourg Gardens pause",
    "area": "saint-germain",
    "tags": [
      "nature",
      "wellness",
      "walkability"
    ],
    "description": "A useful reset if the Left Bank day needs more breathing room."
  },
  {
    "name": "Septime La Cave",
    "area": "marais",
    "tags": [
      "food",
      "nightlife"
    ],
    "cuisine": "Wine bar and plates",
    "description": "A smarter low-key evening if the trip wants something food-forward without a huge reservation lift.",
    "reservation": ""
  },
  {
    "name": "Les Arlots",
    "area": "opera",
    "tags": [
      "food"
    ],
    "cuisine": "Bistro and sausage plate",
    "description": "A strong central dinner if the day should stay practical but still very Paris.",
    "reservation": ""
  },
  {
    "name": "Picasso Museum in the Marais",
    "area": "marais",
    "tags": [
      "museum",
      "culture"
    ],
    "description": "A useful art anchor when the right-bank day wants one more serious interior stop."
  },
  {
    "name": "Folderol",
    "area": "marais",
    "tags": [
      "cafes",
      "food"
    ],
    "cuisine": "Ice cream and natural wine",
    "description": "A fun lower-pressure stop if the trip wants one more current-feeling Marais treat.",
    "reservation": ""
  }
];

export default { guide: parisGuide, supplements: parisSupplements };
