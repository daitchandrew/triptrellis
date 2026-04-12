// Tokyo guide data

export const tokyoGuide = {
  "label": "Tokyo",
  "country": "Japan",
  "currency": "Use an IC card for transit and keep some cash for shrines, small bars, and older shops.",
  "transferNote": "Airport trains work well, but a car can be worth it after a long arrival or on a tight departure morning.",
  "areaAdjacency": {
    "shibuya": [
      "shinjuku",
      "ginza"
    ],
    "shinjuku": [
      "shibuya",
      "asakusa"
    ],
    "ginza": [
      "asakusa",
      "shibuya"
    ],
    "asakusa": [
      "ginza",
      "shinjuku"
    ]
  },
  "hotelAreas": {
    "shibuya": {
      "label": "Shibuya",
      "mood": "energetic and design-heavy",
      "strengths": [
        "nightlife",
        "design",
        "food"
      ]
    },
    "shinjuku": {
      "label": "Shinjuku",
      "mood": "fast-moving and transit-friendly",
      "strengths": [
        "nightlife",
        "transit",
        "food"
      ]
    },
    "ginza": {
      "label": "Ginza",
      "mood": "refined and polished",
      "strengths": [
        "luxury",
        "shopping",
        "food"
      ]
    },
    "asakusa": {
      "label": "Asakusa",
      "mood": "heritage-rich and grounded",
      "strengths": [
        "culture",
        "walkability",
        "value"
      ]
    }
  },
  "hotels": {
    "luxury": [
      {
        "name": "Aman Tokyo",
        "area": "ginza",
        "vibe": "Quiet luxury for a restorative, elevated Tokyo stay.",
        "bestFor": [
          "luxury",
          "wellness",
          "design"
        ]
      },
      {
        "name": "The Tokyo EDITION, Toranomon",
        "area": "ginza",
        "vibe": "Design-forward and polished with strong dining energy.",
        "bestFor": [
          "luxury",
          "food",
          "nightlife"
        ]
      },
      {
        "name": "HOSHINOYA Tokyo",
        "area": "ginza",
        "vibe": "Serene and distinctive, especially for a calmer Tokyo rhythm.",
        "bestFor": [
          "luxury",
          "wellness",
          "culture"
        ]
      },
      {
        "name": "Palace Hotel Tokyo",
        "area": "ginza",
        "vibe": "Elegant and expansive with a calmer imperial-side setting.",
        "bestFor": [
          "luxury",
          "wellness",
          "food"
        ]
      }
    ],
    "premium": [
      {
        "name": "Trunk Hotel Yoyogi Park",
        "area": "shibuya",
        "vibe": "One of the smartest stylish bases in the city.",
        "bestFor": [
          "design",
          "food",
          "wellness"
        ]
      },
      {
        "name": "Hotel Groove Shinjuku",
        "area": "shinjuku",
        "vibe": "Playful and easy for high-energy nights.",
        "bestFor": [
          "nightlife",
          "transit",
          "food"
        ]
      },
      {
        "name": "sequence MIYASHITA PARK",
        "area": "shibuya",
        "vibe": "Clean and modern with immediate access to young Tokyo energy.",
        "bestFor": [
          "design",
          "nightlife",
          "value"
        ]
      },
      {
        "name": "Shibuya Stream Hotel",
        "area": "shibuya",
        "vibe": "A slick Shibuya stay with strong transit leverage and easy nightlife access.",
        "bestFor": [
          "nightlife",
          "transit",
          "food"
        ]
      }
    ],
    "smart": [
      {
        "name": "Mitsui Garden Hotel Ginza Premier",
        "area": "ginza",
        "vibe": "Comfortable and polished for a first Tokyo trip.",
        "bestFor": [
          "food",
          "shopping",
          "value"
        ]
      },
      {
        "name": "Hotel Niwa Tokyo",
        "area": "asakusa",
        "vibe": "Softer and quieter with a more relaxed pace.",
        "bestFor": [
          "culture",
          "value",
          "wellness"
        ]
      },
      {
        "name": "The Gate Hotel Asakusa Kaminarimon",
        "area": "asakusa",
        "vibe": "Great if you want old Tokyo mornings without overpaying.",
        "bestFor": [
          "culture",
          "walkability",
          "value"
        ]
      },
      {
        "name": "Onyado Nono Asakusa Bettei",
        "area": "asakusa",
        "vibe": "A comfortable modern-Japanese base that works well for heritage-heavy Tokyo days.",
        "bestFor": [
          "culture",
          "wellness",
          "value"
        ]
      }
    ]
  },
  "cantMiss": [
    {
      "name": "Senso-ji and Asakusa",
      "area": "asakusa",
      "tags": [
        "culture"
      ],
      "description": "Tokyo's most legible old-city opening: temple smoke, lanterns, side-street snacks, and heritage atmosphere before the midday crowds thicken."
    },
    {
      "name": "Omotesando and Harajuku",
      "area": "shibuya",
      "tags": [
        "design",
        "shopping"
      ],
      "description": "The strongest design-and-fashion corridor in Tokyo."
    },
    {
      "name": "Shibuya after dark",
      "area": "shibuya",
      "tags": [
        "nightlife",
        "design"
      ],
      "description": "One of the best places to feel Tokyo’s speed and scale."
    },
    {
      "name": "Meiji Jingu and Yoyogi",
      "area": "shibuya",
      "tags": [
        "culture",
        "wellness"
      ],
      "description": "A calm counterweight to the city’s intensity."
    },
    {
      "name": "Shinjuku night atmosphere",
      "area": "shinjuku",
      "tags": [
        "nightlife",
        "food"
      ],
      "description": "A must if you want one cinematic Tokyo night."
    },
    {
      "name": "Ginza for one polished afternoon",
      "area": "ginza",
      "tags": [
        "luxury",
        "shopping"
      ],
      "description": "Luxury shopping, depachika food halls, and refined city texture."
    },
    {
      "name": "Tsukiji outer market zone",
      "area": "ginza",
      "tags": [
        "food"
      ],
      "description": "Still useful for a food-first morning even in modern Tokyo."
    },
    {
      "name": "Yanaka old Tokyo lanes",
      "area": "asakusa",
      "tags": [
        "culture",
        "wellness"
      ],
      "description": "A gentler side of the city that feels human-scale."
    },
    {
      "name": "Tokyo Station and Marunouchi",
      "area": "ginza",
      "tags": [
        "design"
      ],
      "description": "A more polished architecture-and-city-texture block."
    },
    {
      "name": "TeamLab or modern digital art",
      "area": "ginza",
      "tags": [
        "design"
      ],
      "description": "Good if the trip wants one more contemporary attraction."
    },
    {
      "name": "Tsukiji Outer Market",
      "area": "ginza",
      "tags": [
        "food",
        "culture"
      ],
      "description": "Still one of the strongest food-first morning anchors in central Tokyo."
    },
    {
      "name": "Daikanyama",
      "area": "shibuya",
      "tags": [
        "design",
        "shopping"
      ],
      "description": "A calmer, more stylish side of Tokyo with strong retail and café texture."
    },
    {
      "name": "Nakameguro canal area",
      "area": "shibuya",
      "tags": [
        "wellness",
        "design"
      ],
      "description": "A very good wandering district when you want slower pace and visual charm."
    },
    {
      "name": "Tokyo Metropolitan Government views",
      "area": "shinjuku",
      "tags": [
        "design",
        "wellness"
      ],
      "description": "An easy skyline stop if you want city scale without overcomplicating things."
    },
    {
      "name": "Tokyo National Museum",
      "area": "asakusa",
      "tags": [
        "museum",
        "culture"
      ],
      "description": "Japan's oldest national museum and one of the strongest art-and-history anchors in the city."
    },
    {
      "name": "Mori Art Museum",
      "area": "shibuya",
      "tags": [
        "museum",
        "design"
      ],
      "description": "A contemporary art museum in Roppongi Hills known for ambitious shows and a sky-high setting."
    },
    {
      "name": "teamLab Borderless: MORI Building Digital Art Museum",
      "area": "ginza",
      "tags": [
        "museum",
        "design"
      ],
      "description": "A large-scale immersive digital art museum for a more spectacle-driven Tokyo stop."
    },
    {
      "name": "Nezu Museum",
      "area": "shibuya",
      "tags": [
        "museum",
        "wellness",
        "design"
      ],
      "description": "A quietly beautiful museum for premodern Japanese and East Asian art with a superb garden."
    }
  ],
  "activities": [
    {
      "name": "Asakusa temple start and Kappabashi detour",
      "area": "asakusa",
      "tags": [
        "culture",
        "shopping"
      ],
      "timing": "morning",
      "description": "A strong heritage morning with a useful design and kitchenware add-on."
    },
    {
      "name": "Ueno Park and Tokyo National Museum pairing",
      "area": "asakusa",
      "tags": [
        "culture",
        "museum",
        "wellness"
      ],
      "timing": "afternoon",
      "description": "A strong art-and-history afternoon if you want culture without crossing too many neighborhoods."
    },
    {
      "name": "Yanaka old Tokyo walk",
      "area": "asakusa",
      "tags": [
        "culture",
        "wellness"
      ],
      "timing": "morning",
      "description": "A calmer, more atmospheric side of Tokyo for a softer day."
    },
    {
      "name": "Sometaro and old-school neighborhood dinner flow",
      "area": "asakusa",
      "tags": [
        "food",
        "culture"
      ],
      "timing": "evening",
      "description": "A heritage-rich Tokyo night that feels grounded rather than flashy."
    },
    {
      "name": "Meiji Jingu and Yoyogi Park morning",
      "area": "shibuya",
      "tags": [
        "wellness",
        "culture"
      ],
      "timing": "morning",
      "description": "Grounds the trip before diving into the city’s energy."
    },
    {
      "name": "Omotesando architecture and café drift",
      "area": "shibuya",
      "tags": [
        "design",
        "food",
        "shopping"
      ],
      "timing": "afternoon",
      "description": "Beautiful, flexible, and excellent for a design-heavy day."
    },
    {
      "name": "Daikanyama and Nakameguro loop",
      "area": "shibuya",
      "tags": [
        "design",
        "wellness",
        "food"
      ],
      "timing": "afternoon",
      "description": "A stronger low-key day if you care more about taste than spectacle."
    },
    {
      "name": "Shibuya scramble and skyline block",
      "area": "shibuya",
      "tags": [
        "design",
        "nightlife"
      ],
      "timing": "evening",
      "description": "High-energy Tokyo in its most iconic form."
    },
    {
      "name": "Miyashita Park and fashion circuit",
      "area": "shibuya",
      "tags": [
        "shopping",
        "design"
      ],
      "timing": "afternoon",
      "description": "Useful when the trip wants current retail and youth energy."
    },
    {
      "name": "Shinjuku Gyoen reset",
      "area": "shinjuku",
      "tags": [
        "wellness",
        "design"
      ],
      "timing": "afternoon",
      "description": "A smart decompression block in a dense city schedule."
    },
    {
      "name": "Golden Gai or tucked-away izakaya night",
      "area": "shinjuku",
      "tags": [
        "nightlife",
        "food"
      ],
      "timing": "evening",
      "description": "Best for one Tokyo night that feels cinematic."
    },
    {
      "name": "Tokyo Metropolitan Building views",
      "area": "shinjuku",
      "tags": [
        "design",
        "wellness"
      ],
      "timing": "evening",
      "description": "An easier skyline stop if you want a classic city look."
    },
    {
      "name": "Department-store and depachika pass",
      "area": "ginza",
      "tags": [
        "food",
        "shopping",
        "luxury"
      ],
      "timing": "afternoon",
      "description": "Elegant and low-friction for a movement-heavy day."
    },
    {
      "name": "Ginza flagship browsing",
      "area": "ginza",
      "tags": [
        "shopping",
        "design",
        "luxury"
      ],
      "timing": "afternoon",
      "description": "Best if the trip wants one sharply polished retail block."
    },
    {
      "name": "Tokyo Station and Marunouchi walk",
      "area": "ginza",
      "tags": [
        "design",
        "wellness"
      ],
      "timing": "morning",
      "description": "A refined city-texture walk with less chaos than central nightlife districts."
    },
    {
      "name": "TeamLab or timed-entry concept stop",
      "area": "ginza",
      "tags": [
        "design"
      ],
      "timing": "morning",
      "description": "A useful modern anchor if the trip wants one more spectacle-driven attraction."
    },
    {
      "name": "Tsukiji food-first morning",
      "area": "ginza",
      "tags": [
        "food",
        "culture"
      ],
      "timing": "morning",
      "description": "A strong breakfast-and-market move before the rest of the city fully wakes up."
    },
    {
      "name": "Daikanyama bookshop and café drift",
      "area": "shibuya",
      "tags": [
        "design",
        "food",
        "wellness"
      ],
      "timing": "afternoon",
      "description": "A smoother slower district loop when you want a more elegant Tokyo day."
    },
    {
      "name": "Nakameguro canal walk and boutiques",
      "area": "shibuya",
      "tags": [
        "design",
        "shopping",
        "wellness"
      ],
      "timing": "afternoon",
      "description": "A very good area for browsing, coffee, and a lower-volume city feel."
    },
    {
      "name": "Kabukicho energy window",
      "area": "shinjuku",
      "tags": [
        "nightlife",
        "design"
      ],
      "timing": "evening",
      "description": "An easy way to let Tokyo feel louder and more cinematic for one night."
    },
    {
      "name": "Tokyo National Museum visit",
      "area": "asakusa",
      "tags": [
        "museum",
        "culture"
      ],
      "timing": "afternoon",
      "description": "A major museum block if you want one substantial art-and-history afternoon."
    },
    {
      "name": "Mori Art Museum and skyline pass",
      "area": "shibuya",
      "tags": [
        "museum",
        "design"
      ],
      "timing": "afternoon",
      "description": "A strong contemporary-art stop if the trip wants one more polished modern-cultural anchor."
    },
    {
      "name": "teamLab Borderless visit",
      "area": "ginza",
      "tags": [
        "museum",
        "design"
      ],
      "timing": "afternoon",
      "description": "A spectacle-heavy museum choice for a more immersive and visual Tokyo block."
    },
    {
      "name": "Nezu Museum and garden stop",
      "area": "shibuya",
      "tags": [
        "museum",
        "wellness",
        "culture"
      ],
      "timing": "afternoon",
      "description": "A quieter museum option if you want beauty and calm rather than city intensity."
    }
  ],
  "food": [
    {
      "name": "Sushi Ya",
      "area": "ginza",
      "tags": [
        "luxury",
        "food"
      ],
      "cuisine": "Omakase sushi",
      "reservation": "Book as early as possible.",
      "description": "A serious sushi splurge for the night Tokyo should feel extraordinary."
    },
    {
      "name": "Kyubey",
      "area": "ginza",
      "tags": [
        "luxury",
        "food"
      ],
      "cuisine": "Classic sushi",
      "reservation": "Book ahead.",
      "description": "An old-guard Ginza sushi counter with polished service and a reassuringly classic omakase rhythm, ideal if you want one traditional Tokyo splurge."
    },
    {
      "name": "Uoshin Nogizaka",
      "area": "ginza",
      "tags": [
        "food",
        "luxury"
      ],
      "cuisine": "Seafood-focused Japanese",
      "reservation": "Reserve ahead.",
      "description": "Refined but not stiff, and excellent for an elegant dinner."
    },
    {
      "name": "Isetan depachika lunch haul",
      "area": "ginza",
      "tags": [
        "food",
        "wellness"
      ],
      "cuisine": "Department-store food hall",
      "reservation": "No booking.",
      "description": "The smartest lunch move when the day needs quality without a full sit-down."
    },
    {
      "name": "Uoshin Shibuya",
      "area": "shibuya",
      "tags": [
        "food",
        "nightlife"
      ],
      "cuisine": "Modern izakaya",
      "reservation": "Helpful but not always required.",
      "description": "Fun, sharp, and ideal near a high-energy Tokyo evening."
    },
    {
      "name": "Afuri Harajuku",
      "area": "shibuya",
      "tags": [
        "food"
      ],
      "cuisine": "Ramen",
      "reservation": "Flexible.",
      "description": "A stylish ramen stop that fits naturally into a design-heavy day."
    },
    {
      "name": "Little Nap Coffee Stand",
      "area": "shibuya",
      "tags": [
        "food",
        "design",
        "wellness"
      ],
      "cuisine": "Coffee and pastries",
      "reservation": "Flexible.",
      "description": "A compact specialty-coffee stop near Yoyogi Park that works beautifully as a calm design-forward reset between heavier Shibuya sights."
    },
    {
      "name": "Onibus Coffee Nakameguro",
      "area": "shibuya",
      "tags": [
        "food",
        "design"
      ],
      "cuisine": "Coffee",
      "reservation": "Flexible.",
      "description": "A great cafe stop for a slower, more taste-driven Tokyo afternoon."
    },
    {
      "name": "Gonpachi Nishi-Azabu",
      "area": "shibuya",
      "tags": [
        "food",
        "nightlife"
      ],
      "cuisine": "Japanese grill and soba",
      "reservation": "Reserve for a strong time slot.",
      "description": "Big lantern-lit rooms, skewers, and soba make this an easy high-energy dinner when the group wants Tokyo atmosphere without a difficult reservation."
    },
    {
      "name": "Omoide Yokocho grazing night",
      "area": "shinjuku",
      "tags": [
        "food",
        "nightlife"
      ],
      "cuisine": "Yakitori and bar hopping",
      "reservation": "Flexible.",
      "description": "A narrow-lane Shinjuku grazing night of yakitori smoke, tiny bars, and fast pivots between snacks and drinks rather than one formal dinner."
    },
    {
      "name": "Sometaro",
      "area": "asakusa",
      "tags": [
        "food",
        "culture"
      ],
      "cuisine": "Okonomiyaki",
      "reservation": "Flexible.",
      "description": "Old-school and memorable, especially for an Asakusa-centered day."
    },
    {
      "name": "Kissa-style breakfast stop",
      "area": "asakusa",
      "tags": [
        "food",
        "wellness"
      ],
      "cuisine": "Coffee and toast set",
      "reservation": "Flexible.",
      "description": "A softer older-Tokyo way to open the day."
    },
    {
      "name": "Tempura Kondo",
      "area": "ginza",
      "tags": [
        "luxury",
        "food"
      ],
      "cuisine": "Tempura",
      "reservation": "Book ahead.",
      "description": "A major Tokyo tempura splurge if sushi is not the dinner you want to build around."
    },
    {
      "name": "Fuunji",
      "area": "shinjuku",
      "tags": [
        "food"
      ],
      "cuisine": "Tsukemen",
      "reservation": "Flexible but go strategically.",
      "description": "One of Tokyo's most famous tsukemen shops, prized for dense dipping broth and a serious queue-worthiness if you want one benchmark casual meal."
    },
    {
      "name": "Blue Bottle or specialty coffee pass",
      "area": "shibuya",
      "tags": [
        "food",
        "design",
        "wellness"
      ],
      "cuisine": "Coffee",
      "reservation": "Flexible.",
      "description": "A strong café add-on for a more modern design-heavy day."
    },
    {
      "name": "Tsukiji sushi breakfast stop",
      "area": "ginza",
      "tags": [
        "food",
        "culture"
      ],
      "cuisine": "Casual sushi breakfast",
      "reservation": "Go early.",
      "description": "A useful food-first city move that fits well before museum or shopping blocks."
    },
    {
      "name": "Den",
      "area": "shinjuku",
      "tags": [
        "luxury",
        "food"
      ],
      "cuisine": "Creative Japanese tasting",
      "reservation": "Book far in advance.",
      "description": "A destination Tokyo reservation if you want the city's top end to feel inventive, personal, and distinctly modern.",
      "michelinStatus": "Two Stars",
      "guideNote": "Michelin praises Den for inventive modern Japanese tasting menus that still feel personal and playful.",
      "guideUrl": "https://guide.michelin.com/en/tokyo-region/tokyo/restaurant/den"
    },
    {
      "name": "Florilege",
      "area": "shibuya",
      "tags": [
        "luxury",
        "food",
        "design"
      ],
      "cuisine": "French-Japanese tasting",
      "reservation": "Reserve ahead.",
      "description": "A current-feeling fine-dining room for travelers who want Tokyo's modern side rather than pure tradition."
    },
    {
      "name": "L'Effervescence",
      "area": "shibuya",
      "tags": [
        "luxury",
        "food"
      ],
      "cuisine": "Contemporary French-Japanese",
      "reservation": "Reserve ahead.",
      "description": "A polished special-occasion dinner that balances French technique with a strong Japanese sense of season.",
      "michelinStatus": "Three Stars",
      "guideNote": "Michelin highlights its three-star contemporary cooking and Green Star sustainability ethos.",
      "guideUrl": "https://guide.michelin.com/us/en/tokyo-region/tokyo/restaurant/l-effervescence"
    },
    {
      "name": "Sazenka",
      "area": "shibuya",
      "tags": [
        "luxury",
        "food"
      ],
      "cuisine": "Luxury Chinese tasting",
      "reservation": "Book well ahead.",
      "description": "A serious splurge if you want one of Tokyo's most acclaimed cross-cultural fine-dining rooms."
    },
    {
      "name": "Narisawa",
      "area": "shibuya",
      "tags": [
        "luxury",
        "food",
        "wellness"
      ],
      "cuisine": "Innovative Japanese tasting",
      "reservation": "Reserve well ahead.",
      "description": "A landmark Tokyo dinner built around seasonality, refinement, and a more nature-led culinary point of view."
    },
    {
      "name": "Bird Land Ginza",
      "area": "ginza",
      "tags": [
        "food",
        "culture"
      ],
      "cuisine": "Yakitori omakase",
      "reservation": "Reserve ahead.",
      "description": "A classic high-skill yakitori stop if you want something deeply Tokyo without going all the way to sushi."
    },
    {
      "name": "Rokurinsha Tokyo Station",
      "area": "ginza",
      "tags": [
        "food"
      ],
      "cuisine": "Tsukemen",
      "reservation": "Go off-peak.",
      "description": "A benchmark noodle stop for a powerful Tokyo Station lunch that still feels worth the line."
    },
    {
      "name": "Kikanbo",
      "area": "asakusa",
      "tags": [
        "food"
      ],
      "cuisine": "Spicy miso ramen",
      "reservation": "No booking.",
      "description": "A cult-favorite ramen stop if you want one bolder, spicier casual Tokyo meal."
    },
    {
      "name": "Tonkatsu Narikura",
      "area": "shinjuku",
      "tags": [
        "food"
      ],
      "cuisine": "Tonkatsu",
      "reservation": "Go early or reserve if available.",
      "description": "A serious breaded-pork specialist that makes sense when you want one standout Tokyo lunch outside sushi and ramen."
    },
    {
      "name": "Savoy Azabujuban",
      "area": "shibuya",
      "tags": [
        "food",
        "design"
      ],
      "cuisine": "Neapolitan pizza",
      "reservation": "Helpful.",
      "description": "A tightly focused pizza stop that works well when the trip wants one great non-Japanese dinner."
    }
  ]
};

export const tokyoSupplements = [
  {
    "categoryLabel": "Nature",
    "name": "Shinjuku Gyoen",
    "area": "shinjuku",
    "description": "A large landscaped garden for a quieter and more beautiful Tokyo reset."
  },
  {
    "categoryLabel": "Nature",
    "name": "Yoyogi Park",
    "area": "shibuya",
    "description": "A broad park near Meiji Jingu that gives the city a little breathing room."
  },
  {
    "categoryLabel": "Nature",
    "name": "Rikugien Garden",
    "area": "asakusa",
    "description": "A traditional strolling garden if you want a more classical, slower side of Tokyo."
  },
  {
    "categoryLabel": "Nature",
    "name": "Ueno Park",
    "area": "asakusa",
    "description": "A broad museum-lined park with ponds, shrines, and one of Tokyo's strongest seasonal public-space atmospheres."
  },
  {
    "categoryLabel": "Nature",
    "name": "Imperial Palace East Gardens",
    "area": "ginza",
    "description": "A historic garden complex on the old Edo Castle grounds, useful when you want formal calm in the center."
  },
  {
    "categoryLabel": "Nature",
    "name": "Mount Takao",
    "area": "shinjuku",
    "description": "An easy mountain outing west of the city if the trip wants one bigger nature block beyond urban parks."
  },
  {
    "categoryLabel": "Nature",
    "name": "Hamarikyu Gardens",
    "area": "ginza",
    "description": "A refined tidal garden where old Tokyo landscape design meets nearby towers and waterfront scale."
  },
  {
    "categoryLabel": "Nature",
    "name": "Meguro River",
    "area": "shibuya",
    "description": "A canal-side walk best known for cherry-blossom season but pleasant year-round for a slower urban stroll."
  },
  {
    "categoryLabel": "Nature",
    "name": "Inokashira Park",
    "area": "shibuya",
    "description": "A laid-back western Tokyo park with a pond, trees, and a softer neighborhood feel than the central landmarks."
  },
  {
    "categoryLabel": "Nature",
    "name": "Showa Kinen Park",
    "area": "shinjuku",
    "description": "A larger suburban park for bikes, flower fields, and more room than you get in inner Tokyo."
  },
  {
    "categoryLabel": "Food",
    "name": "Tsukiji Outer Market breakfast",
    "area": "ginza",
    "description": "A food-first Tokyo morning for seafood, small bites, and market energy."
  },
  {
    "categoryLabel": "Food",
    "name": "Nakamise street snacks",
    "area": "asakusa",
    "description": "A simple way to turn an Asakusa morning into a more food-rich walk."
  },
  {
    "categoryLabel": "Food",
    "name": "Depachika food-hall grazing",
    "area": "ginza",
    "description": "An excellent Tokyo strategy for quality food without a long restaurant stop."
  },
  {
    "categoryLabel": "Food",
    "name": "Ichiran Shibuya",
    "area": "shibuya",
    "description": "A famous tonkotsu ramen stop built around solo booths and a very focused, customizable bowl."
  },
  {
    "categoryLabel": "Food",
    "name": "Tonkatsu Maisen Aoyama Honten",
    "area": "shibuya",
    "description": "A classic tonkatsu destination in a converted bathhouse, especially good for one polished comfort-food lunch."
  },
  {
    "categoryLabel": "Food",
    "name": "Ginza Kyubey",
    "area": "ginza",
    "description": "One of Tokyo's best-known traditional sushi counters and still a major destination for a classic splurge meal."
  },
  {
    "categoryLabel": "Food",
    "name": "Gyukatsu Motomura",
    "area": "shinjuku",
    "description": "A popular casual stop where you finish searing breaded beef cutlet on a hot stone at the table."
  },
  {
    "categoryLabel": "Food",
    "name": "Rokurinsha",
    "area": "ginza",
    "description": "A highly regarded Tokyo Station tsukemen stop worth considering if you want one famous noodle line-up."
  },
  {
    "categoryLabel": "Food",
    "name": "Kitsuneya",
    "area": "ginza",
    "description": "A longstanding Tsukiji counter known for beef simmered until deeply rich and spooned over rice."
  },
  {
    "categoryLabel": "Food",
    "name": "Toufuya Ukai",
    "area": "ginza",
    "description": "A refined tofu-focused meal in a traditional setting near Tokyo Tower, best when the trip wants something serene and special."
  },
  {
    "categoryLabel": "Food",
    "name": "Savoy Azabujuban",
    "area": "shibuya",
    "description": "A much-loved pizza stop if the trip wants one break from Japanese food without sacrificing quality."
  },
  {
    "categoryLabel": "Cultural Sight",
    "name": "Meiji Jingu",
    "area": "shibuya",
    "description": "A major shrine complex set in wooded grounds right near some of Tokyo's busiest districts."
  },
  {
    "categoryLabel": "Cultural Sight",
    "name": "Imperial Palace East Gardens",
    "area": "ginza",
    "description": "A strong central historical stop if you want one more formal Tokyo landmark."
  },
  {
    "categoryLabel": "Cultural Sight",
    "name": "Zojoji Temple",
    "area": "ginza",
    "description": "A useful temple-and-cityscape pairing with Tokyo Tower nearby."
  },
  {
    "categoryLabel": "Cultural Sight",
    "name": "Senso-ji Temple",
    "area": "asakusa",
    "description": "Tokyo's oldest major temple and still one of the city's strongest heritage anchors when done early or late."
  },
  {
    "categoryLabel": "Cultural Sight",
    "name": "Nezu Shrine",
    "area": "asakusa",
    "description": "A quieter shrine known for its torii-lined paths and a more intimate feel than the biggest city shrines."
  },
  {
    "categoryLabel": "Cultural Sight",
    "name": "Hie Shrine",
    "area": "ginza",
    "description": "A central shrine with photogenic torii stairs that fits well into a government-district or Akasaka block."
  },
  {
    "categoryLabel": "Cultural Sight",
    "name": "Gotokuji Temple",
    "area": "shibuya",
    "description": "A temple best known for its hundreds of lucky-cat statues and its more off-center neighborhood setting."
  },
  {
    "categoryLabel": "Cultural Sight",
    "name": "Sengakuji Temple",
    "area": "ginza",
    "description": "A historically important temple associated with the 47 Ronin, good if the trip wants one more story-rich stop."
  },
  {
    "categoryLabel": "Cultural Sight",
    "name": "Kanda Myojin Shrine",
    "area": "asakusa",
    "description": "A long-running shrine that sits at an interesting intersection of tradition, technology, and anime-adjacent Tokyo culture."
  },
  {
    "categoryLabel": "Cultural Sight",
    "name": "Tennoji Temple",
    "area": "asakusa",
    "description": "A calmer Yanaka temple stop with a large bronze Buddha and a more old-neighborhood pace."
  },
  {
    "categoryLabel": "Cultural Sight",
    "name": "Tsukiji Hongan-ji",
    "area": "ginza",
    "description": "A striking temple with unusual architecture that stands apart from the more familiar wooden shrine-and-temple look."
  },
  {
    "categoryLabel": "Shopping",
    "name": "Ginza flagship stores",
    "area": "ginza",
    "description": "The city's cleanest and most polished luxury shopping district."
  },
  {
    "categoryLabel": "Shopping",
    "name": "Kappabashi Kitchen Town",
    "area": "asakusa",
    "description": "A great specialty-shopping street for cookware, knives, and restaurant supplies."
  },
  {
    "categoryLabel": "Shopping",
    "name": "Miyashita Park shopping",
    "area": "shibuya",
    "description": "A modern retail stop if the trip wants current youth energy and fashion."
  },
  {
    "categoryLabel": "Shopping",
    "name": "Ginza Six",
    "area": "ginza",
    "description": "A polished luxury retail complex that mixes fashion with large-scale contemporary art installations."
  },
  {
    "categoryLabel": "Shopping",
    "name": "Takeshita Street",
    "area": "shibuya",
    "description": "Harajuku's busiest youth-fashion street, best if the trip wants one loud, crowded burst of pop style."
  },
  {
    "categoryLabel": "Shopping",
    "name": "Omotesando Hills",
    "area": "shibuya",
    "description": "A sleeker designer-shopping stop on Tokyo's most polished fashion boulevard."
  },
  {
    "categoryLabel": "Shopping",
    "name": "Shibuya 109",
    "area": "shibuya",
    "description": "A youth-fashion landmark that still works as a concentrated look at Tokyo trend retail."
  },
  {
    "categoryLabel": "Shopping",
    "name": "Akihabara Electric Town",
    "area": "asakusa",
    "description": "The city's best-known district for anime goods, games, electronics, and denser otaku retail culture."
  },
  {
    "categoryLabel": "Shopping",
    "name": "Ameyoko Market",
    "area": "asakusa",
    "description": "A busy market street under the tracks for snacks, clothes, shoes, and more old-school urban shopping energy."
  },
  {
    "categoryLabel": "Shopping",
    "name": "Mega Don Quijote Shibuya",
    "area": "shibuya",
    "description": "A chaotic all-in-one late-night shopping stop for snacks, beauty products, souvenirs, and absurd variety."
  },
  {
    "categoryLabel": "Shopping",
    "name": "Nakano Broadway",
    "area": "shinjuku",
    "description": "A cult shopping complex for vintage toys, manga, collectibles, and more niche pop-culture finds."
  },
  {
    "categoryLabel": "Shopping",
    "name": "KITTE Marunouchi",
    "area": "ginza",
    "description": "A polished central shopping stop for Japanese design goods, crafts, and gift-worthy everyday objects."
  },
  {
    "categoryLabel": "Museum",
    "name": "National Museum of Nature and Science",
    "area": "asakusa",
    "description": "A major Ueno museum covering natural history, science, and technology."
  },
  {
    "categoryLabel": "Museum",
    "name": "Sumida Hokusai Museum",
    "area": "asakusa",
    "description": "A focused museum on Hokusai and ukiyo-e in a striking contemporary building."
  },
  {
    "categoryLabel": "Museum",
    "name": "The National Art Center, Tokyo",
    "area": "shibuya",
    "description": "A large rotating-exhibition museum in Roppongi, especially good for modern and contemporary shows."
  },
  {
    "categoryLabel": "Museum",
    "name": "Tokyo National Museum",
    "area": "asakusa",
    "description": "Japan's flagship national-art and antiquities museum, especially strong for premodern cultural history."
  },
  {
    "categoryLabel": "Museum",
    "name": "teamLab Borderless",
    "area": "ginza",
    "description": "A large-scale immersive digital-art museum that is more about sensory experience than traditional gallery viewing."
  },
  {
    "categoryLabel": "Museum",
    "name": "Ghibli Museum",
    "area": "shinjuku",
    "description": "A whimsical animation museum built for fans of Miyazaki and Studio Ghibli, with limited-entry demand."
  },
  {
    "categoryLabel": "Museum",
    "name": "Mori Art Museum",
    "area": "shibuya",
    "description": "A high-floor contemporary-art museum that pairs major exhibitions with one of Tokyo's most vertical city settings."
  },
  {
    "categoryLabel": "Museum",
    "name": "Yayoi Kusama Museum",
    "area": "shinjuku",
    "description": "A focused contemporary-art museum on one of Japan's best-known living artists, best if you book ahead."
  },
  {
    "categoryLabel": "Museum",
    "name": "Nezu Museum",
    "area": "shibuya",
    "description": "A beautifully presented museum of premodern Japanese and East Asian art with an excellent garden behind it."
  },
  {
    "categoryLabel": "Museum",
    "name": "Miraikan",
    "area": "ginza",
    "description": "A larger science-and-futures museum in Odaiba for robotics, space, and interactive technology exhibits."
  },
  {
    "categoryLabel": "Place to Wander",
    "name": "Yanaka Ginza and old lanes",
    "area": "asakusa",
    "description": "A lower-rise, slower Tokyo area that feels far older and more local."
  },
  {
    "categoryLabel": "Place to Wander",
    "name": "Nakameguro canal area",
    "area": "shibuya",
    "description": "A very good wandering district with boutiques, cafés, and a softer urban feel."
  },
  {
    "categoryLabel": "Place to Wander",
    "name": "Daikanyama backstreets",
    "area": "shibuya",
    "description": "A calm design-forward area with bookstores, fashion, and quieter streets."
  },
  {
    "categoryLabel": "Place to Wander",
    "name": "Shibuya Crossing",
    "area": "shibuya",
    "description": "A pure Tokyo energy hit and still one of the fastest ways to feel the city's scale and pace."
  },
  {
    "categoryLabel": "Place to Wander",
    "name": "Omoide Yokocho",
    "area": "shinjuku",
    "description": "A tight alley network of yakitori and small bars that still carries a more old-Tokyo nighttime feel."
  },
  {
    "categoryLabel": "Place to Wander",
    "name": "Kagurazaka",
    "area": "shinjuku",
    "description": "A hilly district of lanes, restaurants, and quieter elegance with a different mood from the denser nightlife zones."
  },
  {
    "categoryLabel": "Place to Wander",
    "name": "Shimokitazawa",
    "area": "shibuya",
    "description": "A low-rise neighborhood best for vintage shopping, coffee, and a more bohemian pace."
  },
  {
    "categoryLabel": "Place to Wander",
    "name": "Cat Street",
    "area": "shibuya",
    "description": "A walkable Shibuya-Harajuku link filled with streetwear, cafés, and easier browsing than the main roads."
  },
  {
    "categoryLabel": "Place to Wander",
    "name": "Daikanyama T-Site",
    "area": "shibuya",
    "description": "A polished bookstore-and-café complex that works well as a calmer modern Tokyo pause."
  },
  {
    "categoryLabel": "Place to Wander",
    "name": "Nakamise Shopping Street",
    "area": "asakusa",
    "description": "The historic temple approach lined with snacks and souvenirs, best when treated as part of an early Asakusa visit."
  },
  {
    "categoryLabel": "Place to Wander",
    "name": "Kichijoji Sunroad",
    "area": "shinjuku",
    "description": "A lively neighborhood arcade that shows a friendlier, more local side of Tokyo beyond the core districts."
  },
  {
    "categoryLabel": "Place to Wander",
    "name": "Jiyugaoka",
    "area": "shibuya",
    "description": "A gentler upscale neighborhood for pastries, home goods, and low-key fashionable wandering."
  },
  {
    "categoryLabel": "Nightlife & Entertainment",
    "name": "Golden Gai",
    "area": "shinjuku",
    "description": "A dense cluster of tiny bars that gives you one of Tokyo's most atmospheric nights."
  },
  {
    "categoryLabel": "Nightlife & Entertainment",
    "name": "Kabukicho",
    "area": "shinjuku",
    "description": "A neon-heavy entertainment district for louder, more cinematic late-night Tokyo."
  },
  {
    "categoryLabel": "Nightlife & Entertainment",
    "name": "Shibuya Sky after dark",
    "area": "shibuya",
    "description": "A skyline-driven Tokyo night move if you want city views and evening energy."
  },
  {
    "categoryLabel": "Nightlife & Entertainment",
    "name": "Womb",
    "area": "shibuya",
    "description": "A major multi-level dance club if the trip wants one full Tokyo electronic-music night."
  },
  {
    "categoryLabel": "Nightlife & Entertainment",
    "name": "Blue Note Tokyo",
    "area": "shibuya",
    "description": "A polished live-jazz night for when the trip should feel sophisticated rather than chaotic."
  },
  {
    "categoryLabel": "Nightlife & Entertainment",
    "name": "Nonbei Yokocho",
    "area": "shibuya",
    "description": "A tiny old-style alley of bars by the tracks, good for a smaller and more nostalgic night than the biggest districts."
  },
  {
    "categoryLabel": "Nightlife & Entertainment",
    "name": "Tokyo Dome baseball game",
    "area": "shinjuku",
    "description": "A high-energy spectator night that shows a different side of Tokyo from bars and clubs."
  },
  {
    "categoryLabel": "Nightlife & Entertainment",
    "name": "Kamiya Bar",
    "area": "asakusa",
    "description": "A long-running old-school bar if the trip wants one classic drinking institution instead of a trendier scene."
  },
  {
    "categoryLabel": "Nightlife & Entertainment",
    "name": "Samurai Restaurant",
    "area": "shinjuku",
    "description": "A maximalist neon-heavy dinner-show option that makes sense only if the trip wants full Tokyo spectacle."
  },
  {
    "categoryLabel": "Nightlife & Entertainment",
    "name": "Hoppy Street",
    "area": "asakusa",
    "description": "An old-school Asakusa drinking street for casual outdoor tables, beef stew, and retro local flavor."
  },
  {
    "categoryLabel": "Nightlife & Entertainment",
    "name": "V2 Tokyo",
    "area": "shibuya",
    "description": "A more dressed-up Roppongi club option if the trip wants polished skyline-facing nightlife."
  },
  {
    "categoryLabel": "Amusement & Activities",
    "name": "teamLab Borderless",
    "area": "ginza",
    "description": "A full immersive digital-art experience for a more spectacle-driven Tokyo activity."
  },
  {
    "categoryLabel": "Amusement & Activities",
    "name": "Tokyo Dome City attractions",
    "area": "shinjuku",
    "description": "An easy amusement-style option with rides and entertainment in the city."
  },
  {
    "categoryLabel": "Amusement & Activities",
    "name": "Sumida River cruise",
    "area": "asakusa",
    "description": "A useful city-seeing activity if you want the river to become part of the day."
  },
  {
    "categoryLabel": "Amusement & Activities",
    "name": "Tokyo Disneyland",
    "area": "ginza",
    "description": "A full-day classic Disney outing, best if the trip wants one major theme-park day rather than city wandering."
  },
  {
    "categoryLabel": "Amusement & Activities",
    "name": "Tokyo DisneySea",
    "area": "ginza",
    "description": "A more visually distinctive theme-park day with stronger appeal for many adult travelers than standard Disneyland."
  },
  {
    "categoryLabel": "Amusement & Activities",
    "name": "Warner Bros. Studio Tour Tokyo",
    "area": "shinjuku",
    "description": "A larger Harry Potter production-tour attraction for fans who want a dedicated half-day or full-day outing."
  },
  {
    "categoryLabel": "Amusement & Activities",
    "name": "Tokyo Skytree",
    "area": "asakusa",
    "description": "The city's highest observation experience, useful if the trip wants one major skyline landmark beyond Shibuya."
  },
  {
    "categoryLabel": "Amusement & Activities",
    "name": "Tokyo Tower",
    "area": "ginza",
    "description": "A classic red-and-white Tokyo icon that works better as a visual landmark and viewpoint than as a deep cultural stop."
  },
  {
    "categoryLabel": "Amusement & Activities",
    "name": "Joypolis",
    "area": "ginza",
    "description": "A larger indoor arcade-and-rides stop in Odaiba if the trip wants a more playful tech-heavy attraction."
  },
  {
    "categoryLabel": "Amusement & Activities",
    "name": "Sanrio Puroland",
    "area": "shinjuku",
    "description": "A niche but very committed indoor character-world attraction that only makes sense if the trip actively wants kawaii pop culture."
  },
  {
    "categoryLabel": "Amusement & Activities",
    "name": "Yomiuri Land",
    "area": "shinjuku",
    "description": "A larger suburban amusement-park outing that is especially useful during illumination season."
  },
  {
    "categoryLabel": "Amusement & Activities",
    "name": "Sumo morning practice",
    "area": "asakusa",
    "description": "One of the most distinctive Tokyo cultural activities if the trip can lock in the timing and access."
  },
  {
    "categoryLabel": "Other",
    "name": "Tokyo Station Marunouchi facade",
    "area": "ginza",
    "description": "A polished architecture-led stop that sits between city texture, design, and movement."
  },
  {
    "categoryLabel": "Other",
    "name": "Akihabara electric town",
    "area": "asakusa",
    "description": "A hyper-specific Tokyo district for electronics, hobby culture, and sensory overload."
  },
  {
    "categoryLabel": "Other",
    "name": "Tokyo Tower view block",
    "area": "ginza",
    "description": "A classic skyline move if you want one more familiar Tokyo visual icon."
  },
  {
    "categoryLabel": "Other",
    "name": "Tsukiji Outer Market",
    "area": "ginza",
    "description": "A market graze stop that still makes sense even after the wholesale market moved to Toyosu."
  },
  {
    "categoryLabel": "Other",
    "name": "Toyosu Market",
    "area": "ginza",
    "description": "The newer wholesale-market complex, most useful if the trip specifically wants the tuna-auction and market-infrastructure angle."
  },
  {
    "categoryLabel": "Other",
    "name": "Shibuya Sky",
    "area": "shibuya",
    "description": "An open-air rooftop observatory that gives one of the most direct views over the Shibuya cityscape."
  },
  {
    "categoryLabel": "Other",
    "name": "Thermae-Yu",
    "area": "shinjuku",
    "description": "A larger urban bathhouse and spa stop if the trip wants one real recovery block inside the city."
  },
  {
    "categoryLabel": "Other",
    "name": "Odaiba Unicorn Gundam",
    "area": "ginza",
    "description": "A giant transforming robot statue that works as a quick pop-culture stop in Odaiba."
  },
  {
    "categoryLabel": "Other",
    "name": "Hachiko Statue",
    "area": "shibuya",
    "description": "A famous small meeting-point landmark that still works as part of the larger Shibuya ritual."
  },
  {
    "categoryLabel": "Other",
    "name": "Mipig Cafe",
    "area": "shibuya",
    "description": "A novelty animal-café stop that only makes sense if the trip specifically wants cute offbeat Tokyo experiences."
  },
  {
    "categoryLabel": "Other",
    "name": "Ryogoku Kokugikan",
    "area": "asakusa",
    "description": "Tokyo's main sumo arena, worth considering if the trip lines up with a tournament or wants more sumo context."
  },
  {
    "categoryLabel": "Other",
    "name": "Tokyo Metropolitan Government Building",
    "area": "shinjuku",
    "description": "A free skyline stop that remains one of the easiest value observations in the city."
  },
  {
    "categoryLabel": "Other",
    "name": "Azabudai Hills",
    "area": "ginza",
    "description": "A major new mixed-use district with polished architecture, luxury retail, and a very current Tokyo feel."
  }
];
