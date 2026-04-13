// Standalone hoi-an city data

export const hoiAnGuide = {
  "label": "Hoi An",
  "country": "Vietnam",
  "currency": "Use short car rides or bikes for the beach and outer villages, but expect the old town to work best on foot after you arrive.",
  "transferNote": "Hoi An is slower and more compact than a big city, so the trip works best when each day is anchored around one clear mood: old-town texture, riverside evenings, or beach-and-countryside breathing room.",
  "areaAdjacency": {
    "old-town": [
      "an-hoi",
      "beach"
    ],
    "an-hoi": [
      "cam-chau",
      "old-town"
    ],
    "cam-chau": [
      "beach",
      "an-hoi"
    ],
    "beach": [
      "old-town",
      "cam-chau"
    ]
  },
  "hotelAreas": {
    "old-town": {
      "label": "Old Town",
      "mood": "historic, lantern-lit, and deeply walkable",
      "strengths": [
        "culture",
        "walkability",
        "food"
      ]
    },
    "an-hoi": {
      "label": "An Hoi / Riverside",
      "mood": "lively, scenic, and easy at night",
      "strengths": [
        "food",
        "nightlife",
        "walkability"
      ]
    },
    "cam-chau": {
      "label": "Cam Chau / Rice Fields",
      "mood": "slower, greener, and boutique-led",
      "strengths": [
        "wellness",
        "nature",
        "design"
      ]
    },
    "beach": {
      "label": "An Bang / Beach Side",
      "mood": "airy, coastal, and more restorative",
      "strengths": [
        "nature",
        "food",
        "wellness"
      ]
    }
  },
  "hotels": {
    "luxury": [
      {
        "name": "Four Seasons Resort The Nam Hai",
        "area": "beach",
        "vibe": "A true resort splurge if the trip should feel serene, coastal, and unmistakably special from the moment you arrive.",
        "bestFor": [
          "luxury",
          "nature",
          "wellness"
        ]
      },
      {
        "name": "Anantara Hoi An Resort",
        "area": "an-hoi",
        "vibe": "A riverside luxury base that keeps lantern-lit evenings and slower mornings in easy reach.",
        "bestFor": [
          "luxury",
          "food",
          "walkability"
        ]
      },
      {
        "name": "Hotel Royal Hoi An - MGallery",
        "area": "an-hoi",
        "vibe": "A more current-feeling luxury stay with strong river access and easier evening follow-through.",
        "bestFor": [
          "luxury",
          "design",
          "food"
        ]
      }
    ],
    "premium": [
      {
        "name": "Almanity Hoi An Wellness Resort",
        "area": "cam-chau",
        "vibe": "A calmer premium base if the trip wants spa time, boutique polish, and easier breathing room than the old-town core.",
        "bestFor": [
          "wellness",
          "design",
          "food"
        ]
      },
      {
        "name": "Little Riverside Hoi An",
        "area": "an-hoi",
        "vibe": "A riverside pick if you want the old town close without sleeping inside its busiest lanes.",
        "bestFor": [
          "food",
          "walkability",
          "design"
        ]
      },
      {
        "name": "La Siesta Hoi An Resort & Spa",
        "area": "cam-chau",
        "vibe": "A lower-friction resort-style base between the old town and Hoi An's greener edges.",
        "bestFor": [
          "wellness",
          "food",
          "value"
        ]
      },
      {
        "name": "Palm Garden Beach Resort & Spa",
        "area": "beach",
        "vibe": "A beach-side premium option if the trip wants more sea air and less lantern-street intensity.",
        "bestFor": [
          "nature",
          "wellness",
          "food"
        ]
      }
    ],
    "smart": [
      {
        "name": "Vinh Hung Riverside Resort & Spa",
        "area": "an-hoi",
        "vibe": "A riverside base that keeps the evenings easy and the old town very close.",
        "bestFor": [
          "walkability",
          "food",
          "value"
        ]
      },
      {
        "name": "Hoi An Central Hotel",
        "area": "old-town",
        "vibe": "A smart-spend base for a trip that wants to stay tightly tied to the historic core.",
        "bestFor": [
          "culture",
          "walkability",
          "value"
        ]
      },
      {
        "name": "RiverTown Hoi An Resort & Spa",
        "area": "an-hoi",
        "vibe": "A stronger-value riverside pick if you want a little more calm without losing easy movement.",
        "bestFor": [
          "value",
          "food",
          "wellness"
        ]
      },
      {
        "name": "Athenia Boutique Hotel & Spa",
        "area": "cam-chau",
        "vibe": "A quieter boutique option if rice fields, café mornings, and lighter pacing matter more than old-town immediacy.",
        "bestFor": [
          "design",
          "wellness",
          "value"
        ]
      }
    ]
  },
  "cantMiss": [
    {
      "name": "Hoi An Ancient Town",
      "area": "old-town",
      "tags": [
        "culture",
        "walkability"
      ],
      "description": "The essential core of the trip, where timber houses, temple fronts, shopfront glow, and pedestrian lanes finally make Hoi An feel fully itself."
    },
    {
      "name": "Japanese Covered Bridge",
      "area": "old-town",
      "tags": [
        "culture",
        "design"
      ],
      "description": "A compact historic anchor that works best as part of a larger old-town route rather than a stand-alone stop."
    },
    {
      "name": "Fujian Assembly Hall",
      "area": "old-town",
      "tags": [
        "culture",
        "design"
      ],
      "description": "One of the best ways to understand the Chinese-merchant side of Hoi An's history without losing the flow of the old town."
    },
    {
      "name": "Thu Bon River Sunset Zone",
      "area": "an-hoi",
      "tags": [
        "walkability",
        "nightlife"
      ],
      "description": "One of the clearest evening anchors in town, when lanterns, river traffic, and slower pacing all start working together."
    },
    {
      "name": "An Bang Beach",
      "area": "beach",
      "tags": [
        "nature",
        "wellness"
      ],
      "description": "The easiest way to give the trip air, horizon, and a cleaner beach reset without committing to a bigger transfer day."
    },
    {
      "name": "Tra Que Vegetable Village",
      "area": "cam-chau",
      "tags": [
        "nature",
        "culture",
        "walkability"
      ],
      "description": "A quieter countryside counterpoint to the old town when the trip wants texture beyond the heritage streets."
    },
    {
      "name": "Cam Nam bridge and river-island edge",
      "area": "an-hoi",
      "tags": [
        "walkability",
        "culture"
      ],
      "description": "A softer local-feeling add-on where the pace drops and the river does more of the work than the monuments."
    }
  ],
  "activities": [
    {
      "name": "Old Town Breakfast and Coffee Loop",
      "area": "old-town",
      "tags": [
        "food",
        "walkability"
      ],
      "description": "A lived-in way to start the day before the prettiest lantern lanes fully take over."
    },
    {
      "name": "Tailor Street Circuit",
      "area": "old-town",
      "tags": [
        "shopping",
        "design"
      ],
      "description": "A very Hoi An move if the trip wants custom clothing or one more craft-led daytime sequence."
    },
    {
      "name": "River-to-Beach Cycling Route",
      "area": "cam-chau",
      "tags": [
        "nature",
        "wellness",
        "walkability"
      ],
      "description": "A greener, breezier half-day if the trip needs a break from denser old-town walking."
    },
    {
      "name": "Basket-Boat Ride in Bay Mau Coconut Forest",
      "area": "cam-chau",
      "tags": [
        "nature",
        "amusement"
      ],
      "description": "A lighter, more playful add-on if the trip wants one activity that feels a little more hands-on and less heritage-heavy."
    },
    {
      "name": "Lantern-Making Class",
      "area": "old-town",
      "tags": [
        "culture",
        "design"
      ],
      "description": "A more interactive old-town stop if the trip wants a keepsake without defaulting to pure shopping."
    },
    {
      "name": "An Hoi wine bar and riverside evening",
      "area": "an-hoi",
      "tags": [
        "nightlife",
        "food"
      ],
      "description": "A smart easier night when the trip wants atmosphere without building the whole evening around one formal reservation."
    },
    {
      "name": "Beach-club lunch and late-afternoon coast pause",
      "area": "beach",
      "tags": [
        "food",
        "nature",
        "wellness"
      ],
      "description": "A worthwhile coastal reset if the trip should feel a little slower and more sun-led for one stretch."
    }
  ],
  "food": [
    {
      "name": "Ăn Thôi",
      "area": "old-town",
      "tags": [
        "food",
        "michelin-official"
      ],
      "cuisine": "Contemporary Vietnamese",
      "bucketLabel": "Official Michelin",
      "michelinStatus": "MICHELIN Guide",
      "description": "A refined Hoi An table when the trip wants one more current Vietnamese dinner with real editorial credibility.",
      "reservation": ""
    },
    {
      "name": "Morning Glory Original",
      "area": "old-town",
      "tags": [
        "food",
        "premium-shortlist"
      ],
      "cuisine": "Hoi An and Vietnamese classics",
      "bucketLabel": "Premium Shortlist",
      "description": "The polished all-rounder for travelers who want Hoi An specialties gathered in one confident old-town room.",
      "reservation": ""
    },
    {
      "name": "Chau Kitchen & Bar",
      "area": "an-hoi",
      "tags": [
        "food",
        "nightlife",
        "premium-shortlist"
      ],
      "cuisine": "Modern Vietnamese",
      "bucketLabel": "Premium Shortlist",
      "description": "A sharper riverside dinner for nights that should feel current, social, and a little more dressed up.",
      "reservation": ""
    },
    {
      "name": "Aubergine49 Restaurant",
      "area": "old-town",
      "tags": [
        "food",
        "premium-shortlist"
      ],
      "cuisine": "Seasonal fine dining",
      "bucketLabel": "Premium Shortlist",
      "description": "A more composed reservation when the trip wants one serious dinner beyond the usual old-town staples.",
      "reservation": ""
    },
    {
      "name": "Spice Viet Hoi An",
      "area": "old-town",
      "tags": [
        "food",
        "premium-shortlist"
      ],
      "cuisine": "Vietnamese classics",
      "bucketLabel": "Premium Shortlist",
      "description": "A dependable old-town table for regional standards in a room that still feels considered rather than tour-bus generic.",
      "reservation": ""
    },
    {
      "name": "Bánh Mì Phượng",
      "area": "old-town",
      "tags": [
        "food",
        "value",
        "local-classic"
      ],
      "cuisine": "Banh mi",
      "bucketLabel": "Essential Local / Classic",
      "description": "Still the obvious bánh mì stop, but it works well when folded into a broader old-town wander rather than treated like the whole plan.",
      "reservation": ""
    },
    {
      "name": "Nữ Eatery",
      "area": "old-town",
      "tags": [
        "food",
        "local-classic"
      ],
      "cuisine": "Current small plates",
      "bucketLabel": "Essential Local / Classic",
      "description": "A sharper contemporary dinner if the trip wants something smaller, more current, and less strictly traditional.",
      "reservation": ""
    },
    {
      "name": "Cargo Club",
      "area": "an-hoi",
      "tags": [
        "cafes",
        "food",
        "local-classic"
      ],
      "cuisine": "Riverside café and pastries",
      "bucketLabel": "Essential Local / Classic",
      "description": "An all-day anchor for breakfast, dessert, or a lighter meal near the river.",
      "reservation": ""
    },
    {
      "name": "Mango Mango",
      "area": "an-hoi",
      "tags": [
        "food",
        "nightlife",
        "local-classic"
      ],
      "cuisine": "Modern Vietnamese by the river",
      "bucketLabel": "Essential Local / Classic",
      "description": "A scenic riverside dinner if the evening should feel colorful, easy, and very Hoi An.",
      "reservation": ""
    },
    {
      "name": "Nhan's Kitchen",
      "area": "cam-chau",
      "tags": [
        "food"
      ],
      "cuisine": "Vietnamese comfort food",
      "description": "A lower-friction local favorite if the trip wants one more neighborhood-feeling meal beyond the old-town core.",
      "reservation": ""
    },
    {
      "name": "White Rose Restaurant",
      "area": "old-town",
      "tags": [
        "food",
        "culture",
        "local-classic"
      ],
      "cuisine": "White rose dumplings and Hoi An specialties",
      "bucketLabel": "Essential Local / Classic",
      "description": "A central stop for one more classic Hoi An dish in the middle of the old town.",
      "reservation": ""
    },
    {
      "name": "Reaching Out Tea House",
      "area": "old-town",
      "tags": [
        "cafes",
        "culture"
      ],
      "cuisine": "Silent tea room",
      "description": "A calm, specific pause when the old town needs one quieter moment and less pure sightseeing momentum.",
      "reservation": ""
    },
    {
      "name": "Madam Khánh",
      "area": "old-town",
      "tags": [
        "food",
        "value",
        "local-classic"
      ],
      "cuisine": "Banh mi",
      "bucketLabel": "Essential Local / Classic",
      "description": "The other classic bánh mì name in town, best when the trip wants to compare two local legends instead of choosing one.",
      "reservation": ""
    },
    {
      "name": "Long Cơm Gà",
      "area": "old-town",
      "tags": [
        "food",
        "local-classic"
      ],
      "cuisine": "Com ga",
      "bucketLabel": "Essential Local / Classic",
      "description": "A chicken-rice classic for a lunch that feels properly Hoi An and gloriously unfussy.",
      "reservation": ""
    },
    {
      "name": "Cơm Gà Nga",
      "area": "old-town",
      "tags": [
        "food",
        "local-classic"
      ],
      "cuisine": "Com ga",
      "bucketLabel": "Essential Local / Classic",
      "description": "Another core chicken-rice address, useful when the day wants something famous, fast-moving, and specific to town.",
      "reservation": ""
    },
    {
      "name": "Thanh Cao Lầu",
      "area": "old-town",
      "tags": [
        "food",
        "local-classic"
      ],
      "cuisine": "Cao lầu",
      "bucketLabel": "Essential Local / Classic",
      "description": "A direct, local-feeling stop for Hoi An's most city-specific noodle dish.",
      "reservation": ""
    }
  ]
};

export const hoiAnSupplements = [
  {
    "categoryLabel": "Nature",
    "name": "Cua Dai Beach",
    "area": "beach",
    "description": "A looser shoreline than An Bang, better when the coast should feel wider and less scene-led."
  },
  {
    "categoryLabel": "Nature",
    "name": "Cham Islands",
    "area": "beach",
    "description": "A bigger sea-and-snorkeling outing when the trip wants clear water and a true day-away feel."
  },
  {
    "categoryLabel": "Nature",
    "name": "Bay Mau Coconut Forest",
    "area": "cam-chau",
    "description": "A mangrove-lined green pocket best paired with a lighter countryside stretch or a basket-boat ride."
  },
  {
    "categoryLabel": "Nature",
    "name": "Hoi An Rice Paddies Loop",
    "area": "cam-chau",
    "description": "A breezy route through rice fields that softens the trip between denser old-town blocks."
  },
  {
    "categoryLabel": "Nature",
    "name": "Lo Gach Cu Farm",
    "area": "cam-chau",
    "description": "A small countryside farm stop for a quieter, greener Hoi An detour."
  },
  {
    "categoryLabel": "Nature",
    "name": "Cam Kim Countryside",
    "area": "cam-chau",
    "description": "A slower side of Hoi An where village roads, woodcraft, and river edges take over."
  },
  {
    "categoryLabel": "Cultural Sight",
    "name": "Tan Ky Old House",
    "area": "old-town",
    "description": "One of the old town's clearest merchant-house interiors, especially useful for understanding Hoi An beyond the lantern glow."
  },
  {
    "categoryLabel": "Cultural Sight",
    "name": "Phung Hung Old House",
    "area": "old-town",
    "description": "A preserved timber house that makes the old trading-city layer feel more tangible."
  },
  {
    "categoryLabel": "Cultural Sight",
    "name": "Cantonese Assembly Hall",
    "area": "old-town",
    "description": "A compact heritage stop with ornate detail and a calmer feel than the busiest halls."
  },
  {
    "categoryLabel": "Cultural Sight",
    "name": "Ba Mu Temple Gate",
    "area": "old-town",
    "description": "A photogenic temple gate that adds one more ceremonial note to an old-town route."
  },
  {
    "categoryLabel": "Cultural Sight",
    "name": "My Son Sanctuary",
    "area": "cam-chau",
    "description": "The most meaningful half-day heritage excursion beyond town itself, especially if the trip wants real Champa history."
  },
  {
    "categoryLabel": "Cultural Sight",
    "name": "Lantern Workshops",
    "area": "old-town",
    "description": "A more craft-led old-town stop when you want to see how one of Hoi An's defining visual traditions is made."
  },
  {
    "categoryLabel": "Shopping",
    "name": "Hoi An Central Market",
    "area": "old-town",
    "description": "The most useful market stop for spices, snacks, fabrics, and everyday Hoi An bustle."
  },
  {
    "categoryLabel": "Shopping",
    "name": "Hoi An Silk Village",
    "area": "cam-chau",
    "description": "A silk-and-textile stop if the trip wants craft context beyond tailor storefronts."
  },
  {
    "categoryLabel": "Shopping",
    "name": "Cocobox",
    "area": "old-town",
    "description": "A polished stop for coffee, teas, edible gifts, and design-minded pantry browsing."
  },
  {
    "categoryLabel": "Shopping",
    "name": "Hoi An Fine Art Gallery",
    "area": "old-town",
    "description": "A small gallery for painting, prints, and a more art-led souvenir choice."
  },
  {
    "categoryLabel": "Shopping",
    "name": "Lotus Jewellery",
    "area": "old-town",
    "description": "A refined jewelry stop when the trip wants one more gift-led browse in the core."
  },
  {
    "categoryLabel": "Shopping",
    "name": "Reaching Out Arts & Crafts",
    "area": "old-town",
    "description": "A beautifully presented social-enterprise shop for ceramic, textile, and handmade gifts."
  },
  {
    "categoryLabel": "Shopping",
    "name": "Metiseko",
    "area": "old-town",
    "description": "A design-led boutique for print-driven resort wear and more polished Hoi An shopping."
  },
  {
    "categoryLabel": "Shopping",
    "name": "Friendly Leather Bag Shop",
    "area": "old-town",
    "description": "A practical custom-leather stop when the trip wants something made rather than just bought."
  },
  {
    "categoryLabel": "Museum",
    "name": "Precious Heritage by Rehahn",
    "area": "old-town",
    "description": "A worthwhile cultural stop if the trip wants more context on central Vietnam and Hoi An's ethnic communities beyond the prettiest lanes."
  },
  {
    "categoryLabel": "Museum",
    "name": "Museum of History and Culture",
    "area": "old-town",
    "description": "The clearest compact stop for Hoi An's deeper trading-port and dynastic history."
  },
  {
    "categoryLabel": "Museum",
    "name": "Museum of Folklore",
    "area": "old-town",
    "description": "A smaller museum focused on local ritual, craft, and everyday cultural life."
  },
  {
    "categoryLabel": "Museum",
    "name": "Museum of Sa Huynh Culture",
    "area": "old-town",
    "description": "The best stop for understanding the deeper pre-Hoi An roots of the region."
  },
  {
    "categoryLabel": "Museum",
    "name": "Museum of Trade Ceramics",
    "area": "old-town",
    "description": "A specific museum for the maritime-trade ceramics that shaped Hoi An's merchant past."
  },
  {
    "categoryLabel": "Museum",
    "name": "Thanh Ha Terracotta Park",
    "area": "cam-chau",
    "description": "A craft-and-ceramics stop that works well when the day leans workshop-led rather than monument-led."
  },
  {
    "categoryLabel": "Museum",
    "name": "GAM Gemstone Art Museum",
    "area": "old-town",
    "description": "A more unusual museum stop with gemstone carving and decorative-art focus."
  },
  {
    "categoryLabel": "Museum",
    "name": "Hoi An Handicraft Workshop",
    "area": "old-town",
    "description": "A heritage-craft stop where making demonstrations and performance give the old town more texture."
  },
  {
    "categoryLabel": "Museum",
    "name": "Old Houses Ticket Circuit",
    "area": "old-town",
    "description": "The ticketed merchant-house sequence that makes the old town feel layered rather than purely scenic."
  },
  {
    "categoryLabel": "Museum",
    "name": "My Son Sanctuary Interpretation Areas",
    "area": "cam-chau",
    "description": "The on-site museum and explanatory zones that make a My Son outing far more legible."
  },
  {
    "categoryLabel": "Place to Wander",
    "name": "Nguyen Thai Hoc Street",
    "area": "old-town",
    "description": "One of the old town's best-looking stretches for shopfronts, timber façades, and slower wandering."
  },
  {
    "categoryLabel": "Place to Wander",
    "name": "Tran Phu Street",
    "area": "old-town",
    "description": "A core heritage street where assembly halls, old houses, and café pauses stack up easily."
  },
  {
    "categoryLabel": "Place to Wander",
    "name": "An Hoi Islet and Night Market Approach",
    "area": "an-hoi",
    "description": "The liveliest bridge-crossing walk in town once lanterns, stalls, and river traffic all come on at once."
  },
  {
    "categoryLabel": "Place to Wander",
    "name": "Cloth Market Area",
    "area": "old-town",
    "description": "A market-side knot of fabric, tailor energy, and local trade that feels less stage-set than the prettiest lanes."
  },
  {
    "categoryLabel": "Place to Wander",
    "name": "Rice Paddies Toward An Bang",
    "area": "cam-chau",
    "description": "A softer route where the old town gives way to rice fields, bikes, and coastal light."
  },
  {
    "categoryLabel": "Place to Wander",
    "name": "An Bang Beachfront Strip",
    "area": "beach",
    "description": "The easiest coast-side stroll for beach bars, sand, and a slower late-afternoon rhythm."
  },
  {
    "categoryLabel": "Place to Wander",
    "name": "Cam Kim / Kim Bong Side",
    "area": "cam-chau",
    "description": "A more local-feeling wander of bridges, woodcraft villages, and countryside edges across the river."
  },
  {
    "categoryLabel": "Nightlife & Entertainment",
    "name": "Market Bar",
    "area": "an-hoi",
    "description": "A casual river-near cocktail stop when the night should stay social rather than clubby."
  },
  {
    "categoryLabel": "Nightlife & Entertainment",
    "name": "Mezcal Cocteleria",
    "area": "an-hoi",
    "description": "A sharper cocktail address for nights that want a more current bar scene."
  },
  {
    "categoryLabel": "Nightlife & Entertainment",
    "name": "The Hoianian",
    "area": "an-hoi",
    "description": "A more polished riverside bar-and-dinner move when the evening should feel easy but still elevated."
  },
  {
    "categoryLabel": "Nightlife & Entertainment",
    "name": "The Shamrock Irish Pub",
    "area": "an-hoi",
    "description": "A friendly lower-pressure pub when the night wants easy conversation more than curation."
  },
  {
    "categoryLabel": "Nightlife & Entertainment",
    "name": "Why Not Club Bar",
    "area": "an-hoi",
    "description": "A louder late-night option for travelers who want the more obvious party side of Hoi An."
  },
  {
    "categoryLabel": "Nightlife & Entertainment",
    "name": "Soul Kitchen",
    "area": "beach",
    "description": "A laid-back An Bang night with live music, sea air, and a proper beach-bar mood."
  },
  {
    "categoryLabel": "Nightlife & Entertainment",
    "name": "The DeckHouse An Bang Beach",
    "area": "beach",
    "description": "A dressed-up beach-club night when the coast should feel stylish, easy, and a little celebratory."
  },
  {
    "categoryLabel": "Nightlife & Entertainment",
    "name": "Attic Bar",
    "area": "an-hoi",
    "description": "A rooftop-adjacent drink stop when the night wants one more easy river-facing round."
  },
  {
    "categoryLabel": "Nightlife & Entertainment",
    "name": "River Bar",
    "area": "an-hoi",
    "description": "A simple riverfront bar that works well as an unplanned extra stop rather than the whole night."
  },
  {
    "categoryLabel": "Nightlife & Entertainment",
    "name": "Hoi An Night Market and Lantern Zone",
    "area": "an-hoi",
    "description": "The most obvious after-dark walk in town, still worth doing once for the lantern glow and river atmosphere."
  },
  {
    "categoryLabel": "Amusement & Activities",
    "name": "Cooking Class",
    "area": "cam-chau",
    "description": "A high-value hands-on activity when the trip wants regional food to become part of the day, not just the dinner plan."
  },
  {
    "categoryLabel": "Amusement & Activities",
    "name": "Hoi An Memories Show",
    "area": "an-hoi",
    "description": "A bigger entertainment-led night if the trip wants one theatrical version of Hoi An after dark."
  },
  {
    "categoryLabel": "Amusement & Activities",
    "name": "Hoi An Memories Land",
    "area": "an-hoi",
    "description": "The broader performance-and-park complex when the evening should feel more produced and event-like."
  },
  {
    "categoryLabel": "Amusement & Activities",
    "name": "Hoi An Lune Center",
    "area": "old-town",
    "description": "A more design-minded performance option if the night should feel cultural without going fully grand spectacle."
  },
  {
    "categoryLabel": "Amusement & Activities",
    "name": "Cham Islands Snorkeling / Diving",
    "area": "beach",
    "description": "A sea-led outing for trips that want coral, boats, and a cleaner break from the old town."
  },
  {
    "categoryLabel": "Amusement & Activities",
    "name": "VinWonders Nam Hoi An",
    "area": "beach",
    "description": "A larger amusement outing when the trip wants one playful, family-friendly block beyond the old town."
  },
  {
    "categoryLabel": "Amusement & Activities",
    "name": "Food Tour",
    "area": "old-town",
    "description": "A smart early-trip activity when the brief wants Hoi An's signature dishes mapped out before independent meals take over."
  },
  {
    "categoryLabel": "Other",
    "name": "Get Tailored Clothing Made",
    "area": "old-town",
    "description": "One of the most specific Hoi An rituals, best handled early enough in the trip for fittings and revisions."
  },
  {
    "categoryLabel": "Other",
    "name": "Early-Morning Old Town Photo Walk",
    "area": "old-town",
    "description": "The best way to see the core before scooters, crowds, and lantern shoppers take over."
  },
  {
    "categoryLabel": "Other",
    "name": "Lantern Festival Timing",
    "area": "old-town",
    "description": "Worth planning around if the dates line up, since the atmosphere changes noticeably on the monthly lantern nights."
  },
  {
    "categoryLabel": "Other",
    "name": "Sunset Boat on the Thu Bon / Hoai River",
    "area": "an-hoi",
    "description": "A softer river-led add-on when the evening should feel scenic rather than venue-driven."
  },
  {
    "categoryLabel": "Other",
    "name": "Temple-Hopping with the Old Town Ticket",
    "area": "old-town",
    "description": "The most useful way to make the ticketed old-town heritage stops feel structured rather than random."
  },
  {
    "categoryLabel": "Other",
    "name": "Countryside Jeep or Farm Tour",
    "area": "cam-chau",
    "description": "A larger outing when the trip wants one more guided countryside block with less self-navigation."
  },
  {
    "categoryLabel": "Other",
    "name": "Coffee Crawl",
    "area": "old-town",
    "description": "A simple way to turn Hoi An's slower café culture into a full daytime thread."
  },
  {
    "categoryLabel": "Other",
    "name": "Edible Souvenir Shopping",
    "area": "old-town",
    "description": "Best for trips that want gifts with local flavor rather than another fabric or lantern purchase."
  },
  {
    "categoryLabel": "Other",
    "name": "Craft-Village Day",
    "area": "cam-chau",
    "description": "A broader craft-led outing when the trip wants villages, making traditions, and less old-town density."
  },
  {
    "categoryLabel": "Other",
    "name": "Use Hoi An as a Base for Da Nang / My Son / Islands",
    "area": "cam-chau",
    "description": "Often the smartest way to keep the hotel experience softer while still reaching the bigger regional sights."
  },
  {
    "categoryLabel": "Other",
    "name": "Faifo Coffee Rooftop Pause",
    "area": "old-town",
    "description": "A simple rooftop moment when tile roofs, lantern color, and compression of the old town should do the work."
  },
  {
    "categoryLabel": "Food",
    "name": "Bale Well",
    "area": "old-town",
    "tags": [
      "food",
      "culture",
      "local-classic"
    ],
    "cuisine": "Grilled skewers and wraps",
    "bucketLabel": "Essential Local / Classic",
    "description": "A hands-on courtyard meal when the night should feel local, casual, and memorable.",
    "reservation": ""
  },
  {
    "categoryLabel": "Food",
    "name": "Phin Coffee",
    "area": "an-hoi",
    "tags": [
      "cafes",
      "food",
      "local-classic"
    ],
    "cuisine": "Vietnamese coffee and pastries",
    "bucketLabel": "Essential Local / Classic",
    "description": "A slower riverside coffee stop if the afternoon wants one more easy pause with a local feel.",
    "reservation": ""
  },
  {
    "categoryLabel": "Cultural Sight",
    "name": "Quan Cong Temple",
    "area": "old-town",
    "description": "A compact temple add-on when the route wants one more heritage interior without becoming museum-heavy."
  }
];

export default { guide: hoiAnGuide, supplements: hoiAnSupplements };
