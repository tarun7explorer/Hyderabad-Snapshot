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
        image: "https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "biryani-bawarchi",
        name: "Bawarchi Biryani",
        description: "RTC Cross Roads icon serving the city's most beloved spice blend.",
        image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "haleem",
        name: "Pista House Haleem",
        description: "A seasonal Ramadan masterpiece of slow-cooked meat and wheat.",
        image: "https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "irani-chai",
        name: "Irani Chai at Nimrah",
        description: "Charminar's soul served in a cup with Osmania biscuits.",
        image: "https://images.unsplash.com/photo-1594631252845-29fc4586d5d7?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "qubani",
        name: "Qubani Ka Meetha",
        description: "Royal stewed apricot dessert crowned with thick cream.",
        image: "https://images.unsplash.com/photo-1589114131558-86d482260657?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "nihari",
        name: "Nihari at Shadab",
        description: "A rich, slow-cooked dawn stew for the true early risers.",
        image: "https://images.unsplash.com/photo-1545231027-63b6f0a05bce?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "lukhmi",
        name: "Lukhmi",
        description: "The aristocratic Deccani version of the savory meat samosa.",
        image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce7d?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "double-roti",
        name: "Double Ka Meetha",
        description: "Saffron-infused fried bread pudding with dry fruits.",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "mirchi-bajji",
        name: "Mirchi Bajji",
        description: "Street-side thunder — stuffed chillies fried to golden perfection.",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c175f0?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "boti-kebab",
        name: "Boti Kebab",
        description: "Tender, charcoal-grilled meat cubes marinated in secret spices.",
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "pathar-gosht",
        name: "Pathar Ka Gosht",
        description: "Mutton seared on hot granite stones for a smoky, tender finish.",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "khubani-lassi",
        name: "Khubani Lassi",
        description: "Creamy yogurt blended with sweet, sun-dried apricots.",
        image: "https://images.unsplash.com/photo-1571006682858-a09e0eda4f69?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "sheer-khurma",
        name: "Sheer Khurma",
        description: "Vermicelli pudding with dates and nuts, the heart of Eid.",
        image: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "mandi",
        name: "Barkas Mandi",
        description: "Traditional Arabian meat and rice, a Gachibowli favorite.",
        image: "https://images.unsplash.com/photo-1541518763531-d3a3b3d79bb3?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "osmania-biscuit",
        name: "Osmania Biscuits",
        description: "The iconic salt-and-sweet tea companion of Hyderabad.",
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=800",
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
        description: "Vibrant processions honoring the Goddess Mahakali.",
        image: "https://images.unsplash.com/photo-1621255198084-25925e510825?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "bathukamma",
        name: "Bathukamma",
        description: "Telangana's grand floral festival celebrating nature.",
        image: "https://images.unsplash.com/photo-1605377349955-7634861b072d?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "qawwali",
        name: "Deccani Qawwali",
        description: "Soul-stirring Sufi melodies at the city's ancient dargahs.",
        image: "https://images.unsplash.com/photo-1514525253361-bee8718a7c73?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "kuchipudi",
        name: "Kuchipudi Dance",
        description: "Classical Telugu dance blending rhythm and storytelling.",
        image: "https://images.unsplash.com/photo-1583256942501-c889f5c4048e?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "pearls",
        name: "Hyderabadi Pearls",
        description: "Exquisite craftsmanship from the world's pearl capital.",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "bidri",
        name: "Bidriware Art",
        description: "Unique silver-on-black metalwork from the Deccan.",
        image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "pochampally",
        name: "Pochampally Ikat",
        description: "UNESCO-recognized handloom weaves with geometric soul.",
        image: "https://images.unsplash.com/photo-1590736962388-340643956624?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "laad-bazaar",
        name: "Laad Bazaar",
        description: "Centuries-old bangles market sparkling near Charminar.",
        image: "https://images.unsplash.com/photo-1582236528929-23c213476901?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "tollywood",
        name: "Telugu Cinema",
        description: "The high-octane creative heartbeat of Indian film.",
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "numaish",
        name: "Numaish Exhibition",
        description: "The annual winter carnival of commerce and joy.",
        image: "https://images.unsplash.com/photo-1472653431158-6364773b2a56?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "tehzeeb",
        name: "Nizami Tehzeeb",
        description: "The legendary etiquette and hospitality of Hyderabad.",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "kalamkari",
        name: "Kalamkari Art",
        description: "Hand-painted organic textiles depicting ancient epics.",
        image: "https://images.unsplash.com/photo-1589187151003-0dd55769239b?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "gadwal",
        name: "Gadwal Sarees",
        description: "Heritage silk weaves known for their contrasting borders.",
        image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&q=80&w=800",
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
        description: "The iconic 1591 monument standing at the city's heart.",
        image: "https://images.unsplash.com/photo-1581390114539-0b190dec7318?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "golconda",
        name: "Golconda Fort",
        description: "A diamond-rich citadel with legendary acoustic marvels.",
        image: "https://images.unsplash.com/photo-1616422285623-13ff0167c95c?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "qutb-shahi",
        name: "Qutb Shahi Tombs",
        description: "Magnificent domed mausoleums of the seven sultans.",
        image: "https://images.unsplash.com/photo-1582042738275-d142f9a25997?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "chowmahalla",
        name: "Chowmahalla Palace",
        description: "The opulent former official seat of the Nizams.",
        image: "https://images.unsplash.com/photo-1644049871754-0714777a83d3?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "salar-jung",
        name: "Salar Jung Museum",
        description: "One of the world's largest private art collections.",
        image: "https://images.unsplash.com/photo-1634507119053-bc2a16d510c4?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "hussain-sagar",
        name: "Hussain Sagar",
        description: "A heart-shaped lake featuring the giant Buddha statue.",
        image: "https://images.unsplash.com/photo-1627848692735-d286d9a0d844?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "birla-mandir",
        name: "Birla Mandir",
        description: "Hilltop marble temple with panoramic sunset views.",
        image: "https://images.unsplash.com/photo-1596700812743-3058a74e532b?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "falaknuma",
        name: "Falaknuma Palace",
        description: "The 'Mirror of the Sky' palace now hosting royal luxury.",
        image: "https://images.unsplash.com/photo-1623945227418-2d330b607662?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "makkah-masjid",
        name: "Makkah Masjid",
        description: "One of India's oldest and grandest Islamic structures.",
        image: "https://images.unsplash.com/photo-1593950294711-209e51b660c1?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "taramati",
        name: "Taramati Baradari",
        description: "An ancient hilltop pavilion for the city's royal musicians.",
        image: "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "paigah",
        name: "Paigah Tombs",
        description: "Unique marble necropolis with intricate stucco work.",
        image: "https://images.unsplash.com/photo-1598460610531-3e536130b064?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "zoo",
        name: "Nehru Zoological Park",
        description: "A sprawling 380-acre wildlife sanctuary and safari.",
        image: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "ntr-gardens",
        name: "NTR Gardens",
        description: "A lush urban getaway near the Hussain Sagar lake.",
        image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "lumbini",
        name: "Lumbini Park",
        description: "The city's favorite laser show and boat ride hub.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "gandipet",
        name: "Gandipet Lake",
        description: "The historic Osman Sagar reservoir at the city's edge.",
        image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800",
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
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "t-hub",
        name: "T-Hub 2.0",
        description: "India's largest and boldest startup incubator ecosystem.",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "amazon",
        name: "Amazon Campus",
        description: "The retail giant's massive, world-class Gachibowli hub.",
        image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "skyview",
        name: "The Skyview",
        description: "Futuristic glass towers redefining the modern tech office.",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "google",
        name: "Google Office",
        description: "Expanding the digital frontier from the heart of HITEC City.",
        image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "microsoft",
        name: "Microsoft IDC",
        description: "Innovation engine for cloud and AI technology.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "knowledge-city",
        name: "Knowledge City",
        description: "A collaborative hub for global IT and pharma giants.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "mindspace",
        name: "Mindspace IT Park",
        description: "A premier integrated business district for tech leaders.",
        image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "wework",
        name: "WeWork Galaxy",
        description: "The dynamic center of the city's co-working culture.",
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "financial-dist",
        name: "Financial District",
        description: "The high-rise powerhouse of banking and global tech.",
        image: "https://images.unsplash.com/photo-1449156001935-d28bc1dd282a?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "t-works",
        name: "T-Works",
        description: "India's largest prototyping center for new-age makers.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "dlf",
        name: "DLF Cyber City",
        description: "A major commercial hub for enterprise software giants.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "hcl",
        name: "HCL Campus",
        description: "Next-gen engineering services delivery center.",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800",
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
        description: "Bouldering and sunrise trekking for thrill-seekers.",
        image: "https://images.unsplash.com/photo-1514330605995-1f99c808f921?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "ramoji",
        name: "Ramoji Film City",
        description: "World's largest film studio complex and theme park.",
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "ananthagiri",
        name: "Ananthagiri Hills",
        description: "A misty weekend escape into forest trails.",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "kbr",
        name: "KBR National Park",
        description: "An urban jungle sanctuary for joggers.",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "durgam",
        name: "Durgam Cheruvu",
        description: "Kayaking near the iconic cable bridge.",
        image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "bhongir",
        name: "Bhongir Fort",
        description: "A massive monolithic climb for the ultimate panorama.",
        image: "https://images.unsplash.com/photo-1544911845-1f34a3eb46b1?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "mrugavani",
        name: "Mrugavani Park",
        description: "Wild Deccan landscapes and spotted deer safaris.",
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "paintball",
        name: "Paintball Adventures",
        description: "High-octane paintball battles and combat training.",
        image: "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "camping",
        name: "Gandipet Camping",
        description: "Lakeside camping under the Deccani night sky.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "snowworld",
        name: "Snow World",
        description: "India's first snow theme park in a tropical city.",
        image: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "wonderla",
        name: "Wonderla",
        description: "Adrenaline-fueled rollercoasters and water slides.",
        image: "https://images.unsplash.com/photo-1513889959010-65a4ec8aa04a?auto=format&fit=crop&q=80&w=800",
      },
    ],
  },
  {
    id: "malls-cafes",
    title: "Malls & Cafes",
    tagline: "High-street luxury in Jubilee Hills.",
    icon: "☕",
    accentColor: "hsl(330, 70%, 55%)",
    glowColor: "hsl(330, 70%, 55%)",
    image: cafeJubilee,
    items: [
      {
        id: "sarath-city",
        name: "Sarath City Mall",
        description: "The massive landmark of modern shopping and fun.",
        image: "https://images.unsplash.com/photo-1582037928769-181f2644ecb7?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "ikea",
        name: "IKEA Hyderabad",
        description: "The flagship Swedish experience for home and food.",
        image: "https://images.unsplash.com/photo-1555181126-cf46a03827c0?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "roastery",
        name: "Roastery Coffee",
        description: "The city's favorite third-wave coffee house.",
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "inorbit",
        name: "Inorbit Mall",
        description: "Luxury retail meeting the stunning lake view.",
        image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "concu",
        name: "Conçu Patisserie",
        description: "Exquisite French pastries in Jubilee Hills.",
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "autumnleaf",
        name: "Autumn Leaf Cafe",
        description: "A hidden garden sanctuary for comfort and calm.",
        image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "olive",
        name: "Olive Bistro",
        description: "Sunset dining with white-washed Mediterranean soul.",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "hardrock",
        name: "Hard Rock Cafe",
        description: "The legendary home of rock and global food.",
        image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "farzi",
        name: "Farzi Cafe",
        description: "A fusion feast where science meets the kitchen.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "social",
        name: "Mindspace Social",
        description: "The workspace by day and high-energy bar by night.",
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "gvk",
        name: "GVK One",
        description: "Luxury retail in the high-street heart of Banjara Hills.",
        image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "levas",
        name: "Lé Vantage",
        description: "European-style cafe vibes with stone architecture.",
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800",
      },
    ],
  },
];
