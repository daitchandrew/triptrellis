// Standalone marrakech city data

export const marrakechGuide = {
  "label": "Marrakech",
  "country": "Morocco",
  "currency": "Plan with heat and traffic in mind, and use riad-to-district movement carefully because the medina is slower than it looks.",
  "transferNote": "Marrakech feels best when the medina is one day-world and newer districts or gardens are another.",
  "areaAdjacency": {
    "medina": [
      "kasbah",
      "palmeraie"
    ],
    "kasbah": [
      "gueliz",
      "medina"
    ],
    "gueliz": [
      "palmeraie",
      "kasbah"
    ],
    "palmeraie": [
      "medina",
      "gueliz"
    ]
  },
  "hotelAreas": {
    "medina": {
      "label": "Medina",
      "mood": "historic, dense, and atmospheric",
      "strengths": [
        "culture",
        "walkability",
        "shopping"
      ]
    },
    "kasbah": {
      "label": "Kasbah",
      "mood": "quieter and heritage-rich",
      "strengths": [
        "culture",
        "food",
        "walkability"
      ]
    },
    "gueliz": {
      "label": "Gueliz",
      "mood": "modern and easier",
      "strengths": [
        "design",
        "shopping",
        "food"
      ]
    },
    "palmeraie": {
      "label": "Palmeraie",
      "mood": "resort-like and restorative",
      "strengths": [
        "luxury",
        "wellness",
        "nature"
      ]
    }
  },
  "hotels": {
    "luxury": [
      {
        "name": "Royal Mansour Marrakech",
        "area": "medina",
        "vibe": "A major palace-style splurge if the trip should feel exceptional from check-in onward.",
        "bestFor": [
          "luxury",
          "design",
          "food"
        ]
      },
      {
        "name": "La Mamounia",
        "area": "kasbah",
        "vibe": "A grand classic luxury stay with gardens and serious Marrakech atmosphere.",
        "bestFor": [
          "luxury",
          "wellness",
          "food"
        ]
      },
      {
        "name": "Amanjena",
        "area": "palmeraie",
        "vibe": "A calmer resort-like splurge if the trip wants more restoration and privacy.",
        "bestFor": [
          "luxury",
          "nature",
          "wellness"
        ]
      }
    ],
    "premium": [
      {
        "name": "El Fenn",
        "area": "medina",
        "vibe": "A design-led medina base that makes Marrakech feel atmospheric and dressed-up from the first evening onward.",
        "bestFor": [
          "design",
          "food",
          "nightlife"
        ]
      },
      {
        "name": "Riad Yasmine",
        "area": "medina",
        "vibe": "A smaller photogenic riad for a more intimate medina stay.",
        "bestFor": [
          "design",
          "walkability",
          "food"
        ]
      },
      {
        "name": "Les Deux Tours",
        "area": "palmeraie",
        "vibe": "A softer greener premium option if you want a slower edge-of-city mood.",
        "bestFor": [
          "wellness",
          "nature",
          "food"
        ]
      },
      {
        "name": "Villa des Orangers",
        "area": "kasbah",
        "vibe": "A garden-like refuge if the trip wants medina access without full medina intensity.",
        "bestFor": [
          "luxury",
          "wellness",
          "food"
        ]
      }
    ],
    "smart": [
      {
        "name": "Riad BE Marrakech",
        "area": "medina",
        "vibe": "A stylish medina base with lower-friction pricing.",
        "bestFor": [
          "design",
          "culture",
          "value"
        ]
      },
      {
        "name": "Riad Dar One",
        "area": "kasbah",
        "vibe": "A quieter heritage-heavy option near the southern medina edge.",
        "bestFor": [
          "culture",
          "walkability",
          "value"
        ]
      },
      {
        "name": "2Ciels Boutique Hôtel",
        "area": "gueliz",
        "vibe": "A modern-district pick if you want easier movement and dining.",
        "bestFor": [
          "food",
          "shopping",
          "value"
        ]
      },
      {
        "name": "Riad l'Orangeraie",
        "area": "medina",
        "vibe": "A value-minded riad if the trip wants a central medina base without losing calm.",
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
      "name": "Jemaa el-Fnaa and souk edge",
      "area": "medina",
      "tags": [
        "culture",
        "food"
      ],
      "description": "The essential sensory core of the city, where Marrakech finally feels loud, layered, and fully alive both day and night."
    },
    {
      "name": "Bahia Palace",
      "area": "kasbah",
      "tags": [
        "culture",
        "design"
      ],
      "description": "One of the city's most visually satisfying palace interiors, especially if the trip wants craftsmanship and pattern rather than pure scale."
    },
    {
      "name": "Koutoubia Mosque area",
      "area": "medina",
      "tags": [
        "culture",
        "walkability"
      ],
      "description": "An orientation landmark on a first medina day, with enough open space to give the old city some air."
    },
    {
      "name": "Majorelle Garden",
      "area": "gueliz",
      "tags": [
        "nature",
        "design"
      ],
      "description": "A cleaner, color-saturated counterpoint to the density of the medina, and one of the easiest visual resets in the city."
    },
    {
      "name": "Saadian Tombs",
      "area": "kasbah",
      "tags": [
        "culture"
      ],
      "description": "A compact historic stop that fits naturally into a Kasbah route."
    },
    {
      "name": "Menara Gardens and Atlas-facing edge",
      "area": "palmeraie",
      "tags": [
        "nature",
        "wellness"
      ],
      "description": "An open-air reset if the trip wants a little more space and light."
    },
    {
      "name": "Medersa and artisan courtyards north-medina route",
      "area": "medina",
      "tags": [
        "culture",
        "design"
      ],
      "description": "A stronger architectural medina pairing if the trip wants more than just the main square."
    }
  ],
  "activities": [
    {
      "name": "Medina riad-rooftop circuit",
      "area": "medina",
      "tags": [
        "design",
        "nightlife"
      ],
      "description": "A way to make the evening feel atmospheric, layered, and distinctly Marrakech without overcommitting to one formal dinner room."
    },
    {
      "name": "Spice and textile souk browse",
      "area": "medina",
      "tags": [
        "shopping",
        "culture"
      ],
      "description": "A medina block best handled for texture, color, and craft rather than a rigid checklist of stalls."
    },
    {
      "name": "Gueliz cafés and concept stores",
      "area": "gueliz",
      "tags": [
        "cafes",
        "shopping",
        "design"
      ],
      "description": "A modern-district reset that keeps Marrakech from feeling relentlessly dense or heritage-heavy."
    },
    {
      "name": "Hammam and spa block",
      "area": "palmeraie",
      "tags": [
        "wellness"
      ],
      "description": "A slower restorative anchor when the trip needs recovery from heat, walking, and medina intensity."
    },
    {
      "name": "Kasbah garden-and-lane walk",
      "area": "kasbah",
      "tags": [
        "walkability",
        "culture"
      ],
      "description": "A calmer heritage route than another full medina push."
    },
    {
      "name": "Artisan workshop and leather route",
      "area": "medina",
      "tags": [
        "shopping",
        "design"
      ],
      "description": "A more specific medina block if the trip wants craft and material culture rather than generic souk wandering."
    },
    {
      "name": "Sunset rooftop circuit near Jemaa el-Fnaa",
      "area": "medina",
      "tags": [
        "nightlife",
        "food"
      ],
      "description": "An easy evening if the trip wants atmosphere without committing to a big formal dinner."
    }
  ],
  "food": [
    {
      "name": "Dar Yacout",
      "area": "medina",
      "tags": [
        "food",
        "luxury"
      ],
      "cuisine": "Moroccan dinner",
      "description": "A classic atmospheric splurge dinner if the trip wants one theatrical Marrakech night.",
      "reservation": "Reserve ahead."
    },
    {
      "name": "Nomad",
      "area": "medina",
      "tags": [
        "food",
        "design"
      ],
      "cuisine": "Modern Moroccan",
      "description": "A medina meal with a rooftop setting that makes lunch or dinner feel especially easy.",
      "reservation": ""
    },
    {
      "name": "Le Jardin",
      "area": "medina",
      "tags": [
        "food",
        "cafes"
      ],
      "cuisine": "Garden café",
      "description": "A lighter meal in the middle of the medina maze, where the courtyard setting does a lot of the charm work.",
      "reservation": ""
    },
    {
      "name": "Plus61",
      "area": "gueliz",
      "tags": [
        "food"
      ],
      "cuisine": "Contemporary",
      "description": "A modern-district dinner if the trip wants a break from strictly traditional rooms.",
      "reservation": ""
    },
    {
      "name": "Café Clock",
      "area": "kasbah",
      "tags": [
        "food",
        "culture"
      ],
      "cuisine": "Moroccan café food",
      "description": "A Kasbah-side stop that still feels specific to the city.",
      "reservation": ""
    },
    {
      "name": "Kabana",
      "area": "medina",
      "tags": [
        "food",
        "nightlife"
      ],
      "cuisine": "Rooftop cocktails and dinner",
      "description": "A stylish but easy evening when the night should feel dressed-up without becoming heavy.",
      "reservation": ""
    },
    {
      "name": "Amal Center",
      "area": "gueliz",
      "tags": [
        "food",
        "value"
      ],
      "cuisine": "Moroccan lunch",
      "description": "A smart purposeful lunch if the day is already in the modern district.",
      "reservation": ""
    },
    {
      "name": "Dar Moha",
      "area": "kasbah",
      "tags": [
        "food"
      ],
      "cuisine": "Moroccan fine dining",
      "description": "A traditional dinner if the trip wants one more beautiful garden-room meal.",
      "reservation": ""
    },
    {
      "name": "Atay Café",
      "area": "medina",
      "tags": [
        "cafes",
        "food"
      ],
      "cuisine": "Tea, breakfast, and rooftop snacks",
      "description": "A medina daytime stop when the plan needs an easy pause with a view.",
      "reservation": ""
    }
  ]
};

export const marrakechSupplements = [
  {
    "name": "Ben Youssef Madrasa",
    "area": "medina",
    "tags": [
      "culture",
      "design"
    ],
    "description": "One of the strongest architectural interiors in the city and worth protecting in a medina day."
  },
  {
    "name": "Le Jardin Secret and nearby lanes",
    "area": "medina",
    "tags": [
      "culture",
      "nature"
    ],
    "description": "A calmer medina interior-and-garden sequence that balances the souks nicely."
  },
  {
    "name": "Agafay dinner desert add-on",
    "area": "palmeraie",
    "tags": [
      "nature",
      "nightlife"
    ],
    "description": "A larger evening detour if the trip wants one desert-side set piece without overcommitting to a full excursion day."
  },
  {
    "name": "Dar Cherifa",
    "area": "medina",
    "tags": [
      "food",
      "culture"
    ],
    "cuisine": "Moroccan in a restored riad",
    "description": "A beautiful medina meal if the trip wants one more atmospheric room.",
    "reservation": ""
  },
  {
    "name": "Plus61 rooftop or Nobu-style night alternative",
    "area": "gueliz",
    "tags": [
      "nightlife",
      "food"
    ],
    "cuisine": "A stronger modern-district evening when the trip wants a break from traditional rooms.",
    "reservation": ""
  },
  {
    "name": "Bacha Coffee",
    "area": "medina",
    "tags": [
      "cafes",
      "food"
    ],
    "cuisine": "Coffee and pastries",
      "description": "A sweet-and-coffee stop when the medina day needs a polished pause.",
    "reservation": ""
  },
  {
    "name": "Majorelle-adjacent YSL Museum stop",
    "area": "gueliz",
    "tags": [
      "design",
      "culture"
    ],
      "description": "A paired add-on when the modern side of Marrakech should feel a bit more intentional."
  },
  {
    "name": "Palm-grove camel or quad edge experience",
    "area": "palmeraie",
    "tags": [
      "nature"
    ],
    "description": "A larger resort-side outing if the trip wants one more scenic and playful half-day."
  },
  {
    "name": "La Famille",
    "area": "medina",
    "tags": [
      "food",
      "cafes"
    ],
    "cuisine": "Garden lunch",
    "description": "A softer medina meal if the day needs a quieter midday room.",
    "reservation": ""
  },
  {
    "name": "Le Jardin rooftop or courtyard evening",
    "area": "medina",
    "tags": [
      "food",
      "nightlife"
    ],
    "cuisine": "An atmospheric dinner if the evening should stay in the medina without feeling too formal.",
    "reservation": ""
  },
  {
    "name": "Saadian Tombs and Kasbah walk",
    "area": "kasbah",
    "tags": [
      "culture",
      "walkability"
    ],
    "description": "A heritage pairing if the southern medina side should feel more complete."
  },
  {
    "name": "Nomad rooftop dinner",
    "area": "medina",
    "tags": [
      "food",
      "nightlife"
    ],
    "cuisine": "Modern Moroccan",
    "description": "A dependable medina dinner if the trip wants one more polished rooftop room.",
    "reservation": ""
  }
];

export default { guide: marrakechGuide, supplements: marrakechSupplements };
