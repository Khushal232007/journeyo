import { TravelPackage, Review, GalleryItem } from './types';

export const FEATURED_PACKAGES: TravelPackage[] = [
  {
    id: 'yamunotri-pilgrimage',
    title: 'Yamunotri — Char Dham Pilgrimage & Helicopter Guide',
    subtitle: 'Char Dham · 1 of 4',
    duration: '4 Days / 3 Nights',
    pricing: '₹1,85,000',
    rating: 4.96,
    reviewsCount: 34,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    overview: 'Yamunotri is the sacred source of River Yamuna and the first destination of the Char Dham Yatra. Nestled in the Garhwal Himalayas, it symbolizes purification and devotion. Pilgrims visit the Yamunotri Temple to seek blessings and spiritual renewal.',
    highlights: [
      'Location: Uttarkashi district, Uttarakhand',
      'Altitude: 3,293 m (10,804 ft)',
      'Best Season: May – June · Sep – Nov',
      'Helicopter Access: From Dehradun (Sahastradhara)',
      'Presiding Deity: Goddess Yamuna'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Dehradun to Kharsali Helipad & Luxury Resort Setup',
        description: 'Embark on your journey from Dehradun (Sahastradhara Helipad) via a scenic private helicopter charter. Touchdown beautifully at the peaceful Kharsali helipad, where your luxury mountain host welcomes you with hot local saffron tea. Settle into a heated valley-facing cottage.',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
        highlights: ['Private Helicopter Charter Ingress', 'Bespoke Host Greeting', 'Acclimatization High-Altitude Tea']
      },
      {
        day: 2,
        title: 'Sacred Yamunotri Temple Ascent & Surya Kund Dip',
        description: 'Begin with an exclusive VIP trek or custom luxury sedan-chair ride to the Yamunotri Temple. Perform sacred rites, bathe in the natural thermal springs of Surya Kund, offer cooked rice/potatoes as prasad, and receive holy Vedic blessings from the head priests.',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
        highlights: ['VIP Temple Access', 'Surya Kund Thermal Bath', 'Inner Sanctum Holy Puja']
      },
      {
        day: 3,
        title: 'Secluded Hot Springs & Meditation overlooking the Gorges',
        description: 'Engage in absolute, peaceful relaxation. Spend your morning walking through pristine pine forests and alpine meadows. Witness an elite evening sound-healing meditation overlooking the rushing Yamuna stream, with an organic dinner curated by a private chef.',
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop',
        highlights: ['Somatic Forest Bathing', 'Vedic Chants Therapy', 'Bespoke Valley Dining']
      },
      {
        day: 4,
        title: 'Dawn Purification & Return Charter flight',
        description: 'Participate in a peaceful morning meditation session before boarding your return VIP helicopter flight back to Dehradun. Cherish sacred memories of spiritual cleansing, carrying holy Yamunotri water and tokens.',
        image: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=1200&auto=format&fit=crop',
        highlights: ['Dawn Sound Therapy', 'Gourmet Farewell Plate', 'Scenic Valley Flypast']
      }
    ]
  },
  {
    id: 'gangotri-pilgrimage',
    title: 'Gangotri — Char Dham Pilgrimage & Helicopter Guide',
    subtitle: 'Char Dham · 2 of 4',
    duration: '4 Days / 3 Nights',
    pricing: '₹1,95,000',
    rating: 4.97,
    reviewsCount: 41,
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
    overview: 'Gangotri marks the origin of River Ganga and represents purity and divine grace. Located at high altitude, it is a place of deep meditation and reverence. The Gangotri Temple attracts thousands of devotees every year.',
    highlights: [
      'Location: Uttarkashi district, Uttarakhand',
      'Altitude: 3,048 m (10,000 ft)',
      'Best Season: May – June · Sep – Oct',
      'Helicopter Access: From Harsil / Dehradun',
      'Presiding Deity: Goddess Ganga (Bhagirathi)'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Flight across Peak Canyons to Harsil Valley',
        description: 'Fly elegantly from Dehradun into Harsil Helipad, celebrated as the "Switzerland of the East" due to its dense cedar forests. Settle into your boutique luxury wooden cottage surrounded by apple orchards and towering Deodar trees.',
        image: 'https://images.unsplash.com/photo-1533587837720-4e5cb48292fb?q=80&w=1200&auto=format&fit=crop',
        highlights: ['Harsil Helicopter Crossing', 'Heritage Cottage Log-In', 'Orchard Herbal Tea Walk']
      },
      {
        day: 2,
        title: 'The Holy Gangotri Temple VIP Pilgrimage',
        description: 'Drive along the sacred Bhagirathi River through gorgeous mountain passes to reach the Gangotri Temple. Enjoy exclusive fast-track VIP access for the holy puja on the stone slabs beside the mystical turquoise-blue river waters.',
        image: 'https://images.unsplash.com/photo-1561361531-9952a65fe002?q=80&w=1200&auto=format&fit=crop',
        highlights: ['VIP Temple Darshan', 'Bhagirathi River Blessings', 'Bespoke Vedic Rites']
      },
      {
        day: 3,
        title: 'Mindfulness by the Ganga Source & Pine Canopy Trail',
        description: 'Spend a reflective morning hiking near the sacred waters of Gangnan. Savor custom multi-course organic cuisine cooked by your personal chef under high canopy pines, and watch the sun set over the cold mountain ridges.',
        image: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=1200&auto=format&fit=crop',
        highlights: ['Glacial Stream Mindfulness', 'Apple Orchard Picnic', 'Sunset Harp Performance']
      },
      {
        day: 4,
        title: 'Dawn Blessing & Return Helicopter to Dehradun',
        description: 'Begin with sunrise pranayama yoga beside the mountain stream. Board your return helicopter flight over pristine alpine basins, arriving in Dehradun with spiritual clarity.',
        image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop',
        highlights: ['Sunrise Peak Yoga', 'Deodar Souvenir Bundle', 'Return Flight to Sahastradhara']
      }
    ]
  },
  {
    id: 'kedarnath-pilgrimage',
    title: 'Kedarnath — Char Dham Pilgrimage & Helicopter Guide',
    subtitle: 'Char Dham · 3 of 4',
    duration: '4 Days / 3 Nights',
    pricing: '₹2,65,000',
    rating: 4.99,
    reviewsCount: 88,
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Kedarnath_Temple.jpg',
    overview: 'Kedarnath is one of the twelve Jyotirlingas of Lord Shiva and the most revered shrine in Uttarakhand. Surrounded by snow-clad mountains, it embodies faith, resilience, and devotion.',
    highlights: [
      'Location: Rudraprayag district, Uttarakhand',
      'Altitude: 3,583 m (11,755 ft)',
      'Best Season: May – June · Sep – Oct',
      'Helicopter Access: Phata · Guptkashi · Sitapur helipads',
      'Presiding Deity: Lord Shiva (Jyotirlinga)'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Charter Ingress to Guptkashi Helipad Base',
        description: 'Board your premium helicopter from Sahastradhara, crossing magnificent green gorges to land directly in Guptkashi. Settle into a heated luxury cottage with dramatic scenic views of the Kedar Dome peak.',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop',
        highlights: ['Direct Heli Ingress', 'Luxury Glamping Suite Check-in', 'Acclimatization Ayurvedic Curation']
      },
      {
        day: 2,
        title: 'Helicopter Flight to Kedarnath Peak & VIP Inner Sanctum Puja',
        description: 'Fly directly up to Kedarnath Helipad at 11,000+ feet. Your private expert host guides you through the holy corridor. Perform VIP Abhishek Puja directly inside the ancient stone temple, touching the holy Jyotirlinga for profound cosmic alignment.',
        image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1200&auto=format&fit=crop',
        highlights: ['VIP Temple Abhishek', 'Helicopter Peak Shuttle', 'Private Brahmin Escort']
      },
      {
        day: 3,
        title: 'Mindfulness by Mandakini River & Twilight Sitar Symphony',
        description: 'Explore calm mountain ridges or indulge in warm therapeutic mudpacks. At sunset, experience a highly exclusive chanting meditation session with a live classical sitar performance right on the stone banks of the rushing Mandakini River.',
        image: 'https://images.unsplash.com/photo-1541004995602-b3e89b784953?q=80&w=1200&auto=format&fit=crop',
        highlights: ['Mandakini River Sunset Meditation', 'Live Sitar Performance', 'Himalayan Herbal Oil Pack']
      },
      {
        day: 4,
        title: 'Sacred Triyuginarayan Visit & Dehradun Return',
        description: 'Take a short, gorgeous drive to Triyuginarayan Temple (the site of Lord Shiva and Goddess Parvati’s celestial wedding). Board your returning helicopter flight to Dehradun, having finished a deeply transformative journey.',
        image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1200&auto=format&fit=crop',
        highlights: ['Triyuginarayan Heritage Excursion', 'Vedic Marriage Ground Ritual', 'Private Terminal Departure']
      }
    ]
  },
  {
    id: 'badrinath-pilgrimage',
    title: 'Badrinath — Char Dham Pilgrimage & Helicopter Guide',
    subtitle: 'Char Dham · 4 of 4',
    duration: '4 Days / 3 Nights',
    pricing: '₹2,45,000',
    rating: 4.98,
    reviewsCount: 62,
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Badrinath_Temple.jpg',
    overview: 'Badrinath is dedicated to Lord Vishnu and is a major pilgrimage site for Vaishnavites. Situated on the banks of the Alaknanda River, it symbolizes salvation and spiritual enlightenment.',
    highlights: [
      'Location: Chamoli district, Uttarakhand',
      'Altitude: 3,133 m (10,279 ft)',
      'Best Season: May – June · Sep – Nov',
      'Helicopter Access: From Haridwar / Dehradun',
      'Presiding Deity: Lord Vishnu (Badrinarayan)'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Scenic Flyover of Trishul Range & Badrinath Landing',
        description: 'Fly over majestic deep snow valleys and the Trishul ridge. Touch down at the Badrinath Helipad, where our private luxury transporter escorts you to your luxury riverfront suite near the crystal Alaknanda River.',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
        highlights: ['Trishul Summit Heli Views', 'Luxury Riverfront Suite Check-in', 'Fireside Welcome Feast']
      },
      {
        day: 2,
        title: 'Tapt Kund Warm Dip & Maha Puja Darshan',
        description: 'Bathe in the natural healing sulfur waters of the sacred Tapt Kund before ascending for highly private VIP Darshan of Lord Badri Vishal. Sit for meditative prayers with direct temple head priests and receive a holy prasadam bundle.',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop',
        highlights: ['Tapt Kund Therapeutic Bath', 'Maha Puja VIP Pass', 'Direct Blessing from Head Priest']
      },
      {
        day: 3,
        title: 'Legendary Mana Village Hike & High-Altitude Stone High Tea',
        description: 'Explore Mana, the legendary last Indian village on the Tibetan border. Gaze at the natural stone bridge, Bhim Pul, suspended over the roaring Saraswati River. Enjoy an elegant luxury high tea set up right on a stunning high-altitude stone patio.',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
        highlights: ['Mana Indo-China Border Trek', 'Bhim Pul & Vyas Gufa Caves', 'Glacial High-Tea Service']
      },
      {
        day: 4,
        title: 'Ganga Junction Return Flypast & Dehradun Arrival',
        description: 'Attend the peaceful morning sacred chants. Board your return charter helicopter, request a brief flypast over the holy Devprayag river confluence, and arrive back in Dehradun with a peaceful heart.',
        image: 'https://images.unsplash.com/photo-1494548162494-384bba4ab999?q=80&w=1200&auto=format&fit=crop',
        highlights: ['Devprayag Heli Flypast', 'Commemorative Vaishnavite Medallion', 'Private Departure Shuttle']
      }
    ]
  }
];

export const GENERAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Gayatri Nair',
    rating: 5,
    text: 'Route Story has redefined pilgrimage for us. The helicopter flight over Yamunotri at sunrise with hot saffron tea on landing was simple poetry. Their level of attention is absolutely unparalleled.',
    date: 'May 14, 2026',
    destination: 'Yamunotri — Char Dham Pilgrimage & Helicopter Guide'
  },
  {
    id: 'rev-2',
    name: 'Kabir Malhotra',
    rating: 5,
    text: 'A truly flawless pilgrimage. Flew in comfort directly to Kedarnath with our private host and returned to a serene riverside camp on the banks of Mandakini. Masterfully done.',
    date: 'April 28, 2026',
    destination: 'Kedarnath — Char Dham Pilgrimage & Helicopter Guide'
  },
  {
    id: 'rev-3',
    name: 'Anjali Deshmukh',
    rating: 5,
    text: 'The silence at Badrinath is magical. The sunset prayer held on the banks of Alaknanda river for just our family was an emotional, unforgettable moment. Thank you, Route Story.',
    date: 'March 19, 2026',
    destination: 'Badrinath — Char Dham Pilgrimage & Helicopter Guide'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Kedarnath_Temple.jpg',
    title: 'Kedarnath Temple Sanctum',
    location: 'Kedarnath, Himalayas',
    aspect: 'tall'
  },
  {
    id: 'gal-2',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Badrinath_Temple.jpg',
    title: 'Badrinath Temple Devotion',
    location: 'Badrinath, Himalayas',
    aspect: 'wide'
  },
  {
    id: 'gal-3',
    url: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop',
    title: 'Gangotri Glacial Flow',
    location: 'Gangotri, Himalayas',
    aspect: 'normal'
  },
  {
    id: 'gal-4',
    url: 'https://images.unsplash.com/photo-1482862549707-f63cb32c5fd9?q=80&w=800&auto=format&fit=crop',
    title: 'Yamunotri Sacred Ridge',
    location: 'Yamunotri, Himalayas',
    aspect: 'tall'
  },
  {
    id: 'gal-5',
    url: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=800&auto=format&fit=crop',
    title: 'Midnight Overwater Serenity',
    location: 'Bora Bora, French Polynesia',
    aspect: 'wide'
  },
  {
    id: 'gal-6',
    url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop',
    title: 'Eternal Golden Temple Shadows',
    location: 'Kyoto, Japan',
    aspect: 'normal'
  },
  {
    id: 'gal-7',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
    title: 'The Turquoise Lagoon',
    location: 'Maldives Private Islet',
    aspect: 'wide'
  },
  {
    id: 'gal-8',
    url: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?q=80&w=800&auto=format&fit=crop',
    title: 'Balloons drifting over Fairy Chimneys',
    location: 'Cappadocia, Turkey',
    aspect: 'tall'
  }
];
