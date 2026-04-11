// Prague guide data

export const pragueGuide = {
  "label": "Prague",
  "country": "Czech Republic",
  "currency": "Czech crowns are standard, but cards work almost everywhere. Keep some cash for small cafes and Old Town narrow lanes.",
  "transferNote": "Prague's compact historic core means early mornings matter far more than late nights or ambitious itineraries.",
  "areaAdjacency": {
    "oldtown": [
      "malastrana",
      "josefov",
      "vinohrady"
    ],
    "malastrana": [
      "oldtown",
      "petrin",
      "josefov"
    ],
    "petrin": [
      "malastrana",
      "oldtown"
    ],
    "josefov": [
      "oldtown",
      "vinohrady",
      "zizkov"
    ],
    "vinohrady": [
      "oldtown",
      "josefov",
      "zizkov"
    ],
    "zizkov": [
      "josefov",
      "vinohrady",
      "karlín"
    ],
    "karlin": [
      "zizkov",
      "josefov"
    ]
  },
  "hotelAreas": {
    "oldtown": {
      "label": "Old Town",
      "mood": "historic and atmospheric",
      "strengths": [
        "culture",
        "walkability",
        "food"
      ]
    },
    "malastrana": {
      "label": "Malá Strana (Lesser Town)",
      "mood": "romantic and quiet",
      "strengths": [
        "culture",
        "luxury",
        "scenery"
      ]
    },
    "vinohrady": {
      "label": "Vinohrady",
      "mood": "civilized and local",
      "strengths": [
        "design",
        "food",
        "wellness"
      ]
    },
    "petrin": {
      "label": "Petřín / Castle Area",
      "mood": "elevated and scenic",
      "strengths": [
        "culture",
        "nature",
        "luxury"
      ]
    }
  },
  "hotels": {
    "luxury": [
      {
        "name": "Prague Marriott Hotel",
        "area": "oldtown",
        "vibe": "Central, polished, and strong for a refined Prague stay.",
        "bestFor": [
          "luxury",
          "food",
          "transit"
        ]
      },
      {
        "name": "Four Seasons Prague",
        "area": "malastrana",
        "vibe": "Serene and romantic if atmosphere matters as much as location.",
        "bestFor": [
          "luxury",
          "culture",
          "romance"
        ]
      },
      {
        "name": "Mandarin Oriental Prague",
        "area": "malastrana",
        "vibe": "Intimate luxury in a converted monastery with a spa and fine dining.",
        "bestFor": [
          "luxury",
          "wellness",
          "culture"
        ]
      },
      {
        "name": "Aria Hotel Prague",
        "area": "malastrana",
        "vibe": "A romantic boutique luxury stay with a quieter castle-side mood.",
        "bestFor": [
          "luxury",
          "romance",
          "culture"
        ]
      }
    ],
    "premium": [
      {
        "name": "Hotel U Pavouka (At the Spider)",
        "area": "malastrana",
        "vibe": "Design-forward boutique near the castle with character and charm.",
        "bestFor": [
          "design",
          "culture",
          "luxury"
        ]
      },
      {
        "name": "The Celeste Hotel",
        "area": "vinohrady",
        "vibe": "Stylish and calm in one of Prague's most vibrant neighborhoods.",
        "bestFor": [
          "design",
          "food",
          "nightlife"
        ]
      },
      {
        "name": "Pod Věží (Under the Tower)",
        "area": "malastrana",
        "vibe": "Historic charm steps from Charles Bridge with character and authenticity.",
        "bestFor": [
          "culture",
          "walkability",
          "romance"
        ]
      },
      {
        "name": "Hotel Josef",
        "area": "oldtown",
        "vibe": "Clean-lined and contemporary with very easy central Prague access.",
        "bestFor": [
          "design",
          "food",
          "walkability"
        ]
      }
    ],
    "smart": [
      {
        "name": "Hotel Hastal",
        "area": "oldtown",
        "vibe": "Central, good value, and perfectly placed for a first Prague trip.",
        "bestFor": [
          "culture",
          "transit",
          "value"
        ]
      },
      {
        "name": "Hotel Clement",
        "area": "oldtown",
        "vibe": "Simple, reliable, and excellently located for exploring on foot.",
        "bestFor": [
          "culture",
          "food",
          "value"
        ]
      },
      {
        "name": "Hotel Alquimia",
        "area": "malastrana",
        "vibe": "Charming boutique property with the feel of a small old palace.",
        "bestFor": [
          "culture",
          "walkability",
          "value"
        ]
      },
      {
        "name": "Miss Sophie's Downtown",
        "area": "oldtown",
        "vibe": "A smart, straightforward value base if you want clean design and easy logistics.",
        "bestFor": [
          "value",
          "design",
          "transit"
        ]
      }
    ]
  },
  "cantMiss": [
    {
      "name": "Charles Bridge at dawn",
      "area": "malastrana",
      "tags": [
        "culture"
      ],
      "description": "Walk this iconic 14th-century bridge before the crowds arrive for the full magical effect."
    },
    {
      "name": "Prague Castle complex",
      "area": "petrin",
      "tags": [
        "culture"
      ],
      "description": "Sprawl through the world's largest ancient castle with courtyards, palaces, and viewpoints that anchor the entire city experience."
    },
    {
      "name": "Old Town Square and Astronomical Clock",
      "area": "oldtown",
      "tags": [
        "culture",
        "design"
      ],
      "description": "A stunning preserved heart of medieval Prague with baroque architecture and a 600-year-old mechanical marvel."
    },
    {
      "name": "Gion-like wandering in Lesser Town",
      "area": "malastrana",
      "tags": [
        "design",
        "wellness"
      ],
      "description": "Get lost in steep, curving cobblestone streets and pastel baroque palaces for the most romantic Prague experience."
    },
    {
      "name": "St. Vitus Cathedral interior",
      "area": "petrin",
      "tags": [
        "culture",
        "design"
      ],
      "description": "Awe-inspiring Gothic spires and an Alfons Mucha stained-glass window inside the castle walls."
    },
    {
      "name": "Jewish Quarter deep dive",
      "area": "josefov",
      "tags": [
        "culture"
      ],
      "description": "Multiple historically significant, beautifully preserved synagogues and a deeply moving cemetery walkthrough."
    },
    {
      "name": "One major beer hall night",
      "area": "oldtown",
      "tags": [
        "nightlife",
        "food",
        "culture"
      ],
      "description": "A long wooden table, fresh Pilsner Urquell, and hearty Czech food is a core Prague memory."
    },
    {
      "name": "High-altitude viewpoint (Petřín or Vyšehrad)",
      "area": "petrin",
      "tags": [
        "wellness",
        "design"
      ],
      "description": "Prague's red roofs and geometry from above is genuinely stunning."
    },
    {
      "name": "Vyšehrad ramparts walk",
      "area": "oldtown",
      "tags": [
        "culture",
        "wellness"
      ],
      "description": "Prague's \"other\" castle with quieter, less-crowded clifftop walks and spectacular river views."
    },
    {
      "name": "A tea house or coffee pause",
      "area": "oldtown",
      "tags": [
        "wellness",
        "design"
      ],
      "description": "Prague deserves slowness—a single quiet café moment keeps the city from turning into a checklist."
    },
    {
      "name": "Letná Park beer gardens",
      "area": "vinohrady",
      "tags": [
        "nature",
        "food"
      ],
      "description": "Dozens of locals sipping cold Pilsner while staring at sweeping views of bridges and the river."
    },
    {
      "name": "National Museum",
      "area": "oldtown",
      "tags": [
        "museum",
        "culture"
      ],
      "description": "Czech history and natural sciences in a massive neo-Renaissance building at the top of Wenceslas Square."
    },
    {
      "name": "Prague Astronomical Clock tick",
      "area": "oldtown",
      "tags": [
        "culture",
        "design"
      ],
      "description": "Join the crowd at the top of the hour to watch the 600-year-old mechanical Apostle parade."
    },
    {
      "name": "Dancing House (Frank Gehry)",
      "area": "oldtown",
      "tags": [
        "design"
      ],
      "description": "A striking deconstructivist building that seems to bend and dance among traditional 19th-century architecture."
    },
    {
      "name": "Strahov Monastery Library",
      "area": "malastrana",
      "tags": [
        "culture",
        "design"
      ],
      "description": "Two of the most spectacular, heavily frescoed, floor-to-ceiling baroque library halls in the world."
    },
    {
      "name": "Clementinum baroque library and tower",
      "area": "oldtown",
      "tags": [
        "culture",
        "design"
      ],
      "description": "One of Prague's most beautiful baroque interiors paired with a tower climb that lays out the old-city rooftops in full."
    },
    {
      "name": "Naplávka riverfront rhythm",
      "area": "oldtown",
      "tags": [
        "food",
        "wellness",
        "nightlife"
      ],
      "description": "The Vltava embankment at its best: drinks, boats, market stalls, and a more lived-in Prague mood than the postcard core."
    },
    {
      "name": "Rudolfinum and concert tradition",
      "area": "josefov",
      "tags": [
        "culture",
        "nightlife",
        "design"
      ],
      "description": "A grand neo-Renaissance concert hall that gives Prague one of its most elegant evening rituals."
    },
    {
      "name": "Karlín's cafe-and-bistro streets",
      "area": "karlin",
      "tags": [
        "food",
        "design",
        "wellness"
      ],
      "description": "A current-feeling neighborhood of bakeries, wine bars, and calmer local energy when you want Prague beyond the historic core."
    },
    {
      "name": "Municipal House and Powder Gate axis",
      "area": "oldtown",
      "tags": [
        "culture",
        "design"
      ],
      "description": "A rich Art Nouveau and Gothic pairing that shows Prague's decorative side especially well."
    }
  ],
  "activities": [
    {
      "name": "Charles Bridge dawn walk and St. Vitus climb",
      "area": "malastrana",
      "tags": [
        "culture",
        "design"
      ],
      "timing": "morning",
      "description": "Get to Charles Bridge at 6 AM, walk it empty, then climb the castle steps for quiet morning light."
    },
    {
      "name": "Prague Castle courtyards and gardens",
      "area": "petrin",
      "tags": [
        "culture",
        "wellness"
      ],
      "timing": "morning",
      "description": "Hours of unhurried wandering through the world's largest ancient castle complex."
    },
    {
      "name": "Old Town Square and Clock Tower experience",
      "area": "oldtown",
      "tags": [
        "culture",
        "design"
      ],
      "timing": "morning",
      "description": "Arrive before the crowds to appreciate the square's stunning architecture before the day gets thick."
    },
    {
      "name": "St. Vitus Cathedral interior beauty",
      "area": "petrin",
      "tags": [
        "culture",
        "design"
      ],
      "timing": "morning",
      "description": "The gothic spires and Mucha window are genuinely awe-inspiring in quiet morning light."
    },
    {
      "name": "Vyšehrad rampart walk",
      "area": "oldtown",
      "tags": [
        "culture",
        "wellness"
      ],
      "timing": "afternoon",
      "description": "A much-less-crowded alternative to Prague Castle, with equally spectacular views and atmospheric cemetery walk."
    },
    {
      "name": "Jewish Quarter museum and cemetery circuit",
      "area": "josefov",
      "tags": [
        "culture",
        "museum"
      ],
      "timing": "afternoon",
      "description": "Deeply moving history across multiple synagogues and the incredibly poignant Old Jewish Cemetery."
    },
    {
      "name": "Lesser Town (Malá Strana) romantic wander",
      "area": "malastrana",
      "tags": [
        "design",
        "wellness"
      ],
      "timing": "afternoon",
      "description": "Winding steep cobblestone streets, baroque palaces, and hidden gardens for the most photogenic Prague experience."
    },
    {
      "name": "Petřín Lookout Tower climb",
      "area": "petrin",
      "tags": [
        "wellness",
        "design"
      ],
      "timing": "afternoon",
      "description": "Climb Prague's version of the Eiffel Tower for 360-degree views of the entire city."
    },
    {
      "name": "Letná Park beer garden evening",
      "area": "vinohrady",
      "tags": [
        "nature",
        "food",
        "nightlife"
      ],
      "timing": "evening",
      "description": "Watch the sun set over Charles Bridge from a massive beer garden full of smiling locals."
    },
    {
      "name": "U Fleků brewery experience",
      "area": "oldtown",
      "tags": [
        "food",
        "culture",
        "nightlife"
      ],
      "timing": "evening",
      "description": "Prague's oldest brewery (established 1499) with dark lager, hearty goulash, and centuries of local energy."
    },
    {
      "name": "Wenceslas Square stroll",
      "area": "oldtown",
      "tags": [
        "design"
      ],
      "timing": "evening",
      "description": "Walk the half-mile historic boulevard that has hosted major Czech protests and celebrations."
    },
    {
      "name": "Strahov Monastery Library awe",
      "area": "malastrana",
      "tags": [
        "culture",
        "design"
      ],
      "timing": "afternoon",
      "description": "Two of the most beautifully frescoed baroque libraries in the world—a jaw-dropping visual stop."
    },
    {
      "name": "Nové Město (New Town) beer and dinner",
      "area": "vinohrady",
      "tags": [
        "nightlife",
        "food"
      ],
      "timing": "evening",
      "description": "Vinohrady's tree-lined boulevards and Art Deco buildings transform at night with excellent restaurants and bars."
    },
    {
      "name": "Ghosts and Legends walking tour",
      "area": "oldtown",
      "tags": [
        "culture",
        "nightlife"
      ],
      "timing": "evening",
      "description": "Follow a lantern-carrying guide through dark empty alleys hearing tales of alchemy, executions, and the Golem."
    },
    {
      "name": "Kamepa Island peaceful wander",
      "area": "malastrana",
      "tags": [
        "nature",
        "wellness"
      ],
      "timing": "afternoon",
      "description": "Escape to the peaceful tree-lined island paths separated from the mainland by a narrow artificial canal."
    },
    {
      "name": "Nový Svět charming escape",
      "area": "petrin",
      "tags": [
        "design",
        "wellness"
      ],
      "timing": "afternoon",
      "description": "An impossibly quaint winding neighborhood of small historic workers' cottages completely silent and out of time."
    },
    {
      "name": "Vinohrady Art Deco apartment tour",
      "area": "vinohrady",
      "tags": [
        "design",
        "culture"
      ],
      "timing": "afternoon",
      "description": "Walk wide leafy avenues lined with stunning Art Deco apartment buildings, chic cafes, and expat-friendly bars."
    },
    {
      "name": "Jilská Street medieval maze navigate",
      "area": "oldtown",
      "tags": [
        "design",
        "wellness"
      ],
      "timing": "afternoon",
      "description": "Try to keep your bearings while navigating the famously confusing medieval labyrinth of alleys in Old Town."
    },
    {
      "name": "Riegrovy Sady sunset watch",
      "area": "vinohrady",
      "tags": [
        "nature",
        "wellness"
      ],
      "timing": "evening",
      "description": "Join hundreds of locals on a sloping grassy hill watching the sun set directly behind Prague Castle skyline."
    },
    {
      "name": "Holešovice gallery and cafe hipster block",
      "area": "vinohrady",
      "tags": [
        "design",
        "food"
      ],
      "timing": "afternoon",
      "description": "Explore the transition of a raw industrial district into a hip artistic neighborhood with galleries and cool cafes."
    },
    {
      "name": "National Museum history deep dive",
      "area": "oldtown",
      "tags": [
        "museum",
        "culture"
      ],
      "timing": "afternoon",
      "description": "Czech history and natural sciences in a grand neo-Renaissance setting—especially good if you want real context."
    },
    {
      "name": "Prague City Museum paper model visit",
      "area": "oldtown",
      "tags": [
        "museum",
        "design"
      ],
      "timing": "afternoon",
      "description": "Antonín Langweil's astonishing, incredibly detailed 19th-century 3D paper model of all Prague—genuinely mesmerizing."
    },
    {
      "name": "Mucha Museum Art Nouveau",
      "area": "oldtown",
      "tags": [
        "museum",
        "design"
      ],
      "timing": "afternoon",
      "description": "Alfons Mucha's flowing lines, beautiful women, and theatrical posters in the home of Czech Art Nouveau."
    },
    {
      "name": "DOX Centre contemporary art",
      "area": "vinohrady",
      "tags": [
        "museum",
        "design"
      ],
      "timing": "afternoon",
      "description": "A sleek white contemporary gallery with a massive wooden airship constructed on its roof."
    },
    {
      "name": "Lobkowicz Palace private collection tour",
      "area": "petrin",
      "tags": [
        "museum",
        "culture"
      ],
      "timing": "morning",
      "description": "Use the excellent audio guide to tour a significant family art collection including original Beethoven manuscripts."
    },
    {
      "name": "Clementinum library and Old Town tower climb",
      "area": "oldtown",
      "tags": [
        "culture",
        "design"
      ],
      "timing": "afternoon",
      "description": "A very high-value central stop for baroque grandeur indoors and tiled-rooftop views from above."
    },
    {
      "name": "Naplávka wine bars and river drift",
      "area": "oldtown",
      "tags": [
        "food",
        "nightlife",
        "wellness"
      ],
      "timing": "evening",
      "description": "Best when the day wants a looser Prague finish of river air, natural wine, and a more local social scene."
    },
    {
      "name": "Karlín bakery and bistro circuit",
      "area": "karlin",
      "tags": [
        "food",
        "design"
      ],
      "timing": "afternoon",
      "description": "A strong neighborhood-first block for seeing the city's newer cafe-and-restaurant energy without Old Town pressure."
    },
    {
      "name": "Rudolfinum concert or elegant evening",
      "area": "josefov",
      "tags": [
        "culture",
        "nightlife"
      ],
      "timing": "evening",
      "description": "A refined Prague night if you want music, chandeliers, and a more formal sense of occasion than another beer hall."
    },
    {
      "name": "Letná overlook and bridge-view sweep",
      "area": "vinohrady",
      "tags": [
        "wellness",
        "design"
      ],
      "timing": "afternoon",
      "description": "A broad, cinematic walk for seeing the river bends and red roofs line up across central Prague."
    }
  ],
  "food": [
    {
      "name": "Lokál Dlouhááá",
      "area": "oldtown",
      "tags": [
        "food",
        "culture",
        "nightlife"
      ],
      "cuisine": "Czech/Pub",
      "reservation": "Flexible.",
      "description": "Incredibly fresh tank-poured Pilsner Urquell alongside classic unpretentious Czech pub food like fried cheese and schnitzel in a massive, lively beer hall."
    },
    {
      "name": "U Fleků",
      "area": "oldtown",
      "tags": [
        "food",
        "culture",
        "nightlife"
      ],
      "cuisine": "Traditional Czech/Brewery",
      "reservation": "Flexible.",
      "description": "Sit at long wooden tables to drink the house-brewed dark lager and eat hearty goulash in Prague's oldest, most traditional (and touristy) brewery."
    },
    {
      "name": "Kantýna",
      "area": "oldtown",
      "tags": [
        "food",
        "culture"
      ],
      "cuisine": "Czech/Steakhouse",
      "reservation": "Helpful.",
      "description": "Stand at marble tables in a beautifully restored former bank to feast on premium dry-aged beef, bone marrow, and fresh carpaccio."
    },
    {
      "name": "Cafe Savoy",
      "area": "malastrana",
      "tags": [
        "food",
        "wellness"
      ],
      "cuisine": "Cafe/Austro-Hungarian",
      "reservation": "Walk-in or reserve.",
      "description": "Indulge in a decadent, elegant breakfast or rich pastries under a stunning ornate neo-Renaissance ceiling."
    },
    {
      "name": "Eska",
      "area": "vinohrady",
      "tags": [
        "food",
        "design"
      ],
      "cuisine": "Modern Czech/Bakery",
      "reservation": "Reserve ahead.",
      "description": "Taste highly inventive, Michelin-Bib-Gourmand-awarded modern Czech cuisine and incredible freshly baked sourdough."
    },
    {
      "name": "La Degustation Bohême Bourgeoise",
      "area": "oldtown",
      "tags": [
        "luxury",
        "food"
      ],
      "cuisine": "Modern Czech Fine Dining",
      "reservation": "Book well in advance.",
      "description": "A spectacular Michelin-starred tasting journey that elevates late-19th-century Czech recipes to modern fine-dining perfection."
    },
    {
      "name": "Field",
      "area": "vinohrady",
      "tags": [
        "luxury",
        "food"
      ],
      "cuisine": "Modern European Fine Dining",
      "reservation": "Reserve ahead.",
      "description": "A fiercely seasonal Michelin-starred menu focusing on raw, farm-to-table ingredients with striking, minimalist plating."
    },
    {
      "name": "Naše Maso",
      "area": "oldtown",
      "tags": [
        "food"
      ],
      "cuisine": "Butcher/Burgers/Meat",
      "reservation": "Go early.",
      "description": "Wait in line at this legendary tiny butcher shop for arguably the best Wagyu burger, meatloaf, and freshly pulled beer in the city."
    },
    {
      "name": "Kuchyň",
      "area": "petrin",
      "tags": [
        "food",
        "culture"
      ],
      "cuisine": "Traditional Czech",
      "reservation": "Walk-in.",
      "description": "Lift the lids of simmering pots on the stove to choose your meal in this castle-adjacent restaurant with traditional braised meats and unbeatable views."
    },
    {
      "name": "Čestr",
      "area": "oldtown",
      "tags": [
        "luxury",
        "food"
      ],
      "cuisine": "Steakhouse/Czech",
      "reservation": "Reserve ahead.",
      "description": "Enjoy massive expertly grilled cuts of Czech Fleckvieh beef and bottomless sides in a sleek, modern, meat-centric dining room."
    },
    {
      "name": "U Medvídků",
      "area": "josephov",
      "tags": [
        "food",
        "culture",
        "nightlife"
      ],
      "cuisine": "Czech/Brewery",
      "reservation": "Flexible.",
      "description": "Try X-Beer 33, one of the strongest beers in the world, while eating massive pork knuckles in a historic, sprawling brewery."
    },
    {
      "name": "Výtopna Railway Restaurant",
      "area": "oldtown",
      "tags": [
        "food",
        "design"
      ],
      "cuisine": "Czech/Pub",
      "reservation": "Helpful.",
      "description": "Watch in delight as your cold beers and hearty pub meals are delivered by a vast network of model trains running overhead."
    },
    {
      "name": "Cafe Louvre",
      "area": "oldtown",
      "tags": [
        "food",
        "culture",
        "wellness"
      ],
      "cuisine": "Cafe/Czech",
      "reservation": "Walk-in.",
      "description": "Step back into 1902 to sip thick hot chocolate and eat traditional Czech dumplings where Kafka and Einstein used to hang out."
    },
    {
      "name": "Manifesto Market",
      "area": "vinohrady",
      "tags": [
        "food",
        "design"
      ],
      "cuisine": "International Food Hall",
      "reservation": "Flexible.",
      "description": "Graze on international street food and drink craft cocktails at a highly trendy, cashless, open-air food market built from shipping containers."
    },
    {
      "name": "Mincovna",
      "area": "oldtown",
      "tags": [
        "food"
      ],
      "cuisine": "Modern Czech",
      "reservation": "Helpful for dinner.",
      "description": "Dine on elevated, high-quality traditional Czech dishes directly on Old Town Square without falling into tourist-trap quality."
    },
    {
      "name": "Sisters Bistro",
      "area": "oldtown",
      "tags": [
        "food"
      ],
      "cuisine": "Czech Chlebíčky/Sandwiches",
      "reservation": "Go early.",
      "description": "Grab an incredibly fresh, modern take on the chlebíček—the iconic, beautifully garnished Czech open-faced sandwich."
    },
    {
      "name": "U Kroka",
      "area": "oldtown",
      "tags": [
        "food",
        "culture"
      ],
      "cuisine": "Traditional Czech",
      "reservation": "Walk-in.",
      "description": "A short walk from Vyšehrad to eat incredibly tender roasted duck and cabbage at a cozy, deeply beloved neighborhood institution."
    },
    {
      "name": "Cukrář Skála",
      "area": "oldtown",
      "tags": [
        "food",
        "wellness"
      ],
      "cuisine": "Bakery/Dessert",
      "reservation": "Go while supplies last.",
      "description": "Satisfy your sweet tooth with flawless modern interpretations of classic Czech desserts like the cream-filled kremrole."
    },
    {
      "name": "V Kolkovně",
      "area": "oldtown",
      "tags": [
        "food",
        "culture",
        "nightlife"
      ],
      "cuisine": "Czech/Pub",
      "reservation": "Helpful.",
      "description": "Enjoy massive portions of roasted meats and perfect beer in the very first restaurant to receive the official Pilsner Urquell Original Restaurant certification."
    },
    {
      "name": "Kampa Park",
      "area": "malastrana",
      "tags": [
        "luxury",
        "food"
      ],
      "cuisine": "Seafood/Fine Dining",
      "reservation": "Reserve well ahead.",
      "description": "Dress up for an ultra-romantic fine-dining seafood dinner on an illuminated terrace beside the rushing Vltava water."
    },
    {
      "name": "Cafe Imperial",
      "area": "oldtown",
      "tags": [
        "food",
        "culture",
        "design"
      ],
      "cuisine": "Grand cafe / Czech classics",
      "reservation": "Helpful at peak hours.",
      "description": "A mosaic-walled Prague classic for breakfast, pastries, and polished Czech comfort dishes in one of the city's prettiest dining rooms."
    },
    {
      "name": "Mlýnec",
      "area": "malastrana",
      "tags": [
        "luxury",
        "food",
        "design"
      ],
      "cuisine": "Modern Czech fine dining",
      "reservation": "Reserve ahead.",
      "description": "A refined bridge-side splurge where the tasting menus and Charles Bridge views make the whole evening feel unmistakably Prague."
    },
    {
      "name": "Vinohradský Parlament",
      "area": "vinohrady",
      "tags": [
        "food",
        "culture",
        "nightlife"
      ],
      "cuisine": "Czech brasserie",
      "reservation": "Helpful for dinner.",
      "description": "A lively modern Czech brasserie with excellent beer, broad appeal, and the kind of neighborhood energy that makes Vinohrady easy to love."
    },
    {
      "name": "Kro Kitchen",
      "area": "karlin",
      "tags": [
        "food"
      ],
      "cuisine": "Rotisserie chicken and sides",
      "reservation": "Flexible.",
      "description": "A focused, high-value neighborhood favorite for beautifully roasted chicken, sharp sauces, and a very easy casual Prague lunch."
    },
    {
      "name": "The Eatery",
      "area": "karlin",
      "tags": [
        "food",
        "design"
      ],
      "cuisine": "Modern Czech",
      "reservation": "Reserve ahead.",
      "description": "A current Prague dining room for seasonal Czech cooking that feels chef-driven without turning stiff or ceremonial."
    },
    {
      "name": "Aromi",
      "area": "vinohrady",
      "tags": [
        "food",
        "luxury"
      ],
      "cuisine": "Italian seafood and pasta",
      "reservation": "Helpful.",
      "description": "A polished Vinohrady standby for raw bar dishes, elegant pasta, and a smoother dinner pace when Czech food is not the move."
    }
  ]
};

export const pragueSupplements = [
  {
    "categoryLabel": "Nature",
    "name": "Petřín Park",
    "area": "petrin",
    "description": "A large romantic park with green spaces, walking paths, and peaceful garden retreats away from the old city bustle."
  },
  {
    "categoryLabel": "Nature",
    "name": "Riegrovy Sady",
    "area": "vinohrady",
    "description": "A sloping grassy hill perfect for watching the sunset over Prague Castle with locals and a picnic."
  },
  {
    "categoryLabel": "Nature",
    "name": "Smetana Park",
    "area": "oldtown",
    "description": "A peaceful riverside path along the Vltava with benches, trees, and views of bridges and castle spires."
  },
  {
    "categoryLabel": "Nature",
    "name": "Straka Academy Gardens",
    "area": "malastrana",
    "description": "Hidden behind a palace is one of Prague's quietest and most beautiful formal gardens."
  },
  {
    "categoryLabel": "Nature",
    "name": "Vojanovy Sady",
    "area": "malastrana",
    "description": "A tiny secret baroque garden tucked into Lesser Town with peacocks, ancient trees, and zero tourists."
  },
  {
    "categoryLabel": "Nature",
    "name": "Divoká Šárka Nature Reserve",
    "area": "vinohrady",
    "description": "A gorge-like nature reserve north of the center with canyon walls, streams, and serious hiking trails."
  },
  {
    "categoryLabel": "Nature",
    "name": "Prague Botanical Garden",
    "area": "petrin",
    "description": "A sprawling collection of plant species from around the world spread across the hillside."
  },
  {
    "categoryLabel": "Nature",
    "name": "Střelecký Island",
    "area": "oldtown",
    "description": "A quiet river island with poplar trees, walking paths, and views back to the old-city skyline."
  },
  {
    "categoryLabel": "Nature",
    "name": "Franciscan Garden",
    "area": "oldtown",
    "tags": [
      "wellness"
    ],
    "description": "A serene baroque garden in the middle of Wenceslas Square—a secret quiet reset from the city bustle."
  },
  {
    "categoryLabel": "Nature",
    "name": "Troja Park and Vineyard",
    "area": "vinohrady",
    "description": "Prague's small vineyard district with parks, terraces, and wine stops in a more bucolic setting."
  },
  {
    "categoryLabel": "Food",
    "name": "Lokál Dlouhááá",
    "area": "oldtown",
    "tags": [
      "food"
    ],
    "description": "Fresh tank-poured Pilsner Urquell with classic unpretentious Czech pub food like fried cheese and hearty schnitzel."
  },
  {
    "categoryLabel": "Food",
    "name": "U Fleků",
    "area": "oldtown",
    "tags": [
      "food",
      "culture"
    ],
    "description": "Prague's oldest brewery (1499) with dark house lager, long wooden tables, goulash, and centuries of local energy."
  },
  {
    "categoryLabel": "Food",
    "name": "Kantýna",
    "area": "oldtown",
    "tags": [
      "food"
    ],
    "description": "Stand at marble tables in a beautifully restored bank to feast on premium dry-aged beef and fresh carpaccio."
  },
  {
    "categoryLabel": "Food",
    "name": "Cafe Savoy",
    "area": "malastrana",
    "tags": [
      "food",
      "wellness"
    ],
    "description": "Indulge in elegant pastries and rich Austro-Hungarian breakfast under a stunning neo-Renaissance ceiling."
  },
  {
    "categoryLabel": "Food",
    "name": "Eska",
    "area": "vinohrady",
    "tags": [
      "food",
      "design"
    ],
    "description": "Michelin-Bib-Gourmand-awarded modern Czech cuisine and incredible freshly baked sourdough."
  },
  {
    "categoryLabel": "Food",
    "name": "La Degustation Bohême Bourgeoise",
    "area": "oldtown",
    "tags": [
      "luxury",
      "food"
    ],
    "description": "A Michelin-starred tasting journey that elevates late-19th-century Czech recipes to modern fine-dining perfection."
  },
  {
    "categoryLabel": "Food",
    "name": "Field",
    "area": "vinohrady",
    "tags": [
      "luxury",
      "food"
    ],
    "description": "A fiercely seasonal Michelin-starred menu focusing on raw, farm-to-table ingredients with minimalist plating."
  },
  {
    "categoryLabel": "Food",
    "name": "Naše Maso",
    "area": "oldtown",
    "tags": [
      "food"
    ],
    "description": "Wait in line at this legendary butcher shop for arguably Prague's best Wagyu burger and freshly pulled beer."
  },
  {
    "categoryLabel": "Food",
    "name": "Kuchyň",
    "area": "petrin",
    "tags": [
      "food",
      "culture"
    ],
    "description": "Lift lids on simmering pots to choose your meal in this castle-adjacent restaurant with traditional braised meats."
  },
  {
    "categoryLabel": "Food",
    "name": "Čestr",
    "area": "oldtown",
    "tags": [
      "luxury",
      "food"
    ],
    "description": "Massive expertly grilled cuts of Czech Fleckvieh beef and bottomless sides in a sleek modern dining room."
  },
  {
    "categoryLabel": "Food",
    "name": "U Medvídků",
    "area": "oldtown",
    "tags": [
      "food",
      "culture"
    ],
    "description": "Try X-Beer 33, one of the strongest beers in the world, with massive pork knuckles in a historic brewery."
  },
  {
    "categoryLabel": "Food",
    "name": "Výtopna Railway Restaurant",
    "area": "oldtown",
    "tags": [
      "food",
      "design"
    ],
    "description": "Watch model trains deliver your cold beers and hearty pub meals overhead on an elaborate toy railway system."
  },
  {
    "categoryLabel": "Food",
    "name": "Cafe Louvre",
    "area": "oldtown",
    "tags": [
      "food",
      "wellness"
    ],
    "description": "Step back into 1902 to sip thick hot chocolate and traditional Czech dumplings where Kafka hung out."
  },
  {
    "categoryLabel": "Food",
    "name": "Manifesto Market",
    "area": "vinohrady",
    "tags": [
      "food",
      "design"
    ],
    "description": "Graze on international street food at a trendy, cashless food market built from shipping containers."
  },
  {
    "categoryLabel": "Food",
    "name": "Mincovna",
    "area": "oldtown",
    "tags": [
      "food"
    ],
    "description": "Elevated high-quality traditional Czech dishes directly on Old Town Square without tourist-trap quality."
  },
  {
    "categoryLabel": "Food",
    "name": "Sisters Bistro",
    "area": "oldtown",
    "tags": [
      "food"
    ],
    "description": "Grab an incredibly fresh modern take on the chlebíček—the iconic Czech open-faced sandwich."
  },
  {
    "categoryLabel": "Food",
    "name": "U Kroka",
    "area": "oldtown",
    "tags": [
      "food",
      "culture"
    ],
    "description": "A cozy neighborhood institution serving incredibly tender roasted duck near Vyšehrad ramparts."
  },
  {
    "categoryLabel": "Food",
    "name": "Cukrář Skála",
    "area": "oldtown",
    "tags": [
      "food",
      "wellness"
    ],
    "description": "Flawless modern interpretations of classic Czech desserts like the cream-filled kremrole."
  },
  {
    "categoryLabel": "Food",
    "name": "V Kolkovně",
    "area": "oldtown",
    "tags": [
      "food",
      "culture"
    ],
    "description": "The first official Pilsner Urquell Original Restaurant with massive portions of roasted meats."
  },
  {
    "categoryLabel": "Food",
    "name": "Kampa Park",
    "area": "malastrana",
    "tags": [
      "luxury",
      "food"
    ],
    "description": "An ultra-romantic fine-dining seafood dinner on an illuminated terrace beside the Vltava river."
  },
  {
    "categoryLabel": "Cultural Sight",
    "name": "Jogyesa Temple",
    "area": "oldtown",
    "tags": [
      "culture"
    ],
    "description": "A central Buddhist-inspired spiritual site that is easy to add to a historic Prague day."
  },
  {
    "categoryLabel": "Cultural Sight",
    "name": "Bethlehem Chapel",
    "area": "oldtown",
    "tags": [
      "culture"
    ],
    "description": "A historic reformist chapel where Jan Hus preached, fundamental to Czech religious history."
  },
  {
    "categoryLabel": "Cultural Sight",
    "name": "Church of Our Lady before Týn",
    "area": "oldtown",
    "tags": [
      "culture",
      "design"
    ],
    "description": "A stunning Gothic church with towering spires rising above Old Town Square rooftops."
  },
  {
    "categoryLabel": "Cultural Sight",
    "name": "Powder Bridge Tower",
    "area": "oldtown",
    "tags": [
      "culture"
    ],
    "description": "A 15th-century Gothic tower marking the beginning of the Royal Route through Prague."
  },
  {
    "categoryLabel": "Cultural Sight",
    "name": "Clementinum Library",
    "area": "oldtown",
    "tags": [
      "culture",
      "design"
    ],
    "description": "A baroque theological library with stunning halls and city rooftop views from above."
  },
  {
    "categoryLabel": "Shopping",
    "name": "Pařížská Street",
    "area": "oldtown",
    "tags": [
      "shopping",
      "design"
    ],
    "description": "Prague's most stylish shopping street for high-end fashion, jewelers, and polished boutiques."
  },
  {
    "categoryLabel": "Shopping",
    "name": "Nerudova Street",
    "area": "malastrana",
    "tags": [
      "shopping",
      "design"
    ],
    "description": "A charming Lesser Town lane with galleries, craft shops, and local designer boutiques."
  },
  {
    "categoryLabel": "Shopping",
    "name": "Art Deco Gallery",
    "area": "vinohrady",
    "tags": [
      "shopping",
      "design"
    ],
    "description": "Curated collections of original Art Deco and vintage design pieces from Prague's golden era."
  },
  {
    "categoryLabel": "Shopping",
    "name": "Havelská Market",
    "area": "oldtown",
    "tags": [
      "shopping"
    ],
    "description": "A long-running traditional market for souvenirs, crafts, puppets, and local goods."
  },
  {
    "categoryLabel": "Shopping",
    "name": "Quadrio Shopping Center",
    "area": "oldtown",
    "tags": [
      "shopping",
      "design"
    ],
    "description": "A modern design-focused shopping complex in the historic core with independent boutiques."
  },
  {
    "categoryLabel": "Shopping",
    "name": "Obchodní DůmMax",
    "area": "oldtown",
    "tags": [
      "shopping"
    ],
    "description": "A department store for everyday Czech goods, souvenirs, and traditional crafts."
  },
  {
    "categoryLabel": "Shopping",
    "name": "Various Antique Shops on Nerudova",
    "area": "malastrana",
    "tags": [
      "shopping",
      "design"
    ],
    "description": "A steep street lined with antique dealers, vintage furniture, and Prague memorabilia."
  },
  {
    "categoryLabel": "Shopping",
    "name": "Palladium Shopping Center",
    "area": "oldtown",
    "tags": [
      "shopping"
    ],
    "description": "A large multi-floor retail complex with Czech and international brands in a historic Prague setting."
  },
  {
    "categoryLabel": "Museum",
    "name": "Prague City Museum",
    "area": "oldtown",
    "tags": [
      "museum",
      "design"
    ],
    "description": "Antonín Langweil's astonishing 3D paper model of all Prague—genuinely mesmerizing and unique."
  },
  {
    "categoryLabel": "Museum",
    "name": "Mucha Museum",
    "area": "oldtown",
    "tags": [
      "museum",
      "design"
    ],
    "description": "Alfons Mucha's flowing lines, beautiful women, and theatrical posters celebrating Art Nouveau."
  },
  {
    "categoryLabel": "Museum",
    "name": "DOX Centre",
    "area": "vinohrady",
    "tags": [
      "museum",
      "design"
    ],
    "description": "A sleek white contemporary gallery with a massive wooden airship constructed on its roof."
  },
  {
    "categoryLabel": "Museum",
    "name": "Prague Jewish Museum",
    "area": "josefov",
    "tags": [
      "museum",
      "culture"
    ],
    "description": "Multiple historically significant synagogues and a deeply moving cemetery documenting Jewish Prague."
  },
  {
    "categoryLabel": "Museum",
    "name": "National Museum",
    "area": "oldtown",
    "tags": [
      "museum",
      "culture"
    ],
    "description": "Czech history and natural sciences in a grand neo-Renaissance building at Wenceslas Square top."
  },
  {
    "categoryLabel": "Museum",
    "name": "Lobkowicz Palace",
    "area": "petrin",
    "tags": [
      "museum",
      "culture"
    ],
    "description": "A family art collection including original Beethoven manuscripts in a castle palace."
  },
  {
    "categoryLabel": "Museum",
    "name": "Strahov Monastery Library",
    "area": "malastrana",
    "tags": [
      "museum",
      "culture"
    ],
    "description": "Two floor-to-ceiling baroque libraries with stunning frescoes and ancient manuscripts."
  },
  {
    "categoryLabel": "Museum",
    "name": "Jewish Quarter Museums",
    "area": "josefov",
    "tags": [
      "museum",
      "culture"
    ],
    "description": "Five interconnected museums documenting Prague's significant and tragic Jewish history."
  },
  {
    "categoryLabel": "Museum",
    "name": "Decorative Arts Museum",
    "area": "oldtown",
    "tags": [
      "museum",
      "design"
    ],
    "description": "Czech design, glass, ceramics, and decorative arts from medieval times to modern day."
  },
  {
    "categoryLabel": "Museum",
    "name": "Military History Museum",
    "area": "oldtown",
    "tags": [
      "museum",
      "culture"
    ],
    "description": "Comprehensive exhibits of Czech and European military history across multiple centuries."
  },
  {
    "categoryLabel": "Place to Wander",
    "name": "Nerudova Street maze",
    "area": "malastrana",
    "tags": [
      "design",
      "wellness"
    ],
    "description": "Winding steep cobblestone streets lined with baroque palaces in the most photogenic Prague area."
  },
  {
    "categoryLabel": "Place to Wander",
    "name": "Jilská Street medieval maze",
    "area": "oldtown",
    "tags": [
      "design",
      "wellness"
    ],
    "description": "Try to keep your bearings while navigating the famously confusing medieval labyrinth of Old Town alleys."
  },
  {
    "categoryLabel": "Place to Wander",
    "name": "Vinohrady Boulevard stroll",
    "area": "vinohrady",
    "tags": [
      "design",
      "wellness"
    ],
    "description": "Walk wide leafy avenues lined with stunning Art Deco apartment buildings and chic cafes."
  },
  {
    "categoryLabel": "Place to Wander",
    "name": "Nový Svět charming escape",
    "area": "petrin",
    "tags": [
      "design",
      "wellness"
    ],
    "description": "An impossibly quaint winding neighborhood of small historic workers' cottages completely out of time."
  },
  {
    "categoryLabel": "Place to Wander",
    "name": "Kampa Island peaceful walk",
    "area": "malastrana",
    "tags": [
      "nature",
      "wellness"
    ],
    "description": "Escape to peaceful tree-lined island paths separated from the mainland by a narrow canal."
  },
  {
    "categoryLabel": "Place to Wander",
    "name": "Žižkov neighborhood discover",
    "area": "zizkov",
    "tags": [
      "design",
      "culture"
    ],
    "description": "A gritty artistic neighborhood with street art, vintage shops, and a grittier Prague vibe."
  },
  {
    "categoryLabel": "Place to Wander",
    "name": "U Prašné Brány area",
    "area": "oldtown",
    "tags": [
      "design",
      "culture"
    ],
    "description": "Narrow medieval lanes radiating from the Powder Tower with galleries, small shops, and history."
  },
  {
    "categoryLabel": "Place to Wander",
    "name": "Prag Springs neighborhood",
    "area": "vinohrady",
    "tags": [
      "design",
      "wellness"
    ],
    "description": "A calmer Vinohrady-side residential pocket with neighborhood cafes, parks, and the sort of everyday Prague rhythm that balances the historic core."
  },
  {
    "categoryLabel": "Place to Wander",
    "name": "Čertovka Alley",
    "area": "malastrana",
    "tags": [
      "design",
      "wellness"
    ],
    "description": "One of Prague's narrowest streets, famously only as wide as one person can pass through."
  },
  {
    "categoryLabel": "Place to Wander",
    "name": "Bethlehem Square area",
    "area": "oldtown",
    "tags": [
      "culture",
      "design"
    ],
    "description": "A historic square ringed by baroque buildings with outdoor cafes and cultural institutions."
  },
  {
    "categoryLabel": "Nightlife & Entertainment",
    "name": "U Fleků brewery night",
    "area": "oldtown",
    "tags": [
      "nightlife",
      "food",
      "culture"
    ],
    "description": "A centuries-old brewery experience with long tables, dark lager, goulash, and pure local energy."
  },
  {
    "categoryLabel": "Nightlife & Entertainment",
    "name": "Letná Beer Garden sunset",
    "area": "vinohrady",
    "tags": [
      "nature",
      "food",
      "nightlife"
    ],
    "description": "Watch sunset over Charles Bridge from a massive beer garden filled with smiling locals."
  },
  {
    "categoryLabel": "Nightlife & Entertainment",
    "name": "Ghosts and Legends walking tour",
    "area": "oldtown",
    "tags": [
      "culture",
      "nightlife"
    ],
    "description": "Follow a lantern guide through dark empty alleys hearing tales of alchemy, executions, and the Golem."
  },
  {
    "categoryLabel": "Nightlife & Entertainment",
    "name": "Vinohrady Art Deco bar crawl",
    "area": "vinohrady",
    "tags": [
      "nightlife",
      "design"
    ],
    "description": "Navigate tree-lined boulevard bars and cafes in stunning Art Deco buildings at night."
  },
  {
    "categoryLabel": "Nightlife & Entertainment",
    "name": "Karlín hipster bar scene",
    "area": "zizkov",
    "tags": [
      "nightlife",
      "design"
    ],
    "description": "A grittier, more artistic nightlife vibe with craft beer, street art, and younger crowd energy."
  },
  {
    "categoryLabel": "Nightlife & Entertainment",
    "name": "Nová Scéna Cultural Center",
    "area": "oldtown",
    "tags": [
      "nightlife",
      "culture"
    ],
    "description": "A modern glass theater building with performances, exhibitions, and a more contemporary night scene."
  },
  {
    "categoryLabel": "Nightlife & Entertainment",
    "name": "Sedm Vlků bar",
    "area": "oldtown",
    "tags": [
      "nightlife",
      "food"
    ],
    "description": "A historic multi-room bar complex with different moods on each floor and excellent Pilsner."
  },
  {
    "categoryLabel": "Nightlife & Entertainment",
    "name": "Rock Cafe",
    "area": "oldtown",
    "tags": [
      "nightlife"
    ],
    "description": "A live-music venue in the historic center featuring local and international bands."
  },
  {
    "categoryLabel": "Nightlife & Entertainment",
    "name": "Palác Akropolis",
    "area": "zizkov",
    "tags": [
      "nightlife",
      "culture"
    ],
    "description": "A legendary alternative music venue and cultural space at the heart of Prague's bohemian scene."
  },
  {
    "categoryLabel": "Nightlife & Entertainment",
    "name": "Wenceslas Square evening stroll",
    "area": "oldtown",
    "tags": [
      "design",
      "nightlife"
    ],
    "description": "Walk the half-mile historic boulevard lit up at night with buildings, theaters, and city energy."
  },
  {
    "categoryLabel": "Amusement & Activities",
    "name": "Petřín Lookout Tower climb",
    "area": "petrin",
    "tags": [
      "wellness",
      "design"
    ],
    "description": "Climb Prague's version of the Eiffel Tower for 360-degree views of the entire city."
  },
  {
    "categoryLabel": "Amusement & Activities",
    "name": "Prague Castle full complex tour",
    "area": "petrin",
    "tags": [
      "culture",
      "wellness"
    ],
    "description": "Hours of unhurried wandering through the world's largest ancient castle with courtyards and gardens."
  },
  {
    "categoryLabel": "Amusement & Activities",
    "name": "Vltava river boat cruise",
    "area": "oldtown",
    "tags": [
      "wellness",
      "design"
    ],
    "description": "A scenic river activity seeing Prague's geography and major sights from the water."
  },
  {
    "categoryLabel": "Amusement & Activities",
    "name": "Charles Bridge night walk",
    "area": "malastrana",
    "tags": [
      "culture",
      "wellness"
    ],
    "description": "Return to Charles Bridge after dark when the crowds are gone and the bridge feels magical."
  },
  {
    "categoryLabel": "Amusement & Activities",
    "name": "Prague Tea Time experience",
    "area": "oldtown",
    "tags": [
      "wellness",
      "food"
    ],
    "description": "A single quiet cafe moment in a traditional Czech tearoom keeps the city from feeling like a checklist."
  },
  {
    "categoryLabel": "Amusement & Activities",
    "name": "Traditional Czech spa day",
    "area": "vinohrady",
    "tags": [
      "wellness"
    ],
    "description": "An afternoon at a historic Czech spa with thermal pools, saunas, and massage treatments."
  },
  {
    "categoryLabel": "Amusement & Activities",
    "name": "Beer tasting tour",
    "area": "oldtown",
    "tags": [
      "food",
      "nightlife"
    ],
    "description": "Visit multiple breweries sampling different Czech beers and learning about Bohemian brewing traditions."
  },
  {
    "categoryLabel": "Amusement & Activities",
    "name": "Prague photo walk with local",
    "area": "oldtown",
    "tags": [
      "design",
      "culture"
    ],
    "description": "A guided exploration of the city's most photogenic angles with a local photographer."
  },
  {
    "categoryLabel": "Amusement & Activities",
    "name": "Puppet show experience",
    "area": "oldtown",
    "tags": [
      "culture"
    ],
    "description": "Watch a traditional Czech puppet performance in one of the city's historic puppet theaters."
  },
  {
    "categoryLabel": "Amusement & Activities",
    "name": "Old Town Hall tower climb",
    "area": "oldtown",
    "tags": [
      "wellness",
      "design"
    ],
    "description": "Climb the tower for city views and watch the Astronomical Clock from above at the top of the hour."
  },
  {
    "categoryLabel": "Other",
    "name": "Prague Astronomical Clock spectacle",
    "area": "oldtown",
    "tags": [
      "culture",
      "design"
    ],
    "description": "Join crowds at the top of the hour to watch the 600-year-old mechanical Apostle parade."
  },
  {
    "categoryLabel": "Other",
    "name": "Charles Bridge at multiple times",
    "area": "malastrana",
    "tags": [
      "culture",
      "design"
    ],
    "description": "Visit at dawn for magic, midday for crowds, and evening for lights to experience all versions."
  },
  {
    "categoryLabel": "Other",
    "name": "Dancing House (Frank Gehry)",
    "area": "oldtown",
    "tags": [
      "design"
    ],
    "description": "A striking deconstructivist building that seems to bend and dance among traditional 19th-century architecture."
  },
  {
    "categoryLabel": "Other",
    "name": "Old Town Square Astronomical Clock",
    "area": "oldtown",
    "tags": [
      "culture",
      "design"
    ],
    "description": "A 600-year-old mechanical marvel in one of Europe's most beautiful squares."
  },
  {
    "categoryLabel": "Other",
    "name": "Prague photo opportunity tour",
    "area": "oldtown",
    "tags": [
      "design"
    ],
    "description": "Self-guided journey to the city's most Instagram-famous angles and hidden scenic spots."
  },
  {
    "categoryLabel": "Other",
    "name": "Franciscan Garden secret reset",
    "area": "oldtown",
    "tags": [
      "wellness"
    ],
    "description": "A baroque garden hidden in plain sight in the middle of Wenceslas Square for a midday peace break."
  },
  {
    "categoryLabel": "Other",
    "name": "Prague Castle gardens at sunset",
    "area": "petrin",
    "tags": [
      "wellness",
      "design"
    ],
    "description": "The formal castle gardens at golden hour with sweeping city views as the sun sets."
  },
  {
    "categoryLabel": "Other",
    "name": "Sunday afternoon Czech culture",
    "area": "oldtown",
    "tags": [
      "culture"
    ],
    "description": "Attend a classical music concert, opera, or ballet performance for a refined Prague evening."
  }
];
