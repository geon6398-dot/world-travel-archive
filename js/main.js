// ===== TRAVEL DATA =====
const travels = [
  {
    id: "thailand-2012",
    title: "Thailand",
    countries: ["Thailand"],
    flag: "🇹🇭",
    continent: "Asia",
    date: "August 2012",
    year: 2012,
    days: 10,
    coverGradient: "linear-gradient(135deg, #1a0d00 0%, #3d1f00 50%, #8b5e00 100%)",
    excerpt: "My very first passport stamp. Thailand set the standard for everything that came after — the heat, the kindness, the food that made everything else taste ordinary.",
    tags: ["First Trip", "Culture", "Food", "Beaches"],
    highlights: ["Wat Pho", "Chao Phraya River", "Thai Street Food", "Grand Palace"],
    bestTime: "November – April",
    currency: "THB ฿",
    story: `Thailand was my first time leaving Korea, and nothing could have prepared me for it. The moment I stepped off the plane into Bangkok's heat, I understood that the world was much larger and stranger than I had imagined.\n\nBangkok overwhelmed me in the best possible way. The Grand Palace blazed gold under the August sun. Wat Pho's reclining Buddha was so enormous it seemed impossible that human hands had made it. I ate pad thai from a street cart near Khao San Road and it was the best thing I had ever tasted.\n\nThe temples, the tuk-tuks, the controlled chaos of the markets — everything was loud and colorful and alive in a way I hadn't experienced before. I came back to Korea different. That's the only way to describe it.\n\nThailand didn't just give me my first overseas trip. It gave me the need to keep going.`
  },
  {
    id: "china-shanghai-2013",
    title: "Shanghai, China",
    countries: ["China"],
    flag: "🇨🇳",
    continent: "Asia",
    date: "October 2013",
    year: 2013,
    days: 7,
    coverGradient: "linear-gradient(135deg, #0a0a1a 0%, #1a2035 50%, #2d4070 100%)",
    excerpt: "The Bund at night, the Pudong skyline, the sense that history and the future were being built side by side. Shanghai doesn't ask permission.",
    tags: ["Cities", "Culture", "Architecture"],
    highlights: ["The Bund", "Pudong Skyline", "Yu Garden", "Nanjing Road"],
    bestTime: "March – May, September – November",
    currency: "CNY ¥",
    story: `Shanghai was my introduction to China, and it chose to introduce itself dramatically. Standing on the Bund at night with the Pudong towers reflected in the Huangpu River, I understood why people call it the Paris of the East — and also why that comparison falls short. Shanghai is something entirely its own.\n\nThe contrast between the old city and the new is the whole point. Yu Garden, tucked inside the old town, is a classical Chinese garden that could have existed five hundred years ago — and thirty meters away, the city is building skyscrapers at a speed that makes you feel like you're watching time-lapse footage of the future.\n\nOctober was perfect — the summer heat had broken, the light was golden, and the crowds were manageable. I ate soup dumplings (xiaolongbao) every single day. The ferry across the Huangpu at dusk was free and one of the best views I've ever had of any city.`
  },
  {
    id: "usa-sandiego-2014",
    title: "San Diego, USA",
    countries: ["USA"],
    flag: "🇺🇸",
    continent: "North America",
    date: "Dec 2013 – Feb 2014",
    year: 2014,
    days: 65,
    coverGradient: "linear-gradient(135deg, #001a3d 0%, #003366 50%, #005f9e 100%)",
    excerpt: "Two months in Southern California during a Korean winter. The Pacific, the perfect weather, the casual vastness of American life. I didn't want to leave.",
    tags: ["Long Stay", "Beaches", "Culture"],
    highlights: ["Balboa Park", "Coronado Island", "La Jolla Cove", "Pacific Coast"],
    bestTime: "Year-round",
    currency: "USD $",
    story: `While Korea was deep in winter, I was in San Diego watching surfers from a beach in December. It felt like a trick — sunshine and 20 degrees in the middle of what should have been the coldest months of the year.\n\nSan Diego has a quiet confidence. It's not trying to be Los Angeles. The pace is slower, the distances are vast, and the ocean is everywhere. I spent two months getting acquainted with American scale — the portion sizes, the freeways, the way a city can feel both dense and endlessly spread out at the same time.\n\nBalboa Park was my anchor. A museum district the size of a neighborhood, free concerts on Sundays, the world's oldest outdoor pipe organ. Coronado Island by bicycle at sunset. La Jolla Cove where sea lions own the rocks and ignore the tourists completely.\n\nSixty-five days is long enough to stop being a tourist. By the end, I had favorite coffee shops, a regular breakfast burrito order, and a real sense of grief about leaving.`
  },
  {
    id: "europe-2015",
    title: "Europe: UK · France · Switzerland · Italy · Vatican",
    countries: ["United Kingdom", "France", "Switzerland", "Italy", "Vatican City"],
    flag: "🇬🇧",
    continent: "Europe",
    date: "August 2015",
    year: 2015,
    days: 20,
    coverGradient: "linear-gradient(135deg, #1a0a0a 0%, #3d1515 50%, #6b2020 100%)",
    excerpt: "Five countries in twenty days — a classic summer backpacking loop through Europe. London's grey grandeur, Paris's impossible beauty, the Alps, Rome's ruins, Vatican's gold.",
    tags: ["Multi-Country", "Culture", "Art", "History"],
    highlights: ["Tower of London", "Eiffel Tower", "Swiss Alps", "Colosseum", "Sistine Chapel"],
    bestTime: "April – June, September – October",
    currency: "GBP £ / EUR €",
    story: `Five countries, twenty days, one InterRail pass. The summer of 2015 was my first proper European trip, and I tried to see too much — which meant I saw just enough.\n\nLondon first, adjusting to left-side traffic and the particular English gift for understatement. The British Museum and the Tower of London on the same day, which was probably too much history for one afternoon. Then the Eurostar to Paris — two hours and a completely different universe. The Louvre, Montmartre at sunset, baguettes that genuinely tasted different from bread anywhere else.\n\nSwitzerland was a day's train journey through landscape so perfectly composed it looked designed. The Alps seen from a moving window. Interlaken between two lakes with mountains above on all sides.\n\nRome in August heat — the Colosseum, the Forum, Piazza Navona, gelato every hour as a survival mechanism. And finally Vatican City: the Sistine Chapel, which silenced everyone in the room regardless of belief. Michelangelo painted that ceiling while lying on his back. It remains one of the most astonishing things human beings have made.`
  },
  {
    id: "mongolia-2018",
    title: "Mongolia",
    countries: ["Mongolia"],
    flag: "🇲🇳",
    continent: "Asia",
    date: "August 2018",
    year: 2018,
    days: 10,
    coverGradient: "linear-gradient(135deg, #0d1a0d 0%, #1a3d1a 50%, #2d6b1f 100%)",
    excerpt: "The Mongolian steppe is the largest unfenced place I have ever stood. No walls, no roads, no end. Just grass to the horizon and a sky so big it makes you small in a good way.",
    tags: ["Nature", "Adventure", "Nomadic Culture"],
    highlights: ["Gobi Desert", "Ger Camp", "Mongolian Steppe", "Khövsgöl Lake"],
    bestTime: "June – August",
    currency: "MNT ₮",
    story: `Mongolia was a deliberate decision to go somewhere radically different. No cities, no monuments, no museum queues — just the largest contiguous grassland on earth and the nomadic culture that has shaped it for millennia.\n\nThe contrast with urban life is absolute. You arrive in Ulaanbaatar — a surprisingly modern capital with excellent coffee — and then you drive out of the city and within an hour there is nothing. No towns, no roads (just tracks in the grass), no signs. The steppe goes on until it becomes the Gobi, and the sky above it is the biggest sky I have ever seen.\n\nI stayed in ger camps, the traditional felt tents that nomadic families move seasonally. The hosts cooked over a small stove in the center of the ger, the smoke rising through a hole in the roof designed for exactly that purpose. We ate mutton and drank fermented mare's milk and watched the stars, which at that latitude and that darkness were overwhelming.\n\nMongolia recalibrates your sense of what a normal human environment looks like. Most of human history happened in places this empty.`
  },
  {
    id: "turkey-2022",
    title: "Türkiye",
    countries: ["Türkiye"],
    flag: "🇹🇷",
    continent: "Europe",
    date: "August 2022",
    year: 2022,
    days: 10,
    coverGradient: "linear-gradient(135deg, #001a1a 0%, #003333 50%, #005555 100%)",
    excerpt: "Istanbul sits where Europe ends and Asia begins, and it wears that position like a crown. Two thousand years of empire in every stone. The tea never stops.",
    tags: ["Culture", "History", "Food"],
    highlights: ["Hagia Sophia", "Grand Bazaar", "Cappadocia", "Bosphorus Cruise"],
    bestTime: "April – May, September – October",
    currency: "TRY ₺",
    story: `Istanbul is the only city in the world that sits on two continents, and you feel that duality everywhere. The Bosphorus splits Europe from Asia, and the city has spent three thousand years being important to both sides.\n\nHagia Sophia was built in 537 AD and has served as a cathedral, a mosque, a museum, and a mosque again. Standing inside its dome, looking up at Byzantine mosaics and Islamic calligraphy coexisting on the same walls, you understand that history isn't linear — it layers.\n\nThe Grand Bazaar contains 4,000 shops and approximately 400,000 daily visitors. I got completely lost within five minutes and navigated by smell: spices here, leather there, coffee somewhere ahead. The vendors are practiced and relaxed about it — they've seen tourists navigate their labyrinth for six hundred years.\n\nCappadocia was the second act: a landscape of volcanic rock formations that look computer-generated. Hot air balloons at sunrise drifting between the fairy chimneys, underground cities carved into the tufa, cave hotels with views across the valley. Turkey contains multitudes.`
  },
  {
    id: "guam-2024",
    title: "Guam",
    countries: ["Guam"],
    flag: "🇬🇺",
    continent: "Oceania",
    date: "February 2024",
    year: 2024,
    days: 7,
    coverGradient: "linear-gradient(135deg, #002233 0%, #004455 50%, #006677 100%)",
    excerpt: "A Pacific island that somehow manages to feel both tropical and deeply American. The water is the clearest I've ever swum in. Tumon Bay at sunset is a postcard that earns it.",
    tags: ["Beaches", "Nature", "Pacific"],
    highlights: ["Tumon Bay", "Two Lovers Point", "Ritidian Beach", "Pacific WWII History"],
    bestTime: "January – April",
    currency: "USD $",
    story: `Guam occupies an odd position in the world — a US territory in the middle of the Pacific, closer to Seoul than to Los Angeles, with a culture that blends indigenous Chamorro traditions, Spanish colonial history, and unmistakably American infrastructure. 7-Elevens every few blocks, Taco Bell, and turquoise water.\n\nFly there from Korea in about four hours and you arrive in a different world. The beaches are the reason. Tumon Bay's water achieves a shade of blue that photographic equipment struggles to reproduce accurately. I spent my mornings snorkeling before the sun got too strong, watching fish in water so clear it looked like swimming in air with color.\n\nTwo Lovers Point — a cliff overlooking the ocean where Chamorro legend says two young people jumped rather than be separated — has become one of those spots where the story and the view are equally unforgettable. The WWII history is everywhere too: the island changed hands between Japan and the US in 1944 and the landscape still holds the evidence.\n\nFebruary in Guam is near-perfect: low humidity, bright sun, calm seas. Short flight from Korea. Easy decision.`
  },
  {
    id: "australia-2024",
    title: "Australia",
    countries: ["Australia"],
    flag: "🇦🇺",
    continent: "Oceania",
    date: "August 2024",
    year: 2024,
    days: 14,
    coverGradient: "linear-gradient(135deg, #1a0800 0%, #4d1f00 50%, #8b3300 100%)",
    excerpt: "August is winter in Australia but winter there is a joke — sunny days, empty beaches, and wildlife that exists nowhere else on Earth. Sydney Harbour at dawn might be the best view of any city I've seen.",
    tags: ["Nature", "Cities", "Wildlife"],
    highlights: ["Sydney Opera House", "Great Barrier Reef", "Blue Mountains", "Kangaroo Island"],
    bestTime: "September – November, March – May",
    currency: "AUD $",
    story: `Australia is so far from everywhere else that getting there feels like an achievement in itself. The eleven-hour flight from Seoul deposits you at the opposite corner of the world, where the seasons are reversed, the animals are alien, and driving on the left feels slightly surreal.\n\nSydney Harbour at dawn: I'd seen the photographs. The photographs are inadequate. The Opera House and Harbour Bridge together, the light coming off the water at a low angle, the ferries running — it's the rare travel experience where reality exceeds expectation.\n\nAugust is austral winter, which in Sydney means clear skies and 18 degrees. The beaches were quieter than usual, which made Bondi feel like a local secret rather than a tourist site. The Blue Mountains were covered in eucalyptus haze — a genuine phenomenon where the oil in the leaves creates a blue atmospheric effect. The Three Sisters rock formation in morning light was worth the two-hour drive.\n\nAustralia's scale defeats you. I could have spent a month and not gotten close to seeing it properly. But fourteen days was enough to understand why Australians talk about their country the way they do.`
  },
  {
    id: "qatar-2024",
    title: "Qatar",
    countries: ["Qatar"],
    flag: "🇶🇦",
    continent: "Asia",
    date: "December 2024",
    year: 2024,
    days: 2,
    coverGradient: "linear-gradient(135deg, #1a0010 0%, #4d0030 50%, #8b1a1a 100%)",
    excerpt: "Two days in Doha on the way to Europe — enough to discover that Qatar is not just an airport. The Museum of Islamic Art, the Souq Waqif at night, and a skyline that makes no attempt at modesty.",
    tags: ["Cities", "Culture", "Architecture"],
    highlights: ["Museum of Islamic Art", "Souq Waqif", "The Pearl-Qatar", "Doha Skyline", "Corniche"],
    bestTime: "November – March",
    currency: "QAR ر.ق",
    story: `Qatar was supposed to be a transit. The layover was long enough to leave the airport, and once you've left the airport, two days seems like the right commitment.\n\nDoha's skyline from the Corniche is one of the more striking city views I've seen — the cluster of futuristic towers reflected in the Arabian Gulf, the city built entirely within living memory on what was a pearl-diving village. The Museum of Islamic Art sits on an artificial peninsula jutting into the water, designed by I.M. Pei at age 91. It contains one of the finest collections of Islamic art in the world and the building itself is worth the visit regardless of what's inside.\n\nSouq Waqif at night is the other pole: a reconstructed traditional market that somehow feels genuinely old, the narrow lanes full of spice stalls, shisha cafes, and restaurants where you can eat machboos — the Qatari national dish of spiced rice and meat — while watching the evening foot traffic. The contrast with the glass towers five minutes' walk away is complete and deliberate.\n\nTwo days is not enough for Qatar. It was enough to understand that two days is not enough for Qatar.`
  },
  {
    id: "europe-grand-tour-2025",
    title: "Europe Grand Tour",
    countries: ["Hungary", "Austria", "Czechia", "Germany", "Netherlands", "Belgium", "Luxembourg", "France"],
    flag: "🇭🇺",
    continent: "Europe",
    date: "Dec 2024 – Jan 2025",
    year: 2025,
    days: 43,
    coverGradient: "linear-gradient(135deg, #0d0d1a 0%, #1a1a2d 50%, #2d2d4d 100%)",
    excerpt: "Eight countries in forty-three days over the winter holidays. Christmas markets, medieval cities under snow, the Rhine valley, Paris in January rain. Central Europe in winter is its own genre.",
    tags: ["Multi-Country", "Culture", "Cities", "Winter Travel"],
    highlights: ["Budapest Thermal Baths", "Vienna Opera House", "Prague Old Town", "Amsterdam Canals", "Paris in January"],
    bestTime: "Varies by country",
    currency: "EUR €",
    story: `The plan started modestly — visit Hungary and Austria over the winter break. It grew, as plans do, until it covered eight countries and six weeks.\n\nBudapest first, which is arguably the most beautiful city in Central Europe: the Parliament building lit at night along the Danube, the thermal baths operating since the Ottoman era, the ruin bars in the Jewish Quarter where parties happen in buildings the city decided to leave beautifully decayed rather than renovate.\n\nVienna for classical music and Schnitzel. Prague for the astronomical clock and the sense of walking through a perfectly preserved medieval city that somehow survived the twentieth century intact. Germany through the Rhine valley, Christmas markets still running in the first days of January, mulled wine in paper cups. Amsterdam's canals frozen at the edges. Belgium for the chocolates and the architecture.\n\nLuxembourg — a small country that surprises you with how much it contains. Then Paris again, January this time: grey skies and the museums half-empty. I prefer Paris in low season. Fewer people, more city.`
  },
  {
    id: "china-qingdao-2025",
    title: "Qingdao, China",
    countries: ["China"],
    flag: "🇨🇳",
    continent: "Asia",
    date: "February 2025",
    year: 2025,
    days: 7,
    coverGradient: "linear-gradient(135deg, #001530 0%, #002255 50%, #003380 100%)",
    excerpt: "A coastal Chinese city with German colonial architecture, the birthplace of Tsingtao beer, and seafood so fresh it's still moving. Qingdao is China's best-kept secret.",
    tags: ["Food", "Coastal", "Culture"],
    highlights: ["Tsingtao Brewery", "Zhan Qiao Pier", "Old German Quarter", "Seafood Market"],
    bestTime: "May – October",
    currency: "CNY ¥",
    story: `Qingdao is not on most international itineraries, which is exactly why it's worth going. In the early twentieth century, Germany held this coastal territory as a concession and built a European city by the Yellow Sea — which explains why you can walk streets of red-roofed German-style buildings while eating seafood at a plastic table on the sidewalk, watching fishing boats come in from the harbor.\n\nThe Tsingtao Brewery was established in 1903 by German colonists who found the local water ideal for lager. You can tour it and drink fresh draft beer at the end in the factory. It tastes different — crisper, more alive — than the bottled version that traveled to Korea.\n\nThe seafood market near the old port was the culinary highlight. You buy what you want from the stalls — sea urchin, abalone, mantis shrimp — and take it to a nearby restaurant who charges a small fee to cook it. February was cold but the market was operating at full energy, the vendors in rubber boots, steam rising from cooking pots.\n\nFebruary in Qingdao is off-season, which means no queues and a third the prices. The Germans left the beer; time left the crowds.`
  },
  {
    id: "philippines-bohol-2025",
    title: "Bohol, Philippines",
    countries: ["Philippines"],
    flag: "🇵🇭",
    continent: "Asia",
    date: "May 2025",
    year: 2025,
    days: 7,
    coverGradient: "linear-gradient(135deg, #001a15 0%, #003328 50%, #005540 100%)",
    excerpt: "The Chocolate Hills look like a CGI landscape. The tarsiers are the smallest primates on earth and stare at you with eyes that take up half their face. Alona Beach is everything.",
    tags: ["Beaches", "Nature", "Islands", "Wildlife"],
    highlights: ["Chocolate Hills", "Tarsier Sanctuary", "Alona Beach", "Loboc River"],
    bestTime: "March – June",
    currency: "PHP ₱",
    story: `Bohol is one of the 7,641 islands of the Philippines, located in the Visayas region, and it contains two things found nowhere else on Earth: the Chocolate Hills and the tarsier.\n\nThe Chocolate Hills are a geological formation of roughly 1,268 nearly perfectly conical hills spread across 50 square kilometers. In the dry season they turn brown — hence the name. Standing on the viewing platform in the morning light, looking out over this alien landscape, the only word that comes is: impossible. They look like a god was practicing making hills and forgot to vary the template.\n\nThe Philippine tarsier is a nocturnal primate with enormous eyes (fixed in their sockets — it must rotate its entire head to look sideways), sticky fingertips, and an expression of perpetual startled innocence. They are also critically endangered. At the sanctuary they live in near-natural conditions in the forest, and you walk among them in silence. I watched one for twenty minutes while it watched me with those impossible eyes.\n\nAlona Beach on Panglao Island — white sand, warm water, excellent diving — was the second half of the trip. I didn't dive, but I snorkeled every morning before breakfast. The Philippines coral is among the most biodiverse in the world.`
  },
  {
    id: "kazakhstan-almaty-2025",
    title: "Almaty, Kazakhstan",
    countries: ["Kazakhstan"],
    flag: "🇰🇿",
    continent: "Asia",
    date: "July 2025",
    year: 2025,
    days: 7,
    coverGradient: "linear-gradient(135deg, #1a1500 0%, #332b00 50%, #665500 100%)",
    excerpt: "Kazakhstan doesn't get many tourists, which means the ones who show up get the country to themselves. Almaty sits below mountains that shouldn't be possible this close to a city. The apples here are the ancestors of every apple on Earth.",
    tags: ["Off the Beaten Path", "Mountains", "Culture"],
    highlights: ["Tian Shan Mountains", "Shymbulak Ski Resort", "Green Bazaar", "Charyn Canyon"],
    bestTime: "May – October",
    currency: "KZT ₸",
    story: `Kazakhstan is the ninth-largest country in the world and receives fewer tourists than Luxembourg. That ratio — enormous country, almost no visitors — means that arriving in Almaty feels like discovering something that hasn't been discovered yet.\n\nAlmaty sits in a bowl formed by the Tian Shan mountains to the south. The mountains are so close and so dramatic that you can see snow-capped peaks from the city center. A cable car from the edge of town takes you to Shymbulak, a ski resort that in July becomes a hiking area, and from there the mountains open into alpine meadows that go on until they become glaciers.\n\nThe city itself has the energy of a place figuring itself out rapidly. Soviet-era architecture next to gleaming new towers, Russian cultural influence blending with Kazakh traditions, the Green Bazaar overflowing with dried fruits and fresh produce. Almaty means "father of apples" in Kazakh — the wild ancestor of the cultivated apple originated in the Tian Shan mountains, which means every apple you've ever eaten has its origins here.\n\nCharyn Canyon — a two-hour drive from the city — is Central Asia's answer to the Grand Canyon. Less visited, equally spectacular.`
  },
  {
    id: "japan-kitakyushu-2025",
    title: "Kitakyushu, Japan",
    countries: ["Japan"],
    flag: "🇯🇵",
    continent: "Asia",
    date: "August 2025",
    year: 2025,
    days: 7,
    coverGradient: "linear-gradient(135deg, #1a0d1a 0%, #2d1a2d 50%, #4d2d4d 100%)",
    excerpt: "Japan's answer to Pittsburgh — a city that used to be steel and reinvented itself. The Mojiko retro port district, the ramen, and the view of Shimonoseki across the Kanmon Strait at night.",
    tags: ["Culture", "Food", "Off the Beaten Path"],
    highlights: ["Mojiko Retro District", "Kanmon Strait", "Kokura Castle", "Yahata Steel Works"],
    bestTime: "March – May, October – November",
    currency: "JPY ¥",
    story: `Most people who go to Japan for the first time go to Tokyo or Kyoto. Kitakyushu is the choice for the second or third visit — a city that doesn't perform for tourists but simply exists, beautifully, in the way of Japanese cities that have been around long enough to stop worrying about it.\n\nKitakyushu was built on steel. The Yahata Steel Works, established in 1901, turned this corner of Kyushu island into Japan's industrial heart. The city still wears its industrial past with a certain pride — the Yahata works are now a UNESCO World Heritage Site, and the retro industrial aesthetic is something Kitakyushu has turned into an identity.\n\nMojiko Retro District is the best part of this identity: a preserved waterfront area from the early twentieth century, European-influenced architecture along the Kanmon Strait, the bridge to Honshu visible in the distance. At night the Shimonoseki shore across the water lights up and you can cross by ferry in five minutes.\n\nThe ramen here is tonkotsu, the Kyushu style — rich pork bone broth, thin noodles, chashu that melts. I had it twice a day. No apology.`
  },
  {
    id: "hawaii-2025",
    title: "Hawaii, USA",
    countries: ["USA"],
    flag: "🇺🇸",
    continent: "North America",
    date: "December 2025",
    year: 2025,
    days: 10,
    coverGradient: "linear-gradient(135deg, #0d0d00 0%, #1a1500 50%, #332b00 100%)",
    excerpt: "Volcanoes that are still happening, sea turtles on every beach, and a cultural warmth (the aloha isn't a performance) that makes you recalibrate what hospitality means.",
    tags: ["Nature", "Beaches", "Volcanoes", "Culture"],
    highlights: ["Hawaii Volcanoes National Park", "Waimea Canyon", "Road to Hana", "Na Pali Coast"],
    bestTime: "April – October",
    currency: "USD $",
    story: `Hawaii occupies an impossible position: one of the most remote archipelagos on Earth, created by a volcanic hot spot at the center of the Pacific Plate, but also a US state with Walmart and freeways. The tension between these two facts shapes everything about being there.\n\nThe Big Island for the volcanoes first. Hawai'i Volcanoes National Park is one of the few places on Earth where you can watch land being made. The caldera at Kilauea steams constantly; lava flows — sometimes visible, sometimes not — are reaching the ocean and adding to the island's area in geological real-time. Standing near the glow at the edge of an active vent is the most primordial experience I've had anywhere.\n\nKauai for the Na Pali Coast — cliffs dropping a thousand meters straight into the Pacific, accessible only by boat or on foot, unchanged since the ancient Hawaiian settlers arrived in the fourth century. December is technically the rainy season on the north shore, but the rain came in short bursts and left the valleys an impossible green.\n\nThe Hawaiian cultural pride is genuine and deliberate — the language is undergoing a revival, traditional navigation is being taught, the hula is not a tourist show but a living practice. That context changes how you see everything.`
  },
  {
    id: "usa-2026",
    title: "San Diego, USA",
    countries: ["USA"],
    flag: "🇺🇸",
    continent: "North America",
    date: "January 2026",
    year: 2026,
    days: 10,
    coverGradient: "linear-gradient(135deg, #001a33 0%, #003366 50%, #005f9e 100%)",
    excerpt: "Returning to San Diego thirteen years later — now familiar, still beautiful. Then east through the desert: Joshua Tree at dawn, the Grand Canyon at the rim, New Orleans for the food and the music.",
    tags: ["Road Trip", "Cities", "Nature"],
    highlights: ["San Diego Revisited", "Joshua Tree National Park", "Grand Canyon South Rim", "New Orleans", "Route 66"],
    bestTime: "Year-round (varies by region)",
    currency: "USD $",
    story: `I first came to San Diego in 2013 as a 20-year-old student experiencing America for the first time. Returning in 2026, the city felt both familiar and newly strange — I could read it now, understand its geography and rhythms, but also see how much it had changed and how much I had. The same Pacific light, the same morning marine layer burning off by noon, the same breakfast burrito from a place near the beach that I found on my first visit and somehow remembered.\n\nThe drive east was the point. I'd never done a proper American road trip, and the scale of the Southwest demanded it. Joshua Tree at dawn — the joshua trees silhouetted against a sky going pink, absolute silence except for wind. The Grand Canyon rim in the afternoon light, where the brain simply refuses to process the depth correctly until the canyon corrects you. No photograph has ever managed it.\n\nNew Orleans as the cultural counterweight to the desert emptiness: the French Quarter at night, the specific relationship the city has with its own history and grief, jazz from open doors at 11 PM, beignets at Café Du Monde with powdered sugar on everything. New Orleans operates by its own rules and is entirely unapologetic about it.\n\nFrom there, north and east — the landscape changing from bayou to Appalachian foothills to the dense northeastern corridor, until the lights of New York appeared on the horizon.`
  },
  {
    id: "new-york-2026",
    title: "New York, USA",
    countries: ["USA"],
    flag: "🇺🇸",
    continent: "North America",
    date: "January 2026",
    year: 2026,
    days: 10,
    coverGradient: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
    excerpt: "New York in January is the real New York — no tourists, full speed, every person moving like they have somewhere more important to be. I was there for ten days and barely scratched it.",
    tags: ["Cities", "Culture", "Art"],
    highlights: ["Manhattan", "Brooklyn Bridge", "MoMA", "Central Park in Winter", "Lower East Side"],
    bestTime: "April – June, September – November",
    currency: "USD $",
    story: `New York in January is not the postcard version. The tourists are gone, the city drops the performance and just operates — full cold-weather efficiency, everyone moving with the purposeful velocity of someone who has somewhere better to be. This is the version worth seeing.\n\nI had ten days, which is enough to stop being overwhelmed and start being curious. Manhattan first: the obvious coordinates — Central Park under a thin layer of snow, the Brooklyn Bridge on foot at sunrise with almost no one else there, MoMA for a full day that still wasn't enough. The High Line in January is underrated: the industrial landscape and the bare trees have a different kind of beauty than the summer version, and you have it mostly to yourself.\n\nBrooklyn the second half of the trip. Dumbo for the view of the bridge and the Manhattan skyline from the other side. Williamsburg for the food and the specific Brooklyn energy of intense creative ambition conducted at a slightly lower volume than Manhattan. Red Hook, which still feels like a neighborhood that hasn't been fully discovered yet, though it has.\n\nWhat New York does better than anywhere else is density of everything simultaneously — more art, more food, more music, more strange conversations, more things happening within walking distance than any other city I've been to. Ten days was enough to understand that ten days is not enough for New York.`
  },
  {
    id: "south-america-2026",
    title: "South America",
    countries: ["Chile", "Argentina"],
    flag: "🇨🇱",
    continent: "South America",
    date: "March 2026",
    year: 2026,
    days: 11,
    coverGradient: "linear-gradient(135deg, #001a0d 0%, #003320 50%, #005535 100%)",
    excerpt: "Patagonia breaks something in you — in the best possible way. The Torres del Paine massif against a winter sky, condors overhead, wind that feels personal. Then Buenos Aires, which doesn't sleep.",
    tags: ["Nature", "Adventure", "Culture", "Multi-Country"],
    highlights: ["Torres del Paine", "Buenos Aires", "Perito Moreno Glacier", "Santiago", "W-Trek"],
    bestTime: "November – March (Patagonia)",
    currency: "CLP $ / ARS $",
    story: `Patagonia was the primary reason for this trip, and it justified itself immediately. Flying into Punta Arenas at the southern tip of Chile, the landscape below looks like the end of the world — which, in a sense, it is. The Strait of Magellan visible from the air, mountains to the west, the vast Patagonian steppe extending east toward Argentina.\n\nTorres del Paine National Park: three granite towers rising 2,800 meters above a glacial lake, guanacos grazing in the meadows below, condors — wingspan over three meters — circling on thermals above the ridgeline. The famous W-Trek through the park took five days on foot. The wind in Patagonia is not a weather condition; it's a presence. It picked up my trekking poles at one point and carried them several meters before I could react.\n\nBuenos Aires is the recovery: a European city somehow deposited in South America, with French architecture and Italian accents and Argentine tango and the most serious relationship with beef I've encountered anywhere. I ate a 600-gram steak at a parrilla near San Telmo and it was not unusual. The bookshops are magnificent.\n\nSantiago on the way back — the Andes visible from the city on a clear day, a functioning metro system, a food market called Mercado Central where the ceviche arrives still cold from the coast. South America rewards the people who stay long enough to stop comparing it to somewhere else.`
  },
  {
    id: "miami-2026",
    title: "Miami, USA",
    countries: ["USA"],
    flag: "🇺🇸",
    continent: "North America",
    date: "March 2026",
    year: 2026,
    days: 3,
    coverGradient: "linear-gradient(135deg, #001a33 0%, #003d1a 50%, #1a6600 100%)",
    excerpt: "Three days in Miami as a decompression chamber between Patagonia and home. South Beach neon, Cuban coffee in Little Havana, the Art Deco district in the late afternoon heat.",
    tags: ["Cities", "Beaches", "Culture"],
    highlights: ["South Beach", "Little Havana", "Wynwood Walls", "Art Deco Historic District", "Ocean Drive"],
    bestTime: "November – April",
    currency: "USD $",
    story: `Miami arrived after eleven days in Patagonia — wind-blasted, trail-tired, still processing Torres del Paine — and the contrast was absolute. Where Patagonia was cold and empty and elemental, Miami was hot and full and entirely artificial in the best possible way.\n\nSouth Beach at night is one of the more committed aesthetic experiences in American cities: the Art Deco buildings lit in pastel neon, the palm trees, the open-air bars, the specific Miami energy of everyone performing a slightly heightened version of themselves. The ocean at 11 PM is still warm enough to swim in.\n\nLittle Havana the next morning — Calle Ocho, the old men playing dominoes outside Maximo Gomez Park, Cuban coffee served in a tiny plastic cup that delivers caffeine with a directness that the rest of America's coffee culture spends thousands of words trying to approximate. Versailles restaurant for lunch: a Cuban institution since 1971, mirrors everywhere, portions designed for people who have been working since dawn.\n\nWynwood for the murals in the afternoon. The walls there change constantly — some of the best street artists in the world have painted there — and the neighborhood around them has turned into something between a gallery district and a food hall. Miami as a decompression between continents worked perfectly. Three days was exactly right.`
  },
  {
    id: "iceland-boston-2026",
    title: "Iceland",
    countries: ["Iceland"],
    flag: "🇮🇸",
    continent: "Europe",
    date: "April 2026",
    year: 2026,
    days: 6,
    coverGradient: "linear-gradient(135deg, #001a00 0%, #003300 50%, #004d00 100%)",
    excerpt: "April in Iceland: still cold enough for snow, long enough days to drive the Ring Road without headlights. The landscape is geology happening in real time — volcanoes, glaciers, waterfalls, all at once.",
    tags: ["Nature", "Adventure", "Solo"],
    highlights: ["Golden Circle", "Ring Road", "Jökulsárlón Glacier Lagoon", "Reynisfjara Black Beach", "Diamond Beach"],
    bestTime: "June – Aug (midnight sun), Nov – Feb (northern lights)",
    currency: "ISK kr",
    story: `April is shoulder season in Iceland — the tourist peak of summer hasn't arrived, the roads are mostly clear, and the days are already long enough to drive without headlamps by mid-month. The light is extraordinary: low-angled, Nordic, gold at hours when other countries have moved to white overhead sun.\n\nI drove the Ring Road — Iceland's Route 1, which circles the entire island — over five days. The landscape changes completely every fifty kilometers. Black volcanic beaches (Reynisfjara, where the Atlantic crashes against basalt columns that look assembled by someone with too much time and a geometry obsession). Geothermal fields where the earth steams and smells of sulfur and nothing grows except moss in colors that shouldn't exist. Waterfalls. Glaciers. More waterfalls.\n\nJökulsárlón glacier lagoon at sunrise: icebergs calved from the Vatnajökull glacier float in blue-black water toward the sea. Each one is a different shade of ice-blue, backlit by the low April sun. The Diamond Beach next to it, where ice chunks have washed up on black sand and catch the light like — well, like diamonds.\n\nIceland does something to your sense of scale. The country is the size of South Korea but feels infinite. Every turn on the Ring Road opens onto something that looks like it was painted for dramatic effect. After six days I still hadn't processed it fully. I don't think you're supposed to.`
  },
  {
    id: "boston-2026",
    title: "Boston, USA",
    countries: ["USA"],
    flag: "🇺🇸",
    continent: "North America",
    date: "April 2026",
    year: 2026,
    days: 4,
    coverGradient: "linear-gradient(135deg, #0a0014 0%, #1a0030 50%, #8b0000 100%)",
    excerpt: "Three nights in America's most walkable city. The Freedom Trail, Harvard Yard in spring, clam chowder in the North End, and the specific energy of a city that's been taking itself seriously since 1630.",
    tags: ["Cities", "History", "Culture"],
    highlights: ["Freedom Trail", "Harvard & MIT", "Fenway Park", "North End (Little Italy)", "Boston Common"],
    bestTime: "April – June, September – November",
    currency: "USD $",
    story: `Boston is one of America's oldest cities and wears its age confidently — which is unusual for a country that tends to demolish things rather than preserve them. Three nights was enough to walk most of what matters, and in Boston almost everything is walkable, which is also unusual for America.\n\nThe Freedom Trail is a red-brick line painted into the sidewalk, connecting sixteen historic sites from the revolutionary era across 4 kilometers of the city. Paul Revere's house still standing in the North End, exactly as it was in 1680. The Old State House where the Declaration of Independence was first read to Bostonians in 1776, now surrounded on all sides by skyscrapers that seem embarrassed to be there. The trail sounds like a tourist gimmick but isn't — Boston's history is dense enough that each stop actually earns its place.\n\nHarvard and MIT sit across the Charles River in Cambridge, a 20-minute walk or one subway stop. Harvard Yard in April was exactly what you'd imagine: undergraduates with heavy bags, old brick buildings, and the particular seriousness of a place that has been taking itself seriously since 1636. MIT's campus is completely different — angular, modernist, the buildings named after their donors or numbered like equations.\n\nThe North End is Boston's Italian-American neighborhood, and it has maintained its identity with unusual stubbornness. The clam chowder was not overrated. The cannoli at Mike's Pastry, which has been there since 1946, was not overrated. Boston in April, with the Red Sox season just started and the city cautiously optimistic, felt like catching a place at exactly the right moment.`
  }
];

// ===== STATS =====
function getStats() {
  const allCountries = new Set(travels.flatMap(t => t.countries));
  const allContinents = new Set(travels.map(t => t.continent));
  const totalDays = travels.reduce((sum, t) => sum + t.days, 0);
  return { countries: allCountries.size, continents: allContinents.size, days: totalDays };
}

// ===== PHOTO DATA =====
const travelPhotos = {
  'australia-2024': ['IMG_0420.JPG','IMG_0523.jpeg','IMG_0875.JPG','IMG_1003.jpeg','IMG_1184.jpeg','IMG_1241.jpeg','IMG_1416.jpeg','IMG_1642.JPG','IMG_1893.jpeg','IMG_2224.JPG','IMG_6060.JPG','IMG_8966.jpeg','IMG_9807.jpeg'],
  'china-qingdao-2025': ['IMG_3051.jpeg','IMG_3505.jpeg','IMG_3547.jpeg','IMG_5697.jpeg'],
  'europe-grand-tour-2025': ['IMG_0104.jpeg','IMG_0174.jpeg','IMG_0472.jpeg','IMG_0598.jpeg','IMG_0748.jpeg','IMG_0914.jpeg','IMG_0950.jpeg','IMG_1155.jpeg','IMG_1334.jpeg','IMG_1460.jpeg','IMG_1504.jpeg','IMG_1569.jpeg','IMG_1613.jpeg','IMG_7306.jpeg','IMG_7358.jpeg','IMG_7509.jpeg','IMG_8594.jpeg','IMG_8703.jpeg','IMG_9186.jpeg','IMG_9476.jpeg','IMG_9660.jpeg'],
  'guam-2024': ['IMG_1592.jpeg','IMG_2629.jpeg','IMG_2671.jpeg','IMG_2707.jpeg','IMG_2796.jpeg','IMG_2835.jpeg','IMG_2838.jpeg','IMG_6594.JPG','IMG_6621.jpeg','IMG_7767.JPG','IMG_7769.JPG'],
  'miami-2026': ['IMG_8496.jpeg','IMG_8520.jpeg','IMG_8531.jpeg','IMG_8540.jpeg','IMG_8550.jpeg','IMG_8600.jpeg','IMG_8679.jpeg','IMG_8711.jpeg','IMG_8717.jpeg'],
  'hawaii-2025': ['IMG_2814.jpeg','IMG_2909.jpeg','IMG_3001.jpeg','IMG_3293.jpeg','IMG_3309.jpeg','IMG_3439.jpeg','IMG_3450.jpeg','IMG_5601.jpeg'],
  'iceland-boston-2026': ['IMG_0403.jpeg','IMG_0404.jpeg','IMG_0430.jpeg','IMG_0650.jpeg','IMG_0885.jpeg','IMG_0893.jpeg','IMG_0939.jpeg','IMG_1205.jpeg','IMG_1320.jpeg','IMG_1324.jpeg','IMG_9724.jpeg','IMG_9807.jpeg'],
  'japan-kitakyushu-2025': ['IMG_0267.jpeg','IMG_0368.jpeg','IMG_1988.jpeg','IMG_5601.jpeg'],
  'kazakhstan-almaty-2025': ['IMG_0267.jpeg','IMG_0368.jpeg','IMG_1988.jpeg','IMG_5601.jpeg','IMG_8439.jpeg','IMG_8829.jpeg','IMG_8995.jpeg','IMG_9189.jpeg','IMG_9394.jpeg','IMG_9397.jpeg','IMG_9542.JPG'],
  'philippines-bohol-2025': ['IMG_6009.jpeg','IMG_6010.jpeg','IMG_6523.jpeg','IMG_6603.jpeg','IMG_6698.jpeg','IMG_6933.jpeg'],
  'south-america-2026': ['IMG_6496.jpeg','IMG_6621.jpeg','IMG_6872.jpeg','IMG_6897.jpeg','IMG_7374.jpeg','IMG_7377.jpeg','IMG_7901.jpeg'],
  'turkey-2022': ['IMG_1579.jpeg','IMG_1605.jpeg','IMG_1612.jpeg','IMG_1620.jpeg','IMG_1957.jpeg','IMG_1962.jpeg','IMG_1975.jpeg','IMG_2149.jpeg','IMG_2300.jpeg','IMG_2629.jpeg','IMG_6594.JPG','IMG_9421.jpeg','IMG_9503.jpeg'],
  'usa-2026': ['IMG_3565.jpeg','IMG_3576.jpeg','IMG_3580.jpeg','IMG_3588.jpeg','IMG_3601.jpeg','IMG_3609.jpeg','IMG_3616.jpeg','IMG_3671.jpeg','IMG_3686.jpeg','IMG_3701.jpeg','IMG_3713.jpeg','IMG_3716.jpeg','IMG_3733.jpeg','IMG_3739.jpeg','IMG_3763.jpeg','IMG_3783.jpeg','IMG_3805.jpeg','IMG_3816.jpeg','IMG_3822.jpeg','IMG_3836.jpeg','IMG_3855.jpeg','IMG_3864.jpeg','IMG_3880.jpeg','IMG_3896.jpeg'],
  'new-york-2026': ['IMG_1510.jpeg','IMG_1695.jpeg','IMG_1708.jpeg','IMG_2918.jpeg','IMG_2970.jpeg','IMG_2972.jpeg','IMG_3068.jpeg','IMG_3103.jpeg','IMG_3121.jpeg','IMG_3128.jpeg','IMG_3147.jpeg','IMG_3167.jpeg','IMG_3217.jpeg','IMG_3609.jpeg','IMG_3619.jpeg','IMG_3621.jpeg','IMG_3638.jpeg','IMG_3655.jpeg','IMG_4460.jpeg','IMG_4506.jpeg','IMG_4823.jpeg','IMG_5135.jpeg'],
  'qatar-2024': ['IMG_7259.jpeg','IMG_7282.jpeg','IMG_7290.jpeg','IMG_7306.jpeg','IMG_7317.jpeg','IMG_7361.jpeg','IMG_7362.jpeg','IMG_7404.jpeg','IMG_7418.jpeg'],
  'boston-2026': ['IMG_2285.jpeg','IMG_2289.jpeg','IMG_2290.jpeg','IMG_2295.jpeg','IMG_2305.jpeg','IMG_2306.jpeg','IMG_2320.jpeg','IMG_2350.jpeg','IMG_2380.jpeg','IMG_2395.jpeg','IMG_2417.jpeg','IMG_2472.jpeg','IMG_2507.jpeg','IMG_2510.jpeg','IMG_2516.jpeg','IMG_2536.jpeg','IMG_2585.jpeg','IMG_2621.jpeg','IMG_2666.jpeg','IMG_2685.jpeg','IMG_2752.jpeg','IMG_2753.jpeg'],
};

function imgBase() {
  return location.pathname.includes('/countries/') ? '../' : '';
}

function getPhotos(id) {
  return (travelPhotos[id] || []).map(f => `${imgBase()}images/${id}/${f}`);
}

function getCoverPhoto(id) {
  const files = travelPhotos[id];
  return files && files.length ? `${imgBase()}images/${id}/${files[0]}` : null;
}

// ===== RENDER HELPERS =====
function createCard(travel) {
  const cover = getCoverPhoto(travel.id);
  const thumb = cover
    ? `<div style="height:180px;overflow:hidden;position:relative;">
         <img src="${cover}" alt="${travel.title}" style="width:100%;height:100%;object-fit:cover;display:block;transition:transform 0.4s ease;">
         <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.35) 0%,transparent 50%);pointer-events:none;"></div>
         <span style="position:absolute;bottom:0.5rem;right:0.75rem;font-size:1.5rem;filter:drop-shadow(0 1px 3px rgba(0,0,0,0.7));">${travel.flag}</span>
       </div>`
    : `<div style="background:${travel.coverGradient};height:180px;display:flex;align-items:center;justify-content:center;font-size:3.5rem;flex-direction:column;gap:0.25rem;">
         <span>${travel.flag}</span>
         <span style="font-size:0.7rem;color:rgba(255,255,255,0.5);letter-spacing:0.1em;">${travel.year}</span>
       </div>`;
  return `
    <div class="country-card" data-id="${travel.id}" data-continent="${travel.continent}" data-tags="${travel.tags.join(',')}" data-year="${travel.year}"
         onclick="window.location.href='countries/detail.html?id=${travel.id}'">
      ${thumb}
      <div class="country-card-body">
        <div class="country-card-header">
          <span class="country-flag">${travel.flag}</span>
          <span class="country-name">${travel.title}</span>
        </div>
        <div class="country-meta">
          <span>📅 ${travel.date}</span>
          <span>🌍 ${travel.continent}</span>
        </div>
        <p class="country-excerpt">${travel.excerpt}</p>
        <div class="country-tags">
          ${travel.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `;
}

// ===== HOMEPAGE =====
function initHomepage() {
  const grid = document.getElementById('countries-grid');
  const featuredGrid = document.getElementById('featured-grid');

  if (featuredGrid) {
    const featured = travels.slice(-3).reverse();
    featuredGrid.innerHTML = featured.map((t, i) => {
      const cover = getCoverPhoto(t.id);
      const bgStyle = cover
        ? `background-image:url('${cover}');background-size:cover;background-position:center;`
        : `background:${t.coverGradient};`;
      const isFirst = i === 0;
      return `
        <div class="featured-card" onclick="window.location.href='countries/detail.html?id=${t.id}'" ${isFirst ? 'style="grid-row:1/3;"' : ''}>
          <div class="card-image" style="${bgStyle}${isFirst ? 'aspect-ratio:unset;height:100%;' : ''}${!cover ? 'display:flex;align-items:center;justify-content:center;font-size:' + (isFirst ? '6rem' : '4rem') + ';' : ''}">
            ${!cover ? t.flag : ''}
          </div>
          <div class="card-overlay">
            <div class="card-flag">${t.flag}</div>
            <div class="card-country">${t.title}</div>
            <div class="card-date">${t.date} · ${t.continent}</div>
            <div class="card-excerpt">${t.excerpt}</div>
          </div>
        </div>
      `;
    }).join('');
  }

  if (grid) {
    grid.innerHTML = travels.map(createCard).join('');
  }

  // Timeline
  const timeline = document.getElementById('timeline');
  if (timeline) {
    const sorted = [...travels].sort((a, b) => a.year - b.year);
    timeline.innerHTML = sorted.map(t => `
      <div class="timeline-item">
        <div class="timeline-date">${t.date}</div>
        <div class="timeline-title">${t.flag} ${t.title}</div>
        <div class="timeline-text">${t.excerpt.split('.')[0]}.</div>
      </div>
    `).join('');
  }

  // Stats
  const stats = getStats();
  const statEls = document.querySelectorAll('.stat-number');
  const targets = [stats.countries, stats.continents, stats.days];
  statEls.forEach((el, i) => {
    if (targets[i] !== undefined) animateCount(el, targets[i]);
  });
}

function animateCount(el, target) {
  let current = 0;
  const increment = target / 50;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = Math.floor(current);
  }, 30);
}

// ===== FILTER + SORT =====
function initFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const sortBtns = document.querySelectorAll('.sort-btn');
  const grid = document.getElementById('countries-grid');
  if (!grid) return;

  let currentFilter = 'all';
  let currentSort = 'newest';

  function applyFilterSort() {
    const cards = Array.from(grid.querySelectorAll('.country-card'));

    cards.forEach(card => {
      const continent = card.dataset.continent;
      const tags = card.dataset.tags || '';
      const show = currentFilter === 'all' || continent === currentFilter || tags.includes(currentFilter);
      card.style.display = show ? '' : 'none';
    });

    const visible = cards.filter(c => c.style.display !== 'none');
    visible.sort((a, b) => {
      const ya = parseInt(a.dataset.year);
      const yb = parseInt(b.dataset.year);
      return currentSort === 'newest' ? yb - ya : ya - yb;
    });
    visible.forEach(card => grid.appendChild(card));

    const countEl = document.getElementById('trip-count');
    if (countEl) countEl.textContent = `${visible.length} trip${visible.length !== 1 ? 's' : ''}`;
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      applyFilterSort();
    });
  });

  sortBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sortBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentSort = btn.dataset.sort;
      applyFilterSort();
    });
  });

  applyFilterSort();
}

// ===== LIGHTBOX =====
function openLightbox(photos, startIndex) {
  let current = startIndex;

  const lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.innerHTML = `
    <button class="lb-close" aria-label="Close">✕</button>
    <button class="lb-prev" aria-label="Previous">‹</button>
    <div class="lb-img-wrap">
      <img class="lb-img" src="${photos[current]}" alt="">
      <div class="lb-counter">${current + 1} / ${photos.length}</div>
    </div>
    <button class="lb-next" aria-label="Next">›</button>
  `;
  document.body.appendChild(lb);
  document.body.style.overflow = 'hidden';

  const img = lb.querySelector('.lb-img');
  const counter = lb.querySelector('.lb-counter');

  function show(i) {
    current = (i + photos.length) % photos.length;
    img.style.opacity = '0';
    setTimeout(() => {
      img.src = photos[current];
      img.onload = () => { img.style.opacity = '1'; };
      counter.textContent = `${current + 1} / ${photos.length}`;
    }, 150);
  }

  lb.querySelector('.lb-close').onclick = () => {
    document.body.removeChild(lb);
    document.body.style.overflow = '';
  };
  lb.querySelector('.lb-prev').onclick = () => show(current - 1);
  lb.querySelector('.lb-next').onclick = () => show(current + 1);
  lb.addEventListener('click', e => { if (e.target === lb) lb.querySelector('.lb-close').click(); });

  document.addEventListener('keydown', function handler(e) {
    if (e.key === 'Escape') { lb.querySelector('.lb-close').click(); document.removeEventListener('keydown', handler); }
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });
}

// ===== DETAIL PAGE =====
function initDetailPage() {
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  if (!id) return;

  const trip = travels.find(t => t.id === id);
  if (!trip) {
    document.getElementById('detail-content').innerHTML = '<p style="color:var(--text-muted);text-align:center;padding:4rem;">Trip not found.</p>';
    return;
  }

  document.title = `${trip.title} — World Travel Archive`;
  const photos = getPhotos(trip.id);

  const hero = document.getElementById('detail-hero');
  if (hero) {
    if (photos.length > 0) {
      hero.style.cssText = `background-image:url('${photos[0]}');background-size:cover;background-position:center;`;
    } else {
      hero.style.background = trip.coverGradient;
    }
    hero.innerHTML = `
      <div class="country-hero-overlay"></div>
      <div class="country-hero-content">
        <div class="country-hero-flag">${trip.flag}</div>
        <h1 class="country-hero-name">${trip.title}</h1>
        <p class="country-hero-sub">${trip.continent} · ${trip.date} · ${trip.days} Days</p>
      </div>
    `;
  }

  const galleryHtml = photos.length > 0 ? `
    <h2 style="margin-top:2.5rem;">Photos <span style="font-size:0.85rem;color:var(--text-muted);font-family:var(--font);font-weight:400;">${photos.length} shots</span></h2>
    <div class="photo-gallery" id="photo-gallery">
      ${photos.map((src, i) => `
        <div class="gallery-item" data-index="${i}">
          <img src="${src}" alt="Photo ${i+1}" loading="lazy">
        </div>`).join('')}
    </div>
  ` : '';

  const content = document.getElementById('detail-content');
  if (content) {
    content.innerHTML = `
      <div class="info-grid">
        <div class="info-card"><div class="info-card-label">Duration</div><div class="info-card-value">${trip.days} days</div></div>
        <div class="info-card"><div class="info-card-label">Best Time</div><div class="info-card-value">${trip.bestTime}</div></div>
        <div class="info-card"><div class="info-card-label">Currency</div><div class="info-card-value">${trip.currency}</div></div>
        <div class="info-card"><div class="info-card-label">Continent</div><div class="info-card-value">${trip.continent}</div></div>
      </div>

      <div class="country-tags" style="margin-bottom:2rem;">
        ${trip.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>

      <h2>The Story</h2>
      ${trip.story.split('\n\n').map(p => `<p>${p}</p>`).join('')}

      <h2 style="margin-top:2.5rem;">Highlights</h2>
      <ul style="list-style:none;display:flex;flex-direction:column;gap:0.75rem;margin-bottom:2rem;">
        ${trip.highlights.map(h => `
          <li style="display:flex;align-items:center;gap:0.75rem;color:var(--text-muted);">
            <span style="color:var(--accent);">→</span> ${h}
          </li>`).join('')}
      </ul>

      ${galleryHtml}

      <div style="margin-top:3rem;padding-top:2rem;border-top:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;">
        <a href="../archive.html" class="btn btn-outline">← Back to Archive</a>
        <a href="../archive.html" class="btn btn-outline">All Destinations</a>
      </div>
    `;

    if (photos.length > 0) {
      document.getElementById('photo-gallery').addEventListener('click', e => {
        const item = e.target.closest('.gallery-item');
        if (item) openLightbox(photos, parseInt(item.dataset.index));
      });
    }
  }
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initHomepage();
  initFilter();
  initDetailPage();
});
