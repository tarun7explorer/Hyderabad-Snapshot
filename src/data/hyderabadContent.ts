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
    image: foodBiryani, // Cover photo remains unchanged
    items: [
      {
        id: "biryani-paradise",
        name: "Paradise Biryani",
        description: "The crown jewel of Hyderabadi dum biryani — fragrant basmati since 1953.",
        image: "https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?q=80&w=2000&auto=format&fit=crop",
      },
      {
        id: "biryani-bawarchi",
        name: "Bawarchi Biryani",
        description: "RTC Cross Roads legend serving family-style portions.",
        image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=2000&auto=format&fit=crop",
      },
      {
        id: "haleem",
        name: "Pista House Haleem",
        description: "Ramadan's most awaited delicacy — slow-cooked wheat and meat.",
        image: "https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?q=80&w=2000&auto=format&fit=crop",
      },
      {
        id: "irani-chai",
        name: "Irani Chai at Nimrah",
        description: "Charminar's iconic café where milky chai meets Osmania biscuits.",
        image: "https://images.unsplash.com/photo-1594631252845-29fc4586d5d7?q=80&w=2000&auto=format&fit=crop",
      },
      {
        id: "qubani",
        name: "Qubani Ka Meetha",
        description: "Royal apricot dessert crowned with malai.",
        image: "https://images.unsplash.com/photo-1589114131558-86d482260657?q=80&w=2000&auto=format&fit=crop",
      },
      {
        id: "nihari",
        name: "Nihari at Shadab",
        description: "Dawn's slow-cooked stew with rich spices.",
        image: "https://images.unsplash.com/photo-1545231027-63b6f0a05bce?q=80&w=2000&auto=format&fit=crop",
      },
      {
        id: "lukhmi",
        name: "Lukhmi",
        description: "Crispy minced meat in flaky pastry perfection.",
        image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce7d?q=80&w=2000&auto=format&fit=crop",
      },
      {
        id: "double-roti",
        name: "Double Ka Meetha",
        description: "Bread pudding with saffron and dry fruits.",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=2000&auto=format&fit=crop",
      },
      {
        id: "mirchi-bajji",
        name: "Mirchi Bajji",
        description: "Stuffed chillies deep-fried into crunchy ecstasy.",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c175f0?q=80&w=2000&auto=format&fit=crop",
      },
      {
        id: "boti-kebab",
        name: "Boti Kebab",
        description: "Charcoal-kissed tender meat cubes.",
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=2000&auto=format&fit=crop",
      },
      {
        id: "pathar-gosht",
        name: "Pathar Ka Gosht",
        description: "Stone-cooked lamb sizzles with ancient technique.",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2000&auto=format&fit=crop",
      },
      {
        id: "khubani-lassi",
        name: "Khubani Lassi",
        description: "Apricot-infused yogurt drink.",
        image: "https://images.unsplash.com/photo-1571006682858-a09e0eda4f69?q=80&w=2000&auto=format&fit=crop",
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
        description: "Colorful processions honoring the mother goddess.",
        image: "https://images.unsplash.com/photo-1621255198084-25925e510825?q=80&w=2000&auto=format&fit=crop",
      },
      {
        id: "bathukamma",
        name: "Bathukamma",
        description: "Telangana's floral festival celebrations.",
        image: "https://images.unsplash.com/photo-1605377349955-7634861b072d?q=80&w=2000&auto=format&fit=crop",
      },
      {
        id: "pearls",
        name: "Hyderabadi Pearls",
        description: "Charminar's world-famous pearl markets.",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2000&auto=format&fit=crop",
      },
      {
        id: "bidri",
        name: "Bidriware Art",
        description: "Silver inlay on blackened alloy metalcraft.",
        image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=2000&auto=format&fit=crop",
      },
      {
        id: "pochampally",
        name: "Pochampally Ikat",
        description: "UNESCO heritage weaving in silk threads.",
        image: "https://images.unsplash.com/photo-1590736962388-340643956624?q=80&w=2000&auto=format&fit=crop",
      },
      {
        id: "laad-bazaar",
        name: "Laad Bazaar Bangles",
        description: "Bangles sparkle in the shadow of Charminar.",
        image: "https://images.unsplash.com/photo-1582236528929-23c213476901?q=80&w=2000&auto=format&fit=crop",
      },
      {
        id: "telugu-cinema",
        name: "Telugu Film Industry",
        description: "Tollywood's magic factory magic.",
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2000&auto=format&fit=crop",
      },
      {
        id: "numaish",
        name: "Numaish Exhibition",
        description: "Winter's grand bazaar under sprawling fairgrounds.",
        image: "https://images.unsplash.com/photo-1472653431158-6364773b2a56?q=80&w=2000&auto=format&fit=crop",
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
        description: "The iconic monument standing since 1591.",
        image: "https://images.unsplash.com/photo-1581390114539-0b190dec7318?q=80&w=2000&auto=format&fit=crop",
      },
      {
        id: "golconda",
        name: "Golconda Fort",
        description: "Legendary diamond treasury and acoustic marvel.",
        image: "https://images.unsplash.com/photo-1616422285623-13ff0167c95c?q=80&w=2000&auto=format&fit=crop",
      },
      {
        id: "qutb-shahi",
        name: "Qutb Shahi Tombs",
        description: "Magnificent Indo-Persian domed mausoleums.",
        image: "https://images.unsplash.com/photo-1582042738275-d142f9a25997?q=80&w=2000&auto=format&fit=crop",
      },
      {
        id: "chowmahalla",
        name: "Chowmahalla Palace",
        description: "Opulent durbar halls of the Nizam.",
        image: "https://images.unsplash.com/photo-1644049871754-0714777a83d3?q=80&w=2000&auto=format&fit=crop",
      },
      {
        id: "salar-jung",
        name: "Salar Jung Museum",
        description: "World's largest one-man art collection.",
        image: "https://images.unsplash.com/photo-1634507119053-bc2a16d510c4?q=80&w=2000&auto=format&fit=crop",
      },
      {
        id: "hussain-sagar",
        name: "Hussain Sagar Lake",
        description: "Heart-shaped lake with giant Buddha statue.",
        image: "https://images.unsplash.com/photo-1627848692735-d286d9a0d844?q=80&w=2000&auto=format&fit=crop",
      },
      {
        id: "birla-mandir",
        name: "Birla Mandir",
        description: "Hilltop white marble temple.",
        image: "https://images.unsplash.com/photo-1596700812743-3058a74e532b?q=80&w=2000&auto=format&fit=crop",
      },
      {
        id: "falaknuma",
        name: "Taj Falaknuma Palace",
        description: "Italian marble palace hosting royal stays.",
        image: "https://images.unsplash.com/photo-1623945227418-2d330b607662?q=80&w=2000&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "it-hub",
    title: "IT Hub",
    tagline: "The glass skyline of HITEC City.",
    icon: "💻",
    accentColor: "hsl(195, 100%, 55%)",
    glowColor: "hsl(195, 100%, 55%)",
    image: hitecCity,
    items: [
      {
        id: "hitec-city",
        name: "HITEC City",
        description: "Gleaming towers housing global tech giants.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
      },
      {
        id: "t-hub",
        name: "T-Hub",
        description: "India's largest startup incubator.",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop",
      },
      {
        id: "amazon-campus",
        name: "Amazon Hyderabad",
        description: "World's largest Amazon campus.",
        image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2000&auto=format&fit=crop",
      },
      {
        id: "skyview",
        name: "Skyview",
        description: "Futuristic towers touching the Deccan clouds.",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "adventure",
    title: "Adventure",
    tagline: "Bouldering and cinematic wonders.",
    icon: "🏔️",
    accentColor: "hsl(120, 60%, 45%)",
    glowColor: "hsl(120, 60%, 45%)",
    image: adventureRocks,
    items: [
      {
        id: "khajaguda",
        name: "Khajaguda Hills",
        description: "Boulder-strewn trails and trekking.",
        image: "https://images.unsplash.com/photo-1514330605995-1f99c808f921?q=80&w=2000&auto=format&fit=crop",
      },
      {
        id: "ananthagiri",
        name: "Ananthagiri Hills",
        description: "Misty weekend nature escape.",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop",
      },
      {
        id: "kbr-park",
        name: "KBR National Park",
        description: "Urban jungle sanctuary for morning jogs.",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "malls-cafes",
    title: "Malls & Cafes",
    tagline: "High-street luxury.",
    icon: "☕",
    accentColor: "hsl(330, 70%, 55%)",
    glowColor: "hsl(330, 70%, 55%)",
    image: cafeJubilee,
    items: [
      {
        id: "sarath-city",
        name: "Sarath City Capital",
        description: "Endless brands under one colossal roof.",
        image: "https://images.unsplash.com/photo-1582037928769-181f2644ecb7?q=80&w=2000&auto=format&fit=crop",
      },
      {
        id: "ikea",
        name: "IKEA Hyderabad",
        description: "Swedish home experience and meatballs.",
        image: "https://images.unsplash.com/photo-1555181126-cf46a03827c0?q=80&w=2000&auto=format&fit=crop",
      },
      {
        id: "roastery-coffee",
        name: "Roastery Coffee House",
        description: "Third-wave coffee culture in industrial spaces.",
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2000&auto=format&fit=crop",
      },
    ],
  },
];
