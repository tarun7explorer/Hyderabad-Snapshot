import foodBiryani from "@/assets/food-biryani.jpg";
import charminarNight from "@/assets/charminar-night.jpg";
import hitecCity from "@/assets/hitec-city.jpg";
import cultureBonalu from "@/assets/culture-bonalu.jpg";
import golcondaSunset from "@/assets/golconda-sunset.jpg";
import adventureRocks from "@/assets/adventure-rocks.jpg";
import cafeJubilee from "@/assets/cafe-jubilee.jpg";

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
    image: foodBiryani,
    items: [
      {
        id: "biryani-paradise",
        name: "Paradise Biryani",
        description: "The legendary crown jewel of Hyderabadi dum biryani since 1953.",
        image: "https://ibb.co/zTgt0RfH",
      },
      {
        id: "biryani-bawarchi",
        name: "Bawarchi Biryani",
        description: "RTC Cross Roads icon serving the city's most beloved spice blend.",
        image: "https://ibb.co/Ng63q8x0",
      },
      {
        id: "haleem",
        name: "Pista House Haleem",
        description: "A seasonal Ramadan masterpiece of slow-cooked meat and wheat.",
        image: "https://ibb.co/Z6c6J35n",
      },
      {
        id: "irani-chai",
        name: "Irani Chai at Nimrah",
        description: "Charminar's soul served in a glass cup, paired with Osmania biscuits.",
        image: "https://images.unsplash.com/photo-1619117081917-05303257914e?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "qubani",
        name: "Qubani Ka Meetha",
        description: "Royal stewed apricot dessert crowned with thick malai or ice cream.",
        image: "https://ibb.co/mV81hf48",
      },
      {
        id: "nihari",
        name: "Nihari at Shadab",
        description: "A rich, slow-cooked dawn stew of meat and spices.",
        image: "https://ibb.co/YSws36j",
      },
      {
        id: "lukhmi",
        name: "Lukhmi",
        description: "The aristocratic Deccani version of the savory meat samosa.",
        image: "https://ibb.co/0jfSrh7M",
      },
      {
        id: "double-roti",
        name: "Double Ka Meetha",
        description: "Rich bread pudding soaked in milk, saffron, and garnished with dry fruits.",
        image: "https://ibb.co/QvZgZRX1",
      },
      {
        id: "mirchi-bajji",
        name: "Mirchi Bajji",
        description: "Street-side thunder — large stuffed chillies fried to golden perfection.",
        image: "https://ibb.co/dsMV5tBN",
      },
      {
        id: "boti-kebab",
        name: "Boti Kebab",
        description: "Tender, charcoal-grilled meat cubes marinated in secret Deccan spices.",
        image: "https://ibb.co/nsYq58yb",
      },
      {
        id: "pathar-gosht",
        name: "Pathar Ka Gosh",
        description: "Mutton seared on hot granite stones for a unique smoky, tender finish.",
        image: "https://ibb.co/QFY7fmVh",
      },
      {
        id: "khubani-lassi",
        name: "Khubani Lassi",
        description: "Thick, creamy yogurt blended with sweet, sun-dried apricots.",
        image: "https://ibb.co/RGQxd66Z",
      },
      {
        id: "mandi",
        name: "Barkas Mandi",
        description: "Traditional Arabian meat and rice dish served on a large platter.",
        image: "https://ibb.co/rRhNM3b8",
      },
      {
        id: "osmania-biscuit",
        name: "Osmania Biscuits",
        description: "The iconic salt-and-sweet tea companion, baked to a golden crisp.",
        image: "https://ibb.co/qMWwf4L5",
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
    image: cultureBonalu,
    items: [
      {
        id: "bonalu",
        name: "Bonalu Festival",
        description: "Vibrant processions where women carry decorated pots honoring Goddess Mahakali.",
        image: "https://images.unsplash.com/photo-1621255198084-25925e510825?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "bathukamma",
        name: "Bathukamma",
        description: "Telangana's grand floral festival where women dance around flower stacks.",
        image: "https://images.unsplash.com/photo-1605377349955-7634861b072d?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "qawwali",
        name: "Deccani Qawwali",
        description: "Soul-stirring Sufi devotional music performed at ancient dargahs.",
        image: "https://images.unsplash.com/photo-1514525253361-bee8718a7c73?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "kuchipudi",
        name: "Kuchipudi Dance",
        description: "Classical Telugu dance form characterized by graceful movements.",
        image: "https://images.unsplash.com/photo-1583256942501-c889f5c4048e?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "pearls",
        name: "Hyderabadi Pearls",
        description: "Exquisite craftsmanship from the 'City of Pearls'.",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "bidri",
        name: "Bidriware Art",
        description: "Unique metalwork featuring intricate silver inlay on blackened alloy.",
        image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "pochampally",
        name: "Pochampally Ikat",
        description: "UNESCO-recognized handloom weaves known for geometric patterns.",
        image: "https://images.unsplash.com/photo-1590736962388-340643956624?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "laad-bazaar",
        name: "Laad Bazaar",
        description: "A historic market renowned for its glittering lacquer bangles.",
        image: "https://images.unsplash.com/photo-1582236528929-23c213476901?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "tollywood",
        name: "Telugu Cinema",
        description: "The massive film production center, a heartbeat of Indian cinema.",
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "numaish",
        name: "Numaish Exhibition",
        description: "The annual winter carnival of commerce and joy.",
        image: "https://images.unsplash.com/photo-1472653431158-6364773b2a56?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "tehzeeb",
        name: "Nizami Tehzeeb",
        description: "The legendary etiquette and refined hospitality of Hyderabad.",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "kalamkari",
        name: "Kalamkari Art",
        description: "Traditional hand-painted organic textiles depicting ancient epics.",
        image: "https://images.unsplash.com/photo-1589187151003-0dd55769239b?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "gadwal",
        name: "Gadwal Sarees",
        description: "Heritage silk weaves known for their contrasting borders.",
        image: "https://images.unsplash.com/photo-1610189072888-008c4b523005?auto=format&fit=crop&w=800&q=80",
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
    image: charminarNight,
    items: [
      {
        id: "charminar",
        name: "Charminar",
        description: "The iconic four-minaret mosque built in 1591.",
        image: "https://images.unsplash.com/photo-1581390114539-0b190dec7318?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "golconda",
        name: "Golconda Fort",
        description: "A majestic citadel known for acoustic engineering.",
        image: "https://images.unsplash.com/photo-1616422285623-13ff0167c95c?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "qutb-shahi",
        name: "Qutb Shahi Tombs",
        description: "The grand, domed mausoleums of the seven Qutb Shahi rulers.",
        image: "https://images.unsplash.com/photo-1582042738275-d142f9a25997?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "chowmahalla",
        name: "Chowmahalla Palace",
        description: "The opulent former official seat of the Nizams.",
        image: "https://images.unsplash.com/photo-1644049871754-0714777a83d3?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "salar-jung",
        name: "Salar Jung Museum",
        description: "One of the world's largest private art collections.",
        image: "https://images.unsplash.com/photo-1634507119053-bc2a16d510c4?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "hussain-sagar",
        name: "Hussain Sagar Lake",
        description: "A massive heart-shaped lake connecting the twin cities.",
        image: "https://images.unsplash.com/photo-1627848692735-d286d9a0d844?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "birla-mandir",
        name: "Birla Mandir",
        description: "A stunning white marble temple on a hill.",
        image: "https://images.unsplash.com/photo-1596700812743-3058a74e532b?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "falaknuma",
        name: "Taj Falaknuma Palace",
        description: "The 'Mirror of the Sky', a stunning Italian marble palace.",
        image: "https://images.unsplash.com/photo-1623945227418-2d330b607662?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "makkah-masjid",
        name: "Makkah Masjid",
        description: "One of India's oldest and largest mosques.",
        image: "https://images.unsplash.com/photo-1593950294711-209e51b660c1?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "taramati",
        name: "Taramati Baradari",
        description: "An historic pavilion built on a hilltop.",
        image: "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "paigah",
        name: "Paigah Tombs",
        description: "The necropolis noted for intricate stucco work.",
        image: "https://images.unsplash.com/photo-1598460610531-3e536130b064?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "zoo",
        name: "Nehru Zoological Park",
        description: "A massive 380-acre zoo with open enclosures.",
        image: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "ntr-gardens",
        name: "NTR Gardens",
        description: "A popular urban park near Hussain Sagar lake.",
        image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "lumbini",
        name: "Lumbini Park",
        description: "An urban park next to the lake, famous for its laser shows.",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "gandipet",
        name: "Osman Sagar (Gandipet)",
        description: "A historic reservoir and popular picnic spot.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
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
    image: hitecCity,
    items: [
      {
        id: "hitec-city",
        name: "HITEC City",
        description: "The bustling core of Hyderabad's technology revolution.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "t-hub",
        name: "T-Hub 2.0",
        description: "The world's largest innovation campus and startup incubator.",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "amazon",
        name: "Amazon Hyderabad Campus",
        description: "Amazon's largest campus building globally, located in Gachibowli.",
        image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "skyview",
        name: "The Skyview",
        description: "Futuristic glass towers redefining the modern tech office.",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "google",
        name: "Google Office",
        description: "One of Google's largest offices outside the US.",
        image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "microsoft",
        name: "Microsoft IDC",
        description: "Microsoft's India Development Center campus.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "knowledge-city",
        name: "Knowledge City",
        description: "A major hub for life sciences and technology companies.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "raheja",
        name: "Mindspace IT Park",
        description: "A large, integrated business park hosting tech companies.",
        image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "wework",
        name: "WeWork Galaxy",
        description: "A prominent co-working space in the Financial District.",
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "financial-dist",
        name: "Financial District",
        description: "The high-rise powerhouse of banking and global tech.",
        image: "https://images.unsplash.com/photo-1449156001935-d28bc1dd282a?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "t-works",
        name: "T-Works",
        description: "India's largest prototyping center for makers.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "dlf",
        name: "DLF Cyber City",
        description: "An expansive IT SEZ housing major tech firms.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "hcl",
        name: "HCL Campus",
        description: "Next-gen engineering services delivery center.",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
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
    image: adventureRocks,
    items: [
      {
        id: "khajaguda",
        name: "Khajaguda Hills",
        description: "Famous for unique rock formations and bouldering.",
        image: "https://images.unsplash.com/photo-1514330605995-1f99c808f921?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "ramoji",
        name: "Ramoji Film City",
        description: "The world's largest integrated film city complex.",
        image: "https://images.unsplash.com/photo-1599940824399-b879872666b5?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "ananthagiri",
        name: "Ananthagiri Hills",
        description: "A misty weekend escape into forest trails.",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "kbr",
        name: "KBR National Park",
        description: "An urban jungle sanctuary for joggers.",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "durgam",
        name: "Durgam Cheruvu",
        description: "Kayaking and boating on the 'Secret Lake'.",
        image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "bhongir",
        name: "Bhongir Fort Trek",
        description: "A challenging trek up a massive single monolithic rock.",
        image: "https://images.unsplash.com/photo-1544911845-1f34a3eb46b1?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "mrugavani",
        name: "Mrugavani National Park",
        description: "A wildlife sanctuary offering safaris.",
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "paintball",
        name: "Paintball Arenas",
        description: "High-energy tactical paintball games.",
        image: "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "camping",
        name: "Lakeside Camping",
        description: "Organized camping experiences near reservoirs.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "snowworld",
        name: "Snow World",
        description: "Indoor theme park with artificial snow.",
        image: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "wonderla",
        name: "Wonderla Amusement Park",
        description: "Amusement park with high-thrill roller coasters.",
        image: "https://images.unsplash.com/photo-1513889959010-65a4ec8aa04a?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "safari",
        name: "Lion Safari (Zoo)",
        description: "A dedicated safari zone within the zoo.",
        image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800&q=80",
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
    image: cafeJubilee,
    items: [
      {
        id: "sarath-city",
        name: "Sarath City Capital Mall",
        description: "One of the largest malls in India.",
        image: "https://images.unsplash.com/photo-1582037928769-181f2644ecb7?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "ikea",
        name: "IKEA Hyderabad",
        description: "Swedish furniture giant, famous for meatballs.",
        image: "https://images.unsplash.com/photo-1555181126-cf46a03827c0?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "roastery",
        name: "Roastery Coffee House",
        description: "Artisan coffee roastery in a bungalow.",
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "inorbit",
        name: "Inorbit Mall",
        description: "Premium mall with Durgam Cheruvu views.",
        image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "concu",
        name: "Conçu Patisserie",
        description: "Elegant patisserie in Jubilee Hills.",
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "autumnleaf",
        name: "Autumn Leaf Cafe",
        description: "Charming cafe with vintage decor.",
        image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "olive",
        name: "Olive Bistro",
        description: "Mediterranean-themed restaurant overlooking the lake.",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "hardrock",
        name: "Hard Rock Cafe",
        description: "Rock 'n' roll memorabilia and burgers.",
        image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "farzi",
        name: "Farzi Cafe",
        description: "Modern Indian bistro with unique presentations.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "social",
        name: "Mindspace Social",
        description: "Workspace-cum-bar popular with tech crowd.",
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "gvk",
        name: "GVK One Mall",
        description: "Luxury mall in Banjara Hills.",
        image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "levas",
        name: "Lé Vantage Café Bar",
        description: "European-styled cafe with stone facade.",
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
];
