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
      { id: "biryani-paradise", name: "Paradise Biryani", description: "The crown jewel of Hyderabadi dum biryani — fragrant basmati layered with succulent meat since 1953.", image: foodBiryani },
      { id: "biryani-bawarchi", name: "Bawarchi Biryani", description: "RTC Cross Roads legend serving family-style portions that define celebration in every household.", image: foodBiryani },
      { id: "haleem", name: "Pista House Haleem", description: "Ramadan's most awaited delicacy — slow-cooked wheat and meat melt into divine richness.", image: foodBiryani },
      { id: "irani-chai", name: "Irani Chai at Nimrah", description: "Charminar's iconic café where milky chai meets century-old Osmania biscuits.", image: foodBiryani },
      { id: "qubani", name: "Qubani Ka Meetha", description: "Royal apricot dessert crowned with malai — Nizami sweetness in every spoonful.", image: foodBiryani },
      { id: "nihari", name: "Nihari at Shadab", description: "Dawn's slow-cooked stew awakens taste buds with rich spices and tender meat.", image: foodBiryani },
      { id: "lukhmi", name: "Lukhmi", description: "Crispy samosa's aristocratic cousin — minced meat in flaky pastry perfection.", image: foodBiryani },
      { id: "double-roti", name: "Double Ka Meetha", description: "Bread pudding transformed into Deccani royalty with saffron and dry fruits.", image: foodBiryani },
      { id: "mirchi-bajji", name: "Mirchi Bajji", description: "Street-side thunder — stuffed chillies deep-fried into crunchy, spicy ecstasy.", image: foodBiryani },
      { id: "boti-kebab", name: "Boti Kebab", description: "Charcoal-kissed perfection — tender meat cubes marinated in Deccani spices.", image: foodBiryani },
      { id: "pathar-gosht", name: "Pathar Ka Gosht", description: "Stone-cooked lamb sizzles at your table — ancient technique, modern marvel.", image: foodBiryani },
      { id: "khubani-lassi", name: "Khubani Lassi", description: "Apricot-infused yogurt drink — creamy indulgence meeting fruity freshness.", image: foodBiryani }
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
      { id: "bonalu", name: "Bonalu Festival", description: "The city erupts in fierce devotion — colorful processions honor the mother goddess.", image: cultureBonalu },
      { id: "bathukamma", name: "Bathukamma", description: "Telangana's floral festival — women dance around towering flower stacks in celebration.", image: cultureBonalu },
      { id: "deccan-music", name: "Deccani Qawwali", description: "Sufi mysticism echoes through dargahs — soul-stirring melodies transcend boundaries.", image: cultureBonalu },
      { id: "kuchipudi", name: "Kuchipudi Dance", description: "Classical elegance meets storytelling — ancient Telugu dance form in graceful motion.", image: cultureBonalu },
      { id: "pearls", name: "Hyderabadi Pearls", description: "Charminar's pearl markets shine — centuries of craftsmanship in luminous beauty.", image: cultureBonalu },
      { id: "bidri", name: "Bidriware Art", description: "Silver inlay on blackened alloy — Deccan's signature metalcraft gleams timelessly.", image: cultureBonalu },
      { id: "pochampally", name: "Pochampally Ikat", description: "UNESCO heritage weaving — geometric patterns bloom in silk and cotton threads.", image: cultureBonalu },
      { id: "urdu-poetry", name: "Urdu Poetry Mushairas", description: "Literary evenings where ghazals flow — Deccani Urdu's romantic heritage lives on.", image: cultureBonalu },
      { id: "nizami-etiquette", name: "Nizami Tehzeeb", description: "Legendary hospitality and refined manners — the gentle art of Hyderabadi grace.", image: cultureBonalu },
      { id: "laad-bazaar", name: "Laad Bazaar Bangles", description: "Rainbow of glass circles — bridal dreams sparkle in the shadow of Charminar.", image: cultureBonalu },
      { id: "telugu-cinema", name: "Telugu Film Industry", description: "Tollywood's magic factory — India's largest film industry by output.", image: cultureBonalu },
      { id: "numaish", name: "Numaish Exhibition", description: "Winter's grand bazaar — all of India gathers under one sprawling fairground.", image: cultureBonalu }
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
      { id: "charminar", name: "Charminar", description: "The iconic four-minaret monument stands since 1591 — Hyderabad's beating heart.", image: charminarNight },
      { id: "golconda", name: "Golconda Fort", description: "Legendary diamond treasury echoing tales of glory — acoustic marvels and sunset panoramas.", image: golcondaSunset },
      { id: "qutb-shahi", name: "Qutb Shahi Tombs", description: "Magnificent domed mausoleums — seven sultans rest in Indo-Persian grandeur.", image: golcondaSunset },
      { id: "chowmahalla", name: "Chowmahalla Palace", description: "Nizam's royal residence — opulent durbar halls and vintage car collection.", image: charminarNight },
      { id: "salar-jung", name: "Salar Jung Museum", description: "World's largest one-man collection — art treasures spanning civilizations.", image: charminarNight },
      { id: "paigah-tombs", name: "Paigah Tombs", description: "Aristocratic necropolis — intricate marble and stucco in romantic decay.", image: golcondaSunset },
      { id: "mecca-masjid", name: "Mecca Masjid", description: "One of India's largest mosques — bricks from Mecca sanctify this sacred ground.", image: charminarNight },
      { id: "hussain-sagar", name: "Hussain Sagar Lake", description: "Heart-shaped lake with Buddha statue — sunset boat rides and Tank Bund strolls.", image: charminarNight },
      { id: "birla-mandir", name: "Birla Mandir", description: "Hilltop white marble temple — city views meet spiritual serenity at dusk.", image: charminarNight },
      { id: "falaknuma", name: "Taj Falaknuma Palace", description: "Mirror of the sky — Italian marble palace now hosts royal luxury stays.", image: golcondaSunset },
      { id: "purani-haveli", name: "Purani Haveli", description: "Nizam Museum with world's longest wardrobe — 400 years of royal artifacts.", image: charminarNight },
      { id: "nehru-zoo", name: "Nehru Zoological Park", description: "Asia's largest zoo — lion safari and nocturnal house adventures await.", image: golcondaSunset },
      { id: "ntr-gardens", name: "NTR Gardens", description: "Hussain Sagar's green lung — Japanese garden and musical fountain evenings.", image: charminarNight }
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
      { id: "hitec-city", name: "HITEC City", description: "India's silicon valley rises here — gleaming towers house global tech giants.", image: hitecCity },
      { id: "t-hub", name: "T-Hub", description: "India's largest startup incubator — where unicorn dreams are born and nurtured.", image: hitecCity },
      { id: "knowledge-city", name: "Knowledge City", description: "Research and innovation campus — pharma giants and biotech pioneers collaborate.", image: hitecCity },
      { id: "amazon-campus", name: "Amazon Hyderabad", description: "World's largest Amazon campus — tech innovation at massive Deccan scale.", image: hitecCity },
      { id: "google-office", name: "Google Gachibowli", description: "Search giant's expanding footprint — colorful workspaces spark digital creativity.", image: hitecCity },
      { id: "microsoft-idc", name: "Microsoft IDC", description: "Innovation hub for cloud and AI — where Windows and Azure evolve daily.", image: hitecCity },
      { id: "infosys-pocharam", name: "Infosys Pocharam", description: "Green campus paradise — sustainable tech meets architectural excellence.", image: hitecCity },
      { id: "tcs-adibatla", name: "TCS Adibatla", description: "Consultancy giant's mega campus — training tomorrow's tech workforce.", image: hitecCity },
      { id: "raheja-mindspace", name: "Raheja Mindspace", description: "IT park icon — glass towers and food courts define tech work culture.", image: hitecCity },
      { id: "skyview", name: "Skyview by EIPL", description: "Futuristic towers touching clouds — the new face of tech workspace design.", image: hitecCity },
      { id: "we-work", name: "WeWork Galaxy", description: "Co-working revolution — startups and freelancers thrive in flexible spaces.", image: hitecCity },
      { id: "iiit-hyderabad", name: "IIIT Hyderabad", description: "Premier tech research institute — breeding ground for AI and ML pioneers.", image: hitecCity },
      { id: "fab-city", name: "Fab City", description: "Semiconductor manufacturing hub — India's chip-making ambitions take shape.", image: hitecCity }
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
      { id: "khajaguda", name: "Khajaguda Hills", description: "Boulder-strewn trails await — sunrise treks reveal the awakening city below.", image: adventureRocks },
      { id: "ramoji", name: "Ramoji Film City", description: "World's largest film studio — 2000 acres of Bollywood magic and theme parks.", image: adventureRocks },
      { id: "ananthagiri", name: "Ananthagiri Hills", description: "Misty coffee plantations — weekend escape to nature's cool green embrace.", image: adventureRocks },
      { id: "bhongir-fort", name: "Bhongir Fort", description: "Monolithic boulder fortress — adrenaline climb rewards with panoramic views.", image: adventureRocks },
      { id: "pocharam-dam", name: "Pocharam Dam", description: "Serene reservoir retreat — boating, wildlife sanctuary, and peaceful picnics.", image: adventureRocks },
      { id: "ocean-park", name: "Ocean Park", description: "Water park thrills — wave pools and slides beat the Deccan summer heat.", image: adventureRocks },
      { id: "snow-world", name: "Snow World", description: "Arctic adventure in tropical city — snow slides and igloo experiences await.", image: adventureRocks },
      { id: "paintball", name: "Paintball Adventures", description: "Combat gaming zones — team battles in themed arenas around the city.", image: adventureRocks },
      { id: "kbr-park", name: "KBR National Park", description: "Urban jungle sanctuary — morning jogs among deer and peacocks.", image: adventureRocks },
      { id: "durgam-cheruvu", name: "Durgam Cheruvu", description: "Secret lake with cable bridge — sunset walks and kayaking adventures.", image: adventureRocks },
      { id: "osman-sagar", name: "Osman Sagar", description: "Historic reservoir getaway — boating and lakeside relaxation near the city.", image: adventureRocks },
      { id: "mrugavani", name: "Mrugavani National Park", description: "Wild Deccan sanctuary — spot deer, peacocks, and exotic birds in natural habitat.", image: adventureRocks }
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
      { id: "inorbit", name: "Inorbit Mall", description: "Luxury retail meets entertainment — flagship brands and gourmet dining.", image: cafeJubilee },
      { id: "gvk-one", name: "GVK One Mall", description: "Banjara Hills landmark — premium shopping and multiplex entertainment.", image: cafeJubilee },
      { id: "forum-sujana", name: "Forum Sujana Mall", description: "KPHB's shopping paradise — family entertainment and retail therapy.", image: cafeJubilee },
      { id: "sarath-city", name: "Sarath City Capital", description: "India's third-largest mall — endless brands under one colossal roof.", image: cafeJubilee },
      { id: "ikea", name: "IKEA Hyderabad", description: "Swedish home experience — affordable design and famous meatballs.", image: cafeJubilee },
      { id: "next-galleria", name: "Next Galleria", description: "Entertainment mega-complex — bowling, gaming, and culinary adventures.", image: cafeJubilee },
      { id: "roastery-coffee", name: "Roastery Coffee House", description: "Third-wave coffee culture — single-origin brews in industrial chic spaces.", image: cafeJubilee },
      { id: "olive-bistro", name: "Olive Bistro", description: "Mediterranean magic on Durgam Cheruvu — sunset views and gourmet plates.", image: cafeJubilee },
      { id: "dialogue-dark", name: "Dialogue in the Dark", description: "Sensory café experience — dine in complete darkness, guided by the blind.", image: cafeJubilee },
      { id: "concu", name: "Conçu Patisserie", description: "French pastry perfection — macarons and croissants rival Paris itself.", image: cafeJubilee },
      { id: "autumn-leaf", name: "Autumn Leaf Café", description: "Banjara Hills institution — comfort food and conversations since forever.", image: cafeJubilee },
      { id: "farzi-cafe", name: "Farzi Café", description: "Molecular gastronomy meets Indian soul — Instagram-worthy culinary art.", image: cafeJubilee },
      { id: "socials", name: "Social Offline", description: "Co-working meets bar culture — laptops by day, cocktails by night.", image: cafeJubilee }
    ]
  }
];
