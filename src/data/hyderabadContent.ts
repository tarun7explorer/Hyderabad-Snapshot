export interface ContentItem {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Section {
  id: string;
  title: string;
  icon: string;
  accentColor: string;
  items: ContentItem[];
}

export const sections: Section[] = [
  {
    id: "food",
    title: "Food",
    icon: "🍛",
    accentColor: "hsl(30, 100%, 50%)",
    items: [
      {
        id: "biryani",
        name: "Iconic Hyderabadi Biryani",
        description: "Paradise & Bawarchi serve the legendary dum biryani — fragrant rice layered with succulent meat, slow-cooked to perfection.",
        image: "/placeholder.svg"
      },
      {
        id: "irani-chai",
        name: "Irani Chai & Osmania Biscuits",
        description: "A century-old tradition — milky sweet chai paired with melt-in-mouth biscuits at heritage Irani cafés.",
        image: "/placeholder.svg"
      }
    ]
  },
  {
    id: "culture",
    title: "Culture",
    icon: "🎭",
    accentColor: "hsl(280, 70%, 50%)",
    items: [
      {
        id: "bonalu",
        name: "Bonalu Festival",
        description: "The city erupts in color and devotion as thousands celebrate this fierce goddess festival with traditional dance and music.",
        image: "/placeholder.svg"
      },
      {
        id: "nawabi-heritage",
        name: "Nawabi-Telugu Fusion",
        description: "Where Nizami elegance meets Telugu warmth — a unique cultural tapestry woven over four centuries of shared history.",
        image: "/placeholder.svg"
      }
    ]
  },
  {
    id: "famous-places",
    title: "Famous Places",
    icon: "🕌",
    accentColor: "hsl(45, 90%, 45%)",
    items: [
      {
        id: "charminar",
        name: "Charminar",
        description: "The iconic four-minaret monument stands tall since 1591 — Hyderabad's beating heart and architectural crown jewel.",
        image: "/placeholder.svg"
      },
      {
        id: "golconda",
        name: "Golconda Fort",
        description: "Once treasury of legendary diamonds, now echoing tales of glory — experience acoustic marvels and sunset panoramas.",
        image: "/placeholder.svg"
      }
    ]
  },
  {
    id: "it-hub",
    title: "IT Hub",
    icon: "💻",
    accentColor: "hsl(195, 100%, 44%)",
    items: [
      {
        id: "hitec-city",
        name: "HITEC City",
        description: "India's silicon valley rises here — gleaming towers house global tech giants reshaping the world's digital future.",
        image: "/placeholder.svg"
      },
      {
        id: "gachibowli",
        name: "Gachibowli Tech Campus",
        description: "Where innovation never sleeps — a sprawling ecosystem of startups, MNCs, and the world's brightest minds.",
        image: "/placeholder.svg"
      }
    ]
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    icon: "🚇",
    accentColor: "hsl(175, 70%, 40%)",
    items: [
      {
        id: "metro",
        name: "Hyderabad Metro Rail",
        description: "India's second-largest metro network glides through the city — modern, efficient, and transforming urban mobility.",
        image: "/placeholder.svg"
      },
      {
        id: "orr",
        name: "Outer Ring Road",
        description: "158 kilometers of engineering excellence — this expressway connects the city's corners in record time.",
        image: "/placeholder.svg"
      }
    ]
  },
  {
    id: "adventure",
    title: "Adventure",
    icon: "🏔️",
    accentColor: "hsl(120, 60%, 40%)",
    items: [
      {
        id: "khajaguda",
        name: "Khajaguda Hills",
        description: "Boulder-strewn trails await thrill-seekers — sunrise treks reveal breathtaking views of the awakening city.",
        image: "/placeholder.svg"
      },
      {
        id: "ramoji",
        name: "Ramoji Film City",
        description: "World's largest film studio complex — where Bollywood magic happens across 2000 acres of cinematic wonder.",
        image: "/placeholder.svg"
      }
    ]
  },
  {
    id: "malls-cafes",
    title: "Malls & Cafes",
    icon: "☕",
    accentColor: "hsl(330, 70%, 50%)",
    items: [
      {
        id: "inorbit",
        name: "Inorbit Mall",
        description: "Luxury retail meets entertainment — flagship brands, gourmet dining, and weekend vibes under one iconic roof.",
        image: "/placeholder.svg"
      },
      {
        id: "jubilee-hills",
        name: "Jubilee Hills Café Culture",
        description: "Artisanal brews and Instagram-worthy corners — the city's creative souls gather in these trendy hideouts.",
        image: "/placeholder.svg"
      }
    ]
  }
];
