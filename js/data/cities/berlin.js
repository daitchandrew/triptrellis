// Berlin guide data

export const berlinGuide = {
  "label": "Berlin",
  "country": "Germany",
  "currency": "Cards work in more places than before, but cash still helps at bars, small spots, and older cafes.",
  "transferNote": "Berlin is spread out, so neighborhood choice matters more here than in many capitals.",
  "areaAdjacency": {
    "mitte": [
      "kreuzberg",
      "charlottenburg",
      "prenzlauerberg"
    ],
    "kreuzberg": [
      "mitte",
      "prenzlauerberg"
    ],
    "charlottenburg": [
      "mitte",
      "prenzlauerberg"
    ],
    "prenzlauerberg": [
      "mitte",
      "kreuzberg",
      "charlottenburg"
    ]
  },
  "hotelAreas": {
    "mitte": {
      "label": "Mitte",
      "mood": "central, museum-rich, and efficient",
      "strengths": [
        "culture",
        "luxury",
        "walkability"
      ]
    },
    "kreuzberg": {
      "label": "Kreuzberg",
      "mood": "creative, nightlife-friendly, and more alternative",
      "strengths": [
        "nightlife",
        "food",
        "design"
      ]
    },
    "charlottenburg": {
      "label": "Charlottenburg",
      "mood": "elegant, calmer, and more refined",
      "strengths": [
        "luxury",
        "wellness",
        "shopping"
      ]
    },
    "prenzlauerberg": {
      "label": "Prenzlauer Berg",
      "mood": "leafy, local, and gently stylish",
      "strengths": [
        "wellness",
        "food",
        "culture"
      ]
    }
  },
  "hotels": {
    "luxury": [
      {
        "name": "Hotel Adlon Kempinski",
        "area": "mitte",
        "vibe": "Classic grand Berlin luxury right by the city's biggest sights.",
        "bestFor": [
          "luxury",
          "culture",
          "food"
        ]
      },
      {
        "name": "SO/ Berlin Das Stue",
        "area": "charlottenburg",
        "vibe": "Sophisticated, design-forward, and quieter than central Mitte.",
        "bestFor": [
          "luxury",
          "design",
          "wellness"
        ]
      },
      {
        "name": "Hotel de Rome",
        "area": "mitte",
        "vibe": "A polished old-bank conversion with strong central leverage.",
        "bestFor": [
          "luxury",
          "culture",
          "food"
        ]
      },
      {
        "name": "Waldorf Astoria Berlin",
        "area": "charlottenburg",
        "vibe": "A polished west-Berlin luxury stay with stronger shopping and spa appeal.",
        "bestFor": [
          "luxury",
          "shopping",
          "wellness"
        ]
      }
    ],
    "premium": [
      {
        "name": "Orania.Berlin",
        "area": "kreuzberg",
        "vibe": "A sharp Kreuzberg base if you want more character and local energy.",
        "bestFor": [
          "food",
          "nightlife",
          "design"
        ]
      },
      {
        "name": "Château Royal Berlin",
        "area": "mitte",
        "vibe": "Boutique, polished, and very well placed for a first trip.",
        "bestFor": [
          "design",
          "culture",
          "food"
        ]
      },
      {
        "name": "Wilmina",
        "area": "charlottenburg",
        "vibe": "Quiet, architectural, and one of the more interesting refined stays.",
        "bestFor": [
          "design",
          "wellness",
          "luxury"
        ]
      },
      {
        "name": "Telegraphenamt",
        "area": "mitte",
        "vibe": "A handsome central hotel that feels polished, current, and unusually spacious for Mitte.",
        "bestFor": [
          "design",
          "food",
          "luxury"
        ]
      }
    ],
    "smart": [
      {
        "name": "Casa Camper Berlin",
        "area": "mitte",
        "vibe": "A smart value base in a very useful part of the city.",
        "bestFor": [
          "culture",
          "food",
          "value"
        ]
      },
      {
        "name": "Michelberger Hotel",
        "area": "kreuzberg",
        "vibe": "Creative and social without feeling generic.",
        "bestFor": [
          "design",
          "nightlife",
          "value"
        ]
      },
      {
        "name": "The Circus Hotel",
        "area": "mitte",
        "vibe": "A practical central stay with stronger neighborhood access than most.",
        "bestFor": [
          "culture",
          "value",
          "food"
        ]
      },
      {
        "name": "Motel One Berlin-Alexanderplatz",
        "area": "mitte",
        "vibe": "An efficient central value pick if you want modern basics and easy movement around the city.",
        "bestFor": [
          "value",
          "transit",
          "food"
        ]
      }
    ]
  },
  "cantMiss": [
    {
      "name": "Museum Island",
      "area": "mitte",
      "tags": [
        "culture"
      ],
      "description": "Still one of the strongest cultural anchors in Berlin."
    },
    {
      "name": "Brandenburg Gate and Reichstag zone",
      "area": "mitte",
      "tags": [
        "culture"
      ],
      "description": "Essential first-trip Berlin, especially if you have limited time."
    },
    {
      "name": "Memorial and history corridor",
      "area": "mitte",
      "tags": [
        "culture"
      ],
      "description": "Berlin is better when you give its history proper room in the trip."
    },
    {
      "name": "East Side Gallery",
      "area": "kreuzberg",
      "tags": [
        "culture",
        "design"
      ],
      "description": "A core visual and historical piece of the city."
    },
    {
      "name": "Landwehr Canal and Kreuzberg streets",
      "area": "kreuzberg",
      "tags": [
        "wellness",
        "nightlife"
      ],
      "description": "A strong way to experience the city's more social and creative side."
    },
    {
      "name": "Charlottenburg Palace area",
      "area": "charlottenburg",
      "tags": [
        "culture",
        "wellness"
      ],
      "description": "A calmer elegant Berlin block with more old-West polish."
    },
    {
      "name": "Kurfürstendamm and Savignyplatz",
      "area": "charlottenburg",
      "tags": [
        "shopping",
        "food"
      ],
      "description": "Good if the trip wants one more refined west-Berlin afternoon."
    },
    {
      "name": "Prenzlauer Berg cafe streets",
      "area": "prenzlauerberg",
      "tags": [
        "food",
        "wellness",
        "design"
      ],
      "description": "A softer more local side of Berlin with great daytime rhythm."
    },
    {
      "name": "Mauerpark area",
      "area": "prenzlauerberg",
      "tags": [
        "culture",
        "wellness"
      ],
      "description": "Useful if the trip wants a more neighborhood-driven Berlin feel."
    },
    {
      "name": "Berlin nightlife atmosphere",
      "area": "kreuzberg",
      "tags": [
        "nightlife"
      ],
      "description": "Even if clubs are not the point, one strong Berlin night should still be in the plan."
    },
    {
      "name": "Hackescher Markt and side streets",
      "area": "mitte",
      "tags": [
        "shopping",
        "design"
      ],
      "description": "A useful central texture-and-retail zone for a first Berlin trip."
    },
    {
      "name": "Tempelhofer Feld",
      "area": "kreuzberg",
      "tags": [
        "nature",
        "wellness"
      ],
      "description": "A distinctly Berlin open-space experience that feels more local than scenic."
    },
    {
      "name": "Berlinische Galerie zone",
      "area": "kreuzberg",
      "tags": [
        "museum",
        "design"
      ],
      "description": "A very good contemporary-art and Berlin-creative-history stop."
    },
    {
      "name": "Kollwitzplatz area",
      "area": "prenzlauerberg",
      "tags": [
        "food",
        "street"
      ],
      "description": "A leafy Prenzlauer Berg pocket lined with brunch spots, wine bars, and handsome apartment blocks that shows Berlin at its most lived-in."
    },
    {
      "name": "Neues Museum",
      "area": "mitte",
      "tags": [
        "museum",
        "culture"
      ],
      "description": "One of Museum Island's major museums, especially known for Egyptian and prehistoric collections."
    },
    {
      "name": "Hamburger Bahnhof - Nationalgalerie der Gegenwart",
      "area": "mitte",
      "tags": [
        "museum",
        "design"
      ],
      "description": "Berlin's flagship museum for contemporary art in a former railway station."
    },
    {
      "name": "Pergamon Museum (currently closed)",
      "area": "mitte",
      "tags": [
        "museum",
        "culture"
      ],
      "description": "A major Museum Island institution that is closed for renovation, but still important context for the area."
    },
    {
      "name": "Gendarmenmarkt and Bebelplatz axis",
      "area": "mitte",
      "tags": [
        "culture",
        "design"
      ],
      "description": "One of Berlin's most composed central sequences, where grand squares, opera-house architecture, and darker historical memory sit close together."
    },
    {
      "name": "Bergmannkiez",
      "area": "kreuzberg",
      "tags": [
        "food",
        "design",
        "wellness"
      ],
      "description": "A more polished Kreuzberg pocket of independent shops, cafes, and side streets that works especially well by day."
    },
    {
      "name": "Tiergarten and Kulturforum edge",
      "area": "mitte",
      "tags": [
        "wellness",
        "design",
        "culture"
      ],
      "description": "A calmer central Berlin block where park space, modernist cultural buildings, and broad boulevards all connect naturally."
    },
    {
      "name": "Teufelsberg and west-side view culture",
      "area": "charlottenburg",
      "tags": [
        "design",
        "nature",
        "culture"
      ],
      "description": "A striking west-Berlin outing for Cold War atmosphere, graffiti, and wide views over the forested edge of the city."
    },
    {
      "name": "Bookshops and wine bars in Prenzlauer Berg",
      "area": "prenzlauerberg",
      "tags": [
        "food",
        "design",
        "nightlife"
      ],
      "description": "One of Berlin's best low-key evening moods, built around handsome streets rather than big-scene nightlife."
    }
  ],
  "activities": [
    {
      "name": "Museum Island and historic core pass",
      "area": "mitte",
      "tags": [
        "culture"
      ],
      "timing": "morning",
      "description": "The strongest history-first Berlin morning."
    },
    {
      "name": "Brandenburg Gate, Reichstag, and Tiergarten edge",
      "area": "mitte",
      "tags": [
        "culture",
        "wellness"
      ],
      "timing": "afternoon",
      "description": "The essential political-history stretch, linking Brandenburg Gate, Reichstag, and Tiergarten into one legible walk through Berlin's power center."
    },
    {
      "name": "Unter den Linden and central architecture walk",
      "area": "mitte",
      "tags": [
        "design",
        "culture"
      ],
      "timing": "afternoon",
      "description": "Useful when the trip wants more city texture than museum density."
    },
    {
      "name": "Checkpoint Charlie and memorial context loop",
      "area": "mitte",
      "tags": [
        "culture"
      ],
      "timing": "afternoon",
      "description": "Best when you want Berlin's history to feel explicit rather than background."
    },
    {
      "name": "Kreuzberg canal walk",
      "area": "kreuzberg",
      "tags": [
        "wellness",
        "design"
      ],
      "timing": "afternoon",
      "description": "A great slower Berlin block with more neighborhood energy."
    },
    {
      "name": "Street art and Kreuzberg side streets",
      "area": "kreuzberg",
      "tags": [
        "design",
        "culture"
      ],
      "timing": "afternoon",
      "description": "Good if the trip wants more visual texture and less polish."
    },
    {
      "name": "Berlin bar night in Kreuzberg",
      "area": "kreuzberg",
      "tags": [
        "nightlife",
        "food"
      ],
      "timing": "evening",
      "description": "The easiest way to give the trip a real Berlin night."
    },
    {
      "name": "East Side Gallery and riverside stretch",
      "area": "kreuzberg",
      "tags": [
        "culture",
        "design"
      ],
      "timing": "morning",
      "description": "A useful historical and visual anchor for an eastern-side day."
    },
    {
      "name": "Charlottenburg Palace and gardens",
      "area": "charlottenburg",
      "tags": [
        "culture",
        "wellness"
      ],
      "timing": "morning",
      "description": "A calmer and more elegant contrast to heavier central Berlin blocks."
    },
    {
      "name": "Savignyplatz cafe and bookstore pass",
      "area": "charlottenburg",
      "tags": [
        "food",
        "wellness",
        "design"
      ],
      "timing": "afternoon",
      "description": "A refined afternoon if the trip wants a calmer west-Berlin feel."
    },
    {
      "name": "Kurfürstendamm and KaDeWe window",
      "area": "charlottenburg",
      "tags": [
        "shopping",
        "luxury"
      ],
      "timing": "afternoon",
      "description": "Useful if the trip wants one polished shopping pass."
    },
    {
      "name": "Prenzlauer Berg cafe loop",
      "area": "prenzlauerberg",
      "tags": [
        "food",
        "design",
        "wellness"
      ],
      "timing": "morning",
      "description": "A relaxed morning of bakeries, espresso, and handsome residential streets that gives Berlin warmth before the heavier history blocks."
    },
    {
      "name": "Mauerpark and neighborhood stroll",
      "area": "prenzlauerberg",
      "tags": [
        "culture",
        "wellness"
      ],
      "timing": "afternoon",
      "description": "Best on weekends, when the park's flea-market and karaoke energy turn this into one of Berlin's clearest neighborhood-social scenes."
    },
    {
      "name": "Kollwitzkiez wander",
      "area": "prenzlauerberg",
      "tags": [
        "food",
        "design"
      ],
      "timing": "afternoon",
      "description": "A very good local-feeling district for cafes, side streets, and drift."
    },
    {
      "name": "Berlin concert or cultural evening",
      "area": "mitte",
      "tags": [
        "culture",
        "nightlife"
      ],
      "timing": "evening",
      "description": "Useful if nightlife is not the goal but you still want a strong Berlin night."
    },
    {
      "name": "Hackescher Markt shopping and side streets",
      "area": "mitte",
      "tags": [
        "shopping",
        "design"
      ],
      "timing": "afternoon",
      "description": "A simple useful central shopping-and-wandering block."
    },
    {
      "name": "Tempelhofer Feld open-space loop",
      "area": "kreuzberg",
      "tags": [
        "nature",
        "wellness"
      ],
      "timing": "afternoon",
      "description": "A former airfield turned giant public park where Berliners bike, picnic, skate, and let the city feel improbably open."
    },
    {
      "name": "Berlinische Galerie stop",
      "area": "kreuzberg",
      "tags": [
        "museum",
        "design"
      ],
      "timing": "afternoon",
      "description": "A strong contemporary-art and design anchor in the east-central part of the city."
    },
    {
      "name": "Savignyplatz wine and dinner drift",
      "area": "charlottenburg",
      "tags": [
        "food",
        "nightlife"
      ],
      "timing": "evening",
      "description": "A calmer, more polished west-Berlin evening if Kreuzberg is not the mood."
    },
    {
      "name": "Neues Museum visit",
      "area": "mitte",
      "tags": [
        "museum",
        "culture"
      ],
      "timing": "afternoon",
      "description": "A serious museum stop if the trip wants archaeology, ancient cultures, and one of Berlin's biggest collection hits."
    },
    {
      "name": "Hamburger Bahnhof visit",
      "area": "mitte",
      "tags": [
        "museum",
        "design"
      ],
      "timing": "afternoon",
      "description": "A strong contemporary-art stop if the trip wants a more modern cultural anchor."
    },
    {
      "name": "Berlinische Galerie visit",
      "area": "kreuzberg",
      "tags": [
        "museum",
        "design"
      ],
      "timing": "afternoon",
      "description": "A very good modern-art and architecture museum with a strong Berlin focus."
    },
    {
      "name": "Gendarmenmarkt to Bebelplatz architecture walk",
      "area": "mitte",
      "tags": [
        "culture",
        "design"
      ],
      "timing": "afternoon",
      "description": "A composed central walk through opera houses, squares, and memorial context when you want Berlin to feel stately as well as historical."
    },
    {
      "name": "Bergmannkiez lunch and side-street drift",
      "area": "kreuzberg",
      "tags": [
        "food",
        "design",
        "wellness"
      ],
      "timing": "afternoon",
      "description": "A more relaxed Kreuzberg stretch for cafes, bottle shops, independent retail, and a neighborhood-first pace."
    },
    {
      "name": "Tiergarten to Philharmonie cultural sweep",
      "area": "mitte",
      "tags": [
        "wellness",
        "culture",
        "design"
      ],
      "timing": "afternoon",
      "description": "A useful way to balance Berlin's hard history with park space and some of its strongest modern cultural architecture."
    },
    {
      "name": "Teufelsberg and Grunewald edge outing",
      "area": "charlottenburg",
      "tags": [
        "nature",
        "design"
      ],
      "timing": "afternoon",
      "description": "Best when the trip wants one bigger west-side detour for skyline views, graffiti, and a more open-air Berlin mood."
    },
    {
      "name": "Prenzlauer Berg bookstores and natural-wine evening",
      "area": "prenzlauerberg",
      "tags": [
        "food",
        "nightlife",
        "design"
      ],
      "timing": "evening",
      "description": "A softer Berlin night built around neighborhood restaurants, wine bars, and streets that still feel lived in after dark."
    }
  ],
  "food": [
    {
      "name": "Tim Raue",
      "area": "mitte",
      "tags": [
        "luxury",
        "food"
      ],
      "cuisine": "Modern Asian-inspired fine dining",
      "reservation": "Reserve well in advance.",
      "description": "One of Berlin's best-known big-ticket dinners."
    },
    {
      "name": "Nobelhart & Schmutzig",
      "area": "kreuzberg",
      "tags": [
        "luxury",
        "food",
        "culture"
      ],
      "cuisine": "Regional tasting",
      "reservation": "Book ahead.",
      "description": "A very Berlin fine-dining experience with a strong point of view."
    },
    {
      "name": "Coda",
      "area": "kreuzberg",
      "tags": [
        "luxury",
        "food",
        "design"
      ],
      "cuisine": "Dessert-forward tasting",
      "reservation": "Reserve ahead.",
      "description": "One of the more unusual and memorable upscale Berlin meals."
    },
    {
      "name": "Grill Royal",
      "area": "mitte",
      "tags": [
        "food",
        "nightlife"
      ],
      "cuisine": "Steak and classic Berlin scene",
      "reservation": "Reserve ahead for dinner.",
      "description": "A polished social dinner if the trip wants one bigger Berlin night."
    },
    {
      "name": "Mustafa's Gemüse Kebap",
      "area": "kreuzberg",
      "tags": [
        "food"
      ],
      "cuisine": "Street-food kebab",
      "reservation": "Go off-peak.",
      "description": "A famous Berlin classic if the trip wants one iconic casual bite."
    },
    {
      "name": "Markthalle Neun food pass",
      "area": "kreuzberg",
      "tags": [
        "food",
        "culture"
      ],
      "cuisine": "Food hall / market",
      "reservation": "Flexible.",
      "description": "A strong anchor for a more casual food-driven Berlin afternoon."
    },
    {
      "name": "Rutz",
      "area": "mitte",
      "tags": [
        "luxury",
        "food"
      ],
      "cuisine": "Fine dining and wine",
      "reservation": "Book ahead.",
      "description": "A polished high-end central Berlin option."
    },
    {
      "name": "Cookies Cream",
      "area": "mitte",
      "tags": [
        "food",
        "design"
      ],
      "cuisine": "Vegetarian fine dining",
      "reservation": "Reserve ahead.",
      "description": "A very good Berlin dinner if the trip leans design-forward and modern."
    },
    {
      "name": "893 Ryōtei",
      "area": "charlottenburg",
      "tags": [
        "food",
        "nightlife",
        "design"
      ],
      "cuisine": "Japanese",
      "reservation": "Helpful.",
      "description": "A slick dinner choice for a more polished west-Berlin evening."
    },
    {
      "name": "Bonanza Coffee",
      "area": "prenzlauerberg",
      "tags": [
        "food",
        "design",
        "wellness"
      ],
      "cuisine": "Coffee",
      "reservation": "Flexible.",
      "description": "A strong cafe stop when the trip wants a softer daytime rhythm."
    },
    {
      "name": "Katz Orange",
      "area": "mitte",
      "tags": [
        "food",
        "design"
      ],
      "cuisine": "Modern European",
      "reservation": "Reserve ahead.",
      "description": "A stylish city dinner with a warmer, less formal feel."
    },
    {
      "name": "November Brasserie",
      "area": "prenzlauerberg",
      "tags": [
        "food",
        "culture"
      ],
      "cuisine": "European cafe-brasserie",
      "reservation": "Flexible.",
      "description": "A useful neighborhood-feeling meal in one of Berlin's easier daytime districts."
    },
    {
      "name": "Café Einstein Stammhaus",
      "area": "charlottenburg",
      "tags": [
        "food",
        "culture"
      ],
      "cuisine": "Classic Viennese-style cafe",
      "reservation": "Flexible.",
      "description": "A very good old-Europe cafe stop if the trip wants more classic atmosphere."
    },
    {
      "name": "Curry 36",
      "area": "kreuzberg",
      "tags": [
        "food"
      ],
      "cuisine": "Currywurst",
      "reservation": "Flexible.",
      "description": "A classic casual Berlin bite if the trip wants one iconic street-food stop."
    },
    {
      "name": "Markthalle breakfast or lunch run",
      "area": "kreuzberg",
      "tags": [
        "food",
        "culture"
      ],
      "cuisine": "Market food",
      "reservation": "Flexible.",
      "description": "A useful food-hall anchor for a Kreuzberg day."
    },
    {
      "name": "Father Carpenter",
      "area": "mitte",
      "tags": [
        "food",
        "design"
      ],
      "cuisine": "Brunch and coffee",
      "reservation": "Go strategically.",
      "description": "A strong central brunch stop if the trip wants one quality daytime meal."
    },
    {
      "name": "Ernst",
      "area": "mitte",
      "tags": [
        "luxury",
        "food"
      ],
      "cuisine": "Seasonal tasting menu",
      "reservation": "Book ahead.",
      "description": "A chef-led counter dinner for travelers who want Berlin's top end to feel intimate, serious, and ingredient-driven."
    },
    {
      "name": "Horváth",
      "area": "kreuzberg",
      "tags": [
        "luxury",
        "food",
        "culture"
      ],
      "cuisine": "Austrian-inspired fine dining",
      "reservation": "Reserve ahead.",
      "description": "A Kreuzberg splurge that feels rooted in central Europe rather than generic contemporary tasting-menu luxury."
    },
    {
      "name": "Facil",
      "area": "mitte",
      "tags": [
        "luxury",
        "food"
      ],
      "cuisine": "Contemporary fine dining",
      "reservation": "Reserve ahead.",
      "description": "A polished central Berlin special-occasion dinner with a calmer, more hotel-luxe atmosphere."
    },
    {
      "name": "Hallmann & Klee",
      "area": "kreuzberg",
      "tags": [
        "food",
        "design"
      ],
      "cuisine": "Seasonal tasting and wine",
      "reservation": "Reserve ahead.",
      "description": "A current-feeling Kreuzberg dinner if you want something thoughtful, modern, and not overly formal."
    },
    {
      "name": "Barra",
      "area": "kreuzberg",
      "tags": [
        "food",
        "nightlife"
      ],
      "cuisine": "Modern seasonal European",
      "reservation": "Helpful.",
      "description": "A very Berlin dinner room for shared plates, wine, and a stylish but not stiff night."
    },
    {
      "name": "Crackers",
      "area": "mitte",
      "tags": [
        "food",
        "nightlife",
        "design"
      ],
      "cuisine": "Modern European",
      "reservation": "Reserve ahead for dinner.",
      "description": "A polished dinner-and-drinks choice if the night should feel sleek and social."
    },
    {
      "name": "Tulus Lotrek",
      "area": "prenzlauerberg",
      "tags": [
        "luxury",
        "food"
      ],
      "cuisine": "Creative tasting menu",
      "reservation": "Reserve ahead.",
      "description": "A more intimate Berlin splurge if you want fine dining away from the most obvious central addresses."
    },
    {
      "name": "Shaniu's House of Noodles",
      "area": "mitte",
      "tags": [
        "food"
      ],
      "cuisine": "Sichuan noodles",
      "reservation": "No booking.",
      "description": "A strong casual choice when you want something spicy, fast, and genuinely worth seeking out."
    },
    {
      "name": "Kanaan",
      "area": "prenzlauerberg",
      "tags": [
        "food",
        "culture"
      ],
      "cuisine": "Levantine",
      "reservation": "Helpful.",
      "description": "A warm, lower-key neighborhood meal for mezze, grilled dishes, and a more local daytime rhythm."
    },
    {
      "name": "Brammibal's Donuts",
      "area": "mitte",
      "tags": [
        "food",
        "wellness"
      ],
      "cuisine": "Donuts and coffee",
      "reservation": "Flexible.",
      "description": "A useful coffee-and-sweets stop if the trip wants one easy modern Berlin snack break."
    },
    {
      "name": "Borchardt",
      "area": "mitte",
      "tags": [
        "food",
        "nightlife",
        "culture"
      ],
      "cuisine": "Classic brasserie",
      "reservation": "Reserve ahead for dinner.",
      "description": "A long-running Berlin scene restaurant for schnitzel, martinis, and a polished room that still feels central to the city's social mythology."
    },
    {
      "name": "Jaja",
      "area": "kreuzberg",
      "tags": [
        "food",
        "design",
        "nightlife"
      ],
      "cuisine": "Natural wine and seasonal plates",
      "reservation": "Helpful.",
      "description": "A very current Kreuzberg dinner for low-intervention wine, inventive plates, and a room that feels stylish without trying too hard."
    },
    {
      "name": "Kin Dee",
      "area": "charlottenburg",
      "tags": [
        "food",
        "design"
      ],
      "cuisine": "Contemporary Thai",
      "reservation": "Reserve ahead.",
      "description": "A polished west-Berlin restaurant for bright Thai flavors and a cleaner, more design-aware dinner than the standard neighborhood option."
    },
    {
      "name": "Konnopke's Imbiss",
      "area": "prenzlauerberg",
      "tags": [
        "food",
        "culture"
      ],
      "cuisine": "Currywurst stand",
      "reservation": "No booking.",
      "description": "An old-East Berlin institution under the U-Bahn tracks, best when the trip wants one truly classic currywurst stop instead of a trendier copy."
    },
    {
      "name": "Lode & Stijn",
      "area": "prenzlauerberg",
      "tags": [
        "food",
        "design"
      ],
      "cuisine": "Seasonal European",
      "reservation": "Helpful.",
      "description": "A neighborhood-favorite dinner room for produce-driven plates and a warmly modern style that fits Prenzlauer Berg especially well."
    },
    {
      "name": "Neni Berlin",
      "area": "charlottenburg",
      "tags": [
        "food",
        "design",
        "nightlife"
      ],
      "cuisine": "Eastern Mediterranean / sharing plates",
      "reservation": "Helpful for good timing.",
      "description": "A lively upper-floor dinner with broad city views and a more playful, social energy than Berlin's quieter tasting-menu addresses."
    }
  ]
};

export const berlinSupplements = [
  {
    "categoryLabel": "Nature",
    "name": "Tiergarten",
    "area": "mitte",
    "description": "Berlin's main central park and one of the easiest ways to soften a monument-heavy day."
  },
  {
    "categoryLabel": "Nature",
    "name": "Tempelhofer Feld",
    "area": "kreuzberg",
    "description": "A giant former airport turned public field, and one of the city's most distinctive open spaces."
  },
  {
    "categoryLabel": "Nature",
    "name": "Treptower Park",
    "area": "kreuzberg",
    "description": "A larger riverside green space if the trip wants a calmer and more spacious block."
  },
  {
    "categoryLabel": "Nature",
    "name": "Viktoriapark",
    "area": "kreuzberg",
    "description": "A hillside Kreuzberg park with a waterfall, monument, and one of the better elevated views in central Berlin."
  },
  {
    "categoryLabel": "Nature",
    "name": "Volkspark Friedrichshain",
    "area": "prenzlauerberg",
    "description": "A broad historic city park with lawns, pathways, and a more local everyday rhythm than the bigger landmarks."
  },
  {
    "categoryLabel": "Nature",
    "name": "Botanical Garden and Botanical Museum",
    "area": "charlottenburg",
    "description": "A major plant-focused outing with extensive gardens and large historic glasshouses."
  },
  {
    "categoryLabel": "Nature",
    "name": "Grunewald Forest",
    "area": "charlottenburg",
    "description": "A large western forest escape for hiking, cycling, and a more outdoorsy side of Berlin."
  },
  {
    "categoryLabel": "Nature",
    "name": "Pfaueninsel",
    "area": "charlottenburg",
    "description": "A romantic island outing with peacocks, protected landscape, and a very different pace from inner Berlin."
  },
  {
    "categoryLabel": "Nature",
    "name": "Müggelsee",
    "area": "prenzlauerberg",
    "description": "A larger lake outing if the trip wants swimming, boating, or a more summery Berlin day beyond the center."
  },
  {
    "categoryLabel": "Nature",
    "name": "Gärten der Welt",
    "area": "prenzlauerberg",
    "description": "A larger garden complex with themed landscapes that feels more like a dedicated excursion than a park stop."
  },
  {
    "categoryLabel": "Food",
    "name": "Markthalle Neun",
    "area": "kreuzberg",
    "description": "A food-hall and market stop that works especially well for a Kreuzberg day."
  },
  {
    "categoryLabel": "Food",
    "name": "Mustafa's Gemüse Kebap",
    "area": "kreuzberg",
    "description": "A famous Berlin kebab stop for one iconic casual city meal."
  },
  {
    "categoryLabel": "Food",
    "name": "Curry 36",
    "area": "kreuzberg",
    "description": "A straightforward classic if the trip wants one very Berlin fast-food stop."
  },
  {
    "categoryLabel": "Food",
    "name": "Burgermeister",
    "area": "kreuzberg",
    "description": "A long-running Berlin burger stop under the U-Bahn that still feels like part of the city's casual-food identity."
  },
  {
    "categoryLabel": "Food",
    "name": "Restaurant Tim Raue",
    "area": "mitte",
    "description": "A major Michelin-starred destination if the trip wants one very high-end Berlin meal."
  },
  {
    "categoryLabel": "Food",
    "name": "Nobelhart & Schmutzig",
    "area": "kreuzberg",
    "description": "A highly specific fine-dining experience built around local sourcing and a very Berlin point of view."
  },
  {
    "categoryLabel": "Food",
    "name": "Wen Cheng",
    "area": "mitte",
    "description": "A much-loved noodle stop known for hand-pulled biang biang noodles and long lines at peak hours."
  },
  {
    "categoryLabel": "Food",
    "name": "CODA Dessert Dining",
    "area": "kreuzberg",
    "description": "A more unusual Michelin-level tasting experience built around dessert techniques and a more experimental style."
  },
  {
    "categoryLabel": "Food",
    "name": "Kin Dee",
    "area": "charlottenburg",
    "description": "A polished Thai restaurant that fits well if the trip wants something refined but not heavy or classic German."
  },
  {
    "categoryLabel": "Food",
    "name": "Konnopke's Imbiss",
    "area": "prenzlauerberg",
    "description": "A historic currywurst stand under the elevated tracks and one of the classic old-East casual food stops."
  },
  {
    "categoryLabel": "Cultural Sight",
    "name": "Berlin Wall Memorial",
    "area": "mitte",
    "description": "One of the strongest places to understand the physical and historical reality of the divided city."
  },
  {
    "categoryLabel": "Cultural Sight",
    "name": "Berlin Cathedral",
    "area": "mitte",
    "description": "A grand historic church on Museum Island and a strong central visual anchor."
  },
  {
    "categoryLabel": "Cultural Sight",
    "name": "Topography of Terror",
    "area": "mitte",
    "description": "A major historical site documenting the Nazi regime in Berlin."
  },
  {
    "categoryLabel": "Cultural Sight",
    "name": "Brandenburg Gate",
    "area": "mitte",
    "description": "The city's best-known landmark and still one of the clearest symbols of Berlin's division and reunification."
  },
  {
    "categoryLabel": "Cultural Sight",
    "name": "Reichstag Building",
    "area": "mitte",
    "description": "Germany's parliament building, especially notable for its glass dome and central political setting."
  },
  {
    "categoryLabel": "Cultural Sight",
    "name": "East Side Gallery",
    "area": "kreuzberg",
    "description": "The best-known surviving wall stretch, now covered in murals and political art along the river."
  },
  {
    "categoryLabel": "Cultural Sight",
    "name": "Checkpoint Charlie",
    "area": "mitte",
    "description": "A heavily visited former border crossing that still matters as part of Berlin's Cold War geography."
  },
  {
    "categoryLabel": "Cultural Sight",
    "name": "Charlottenburg Palace",
    "area": "charlottenburg",
    "description": "Berlin's largest surviving palace, useful if the trip wants one more royal and garden-focused historic block."
  },
  {
    "categoryLabel": "Cultural Sight",
    "name": "Kaiser Wilhelm Memorial Church",
    "area": "charlottenburg",
    "description": "A damaged church left as a wartime memorial, with one of west Berlin's strongest visual contrasts."
  },
  {
    "categoryLabel": "Cultural Sight",
    "name": "Gendarmenmarkt",
    "area": "mitte",
    "description": "A beautiful formal square framed by major historic buildings and an easy central architectural stop."
  },
  {
    "categoryLabel": "Shopping",
    "name": "Kurfürstendamm",
    "area": "charlottenburg",
    "description": "The city's most classic polished shopping boulevard."
  },
  {
    "categoryLabel": "Shopping",
    "name": "Bikini Berlin",
    "area": "charlottenburg",
    "description": "A more design-forward west-Berlin retail stop."
  },
  {
    "categoryLabel": "Shopping",
    "name": "Hackescher Höfe",
    "area": "mitte",
    "description": "A central courtyard-and-shop complex that works well for browsing and city texture."
  },
  {
    "categoryLabel": "Shopping",
    "name": "KaDeWe",
    "area": "charlottenburg",
    "description": "Berlin's grand luxury department store, especially worth it for the food floor and classic big-city retail feel."
  },
  {
    "categoryLabel": "Shopping",
    "name": "Mall of Berlin",
    "area": "mitte",
    "description": "A huge modern mall near Potsdamer Platz if the trip wants straightforward one-stop shopping."
  },
  {
    "categoryLabel": "Shopping",
    "name": "Mauerpark Flea Market",
    "area": "prenzlauerberg",
    "description": "A Sunday market known for vintage, secondhand finds, and more chaotic Berlin browsing energy."
  },
  {
    "categoryLabel": "Shopping",
    "name": "Friedrichstraße",
    "area": "mitte",
    "description": "A central shopping and business street that mixes modern retail with cultural and historical landmarks nearby."
  },
  {
    "categoryLabel": "Shopping",
    "name": "Boxhagener Platz Flea Market",
    "area": "kreuzberg",
    "description": "A neighborhood-led market for records, books, clothes, and lower-key browsing in Friedrichshain."
  },
  {
    "categoryLabel": "Shopping",
    "name": "Kastanienallee",
    "area": "prenzlauerberg",
    "description": "A stylish street for indie fashion, design shops, and a more local retail mood than the big boulevards."
  },
  {
    "categoryLabel": "Shopping",
    "name": "Voo Store",
    "area": "kreuzberg",
    "description": "A highly curated Kreuzberg fashion and design shop if the trip leans contemporary and style-driven."
  },
  {
    "categoryLabel": "Museum",
    "name": "Pergamon Panorama",
    "area": "mitte",
    "description": "A useful Museum Island stop while the Pergamon Museum itself is closed for renovation."
  },
  {
    "categoryLabel": "Museum",
    "name": "DDR Museum",
    "area": "mitte",
    "description": "A popular museum for everyday life in former East Germany."
  },
  {
    "categoryLabel": "Museum",
    "name": "Jewish Museum Berlin",
    "area": "kreuzberg",
    "description": "A major Berlin museum with strong architecture and substantial historical exhibitions."
  },
  {
    "categoryLabel": "Museum",
    "name": "Neues Museum",
    "area": "mitte",
    "description": "One of Museum Island's biggest collection hits, best known for Egyptian antiquities and the Nefertiti bust."
  },
  {
    "categoryLabel": "Museum",
    "name": "Topography of Terror",
    "area": "mitte",
    "description": "A major documentation center on the former SS and Gestapo headquarters site."
  },
  {
    "categoryLabel": "Museum",
    "name": "Alte Nationalgalerie",
    "area": "mitte",
    "description": "A strong Museum Island museum for nineteenth-century painting, including major German Romantic works."
  },
  {
    "categoryLabel": "Museum",
    "name": "Stasi Museum",
    "area": "kreuzberg",
    "description": "A focused Cold War museum inside the preserved headquarters of East Germany's secret police."
  },
  {
    "categoryLabel": "Museum",
    "name": "Hamburger Bahnhof",
    "area": "mitte",
    "description": "Berlin's flagship contemporary-art museum, set in a former railway station with a lot of industrial presence."
  },
  {
    "categoryLabel": "Museum",
    "name": "German Museum of Technology",
    "area": "kreuzberg",
    "description": "A larger museum complex for trains, planes, engineering, and more interactive family-friendly exhibits."
  },
  {
    "categoryLabel": "Museum",
    "name": "Gemäldegalerie",
    "area": "mitte",
    "description": "A major old-masters collection for travelers who want serious European painting rather than just contemporary art."
  },
  {
    "categoryLabel": "Place to Wander",
    "name": "Landwehr Canal",
    "area": "kreuzberg",
    "description": "A very good Berlin wandering route if you want local texture over monuments."
  },
  {
    "categoryLabel": "Place to Wander",
    "name": "Kollwitzkiez",
    "area": "prenzlauerberg",
    "description": "A calmer, greener neighborhood good for drifting between cafés and side streets."
  },
  {
    "categoryLabel": "Place to Wander",
    "name": "Savignyplatz streets",
    "area": "charlottenburg",
    "description": "A more refined west-Berlin area for bookstores, cafés, and evening wandering."
  },
  {
    "categoryLabel": "Place to Wander",
    "name": "Unter den Linden",
    "area": "mitte",
    "description": "The capital's grand historic boulevard, best for linking major central sights on foot."
  },
  {
    "categoryLabel": "Place to Wander",
    "name": "Oranienstraße",
    "area": "kreuzberg",
    "description": "A louder Kreuzberg street for bars, cheap eats, and a more alternative Berlin energy."
  },
  {
    "categoryLabel": "Place to Wander",
    "name": "Simon-Dach-Straße",
    "area": "kreuzberg",
    "description": "A busy Friedrichshain nightlife-and-restaurant street that works best if the trip wants higher evening energy."
  },
  {
    "categoryLabel": "Place to Wander",
    "name": "Nikolaiviertel",
    "area": "mitte",
    "description": "A reconstructed old quarter with cobbles, church spires, and a more traditional historic-city feel."
  },
  {
    "categoryLabel": "Place to Wander",
    "name": "Bergmannkiez",
    "area": "kreuzberg",
    "description": "One of Kreuzberg's nicest strolling neighborhoods, with old buildings, cafés, and more polish than its wilder edges."
  },
  {
    "categoryLabel": "Place to Wander",
    "name": "Weserstraße",
    "area": "kreuzberg",
    "description": "A bar-lined Neukölln street that feels younger, rougher, and more late-night than central Berlin."
  },
  {
    "categoryLabel": "Place to Wander",
    "name": "Auguststraße",
    "area": "mitte",
    "description": "A useful Mitte street for galleries, design-conscious restaurants, and current-city texture."
  },
  {
    "categoryLabel": "Place to Wander",
    "name": "Akazienstraße",
    "area": "charlottenburg",
    "description": "A softer, more neighborhood-scale wandering street in Schöneberg with cafés, shops, and everyday local rhythm."
  },
  {
    "categoryLabel": "Place to Wander",
    "name": "Rosenthaler Platz",
    "area": "mitte",
    "description": "A busy people-watching node where central Berlin starts to feel younger and more nightlife-ready."
  },
  {
    "categoryLabel": "Place to Wander",
    "name": "Oberbaumbrücke",
    "area": "kreuzberg",
    "description": "A dramatic brick bridge and one of the clearest visual connections between old East and West Berlin."
  },
  {
    "categoryLabel": "Nightlife & Entertainment",
    "name": "RAW Gelände nightlife zone",
    "area": "kreuzberg",
    "description": "A stronger east-side nightlife area if the trip wants one more alternative Berlin night."
  },
  {
    "categoryLabel": "Nightlife & Entertainment",
    "name": "Clärchens Ballhaus",
    "area": "mitte",
    "description": "A long-running dance hall and entertainment stop for a more classic Berlin night."
  },
  {
    "categoryLabel": "Nightlife & Entertainment",
    "name": "Berlin Philharmonie concert night",
    "area": "mitte",
    "description": "A refined cultural-night choice if bars and clubs are not the goal."
  },
  {
    "categoryLabel": "Nightlife & Entertainment",
    "name": "Berghain",
    "area": "kreuzberg",
    "description": "Berlin's most famous techno club, more important as a cultural symbol than as an easy night out."
  },
  {
    "categoryLabel": "Nightlife & Entertainment",
    "name": "Friedrichstadt-Palast",
    "area": "mitte",
    "description": "A major revue-theater night if you want spectacle, stagecraft, and something less club-focused."
  },
  {
    "categoryLabel": "Nightlife & Entertainment",
    "name": "Watergate",
    "area": "kreuzberg",
    "description": "A longtime riverfront electronic club known for dance music and sunrise views over the Spree."
  },
  {
    "categoryLabel": "Nightlife & Entertainment",
    "name": "KitKatClub",
    "area": "kreuzberg",
    "description": "A famous and deliberately uninhibited Berlin club that only makes sense for some travelers and not at all for others."
  },
  {
    "categoryLabel": "Nightlife & Entertainment",
    "name": "Tresor",
    "area": "mitte",
    "description": "A foundational Berlin techno venue with an industrial, bunker-like atmosphere."
  },
  {
    "categoryLabel": "Nightlife & Entertainment",
    "name": "Sisyphos",
    "area": "kreuzberg",
    "description": "A sprawling weekend-only club complex that feels more like a party village than a standard venue."
  },
  {
    "categoryLabel": "Nightlife & Entertainment",
    "name": "SO36",
    "area": "kreuzberg",
    "description": "A historic Kreuzberg venue with punk roots and a stronger subcultural edge than the polished music halls."
  },
  {
    "categoryLabel": "Nightlife & Entertainment",
    "name": "Kater Blau",
    "area": "kreuzberg",
    "description": "A colorful river-adjacent club known for a looser, more playful atmosphere than Berlin's harsher techno temples."
  },
  {
    "categoryLabel": "Nightlife & Entertainment",
    "name": "YAAM",
    "area": "kreuzberg",
    "description": "A relaxed riverside culture spot with music, food, and a beach-bar feel rather than a standard club night."
  },
  {
    "categoryLabel": "Amusement & Activities",
    "name": "Spree river boat tour",
    "area": "mitte",
    "description": "A useful city-overview activity if you want Berlin's geography to make more sense early on."
  },
  {
    "categoryLabel": "Amusement & Activities",
    "name": "Mauerpark Sunday karaoke",
    "area": "prenzlauerberg",
    "description": "A more playful Berlin neighborhood activity if your dates line up with Sunday."
  },
  {
    "categoryLabel": "Amusement & Activities",
    "name": "Teufelsberg visit",
    "area": "charlottenburg",
    "description": "A larger outing-style activity combining graffiti, history, and wide city views."
  },
  {
    "categoryLabel": "Amusement & Activities",
    "name": "Berlin TV Tower",
    "area": "mitte",
    "description": "The easiest high city view in the center, especially useful early in the trip for getting oriented."
  },
  {
    "categoryLabel": "Amusement & Activities",
    "name": "Berliner Unterwelten tour",
    "area": "mitte",
    "description": "A bunker-and-underground-history tour that adds a different layer to Berlin's wartime and Cold War story."
  },
  {
    "categoryLabel": "Amusement & Activities",
    "name": "Liquidrom",
    "area": "mitte",
    "description": "A calmer Berlin wellness activity built around warm saltwater floating and a more design-led spa mood."
  },
  {
    "categoryLabel": "Amusement & Activities",
    "name": "Zoo Berlin",
    "area": "charlottenburg",
    "description": "A classic big-city zoo if the trip wants a longer, broader family-friendly attraction."
  },
  {
    "categoryLabel": "Amusement & Activities",
    "name": "Vabali Spa",
    "area": "charlottenburg",
    "description": "A larger spa complex that works especially well if the trip wants one true recovery block."
  },
  {
    "categoryLabel": "Amusement & Activities",
    "name": "Trabi Safari",
    "area": "mitte",
    "description": "A playful Berlin-specific tour in vintage East German cars, more fun than elegant but very memorable."
  },
  {
    "categoryLabel": "Amusement & Activities",
    "name": "Tropical Islands day trip",
    "area": "charlottenburg",
    "description": "A bigger out-of-city water-park excursion that only makes sense if the trip wants a full attraction day."
  },
  {
    "categoryLabel": "Amusement & Activities",
    "name": "Illuseum Berlin",
    "area": "mitte",
    "description": "A lighter interactive attraction of optical illusions and photo-friendly rooms in the central core."
  },
  {
    "categoryLabel": "Other",
    "name": "Memorial to the Murdered Jews of Europe",
    "area": "mitte",
    "description": "A powerful memorial site that is central to understanding Berlin's historical landscape."
  },
  {
    "categoryLabel": "Other",
    "name": "Tempelhof Airport history context",
    "area": "kreuzberg",
    "description": "A layer of Berlin history that can add meaning to a Tempelhofer Feld day."
  },
  {
    "categoryLabel": "Other",
    "name": "Potsdamer Platz modern-city block",
    "area": "mitte",
    "description": "A more contemporary Berlin stop that sits between architecture, movement, and city texture."
  },
  {
    "categoryLabel": "Other",
    "name": "Tempelhof Airport tour",
    "area": "kreuzberg",
    "description": "A guided look inside the monumental airport building that deepens the meaning of a Tempelhofer Feld visit."
  },
  {
    "categoryLabel": "Other",
    "name": "Markthalle Neun Street Food Thursday",
    "area": "kreuzberg",
    "description": "A weekly event format that turns the market hall into one of the city's better evening food hangs."
  },
  {
    "categoryLabel": "Other",
    "name": "Badeschiff",
    "area": "kreuzberg",
    "description": "A floating riverside pool that feels more like a Berlin summer ritual than a standard attraction."
  },
  {
    "categoryLabel": "Other",
    "name": "Karl-Marx-Allee",
    "area": "mitte",
    "description": "A monumental East German boulevard that is best understood as an architecture-and-ideology walk."
  },
  {
    "categoryLabel": "Other",
    "name": "Futurium",
    "area": "mitte",
    "description": "A free interactive museum-like space about technology, environment, and possible futures."
  },
  {
    "categoryLabel": "Other",
    "name": "Olympiastadion",
    "area": "charlottenburg",
    "description": "A huge historic stadium that works well for architecture, sports history, or a concert-night add-on."
  },
  {
    "categoryLabel": "Other",
    "name": "Molecule Man",
    "area": "kreuzberg",
    "description": "A striking river sculpture that works as a quick visual landmark more than a destination on its own."
  },
  {
    "categoryLabel": "Other",
    "name": "Sony Center",
    "area": "mitte",
    "description": "A modern Potsdamer Platz architecture stop with a still-impressive roof canopy and big-city scale."
  },
  {
    "categoryLabel": "Other",
    "name": "Urban Nation",
    "area": "charlottenburg",
    "description": "A street-art museum that fits especially well if the trip wants more of Berlin's visual and contemporary culture."
  }
];
