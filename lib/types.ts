export interface Listing {
  id: string;
  title: string;
  description: string;
  location: string;
  city: string;
  country: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  images: string[];
  category: string;
  type: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  beds: number;
  amenities: string[];
  hostId: string;
  isSuperhost: boolean;
  lat: number;
  lng: number;
}

export interface Host {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  responseRate: number;
  responseTime: string;
  joinDate: string;
  isSuperhost: boolean;
  reviewCount: number;
  rating: number;
  listingIds: string[];
}

export interface Review {
  id: string;
  listingId: string;
  authorName: string;
  authorAvatar: string;
  rating: number;
  date: string;
  comment: string;
}

export interface BookingDetails {
  listingId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: number;
  confirmationNumber: string;
}
