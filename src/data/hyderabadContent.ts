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
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Hyderabadi_Dum_Biryani.jpg/800px-Hyderabadi_Dum_Biryani.jpg",
      },
      {
        id: "biryani-bawarchi",
        name: "Bawarchi Biryani",
        description: "RTC Cross Roads icon serving the city's most beloved spice blend.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Hyderabadi_Chicken_Biryani.jpg/800px-Hyderabadi_Chicken_Biryani.jpg",
      },
      {
        id: "haleem",
        name: "Pista House Haleem",
        description: "A seasonal Ramadan masterpiece of slow-cooked meat and wheat, topped with fried onions and ghee.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Haleem_in_Hyderabad.jpg/800px-Haleem_in_Hyderabad.jpg",
      },
      {
        id: "irani-chai",
        name: "Irani Chai at Nimrah",
        description: "Charminar's soul served in a glass cup, perfectly paired with Osmania biscuits.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Irani_Chai_Hyderabad.jpg/800px-Irani_Chai_Hyderabad.jpg",
      },
      {
        id: "qubani",
        name: "Qubani Ka Meetha",
        description: "Royal stewed apricot dessert crowned with thick malai (cream) or ice cream.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Qubani_ka_meetha_with_ice_cream.jpg/800px-Qubani_ka_meetha_with_ice_cream.jpg",
      },
      {
        id: "nihari",
        name: "Nihari at Shadab",
        description: "A rich, slow-cooked dawn stew of meat and spices for the true early risers.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Nihari_cooked.jpg/800px-Nihari_cooked.jpg",
      },
      {
        id: "lukhmi",
        name: "Lukhmi",
        description: "The aristocratic Deccani version of the savory meat samosa, square and flaky.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Lukhmi.jpg/800px-Lukhmi.jpg",
      },
      {
        id: "double-roti",
        name: "Double Ka Meetha",
        description: "Rich bread pudding soaked in milk, saffron, and garnished with dry fruits.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Double_ka_meetha.jpg/800px-Double_ka_meetha.jpg",
      },
      {
        id: "mirchi-bajji",
        name: "Mirchi Bajji",
        description: "Street-side thunder — large stuffed chillies fried to golden perfection.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Mirchi_bajji.jpg/800px-Mirchi_bajji.jpg",
      },
      {
        id: "boti-kebab",
        name: "Boti Kebab",
        description: "Tender, charcoal-grilled meat cubes marinated in secret Deccan spices.",
        image: "https://images.unsplash.com/photo-1599021456807-25db0f974334?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "pathar-gosht",
        name: "Pathar Ka Gosht",
        description: "Mutton seared on hot granite stones for a unique smoky, tender finish.",
        image: "https://images.unsplash.com/photo-1606471191009-63994c53433b?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "khubani-lassi",
        name: "Khubani Lassi",
        description: "Thick, creamy yogurt blended with sweet, sun-dried apricots.",
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "mandi",
        name: "Barkas Mandi",
        description: "Traditional Arabian meat and rice dish served on a large platter, a Gachibowli favorite.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Chicken_Mandi.jpg/800px-Chicken_Mandi.jpg",
      },
      {
        id: "osmania-biscuit",
        name: "Osmania Biscuits",
        description: "The iconic salt-and-sweet tea companion, baked to a golden crisp.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Osmania_Biscuits.jpg/800px-Osmania_Biscuits.jpg",
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
        description: "Vibrant processions where women carry decorated pots on their heads honoring Goddess Mahakali.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bonalu_festival_Hyderabad.jpg/800px-Bonalu_festival_Hyderabad.jpg",
      },
      {
        id: "bathukamma",
        name: "Bathukamma",
        description: "Telangana's grand floral festival where women dance around beautiful flower stacks.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Bathukamma_Festival.jpg/800px-Bathukamma_Festival.jpg",
      },
      {
        id: "qawwali",
        name: "Deccani Qawwali",
        description: "Soul-stirring Sufi devotional music performed at the city's ancient dargahs.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Qawwali_at_Dargah.jpg/800px-Qawwali_at_Dargah.jpg",
      },
      {
        id: "kuchipudi",
        name: "Kuchipudi Dance",
        description: "Classical Telugu dance form characterized by graceful movements and dramatic storytelling.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Kuchipudi_Dance_Performance.jpg/800px-Kuchipudi_Dance_Performance.jpg",
      },
      {
        id: "pearls",
        name: "Hyderabadi Pearls",
        description: "Exquisite craftsmanship from the 'City of Pearls', famous for drilling and grading.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Pearls_Hyderabad.jpg/800px-Pearls_Hyderabad.jpg",
      },
      {
        id: "bidri",
        name: "Bidriware Art",
        description: "Unique metalwork from the Deccan featuring intricate silver inlay on blackened alloy.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Bidriware_vase.jpg/800px-Bidriware_vase.jpg",
      },
      {
        id: "pochampally",
        name: "Pochampally Ikat",
        description: "UNESCO-recognized handloom weaves known for their distinct geometric patterns dyed into silk.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Pochampally_Saree.jpg/800px-Pochampally_Saree.jpg",
      },
      {
        id: "laad-bazaar",
        name: "Laad Bazaar",
        description: "A historic market street renowned for its glittering lacquer and glass bangles.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Laad_Bazaar_Hyderabad.jpg/800px-Laad_Bazaar_Hyderabad.jpg",
      },
      {
        id: "tollywood",
        name: "Telugu Cinema (Tollywood)",
        description: "The massive film production center, a heartbeat of Indian cinema and culture.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Ramoji_Film_City_Entrance.jpg/800px-Ramoji_Film_City_Entrance.jpg",
      },
      {
        id: "numaish",
        name: "Numaish Exhibition",
        description: "The annual All India Industrial Exhibition, a winter carnival of commerce and joy.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Numaish_Hyderabad.jpg/800px-Numaish_Hyderabad.jpg",
      },
      {
        id: "tehzeeb",
        name: "Nizami Tehzeeb",
        description: "The legendary etiquette, politeness, and refined hospitality of Hyderabad culture.",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "kalamkari",
        name: "Kalamkari Art",
        description: "Traditional hand-painted or block-printed organic textiles depicting ancient epics.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Kalamkari_work.jpg/800px-Kalamkari_work.jpg",
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
        description: "The iconic four-minaret mosque built in 1591, the global symbol of Hyderabad.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Charminar_Hyderabad_1.jpg/800px-Charminar_Hyderabad_1.jpg",
      },
      {
        id: "golconda",
        name: "Golconda Fort",
        description: "A majestic citadel known for its diamond trade history and ingenious acoustic engineering.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Golconda_Fort_Hyderabad.jpg/800px-Golconda_Fort_Hyderabad.jpg",
      },
      {
        id: "qutb-shahi",
        name: "Qutb Shahi Tombs",
        description: "The grand, domed mausoleums of the seven Qutb Shahi rulers, blending Persian and Indian styles.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Qutb_Shahi_Tombs%2C_Hyderabad.jpg/800px-Qutb_Shahi_Tombs%2C_Hyderabad.jpg",
      },
      {
        id: "chowmahalla",
        name: "Chowmahalla Palace",
        description: "The magnificent seat of the Asaf Jahi dynasty, showcasing Nizam royal opulence.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Chowmahalla_Palace_Hyderabad.jpg/800px-Chowmahalla_Palace_Hyderabad.jpg",
      },
      {
        id: "salar-jung",
        name: "Salar Jung Museum",
        description: "One of the world's largest one-man collections of art and antiques from across the globe.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Salar_Jung_Museum_Hyderabad.jpg/800px-Salar_Jung_Museum_Hyderabad.jpg",
      },
      {
        id: "hussain-sagar",
        name: "Hussain Sagar Lake",
        description: "A massive heart-shaped lake connecting the twin cities, famous for its monolith Buddha statue.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Hussain_Sagar_Buddha_Statue.jpg/800px-Hussain_Sagar_Buddha_Statue.jpg",
      },
      {
        id: "birla-mandir",
        name: "Birla Mandir",
        description: "A stunning temple built entirely of white marble on a hill, offering panoramic city views.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Birla_Mandir_Hyderabad_Night.jpg/800px-Birla_Mandir_Hyderabad_Night.jpg",
      },
      {
        id: "falaknuma",
        name: "Taj Falaknuma Palace",
        description: "The 'Mirror of the Sky', a stunning Italian marble palace that is now a luxury heritage hotel.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Falaknuma_Palace_Hyderabad.jpg/800px-Falaknuma_Palace_Hyderabad.jpg",
      },
      {
        id: "makkah-masjid",
        name: "Makkah Masjid",
        description: "One of India's oldest and largest mosques, with bricks made from soil brought from Mecca.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Mecca_Masjid_Hyderabad.jpg/800px-Mecca_Masjid_Hyderabad.jpg",
      },
      {
        id: "taramati",
        name: "Taramati Baradari",
        description: "An historic sarai (caravanserai) pavilion built on a hilltop with excellent acoustics.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Taramati_Baradari_Hyderabad.jpg/800px-Taramati_Baradari_Hyderabad.jpg",
      },
      {
        id: "paigah",
        name: "Paigah Tombs",
        description: "The necropolis of the noble Paigah family, noted for intricate stucco work and marble carvings.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Paigah_Tombs_Hyderabad.jpg/800px-Paigah_Tombs_Hyderabad.jpg",
      },
      {
        id: "zoo",
        name: "Nehru Zoological Park",
        description: "A massive 380-acre zoo with open enclosures, safaris, and a nocturnal house.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Nehru_Zoological_Park_Entrance.jpg/800px-Nehru_Zoological_Park_Entrance.jpg",
      },
      {
        id: "ntr-gardens",
        name: "NTR Gardens",
        description: "A popular urban park near Hussain Sagar lake with rides and attractions.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/NTR_Gardens_Hyderabad.jpg/800px-NTR_Gardens_Hyderabad.jpg",
      },
      {
        id: "lumbini",
        name: "Lumbini Park",
        description: "An urban park next to the lake, famous for its evening laser shows and boating.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Lumbini_Park_Hyderabad.jpg/800px-Lumbini_Park_Hyderabad.jpg",
      },
      {
        id: "gandipet",
        name: "Osman Sagar (Gandipet)",
        description: "A historic reservoir and popular picnic spot located on the city's outskirts.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Osman_Sagar_Lake_Hyderabad.jpg/800px-Osman_Sagar_Lake_Hyderabad.jpg",
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
        name: "HITEC City (Cyber Towers)",
        description: "The iconic Cyber Towers building that marked the beginning of Hyderabad's tech revolution.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Cyber_Towers_Hyderabad.jpg/800px-Cyber_Towers_Hyderabad.jpg",
      },
      {
        id: "t-hub",
        name: "T-Hub 2.0",
        description: "The world's largest innovation campus and startup incubator, a massive architectural landmark.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/T-Hub_Hyderabad.jpg/800px-T-Hub_Hyderabad.jpg",
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
        description: "A modern, premium office complex in HITEC City housing major global corporations.",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "google",
        name: "Google Office",
        description: "One of Google's largest and most significant offices outside the US.",
        image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "microsoft",
        name: "Microsoft IDC",
        description: "Microsoft's India Development Center campus, a key hub for global R&D.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "knowledge-city",
        name: "Knowledge City",
        description: "A major hub for life sciences, pharma, and technology companies.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "raheja",
        name: "Mindspace IT Park",
        description: "A large, integrated business park hosting numerous multinational tech companies.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Mindspace_Hyderabad.jpg/800px-Mindspace_Hyderabad.jpg",
      },
      {
        id: "wework",
        name: "WeWork Galaxy",
        description: "A prominent co-working space building in the heart of the Financial District.",
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "financial-dist",
        name: "Financial District Skyline",
        description: "The modern high-rise skyline hosting global banking and financial institutions.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Financial_District_Hyderabad.jpg/800px-Financial_District_Hyderabad.jpg",
      },
      {
        id: "t-works",
        name: "T-Works",
        description: "India's largest prototyping center, a hub for hardware innovation and makers.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "dlf",
        name: "DLF Cyber City",
        description: "An expansive IT Special Economic Zone (SEZ) housing major tech firms.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
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
        description: "Famous for its unique rock formations, popular for bouldering, rappelling, and trekking.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Khajaguda_Rocks.jpg/800px-Khajaguda_Rocks.jpg",
      },
      {
        id: "ramoji",
        name: "Ramoji Film City",
        description: "The world's largest integrated film city complex with themed attractions and adventure zones.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Ramoji_Film_City.jpg/800px-Ramoji_Film_City.jpg",
      },
      {
        id: "ananthagiri",
        name: "Ananthagiri Hills",
        description: "A dense forest area offering trekking trails, ancient caves, and a cool weekend escape.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Ananthagiri_Hills.jpg/800px-Ananthagiri_Hills.jpg",
      },
      {
        id: "kbr",
        name: "KBR National Park",
        description:
          "A large urban national park right inside the city, offering walking and jogging tracks in nature.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/KBR_National_Park.jpg/800px-KBR_National_Park.jpg",
      },
      {
        id: "durgam",
        name: "Durgam Cheruvu Kayaking",
        description: "Adventure activities like kayaking and boating on the 'Secret Lake' near the cable bridge.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Durgam_Cheruvu_Lake.jpg/800px-Durgam_Cheruvu_Lake.jpg",
      },
      {
        id: "bhongir",
        name: "Bhongir Fort Trek",
        description: "A challenging trek up a massive single monolithic rock to reach the hilltop fort.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Bhongir_Fort.jpg/800px-Bhongir_Fort.jpg",
      },
      {
        id: "mrugavani",
        name: "Mrugavani National Park",
        description: "A wildlife sanctuary offering safaris to spot deer, peacocks, and other native fauna.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Mrugavani_National_Park.jpg/800px-Mrugavani_National_Park.jpg",
      },
      {
        id: "paintball",
        name: "Paintball Arenas",
        description: "Multiple arenas across the city offering high-energy tactical paintball games.",
        image: "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "camping",
        name: "Lakeside Camping",
        description: "Organized camping experiences near reservoirs like Gandipet under the stars.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "snowworld",
        name: "Snow World",
        description: "An indoor theme park with artificial snow, slides, and ice activities to beat the heat.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Snow_World_Hyderabad.jpg/800px-Snow_World_Hyderabad.jpg",
      },
      {
        id: "wonderla",
        name: "Wonderla Amusement Park",
        description: "A large amusement park with high-thrill roller coasters and land rides.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Wonderla_Hyderabad.jpg/800px-Wonderla_Hyderabad.jpg",
      },
      {
        id: "safari",
        name: "Lion Safari (Zoo)",
        description: "A dedicated safari zone within the Nehru Zoological Park to see big cats in open areas.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Lion_Safari_Hyderabad.jpg/800px-Lion_Safari_Hyderabad.jpg",
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
        description: "One of the largest malls in India, a massive destination for shopping, food, and entertainment.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Sarath_City_Capital_Mall.jpg/800px-Sarath_City_Capital_Mall.jpg",
      },
      {
        id: "ikea",
        name: "IKEA Hyderabad",
        description: "The Swedish furniture giant's massive store, also famous for its restaurant and meatballs.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/IKEA_Hyderabad.jpg/800px-IKEA_Hyderabad.jpg",
      },
      {
        id: "roastery",
        name: "Roastery Coffee House",
        description: "A very popular artisan coffee roastery set in a beautiful bungalow amid greenery.",
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "inorbit",
        name: "Inorbit Mall Cyberabad",
        description: "A premium mall in HITEC City offering great views of Durgam Cheruvu lake.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Inorbit_Mall_Hyderabad.jpg/800px-Inorbit_Mall_Hyderabad.jpg",
      },
      {
        id: "concu",
        name: "Conçu Patisserie",
        description: "An elegant patisserie in Jubilee Hills famous for its exquisite European-style desserts.",
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "autumnleaf",
        name: "Autumn Leaf Cafe",
        description: "A charming cafe in Jubilee Hills with vintage decor and outdoor seating under trees.",
        image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "olive",
        name: "Olive Bistro",
        description: "A beautiful Mediterranean-themed restaurant overlooking Durgam Cheruvu lake.",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "hardrock",
        name: "Hard Rock Cafe",
        description: "The global chain known for its rock 'n' roll memorabilia, burgers, and live music.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Hard_Rock_Cafe_Hyderabad.jpg/800px-Hard_Rock_Cafe_Hyderabad.jpg",
      },
      {
        id: "farzi",
        name: "Farzi Cafe",
        description: "A modern Indian bistro known for its molecular gastronomy and unique presentations.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "social",
        name: "Mindspace Social",
        description: "A sprawling, energetic workspace-cum-bar/cafe popular with the tech crowd.",
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "gvk",
        name: "GVK One Mall",
        description: "A luxury mall in Banjara Hills housing premium international and domestic brands.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/GVK_One_Mall.jpg/800px-GVK_One_Mall.jpg",
      },
      {
        id: "levas",
        name: "Lé Vantage Café Bar",
        description: "A European-styled cafe and bar with a distinct stone facade and cozy ambiance.",
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
];
