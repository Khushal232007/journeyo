export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface TravelPackage {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  pricing: string;
  rating: number;
  reviewsCount: number;
  image: string;
  overview: string;
  highlights: string[];
  itinerary: ItineraryDay[];
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  image?: string;
  date: string;
  destination?: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  location: string;
  aspect: 'normal' | 'tall' | 'wide';
}
