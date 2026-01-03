import foodBiryani from "@/assets/food-biryani.jpg";
import charminarNight from "@/assets/charminar-night.jpg";
import hitecCity from "@/assets/hitec-city.jpg";
import cultureBonalu from "@/assets/culture-bonalu.jpg";
import golcondaSunset from "@/assets/golconda-sunset.jpg";
import adventureRocks from "@/assets/adventure-rocks.jpg";
import cafeJubilee from "@/assets/cafe-jubilee.jpg";

// ============================================================
// HYDERABAD CONTENT DATA
// ============================================================
// Each section contains 12-15 gallery items with placeholder images.
// To update images, replace the 'image' field URLs below.
// Format: { id, name, description (2 lines), image }
// ============================================================

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

// ============================================================
// FOOD SECTION - 15 items
// Featured: Bawarchi Biryani, Cafe Niloufer, Pista House Haleem
// ============================================================
const foodItems: ContentItem[] = [
  {
    id: "bawarchi-biryani",
    name: "Bawarchi Biryani",
    description: "Legendary RTC Cross Roads icon serving authentic Hyderabadi dum biryani since decades. Family-style portions that define celebration in every household.",
    image: "/placeholder.svg"
  },
  {
    id: "cafe-niloufer",
    name: "Cafe Niloufer",
    description: "Iconic Lakdikapul landmark famous for Osmania biscuits and Irani chai. Where generations of Hyderabadis start their morning rituals.",
    image: "/placeholder.svg"
  },
  {
    id: "pista-house-haleem",
    name: "Pista House Haleem",
    description: "Seasonal Ramadan masterpiece that draws crowds from across the city. Slow-cooked wheat and meat melt into divine, aromatic richness.",
    image: "/placeholder.svg"
  },
  {
    id: "paradise-biryani",
    name: "Paradise Biryani",
    description: "The crown jewel of Secunderabad's culinary scene since 1953. Rich, aromatic layers of saffron rice and succulent meat.",
    image: "/placeholder.svg"
  },
  {
    id: "shah-ghouse",
    name: "Shah Ghouse",
    description: "Tolichowki's beloved late-night biryani destination for decades. Generous portions with signature spiced curry on the side.",
    image: "/placeholder.svg"
  },
  {
    id: "nimrah-cafe",
    name: "Nimrah Cafe & Bakery",
    description: "Charminar's heritage corner serving Osmania biscuits since 1993. The perfect Irani chai companion with a view of history.",
    image: "/placeholder.svg"
  },
  {
    id: "chutneys",
    name: "Chutneys",
    description: "South Indian breakfast paradise in Banjara Hills. Crispy dosas and fluffy idlis with an array of signature chutneys.",
    image: "/placeholder.svg"
  },
  {
    id: "karachi-bakery",
    name: "Karachi Bakery",
    description: "Since 1953, the iconic fruit biscuit destination of Hyderabad. Midnight queues and worldwide shipping for legendary treats.",
    image: "/placeholder.svg"
  },
  {
    id: "alpha-hotel",
    name: "Alpha Hotel",
    description: "Old city institution famous for spicy chicken dishes. Authentic flavors that have remained unchanged for generations.",
    image: "/placeholder.svg"
  },
  {
    id: "mehfil-restaurant",
    name: "Mehfil Restaurant",
    description: "Authentic Mughlai cuisine in the heart of the city. Rich gravies and tender kebabs in regal ambiance.",
    image: "/placeholder.svg"
  },
  {
    id: "cream-stone",
    name: "Cream Stone",
    description: "Revolutionary slab ice cream experience born in Hyderabad. Custom creations mixed fresh on frozen granite.",
    image: "/placeholder.svg"
  },
  {
    id: "gokul-chat",
    name: "Gokul Chat",
    description: "Koti's legendary street food corner serving crispy papdi chaat. Tangy, spicy, sweet perfection in every bite.",
    image: "/placeholder.svg"
  },
  {
    id: "shadab-restaurant",
    name: "Shadab Restaurant",
    description: "Old city landmark for authentic Hyderabadi cuisine. Legendary haleem and biryani that rivals the best.",
    image: "/placeholder.svg"
  },
  {
    id: "sarvi-restaurant",
    name: "Sarvi Restaurant",
    description: "Late-night haven for Hyderabadi food enthusiasts. Famous for nahari and paya that warm the soul.",
    image: "/placeholder.svg"
  },
  {
    id: "ohris-jiva",
    name: "Ohri's Jiva Imperia",
    description: "Fine dining with panoramic city views. Contemporary takes on traditional flavors in elegant settings.",
    image: "/placeholder.svg"
  }
];

// ============================================================
// CULTURE SECTION - 15 items
// Featured: Charminar & Golconda Fort
// ============================================================
const cultureItems: ContentItem[] = [
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
  },
  {
    id: "mecca-masjid",
    name: "Mecca Masjid",
    description: "One of the oldest and largest mosques in India, built over 77 years. Bricks made with Mecca soil in the central arch.",
    image: "/placeholder.svg"
  },
  {
    id: "qutb-shahi-tombs",
    name: "Qutb Shahi Tombs",
    description: "Majestic necropolis of the Qutb Shahi dynasty rulers. Persian, Pathan, and Hindu architectural fusion in serene gardens.",
    image: "/placeholder.svg"
  },
  {
    id: "chowmahalla-palace",
    name: "Chowmahalla Palace",
    description: "Seat of the Asaf Jahi dynasty, restored to former glory. Grand courtyards and vintage car collection inside.",
    image: "/placeholder.svg"
  },
  {
    id: "salar-jung-museum",
    name: "Salar Jung Museum",
    description: "One of the world's largest one-man collections of antiques. Veiled Rebecca and Musical Clock draw visitors worldwide.",
    image: "/placeholder.svg"
  },
  {
    id: "bonalu-festival",
    name: "Bonalu Festival",
    description: "Vibrant annual tribute to Goddess Mahakali with colorful processions. Traditional dance, music, and offerings fill the streets.",
    image: "/placeholder.svg"
  },
  {
    id: "bathukamma",
    name: "Bathukamma Festival",
    description: "Telangana's floral festival celebrating feminine divinity. Colorful flower stacks and folk songs in community gatherings.",
    image: "/placeholder.svg"
  },
  {
    id: "laad-bazaar",
    name: "Laad Bazaar",
    description: "Centuries-old market famous for lac bangles and pearls. Vibrant colors and skilled artisans near Charminar.",
    image: "/placeholder.svg"
  },
  {
    id: "falaknuma-palace",
    name: "Falaknuma Palace",
    description: "Mirror of the Sky perched on a hill with Italian marble floors. Now a luxury hotel preserving Nizami grandeur.",
    image: "/placeholder.svg"
  },
  {
    id: "paigah-tombs",
    name: "Paigah Tombs",
    description: "Exquisite marble mausoleums of Paigah noble family. Intricate jali work and Indo-Islamic architecture.",
    image: "/placeholder.svg"
  },
  {
    id: "state-museum",
    name: "Telangana State Museum",
    description: "Rich repository of Deccan history and art. Buddhist antiquities and Kakatiya sculptures under one roof.",
    image: "/placeholder.svg"
  },
  {
    id: "deccani-cuisine",
    name: "Deccani Cuisine Heritage",
    description: "Centuries of culinary fusion from Persian, Mughal, and Telugu influences. Unique flavors found nowhere else in India.",
    image: "/placeholder.svg"
  },
  {
    id: "urdu-poetry",
    name: "Urdu Poetry & Ghazals",
    description: "Rich literary tradition of Deccani Urdu. Mushairas and mehfils keep the poetic heritage alive.",
    image: "/placeholder.svg"
  },
  {
    id: "bidriware",
    name: "Bidriware Craftsmanship",
    description: "Ancient metal inlay craft from the Deccan region. Silver patterns on blackened alloy create timeless art.",
    image: "/placeholder.svg"
  }
];

// ============================================================
// FAMOUS PLACES SECTION - 15 items
// Featured: Birla Mandir & Hussain Sagar
// ============================================================
const famousPlacesItems: ContentItem[] = [
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
  },
  {
    id: "tank-bund",
    name: "Tank Bund Road",
    description: "Scenic promenade connecting twin cities along Hussain Sagar. Statues of Telugu legends line this evening hangout spot.",
    image: "/placeholder.svg"
  },
  {
    id: "ntr-gardens",
    name: "NTR Gardens",
    description: "Sprawling urban park on Hussain Sagar's banks. Japanese garden, train rides, and family picnic paradise.",
    image: "/placeholder.svg"
  },
  {
    id: "lumbini-park",
    name: "Lumbini Park",
    description: "Gateway to Buddha statue boat rides from Tank Bund. Musical fountain and laser show every evening.",
    image: "/placeholder.svg"
  },
  {
    id: "shilparamam",
    name: "Shilparamam",
    description: "Arts and crafts village showcasing traditional Indian culture. Ethnic huts, artisan workshops, and cultural performances.",
    image: "/placeholder.svg"
  },
  {
    id: "nehru-zoo",
    name: "Nehru Zoological Park",
    description: "One of the largest zoos in Asia with over 1,500 species. Safari rides and nocturnal animal house experiences.",
    image: "/placeholder.svg"
  },
  {
    id: "snow-world",
    name: "Snow World",
    description: "India's first and largest snow theme park. Sub-zero temperatures and snow play in tropical Hyderabad.",
    image: "/placeholder.svg"
  },
  {
    id: "durgam-cheruvu",
    name: "Durgam Cheruvu",
    description: "Secret lake hidden between HITEC City skyscrapers. Cable-stayed bridge and waterfront dining destination.",
    image: "/placeholder.svg"
  },
  {
    id: "osman-sagar",
    name: "Osman Sagar (Gandipet)",
    description: "Scenic reservoir built during Nizam era for drinking water. Sunset views and peaceful weekend escape.",
    image: "/placeholder.svg"
  },
  {
    id: "shamirpet-lake",
    name: "Shamirpet Lake",
    description: "Picturesque lake near the deer park. Bird watching and nature photography paradise.",
    image: "/placeholder.svg"
  },
  {
    id: "kbr-park",
    name: "KBR National Park",
    description: "Green lung of Hyderabad in Jubilee Hills. Morning joggers and evening walkers in urban wilderness.",
    image: "/placeholder.svg"
  },
  {
    id: "sanjeevaiah-park",
    name: "Sanjeevaiah Park",
    description: "Largest park in Hyderabad with lagoons and bridges. Butterfly garden and children's play areas.",
    image: "/placeholder.svg"
  },
  {
    id: "jala-vihar",
    name: "Jala Vihar Water Park",
    description: "Family water park on Necklace Road. Wave pools and water slides for summer relief.",
    image: "/placeholder.svg"
  },
  {
    id: "botanical-garden",
    name: "Botanical Garden Kondapur",
    description: "Urban botanical haven with diverse plant species. Educational walks and photography sessions.",
    image: "/placeholder.svg"
  }
];

// ============================================================
// IT HUB SECTION - 15 items
// Featured: T-Hub, Google, Microsoft, Amazon, TCS, Wipro, Gachibowli, Cyber Towers
// ============================================================
const itHubItems: ContentItem[] = [
  {
    id: "t-hub",
    name: "T-Hub",
    description: "World's largest innovation campus nurturing India's brightest startup dreams. Where unicorn aspirations transform into billion-dollar realities.",
    image: "/placeholder.svg"
  },
  {
    id: "google-hyderabad",
    name: "Google Hyderabad",
    description: "Tech giant's largest campus outside the US in Gachibowli. Cutting-edge innovation in a stunning architectural marvel.",
    image: "/placeholder.svg"
  },
  {
    id: "microsoft-hyderabad",
    name: "Microsoft India",
    description: "Major development center for Microsoft's global products. Cloud computing and AI research hub in HITEC City.",
    image: "/placeholder.svg"
  },
  {
    id: "amazon-hyderabad",
    name: "Amazon Development Center",
    description: "Massive 13-floor campus, Amazon's largest building globally. AWS and retail innovation driving e-commerce revolution.",
    image: "/placeholder.svg"
  },
  {
    id: "cyber-towers",
    name: "Cyber Towers",
    description: "HITEC City landmark that pioneered Hyderabad's transformation into a global tech hub. Twin towers symbolizing the city's digital revolution since 1998.",
    image: "/placeholder.svg"
  },
  {
    id: "tcs-synergy-park",
    name: "TCS Synergy Park",
    description: "Tata Consultancy Services' sprawling Gachibowli campus. One of the largest IT campuses employing thousands.",
    image: "/placeholder.svg"
  },
  {
    id: "wipro-campus",
    name: "Wipro Campus",
    description: "Green-certified sustainable IT campus in Nanakramguda. Innovation labs and global delivery centers.",
    image: "/placeholder.svg"
  },
  {
    id: "gachibowli",
    name: "Gachibowli IT District",
    description: "Financial district housing major tech corporations. Glass towers and premium infrastructure define this tech paradise.",
    image: "/placeholder.svg"
  },
  {
    id: "raheja-mindspace",
    name: "Raheja Mindspace",
    description: "Premier IT park with multinational companies. Iconic towers and world-class amenities for tech professionals.",
    image: "/placeholder.svg"
  },
  {
    id: "infosys-campus",
    name: "Infosys Pocharam",
    description: "Sprawling 350-acre campus with world-class facilities. Training center and development hub for global clients.",
    image: "/placeholder.svg"
  },
  {
    id: "apple-maps",
    name: "Apple Maps Development",
    description: "Apple's strategic development center for Maps and Siri. Silicon Valley innovation in the heart of Hyderabad.",
    image: "/placeholder.svg"
  },
  {
    id: "facebook-meta",
    name: "Meta (Facebook) Office",
    description: "Social media giant's India engineering center. Building products for billions of users worldwide.",
    image: "/placeholder.svg"
  },
  {
    id: "qualcomm-campus",
    name: "Qualcomm India",
    description: "Semiconductor giant's R&D center in Hyderabad. Chipset design powering global mobile devices.",
    image: "/placeholder.svg"
  },
  {
    id: "nvidia-office",
    name: "NVIDIA Development",
    description: "GPU pioneer's engineering center for AI and graphics. Powering the future of computing and gaming.",
    image: "/placeholder.svg"
  },
  {
    id: "we-work-hitec",
    name: "WeWork HITEC City",
    description: "Coworking spaces for startups and freelancers. Modern workspaces fostering collaboration and innovation.",
    image: "/placeholder.svg"
  }
];

// ============================================================
// ADVENTURE SECTION - 12 items
// Featured: Ramoji Film City, Khajaguda Hills
// ============================================================
const adventureItems: ContentItem[] = [
  {
    id: "ramoji-film-city",
    name: "Ramoji Film City",
    description: "World's largest film studio complex sprawling across 2000 acres of cinematic magic. Theme parks, live shows, and Bollywood dreams come alive here.",
    image: "/placeholder.svg"
  },
  {
    id: "khajaguda-rocks",
    name: "Khajaguda Hills",
    description: "Bouldering paradise with ancient granite formations. Rock climbers and sunset chasers flock to these rugged terrains.",
    image: "/placeholder.svg"
  },
  {
    id: "ananthagiri-hills",
    name: "Ananthagiri Hills",
    description: "Scenic hill station an hour from the city. Trekking trails and coffee plantations for weekend escapes.",
    image: "/placeholder.svg"
  },
  {
    id: "bhongir-fort",
    name: "Bhongir Fort",
    description: "Monolithic rock fortress with thrilling trek routes. Egg-shaped hill offering panoramic views of the countryside.",
    image: "/placeholder.svg"
  },
  {
    id: "escape-room",
    name: "Escape Rooms Banjara Hills",
    description: "Immersive puzzle adventures testing wits and teamwork. Themed challenges from horror to heist scenarios.",
    image: "/placeholder.svg"
  },
  {
    id: "paintball-zone",
    name: "Paintball Arenas",
    description: "Action-packed paintball battlefields around the city. Team combat experiences in urban and forest settings.",
    image: "/placeholder.svg"
  },
  {
    id: "go-karting",
    name: "Go-Karting Tracks",
    description: "High-speed racing thrills at multiple tracks. Professional karts and timed races for adrenaline seekers.",
    image: "/placeholder.svg"
  },
  {
    id: "deccan-trails",
    name: "Deccan Trails Camping",
    description: "Overnight camping and trekking adventures nearby. Stargazing and bonfire nights in the wilderness.",
    image: "/placeholder.svg"
  },
  {
    id: "boulder-hills",
    name: "Boulder Hills Golf",
    description: "Championship golf course with challenging terrain. Exclusive club experience amidst natural boulder formations.",
    image: "/placeholder.svg"
  },
  {
    id: "sky-zone",
    name: "Sky Zone Trampoline Park",
    description: "Indoor trampoline arena for all ages. Foam pits, dodge ball courts, and freestyle jumping zones.",
    image: "/placeholder.svg"
  },
  {
    id: "sailing-club",
    name: "Hyderabad Sailing Club",
    description: "Water sports and sailing on Hussain Sagar. Kayaking, sailing lessons, and sunset cruises.",
    image: "/placeholder.svg"
  },
  {
    id: "gandipet-kayaking",
    name: "Osman Sagar Kayaking",
    description: "Peaceful kayaking on the historic reservoir. Early morning paddles with misty mountain views.",
    image: "/placeholder.svg"
  }
];

// ============================================================
// MALLS & CAFES SECTION - 15 items
// Featured: Jubilee Hills High-street
// ============================================================
const mallsCafesItems: ContentItem[] = [
  {
    id: "jubilee-hills",
    name: "Jubilee Hills Road 36",
    description: "High-street luxury destination featuring upscale cafes and premium boutiques. Where Hyderabad's elite shop, dine, and celebrate the finer things.",
    image: "/placeholder.svg"
  },
  {
    id: "banjara-hills",
    name: "Banjara Hills Road 1-14",
    description: "Trendy neighborhood with designer stores and fine dining. Nightlife hotspots and celebrity sightings abound.",
    image: "/placeholder.svg"
  },
  {
    id: "inorbit-mall",
    name: "Inorbit Mall",
    description: "HITEC City's premium shopping destination. International brands and gourmet food court under one roof.",
    image: "/placeholder.svg"
  },
  {
    id: "gvk-one",
    name: "GVK One Mall",
    description: "Banjara Hills landmark with luxury retail and fine dining. Multiplex cinema and rooftop restaurants.",
    image: "/placeholder.svg"
  },
  {
    id: "forum-mall",
    name: "Forum Sujana Mall",
    description: "Kukatpally's entertainment and shopping hub. Hypermarket, gaming zones, and family entertainment.",
    image: "/placeholder.svg"
  },
  {
    id: "city-center-mall",
    name: "City Center Mall",
    description: "Banjara Hills shopping complex with diverse brands. Central location and easy accessibility.",
    image: "/placeholder.svg"
  },
  {
    id: "nexus-mall",
    name: "Nexus (Sarath City)",
    description: "One of the largest malls in Hyderabad, Gachibowli. Entertainment zones and flagship stores.",
    image: "/placeholder.svg"
  },
  {
    id: "roastery-coffee",
    name: "The Roastery Coffee House",
    description: "Specialty coffee destination in Jubilee Hills. Single-origin beans and artisanal brewing methods.",
    image: "/placeholder.svg"
  },
  {
    id: "blue-sea",
    name: "Blue Sea Restaurant",
    description: "Legendary multi-cuisine restaurant since 1987. Sunset views and iconic Chinese dishes.",
    image: "/placeholder.svg"
  },
  {
    id: "autumn-leaf-cafe",
    name: "Autumn Leaf Cafe",
    description: "Cozy cafe with bookish vibes in Banjara Hills. Artisanal coffee and freshly baked goods.",
    image: "/placeholder.svg"
  },
  {
    id: "concu",
    name: "Conçu Patisserie",
    description: "French patisserie with delicate pastries and macarons. European elegance in the heart of the city.",
    image: "/placeholder.svg"
  },
  {
    id: "cafe-bahar",
    name: "Cafe Bahar",
    description: "Basheerbagh institution for chai and biryani. Authentic taste that hasn't changed in decades.",
    image: "/placeholder.svg"
  },
  {
    id: "heart-cup-coffee",
    name: "Heart Cup Coffee",
    description: "Instagram-worthy cafe chain with creative drinks. Pet-friendly spaces and trendy interiors.",
    image: "/placeholder.svg"
  },
  {
    id: "lamakaan",
    name: "Lamakaan Cultural Space",
    description: "Open cultural space with cafe and events. Poetry readings, music, and intellectual gatherings.",
    image: "/placeholder.svg"
  },
  {
    id: "the-hole-in-wall",
    name: "The Hole in the Wall Cafe",
    description: "Quirky cafe with eclectic decor and comfort food. Live music nights and artistic ambiance.",
    image: "/placeholder.svg"
  }
];

// ============================================================
// MAIN SECTIONS ARRAY
// ============================================================
export const sections: Section[] = [
  {
    id: "food",
    title: "Food",
    tagline: "The aromatic legacy of Dum Biryani and the warmth of Irani Chai.",
    icon: "🍛",
    accentColor: "hsl(30, 100%, 50%)",
    glowColor: "hsl(30, 100%, 50%)",
    image: foodBiryani,
    items: foodItems
  },
  {
    id: "culture",
    title: "Culture",
    tagline: "A symphony of Deccani grace and modern Telugu spirit.",
    icon: "🎭",
    accentColor: "hsl(280, 70%, 55%)",
    glowColor: "hsl(280, 70%, 55%)",
    image: cultureBonalu,
    items: cultureItems
  },
  {
    id: "famous-places",
    title: "Famous Places",
    tagline: "From the towering Charminar to the impregnable echoes of Golconda.",
    icon: "🕌",
    accentColor: "hsl(45, 90%, 50%)",
    glowColor: "hsl(45, 90%, 50%)",
    image: charminarNight,
    items: famousPlacesItems
  },
  {
    id: "it-hub",
    title: "IT Hub",
    tagline: "The glass skyline of HITEC City—where India's silicon dreams take flight.",
    icon: "💻",
    accentColor: "hsl(195, 100%, 55%)",
    glowColor: "hsl(195, 100%, 55%)",
    image: hitecCity,
    items: itHubItems
  },
  {
    id: "adventure",
    title: "Adventure",
    tagline: "Bouldering at Khajaguda and the cinematic wonders of Ramoji.",
    icon: "🏔️",
    accentColor: "hsl(120, 60%, 45%)",
    glowColor: "hsl(120, 60%, 45%)",
    image: adventureRocks,
    items: adventureItems
  },
  {
    id: "malls-cafes",
    title: "Malls & Cafes",
    tagline: "High-street luxury in Jubilee Hills and the vibrant pulse of Banjara Hills.",
    icon: "☕",
    accentColor: "hsl(330, 70%, 55%)",
    glowColor: "hsl(330, 70%, 55%)",
    image: cafeJubilee,
    items: mallsCafesItems
  }
];
