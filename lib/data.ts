import { Listing, Host, Review } from "./types";

export const hosts: Host[] = [
  {
    id: "h1",
    name: "Sofia Martinez",
    avatar: "https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/canvas/2025/01/10/f6b2c297-42c0-4c3c-b460-c6ece84624f9_7aa62871.jpg?itok=Eu8_ev8G&v=1736502707",
    bio: "Hi! I'm Sofia, a passionate traveler turned host. I've been welcoming guests from around the world for over 5 years. I love sharing my beautiful properties and helping guests create unforgettable memories. I'm always available to offer local tips and recommendations!",
    responseRate: 98,
    responseTime: "within an hour",
    joinDate: "March 2019",
    isSuperhost: true,
    reviewCount: 247,
    rating: 4.97,
    listingIds: ["1", "2"],
  },
  {
    id: "h2",
    name: "James Chen",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/5/5c/James_Chen_Rosemead-26.jpg",
    bio: "Architecture enthusiast and design lover. My properties are carefully curated spaces that blend comfort with aesthetics. I believe every stay should feel like a retreat. Based in California, I manage properties across the West Coast.",
    responseRate: 95,
    responseTime: "within a few hours",
    joinDate: "June 2018",
    isSuperhost: true,
    reviewCount: 189,
    rating: 4.95,
    listingIds: ["3", "4"],
  },
  {
    id: "h3",
    name: "Emma Thompson",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Emma_Thompson_at_the_78th_Locarno_Film_Festival_photocall_01_%28cropped%29.jpg",
    bio: "Former interior designer with a passion for creating cozy, welcoming spaces. I've transformed each of my properties into a unique experience. Whether you're here for adventure or relaxation, I'll make sure your stay is perfect.",
    responseRate: 100,
    responseTime: "within an hour",
    joinDate: "January 2020",
    isSuperhost: true,
    reviewCount: 312,
    rating: 4.99,
    listingIds: ["5", "6"],
  },
  {
    id: "h4",
    name: "Marco Rossi",
    avatar: "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/4697391.png&w=350&h=254",
    bio: "Born and raised in Tuscany, I love sharing the beauty of Italy with visitors from around the world. My properties offer an authentic Italian experience with modern comforts. Benvenuti!",
    responseRate: 92,
    responseTime: "within a day",
    joinDate: "September 2017",
    isSuperhost: false,
    reviewCount: 98,
    rating: 4.88,
    listingIds: ["7", "8"],
  },
];

export const listings: Listing[] = [
  {
    id: "1",
    title: "Stunning Beachfront Villa with Infinity Pool",
    description:
      "Wake up to breathtaking ocean views in this luxurious beachfront villa. Featuring an infinity pool that merges with the horizon, a fully equipped gourmet kitchen, and direct beach access. The open-plan living area flows seamlessly to a spacious terrace perfect for sunset cocktails. Each bedroom is elegantly furnished with premium linens and en-suite bathrooms. This is the ultimate tropical escape.",
    location: "Malibu, California",
    city: "Malibu",
    country: "United States",
    price: 850,
    rating: 4.97,
    reviewCount: 124,
    image: "https://media.vrbo.com/lodging/35000000/34450000/34444400/34444384/69c72784.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
    images: [
      "https://media.vrbo.com/lodging/35000000/34450000/34444400/34444384/69c72784.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
      "/images/beachfront-villa-interior.jpg",
      "/images/beachfront-villa-pool.jpg",
      "/images/beachfront-villa-bedroom.jpg",
      "/images/beachfront-villa-kitchen.jpg",
    ],
    category: "Beachfront",
    type: "Villa",
    guests: 10,
    bedrooms: 5,
    bathrooms: 4,
    beds: 6,
    amenities: ["WiFi", "Pool", "Kitchen", "Air conditioning", "Washer", "Dryer", "Parking", "Hot tub", "BBQ grill", "Beach access", "Ocean view", "Gym"],
    hostId: "h1",
    isSuperhost: true,
    lat: 34.0259,
    lng: -118.7798,
  },
  {
    id: "2",
    title: "Cozy Mountain Cabin with Fireplace & Hot Tub",
    description:
      "Escape to this charming mountain cabin nestled among towering pines. The rustic-chic interior features exposed wooden beams, a stone fireplace, and plush furnishings. Step outside to your private hot tub under the stars. Perfect for skiing in winter and hiking in summer. The fully equipped kitchen and cozy reading nooks make this the ideal retreat for couples or small families.",
    location: "Aspen, Colorado",
    city: "Aspen",
    country: "United States",
    price: 420,
    rating: 4.95,
    reviewCount: 89,
    image: "https://www.aspentrailfinder.com/wp-content/uploads/2017/02/Grants-Cabin-Aspen-Mountain.jpg",
    images: [
      "https://www.aspentrailfinder.com/wp-content/uploads/2017/02/Grants-Cabin-Aspen-Mountain.jpg",
      "/images/mountain-cabin-interior.jpg",
      "/images/mountain-cabin-fireplace.jpg",
      "/images/mountain-cabin-hot-tub.jpg",
      "/images/mountain-cabin-view.jpg",
    ],
    category: "Cabins",
    type: "Cabin",
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    beds: 4,
    amenities: ["WiFi", "Fireplace", "Hot tub", "Kitchen", "Parking", "Ski-in/ski-out", "Mountain view", "Washer", "Dryer", "BBQ grill"],
    hostId: "h1",
    isSuperhost: true,
    lat: 39.1911,
    lng: -106.8175,
  },
  {
    id: "3",
    title: "Modern Luxury Mansion with City Skyline Views",
    description:
      "Experience the pinnacle of luxury in this stunning contemporary mansion perched above the city. Floor-to-ceiling windows frame spectacular skyline views. The chef's kitchen, home theater, wine cellar, and rooftop terrace with a heated pool make this property truly exceptional. Ideal for large groups, corporate retreats, or special celebrations.",
    location: "Beverly Hills, California",
    city: "Beverly Hills",
    country: "United States",
    price: 2500,
    rating: 4.92,
    reviewCount: 56,
    image: "https://i.ytimg.com/vi/4PbmyqmrpJI/maxresdefault.jpg",
    images: [
      "https://i.ytimg.com/vi/4PbmyqmrpJI/maxresdefault.jpg",
      "/images/luxury-mansion-living-room.jpg",
      "/images/luxury-mansion-pool.jpg",
      "/images/luxury-mansion-kitchen.jpg",
      "/images/luxury-mansion-bedroom.jpg",
    ],
    category: "Mansions",
    type: "Mansion",
    guests: 16,
    bedrooms: 8,
    bathrooms: 7,
    beds: 10,
    amenities: ["WiFi", "Pool", "Home theater", "Wine cellar", "Kitchen", "Air conditioning", "Parking", "Gym", "Sauna", "City view", "Rooftop terrace", "Security"],
    hostId: "h2",
    isSuperhost: true,
    lat: 34.0736,
    lng: -118.4004,
  },
  {
    id: "4",
    title: "Trendy Loft in the Heart of Downtown",
    description:
      "Stay in this beautifully designed industrial loft in the most vibrant neighborhood. Exposed brick walls, high ceilings, and designer furniture create an Instagram-worthy space. Walking distance to the best restaurants, galleries, and nightlife. The rooftop terrace offers stunning city views. Perfect for the urban explorer.",
    location: "New York City, New York",
    city: "New York City",
    country: "United States",
    price: 320,
    rating: 4.88,
    reviewCount: 203,
    image: "https://cdn.apartmenttherapy.info/image/upload/v1647455182/at/house%20tours/2022-03/House%20Calls/KimberlyHenry_lead.jpg",
    images: [
      "https://cdn.apartmenttherapy.info/image/upload/v1647455182/at/house%20tours/2022-03/House%20Calls/KimberlyHenry_lead.jpg",
      "/images/trendy-loft-living.jpg",
      "/images/trendy-loft-bedroom.jpg",
      "/images/trendy-loft-kitchen.jpg",
      "/images/trendy-loft-rooftop.jpg",
    ],
    category: "Trending",
    type: "Loft",
    guests: 4,
    bedrooms: 2,
    bathrooms: 1,
    beds: 2,
    amenities: ["WiFi", "Kitchen", "Air conditioning", "Washer", "Dryer", "Rooftop access", "City view", "Elevator", "Doorman"],
    hostId: "h2",
    isSuperhost: true,
    lat: 40.7128,
    lng: -74.006,
  },
  {
    id: "5",
    title: "Secluded Treehouse Retreat in the Forest",
    description:
      "Live your childhood dream in this magical treehouse nestled 30 feet above the forest floor. This unique retreat features a wraparound deck with hammocks, a spiral staircase, and panoramic forest views. The cozy interior has a queen bed, kitchenette, and a clawfoot bathtub. Fall asleep to the sounds of nature and wake up among the treetops.",
    location: "Portland, Oregon",
    city: "Portland",
    country: "United States",
    price: 285,
    rating: 4.99,
    reviewCount: 178,
    image: "https://res.cloudinary.com/sagacity/image/upload/c_crop,h_2498,w_3750,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/best-treehouse_Claymore-MacTarghan_bw4uov.jpg",
    images: [
      "https://res.cloudinary.com/sagacity/image/upload/c_crop,h_2498,w_3750,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/best-treehouse_Claymore-MacTarghan_bw4uov.jpg",
      "/images/treehouse-interior.jpg",
      "/images/treehouse-deck.jpg",
      "/images/treehouse-bathroom.jpg",
      "/images/treehouse-forest-view.jpg",
    ],
    category: "Trending",
    type: "Treehouse",
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    beds: 1,
    amenities: ["WiFi", "Kitchen", "Forest view", "Hammocks", "Deck", "Unique stay", "Heating"],
    hostId: "h3",
    isSuperhost: true,
    lat: 45.5051,
    lng: -122.675,
  },
  {
    id: "6",
    title: "Elegant Tuscan Farmhouse with Vineyard Views",
    description:
      "Immerse yourself in the timeless beauty of Tuscany in this lovingly restored farmhouse. Surrounded by rolling hills, olive groves, and a private vineyard, this property offers an authentic Italian countryside experience. The stone-walled interiors, terracotta floors, and antique furnishings transport you to another era while modern amenities ensure complete comfort.",
    location: "Siena, Tuscany",
    city: "Siena",
    country: "Italy",
    price: 380,
    rating: 4.96,
    reviewCount: 145,
    image: "https://media.vrbo.com/lodging/35000000/34090000/34085300/34085263/dd6c0408.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
    images: [
      "https://media.vrbo.com/lodging/35000000/34090000/34085300/34085263/dd6c0408.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
      "/images/tuscan-farmhouse-interior.jpg",
      "/images/tuscan-farmhouse-vineyard.jpg",
      "/images/tuscan-farmhouse-kitchen.jpg",
      "/images/tuscan-farmhouse-pool.jpg",
    ],
    category: "Trending",
    type: "Farmhouse",
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    beds: 5,
    amenities: ["WiFi", "Pool", "Kitchen", "Vineyard", "Olive grove", "Parking", "BBQ grill", "Terrace", "Garden", "Wine tasting"],
    hostId: "h3",
    isSuperhost: true,
    lat: 43.3186,
    lng: 11.3307,
  },
  {
    id: "7",
    title: "Overwater Bungalow in Crystal Clear Lagoon",
    description:
      "Experience paradise in this iconic overwater bungalow with direct lagoon access. The glass floor panels reveal the vibrant marine life below. Enjoy your private deck, outdoor shower, and butler service. Snorkel directly from your bungalow or simply relax in the hammock as the turquoise waters lap beneath you. This is the ultimate romantic escape.",
    location: "Bora Bora, French Polynesia",
    city: "Bora Bora",
    country: "French Polynesia",
    price: 1200,
    rating: 4.98,
    reviewCount: 67,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiDb1rKAeU6eVuVIcgyGfVzfQS_5vH3srbYw&s",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiDb1rKAeU6eVuVIcgyGfVzfQS_5vH3srbYw&s",
      "/images/overwater-bungalow-interior.jpg",
      "/images/overwater-bungalow-deck.jpg",
      "/images/overwater-bungalow-lagoon.jpg",
      "/images/overwater-bungalow-sunset.jpg",
    ],
    category: "Beachfront",
    type: "Bungalow",
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    beds: 1,
    amenities: ["WiFi", "Lagoon access", "Snorkeling gear", "Butler service", "Outdoor shower", "Deck", "Hammock", "Ocean view", "Air conditioning"],
    hostId: "h4",
    isSuperhost: false,
    lat: -16.5004,
    lng: -151.7415,
  },
  {
    id: "8",
    title: "Historic Castle with Panoramic Countryside Views",
    description:
      "Stay like royalty in this magnificent 12th-century castle perched on a hilltop. The meticulously restored interiors blend medieval grandeur with modern luxury. Explore the turrets, wander the manicured gardens, and dine in the great hall. Each of the 6 bedrooms is uniquely decorated with period furnishings and antiques. An unforgettable experience for history lovers.",
    location: "Loire Valley, France",
    city: "Loire Valley",
    country: "France",
    price: 1800,
    rating: 4.94,
    reviewCount: 43,
    image: "https://images.squarespace-cdn.com/content/v1/5acf80ef9772ae2ec4a657ce/1525801716761-3TAH5V9DN19GHJ8ICDHE/Chambord+Chateau+-+5+Most+Magnificent+Castles+of+the+Loire+Valley+-+A+Happy+Passport+%23chateau+%23castle+%23france+%23chambord",
    images: [
      "https://images.squarespace-cdn.com/content/v1/5acf80ef9772ae2ec4a657ce/1525801716761-3TAH5V9DN19GHJ8ICDHE/Chambord+Chateau+-+5+Most+Magnificent+Castles+of+the+Loire+Valley+-+A+Happy+Passport+%23chateau+%23castle+%23france+%23chambord",
      "/images/historic-castle-interior.jpg",
      "/images/historic-castle-bedroom.jpg",
      "/images/historic-castle-garden.jpg",
      "/images/historic-castle-great-hall.jpg",
    ],
    category: "Mansions",
    type: "Castle",
    guests: 12,
    bedrooms: 6,
    bathrooms: 5,
    beds: 8,
    amenities: ["WiFi", "Kitchen", "Garden", "Parking", "Fireplace", "Library", "Wine cellar", "Terrace", "Historic architecture", "Countryside view"],
    hostId: "h4",
    isSuperhost: false,
    lat: 47.6667,
    lng: 0.5,
  },
  {
    id: "9",
    title: "Minimalist Desert Dome under the Stars",
    description:
      "Disconnect from the world in this stunning geodesic dome set in the heart of the Sonoran Desert. The transparent panels offer 360-degree views of the starry night sky. Wake up to golden desert sunrises and fall asleep under a blanket of stars. The dome features a king bed, wood-burning stove, and a private outdoor hot tub. Pure magic.",
    location: "Sedona, Arizona",
    city: "Sedona",
    country: "United States",
    price: 340,
    rating: 4.93,
    reviewCount: 112,
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-24648225/original/daae20a4-345f-45ff-a7da-141661e2c4b9.png",
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-24648225/original/daae20a4-345f-45ff-a7da-141661e2c4b9.png",
      "/images/desert-dome-interior.jpg",
      "/images/desert-dome-night-sky.jpg",
      "/images/desert-dome-hot-tub.jpg",
      "/images/desert-dome-sunrise.jpg",
    ],
    category: "Trending",
    type: "Dome",
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    beds: 1,
    amenities: ["WiFi", "Hot tub", "Stargazing", "Desert view", "Heating", "Kitchenette", "Outdoor shower", "Fire pit"],
    hostId: "h3",
    isSuperhost: true,
    lat: 34.8697,
    lng: -111.7609,
  },
  {
    id: "10",
    title: "Lakefront Cabin with Private Dock & Kayaks",
    description:
      "Your perfect lakeside getaway awaits in this charming cabin with direct lake access. Spend your days kayaking, fishing, or simply lounging on the private dock. The cabin features a wraparound porch, stone fireplace, and a fully equipped kitchen. Evenings are magical with bonfires by the water and spectacular sunsets over the lake.",
    location: "Lake Tahoe, California",
    city: "Lake Tahoe",
    country: "United States",
    price: 495,
    rating: 4.91,
    reviewCount: 156,
    image: "https://visitlaketahoe.com/wp-content/uploads/2022/06/rnr-vacation-rentals-1024x683.jpg",
    images: [
      "https://visitlaketahoe.com/wp-content/uploads/2022/06/rnr-vacation-rentals-1024x683.jpg",
      "/images/lakefront-cabin-dock.jpg",
      "/images/lakefront-cabin-interior.jpg",
      "/images/lakefront-cabin-porch.jpg",
      "/images/lakefront-cabin-sunset.jpg",
    ],
    category: "Cabins",
    type: "Cabin",
    guests: 8,
    bedrooms: 4,
    bathrooms: 2,
    beds: 5,
    amenities: ["WiFi", "Lake access", "Private dock", "Kayaks", "Fireplace", "Kitchen", "Parking", "BBQ grill", "Porch", "Fire pit"],
    hostId: "h2",
    isSuperhost: true,
    lat: 39.0968,
    lng: -120.0324,
  },
  {
    id: "11",
    title: "Cliffside Villa with Private Infinity Pool",
    description:
      "Perched dramatically on the cliffs of Santorini, this iconic whitewashed villa offers the most breathtaking caldera views in the world. The private infinity pool seems to float above the Aegean Sea. Watch the famous Santorini sunset from your terrace with a glass of local wine. The villa features traditional Cycladic architecture with all modern luxuries.",
    location: "Santorini, Greece",
    city: "Santorini",
    country: "Greece",
    price: 920,
    rating: 4.98,
    reviewCount: 89,
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/17/2f/25/cliff-side-suites.jpg?w=500&h=-1&s=1",
    images: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/17/2f/25/cliff-side-suites.jpg?w=500&h=-1&s=1",
      "/images/cliffside-villa-pool.jpg",
      "/images/cliffside-villa-interior.jpg",
      "/images/cliffside-villa-terrace.jpg",
      "/images/cliffside-villa-sunset.jpg",
    ],
    category: "Beachfront",
    type: "Villa",
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    beds: 2,
    amenities: ["WiFi", "Infinity pool", "Caldera view", "Terrace", "Kitchen", "Air conditioning", "Concierge", "Wine cellar"],
    hostId: "h1",
    isSuperhost: true,
    lat: 36.3932,
    lng: 25.4615,
  },
  {
    id: "12",
    title: "Jungle Eco-Lodge with Waterfall Access",
    description:
      "Immerse yourself in the lush Costa Rican rainforest in this sustainable eco-lodge. Wake up to howler monkeys and colorful toucans. The lodge features open-air living spaces, a private waterfall, and guided nature walks. Solar-powered and built with local materials, this is luxury travel with a conscience. Zip-lining and white-water rafting are minutes away.",
    location: "Manuel Antonio, Costa Rica",
    city: "Manuel Antonio",
    country: "Costa Rica",
    price: 275,
    rating: 4.96,
    reviewCount: 201,
    image: "/images/jungle-eco-lodge-costa-rica.jpg",
    images: [
      "/images/jungle-eco-lodge-costa-rica.jpg",
      "/images/jungle-eco-lodge-interior.jpg",
      "/images/jungle-eco-lodge-waterfall.jpg",
      "/images/jungle-eco-lodge-wildlife.jpg",
      "/images/jungle-eco-lodge-terrace.jpg",
    ],
    category: "Trending",
    type: "Eco-lodge",
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    beds: 2,
    amenities: ["WiFi", "Waterfall access", "Nature walks", "Eco-friendly", "Kitchen", "Outdoor shower", "Hammocks", "Wildlife viewing"],
    hostId: "h4",
    isSuperhost: false,
    lat: 9.3937,
    lng: -84.1741,
  },
];

export const reviews: Review[] = [
  {
    id: "r1",
    listingId: "1",
    authorName: "Alex Johnson",
    authorAvatar: "/images/reviewer-alex.jpg",
    rating: 5,
    date: "November 2024",
    comment: "Absolutely incredible stay! The villa exceeded every expectation. The infinity pool overlooking the ocean is something you have to experience to believe. Sofia was an amazing host — responsive, thoughtful, and full of great local recommendations. We'll definitely be back!",
  },
  {
    id: "r2",
    listingId: "1",
    authorName: "Priya Sharma",
    authorAvatar: "/images/reviewer-priya.jpg",
    rating: 5,
    date: "October 2024",
    comment: "This place is pure magic. We celebrated our anniversary here and it was perfect in every way. The beach access, the sunsets, the impeccably designed interiors — everything was flawless. The kitchen was stocked with local treats when we arrived. 10/10!",
  },
  {
    id: "r3",
    listingId: "1",
    authorName: "Tom Williams",
    authorAvatar: "/images/reviewer-tom.jpg",
    rating: 5,
    date: "September 2024",
    comment: "We've stayed in many luxury properties but this one stands out. The attention to detail is remarkable. The hot tub at sunset, the sound of waves, the spacious bedrooms — our family of 8 had the time of our lives. Highly recommend!",
  },
  {
    id: "r4",
    listingId: "1",
    authorName: "Marie Dubois",
    authorAvatar: "/images/reviewer-marie.jpg",
    rating: 4,
    date: "August 2024",
    comment: "Beautiful property with stunning views. The pool and beach access are fantastic. Only minor note: the WiFi was a bit slow at times, but honestly we barely needed it — we were too busy enjoying paradise!",
  },
  {
    id: "r5",
    listingId: "2",
    authorName: "Chris Park",
    authorAvatar: "/images/reviewer-chris.jpg",
    rating: 5,
    date: "December 2024",
    comment: "The perfect winter cabin! We came for skiing and the location couldn't be better. The fireplace, the hot tub in the snow, the cozy beds — everything was perfect. Sofia is a superhost for a reason!",
  },
  {
    id: "r6",
    listingId: "3",
    authorName: "Rachel Green",
    authorAvatar: "/images/reviewer-rachel.jpg",
    rating: 5,
    date: "October 2024",
    comment: "We hosted a corporate retreat here and it was absolutely perfect. The home theater, the rooftop pool, the chef's kitchen — our team was blown away. James was incredibly helpful with all our requests. Would book again in a heartbeat.",
  },
];

export const categories = [
  { id: "all", label: "All", icon: "🏠" },
  { id: "Beachfront", label: "Beachfront", icon: "🏖️" },
  { id: "Cabins", label: "Cabins", icon: "🏕️" },
  { id: "Mansions", label: "Mansions", icon: "🏰" },
  { id: "Trending", label: "Trending", icon: "🔥" },
];

export function getListingById(id: string): Listing | undefined {
  return listings.find((l) => l.id === id);
}

export function getHostById(id: string): Host | undefined {
  return hosts.find((h) => h.id === id);
}

export function getReviewsByListingId(listingId: string): Review[] {
  return reviews.filter((r) => r.listingId === listingId);
}

export function getListingsByHostId(hostId: string): Listing[] {
  return listings.filter((l) => l.hostId === hostId);
}
