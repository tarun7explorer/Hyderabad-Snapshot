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
    // Used one of your uploaded images as the section cover
    image: "/food/paraside_biryani.jpg", 
    items: [
      { 
        id: "biryani-paradise", 
        name: "Paradise Biryani", 
        description: "The legendary crown jewel of Hyderabadi dum biryani.", 
        image: "/food/paraside_biryani.jpg" 
      },
      { 
        id: "biryani-bawarchi", 
        name: "Bawarchi Biryani", 
        description: "RTC Cross Roads icon serving the city's most beloved spice blend.", 
        image: "/food/bawarachi.jpg" 
      },
      { 
        id: "haleem", 
        name: "Pista House Haleem", 
        description: "A seasonal Ramadan masterpiece of slow-cooked meat and wheat.", 
        image: "/food/Haleem.jpg" 
      },
      { 
        id: "irani-chai", 
        name: "Irani Chai at Nimrah", 
        description: "Charminar's soul served in a glass cup with biscuits.", 
        image: "/food/chai.jpg" 
      },
      { 
        id: "qubani", 
        name: "Qubani Ka Meetha", 
        description: "Royal stewed apricot dessert crowned with cream.", 
        // Mapped to double ka meetha as Qubani was missing in screenshot
        image: "/food/double_ka_meetha.jpg" 
      },
      { 
        id: "nihari", 
        name: "Nihari at Shadab", 
        description: "A rich, slow-cooked dawn stew of meat and spices.", 
        image: "/food/paya.jpg" 
      },
      { 
        id: "lukhmi", 
        name: "Lukhmi", 
        description: "The aristocratic Deccani version of the savory meat samosa.", 
        image: "/food/lukhmi.jpg" 
      },
      { 
        id: "double-roti", 
        name: "Double Ka Meetha", 
        description: "Rich bread pudding soaked in milk and saffron.", 
        image: "/food/double_ka_meetha.jpg" 
      },
      { 
        id: "mirchi-bajji", 
        name: "Mirchi Bajji", 
        description: "Street-side thunder — large stuffed chillies fried golden.", 
        image: "/food/mirchi_bajji.jpg" 
      },
      { 
        id: "boti-kebab", 
        name: "Boti Kebab", 
        description: "Tender, charcoal-grilled meat cubes marinated in spices.", 
        image: "/food/boti.jpg" 
      },
      { 
        id: "pathar-gosht", 
        name: "Pathar Ka Gosht", 
        description: "Mutton seared on hot granite stones for a smoky finish.", 
        image: "/food/pathar_ka_gosh.jpg" 
      },
      { 
        id: "khubani-lassi", 
        name: "Khubani Lassi", 
        description: "Thick, creamy yogurt blended with sweet apricots.", 
        image: "/food/lassi.jpg" 
      },
      { 
        id: "mandi", 
        name: "Barkas Mandi", 
        description: "Traditional Arabian meat and rice dish on a large platter.", 
        image: "/food/barkas.jpg" 
      },
      { 
        id: "osmania-biscuit", 
        name: "Osmania Biscuits", 
        description: "The iconic salt-and-sweet tea companion.", 
        image: "/food/osmanian.jpg" 
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
    image: "/culture/Bonalu.jpg",
    items: [
      { id: "bonalu", name: "Bonalu Festival", description: "Vibrant processions honoring Goddess Mahakali.", image: "/culture/Bonalu.jpg" },
      { id: "bathukamma", name: "Bathukamma", description: "Telangana's floral festival celebrating nature.", image: "/culture/Bakthukamma.jpg" },
      { id: "qawwali", name: "Deccani Qawwali", description: "Soul-stirring Sufi devotional music.", image: "/culture/Deccani_qqwwali.jpg" },
      { id: "kuchipudi", name: "Kuchipudi Dance", description: "Classical Telugu dance form.", image: "/culture/Bonalu.jpg" },
      { id: "pearls", name: "Hyderabadi Pearls", description: "Exquisite craftsmanship from the 'City of Pearls'.", image: "/culture/Laad_Bazar.jpg" },
      { id: "bidri", name: "Bidriware Art", description: "Unique silver-on-black metalwork.", image: "/culture/Bidriwar_art.jpg" },
      { id: "pochampally", name: "Pochampally Ikat", description: "UNESCO-recognized handloom weaves.", image: "/culture/Pochampally.jpg" },
      { id: "laad-bazaar", name: "Laad Bazaar", description: "Historic market for bangles.", image: "/culture/Laad_Bazar.jpg" },
      { id: "numaish", name: "Numaish Exhibition", description: "Annual industrial exhibition.", image: "/culture/Numaish.jpg" },
      { id: "tehzeeb", name: "Nizami Tehzeeb", description: "Legendary etiquette and hospitality.", image: "/culture/Kalamkari_art.jpg" },
      { id: "kalamkari", name: "Kalamkari Art", description: "Traditional hand-painted textiles.", image: "/culture/Kalamkari_art.jpg" },
      { id: "gadwal", name: "Gadwal Sarees", description: "Heritage silk weaves.", image: "/culture/Gadwal_sareers.jpg" }
    ]
  },
  {
    id: "famous-places",
    title: "Famous Places",
    tagline: "From the towering Charminar to the impregnable echoes of Golconda.",
    icon: "🕌",
    accentColor: "hsl(45, 90%, 50%)",
    glowColor: "hsl(45, 90%, 50%)",
    image: "/famous_places/Charminar.jpg",
    items: [
      { id: "charminar", name: "Charminar", description: "The iconic four-minaret mosque.", image: "/famous_places/Charminar.jpg" },
      { id: "golconda", name: "Golconda Fort", description: "A diamond-rich citadel.", image: "/famous_places/Golcondo_Fort.jpg" },
      { id: "qutb-shahi", name: "Qutb Shahi Tombs", description: "Grand, domed mausoleums.", image: "/famous_places/Qutub_Shashi_Tombs.jpg" },
      { id: "chowmahalla", name: "Chowmahalla Palace", description: "Opulent seat of the Nizams.", image: "/famous_places/Chowmahalla_Palace.jpg" },
      { id: "salar-jung", name: "Salar Jung Museum", description: "World's largest one-man art collection.", image: "/famous_places/Salar_Jung_Museum.jpg" },
      { id: "hussain-sagar", name: "Hussain Sagar Lake", description: "Heart-shaped lake with Buddha statue.", image: "/famous_places/Hussian_Sagar_Lake.jpg" },
      { id: "birla-mandir", name: "Birla Mandir", description: "Stunning white marble temple.", image: "/famous_places/Birla_Mandir.jpg" },
      { id: "falaknuma", name: "Taj Falaknuma Palace", description: "Mirror of the Sky palace.", image: "/famous_places/Taj_Falaknuma_Palace.jpg" },
      { id: "makkah-masjid", name: "Makkah Masjid", description: "One of India's largest mosques.", image: "/famous_places/Makkah_Masjid.jpg" },
      { id: "taramati", name: "Taramati Baradari", description: "Historic hilltop pavilion.", image: "/famous_places/Taramati_Baradari.jpg" },
      { id: "paigah", name: "Paigah Tombs", description: "Intricate marble necropolis.", image: "/famous_places/Paigah_Tombs.jpg" },
      { id: "zoo", name: "Nehru Zoological Park", description: "Massive zoo with safari.", image: "/famous_places/Nehru_Zoologoical_Park.jpg" },
      { id: "ntr-gardens", name: "NTR Gardens", description: "Popular urban park.", image: "/famous_places/NTR_Gardens.jpg" },
      { id: "lumbini", name: "Lumbini Park", description: "Lakefront park with laser shows.", image: "/famous_places/Lumbini_Park.jpg" },
      { id: "gandipet", name: "Osman Sagar (Gandipet)", description: "Historic reservoir picnic spot.", image: "/famous_places/Osmaan_sagar_lake.jpg" }
    ]
  },
  {
    id: "it-hub",
    title: "IT Hub",
    tagline: "The glass skyline of HITEC City—where India's silicon dreams take flight.",
    icon: "💻",
    accentColor: "hsl(195, 100%, 55%)",
    glowColor: "hsl(195, 100%, 55%)",
    image: "/IT_hub/Hitech_City.jpg",
    items: [
      { id: "hitec-city", name: "HITEC City", description: "Bustling tech core.", image: "/IT_hub/Hitech_City.jpg" },
      { id: "t-hub", name: "T-Hub 2.0", description: "Largest innovation campus.", image: "/IT_hub/THub 2.o.jpg" },
      { id: "amazon", name: "Amazon Campus", description: "Largest global Amazon campus.", image: "/IT_hub/Amazon.jpg" },
      { id: "skyview", name: "The Skyview", description: "Futuristic glass towers.", image: "/IT_hub/SkyView.jpg" },
      { id: "google", name: "Google Office", description: "Major Google campus.", image: "/IT_hub/Google.jpg" },
      { id: "microsoft", name: "Microsoft IDC", description: "Microsoft India Development Center.", image: "/IT_hub/Microsoft.jpg" },
      { id: "knowledge-city", name: "Knowledge City", description: "Tech and pharma hub.", image: "/IT_hub/Knowledge_City.jpg" },
      { id: "raheja", name: "Mindspace IT Park", description: "Integrated business park.", image: "/IT_hub/Mindspace_IT_Park.jpg" },
      { id: "wework", name: "WeWork Galaxy", description: "Prominent co-working space.", image: "/IT_hub/WeWork_Glaassy.jpg" },
      { id: "financial-dist", name: "Financial District", description: "High-rise banking hub.", image: "/IT_hub/Financial_District.jpg" },
      { id: "t-works", name: "T-Works", description: "Hardware prototyping center.", image: "/IT_hub/T-Works.jpg" },
      { id: "dlf", name: "DLF Cyber City", description: "Major IT SEZ.", image: "/IT_hub/DLF CyberCity.jpg" },
      { id: "hcl", name: "HCL Campus", description: "Engineering services center.", image: "/IT_hub/HCL Campus.jpg" },
    ],
  },
  {
    id: "adventure",
    title: "Adventure",
    tagline: "Bouldering at Khajaguda and the cinematic wonders of Ramoji.",
    icon: "🏔️",
    accentColor: "hsl(120, 60%, 45%)",
    glowColor: "hsl(120, 60%, 45%)",
    image: "/Adventure/Khajaguda Hills.jpg",
    items: [
      { id: "khajaguda", name: "Khajaguda Hills", description: "Rock formations for bouldering.", image: "/Adventure/Khajaguda Hills.jpg" },
      { id: "ramoji", name: "Ramoji Film City", description: "Largest film city complex.", image: "/Adventure/Ramoji Fillm City.jpg" },
      { id: "ananthagiri", name: "Ananthagiri Hills", description: "Misty forest escape.", image: "/Adventure/Ananthagiri Hills.jpg" },
      { id: "durgam", name: "Durgam Cheruvu", description: "Kayaking at 'Secret Lake'.", image: "/Adventure/Durgam Cheruvu.jpg" },
      { id: "bhongir", name: "Bhongir Fort Trek", description: "Monolithic rock trek.", image: "/Adventure/Bhongir Fort Treck.jpg" },
      { id: "mrugavani", name: "Mrugavani Park", description: "Wildlife sanctuary.", image: "/Adventure/Mrugavani Park.jpg" },
      { id: "paintball", name: "Paintball Arenas", description: "Tactical paintball games.", image: "/Adventure/Paintball Arena.jpg" },
      { id: "camping", name: "Lakeside Camping", description: "Camping near reservoirs.", image: "/Adventure/Lakeside Camping.jpg" },
      { id: "snowworld", name: "Snow World", description: "Indoor snow theme park.", image: "/Adventure/Snow World.jpg" },
      { id: "wonderla", name: "Wonderla", description: "Amusement park thrills.", image: "/Adventure/Wonder La.jpg" },
      { id: "safari", name: "Lion Safari", description: "Safari zone in the zoo.", image: "/famous_places/Nehru_Zoologoical_Park.jpg" },
    ],
  },
  {
    id: "malls-cafes",
    title: "Malls & Cafes",
    tagline: "High-street luxury in Jubilee Hills and the vibrant pulse of Banjara Hills.",
    icon: "☕",
    accentColor: "hsl(330, 70%, 55%)",
    glowColor: "hsl(330, 70%, 55%)",
    image: "/Malla_&_Cafes/GVK one Mall.jpg",
    items: [
      { id: "sarath-city", name: "Sarath City Capital Mall", description: "One of the largest malls in India.", image: "/Malla_&_Cafes/Sarath_city_Mall.jpg" },
      { id: "ikea", name: "IKEA Hyderabad", description: "Swedish furniture and meatballs.", image: "/Malla_&_Cafes/IKEA Hyderabad.jpg" },
      { id: "roastery", name: "Roastery Coffee House", description: "Artisan coffee in a bungalow.", image: "/Malla_&_Cafes/Roastry Coffee House.jpg" },
      { id: "inorbit", name: "Inorbit Mall", description: "Premium mall with lake views.", image: "/Malla_&_Cafes/INorbit Mall.jpg" },
      { id: "concu", name: "Conçu Patisserie", description: "Elegant patisserie.", image: "/Malla_&_Cafes/Concu.jpg" },
      { id: "autumnleaf", name: "Autumn Leaf Cafe", description: "Charming vintage cafe.", image: "/Malla_&_Cafes/Autumn Leaf Cafe.jpg" },
      { id: "olive", name: "Olive Bistro", description: "Mediterranean restaurant overlooking lake.", image: "/Malla_&_Cafes/Olive Bistro.jpg" },
      { id: "hardrock", name: "Hard Rock Cafe", description: "Rock memorabilia and burgers.", image: "/Malla_&_Cafes/Hark Rock Cafe.jpg" },
      { id: "farzi", name: "Farzi Cafe", description: "Modern Indian bistro.", image: "/Malla_&_Cafes/Farzi Cafe.jpg" },
      { id: "social", name: "Mindspace Social", description: "Workspace-cum-bar.", image: "/Malla_&_Cafes/Mindspcae Social.jpg" },
      { id: "gvk", name: "GVK One Mall", description: "Luxury mall in Banjara Hills.", image: "/Malla_&_Cafes/GVK one Mall.jpg" },
      { id: "levas", name: "Lé Vantage Café Bar", description: "European-styled cafe.", image: "/Malla_&_Cafes/Olive Bistro.jpg" },
    ],
  },
];
