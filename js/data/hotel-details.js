// Detailed hotel metadata layered on top of the city guides.

const hotelDetailsByCity = {
  seoul: {
    "Signiel Seoul": {
      description: "A true Seoul splurge high above the city in Lotte World Tower, with dramatic skyline views, hushed rooms, and the kind of service that makes the whole trip feel elevated from the minute you check in.",
      amenities: ["sweeping skyline-view rooms", "serious spa and indoor pool", "high-touch luxury service"],
    },
    "Josun Palace": {
      description: "A polished modern grand hotel in Gangnam that feels especially strong for travelers who want classic luxury comforts, a stronger food-and-bar program, and a base that still feels current rather than old-school.",
      amenities: ["refined rooms with a residential feel", "strong dining and lounge spaces", "indoor pool and wellness facilities"],
    },
    "Park Hyatt Seoul": {
      description: "A quieter, more composed luxury stay opposite COEX, with floor-to-ceiling windows, restrained interiors, and a calmer mood that suits a refined Seoul trip better than a more scene-driven hotel.",
      amenities: ["large window-lined rooms", "spa, pool, and sauna access", "excellent business-and-leisure location"],
    },
    "Grand InterContinental Seoul Parnas": {
      description: "A polished Gangnam luxury hotel that is especially useful if you want upscale shopping, business-district convenience, and a smoother dinner-and-drinks rhythm built into the neighborhood.",
      amenities: ["large polished rooms", "strong access to COEX and shopping", "solid luxury dining and lounge spaces"],
    },
    "Ryse, Autograph Collection": {
      description: "One of the smartest Hongdae stays for a design-forward trip, with a social lobby, strong neighborhood energy, and a style that fits especially well if you want Seoul to feel youthful and current.",
      amenities: ["creative design-led interiors", "lively social spaces", "immediate access to Hongdae nightlife"],
    },
    "L7 Myeongdong": {
      description: "A clean, efficient, very practical central base that works well for first-timers who want easy transit, shopping, and late-night food without paying for a heavier luxury setup.",
      amenities: ["streamlined modern rooms", "strong airport and subway access", "rooftop lounge and practical amenities"],
    },
    "Andaz Seoul Gangnam": {
      description: "A polished lifestyle-hotel version of Gangnam luxury, with strong design, a useful Apgujeong location, and enough food-and-bar energy to make it feel like part of the trip rather than just where you sleep.",
      amenities: ["stylish rooms with upscale finishes", "good restaurant and bar options", "pool and wellness area"],
    },
    "Hotel28 Myeongdong": {
      description: "A boutique Myeongdong stay with more character than the usual central hotel, especially good if you want easy first-trip logistics without giving up personality.",
      amenities: ["boutique-style rooms", "excellent shopping-and-transit location", "strong value for a central stay"],
    },
    "Nine Tree Premier Insadong": {
      description: "A calm, well-located Insadong base that makes culture-heavy Seoul days much easier, especially if you want a reliable hotel within walking reach of palace districts, tea houses, and older neighborhoods.",
      amenities: ["comfortable modern rooms", "walkable historic-core location", "solid breakfast and practical traveler conveniences"],
    },
    "LOTTE City Hotel Myeongdong": {
      description: "A dependable central hotel that is stronger on convenience than romance, but genuinely useful if you want Myeongdong access, easy transit, and a reliable value-to-location balance.",
      amenities: ["efficient rooms with strong basics", "excellent central transit access", "easy reach to shopping and food streets"],
    },
    "Mercure Ambassador Hongdae": {
      description: "A practical Hongdae stay that keeps you close to the neighborhood's energy without making the hotel itself feel chaotic, which makes it a smart pick for nightlife and casual food-focused trips.",
      amenities: ["well-run compact rooms", "strong Hongdae location", "easy access to bars, cafes, and transit"],
    },
    "Localstitch Seongsu": {
      description: "A current-feeling Seongsu stay for travelers who want the district's café, design, and creative-studio energy to shape the trip more directly.",
      amenities: ["design-minded rooms and communal spaces", "great access to Seongsu cafés and shops", "good value for a trendier neighborhood base"],
    },
  },
  tokyo: {
    "Aman Tokyo": {
      description: "One of Tokyo's most serene luxury stays, with towering minimalist interiors, enormous rooms by Tokyo standards, and a deeply restorative mood that suits a calmer, high-end version of the city.",
      amenities: ["large spa and wellness floor", "huge skyline-view rooms", "exceptional quiet for central Tokyo"],
    },
    "The Tokyo EDITION, Toranomon": {
      description: "A glossy design-forward luxury hotel that feels especially good if you want polished rooms, a stylish crowd, and a stronger restaurant-and-bar scene built into the stay itself.",
      amenities: ["designer interiors and skyline views", "destination restaurant and bar program", "pool, gym, and luxury services"],
    },
    "HOSHINOYA Tokyo": {
      description: "A distinctive ryokan-inspired luxury stay in the middle of modern Tokyo, best when you want calm, ritual, and a more Japanese sense of place without giving up city access.",
      amenities: ["onsen-style bathing experience", "tatami-influenced room design", "quiet service-heavy atmosphere"],
    },
    "Palace Hotel Tokyo": {
      description: "A beautifully run luxury hotel with a calmer, greener setting by the Imperial Palace, ideal if you want Tokyo luxury to feel spacious, elegant, and less overtly scene-driven.",
      amenities: ["palace-side views and large rooms", "spa, pool, and luxury wellness", "excellent fine-dining and service standards"],
    },
    "Trunk Hotel Yoyogi Park": {
      description: "A stylish smaller luxury stay near Yoyogi that works beautifully for a design-minded Tokyo trip, especially if you want Shibuya access with a more considered, less chaotic home base.",
      amenities: ["beautifully designed boutique rooms", "strong wellness and terrace feel", "easy access to Yoyogi and Shibuya"],
    },
    "Hotel Groove Shinjuku": {
      description: "A playful, current-feeling Shinjuku hotel that leans into the city's energy without becoming gimmicky, making it especially strong for nightlife-heavy Tokyo trips.",
      amenities: ["skyline-facing rooms", "easy access to Kabukicho and transit", "fresh, modern public spaces"],
    },
    "sequence MIYASHITA PARK": {
      description: "A youthful, modern hotel directly tied into one of Shibuya's most useful lifestyle complexes, best if you want current retail, easy nights out, and a more efficient price point.",
      amenities: ["clean modern rooms", "direct access to MIYASHITA PARK", "great location for shopping and nightlife"],
    },
    "Shibuya Stream Hotel": {
      description: "A slick, efficient Shibuya base that is especially good for travelers who want immediate transit, easy nightlife, and a hotel that feels more polished than bare-bones.",
      amenities: ["strong transit integration", "modern city-view rooms", "easy access to Shibuya dining and nightlife"],
    },
    "Mitsui Garden Hotel Ginza Premier": {
      description: "A polished, comfortable Ginza stay that gives you a refined central base, strong city views, and better value than the true top-end hotels nearby.",
      amenities: ["high-floor city-view rooms", "refined but unfussy interiors", "easy reach to Ginza dining and shopping"],
    },
    "Hotel Niwa Tokyo": {
      description: "A quieter, more understated Tokyo hotel with a slower pace and a more residential feel, good for travelers who want comfort and calm over flash.",
      amenities: ["peaceful modern-Japanese rooms", "small garden and relaxation areas", "good value with a calmer atmosphere"],
    },
    "The Gate Hotel Asakusa Kaminarimon": {
      description: "A very strong Asakusa base for travelers who want old-Tokyo mornings, walkable heritage sights, and a hotel that still feels polished rather than overly budget-driven.",
      amenities: ["excellent rooftop and terrace views", "walkable access to Senso-ji", "strong location for heritage-heavy days"],
    },
    "Onyado Nono Asakusa Bettei": {
      description: "A comfortable modern-Japanese stay that gives you a softer Asakusa base, especially good if you want heritage access with a more restorative hotel feel.",
      amenities: ["onsen-style baths and relaxation spaces", "good walkability in Asakusa", "strong value with a more Japanese atmosphere"],
    },
  },
  kyoto: {
    "Park Hyatt Kyoto": {
      description: "One of the most atmospheric luxury stays in Kyoto, set right in Higashiyama with a sense of quiet privilege that makes dawn and evening in the old district feel especially magical.",
      amenities: ["beautifully restrained luxury rooms", "exceptional Higashiyama location", "high-end dining and wellness service"],
    },
    "Suiran Kyoto": {
      description: "A scenic Arashiyama retreat that works best when you want Kyoto to feel restorative and slower, with river-and-garden atmosphere that pulls the trip away from city-center intensity.",
      amenities: ["onsen-style baths and spa feel", "riverfront and garden setting", "luxury rooms with a calmer resort mood"],
    },
    "The Ritz-Carlton, Kyoto": {
      description: "A river-edge luxury stay with a softer, more elegant central Kyoto mood, especially good if you want high-end comfort without giving up access to the city's cultural core.",
      amenities: ["beautiful river-adjacent rooms", "serious spa and luxury service", "easy access to central Kyoto and eastern sights"],
    },
    "Ace Hotel Kyoto": {
      description: "A design-led Kyoto stay that bridges the city's old and new sides unusually well, with stylish rooms, strong food options, and a location that makes central Kyoto easy without feeling generic.",
      amenities: ["architecturally distinctive rooms", "excellent food-and-coffee program", "strong central location"],
    },
    "The Gate Hotel Kyoto Takasegawa": {
      description: "A balanced, elegant hotel in a very useful central location, making it especially strong for travelers who want comfortable refinement and easy movement between food, shopping, and historic sights.",
      amenities: ["polished rooms with river-adjacent setting", "smart logistics for central Kyoto", "good lounge and breakfast spaces"],
    },
    "Hotel The Celestine Kyoto Gion": {
      description: "A quiet, polished stay that feels especially right for culture-first Kyoto trips, with easy access to Gion and eastern lanes but a much calmer mood than the streets outside.",
      amenities: ["calm refined rooms", "excellent Gion-adjacent location", "bathhouse-style relaxation area"],
    },
    "Good Nature Hotel Kyoto": {
      description: "A stylish central hotel with a more modern Kyoto sensibility, especially appealing if you want food, design, and a fresher city vibe rather than pure traditional atmosphere.",
      amenities: ["well-designed contemporary rooms", "food-forward ground-floor spaces", "strong Kawaramachi location"],
    },
    "Cross Hotel Kyoto": {
      description: "A strong-value central Kyoto hotel that gets the fundamentals right, especially if you want a comfortable base in the middle of the city without overpaying for atmosphere alone.",
      amenities: ["spacious-for-Kyoto rooms", "very useful Kawaramachi location", "strong value for the quality level"],
    },
    "Nohga Hotel Kiyomizu Kyoto": {
      description: "A style-forward Kyoto stay near eastern neighborhoods, especially good if you want design, walkability, and a more current boutique feel at a smarter price point.",
      amenities: ["thoughtful boutique interiors", "rooftop and dining spaces", "good access to eastern Kyoto walks"],
    },
    "Hotel Resol Kyoto Kawaramachi Sanjo": {
      description: "A compact but very useful value stay in central Kyoto, best if you want location and neighborhood access over resort-like facilities.",
      amenities: ["comfortable compact rooms", "excellent central positioning", "strong value for food-and-culture trips"],
    },
  },
  osaka: {
    "Four Seasons Hotel Osaka": {
      description: "A polished new luxury base that gives Osaka a more refined, quieter mood, especially if you want serious service and a stay that feels elevated rather than merely convenient.",
      amenities: ["beautifully finished luxury rooms", "major spa, pool, and wellness facilities", "strong fine-dining and service program"],
    },
    "The St. Regis Osaka": {
      description: "A classic grand-luxury Osaka stay on Midosuji, best when you want elegant rooms, a more formal sense of occasion, and easy access to shopping and polished dinners.",
      amenities: ["large polished rooms and suites", "classic luxury service", "excellent Midosuji location for shopping and dining"],
    },
    "Conrad Osaka": {
      description: "A sky-high contemporary luxury hotel that makes Osaka feel sleek and dramatic, especially good if you want skyline views and a calmer high-design atmosphere.",
      amenities: ["dramatic high-floor skyline views", "spa, pool, and luxury wellness spaces", "modern dining and lounge program"],
    },
    "W Osaka": {
      description: "A glossy, nightlife-friendly luxury stay that works especially well for a younger-feeling Osaka trip with stronger design and social energy built into the hotel itself.",
      amenities: ["bold design-led rooms", "strong bar and restaurant scene", "pool and social public spaces"],
    },
    "Zentis Osaka": {
      description: "A design-forward central stay with a more understated, grown-up mood than Osaka's louder lifestyle hotels, especially good for food and transit balance.",
      amenities: ["beautifully designed modern rooms", "smart central location", "strong restaurant and lounge feel"],
    },
    "Hotel The Flag Shinsaibashi": {
      description: "A smart, stylish Shinsaibashi base that is especially strong if you want walkable shopping, coffee, and easy nights out without jumping to full luxury pricing.",
      amenities: ["clean design-led rooms", "excellent Shinsaibashi location", "strong value with a boutique feel"],
    },
    "Cross Hotel Osaka": {
      description: "A very practical step-up stay right by Osaka's busiest southern core, good for travelers who want Dotonbori energy nearby but a hotel that still feels polished and easy.",
      amenities: ["comfortable modern rooms", "excellent Dotonbori-adjacent location", "strong walkability for food and nightlife"],
    },
    "Miyako City Osaka Hommachi": {
      description: "A calmer, better-organized central Osaka stay that gives you easy city access without sleeping directly inside the most crowded entertainment strips.",
      amenities: ["streamlined comfortable rooms", "good subway access", "strong value-to-location balance"],
    },
    "THE LIVELY Osaka Honmachi": {
      description: "A social, younger-feeling hotel with enough polish to stay useful, especially if you want a more energetic base with design touches and shared public spaces.",
      amenities: ["lively communal spaces", "design-conscious rooms", "good location for central Osaka movement"],
    },
    "Hotel Royal Classic Osaka": {
      description: "A strong-value Namba stay with a better sense of polish than many large station-side hotels, making it especially useful for first-time Osaka trips.",
      amenities: ["comfortable rooms with solid city views", "excellent Namba location", "easy access to food streets and transit"],
    },
    "Citadines Namba Osaka": {
      description: "A flexible smart-spend Osaka base if you want more space, practical comforts, and a location that makes southern Osaka easy without feeling chaotic.",
      amenities: ["roomier apartment-style setups", "good value for longer or slower stays", "strong Namba-side access"],
    },
    "Hotel Trusty Osaka Abeno": {
      description: "A calmer Tennoji-side value pick that works well if you want southern Osaka access, easier pacing, and a less tourist-saturated home base.",
      amenities: ["comfortable efficient rooms", "good access to Tennoji and Abeno", "strong value with practical city convenience"],
    },
  },
  bangkok: {
    "Four Seasons Hotel Bangkok": {
      description: "A deeply polished riverfront luxury stay that makes Bangkok feel calmer, richer, and more resort-like, with the kind of pool, spa, and service setup that can genuinely reshape the trip.",
      amenities: ["major spa and pool complex", "beautiful riverfront rooms and suites", "excellent destination dining"],
    },
    "Mandarin Oriental Bangkok": {
      description: "Bangkok's great classic luxury hotel, full of riverfront history, old-world service, and a sense of ceremony that feels especially good for a more timeless version of the city.",
      amenities: ["legendary riverfront setting", "historic luxury service", "spa, boats, and acclaimed dining"],
    },
    "Capella Bangkok": {
      description: "An ultra-polished riverfront luxury stay with a more contemporary, villa-like resort mood, ideal if you want Bangkok to feel indulgent and deeply restorative.",
      amenities: ["beautiful riverfront suites and villas", "major spa and wellness focus", "very high-touch contemporary luxury service"],
    },
    "The Standard, Bangkok Mahanakhon": {
      description: "A bold modern Bangkok stay with real personality, strong food-and-bar energy, and a city-facing mood that works especially well if the trip leans nightlife, design, and urban energy.",
      amenities: ["playful design-led rooms", "destination rooftop and dining program", "great access to Silom and Sathorn"],
    },
    "Siam@Siam Design Hotel": {
      description: "An expressive, more affordable design stay that still feels lively and memorable, especially if you want a central Bangkok base with character rather than plain business-hotel efficiency.",
      amenities: ["bold interiors", "rooftop pool and bar", "good location for central city movement"],
    },
    "SO/ Bangkok": {
      description: "A sharper, more nightlife-friendly upscale Bangkok hotel overlooking Lumpini Park, best if you want skyline views, stronger bar energy, and a city trip that feels more urban than resort-like.",
      amenities: ["skyline-view rooms", "rooftop and nightlife-friendly bars", "spa, pool, and park views"],
    },
    "Eastin Grand Hotel Sathorn": {
      description: "A very useful upper-upscale Bangkok hotel with excellent BTS convenience, making it especially strong if you want smoother movement around the city without giving up comfort.",
      amenities: ["direct transit convenience", "comfortable upscale rooms", "good pool and practical full-service setup"],
    },
    "ASAI Bangkok Chinatown": {
      description: "A smart, food-first stay in the middle of Chinatown's energy, best when the trip wants local character, walkable night eating, and a strong value-to-location balance.",
      amenities: ["compact efficient rooms", "immediate Yaowarat access", "social spaces built for a local-feeling stay"],
    },
    "The Quarter Chaophraya": {
      description: "A practical riverside hotel that gives you a calmer water-facing base and easier access to old-city sights, especially if you want scenery without full luxury pricing.",
      amenities: ["pleasant riverfront pool setting", "comfortable rooms", "useful access to riverside routes and ferries"],
    },
    "Shanghai Mansion Bangkok": {
      description: "A character-rich Chinatown stay that makes the neighborhood itself part of the trip, ideal if you want atmosphere, food, and old-Bangkok texture over a generic modern tower.",
      amenities: ["high-character boutique interiors", "excellent Chinatown location", "strong mood and local texture"],
    },
  },
  prague: {
    "Prague Marriott Hotel": {
      description: "A polished central Prague stay that is more about comfort and ease than boutique romance, but very effective if you want a refined base with strong access to the historic center.",
      amenities: ["large comfortable rooms", "reliable upscale service", "excellent access to Old Town and transit"],
    },
    "Four Seasons Prague": {
      description: "A serene river-edge luxury stay with one of the most privileged addresses in the city, ideal if you want romance, beautiful service, and easy access to Prague's most atmospheric walks.",
      amenities: ["luxury rooms with river or castle views", "spa and refined dining", "exceptional location near Charles Bridge"],
    },
    "Mandarin Oriental Prague": {
      description: "An intimate, high-character luxury hotel in a former monastery, best when you want Prague to feel quiet, grown-up, and unusually atmospheric rather than simply grand.",
      amenities: ["spa in a historic setting", "beautifully adapted heritage interiors", "quiet Lesser Town location"],
    },
    "Aria Hotel Prague": {
      description: "A romantic boutique luxury stay with a quiet music-themed identity, especially good if you want Prague's prettier, softer side to shape the whole hotel experience.",
      amenities: ["romantic boutique rooms", "beautiful terrace and garden feel", "excellent castle-side location"],
    },
    "Hotel U Pavouka (At the Spider)": {
      description: "A design-forward boutique stay with real character near the castle side of Prague, especially strong if you want something more individual than a larger international hotel.",
      amenities: ["boutique rooms with personality", "historic-setting atmosphere", "good access to castle-side wandering"],
    },
    "The Celeste Hotel": {
      description: "A stylish, calmer Vinohrady base that works especially well if you want local cafés, a more neighborhood-driven Prague rhythm, and a stay that feels more contemporary than old-world.",
      amenities: ["polished boutique rooms", "quiet neighborhood location", "easy access to good food and bars"],
    },
    "Pod Věží (Under the Tower)": {
      description: "A charming historic stay steps from Charles Bridge that makes early-morning and late-evening Prague unusually easy, especially if atmosphere matters more than flashy luxury facilities.",
      amenities: ["historic rooms with character", "top-tier Lesser Town location", "warm, intimate boutique service"],
    },
    "Hotel Josef": {
      description: "A cleaner-lined contemporary hotel in central Prague, best if you want easy old-city access but prefer a more modern visual style over old-world heaviness.",
      amenities: ["minimal modern rooms", "great Old Town location", "strong breakfast and city convenience"],
    },
    "Hotel Hastal": {
      description: "A well-located classic Prague hotel that is strong on value and convenience, especially for a first trip centered on easy walks through the old city.",
      amenities: ["comfortable traditional rooms", "useful Old Town access", "good value for the location"],
    },
    "Hotel Clement": {
      description: "A straightforward, reliable central hotel that gives you the practical advantages of Old Town without much fuss, making it a useful pick for easy sightseeing days.",
      amenities: ["simple dependable rooms", "walkable central location", "solid value and easy logistics"],
    },
    "Hotel Alquimia": {
      description: "A small charming stay with a palatial old-Prague feel, best if you want romance, historic atmosphere, and a softer Lesser Town mood at a more reachable price.",
      amenities: ["character-rich heritage interiors", "quiet romantic atmosphere", "strong walkability in Lesser Town"],
    },
    "Miss Sophie's Downtown": {
      description: "A smart, straightforward value stay for travelers who want clean design, easy transport, and practical comfort without paying for ornate old-city atmosphere.",
      amenities: ["simple modern rooms", "good transit access", "strong value for a central base"],
    },
  },
  copenhagen: {
    "Hotel d'Angleterre": {
      description: "Copenhagen's grand classic luxury address, ideal if you want a full-service splurge in the center of the city with old-school polish and the easiest possible Indre By access.",
      amenities: ["full luxury service and spa", "grand rooms and suites", "prime central location"],
    },
    "Nimb Hotel": {
      description: "A dreamy Tivoli-adjacent luxury hotel that turns Copenhagen into more of an occasion, especially if you want romantic atmosphere, standout rooms, and a touch of fantasy.",
      amenities: ["beautiful boutique-style luxury rooms", "Tivoli-facing views", "strong dining and spa-style facilities"],
    },
    "Villa Copenhagen": {
      description: "A larger design-led luxury stay with a more current urban mood, best if you want Copenhagen to feel stylish, social, and slightly less formal than the city's classic grand hotels.",
      amenities: ["large stylish rooms", "rooftop pool", "strong social and dining spaces"],
    },
    "Nobis Hotel Copenhagen": {
      description: "A refined design-luxury stay with a calmer, more understated atmosphere, especially good if you want Copenhagen luxury to feel tailored rather than theatrical.",
      amenities: ["beautiful Scandinavian design rooms", "spa and wellness spaces", "strong location between center and Vesterbro"],
    },
    "Sanders": {
      description: "A warm, theatrical boutique hotel that feels unusually intimate and polished, especially strong for travelers who want central Copenhagen with real mood and personality.",
      amenities: ["beautifully styled boutique rooms", "cozy lounge and courtyard spaces", "excellent central location"],
    },
    "Coco Hotel": {
      description: "A chic, easy Vesterbro base with a strong local feel, great if you want food, wine bars, and a stylish neighborhood trip without paying for full luxury.",
      amenities: ["stylish smaller rooms", "great Vesterbro location", "bike-friendly boutique atmosphere"],
    },
    "Hotel SP34": {
      description: "A smart creative-city hotel that gives you central access and a softer boutique feel, making it especially good for a stylish but not overly formal Copenhagen stay.",
      amenities: ["modern boutique rooms", "lounge, wine hour, and social perks", "easy central movement"],
    },
    "Hotel Alexandra": {
      description: "A Danish-design classic in the center of Copenhagen, best if you want a hotel with real local style identity rather than generic boutique polish.",
      amenities: ["mid-century Danish design rooms", "excellent City Hall area location", "strong personality for a central stay"],
    },
    "Hotel Ottilia": {
      description: "A character-rich stay in a converted brewery district building, best if you want design, local feeling, and a slightly less obvious Copenhagen base.",
      amenities: ["architectural adaptive-reuse design", "comfortable modern rooms", "good value with personality"],
    },
    "25hours Hotel Indre By": {
      description: "A playful, personality-heavy central hotel that leans more fun than polished, but works well if you want walkability, design, and a lighter mood.",
      amenities: ["quirky design-forward rooms", "lively bar and social spaces", "excellent Indre By location"],
    },
    "Kanalhuset": {
      description: "A canal-side stay with a softer, more residential Copenhagen mood, especially good if you want atmosphere, slower mornings, and Christianshavn charm over classic hotel polish.",
      amenities: ["beautiful canal-side setting", "intimate apartment-like feel", "good access to harbor and Christianshavn walks"],
    },
    "Wakeup Copenhagen Borgergade": {
      description: "A streamlined central Copenhagen hotel that gets the location right, making it a smart pick when you want Indre By access and a cleaner budget profile.",
      amenities: ["compact efficient rooms", "excellent central location", "strong value for walkability"],
    },
  },
  berlin: {
    "Hotel Adlon Kempinski": {
      description: "Berlin's grand classic luxury hotel right by Brandenburg Gate, best when you want old-school prestige, full service, and the strongest possible central historic address.",
      amenities: ["grand rooms and suites", "full luxury service and spa", "landmark Mitte location"],
    },
    "SO/ Berlin Das Stue": {
      description: "A sophisticated, design-forward luxury stay near Tiergarten that feels quieter and more curated than central Mitte, especially good for a refined Berlin trip with some visual flair.",
      amenities: ["architectural interiors with personality", "spa and wellness facilities", "quiet upscale location by Tiergarten"],
    },
    "Hotel de Rome": {
      description: "A polished former-bank luxury hotel that gives you serious Berlin grandeur in the middle of Mitte, with enough style and central leverage to anchor a first high-end trip well.",
      amenities: ["historic grand-building rooms", "strong spa and rooftop setup", "excellent access to central sights"],
    },
    "Waldorf Astoria Berlin": {
      description: "A polished west-Berlin luxury stay with stronger shopping, spa, and Charlottenburg comfort appeal, best if you want a more classic high-end city-hotel experience.",
      amenities: ["large polished rooms", "major spa and wellness setup", "excellent access to Kurfurstendamm shopping"],
    },
    "Orania.Berlin": {
      description: "A sharp Kreuzberg boutique stay with real neighborhood character, especially strong if you want Berlin to feel local, design-aware, and more food-and-nightlife driven.",
      amenities: ["boutique rooms with strong character", "live-music and dining energy", "excellent Kreuzberg location"],
    },
    "Château Royal Berlin": {
      description: "A polished boutique hotel in Mitte that balances design and comfort nicely, making it an easy high-quality choice for a first Berlin trip centered on culture and dining.",
      amenities: ["beautiful boutique interiors", "stylish restaurant and bar spaces", "strong central positioning"],
    },
    "Wilmina": {
      description: "One of Berlin's most interesting refined stays, set in a former courthouse and prison with a calm, architectural atmosphere that feels unusually thoughtful and self-contained.",
      amenities: ["architecturally memorable rooms", "quiet courtyard and wellness feel", "pool and refined communal spaces"],
    },
    "Telegraphenamt": {
      description: "A handsome central Berlin hotel that feels polished and current, especially good if you want more space and design presence than the average Mitte option.",
      amenities: ["spacious contemporary rooms", "strong restaurant and bar spaces", "excellent Mitte location"],
    },
    "Casa Camper Berlin": {
      description: "A smart value-minded Mitte base that still feels polished, best if you want a practical but design-aware hotel in one of the city's most useful neighborhoods.",
      amenities: ["comfortable modern rooms", "strong value for Mitte", "easy access to central food and culture"],
    },
    "Michelberger Hotel": {
      description: "A creative, social East Berlin hotel with a real sense of personality, especially good if you want nightlife, music, and a more alternative Berlin mood.",
      amenities: ["creative rooms with personality", "lively communal atmosphere", "great access to bars, music, and transit"],
    },
    "The Circus Hotel": {
      description: "A practical, well-liked central hotel that gives you a useful base with better neighborhood access than many standard Mitte stays, especially for a first Berlin trip.",
      amenities: ["well-run modern rooms", "excellent transit and neighborhood access", "strong value for central Berlin"],
    },
    "Motel One Berlin-Alexanderplatz": {
      description: "An efficient central value hotel that works well if you want clean modern basics, easy transit, and a lower-friction Berlin base.",
      amenities: ["streamlined modern rooms", "very strong transit access", "good value for central Berlin"],
    },
  },
};

function enrichHotel(hotel, cityKey, tier) {
  const details = hotelDetailsByCity[cityKey]?.[hotel.name] || {};
  return {
    ...hotel,
    tier,
    description: details.description || hotel.description || hotel.vibe,
    amenities: details.amenities || hotel.amenities || [],
    roomStyle: details.roomStyle || hotel.roomStyle || "",
    whyStayHere: details.whyStayHere || hotel.whyStayHere || "",
  };
}

export function enrichCityGuideWithHotelDetails(cityKey, guide) {
  if (!guide) return guide;
  return {
    ...guide,
    hotels: Object.fromEntries(
      Object.entries(guide.hotels || {}).map(([tier, hotels]) => [
        tier,
        (hotels || []).map((hotel) => enrichHotel(hotel, cityKey, tier)),
      ])
    ),
  };
}
