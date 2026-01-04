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
        image: "https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "biryani-bawarchi",
        name: "Bawarchi Biryani",
        description: "RTC Cross Roads icon serving the city's most beloved spice blend.",
        image: "https://images.pexels.com/photos/8992474/pexels-photo-8992474.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "haleem",
        name: "Pista House Haleem",
        description: "A seasonal Ramadan masterpiece of slow-cooked meat and wheat.",
        image: "https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "irani-chai",
        name: "Irani Chai at Nimrah",
        description: "Charminar's soul served in a cup with Osmania biscuits.",
        image: "https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "qubani",
        name: "Qubani Ka Meetha",
        description: "Royal stewed apricot dessert crowned with thick cream.",
        image: "https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "nihari",
        name: "Nihari at Shadab",
        description: "A rich, slow-cooked dawn stew for the true early risers.",
        image: "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "lukhmi",
        name: "Lukhmi",
        description: "The aristocratic Deccani version of the savory meat samosa.",
        image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "double-roti",
        name: "Double Ka Meetha",
        description: "Saffron-infused fried bread pudding with dry fruits.",
        image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "mirchi-bajji",
        name: "Mirchi Bajji",
        description: "Street-side thunder — stuffed chillies fried to golden perfection.",
        image: "https://images.pexels.com/photos/5560552/pexels-photo-5560552.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "boti-kebab",
        name: "Boti Kebab",
        description: "Tender, charcoal-grilled meat cubes marinated in secret spices.",
        image: "https://images.pexels.com/photos/6210747/pexels-photo-6210747.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "pathar-gosht",
        name: "Pathar Ka Gosht",
        description: "Mutton seared on hot granite stones for a smoky, tender finish.",
        image: "https://images.pexels.com/photos/5419336/pexels-photo-5419336.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "khubani-lassi",
        name: "Khubani Lassi",
        description: "Creamy yogurt blended with sweet, sun-dried apricots.",
        image: "https://images.pexels.com/photos/5945829/pexels-photo-5945829.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "sheer-khurma",
        name: "Sheer Khurma",
        description: "Vermicelli pudding with dates and nuts, the heart of Eid.",
        image: "https://images.pexels.com/photos/6210747/pexels-photo-6210747.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "mandi",
        name: "Barkas Mandi",
        description: "Traditional Arabian meat and rice, a Gachibowli favorite.",
        image: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "osmania-biscuit",
        name: "Osmania Biscuits",
        description: "The iconic salt-and-sweet tea companion of Hyderabad.",
        image: "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=800",
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
        image: "https://images.pexels.com/photos/3714450/pexels-photo-3714450.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "bathukamma",
        name: "Bathukamma",
        description: "Telangana's grand floral festival celebrating nature.",
        image: "https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "qawwali",
        name: "Deccani Qawwali",
        description: "Soul-stirring Sufi melodies at the city's ancient dargahs.",
        image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "kuchipudi",
        name: "Kuchipudi Dance",
        description: "Classical Telugu dance blending rhythm and storytelling.",
        image: "https://images.pexels.com/photos/3738388/pexels-photo-3738388.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "pearls",
        name: "Hyderabadi Pearls",
        description: "Exquisite craftsmanship from the world's pearl capital.",
        image: "https://images.pexels.com/photos/265856/pexels-photo-265856.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "bidri",
        name: "Bidriware Art",
        description: "Unique silver-on-black metalwork from the Deccan.",
        image: "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "pochampally",
        name: "Pochampally Ikat",
        description: "UNESCO-recognized handloom weaves with geometric soul.",
        image: "https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "laad-bazaar",
        name: "Laad Bazaar",
        description: "Centuries-old bangles market sparkling near Charminar.",
        image: "https://images.pexels.com/photos/5711857/pexels-photo-5711857.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "tollywood",
        name: "Telugu Cinema",
        description: "The high-octane creative heartbeat of Indian film.",
        image: "https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "numaish",
        name: "Numaish Exhibition",
        description: "The annual winter carnival of commerce and joy.",
        image: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "tehzeeb",
        name: "Nizami Tehzeeb",
        description: "The legendary etiquette and hospitality of Hyderabad.",
        image: "https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "kalamkari",
        name: "Kalamkari Art",
        description: "Hand-painted organic textiles depicting ancient epics.",
        image: "https://images.pexels.com/photos/3373727/pexels-photo-3373727.jpeg?auto=compress&cs=tinysrgb&w=800",
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
        image: "https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "golconda",
        name: "Golconda Fort",
        description: "A diamond-rich citadel with legendary acoustic marvels.",
        image: "https://images.pexels.com/photos/3581867/pexels-photo-3581867.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "qutb-shahi",
        name: "Qutb Shahi Tombs",
        description: "Magnificent domed mausoleums of the seven sultans.",
        image: "https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "chowmahalla",
        name: "Chowmahalla Palace",
        description: "The opulent former official seat of the Nizams.",
        image: "https://images.pexels.com/photos/2583852/pexels-photo-2583852.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "salar-jung",
        name: "Salar Jung Museum",
        description: "One of the world's largest private art collections.",
        image: "https://images.pexels.com/photos/2306203/pexels-photo-2306203.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "hussain-sagar",
        name: "Hussain Sagar",
        description: "A heart-shaped lake featuring the giant Buddha statue.",
        image: "https://images.pexels.com/photos/3581365/pexels-photo-3581365.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "birla-mandir",
        name: "Birla Mandir",
        description: "Hilltop marble temple with panoramic sunset views.",
        image: "https://images.pexels.com/photos/3581867/pexels-photo-3581867.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "falaknuma",
        name: "Falaknuma Palace",
        description: "The 'Mirror of the Sky' palace now hosting royal luxury.",
        image: "https://images.pexels.com/photos/2583852/pexels-photo-2583852.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "makkah-masjid",
        name: "Makkah Masjid",
        description: "One of India's oldest and grandest Islamic structures.",
        image: "https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "taramati",
        name: "Taramati Baradari",
        description: "An ancient hilltop pavilion for the city's royal musicians.",
        image: "https://images.pexels.com/photos/2306201/pexels-photo-2306201.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "paigah",
        name: "Paigah Tombs",
        description: "Unique marble necropolis with intricate stucco work.",
        image: "https://images.pexels.com/photos/3581365/pexels-photo-3581365.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "zoo",
        name: "Nehru Zoological Park",
        description: "A sprawling 380-acre wildlife sanctuary and safari.",
        image:
          "https://images.pexels.com/photos/86596/owl-bird-eyes-eagle-owl-86596.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "ntr-gardens",
        name: "NTR Gardens",
        description: "A lush urban getaway near the Hussain Sagar lake.",
        image: "https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "lumbini",
        name: "Lumbini Park",
        description: "The city's favorite laser show and boat ride hub.",
        image: "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "gandipet",
        name: "Gandipet Lake",
        description: "The historic Osman Sagar reservoir at the city's edge.",
        image: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=800",
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
        image: "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "t-hub",
        name: "T-Hub 2.0",
        description: "India's largest and boldest startup incubator ecosystem.",
        image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "amazon",
        name: "Amazon Campus",
        description: "The tech giant's massive, world-class Gachibowli hub.",
        image: "https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "skyview",
        name: "The Skyview",
        description: "Futuristic glass towers redefining the modern tech office.",
        image: "https://images.pexels.com/photos/830891/pexels-photo-830891.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "google",
        name: "Google Office",
        description: "Expanding the digital frontier from the heart of HITEC City.",
        image: "https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "microsoft",
        name: "Microsoft IDC",
        description: "Innovation engine for cloud and AI technology global products.",
        image: "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "knowledge-city",
        name: "Knowledge City",
        description: "A collaborative hub for global IT and pharma giants.",
        image: "https://images.pexels.com/photos/2346216/pexels-photo-2346216.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "raheja",
        name: "Mindspace IT Park",
        description: "A premier integrated business district for tech leaders.",
        image: "https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "wework",
        name: "WeWork Galaxy",
        description: "The dynamic center of the city's co-working culture.",
        image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "financial-dist",
        name: "Financial District",
        description: "The high-rise powerhouse of banking and global tech.",
        image: "https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "t-works",
        name: "T-Works",
        description: "India's largest prototyping center for new-age makers.",
        image:
          "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "dlf",
        name: "DLF Cyber City",
        description: "A major commercial hub for enterprise software giants.",
        image: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800",
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
        description: "Bouldering and sunrise trekking for the city's thrill-seekers.",
        image: "https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "ramoji",
        name: "Ramoji Film City",
        description: "World's largest film studio complex and theme park.",
        image: "https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "ananthagiri",
        name: "Ananthagiri Hills",
        description: "A misty weekend escape into pure nature and forest trails.",
        image: "https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "kbr",
        name: "KBR National Park",
        description: "An urban jungle sanctuary for joggers and nature lovers.",
        image: "https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "durgam",
        name: "Durgam Cheruvu",
        description: "Kayaking and lake-front walks near the iconic cable bridge.",
        image: "https://images.pexels.com/photos/1029240/pexels-photo-1029240.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "bhongir",
        name: "Bhongir Fort",
        description: "A massive monolithic climb for the ultimate panorama.",
        image: "https://images.pexels.com/photos/3581365/pexels-photo-3581365.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "mrugavani",
        name: "Mrugavani Park",
        description: "Wild Deccan landscapes and spotted deer safaris.",
        image: "https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "paintball",
        name: "District 12",
        description: "High-octane paintball battles and combat training.",
        image: "https://images.pexels.com/photos/209948/pexels-photo-209948.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "gandipet-camp",
        name: "Gandipet Camping",
        description: "Lakeside camping under the vast Deccan night sky.",
        image: "https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "snowworld",
        name: "Snow World",
        description: "India's first snow theme park in a tropical city.",
        image: "https://images.pexels.com/photos/773594/pexels-photo-773594.jpeg?auto=compress&cs=tinysrgb&w=800",
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
        image: "https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "ikea",
        name: "IKEA Hyderabad",
        description: "The flagship Swedish experience for home and food.",
        image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "roastery",
        name: "Roastery Coffee",
        description: "The city's favorite third-wave coffee house.",
        image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "inorbit",
        name: "Inorbit Mall",
        description: "Luxury retail meeting the stunning Durgam Cheruvu view.",
        image: "https://images.pexels.com/photos/3201772/pexels-photo-3201772.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "concu",
        name: "Conçu Patisserie",
        description: "Exquisite French pastries in the heart of Jubilee Hills.",
        image: "https://images.pexels.com/photos/1028704/pexels-photo-1028704.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "autumnleaf",
        name: "Autumn Leaf Cafe",
        description: "A hidden garden sanctuary for comfort and calm.",
        image: "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "olive",
        name: "Olive Bistro",
        description: "Sunset dining with white-washed Mediterranean soul.",
        image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "hardrock",
        name: "Hard Rock Cafe",
        description: "The legendary home of rock and roll and global food.",
        image: "https://images.pexels.com/photos/2067636/pexels-photo-2067636.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "farzi",
        name: "Farzi Cafe",
        description: "A fusion feast where science meets the Indian kitchen.",
        image: "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "social",
        name: "Mindspace Social",
        description: "The workspace by day and high-energy bar by night.",
        image: "https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    ],
  },
];
