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
        id: "bawarchi-biryani",
        name: "Bawarchi Biryani",
        description: "Legendary RTC Cross Roads icon serving authentic Hyderabadi dum biryani since decades. Family-style portions that define celebration in every household.",
        image: "/placeholder.svg"
      },
      {
        id: "pista-house-haleem",
        name: "Pista House Haleem",
        description: "Seasonal Ramadan masterpiece that draws crowds from across the city. Slow-cooked wheat and meat melt into divine, aromatic richness.",
        image: "/placeholder.svg"
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
        id: "charminar",
        name: "Charminar",
        description: "16th-century architectural heart standing since 1591 as Hyderabad's iconic symbol. Four grand minarets guard centuries of Deccani heritage and bustling bazaars.",
        image: "/placeholder.svg"
      },
      {
        id: "golconda-fort",
        name: "Golconda Fort",
        description: "Majestic hilltop citadel echoing tales of legendary diamond treasures. Acoustic marvels and panoramic sunset views reward every visitor.",
        image: "/placeholder.svg"
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
        id: "birla-mandir",
        name: "Birla Mandir",
        description: "White marble temple perched atop Naubath Pahad hill offering serene spirituality. Breathtaking city views meet divine architecture at dusk.",
        image: "/placeholder.svg"
      },
      {
        id: "hussain-sagar",
        name: "Hussain Sagar",
        description: "Large lake with the iconic 18-meter tall Buddha statue at its center. Sunset boat rides and Tank Bund promenades define Hyderabad's heart.",
        image: "/placeholder.svg"
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
        id: "t-hub",
        name: "T-Hub",
        description: "World's largest innovation campus nurturing India's brightest startup dreams. Where unicorn aspirations transform into billion-dollar realities.",
        image: "/placeholder.svg"
      },
      {
        id: "cyber-towers",
        name: "Cyber Towers",
        description: "HITEC City landmark that pioneered Hyderabad's transformation into a global tech hub. Twin towers symbolizing the city's digital revolution since 1998.",
        image: "/placeholder.svg"
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
        id: "ramoji-film-city",
        name: "Ramoji Film City",
        description: "World's largest film studio complex sprawling across 2000 acres of cinematic magic. Theme parks, live shows, and Bollywood dreams come alive here.",
        image: "/placeholder.svg"
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
        id: "jubilee-hills",
        name: "Jubilee Hills",
        description: "High-street luxury destination featuring upscale cafes and premium boutiques. Where Hyderabad's elite shop, dine, and celebrate the finer things.",
        image: "/placeholder.svg"
      }
    ]
  }
];
