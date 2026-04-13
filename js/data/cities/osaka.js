// Osaka guide data

export const osakaGuide = {
  "label": "Osaka",
  "country": "Japan",
  "currency": "Keep some cash for smaller food stalls, temple-area snacks, and old-school neighborhood spots, though cards work in most hotels and bigger restaurants.",
  "transferNote": "Osaka is more neighborhood-driven than it first appears, so it helps to cluster by district instead of zigzagging all day.",
  "areaAdjacency": {
    "umeda": [
      "shinsaibashi",
      "namba",
      "tennoji"
    ],
    "shinsaibashi": [
      "umeda",
      "namba",
      "tennoji"
    ],
    "namba": [
      "shinsaibashi",
      "umeda",
      "tennoji"
    ],
    "tennoji": [
      "namba",
      "shinsaibashi",
      "umeda"
    ]
  },
  "hotelAreas": {
    "umeda": {
      "label": "Umeda",
      "mood": "polished, central, and transit-smart",
      "strengths": [
        "luxury",
        "transit",
        "food"
      ]
    },
    "shinsaibashi": {
      "label": "Shinsaibashi",
      "mood": "stylish, lively, and shopping-friendly",
      "strengths": [
        "design",
        "shopping",
        "food"
      ]
    },
    "namba": {
      "label": "Namba",
      "mood": "high-energy, walkable, and food-first",
      "strengths": [
        "food",
        "nightlife",
        "walkability"
      ]
    },
    "tennoji": {
      "label": "Tennoji",
      "mood": "slower, more local, and good for wider city access",
      "strengths": [
        "wellness",
        "culture",
        "value"
      ]
    }
  },
  "hotels": {
    "luxury": [
      {
        "name": "Four Seasons Hotel Osaka",
        "area": "umeda",
        "vibe": "A polished new luxury base if you want Osaka to feel refined from the minute you arrive.",
        "bestFor": [
          "luxury",
          "food",
          "wellness"
        ]
      },
      {
        "name": "The St. Regis Osaka",
        "area": "shinsaibashi",
        "vibe": "A grand, elegant stay for travelers who want classic luxury with stronger shopping access.",
        "bestFor": [
          "luxury",
          "shopping",
          "romance"
        ]
      },
      {
        "name": "Conrad Osaka",
        "area": "umeda",
        "vibe": "Sky-high and dramatic, with a more contemporary luxury mood than the city's older grand hotels.",
        "bestFor": [
          "luxury",
          "design",
          "food"
        ]
      },
      {
        "name": "W Osaka",
        "area": "shinsaibashi",
        "vibe": "Bold, glossy, and nightlife-friendly if you want Osaka to feel current and social.",
        "bestFor": [
          "luxury",
          "nightlife",
          "design"
        ]
      }
    ],
    "premium": [
      {
        "name": "Zentis Osaka",
        "area": "umeda",
        "vibe": "A sharply designed central stay with a calmer, more understated luxury feel.",
        "bestFor": [
          "design",
          "food",
          "transit"
        ]
      },
      {
        "name": "Hotel The Flag Shinsaibashi",
        "area": "shinsaibashi",
        "vibe": "A smart, style-forward choice right where shopping streets and easy nights out overlap.",
        "bestFor": [
          "design",
          "shopping",
          "food"
        ]
      },
      {
        "name": "Cross Hotel Osaka",
        "area": "namba",
        "vibe": "A Dotonbori-adjacent base for travelers who want strong walkability without dropping into bargain-hotel territory.",
        "bestFor": [
          "food",
          "nightlife",
          "walkability"
        ]
      },
      {
        "name": "Miyako City Osaka Hommachi",
        "area": "shinsaibashi",
        "vibe": "Clean-lined and practical, with a calmer city feel than staying right in the busiest entertainment strips.",
        "bestFor": [
          "food",
          "design",
          "value"
        ]
      }
    ],
    "smart": [
      {
        "name": "THE LIVELY Osaka Honmachi",
        "area": "shinsaibashi",
        "vibe": "A lively, social hotel that works well if you want a younger Osaka trip without sacrificing comfort.",
        "bestFor": [
          "value",
          "design",
          "nightlife"
        ]
      },
      {
        "name": "Hotel Royal Classic Osaka",
        "area": "namba",
        "vibe": "A strong-value Namba base with better polish than the average big-station hotel.",
        "bestFor": [
          "value",
          "walkability",
          "food"
        ]
      },
      {
        "name": "Citadines Namba Osaka",
        "area": "namba",
        "vibe": "Flexible and practical if you want more room and easy access to southern Osaka.",
        "bestFor": [
          "value",
          "food",
          "transit"
        ]
      },
      {
        "name": "Hotel Trusty Osaka Abeno",
        "area": "tennoji",
        "vibe": "A calmer, good-value base if you want easier access to Tennoji and the city's southern side.",
        "bestFor": [
          "value",
          "wellness",
          "culture"
        ]
      }
    ]
  },
  "cantMiss": [
    {
      "name": "Dotonbori after dark",
      "area": "namba",
      "tags": [
        "food",
        "nightlife",
        "design"
      ],
      "description": "Neon, canal views, takoyaki steam, and pure Osaka energy, best treated as a real evening anchor rather than a quick photo stop."
    },
    {
      "name": "Kuromon Market grazing pass",
      "area": "namba",
      "tags": [
        "food",
        "culture"
      ],
      "description": "A very useful food-first Osaka stop for seafood skewers, fruit, tamago, and market rhythm before the day gets crowded."
    },
    {
      "name": "Osaka Castle and surrounding park",
      "area": "umeda",
      "tags": [
        "culture",
        "wellness"
      ],
      "description": "Worth doing more for the grounds, skyline context, and historical framing than for a pure interiors-only castle visit."
    },
    {
      "name": "Shinsekai and Tsutenkaku mood",
      "area": "tennoji",
      "tags": [
        "food",
        "culture",
        "nightlife"
      ],
      "description": "One of Osaka's most distinct atmospheres, where retro signs, kushikatsu shops, and slightly chaotic local energy all come together."
    },
    {
      "name": "Shinsaibashi and Amerikamura drift",
      "area": "shinsaibashi",
      "tags": [
        "shopping",
        "design",
        "food"
      ],
      "description": "The strongest central block for fashion, coffee, side streets, and current Osaka street style."
    },
    {
      "name": "Umeda skyline and station city texture",
      "area": "umeda",
      "tags": [
        "design",
        "shopping"
      ],
      "description": "A dense, vertical, very modern Osaka experience that makes the city feel huge, polished, and fast-moving."
    },
    {
      "name": "Nakanoshima cultural stretch",
      "area": "umeda",
      "tags": [
        "culture",
        "design",
        "wellness"
      ],
      "description": "A calmer river-island district of museums, civic buildings, and elegant city walks that balances Osaka's louder neighborhoods."
    },
    {
      "name": "Tennoji Park and Abeno edge",
      "area": "tennoji",
      "tags": [
        "wellness",
        "design"
      ],
      "description": "A useful southern Osaka reset with park space, better city views, and easier access to slower local neighborhoods."
    },
    {
      "name": "Osaka specialty dinner anchor",
      "area": "namba",
      "tags": [
        "food",
        "culture"
      ],
      "description": "Build one proper meal around okonomiyaki, kushikatsu, takoyaki, or other Osaka specialties so the city's food culture becomes a real anchor instead of background snacking."
    },
    {
      "name": "Hozenji Yokocho at night",
      "area": "namba",
      "tags": [
        "culture",
        "nightlife",
        "design"
      ],
      "description": "A narrow lantern-lit lane that feels almost improbably atmospheric right beside Osaka's louder entertainment core."
    },
    {
      "name": "Nakazakicho cafe streets",
      "area": "umeda",
      "tags": [
        "food",
        "design",
        "wellness"
      ],
      "description": "A softer old-houses-and-cafes neighborhood that gives central Osaka some needed slower texture."
    },
    {
      "name": "Utsubo Park and neighborhood cafes",
      "area": "shinsaibashi",
      "tags": [
        "wellness",
        "food",
        "design"
      ],
      "description": "A cleaner, calmer daytime district for coffee, boutiques, and a more local-feeling modern Osaka rhythm."
    },
    {
      "name": "National Museum of Art, Osaka",
      "area": "umeda",
      "tags": [
        "museum",
        "design"
      ],
      "description": "A very strong contemporary-art stop in a striking subterranean building on Nakanoshima."
    },
    {
      "name": "Sumiyoshi Taisha contrast stop",
      "area": "tennoji",
      "tags": [
        "culture",
        "wellness"
      ],
      "description": "A good way to add older shrine architecture and a quieter city edge to a trip that might otherwise stay too central."
    }
  ],
  "activities": [
    {
      "name": "Kuromon Market breakfast-and-snack start",
      "area": "namba",
      "tags": [
        "food",
        "culture"
      ],
      "timing": "morning",
      "description": "Best when the day wants seafood, fruit, grilled bites, and stronger local food energy before the crowds get thick."
    },
    {
      "name": "Osaka Castle grounds and museum pass",
      "area": "umeda",
      "tags": [
        "culture",
        "wellness"
      ],
      "timing": "morning",
      "description": "A useful first major Osaka block for city context, broad park walks, and one of the clearest historic anchors in town."
    },
    {
      "name": "Nakanoshima museum and riverside block",
      "area": "umeda",
      "tags": [
        "museum",
        "design",
        "wellness"
      ],
      "timing": "afternoon",
      "description": "A composed cultural afternoon of architecture, bridges, galleries, and calmer water-edge city views."
    },
    {
      "name": "Shinsaibashi arcade and Amerikamura loop",
      "area": "shinsaibashi",
      "tags": [
        "shopping",
        "design"
      ],
      "timing": "afternoon",
      "description": "A strong style-and-retail block where Osaka feels younger, louder, and more fashion-driven than Kyoto or Tokyo's older districts."
    },
    {
      "name": "Utsubo Park coffee and gallery pass",
      "area": "shinsaibashi",
      "tags": [
        "wellness",
        "food",
        "design"
      ],
      "timing": "afternoon",
      "description": "A more relaxed modern-city stretch for park space, specialty coffee, and small design shops."
    },
    {
      "name": "Dotonbori canal and neon circuit",
      "area": "namba",
      "tags": [
        "nightlife",
        "food",
        "design"
      ],
      "timing": "evening",
      "description": "The obvious Osaka night, but still worth doing properly if you want the city at full brightness and full volume."
    },
    {
      "name": "Hozenji Yokocho and Namba side-street dinner walk",
      "area": "namba",
      "tags": [
        "food",
        "nightlife",
        "culture"
      ],
      "timing": "evening",
      "description": "A better-shaped southern Osaka night when you want food, small lanes, and atmosphere beyond the biggest neon blocks."
    },
    {
      "name": "Shinsekai and kushikatsu evening",
      "area": "tennoji",
      "tags": [
        "food",
        "nightlife",
        "culture"
      ],
      "timing": "evening",
      "description": "Retro signs, cheap beer, and fried skewers make this one of Osaka's clearest old-school night moods."
    },
    {
      "name": "Abeno Harukas skyline stop",
      "area": "tennoji",
      "tags": [
        "design",
        "nightlife"
      ],
      "timing": "evening",
      "description": "A polished city-view stop if you want Osaka's scale laid out in a more modern, less chaotic way than Umeda's station maze."
    },
    {
      "name": "Nakazakicho old-houses cafe drift",
      "area": "umeda",
      "tags": [
        "design",
        "food",
        "wellness"
      ],
      "timing": "afternoon",
      "description": "A softer central Osaka block of renovated wooden houses, slow cafes, and boutiques that break up the city's bigger commercial energy."
    },
    {
      "name": "Osaka station city architecture sweep",
      "area": "umeda",
      "tags": [
        "design",
        "shopping"
      ],
      "timing": "afternoon",
      "description": "Useful when you want Osaka to feel futuristic, efficient, and architecturally layered rather than purely food-led."
    },
    {
      "name": "Namba Yasaka Shrine and nearby wander",
      "area": "namba",
      "tags": [
        "culture",
        "design"
      ],
      "timing": "afternoon",
      "description": "A good southern Osaka detour for one of the city's strangest shrine buildings and a more local side of Namba."
    },
    {
      "name": "National Museum of Art and Nakanoshima walk",
      "area": "umeda",
      "tags": [
        "museum",
        "design"
      ],
      "timing": "afternoon",
      "description": "A strong option if the trip wants one serious museum stop with cleaner modern architecture around it."
    },
    {
      "name": "Osaka Museum of Housing and Living",
      "area": "umeda",
      "tags": [
        "museum",
        "culture"
      ],
      "timing": "afternoon",
      "description": "A surprisingly useful city-context museum that makes Osaka's merchant past and urban evolution feel tangible."
    },
    {
      "name": "Sumiyoshi Taisha shrine outing",
      "area": "tennoji",
      "tags": [
        "culture",
        "wellness"
      ],
      "timing": "morning",
      "description": "Best when you want one quieter, older, more architectural shrine stop away from the busiest central districts."
    },
    {
      "name": "Tennoji Park and Shinsekai contrast day",
      "area": "tennoji",
      "tags": [
        "wellness",
        "culture"
      ],
      "timing": "afternoon",
      "description": "A useful southern pairing of greener space and retro-city texture that broadens Osaka beyond shopping and canal nightlife."
    },
    {
      "name": "River cruise or waterside pause in central Osaka",
      "area": "umeda",
      "tags": [
        "wellness",
        "design"
      ],
      "timing": "afternoon",
      "description": "A simple way to make Osaka feel more open and spacious when the built-up districts start to feel relentless."
    },
    {
      "name": "Umeda dinner and rooftop drinks window",
      "area": "umeda",
      "tags": [
        "food",
        "nightlife",
        "design"
      ],
      "timing": "evening",
      "description": "A cleaner, more polished Osaka night if Dotonbori is too chaotic and you want strong views with dinner."
    }
  ],
  "food": [
    {
      "name": "Hajime",
      "area": "shinsaibashi",
      "tags": [
        "luxury",
        "food",
        "design"
      ],
      "cuisine": "Avant-garde French-Japanese tasting",
      "reservation": "Book well in advance.",
      "description": "One of Osaka's most serious destination dinners, built for travelers who want the city's top end to feel ambitious, polished, and unmistakably special."
    },
    {
      "name": "Taian",
      "area": "umeda",
      "tags": [
        "luxury",
        "food",
        "culture"
      ],
      "cuisine": "Kaiseki",
      "reservation": "Reserve ahead.",
      "description": "A deeply composed kaiseki meal that suits a quieter, more traditional luxury dinner in Osaka."
    },
    {
      "name": "Yakitori Ichimatsu",
      "area": "umeda",
      "tags": [
        "luxury",
        "food"
      ],
      "cuisine": "Yakitori omakase",
      "reservation": "Reserve ahead.",
      "description": "A destination counter for charcoal-grilled chicken done with the pacing and precision of a tasting menu."
    },
    {
      "name": "Tsuruhashi Fugetsu",
      "area": "namba",
      "tags": [
        "food",
        "culture"
      ],
      "cuisine": "Okonomiyaki",
      "reservation": "Flexible.",
      "description": "A widely loved okonomiyaki standby for griddle-cooked savory pancakes, sweet sauce, mayo, and the easy comfort-food side of Osaka."
    },
    {
      "name": "Okonomiyaki Mizuno",
      "area": "namba",
      "tags": [
        "food",
        "culture"
      ],
      "cuisine": "Okonomiyaki and yaki-soba",
      "reservation": "Expect a line.",
      "description": "A Michelin Bib Gourmand Dotonbori favorite known for fluffy yam-based okonomiyaki that still feels worth the line."
    },
    {
      "name": "Kushikatsu Daruma",
      "area": "tennoji",
      "tags": [
        "food",
        "nightlife",
        "culture"
      ],
      "cuisine": "Kushikatsu",
      "reservation": "Flexible.",
      "description": "A straightforward Osaka move for fried skewers, sauce rules, and the retro Shinsekai energy that makes the whole meal land."
    },
    {
      "name": "Endo Sushi",
      "area": "umeda",
      "tags": [
        "food",
        "culture"
      ],
      "cuisine": "Market sushi",
      "reservation": "Go early.",
      "description": "A strong food-first morning when you want Osaka's market side to feel direct, fast, and genuinely satisfying."
    },
    {
      "name": "Shinsekai kushikatsu crawl",
      "area": "tennoji",
      "tags": [
        "food",
        "nightlife"
      ],
      "cuisine": "Casual Osaka classics",
      "reservation": "Flexible.",
      "description": "A casual Shinsekai dinner plan built around fried skewers, beer, retro signs, and the local rule to never double-dip the sauce."
    },
    {
      "name": "Ajinoya",
      "area": "namba",
      "tags": [
        "food"
      ],
      "cuisine": "Okonomiyaki",
      "reservation": "Expect to wait.",
      "description": "A very popular Namba okonomiyaki stop that makes sense when you want one especially crowd-loved version of the local specialty."
    },
    {
      "name": "Takoyaki Wanaka",
      "area": "namba",
      "tags": [
        "food",
        "culture"
      ],
      "cuisine": "Takoyaki",
      "reservation": "Walk-up.",
      "description": "A great snack anchor for a Dotonbori or Namba pass when you want hot takoyaki done properly, not just checked off."
    },
      {
        "name": "Cafe Taiyo no Tou",
      "area": "umeda",
      "tags": [
        "food",
        "design",
        "wellness"
      ],
      "cuisine": "Cafe and desserts",
      "reservation": "Flexible.",
      "description": "A slower Nakazakicho cafe pause when the day wants old-house charm and a more nostalgic daytime stop."
    },
    {
      "name": "Bread, Espresso & Utsubo Koen",
      "area": "shinsaibashi",
      "tags": [
        "food",
        "design",
        "wellness"
      ],
      "cuisine": "Bakery and coffee",
      "reservation": "Flexible.",
      "description": "A polished park-side breakfast or coffee stop that works especially well on a design-and-shopping day."
    },
    {
      "name": "Jinsei JET",
      "area": "umeda",
      "tags": [
        "food"
      ],
      "cuisine": "Ramen",
      "reservation": "Flexible.",
      "description": "A serious noodle stop for travelers who want one benchmark casual meal outside the obvious canal-area food crawl."
    },
    {
      "name": "Matsusaka Gyu Yakiniku M",
      "area": "namba",
      "tags": [
        "food",
        "nightlife"
      ],
      "cuisine": "Japanese barbecue",
      "reservation": "Helpful.",
      "description": "A polished Dotonbori-area yakiniku splurge where premium Matsusaka beef makes the meal feel special without leaving the Namba night flow."
    },
    {
      "name": "Sushidokoro Amano",
      "area": "umeda",
      "tags": [
        "food",
        "luxury"
      ],
      "cuisine": "Edomae sushi",
      "reservation": "Reserve ahead.",
      "description": "A refined sushi counter for one more composed Osaka splurge meal if the trip wants balance against all the louder local specialties."
    },
      {
        "name": "Lilo Coffee Roasters",
      "area": "shinsaibashi",
      "tags": [
        "food",
        "design"
      ],
      "cuisine": "Coffee",
      "reservation": "Flexible.",
      "description": "A benchmark central Osaka coffee stop when the day needs something lighter and taste-driven."
    },
    {
      "name": "Le Bouchon",
      "area": "umeda",
      "tags": [
        "food",
        "nightlife"
      ],
      "cuisine": "French bistro",
      "reservation": "Helpful.",
      "description": "A useful option when the trip wants one non-Japanese dinner that still feels intimate, polished, and city-specific rather than generic."
    },
    {
      "name": "Harukoma",
      "area": "umeda",
      "tags": [
        "food"
      ],
      "cuisine": "Casual sushi",
      "reservation": "Expect a line.",
      "description": "A high-value Osaka sushi stop for travelers who want freshness and pace without the cost or ceremony of a luxury counter."
    }
  ]
};

export const osakaSupplements = [
  { "categoryLabel": "Nature", "name": "Nakanoshima Park", "area": "umeda", "description": "Osaka's oldest public park, set on a river island and especially lovely for its formal rose garden and financial-district contrast." },
  { "categoryLabel": "Nature", "name": "Utsubo Park", "area": "shinsaibashi", "description": "A long, sunken business-district oasis lined with zelkova trees and rose beds, especially good for a slower modern Osaka pause." },
  { "categoryLabel": "Nature", "name": "Osaka Castle Park", "area": "umeda", "description": "Expansive moated grounds packed with plum and cherry trees, broad promenades, and some of the easiest central-city breathing room in Osaka." },
  { "categoryLabel": "Nature", "name": "Tennoji Park", "area": "tennoji", "description": "A revitalized open-lawn park beneath Abeno Harukas that works well for a more polished southern Osaka pause." },
  { "categoryLabel": "Nature", "name": "Minoo Park", "area": "umeda", "description": "A gentle forest trail north of the city, known for monkeys, maple foliage, and a photogenic waterfall at the end." },
  { "categoryLabel": "Nature", "name": "Expo '70 Commemorative Park", "area": "umeda", "description": "Huge former-Expo grounds with flower fields, Japanese gardens, and enough space to feel like a real day out." },
  { "categoryLabel": "Nature", "name": "Nagai Park", "area": "tennoji", "description": "A major southern Osaka park with botanical-garden appeal and the added draw of the nighttime teamLab light installation." },
  { "categoryLabel": "Nature", "name": "Kema Sakuranomiya Park", "area": "umeda", "description": "A long riverside promenade lined with thousands of cherry trees, especially strong in spring or as a cycling stretch." },
  { "categoryLabel": "Nature", "name": "Tsurumi Ryokuchi Park", "area": "umeda", "description": "A former flower-expo site best explored by bike, with windmills, garden zones, and a broader suburban Osaka feel." },
  { "categoryLabel": "Nature", "name": "Daisen Park", "area": "tennoji", "description": "A peaceful Sakai park of Japanese gardens and blossom groves set beside some of Japan's most important ancient burial mounds." },
  { "categoryLabel": "Nature", "name": "Mount Kongo", "area": "tennoji", "description": "Osaka Prefecture's highest peak, useful for bigger panoramic views and especially memorable in winter frost season." },
  { "categoryLabel": "Nature", "name": "Hoshida Park", "area": "tennoji", "description": "A forested ravine park famous for the long wooden suspension bridge called Star Swing, strong if the trip wants one outdoorsy thrill." },
  { "categoryLabel": "Nature", "name": "Oizumi Ryokuchi Park", "area": "tennoji", "description": "A large municipal park with woods, ponds, and barbecue areas, better for a local weekend rhythm than formal sightseeing." },
  { "categoryLabel": "Nature", "name": "Hattori Ryokuchi Park", "area": "umeda", "description": "A broad forested city park made more distinctive by its open-air collection of traditional Japanese farmhouses." },
  { "categoryLabel": "Nature", "name": "Mount Ikoma", "area": "tennoji", "description": "A ridge on the Osaka-Nara side known for hikes, retro amusements, and some of the best night views over the entire plain." },
  { "categoryLabel": "Nature", "name": "Maishima Sports Island", "area": "umeda", "description": "A breezy Osaka Bay edge for seaside walking, seasonal flowers, and a more open, wind-blown side of the city." },
  { "categoryLabel": "Nature", "name": "Satsukiyama Park", "area": "umeda", "description": "A mountain park in Ikeda with city views, spring blossom appeal, and a quirky free zoo." },
  { "categoryLabel": "Nature", "name": "Settsukyo Park", "area": "umeda", "description": "A rocky riverside gorge in Takatsuki, popular for summer water access and some of the better autumn foliage near Osaka." },
  { "categoryLabel": "Nature", "name": "Rinku Park", "area": "tennoji", "description": "A well-designed coastal park near the airport, especially good for sunset and plane-watching over the bay." },
  { "categoryLabel": "Nature", "name": "Katsuoji Temple Grounds", "area": "umeda", "description": "A mountainous temple estate dotted with Daruma dolls and especially beautiful during autumn-leaf season." },

  { "categoryLabel": "Food", "name": "Takoyaki snack circuit in Namba", "area": "namba", "description": "A useful excuse to graze through Osaka's signature street-food identity without committing the whole day to one queue." },
  { "categoryLabel": "Food", "name": "Depachika dinner haul in Umeda", "area": "umeda", "description": "A department-basement feast of bentos, sweets, and prepared specialties when the day wants range without a long sit-down meal." },
  { "categoryLabel": "Food", "name": "Coffee and cake in Nakazakicho", "area": "umeda", "description": "A softer daytime Osaka pause built around old houses, slower cafes, and smaller design details." },
  { "categoryLabel": "Food", "name": "551 Horai pork bun stop", "area": "namba", "description": "A classic hot-snack move for Osaka's beloved butaman, especially useful between station errands and Minami wandering." },
  { "categoryLabel": "Food", "name": "Rikuro cheesecake stop", "area": "namba", "description": "A sweets pause built around Osaka's famously jiggly, extra-light cheesecake, especially good if you want one unmistakably local dessert hit." },
  { "categoryLabel": "Food", "name": "Kani Doraku crab dinner", "area": "namba", "description": "An only-in-Osaka canal-side seafood spectacle where the giant moving crab sign is part of the point." },

  { "categoryLabel": "Cultural Sight", "name": "Shitenno-ji", "area": "tennoji", "description": "One of Japan's oldest officially administered Buddhist temples and one of the cleanest ways to see Osaka's much older spiritual side." },
  { "categoryLabel": "Cultural Sight", "name": "Namba Yasaka Shrine", "area": "namba", "description": "A wildly memorable shrine dominated by a giant lion-head stage believed to swallow bad luck and draw in success." },
  { "categoryLabel": "Cultural Sight", "name": "Hozenji Temple", "area": "namba", "description": "A tiny moss-covered prayer stop famous for the water-splashed Fudo Myoo statue and the atmospheric lane wrapped around it." },
  { "categoryLabel": "Cultural Sight", "name": "Osaka Castle", "area": "umeda", "description": "A rebuilt but still imposing gold-accented castle tower set above some of the most impressive original stone walls in the country." },
  { "categoryLabel": "Cultural Sight", "name": "Osaka Tenmangu Shrine", "area": "umeda", "description": "The spiritual home of the Tenjin Festival and one of the most important long-running shrines in the city." },
  { "categoryLabel": "Cultural Sight", "name": "Isshin-ji Temple", "area": "tennoji", "description": "A distinctive temple known for Buddha statues made from the ashes of the deceased, making it one of Osaka's most unusual sacred sites." },
  { "categoryLabel": "Cultural Sight", "name": "Tsuyuten Shrine (Ohatsu Tenjin)", "area": "umeda", "description": "A central shrine tied to a famous tragic love story and now often visited for prayers connected to romance." },
  { "categoryLabel": "Cultural Sight", "name": "Imamiya Ebisu Shrine", "area": "namba", "description": "A busy shrine associated with prosperity and commerce, fitting naturally into Osaka's merchant-city identity." },
  { "categoryLabel": "Cultural Sight", "name": "Mozu Tombs", "area": "tennoji", "description": "The vast keyhole-shaped kofun burial complex in Sakai, tied to one of the largest funerary monuments on earth." },
  { "categoryLabel": "Cultural Sight", "name": "Katsuo-ji Temple", "area": "umeda", "description": "A mountain temple nicknamed the Temple of Winners, filled with red Daruma dolls left behind by visitors hoping for success." },
  { "categoryLabel": "Cultural Sight", "name": "Taiyuji Temple", "area": "umeda", "description": "A surprisingly peaceful historic temple tucked into the high-rise and neon density of Osaka's Kita district." },
  { "categoryLabel": "Cultural Sight", "name": "Sanko Shrine", "area": "tennoji", "description": "A small but meaningful historical shrine linked to Sanada Yukimura and the memory of the Siege of Osaka." },
  { "categoryLabel": "Cultural Sight", "name": "Tamatsukuri Inari Shrine", "area": "tennoji", "description": "A shrine long associated with the protection of Osaka Castle, with traces of wartime history layered into the grounds." },
  { "categoryLabel": "Cultural Sight", "name": "Mitami Shrine", "area": "umeda", "description": "A lesser-known shrine with links to traditional performing arts and classical music culture." },
  { "categoryLabel": "Cultural Sight", "name": "Fujii-dera Temple", "area": "tennoji", "description": "A quieter temple outing with World Heritage ties and a major thousand-armed Kannon image." },
  { "categoryLabel": "Cultural Sight", "name": "Myokokuji Temple", "area": "tennoji", "description": "A Sakai temple tied to legends of Oda Nobunaga and an ancient cycad that gives the site unusual historical texture." },
  { "categoryLabel": "Cultural Sight", "name": "Abeno Shrine", "area": "tennoji", "description": "A historically important southern Osaka shrine dedicated to a 14th-century imperial loyalist." },
  { "categoryLabel": "Cultural Sight", "name": "Nozaki Kannon (Jigenji)", "area": "tennoji", "description": "A hillside temple known for broad valley views and long ties to bunraku and classical storytelling culture." },
  { "categoryLabel": "Cultural Sight", "name": "Hiraoka Shrine", "area": "tennoji", "description": "A tranquil forest-approach shrine at the base of Mount Ikoma with a deeper atmosphere than most central-city sites." },

  { "categoryLabel": "Shopping", "name": "Grand Front Osaka", "area": "umeda", "description": "A sleek multi-tower station-city complex for high-tech showrooms, fashion, and one of Umeda's strongest polished retail passes." },
  { "categoryLabel": "Shopping", "name": "Shinsaibashi-suji Shopping Street", "area": "shinsaibashi", "description": "The city's major covered arcade, packed with fashion, cosmetics, chain favorites, and a nonstop flow of central Osaka foot traffic." },
  { "categoryLabel": "Shopping", "name": "Orange Street", "area": "shinsaibashi", "description": "Minamihorie's more refined design-and-fashion strip, especially good for interiors, streetwear, and a calmer shopping rhythm." },
  { "categoryLabel": "Shopping", "name": "Abeno Harukas Kintetsu Store", "area": "tennoji", "description": "The largest department store in Japan by floor space, and a very strong southern Osaka shopping anchor." },
  { "categoryLabel": "Shopping", "name": "Americamura", "area": "shinsaibashi", "description": "Osaka's gritty youth-culture district for vintage clothes, imported streetwear, and a louder, more expressive retail mood." },
  { "categoryLabel": "Shopping", "name": "Kuromon Ichiba Market", "area": "namba", "description": "A 600-meter market that doubles as both a serious snack corridor and a place to browse premium fruits, seafood, and kitchen goods." },
  { "categoryLabel": "Shopping", "name": "Nipponbashi Den Den Town", "area": "namba", "description": "Osaka's answer to Akihabara, best for anime figures, retro games, electronics, and a slightly grittier otaku atmosphere." },
  { "categoryLabel": "Shopping", "name": "Tenjinbashisuji Shopping Street", "area": "umeda", "description": "Japan's longest straight shopping arcade, much better for seeing everyday Osaka retail rhythm than for luxury browsing." },
  { "categoryLabel": "Shopping", "name": "Lucua Osaka", "area": "umeda", "description": "A busy Osaka Station fashion complex for trend-driven domestic labels and easy central browsing." },
  { "categoryLabel": "Shopping", "name": "Hep Five", "area": "umeda", "description": "A youth-focused Umeda shopping mall with pop styling and the bright red Ferris wheel built into the roof." },
  { "categoryLabel": "Shopping", "name": "Hankyu Department Store Umeda", "area": "umeda", "description": "The high-end Umeda retail anchor, especially worth it for the depachika and luxury-brand concentration." },
  { "categoryLabel": "Shopping", "name": "Namba Parks", "area": "namba", "description": "A canyon-like shopping complex topped by terraced gardens, good for combining retail with a rarer open-air feel in central Osaka." },
  { "categoryLabel": "Shopping", "name": "Sennichimae Doguyasuji Shopping Street", "area": "namba", "description": "The kitchen-supply street for knives, restaurant tools, serving ware, and the famous realistic plastic food displays." },
  { "categoryLabel": "Shopping", "name": "Rinku Premium Outlets", "area": "tennoji", "description": "A large airport-side outlet complex if the trip wants a more dedicated bargain-luxury shopping detour." },
  { "categoryLabel": "Shopping", "name": "Lalaport Expo City", "area": "umeda", "description": "A major shopping-and-entertainment complex by Expo Park, good if the day is already heading north for a broader outing." },
  { "categoryLabel": "Shopping", "name": "Whity Umeda", "area": "umeda", "description": "A vast underground shopping maze that somehow manages to be confusing, practical, and very Osaka all at once." },
  { "categoryLabel": "Shopping", "name": "Crysta Nagahori", "area": "shinsaibashi", "description": "A broad underground retail corridor linking Shinsaibashi and the Horie side with cleaner styling than the busier arcades above." },
  { "categoryLabel": "Shopping", "name": "Namba Walk", "area": "namba", "description": "A long subterranean avenue of shops, cafes, and daily convenience beneath the core of Minami." },
  { "categoryLabel": "Shopping", "name": "Herbis Plaza", "area": "umeda", "description": "An opulent Umeda complex for ultra-high-end boutiques and a smoother luxury-retail mood." },
  { "categoryLabel": "Shopping", "name": "Don Quijote Dotonbori", "area": "namba", "description": "A chaotic but very Osaka late-night shopping stop for absurd snacks, souvenirs, cosmetics, and novelty buys." },

  { "categoryLabel": "Museum", "name": "Osaka Museum of History", "area": "umeda", "description": "A top-floor-first museum where you can look down on the former Naniwa Palace ruins before tracing Osaka's history back through time." },
  { "categoryLabel": "Museum", "name": "Abeno Harukas Art Museum", "area": "tennoji", "description": "A rotating-exhibition museum that works especially well if you're already building a Tennoji or skyline day." },
  { "categoryLabel": "Museum", "name": "Osaka Science Museum", "area": "umeda", "description": "A hands-on science stop with a serious planetarium, especially good for families or a rainy Osaka afternoon." },
  { "categoryLabel": "Museum", "name": "Cup Noodles Museum Osaka Ikeda", "area": "umeda", "description": "A playful museum dedicated to instant ramen, best if the trip wants one fun, highly interactive side outing." },
  { "categoryLabel": "Museum", "name": "Nakanoshima Museum of Art", "area": "umeda", "description": "A sleek black-cube museum focused on modern and contemporary art and design, ideal as part of a Nakanoshima culture block." },
  { "categoryLabel": "Museum", "name": "Mint Museum", "area": "umeda", "description": "A coin museum tied to the Japan Mint and especially famous during blossom season when the adjacent cherry-tree walkway opens." },
  { "categoryLabel": "Museum", "name": "Kamigata Ukiyoe Museum", "area": "namba", "description": "A small specialized museum for Osaka-region kabuki actor prints, strong when you want something more niche and locally rooted." },
  { "categoryLabel": "Museum", "name": "Sakai City Museum", "area": "tennoji", "description": "A good museum for the history of the kofun tombs and the broader Sakai area if the trip heads that way." },
  { "categoryLabel": "Museum", "name": "Koji Kinutani Tenku Art Museum", "area": "umeda", "description": "A vividly colored skyline-adjacent museum experience that feels more immersive and playful than a standard gallery visit." },
  { "categoryLabel": "Museum", "name": "Peace Osaka", "area": "umeda", "description": "A sobering museum focused on the devastating air raids and wartime experience of Osaka." },
  { "categoryLabel": "Museum", "name": "Glion Museum", "area": "umeda", "description": "A warehouse-set collection of historic cars, strong if the trip wants one more unusual specialty museum." },
  { "categoryLabel": "Museum", "name": "Asahi Breweries Suita Factory", "area": "umeda", "description": "A brewery tour ending in cold tasting pours when the trip wants one lighter branded activity." },
  { "categoryLabel": "Museum", "name": "Bicycle Museum Cycle Center", "area": "tennoji", "description": "A specialized Sakai museum tracing the evolution of the bicycle, especially apt in a city tied to craft and manufacturing." },
  { "categoryLabel": "Museum", "name": "Osaka City Museum of Fine Arts", "area": "tennoji", "description": "A more classical art stop inside Tennoji Park, good for Japanese and Chinese painting and sculpture collections." },
  { "categoryLabel": "Museum", "name": "The Entrepreneurial Museum of Challenge and Innovation", "area": "umeda", "description": "A highly Osaka museum of business founders and industrial ambition, especially if the city's commercial identity interests you." },
  { "categoryLabel": "Museum", "name": "Yuki Museum of Art", "area": "shinsaibashi", "description": "A small elegant museum focused on tea-ceremony utensils and classical art, better for a quieter design-minded stop." },
  { "categoryLabel": "Museum", "name": "Museum of Oriental Ceramics, Osaka", "area": "umeda", "description": "One of the city's most refined collections, especially strong for Chinese and Korean ceramics in a calmer museum setting." },
  { "categoryLabel": "Museum", "name": "Panasonic Museum", "area": "umeda", "description": "A corporate-history museum that makes most sense if you want to see Osaka through the lens of Japanese industrial innovation." },

  { "categoryLabel": "Place to Wander", "name": "Nakazakicho", "area": "umeda", "description": "A maze of prewar houses turned into indie cafes, studios, and shops that gives Umeda a much softer, more human texture." },
  { "categoryLabel": "Place to Wander", "name": "Dotonbori Canal Walk", "area": "namba", "description": "The full neon-and-water walk beneath giant restaurant signs and mechanical displays, best taken slowly rather than as a single bridge photo." },
  { "categoryLabel": "Place to Wander", "name": "Shinsekai", "area": "tennoji", "description": "A gritty retro entertainment district of dive bars, kushikatsu shops, and over-the-top signage that still feels fully itself." },
  { "categoryLabel": "Place to Wander", "name": "Hozenji Yokocho", "area": "namba", "description": "A narrow stone-paved lane of lanterns and tiny restaurants that preserves an unexpectedly old Osaka mood right off Dotonbori." },
  { "categoryLabel": "Place to Wander", "name": "Ohatsu Tenjin Urasando", "area": "umeda", "description": "A lively alley of paper lanterns and open-front izakayas that gives Umeda a stronger after-dark personality." },
  { "categoryLabel": "Place to Wander", "name": "Amerikamura", "area": "shinsaibashi", "description": "A younger, scruffier style district for streetwear, record shops, and a more expressive side of Osaka." },
  { "categoryLabel": "Place to Wander", "name": "Tenma", "area": "umeda", "description": "A chaotic local maze of tiny bars and cheap eats that feels more authentic and less stage-set than the main visitor corridors." },
  { "categoryLabel": "Place to Wander", "name": "Kitashinchi", "area": "umeda", "description": "A polished nightlife grid of high-end dining, bars, and after-work city energy just south of Osaka Station." },
  { "categoryLabel": "Place to Wander", "name": "Ura Namba", "area": "namba", "description": "The livelier side-street Namba grid where tiny restaurants and bars make for a better evening drift than the main boulevard." },
  { "categoryLabel": "Place to Wander", "name": "Midosuji Avenue", "area": "shinsaibashi", "description": "Osaka's grand boulevard, especially attractive during ginkgo season when the whole avenue turns gold." },
  { "categoryLabel": "Place to Wander", "name": "Karahori Shopping Street Area", "area": "tennoji", "description": "A more preserved Osaka neighborhood of machiya houses and slopes that survived wartime destruction better than most." },
  { "categoryLabel": "Place to Wander", "name": "Janjan Yokocho Alley", "area": "tennoji", "description": "A narrow Shinsekai arcade where old-school game parlors, fried-food counters, and nostalgic grit all pile together." },
  { "categoryLabel": "Place to Wander", "name": "Nakanoshima Promenade", "area": "umeda", "description": "A more civilized architectural riverside walk linking civic buildings, bridges, and museum stops." },
  { "categoryLabel": "Place to Wander", "name": "Umeda Underground Labyrinth", "area": "umeda", "description": "The sprawling multi-level station-city maze that somehow manages to be confusing, useful, and very Osaka all at once." },
  { "categoryLabel": "Place to Wander", "name": "Tsuruhashi Koreatown", "area": "tennoji", "description": "A deeply aromatic neighborhood of yakiniku smoke, kimchi shops, and Korean community texture unlike any other part of Osaka." },
  { "categoryLabel": "Place to Wander", "name": "Sennichimae", "area": "namba", "description": "A major Minami entertainment artery where comedy clubs, signage, shops, and nightlife all overlap." },
  { "categoryLabel": "Place to Wander", "name": "Minami-Senba", "area": "shinsaibashi", "description": "A calmer grid of select shops, coffee spots, and design studios just far enough from the main crowds." },
  { "categoryLabel": "Place to Wander", "name": "Triangle Park", "area": "shinsaibashi", "description": "Amerikamura's small but famous plaza, great for people-watching, takeout snacks, and a quick hit of youth-culture energy." },
  { "categoryLabel": "Place to Wander", "name": "Horie District", "area": "shinsaibashi", "description": "A stylish west-of-Amerikamura district for interiors, coffee roasters, and a more relaxed upscale wander." },
  { "categoryLabel": "Place to Wander", "name": "Juso District", "area": "umeda", "description": "A gritty across-the-river district with bars, cheap eats, and a more deeply local nightlife-and-dining feel." },

  { "categoryLabel": "Nightlife & Entertainment", "name": "Club Circus", "area": "namba", "description": "A respected underground electronic club with a grimier, more serious dance-music atmosphere than Osaka's mainstream venues." },
  { "categoryLabel": "Nightlife & Entertainment", "name": "Giraffe Japan", "area": "namba", "description": "A full-scale mainstream Minami club if the trip wants one very big, commercial Osaka party night." },
  { "categoryLabel": "Nightlife & Entertainment", "name": "Bar Nayuta", "area": "shinsaibashi", "description": "An atmospheric, harder-to-find cocktail bar known for mood, personality, and bartenders who build drinks around your preferences." },
  { "categoryLabel": "Nightlife & Entertainment", "name": "Misono Building bar maze", "area": "namba", "description": "A famously strange retro building filled with tiny themed bars, ideal if the night should feel weird, niche, and very local." },
  { "categoryLabel": "Nightlife & Entertainment", "name": "Space Station", "area": "namba", "description": "A friendly bar for retro gaming and drinks when the trip wants one playful, English-friendly night stop." },
  { "categoryLabel": "Nightlife & Entertainment", "name": "Cherry Bomb", "area": "shinsaibashi", "description": "A small rock-and-roll dive with a louder, rowdier, more social feel than the polished cocktail places nearby." },
  { "categoryLabel": "Nightlife & Entertainment", "name": "Moonshine Karaoke Bar", "area": "namba", "description": "A welcoming, boisterous karaoke stop if the night wants singing and not too much formality." },
  { "categoryLabel": "Nightlife & Entertainment", "name": "Club Joule", "area": "namba", "description": "A longstanding Osaka electronic venue for a bigger-scale club night in the Minami area." },
  { "categoryLabel": "Nightlife & Entertainment", "name": "National Bunraku Theatre", "area": "namba", "description": "A cultural-evening option for one of Japan's great traditional puppet-theater forms, especially if the trip wants an artful night." },
  { "categoryLabel": "Nightlife & Entertainment", "name": "Shochikuza Theatre", "area": "namba", "description": "A Dotonbori-side theater for kabuki and larger stage performances in a handsome neo-Renaissance setting." },
  { "categoryLabel": "Nightlife & Entertainment", "name": "Billboard Live Osaka", "area": "umeda", "description": "A seated music-and-dinner room for a smoother, more polished Osaka evening than a bar crawl." },
  { "categoryLabel": "Nightlife & Entertainment", "name": "Piccadilly Osaka", "area": "umeda", "description": "An Umeda club with a bigger theatrical-production feel for nights that should lean flashy and high-energy." },
  { "categoryLabel": "Nightlife & Entertainment", "name": "Cinquecento", "area": "shinsaibashi", "description": "A popular easygoing bar where every drink is the same price, making it a low-friction social stop." },
  { "categoryLabel": "Nightlife & Entertainment", "name": "Osaka Shiki Theater", "area": "umeda", "description": "A polished theater-night option for large-scale musical productions in the Umeda area." },

  { "categoryLabel": "Amusement & Activities", "name": "Universal Studios Japan", "area": "umeda", "description": "The major theme-park day for Harry Potter, Nintendo, and a full-scale amusement outing rather than city wandering." },
  { "categoryLabel": "Amusement & Activities", "name": "Osaka Aquarium Kaiyukan", "area": "umeda", "description": "One of the world's largest aquariums and a very strong family or rainy-day Osaka attraction." },
  { "categoryLabel": "Amusement & Activities", "name": "Umeda Sky Building", "area": "umeda", "description": "A floating-garden observatory reached by dramatic escalators, still one of the city's most memorable skyline-view activities." },
  { "categoryLabel": "Amusement & Activities", "name": "Abeno Harukas 300 Observatory", "area": "tennoji", "description": "A polished high-elevation viewing deck with broad Kansai vistas from Japan's tallest skyscraper." },
  { "categoryLabel": "Amusement & Activities", "name": "Tsutenkaku Tower", "area": "tennoji", "description": "A retro Osaka tower experience that works best if you embrace the kitsch and Shinsekai context around it." },
  { "categoryLabel": "Amusement & Activities", "name": "Spa World", "area": "tennoji", "description": "A giant themed bath complex for a full laid-back soak-and-reset afternoon." },
  { "categoryLabel": "Amusement & Activities", "name": "Solaniwa Onsen", "area": "umeda", "description": "A more theatrical hot-spring theme-park option with yukata, baths, and a designed Edo-era fantasy mood." },
  { "categoryLabel": "Amusement & Activities", "name": "Tempozan Ferris Wheel", "area": "umeda", "description": "A slower bay-side ride that works best as part of a wider aquarium or waterfront day." },
  { "categoryLabel": "Amusement & Activities", "name": "Tombori River Cruise", "area": "namba", "description": "A short canal ride that turns the Dotonbori signscape into a more theatrical, from-the-water experience." },
  { "categoryLabel": "Amusement & Activities", "name": "Osaka Duck Tour", "area": "umeda", "description": "An amphibious city-and-river tour that leans fun rather than elegant, but gives a broader feel for central Osaka." },
  { "categoryLabel": "Amusement & Activities", "name": "teamLab Botanical Garden Osaka", "area": "tennoji", "description": "A night garden transformed into an immersive light installation, especially good if the trip wants one more contemporary spectacle." },
  { "categoryLabel": "Amusement & Activities", "name": "Nifrel", "area": "umeda", "description": "A highly curated hybrid of aquarium, zoo, and art-installation sensibility near Expo City." },
  { "categoryLabel": "Amusement & Activities", "name": "VS Park", "area": "umeda", "description": "A playful digital-sports outing that works well for groups or a more active entertainment block." },
  { "categoryLabel": "Amusement & Activities", "name": "Kids Plaza Osaka", "area": "umeda", "description": "A standout indoor family stop with interactive exhibits and large-scale play environments." },
  { "categoryLabel": "Amusement & Activities", "name": "Hep Five Ferris Wheel", "area": "umeda", "description": "A quick iconic ride above Umeda that pairs well with shopping and a lighter city-view moment." },
  { "categoryLabel": "Amusement & Activities", "name": "Legoland Discovery Center", "area": "umeda", "description": "An indoor family attraction better for children than for adult-only city time, but useful in bad weather." },
  { "categoryLabel": "Amusement & Activities", "name": "Hirakata Park", "area": "umeda", "description": "A beloved local amusement park with an older-fashioned charm that feels very different from USJ." },

  { "categoryLabel": "Other", "name": "Tower of the Sun", "area": "umeda", "description": "Taro Okamoto's iconic Expo monument, surreal from outside and even better if you manage to book interior access." },
  { "categoryLabel": "Other", "name": "Glico Running Man Sign", "area": "namba", "description": "Still the city's most obvious symbol, best treated as part of a wider Dotonbori night rather than the destination itself." },
  { "categoryLabel": "Other", "name": "Water Bus Aqua-Liner", "area": "umeda", "description": "A lower-profile canal-and-river ride for seeing central Osaka's bridges and embankments from the water." },
  { "categoryLabel": "Other", "name": "Gate Tower Building", "area": "umeda", "description": "A fun piece of Osaka engineering absurdity where an elevated highway slices through the middle floors of an office tower." },
  { "categoryLabel": "Other", "name": "Kyocera Dome", "area": "namba", "description": "A very Osaka big-event outing if the timing works for baseball or another major live show." },
  { "categoryLabel": "Other", "name": "Suntory Yamazaki Distillery", "area": "umeda", "description": "A worthwhile side trip to the Osaka-Kyoto border for travelers who care about Japanese whisky enough to plan ahead." },
  { "categoryLabel": "Other", "name": "Osaka Central Fish Market tuna auction", "area": "umeda", "description": "A before-dawn wholesale-market experience that makes the city's food system feel more tangible than any polished restaurant could." },
  { "categoryLabel": "Other", "name": "Tsuruhashi deeper Koreatown streets", "area": "tennoji", "description": "A more residential extension of Koreatown that shows everyday community life beyond the main grill-smoke corridors." },
  { "categoryLabel": "Other", "name": "Chikitsu-gu Shrine", "area": "namba", "description": "A small but important market-connected shrine that makes more sense as part of a wholesale-food or merchant-city wander." }
];

export default { guide: osakaGuide, supplements: osakaSupplements };
