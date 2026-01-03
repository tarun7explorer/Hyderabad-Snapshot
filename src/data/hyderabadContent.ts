export interface ContentItem {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Section {
  id: string;
  title: string;
  tagline: string;
  icon: string;
  accentColor: string;
  glowColor: string;
  image: string;
  items: ContentItem[];
}

export const sections: Section[] = [
  {
    id: "food",
    title: "Food",
    tagline: "The aromatic legacy of Dum Biryani and the warmth of Irani Chai.",
    icon: "🍛",
    accentColor: "hsl(30, 100%, 50%)",
    glowColor: "hsl(30, 100%, 50%)",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=2070&auto=format&fit=crop",
    items: [
      {
        id: "biryani-paradise",
        name: "Paradise Biryani",
        description:
          "The crown jewel of Hyderabadi dum biryani — fragrant basmati layered with succulent meat since 1953.",
        image: "https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?q=80&w=2020&auto=format&fit=crop",
      },
      {
        id: "biryani-bawarchi",
        name: "Bawarchi Biryani",
        description: "RTC Cross Roads legend serving family-style portions that define celebration in every household.",
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1974&auto=format&fit=crop",
      },
      {
        id: "haleem",
        name: "Pista House Haleem",
        description: "Ramadan's most awaited delicacy — slow-cooked wheat and meat melt into divine richness.",
        image: "https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?q=80&w=2022&auto=format&fit=crop",
      },
      {
        id: "irani-chai",
        name: "Irani Chai at Nimrah",
        description: "Charminar's iconic café where milky chai meets century-old Osmania biscuits.",
        image: "https://images.unsplash.com/photo-1594631252845-29fc4586d5d7?q=80&w=1974&auto=format&fit=crop",
      },
      {
        id: "qubani",
        name: "Qubani Ka Meetha",
        description: "Royal apricot dessert crowned with malai — Nizami sweetness in every spoonful.",
        image: "https://images.unsplash.com/photo-1589114131558-86d482260657?q=80&w=1935&auto=format&fit=crop",
      },
      {
        id: "nihari",
        name: "Nihari at Shadab",
        description: "Dawn's slow-cooked stew awakens taste buds with rich spices and tender meat.",
        image: "https://images.unsplash.com/photo-1545231027-63b6f0a05bce?q=80&w=1970&auto=format&fit=crop",
      },
      {
        id: "lukhmi",
        name: "Lukhmi",
        description: "Crispy samosa's aristocratic cousin — minced meat in flaky pastry perfection.",
        image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce7d?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: "double-roti",
        name: "Double Ka Meetha",
        description: "Bread pudding transformed into Deccani royalty with saffron and dry fruits.",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1928&auto=format&fit=crop",
      },
      {
        id: "mirchi-bajji",
        name: "Mirchi Bajji",
        description: "Street-side thunder — stuffed chillies deep-fried into crunchy, spicy ecstasy.",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c175f0?q=80&w=2035&auto=format&fit=crop",
      },
      {
        id: "boti-kebab",
        name: "Boti Kebab",
        description: "Charcoal-kissed perfection — tender meat cubes marinated in Deccani spices.",
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: "pathar-gosht",
        name: "Pathar Ka Gosht",
        description: "Stone-cooked lamb sizzles at your table — ancient technique, modern marvel.",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop",
      },
      {
        id: "khubani-lassi",
        name: "Khubani Lassi",
        description: "Apricot-infused yogurt drink — creamy indulgence meeting fruity freshness.",
        image: "https://images.unsplash.com/photo-1571006682858-a09e0eda4f69?q=80&w=2070&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "culture",
    title: "Culture",
    tagline: "A symphony of Deccani grace and modern Telugu spirit.",
    icon: "🎭",
    accentColor: "hsl(280, 70%, 55%)",
    glowColor: "hsl(280, 70%, 55%)",
    image: "https://images.unsplash.com/photo-1582236528929-23c213476901?q=80&w=2070&auto=format&fit=crop",
    items: [
      {
        id: "bonalu",
        name: "Bonalu Festival",
        description: "The city erupts in fierce devotion — colorful processions honor the mother goddess.",
        image: "https://images.unsplash.com/photo-1621255198084-25925e510825?q=80&w=1974&auto=format&fit=crop",
      },
      {
        id: "bathukamma",
        name: "Bathukamma",
        description: "Telangana's floral festival — women dance around towering flower stacks in celebration.",
        image: "https://images.unsplash.com/photo-1605377349955-7634861b072d?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: "deccan-music",
        name: "Deccani Qawwali",
        description: "Sufi mysticism echoes through dargahs — soul-stirring melodies transcend boundaries.",
        image: "https://images.unsplash.com/photo-1524368270313-8959f75a2283?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: "kuchipudi",
        name: "Kuchipudi Dance",
        description: "Classical elegance meets storytelling — ancient Telugu dance form in graceful motion.",
        image: "https://images.unsplash.com/photo-1583256942501-c889f5c4048e?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: "pearls",
        name: "Hyderabadi Pearls",
        description: "Charminar's pearl markets shine — centuries of craftsmanship in luminous beauty.",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1974&auto=format&fit=crop",
      },
      {
        id: "bidri",
        name: "Bidriware Art",
        description: "Silver inlay on blackened alloy — Deccan's signature metalcraft gleams timelessly.",
        image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=2014&auto=format&fit=crop",
      },
      {
        id: "pochampally",
        name: "Pochampally Ikat",
        description: "UNESCO heritage weaving — geometric patterns bloom in silk and cotton threads.",
        image: "https://images.unsplash.com/photo-1590736962388-340643956624?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: "urdu-poetry",
        name: "Urdu Poetry Mushairas",
        description: "Literary evenings where ghazals flow — Deccani Urdu's romantic heritage lives on.",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1973&auto=format&fit=crop",
      },
      {
        id: "nizami-etiquette",
        name: "Nizami Tehzeeb",
        description: "Legendary hospitality and refined manners — the gentle art of Hyderabadi grace.",
        image: "https://images.unsplash.com/photo-1518391846015-55a9cb000b21?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: "laad-bazaar",
        name: "Laad Bazaar Bangles",
        description: "Rainbow of glass circles — bridal dreams sparkle in the shadow of Charminar.",
        image: "https://images.unsplash.com/photo-1582236528929-23c213476901?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: "telugu-cinema",
        name: "Telugu Film Industry",
        description: "Tollywood's magic factory — India's largest film industry by output.",
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop",
      },
      {
        id: "numaish",
        name: "Numaish Exhibition",
        description: "Winter's grand bazaar — all of India gathers under one sprawling fairground.",
        image: "https://images.unsplash.com/photo-1472653431158-6364773b2a56?q=80&w=2070&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "famous-places",
    title: "Famous Places",
    tagline: "From the towering Charminar to the impregnable echoes of Golconda.",
    icon: "🕌",
    accentColor: "hsl(45, 90%, 50%)",
    glowColor: "hsl(45, 90%, 50%)",
    image: "https://images.unsplash.com/photo-1581390114539-0b190dec7318?q=80&w=2036&auto=format&fit=crop",
    items: [
      {
        id: "charminar",
        name: "Charminar",
        description: "The iconic four-minaret monument stands since 1591 — Hyderabad's beating heart.",
        image: "https://images.unsplash.com/photo-1581390114539-0b190dec7318?q=80&w=2036&auto=format&fit=crop",
      },
      {
        id: "golconda",
        name: "Golconda Fort",
        description: "Legendary diamond treasury echoing tales of glory — acoustic marvels and sunset panoramas.",
        image: "https://images.unsplash.com/photo-1616422285623-13ff0167c95c?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: "qutb-shahi",
        name: "Qutb Shahi Tombs",
        description: "Magnificent domed mausoleums — seven sultans rest in Indo-Persian grandeur.",
        image: "https://images.unsplash.com/photo-1582042738275-d142f9a25997?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: "chowmahalla",
        name: "Chowmahalla Palace",
        description: "Nizam's royal residence — opulent durbar halls and vintage car collection.",
        image: "https://images.unsplash.com/photo-1644049871754-0714777a83d3?q=80&w=1921&auto=format&fit=crop",
      },
      {
        id: "salar-jung",
        name: "Salar Jung Museum",
        description: "World's largest one-man collection — art treasures spanning civilizations.",
        image: "https://images.unsplash.com/photo-1634507119053-bc2a16d510c4?q=80&w=1932&auto=format&fit=crop",
      },
      {
        id: "paigah-tombs",
        name: "Paigah Tombs",
        description: "Aristocratic necropolis — intricate marble and stucco in romantic decay.",
        image: "https://images.unsplash.com/photo-1598460610531-3e536130b064?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: "mecca-masjid",
        name: "Mecca Masjid",
        description: "One of India's largest mosques — bricks from Mecca sanctify this sacred ground.",
        image: "https://images.unsplash.com/photo-1593950294711-209e51b660c1?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: "hussain-sagar",
        name: "Hussain Sagar Lake",
        description: "Heart-shaped lake with Buddha statue — sunset boat rides and Tank Bund strolls.",
        image: "https://images.unsplash.com/photo-1627848692735-d286d9a0d844?q=80&w=2074&auto=format&fit=crop",
      },
      {
        id: "birla-mandir",
        name: "Birla Mandir",
        description: "Hilltop white marble temple — city views meet spiritual serenity at dusk.",
        image: "https://images.unsplash.com/photo-1596700812743-3058a74e532b?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: "falaknuma",
        name: "Taj Falaknuma Palace",
        description: "Mirror of the sky — Italian marble palace now hosts royal luxury stays.",
        image: "https://images.unsplash.com/photo-1623945227418-2d330b607662?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: "purani-haveli",
        name: "Purani Haveli",
        description: "Nizam Museum with world's longest wardrobe — 400 years of royal artifacts.",
        image: "https://images.unsplash.com/photo-1644049871630-67c4e512d7c5?q=80&w=1921&auto=format&fit=crop",
      },
      {
        id: "nehru-zoo",
        name: "Nehru Zoological Park",
        description: "Asia's largest zoo — lion safari and nocturnal house adventures await.",
        image: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: "ntr-gardens",
        name: "NTR Gardens",
        description: "Hussain Sagar's green lung — Japanese garden and musical fountain evenings.",
        image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2112&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "it-hub",
    title: "IT Hub",
    tagline: "The glass skyline of HITEC City—where India's silicon dreams take flight.",
    icon: "💻",
    accentColor: "hsl(195, 100%, 55%)",
    glowColor: "hsl(195, 100%, 55%)",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    items: [
      {
        id: "hitec-city",
        name: "HITEC City",
        description: "India's silicon valley rises here — gleaming towers house global tech giants.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: "t-hub",
        name: "T-Hub",
        description: "India's largest startup incubator — where unicorn dreams are born and nurtured.",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop",
      },
      {
        id: "knowledge-city",
        name: "Knowledge City",
        description: "Research and innovation campus — pharma giants and biotech pioneers collaborate.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
      },
      {
        id: "amazon-campus",
        name: "Amazon Hyderabad",
        description: "World's largest Amazon campus — tech innovation at massive Deccan scale.",
        image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: "google-office",
        name: "Google Gachibowli",
        description: "Search giant's expanding footprint — colorful workspaces spark digital creativity.",
        image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop",
      },
      {
        id: "microsoft-idc",
        name: "Microsoft IDC",
        description: "Innovation hub for cloud and AI — where Windows and Azure evolve daily.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: "infosys-pocharam",
        name: "Infosys Pocharam",
        description: "Green campus paradise — sustainable tech meets architectural excellence.",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop",
      },
      {
        id: "tcs-adibatla",
        name: "TCS Adibatla",
        description: "Consultancy giant's mega campus — training tomorrow's tech workforce.",
        image: "https://images.unsplash.com/photo-1504384308090-c89eececbfbc?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: "raheja-mindspace",
        name: "Raheja Mindspace",
        description: "IT park icon — glass towers and food courts define tech work culture.",
        image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: "skyview",
        name: "Skyview by EIPL",
        description: "Futuristic towers touching clouds — the new face of tech workspace design.",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: "we-work",
        name: "WeWork Galaxy",
        description: "Co-working revolution — startups and freelancers thrive in flexible spaces.",
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: "iiit-hyderabad",
        name: "IIIT Hyderabad",
        description: "Premier tech research institute — breeding ground for AI and ML pioneers.",
        image: "https://images.unsplash.com/photo-1523050335392-9bc5675e7a5c?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: "fab-city",
        name: "Fab City",
        description: "Semiconductor manufacturing hub — India's chip-making ambitions take shape.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "adventure",
    title: "Adventure",
    tagline: "Bouldering at Khajaguda and the cinematic wonders of Ramoji.",
    icon: "🏔️",
    accentColor: "hsl(120, 60%, 45%)",
    glowColor: "hsl(120, 60%, 45%)",
    image: "https://images.unsplash.com/photo-1514330605995-1f99c808f921?q=80&w=2070&auto=format&fit=crop",
    items: [
      {
        id: "khajaguda",
        name: "Khajaguda Hills",
        description: "Boulder-strewn trails await — sunrise treks reveal the awakening city below.",
        image: "https://images.unsplash.com/photo-1514330605995-1f99c808f921?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: "ramoji",
        name: "Ramoji Film City",
        description: "World's largest film studio — 2000 acres of Bollywood magic and theme parks.",
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop",
      },
      {
        id: "ananthagiri",
        name: "Ananthagiri Hills",
        description: "Misty coffee plantations — weekend escape to nature's cool green embrace.",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: "bhongir-fort",
        name: "Bhongir Fort",
        description: "Monolithic boulder fortress — adrenaline climb rewards with panoramic views.",
        image: "https://images.unsplash.com/photo-1544911845-1f34a3eb46b1?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: "pocharam-dam",
        name: "Pocharam Dam",
        description: "Serene reservoir retreat — boating, wildlife sanctuary, and peaceful picnics.",
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop",
      },
      {
        id: "ocean-park",
        name: "Ocean Park",
        description: "Water park thrills — wave pools and slides beat the Deccan summer heat.",
        image: "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?q=80&w=2072&auto=format&fit=crop",
      },
      {
        id: "snow-world",
        name: "Snow World",
        description: "Arctic adventure in tropical city — snow slides and igloo experiences await.",
        image: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: "paintball",
        name: "Paintball Adventures",
        description: "Combat gaming zones — team battles in themed arenas around the city.",
        image: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: "kbr-park",
        name: "KBR National Park",
        description: "Urban jungle sanctuary — morning jogs among deer and peacocks.",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop",
      },
      {
        id: "durgam-cheruvu",
        name: "Durgam Cheruvu",
        description: "Secret lake with cable bridge — sunset walks and kayaking adventures.",
        image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: "osman-sagar",
        name: "Osman Sagar",
        description: "Historic reservoir getaway — boating and lakeside relaxation near the city.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: "mrugavani",
        name: "Mrugavani National Park",
        description: "Wild Deccan sanctuary — spot deer, peacocks, and exotic birds in natural habitat.",
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2148&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "malls-cafes",
    title: "Malls & Cafes",
    tagline: "High-street luxury in Jubilee Hills and the vibrant pulse of Banjara Hills.",
    icon: "☕",
    accentColor: "hsl(330, 70%, 55%)",
    glowColor: "hsl(330, 70%, 55%)",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop",
    items: [
      {
        id: "inorbit",
        name: "Inorbit Mall",
        description: "Luxury retail meets entertainment — flagship brands and gourmet dining.",
        image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2048&auto=format&fit=crop",
      },
      {
        id: "gvk-one",
        name: "GVK One Mall",
        description: "Banjara Hills landmark — premium shopping and multiplex entertainment.",
        image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: "forum-sujana",
        name: "Forum Sujana Mall",
        description: "KPHB's shopping paradise — family entertainment and retail therapy.",
        image: "https://images.unsplash.com/photo-1601933512587-43f054a32cc1?q=80&w=1974&auto=format&fit=crop",
      },
      {
        id: "sarath-city",
        name: "Sarath City Capital",
        description: "India's third-largest mall — endless brands under one colossal roof.",
        image: "https://images.unsplash.com/photo-1582037928769-181f2644ecb7?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: "ikea",
        name: "IKEA Hyderabad",
        description: "Swedish home experience — affordable design and famous meatballs.",
        image: "https://images.unsplash.com/photo-1555181126-cf46a03827c0?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: "next-galleria",
        name: "Next Galleria",
        description: "Entertainment mega-complex — bowling, gaming, and culinary adventures.",
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: "roastery-coffee",
        name: "Roastery Coffee House",
        description: "Third-wave coffee culture — single-origin brews in industrial chic spaces.",
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2078&auto=format&fit=crop",
      },
      {
        id: "olive-bistro",
        name: "Olive Bistro",
        description: "Mediterranean magic on Durgam Cheruvu — sunset views and gourmet plates.",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop",
      },
      {
        id: "dialogue-dark",
        name: "Dialogue in the Dark",
        description: "Sensory café experience — dine in complete darkness, guided by the blind.",
        image: "https://images.unsplash.com/photo-1550966841-3ee7adac1afb?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: "concu",
        name: "Conçu Patisserie",
        description: "French pastry perfection — macarons and croissants rival Paris itself.",
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: "autumn-leaf",
        name: "Autumn Leaf Café",
        description: "Banjara Hills institution — comfort food and conversations since forever.",
        image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=2071&auto=format&fit=crop",
      },
      {
        id: "farzi-cafe",
        name: "Farzi Café",
        description: "Molecular gastronomy meets Indian soul — Instagram-worthy culinary art.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: "socials",
        name: "Social Offline",
        description: "Co-working meets bar culture — laptops by day, cocktails by night.",
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop",
      },
    ],
  },
];
