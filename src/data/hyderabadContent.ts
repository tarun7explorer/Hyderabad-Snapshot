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
        id: "biryani",
        name: "Iconic Hyderabadi Biryani",
        description: "Paradise & Bawarchi serve the legendary dum biryani — fragrant rice layered with succulent meat, slow-cooked to perfection.",
        image: foodBiryani
      },
      {
        id: "irani-chai",
        name: "Irani Chai & Osmania Biscuits",
        description: "A century-old tradition — milky sweet chai paired with melt-in-mouth biscuits at heritage Irani cafés.",
        image: foodBiryani
      }
    ]
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
        description: "The city erupts in color and devotion as thousands celebrate this fierce goddess festival with traditional dance and music.",
        image: cultureBonalu
      },
      {
        id: "nawabi-heritage",
        name: "Nawabi-Telugu Fusion",
        description: "Where Nizami elegance meets Telugu warmth — a unique cultural tapestry woven over four centuries of shared history.",
        image: cultureBonalu
      }
    ]
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
        description: "The iconic four-minaret monument stands tall since 1591 — Hyderabad's beating heart and architectural crown jewel.",
        image: charminarNight
      },
      {
        id: "golconda",
        name: "Golconda Fort",
        description: "Once treasury of legendary diamonds, now echoing tales of glory — experience acoustic marvels and sunset panoramas.",
        image: golcondaSunset
      }
    ]
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
        description: "India's silicon valley rises here — gleaming towers house global tech giants reshaping the world's digital future.",
        image: hitecCity
      },
      {
        id: "gachibowli",
        name: "Gachibowli Tech Campus",
        description: "Where innovation never sleeps — a sprawling ecosystem of startups, MNCs, and the world's brightest minds.",
        image: hitecCity
      }
    ]
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    tagline: "A city that moves at the speed of tomorrow.",
    icon: "🚇",
    accentColor: "hsl(175, 70%, 45%)",
    glowColor: "hsl(175, 70%, 45%)",
    image: hitecCity,
    items: [
      {
        id: "metro",
        name: "Hyderabad Metro Rail",
        description: "India's second-largest metro network glides through the city — modern, efficient, and transforming urban mobility.",
        image: hitecCity
      },
      {
        id: "orr",
        name: "Outer Ring Road",
        description: "158 kilometers of engineering excellence — this expressway connects the city's corners in record time.",
        image: hitecCity
      }
    ]
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
        description: "Boulder-strewn trails await thrill-seekers — sunrise treks reveal breathtaking views of the awakening city.",
        image: adventureRocks
      },
      {
        id: "ramoji",
        name: "Ramoji Film City",
        description: "World's largest film studio complex — where Bollywood magic happens across 2000 acres of cinematic wonder.",
        image: adventureRocks
      }
    ]
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
        id: "inorbit",
        name: "Inorbit Mall",
        description: "Luxury retail meets entertainment — flagship brands, gourmet dining, and weekend vibes under one iconic roof.",
        image: cafeJubilee
      },
      {
        id: "jubilee-hills",
        name: "Jubilee Hills Café Culture",
        description: "Artisanal brews and Instagram-worthy corners — the city's creative souls gather in these trendy hideouts.",
        image: cafeJubilee
      }
    ]
  }
];
