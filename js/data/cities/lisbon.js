// Standalone lisbon city data

export const lisbonGuide = {
  "label": "Lisbon",
  "country": "Portugal",
  "currency": "Use trams and tuk-tuks selectively, but cluster neighborhoods because the hills can make a short route feel long.",
  "transferNote": "Elevation matters here, so build around one hillside cluster at a time instead of zig-zagging all day.",
  "areaAdjacency": {
    "baixa": [
      "alfama",
      "belem"
    ],
    "alfama": [
      "principe-real",
      "baixa"
    ],
    "principe-real": [
      "belem",
      "alfama"
    ],
    "belem": [
      "baixa",
      "principe-real"
    ]
  },
  "hotelAreas": {
    "baixa": {
      "label": "Baixa / Chiado",
      "mood": "central and first-trip friendly",
      "strengths": [
        "transit",
        "shopping",
        "food"
      ]
    },
    "alfama": {
      "label": "Alfama",
      "mood": "historic and atmospheric",
      "strengths": [
        "culture",
        "walkability",
        "nightlife"
      ]
    },
    "principe-real": {
      "label": "Príncipe Real",
      "mood": "polished and local",
      "strengths": [
        "food",
        "design",
        "nightlife"
      ]
    },
    "belem": {
      "label": "Belém",
      "mood": "monument-led and open",
      "strengths": [
        "culture",
        "nature",
        "walkability"
      ]
    }
  },
  "hotels": {
    "luxury": [
      {
        "name": "Four Seasons Hotel Ritz Lisbon",
        "area": "principe-real",
        "vibe": "A hilltop luxury base for trips that want quiet, space, and a more composed version of Lisbon.",
        "bestFor": [
          "luxury",
          "food",
          "wellness"
        ]
      },
      {
        "name": "Bairro Alto Hotel",
        "area": "baixa",
        "vibe": "A central splurge that keeps Chiado walks, late dinners, and river-facing viewpoints especially easy.",
        "bestFor": [
          "luxury",
          "food",
          "nightlife"
        ]
      },
      {
        "name": "Verride Palácio Santa Catarina",
        "area": "principe-real",
        "vibe": "A romantic boutique luxury stay with one of the softer city moods.",
        "bestFor": [
          "luxury",
          "design",
          "food"
        ]
      }
    ],
    "premium": [
      {
        "name": "Santiago de Alfama",
        "area": "alfama",
        "vibe": "An atmospheric old-core base for a more romantic, heritage-led Lisbon trip.",
        "bestFor": [
          "culture",
          "walkability",
          "food"
        ]
      },
      {
        "name": "The Ivens",
        "area": "baixa",
        "vibe": "A current-feeling central base that makes first-trip Lisbon movement and late dinners feel especially easy.",
        "bestFor": [
          "design",
          "food",
          "nightlife"
        ]
      },
      {
        "name": "Memmo Príncipe Real",
        "area": "principe-real",
        "vibe": "A stylish hilltop boutique stay for slower Lisbon days built around gardens, wine bars, and late dinners.",
        "bestFor": [
          "design",
          "food",
          "luxury"
        ]
      },
      {
        "name": "Palácio Ludovice",
        "area": "principe-real",
        "vibe": "A richer boutique option if the trip wants one more elegant, design-forward Lisbon base.",
        "bestFor": [
          "luxury",
          "food",
          "design"
        ]
      }
    ],
    "smart": [
      {
        "name": "LX Boutique Hotel",
        "area": "baixa",
        "vibe": "A central stay that keeps food stops, tram connections, and walking routes simple from the start.",
        "bestFor": [
          "food",
          "transit",
          "value"
        ]
      },
      {
        "name": "My Story Hotel Figueira",
        "area": "baixa",
        "vibe": "A first-trip base that makes central Lisbon movement feel easy even when the hills start to add up.",
        "bestFor": [
          "transit",
          "shopping",
          "value"
        ]
      },
      {
        "name": "This Is Lisbon Hostel",
        "area": "alfama",
        "vibe": "A smarter value pick if atmosphere and views matter more than full service.",
        "bestFor": [
          "walkability",
          "culture",
          "value"
        ]
      },
      {
        "name": "Casa do Jasmim by Shiadu",
        "area": "principe-real",
        "vibe": "A warm, lower-friction stay if you want Príncipe Real mood without a heavy spend.",
        "bestFor": [
          "cafes",
          "walkability",
          "value"
        ]
      }
    ]
  },
  "cantMiss": [
    {
      "name": "Alfama lanes and miradouros",
      "area": "alfama",
      "tags": [
        "culture",
        "walkability"
      ],
      "description": "The essential atmospheric Lisbon route, with tiled walls, steep lanes, and viewpoints that keep opening unexpectedly."
    },
    {
      "name": "Jerónimos Monastery",
      "area": "belem",
      "tags": [
        "culture"
      ],
      "description": "One of the city's great heritage anchors, and worth giving real time instead of squeezing between smaller stops."
    },
    {
      "name": "Belém Tower waterfront",
      "area": "belem",
      "tags": [
        "culture",
        "nature"
      ],
      "description": "A scenic waterfront add-on when the day is already built around Belém's monuments."
    },
    {
      "name": "Praça do Comércio and riverfront",
      "area": "baixa",
      "tags": [
        "walkability",
        "design"
      ],
      "description": "A first-pass Lisbon orientation move where the river, arcades, and open square quickly explain the city."
    },
    {
      "name": "São Jorge Castle views",
      "area": "alfama",
      "tags": [
        "culture",
        "nature"
      ],
      "description": "Best handled as a city-layout and lookout stop, with the panorama doing more of the work than the monument itself."
    },
    {
      "name": "Miradouro de Santa Catarina",
      "area": "principe-real",
      "tags": [
        "nature",
        "walkability"
      ],
      "description": "A sunset and city-outline stop if the day is already on the west-central hillside."
    },
    {
      "name": "Convento do Carmo",
      "area": "baixa",
      "tags": [
        "culture",
        "design"
      ],
      "description": "A central ruin-and-viewpoint stop that adds one more architectural pause without derailing the route."
    }
  ],
  "activities": [
    {
      "name": "Chiado café and bookshop walk",
      "area": "baixa",
      "tags": [
        "cafes",
        "shopping"
      ],
      "description": "A gentler central stretch of cafés, bookshops, and elegant streets when the day needs less climb and more rhythm."
    },
    {
      "name": "Príncipe Real bars and boutiques",
      "area": "principe-real",
      "tags": [
        "design",
        "nightlife"
      ],
      "description": "A west-hill sequence of boutiques, wine bars, and quieter late-day energy than Bairro Alto next door."
    },
    {
      "name": "Time Out Market lunch stop",
      "area": "baixa",
      "tags": [
        "food"
      ],
      "description": "A midday option for days that need flexibility and range more than one singular restaurant moment."
    },
    {
      "name": "Tram 28 stretch and hillside drift",
      "area": "alfama",
      "tags": [
        "culture",
        "walkability"
      ],
      "description": "Worth folding into a hill district day rather than treating as its own attraction."
    },
    {
      "name": "MAAT or Belém cultural add-on",
      "area": "belem",
      "tags": [
        "museum",
        "design"
      ],
      "description": "A modern contrast to the monastery-and-monument side of Belém, especially if the day wants a cleaner design note."
    },
    {
      "name": "Rooftop-and-vermouth evening in Príncipe Real",
      "area": "principe-real",
      "tags": [
        "nightlife",
        "food"
      ],
      "description": "A softer evening if the trip wants atmosphere rather than a high-energy late night."
    },
    {
      "name": "Feira da Ladra or flea-market texture block",
      "area": "alfama",
      "tags": [
        "shopping",
        "culture"
      ],
      "description": "A local-feeling add-on that adds texture and a little disorder to an otherwise polished route."
    }
  ],
  "food": [
    {
      "name": "Belcanto",
      "area": "baixa",
      "tags": [
        "food",
        "luxury"
      ],
      "cuisine": "Contemporary Portuguese",
      "description": "A major splurge dinner if the trip wants one serious reservation.",
      "reservation": "Reserve ahead.",
      "michelinStatus": "Two Stars",
      "guideNote": "Michelin describes Belcanto as Jose Avillez's showcase for creative Portuguese cooking in Chiado.",
      "guideUrl": "https://guide.michelin.com/my/en/lisboa-region/lisboa/restaurant/belcanto"
    },
    {
      "name": "Cervejaria Ramiro",
      "area": "baixa",
      "tags": [
        "food"
      ],
      "cuisine": "Seafood",
      "description": "A loud, high-reward seafood classic that still justifies the effort if you want one headline Lisbon meal.",
      "reservation": ""
    },
    {
      "name": "Taberna Sal Grosso",
      "area": "alfama",
      "tags": [
        "food"
      ],
      "cuisine": "Lisbon small plates",
      "description": "A neighborhood dinner with real old-core character, especially good when you want warmth over polish.",
      "reservation": ""
    },
    {
      "name": "Pastéis de Belém",
      "area": "belem",
      "tags": [
        "food",
        "cafes"
      ],
      "cuisine": "Pastries",
      "description": "Still the essential sweet stop once the day is already committed to Belém.",
      "reservation": ""
    },
    {
      "name": "Prado",
      "area": "baixa",
      "tags": [
        "food"
      ],
      "cuisine": "Modern Portuguese",
      "description": "A modern dinner that still feels rooted in Lisbon rather than detached from it.",
      "reservation": ""
    },
    {
      "name": "A Cevicheria",
      "area": "principe-real",
      "tags": [
        "food",
        "nightlife"
      ],
      "cuisine": "Seafood",
      "description": "A current-feeling Príncipe Real dinner that works especially well on a social, later-starting night.",
      "reservation": ""
    },
    {
      "name": "Ponto Final",
      "area": "alfama",
      "tags": [
        "food",
        "nature"
      ],
      "cuisine": "Waterside Portuguese",
      "description": "A scenic meal if you want one stronger river-facing dinner move.",
      "reservation": ""
    },
    {
      "name": "O Frade",
      "area": "alfama",
      "tags": [
        "food"
      ],
      "cuisine": "Contemporary Portuguese comfort",
      "description": "A smart old-core meal if the trip wants one more current-feeling Lisbon table.",
      "reservation": ""
    },
    {
      "name": "Dear Breakfast",
      "area": "baixa",
      "tags": [
        "cafes",
        "food"
      ],
      "cuisine": "Breakfast and coffee",
      "description": "A polished morning stop when the day begins in the central city and wants an easy start.",
      "reservation": ""
    }
  ]
};

export const lisbonSupplements = [
  {
    "name": "LX Factory",
    "area": "baixa",
    "tags": [
      "design",
      "shopping"
    ],
    "description": "A design-and-browse block when the trip wants a more current, less old-core version of Lisbon."
  },
  {
    "name": "Miradouro-hopping late afternoon",
    "area": "alfama",
    "tags": [
      "nature",
      "walkability"
    ],
    "description": "A simple scenic sequence that makes Lisbon's topography part of the day."
  },
  {
    "name": "Fado night in Alfama",
    "area": "alfama",
    "tags": [
      "nightlife",
      "culture"
    ],
    "description": "A strong evening anchor if the trip wants one more rooted cultural night."
  },
  {
    "name": "Taberna da Rua das Flores",
    "area": "baixa",
    "tags": [
      "food"
    ],
    "cuisine": "Portuguese small plates",
      "description": "A central dinner if the plan wants something polished but not formal.",
    "reservation": ""
  },
  {
    "name": "Cervejaria Trindade",
    "area": "baixa",
    "tags": [
      "food",
      "culture"
    ],
    "cuisine": "Seafood and beer hall classics",
    "description": "A classic room for trips that want one traditional Lisbon meal with real tile-and-beer-hall character.",
    "reservation": ""
  },
  {
    "name": "O Velho Eurico",
    "area": "alfama",
    "tags": [
      "food",
      "value"
    ],
    "cuisine": "Traditional Portuguese",
    "description": "A stronger neighborhood-led dinner than many old-core fallback options.",
    "reservation": ""
  },
  {
    "name": "Carmo Convent ruins",
    "area": "baixa",
    "tags": [
      "culture",
      "design"
    ],
    "description": "A central architectural pause that fits neatly into a Chiado or Baixa day."
  },
  {
    "name": "Príncipe Real garden and concept-store drift",
    "area": "principe-real",
    "tags": [
      "design",
      "shopping",
      "walkability"
    ],
    "description": "A neighborhood add-on for a slower uphill afternoon of gardens, design stores, and quieter streets."
  },
  {
    "name": "Heim Café breakfast stop",
    "area": "principe-real",
    "tags": [
      "cafes",
      "food"
    ],
    "cuisine": "Breakfast and coffee",
    "description": "A strong morning start for trips that want one more polished daytime café in the west-hill orbit.",
    "reservation": ""
  },
  {
    "name": "Café de São Bento",
    "area": "principe-real",
    "tags": [
      "food"
    ],
    "cuisine": "Steakhouse",
    "description": "A classic Lisbon dinner move when the night should feel simple, steak-led, and a little old-world.",
    "reservation": ""
  },
  {
    "name": "Belém riverside cycle or walk stretch",
    "area": "belem",
    "tags": [
      "nature",
      "walkability"
    ],
    "description": "A lower-pressure Belém add-on when the day wants more openness, river air, and less monument density."
  },
  {
    "name": "Manteigaria tart stop",
    "area": "baixa",
    "tags": [
      "cafes",
      "food"
    ],
    "cuisine": "Pastéis de nata",
    "description": "A central tart stop for when the day wants one more distinctly Lisbon snack moment without much detour.",
    "reservation": ""
  },
  {
    "name": "Graça viewpoint circuit",
    "area": "alfama",
    "tags": [
      "nature",
      "walkability"
    ],
    "description": "A stronger hilltop add-on if the trip wants one more dramatic Lisbon skyline sequence."
  },
  {
    "name": "Taberna do Calhau",
    "area": "alfama",
    "tags": [
      "food"
    ],
    "cuisine": "Contemporary Alentejo-influenced cooking",
    "description": "A smart old-core dinner if the trip wants one more specific and less obvious Lisbon table.",
    "reservation": ""
  }
];

export default { guide: lisbonGuide, supplements: lisbonSupplements };
