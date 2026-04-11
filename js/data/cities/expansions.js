// Additional curated city-library entries.
// These are merged after the core city files and pass through the semantic
// dedupe sanitizer in index.js before becoming visible in the app.

export const expandedSupplementLibraries = {
  seoul: [
    { categoryLabel: "Museum", name: "Seoul Museum of Craft Art", area: "insadong", description: "A refined museum for Korean craft, design, ceramics, and textiles in a beautifully adapted Bukchon-edge complex." },
    { categoryLabel: "Nature", name: "Seonyudo Park", area: "hongdae", description: "A former water-treatment plant remade into a quiet island park with industrial bones, gardens, and Han River views." },
    { categoryLabel: "Place to Wander", name: "Eunpyeong Hanok Village", area: "insadong", description: "A calmer hanok district backed by Bukhansan views, better when you want traditional architecture without Bukchon crowds." },
    { categoryLabel: "Cultural Sight", name: "Oil Tank Culture Park", area: "hongdae", description: "A converted oil depot turned cultural park, useful for architecture, exhibitions, and a different side of west Seoul." },
    { categoryLabel: "Food", name: "Tosokchon Samgyetang", area: "insadong", description: "A classic ginseng chicken soup institution near Gyeongbokgung, especially satisfying as a restorative lunch." },
    { categoryLabel: "Nightlife & Entertainment", name: "Bar Cham", area: "insadong", description: "A hanok-set cocktail bar that gives a traditional neighborhood a polished, contemporary after-dark option." },
    { categoryLabel: "Shopping", name: "The Hyundai Seoul", area: "hongdae", description: "A huge, design-conscious department store in Yeouido with strong food halls, fashion, and indoor browsing value." },
    { categoryLabel: "Nightlife & Entertainment", name: "Mullae Art Village bars", area: "hongdae", description: "A semi-industrial night area of workshops, murals, small bars, and creative grit away from the obvious nightlife corridors." }
  ],
  tokyo: [
    { categoryLabel: "Nature", name: "Koishikawa Korakuen", area: "shinjuku", description: "One of Tokyo's oldest landscape gardens, excellent for a calm seasonal walk that feels worlds away from the station crowds." },
    { categoryLabel: "Museum", name: "Tokyo Photographic Art Museum", area: "shibuya", description: "A focused Ebisu museum for photography and moving-image exhibitions, strong when the trip leans visual and design-minded." },
    { categoryLabel: "Cultural Sight", name: "Zojoji Temple", area: "ginza", description: "A historic temple framed dramatically by Tokyo Tower, giving the city one of its best old-and-new contrasts." },
    { categoryLabel: "Place to Wander", name: "Kagurazaka backstreets", area: "shinjuku", description: "Sloping lanes, small restaurants, shrines, and French-Japanese texture make this one of Tokyo's most rewarding evening wanders." },
    { categoryLabel: "Shopping", name: "Kappabashi Kitchen Town", area: "asakusa", description: "A specialty shopping street for knives, ceramics, cookware, and plastic food models between Ueno and Asakusa." },
    { categoryLabel: "Food", name: "Ginza Hachigo", area: "ginza", description: "A precise, quietly elegant ramen shop known for a French-inflected broth and a more refined noodle-stop mood." },
    { categoryLabel: "Food", name: "Maisen Aoyama", area: "shibuya", description: "A beloved tonkatsu restaurant in a former bathhouse, useful for a polished but approachable comfort-food meal." },
    { categoryLabel: "Nightlife & Entertainment", name: "WWW X Shibuya", area: "shibuya", description: "A respected live-music venue for indie, electronic, and touring acts when the night should be music-led rather than bar-led." }
  ],
  kyoto: [
    { categoryLabel: "Nature", name: "Shosei-en Garden", area: "kawaramachi", description: "A peaceful temple garden near Kyoto Station with ponds, bridges, and far fewer visitors than the headline garden stops." },
    { categoryLabel: "Cultural Sight", name: "Rokuharamitsuji Temple", area: "higashiyama", description: "A small but historically rich temple with expressive Buddhist sculpture and a strong old-Kyoto neighborhood setting." },
    { categoryLabel: "Museum", name: "Kawai Kanjiro Memorial Museum", area: "higashiyama", description: "The preserved home and studio of a major ceramic artist, ideal for craft, design, and a quieter Kyoto cultural layer." },
    { categoryLabel: "Place to Wander", name: "Ichijoji ramen streets", area: "kawaramachi", description: "A student-heavy north Kyoto food pocket where ramen shops and casual local energy make a useful non-touristy detour." },
    { categoryLabel: "Shopping", name: "Kyoto BAL", area: "kawaramachi", description: "A polished central shopping building with design goods, books, fashion, and a calmer feel than the main covered arcades." },
    { categoryLabel: "Food", name: "Giro Giro Hitoshina", area: "kawaramachi", description: "A playful, counter-style take on Kyoto kaiseki that feels more relaxed and contemporary than formal ryotei dining." },
    { categoryLabel: "Food", name: "Kezako", area: "higashiyama", description: "A small, refined restaurant blending Kyoto ingredients with French technique for a quieter special dinner." },
    { categoryLabel: "Nightlife & Entertainment", name: "Metro Kyoto", area: "kawaramachi", description: "A long-running Kyoto club and live venue beneath the tracks, useful when the night wants music rather than another lantern alley." }
  ],
  osaka: [
    { categoryLabel: "Nature", name: "Settsukyo Park", area: "umeda", description: "A rocky river-gorge park north of the center, strong for summer water, autumn color, and a real green escape." },
    { categoryLabel: "Cultural Sight", name: "Sumiyoshi Taisha", area: "tennoji", description: "One of Japan's oldest shrines, known for its arched bridge and architecture that feels distinct from Kyoto-style shrine visits." },
    { categoryLabel: "Cultural Sight", name: "Isshin-ji Temple", area: "tennoji", description: "A distinctive temple known for Buddha statues made from cremated remains, giving Osaka history a more unusual spiritual angle." },
    { categoryLabel: "Shopping", name: "Sennichimae Doguyasuji", area: "namba", description: "A kitchenware arcade for knives, cookware, lanterns, and realistic food models that fits Osaka's merchant-food personality." },
    { categoryLabel: "Food", name: "Takamura Wine and Coffee Roasters", area: "umeda", description: "A serious wine shop and coffee roaster that works as a polished pause for drinks, beans, or a low-key tasting stop." },
    { categoryLabel: "Food", name: "Fujiya 1935", area: "namba", description: "A refined contemporary restaurant with Spanish-Japanese influence, useful for a quieter splurge dinner away from neon chaos." },
    { categoryLabel: "Nightlife & Entertainment", name: "Namba Grand Kagetsu", area: "namba", description: "Yoshimoto's comedy headquarters, useful if the itinerary wants a distinctly Osaka performance night." },
    { categoryLabel: "Amusement & Activities", name: "Osaka Castle Gozabune boat", area: "umeda", description: "A short moat cruise around Osaka Castle's stone walls that adds a calmer angle to the central castle visit." }
  ],
  bangkok: [
    { categoryLabel: "Nature", name: "Bang Krachao", area: "riverside", description: "A green peninsula of bike paths, gardens, canals, and slower river life that feels like a different Bangkok." },
    { categoryLabel: "Cultural Sight", name: "Wat Ratchanatdaram", area: "chinatown", description: "A striking temple complex known for Loha Prasat, with layered metal spires and a calmer old-city atmosphere." },
    { categoryLabel: "Museum", name: "Jim Thompson Art Center", area: "silom", description: "A contemporary art center beside the Jim Thompson House, useful for adding a more current cultural layer." },
    { categoryLabel: "Shopping", name: "Bangkokian local markets", area: "chinatown", description: "A more everyday market browse for produce, household goods, and local city rhythm beyond the big mall circuit." },
    { categoryLabel: "Food", name: "Sri Trat", area: "silom", description: "A polished restaurant for eastern Thai cooking, strong when the trip wants regional flavor beyond the most familiar dishes." },
    { categoryLabel: "Food", name: "100 Mahaseth", area: "silom", description: "A nose-to-tail Thai restaurant with bold Isan-leaning flavors and a more contemporary Bangkok dining mood." },
    { categoryLabel: "Nightlife & Entertainment", name: "Tropic City", area: "chinatown", description: "A colorful cocktail bar near Charoen Krung with a rum-forward menu and a livelier creative-neighborhood feel." },
    { categoryLabel: "Amusement & Activities", name: "Chao Phraya tourist boat hop", area: "riverside", description: "A practical, scenic way to link river sights while keeping the day flexible instead of locking into a formal cruise." }
  ],
  prague: [
    { categoryLabel: "Nature", name: "Divoka Sarka", area: "petrin", description: "A dramatic rocky valley and nature reserve on the edge of Prague, good when the trip needs a real outdoor reset." },
    { categoryLabel: "Cultural Sight", name: "Emmaus Monastery", area: "oldtown", description: "A distinctive monastery with modern concrete spires and medieval roots, useful for architecture beyond the postcard core." },
    { categoryLabel: "Museum", name: "Museum Kampa", area: "malastrana", description: "A riverside modern-art museum focused on Central European artists, especially strong as part of a Kampa or Lesser Town day." },
    { categoryLabel: "Shopping", name: "Botanicus Ungelt", area: "oldtown", description: "A small shop for Czech-made soaps, herbal products, and gifts in the atmospheric Tyn courtyard area." },
    { categoryLabel: "Food", name: "Sia Restaurant", area: "oldtown", description: "A large, stylish Asian restaurant near the old center, useful when the trip wants a polished non-Czech dinner option." },
    { categoryLabel: "Food", name: "Etapa", area: "karlin", description: "A warm Karlin cafe-bistro for brunch, bread, vegetables, and unfussy cooking that feels current without being precious." },
    { categoryLabel: "Nightlife & Entertainment", name: "Kasarna Karlin", area: "karlin", description: "A large cultural courtyard with drinks, cinema, events, and a laid-back local evening atmosphere." },
    { categoryLabel: "Place to Wander", name: "Bubeneč villa streets", area: "josefov", description: "Leafy embassy-side streets and villas north of the center, useful when you want Prague to feel residential and elegant." }
  ],
  copenhagen: [
    { categoryLabel: "Nature", name: "Amager Strandpark", area: "christianshavn", description: "A broad beach park with dunes, swimming spots, and skyline views that adds a coastal Copenhagen layer." },
    { categoryLabel: "Cultural Sight", name: "Grundtvig's Church", area: "norrebro", description: "A monumental brick expressionist church whose interior feels more sculptural and surprising than most city churches." },
    { categoryLabel: "Museum", name: "Cisternerne", area: "frederiksberg", description: "A subterranean art space in old water reservoirs, atmospheric and especially good for design-minded travelers." },
    { categoryLabel: "Shopping", name: "Værnedamsvej", area: "vesterbro", description: "A compact street of food shops, wine, cafes, and boutiques with a relaxed Paris-meets-Copenhagen mood." },
    { categoryLabel: "Food", name: "Apotek 57", area: "indreby", description: "A design-conscious cafe for breakfast, lunch, and baked goods in a calm central setting." },
    { categoryLabel: "Food", name: "Kiin Kiin", area: "norrebro", description: "A refined Thai fine-dining restaurant that adds a different kind of splurge dinner to the Copenhagen mix." },
    { categoryLabel: "Nightlife & Entertainment", name: "Rust", area: "norrebro", description: "A long-running venue for concerts, DJs, and a more youthful Norrebro night out." },
    { categoryLabel: "Amusement & Activities", name: "GoBoat Islands Brygge", area: "christianshavn", description: "A self-drive harbor boat outing that makes Copenhagen's water feel playful and easy to build into a sunny day." }
  ],
  berlin: [
    { categoryLabel: "Nature", name: "Britzer Garten", area: "kreuzberg", description: "A large landscaped park with lakes and seasonal flowers, best when the trip wants a calmer green day away from the center." },
    { categoryLabel: "Cultural Sight", name: "Soviet War Memorial Treptower Park", area: "kreuzberg", description: "A vast, solemn memorial ensemble that gives Berlin's postwar history a very different physical scale." },
    { categoryLabel: "Museum", name: "Boros Collection", area: "mitte", description: "A private contemporary-art collection inside a converted bunker, highly Berlin and best planned ahead." },
    { categoryLabel: "Shopping", name: "Bikini Berlin", area: "charlottenburg", description: "A concept mall of design shops, pop-ups, food, and zoo-facing architecture near the western city center." },
    { categoryLabel: "Food", name: "CODA Dessert Dining", area: "kreuzberg", description: "A high-concept dessert tasting-menu restaurant for a special Berlin dinner that feels genuinely different." },
    { categoryLabel: "Food", name: "Eins44", area: "kreuzberg", description: "A refined restaurant in a former distillery, useful for modern German-leaning cooking without a stiff fine-dining mood." },
    { categoryLabel: "Nightlife & Entertainment", name: "Silent Green Kulturquartier", area: "mitte", description: "A former crematorium turned cultural venue with concerts, film, exhibitions, and a distinctly Berlin atmosphere." },
    { categoryLabel: "Place to Wander", name: "Schillerkiez", area: "kreuzberg", description: "A neighborhood of cafes, bars, small restaurants, and Tempelhofer Feld access that feels local without being sleepy." }
  ]
};
