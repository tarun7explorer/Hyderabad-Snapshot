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
        image: "https://cdn.pixabay.com/photo/2023/03/30/15/28/biryani-7888180_960_720.jpg",
      },
      {
        id: "biryani-bawarchi",
        name: "Bawarchi Biryani",
        description: "RTC Cross Roads icon serving the city's most beloved spice blend.",
        image: "https://cdn.pixabay.com/photo/2022/06/10/05/32/biryani-7253751_960_720.jpg",
      },
      {
        id: "haleem",
        name: "Pista House Haleem",
        description: "A seasonal Ramadan masterpiece of slow-cooked meat and wheat.",
        image: "https://cdn.pixabay.com/photo/2020/03/14/10/05/food-4929627_960_720.jpg",
      },
      {
        id: "irani-chai",
        name: "Irani Chai at Nimrah",
        description: "Charminar's soul served in a cup with Osmania biscuits.",
        image: "https://cdn.pixabay.com/photo/2016/11/22/18/52/tea-1850478_960_720.jpg",
      },
      {
        id: "qubani",
        name: "Qubani Ka Meetha",
        description: "Royal stewed apricot dessert crowned with thick cream.",
        image: "https://cdn.pixabay.com/photo/2020/07/19/12/00/apricot-5419425_960_720.jpg",
      },
      {
        id: "nihari",
        name: "Nihari at Shadab",
        description: "A rich, slow-cooked dawn stew for the true early risers.",
        image: "https://cdn.pixabay.com/photo/2021/03/23/14/39/curry-6118073_960_720.jpg",
      },
      {
        id: "lukhmi",
        name: "Lukhmi",
        description: "The aristocratic Deccani version of the savory meat samosa.",
        image: "https://cdn.pixabay.com/photo/2020/04/06/15/33/samosa-5009249_960_720.jpg",
      },
      {
        id: "double-roti",
        name: "Double Ka Meetha",
        description: "Saffron-infused fried bread pudding with dry fruits.",
        image: "https://cdn.pixabay.com/photo/2017/11/08/00/07/pudding-2929066_960_720.jpg",
      },
      {
        id: "mirchi-bajji",
        name: "Mirchi Bajji",
        description: "Street-side thunder — stuffed chillies fried to golden perfection.",
        image: "https://cdn.pixabay.com/photo/2020/08/08/07/39/chilli-5471945_960_720.jpg",
      },
      {
        id: "boti-kebab",
        name: "Boti Kebab",
        description: "Tender, charcoal-grilled meat cubes marinated in secret spices.",
        image: "https://cdn.pixabay.com/photo/2017/02/10/16/35/kebab-2055602_960_720.jpg",
      },
      {
        id: "pathar-gosht",
        name: "Pathar Ka Gosht",
        description: "Mutton seared on hot granite stones for a smoky, tender finish.",
        image: "https://cdn.pixabay.com/photo/2019/09/03/19/27/grilled-meat-4450218_960_720.jpg",
      },
      {
        id: "khubani-lassi",
        name: "Khubani Lassi",
        description: "Creamy yogurt blended with sweet, sun-dried apricots.",
        image: "https://cdn.pixabay.com/photo/2017/07/05/15/41/smoothie-2474824_960_720.jpg",
      },
      {
        id: "sheer-khurma",
        name: "Sheer Khurma",
        description: "Vermicelli pudding with dates and nuts, the heart of Eid.",
        image: "https://cdn.pixabay.com/photo/2020/05/19/12/28/kheer-5191021_960_720.jpg",
      },
      {
        id: "mandi",
        name: "Barkas Mandi",
        description: "Traditional Arabian meat and rice, a Gachibowli favorite.",
        image: "https://cdn.pixabay.com/photo/2021/01/16/09/05/rice-5921878_960_720.jpg",
      },
      {
        id: "osmania-biscuit",
        name: "Osmania Biscuits",
        description: "The iconic salt-and-sweet tea companion of Hyderabad.",
        image: "https://cdn.pixabay.com/photo/2017/08/11/19/36/biscuits-2632047_960_720.jpg",
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
        image: "https://cdn.pixabay.com/photo/2020/02/26/07/52/festival-4880378_960_720.jpg",
      },
      {
        id: "bathukamma",
        name: "Bathukamma",
        description: "Telangana's grand floral festival celebrating nature.",
        image: "https://cdn.pixabay.com/photo/2019/10/06/16/26/flowers-4530217_960_720.jpg",
      },
      {
        id: "qawwali",
        name: "Deccani Qawwali",
        description: "Soul-stirring Sufi melodies at the city's ancient dargahs.",
        image: "https://cdn.pixabay.com/photo/2016/11/29/12/13/musician-1869793_960_720.jpg",
      },
      {
        id: "kuchipudi",
        name: "Kuchipudi Dance",
        description: "Classical Telugu dance blending rhythm and storytelling.",
        image: "https://cdn.pixabay.com/photo/2019/01/29/18/05/kathak-3962231_960_720.jpg",
      },
      {
        id: "pearls",
        name: "Hyderabadi Pearls",
        description: "Exquisite craftsmanship from the world's pearl capital.",
        image: "https://cdn.pixabay.com/photo/2017/08/06/22/01/jewelry-2596677_960_720.jpg",
      },
      {
        id: "bidri",
        name: "Bidriware Art",
        description: "Unique silver-on-black metalwork from the Deccan.",
        image: "https://cdn.pixabay.com/photo/2016/03/27/18/54/vase-1283678_960_720.jpg",
      },
      {
        id: "pochampally",
        name: "Pochampally Ikat",
        description: "UNESCO-recognized handloom weaves with geometric soul.",
        image: "https://cdn.pixabay.com/photo/2018/04/05/14/09/fabric-3292321_960_720.jpg",
      },
      {
        id: "laad-bazaar",
        name: "Laad Bazaar",
        description: "Centuries-old bangles market sparkling near Charminar.",
        image: "https://cdn.pixabay.com/photo/2019/10/22/07/19/bangles-4567568_960_720.jpg",
      },
      {
        id: "tollywood",
        name: "Telugu Cinema",
        description: "The high-octane creative heartbeat of Indian film.",
        image: "https://cdn.pixabay.com/photo/2016/02/01/12/33/film-1173262_960_720.jpg",
      },
      {
        id: "numaish",
        name: "Numaish Exhibition",
        description: "The annual winter carnival of commerce and joy.",
        image: "https://cdn.pixabay.com/photo/2016/11/23/15/32/christmas-1853535_960_720.jpg",
      },
      {
        id: "tehzeeb",
        name: "Nizami Tehzeeb",
        description: "The legendary etiquette and hospitality of Hyderabad.",
        image: "https://cdn.pixabay.com/photo/2017/08/01/11/48/woman-2564660_960_720.jpg",
      },
      {
        id: "kalamkari",
        name: "Kalamkari Art",
        description: "Hand-painted organic textiles depicting ancient epics.",
        image: "https://cdn.pixabay.com/photo/2018/04/26/16/56/pattern-3351799_960_720.jpg",
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
        image: "https://cdn.pixabay.com/photo/2020/02/12/13/29/charminar-4842751_960_720.jpg",
      },
      {
        id: "golconda",
        name: "Golconda Fort",
        description: "A diamond-rich citadel with legendary acoustic marvels.",
        image: "https://cdn.pixabay.com/photo/2019/02/13/12/00/golconda-fort-3992421_960_720.jpg",
      },
      {
        id: "qutb-shahi",
        name: "Qutb Shahi Tombs",
        description: "Magnificent domed mausoleums of the seven sultans.",
        image: "https://cdn.pixabay.com/photo/2020/02/12/13/31/tomb-4842754_960_720.jpg",
      },
      {
        id: "chowmahalla",
        name: "Chowmahalla Palace",
        description: "The opulent former official seat of the Nizams.",
        image: "https://cdn.pixabay.com/photo/2019/12/09/14/28/palace-4683398_960_720.jpg",
      },
      {
        id: "salar-jung",
        name: "Salar Jung Museum",
        description: "One of the world's largest private art collections.",
        image: "https://cdn.pixabay.com/photo/2016/10/13/09/59/museum-1737581_960_720.jpg",
      },
      {
        id: "hussain-sagar",
        name: "Hussain Sagar",
        description: "A heart-shaped lake featuring the giant Buddha statue.",
        image: "https://cdn.pixabay.com/photo/2020/02/12/13/30/hussain-sagar-4842753_960_720.jpg",
      },
      {
        id: "birla-mandir",
        name: "Birla Mandir",
        description: "Hilltop marble temple with panoramic sunset views.",
        image: "https://cdn.pixabay.com/photo/2020/01/15/18/49/temple-4768610_960_720.jpg",
      },
      {
        id: "falaknuma",
        name: "Falaknuma Palace",
        description: "The 'Mirror of the Sky' palace now hosting royal luxury.",
        image: "https://cdn.pixabay.com/photo/2017/08/06/12/52/taj-mahal-2595566_960_720.jpg",
      },
      {
        id: "makkah-masjid",
        name: "Makkah Masjid",
        description: "One of India's oldest and grandest Islamic structures.",
        image: "https://cdn.pixabay.com/photo/2018/10/30/16/06/mosque-3785954_960_720.jpg",
      },
      {
        id: "taramati",
        name: "Taramati Baradari",
        description: "An ancient hilltop pavilion for the city's royal musicians.",
        image: "https://cdn.pixabay.com/photo/2018/12/04/15/42/architecture-3856879_960_720.jpg",
      },
      {
        id: "paigah",
        name: "Paigah Tombs",
        description: "Unique marble necropolis with intricate stucco work.",
        image: "https://cdn.pixabay.com/photo/2019/11/13/12/43/architecture-4623573_960_720.jpg",
      },
      {
        id: "zoo",
        name: "Nehru Zoological Park",
        description: "A sprawling 380-acre wildlife sanctuary and safari.",
        image: "https://cdn.pixabay.com/photo/2020/02/12/13/32/zoo-4842759_960_720.jpg",
      },
      {
        id: "ntr-gardens",
        name: "NTR Gardens",
        description: "A lush urban getaway near the Hussain Sagar lake.",
        image: "https://cdn.pixabay.com/photo/2016/11/29/03/53/garden-1867490_960_720.jpg",
      },
      {
        id: "lumbini",
        name: "Lumbini Park",
        description: "The city's favorite laser show and boat ride hub.",
        image: "https://cdn.pixabay.com/photo/2017/11/07/00/07/fountain-2925250_960_720.jpg",
      },
      {
        id: "gandipet",
        name: "Gandipet Lake",
        description: "The historic Osman Sagar reservoir at the city's edge.",
        image: "https://cdn.pixabay.com/photo/2016/11/21/16/02/lake-1846392_960_720.jpg",
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
        image: "https://cdn.pixabay.com/photo/2017/08/06/22/20/architecture-2596698_960_720.jpg",
      },
      {
        id: "t-hub",
        name: "T-Hub 2.0",
        description: "India's largest and boldest startup incubator ecosystem.",
        image: "https://cdn.pixabay.com/photo/2016/11/19/14/00/office-1839878_960_720.jpg",
      },
      {
        id: "amazon",
        name: "Amazon Campus",
        description: "The tech giant's massive, world-class Gachibowli hub.",
        image: "https://cdn.pixabay.com/photo/2016/11/29/06/18/home-office-1868644_960_720.jpg",
      },
      {
        id: "skyview",
        name: "The Skyview",
        description: "Futuristic glass towers redefining the modern tech office.",
        image: "https://cdn.pixabay.com/photo/2017/01/14/12/48/skyscrapers-1979720_960_720.jpg",
      },
      {
        id: "google",
        name: "Google Office",
        description: "Expanding the digital frontier from the heart of HITEC City.",
        image: "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg",
      },
      {
        id: "microsoft",
        name: "Microsoft IDC",
        description: "Innovation engine for cloud and AI technology global products.",
        image: "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_960_720.jpg",
      },
      {
        id: "knowledge-city",
        name: "Knowledge City",
        description: "A collaborative hub for global IT and pharma giants.",
        image: "https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181960_960_720.jpg",
      },
      {
        id: "raheja",
        name: "Mindspace IT Park",
        description: "A premier integrated business district for tech leaders.",
        image: "https://cdn.pixabay.com/photo/2015/09/04/23/14/business-922530_960_720.jpg",
      },
      {
        id: "wework",
        name: "WeWork Galaxy",
        description: "The dynamic center of the city's co-working culture.",
        image: "https://cdn.pixabay.com/photo/2015/07/28/22/05/office-865091_960_720.jpg",
      },
      {
        id: "financial-dist",
        name: "Financial District",
        description: "The high-rise powerhouse of banking and global tech.",
        image: "https://cdn.pixabay.com/photo/2016/11/22/19/08/building-1850129_960_720.jpg",
      },
      {
        id: "t-works",
        name: "T-Works",
        description: "India's largest prototyping center for new-age makers.",
        image: "https://cdn.pixabay.com/photo/2016/11/19/15/32/laptop-1841158_960_720.jpg",
      },
      {
        id: "dlf",
        name: "DLF Cyber City",
        description: "A major commercial hub for enterprise software giants.",
        image: "https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_960_720.jpg",
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
        image: "https://cdn.pixabay.com/photo/2016/08/01/20/34/girl-1562091_960_720.jpg",
      },
      {
        id: "ramoji",
        name: "Ramoji Film City",
        description: "World's largest film studio complex and theme park.",
        image: "https://cdn.pixabay.com/photo/2016/02/01/12/33/film-1173262_960_720.jpg",
      },
      {
        id: "ananthagiri",
        name: "Ananthagiri Hills",
        description: "A misty weekend escape into pure nature and forest trails.",
        image: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_960_720.jpg",
      },
      {
        id: "kbr",
        name: "KBR National Park",
        description: "An urban jungle sanctuary for joggers and nature lovers.",
        image: "https://cdn.pixabay.com/photo/2016/07/11/22/52/peacock-1510484_960_720.jpg",
      },
      {
        id: "durgam",
        name: "Durgam Cheruvu",
        description: "Kayaking and lake-front walks near the iconic cable bridge.",
        image: "https://cdn.pixabay.com/photo/2016/01/09/18/27/canoe-1130547_960_720.jpg",
      },
      {
        id: "bhongir",
        name: "Bhongir Fort",
        description: "A massive monolithic climb for the ultimate panorama.",
        image: "https://cdn.pixabay.com/photo/2017/02/15/10/39/landscape-2068916_960_720.jpg",
      },
      {
        id: "mrugavani",
        name: "Mrugavani Park",
        description: "Wild Deccan landscapes and spotted deer safaris.",
        image: "https://cdn.pixabay.com/photo/2018/04/07/08/28/deer-3297176_960_720.jpg",
      },
      {
        id: "paintball",
        name: "District 12",
        description: "High-octane paintball battles and combat training.",
        image: "https://cdn.pixabay.com/photo/2017/06/23/03/34/paintball-2433120_960_720.jpg",
      },
      {
        id: "gandipet-camp",
        name: "Gandipet Camping",
        description: "Lakeside camping under the vast Deccan night sky.",
        image: "https://cdn.pixabay.com/photo/2016/11/29/04/19/beach-1867271_960_720.jpg",
      },
      {
        id: "snowworld",
        name: "Snow World",
        description: "India's first snow theme park in a tropical city.",
        image: "https://cdn.pixabay.com/photo/2016/12/11/12/02/mountains-1899264_960_720.jpg",
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
        image: "https://cdn.pixabay.com/photo/2016/11/22/19/15/hand-1850120_960_720.jpg",
      },
      {
        id: "ikea",
        name: "IKEA Hyderabad",
        description: "The flagship Swedish experience for home and food.",
        image: "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_960_720.jpg",
      },
      {
        id: "roastery",
        name: "Roastery Coffee",
        description: "The city's favorite third-wave coffee house.",
        image: "https://cdn.pixabay.com/photo/2015/05/07/13/46/coffee-756490_960_720.jpg",
      },
      {
        id: "inorbit",
        name: "Inorbit Mall",
        description: "Luxury retail meeting the stunning Durgam Cheruvu view.",
        image: "https://cdn.pixabay.com/photo/2017/08/06/06/47/shopping-2589014_960_720.jpg",
      },
      {
        id: "concu",
        name: "Conçu Patisserie",
        description: "Exquisite French pastries in the heart of Jubilee Hills.",
        image: "https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_960_720.jpg",
      },
      {
        id: "autumnleaf",
        name: "Autumn Leaf Cafe",
        description: "A hidden garden sanctuary for comfort and calm.",
        image: "https://cdn.pixabay.com/photo/2016/11/29/12/45/cafe-1869656_960_720.jpg",
      },
      {
        id: "olive",
        name: "Olive Bistro",
        description: "Sunset dining with white-washed Mediterranean soul.",
        image: "https://cdn.pixabay.com/photo/2015/09/14/11/43/restaurant-939434_960_720.jpg",
      },
      {
        id: "hardrock",
        name: "Hard Rock Cafe",
        description: "The legendary home of rock and roll and global food.",
        image: "https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_960_720.jpg",
      },
      {
        id: "farzi",
        name: "Farzi Cafe",
        description: "A fusion feast where science meets the Indian kitchen.",
        image: "https://cdn.pixabay.com/photo/2016/11/21/16/03/platter-2646871_960_720.jpg",
      },
      {
        id: "social",
        name: "Mindspace Social",
        description: "The workspace by day and high-energy bar by night.",
        image: "https://cdn.pixabay.com/photo/2016/11/29/03/53/beverages-1867429_960_720.jpg",
      },
    ],
  },
];
