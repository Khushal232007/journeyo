import fs from 'fs';

// Read the extracted files
const treks = JSON.parse(fs.readFileSync('src/extracted_packages.json', 'utf8'));
const chaloDestinations = JSON.parse(fs.readFileSync('src/extracted_chalo_data.json', 'utf8'));

// High-quality royalty-free images mapping
const imagesMap = {
  // Treks
  'valley-of-flowers': 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
  'kedarkantha': 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop',
  'roopkund': 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
  'har-ki-dun': 'https://images.unsplash.com/photo-1533587837720-4e5cb48292fb?q=80&w=1200&auto=format&fit=crop',
  'chopta-chandrashila': 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
  'brahmatal': 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
  'dayara-bugyal': 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1200&auto=format&fit=crop',
  'kuari-pass': 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=1200&auto=format&fit=crop',
  'nag-tibba': 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop',
  'bali-pass': 'https://images.unsplash.com/photo-1521542464131-93c29219ea93?q=80&w=1200&auto=format&fit=crop',
  'panwali-kantha': 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
  'dodital': 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop',
  
  // Char Dham Individual Shrines
  'yamunotri': 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
  'gangotri': 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
  'kedarnath': 'https://upload.wikimedia.org/wikipedia/commons/1/15/Kedarnath_Temple.jpg',
  'badrinath': 'https://upload.wikimedia.org/wikipedia/commons/1/18/Badrinath_Temple.jpg',
  
  // Chalo Destinations
  'haridwar': 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop',
  'rishikesh': 'https://images.unsplash.com/photo-1598977123418-45f04b01d4ac?q=80&w=1200&auto=format&fit=crop',
  'kainchi-dham': 'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1200&auto=format&fit=crop',
  'dhari-devi': 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
  'ayodhya': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
  'shree-khatu-shyam-ji': 'https://images.unsplash.com/photo-1590073844006-33379778ae09?q=80&w=1200&auto=format&fit=crop',
  'nainital': 'https://images.unsplash.com/photo-1582236940026-641b0728c39e?q=80&w=1200&auto=format&fit=crop',
  'shimla': 'https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?q=80&w=1200&auto=format&fit=crop',
  'manali': 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1200&auto=format&fit=crop',
  'udaipur': 'https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?q=80&w=1200&auto=format&fit=crop',
  'jaisalmer': 'https://images.unsplash.com/photo-1504681869696-d977211a5f4c?q=80&w=1200&auto=format&fit=crop'
};

const pricingMap = {
  // Treks - reasonable rates for trekking
  'valley-of-flowers': '₹18,500',
  'kedarkantha': '₹12,500',
  'roopkund': '₹19,800',
  'har-ki-dun': '₹15,200',
  'chopta-chandrashila': '₹9,500',
  'brahmatal': '₹14,500',
  'dayara-bugyal': '₹11,800',
  'kuari-pass': '₹15,000',
  'nag-tibba': '₹5,800',
  'bali-pass': '₹24,500',
  'panwali-kantha': '₹13,500',
  'dodital': '₹12,800',
  
  // Char Dham Individual - standard helicopter rates
  'yamunotri': '₹1,85,000',
  'gangotri': '₹1,95,000',
  'kedarnath': '₹2,65,000',
  'badrinath': '₹2,45,000',

  // Tour Packages
  'char-dham-helicopter-yatra': '₹3,95,000',
  'do-dham-yatra': '₹2,25,000',
  'shree-khatu-shyam-yatra': '₹15,500',
  'chalo-series-custom': '₹25,000',

  // Destinations General Package Starting Rate
  'haridwar': '₹6,500',
  'rishikesh': '₹7,800',
  'kainchi-dham': '₹8,500',
  'dhari-devi': '₹9,000',
  'ayodhya': '₹9,800',
  'shree-khatu-shyam-ji': '₹6,000',
  'nainital': '₹12,500',
  'shimla': '₹14,800',
  'manali': '₹16,500',
  'udaipur': '₹18,500',
  'jaisalmer': '₹15,000'
};

// Ratings generation helper
function getRating(slug) {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) hash += slug.charCodeAt(i);
  const offset = (hash % 15) / 100; // between 0.00 and 0.14
  return +(4.85 + offset).toFixed(2);
}

function getReviewsCount(slug) {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) hash += slug.charCodeAt(i);
  return 20 + (hash % 70); // between 20 and 89
}

const finalPackages = [];

// 1. Process 12 TREKS
treks.forEach(t => {
  const slug = t.slug;
  const image = imagesMap[slug] || 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop';
  
  // Map raw itinerary days
  const itinerary = t.guideContent.itinerary.map(dayItem => {
    const p1 = dayItem.description.indexOf('.');
    const firstSentence = p1 !== -1 ? dayItem.description.substring(0, p1) : 'Excursion';
    const cleanNum = parseInt(dayItem.day.toString().replace(/\D/g, '')) || 1;
    return {
      day: cleanNum,
      title: firstSentence.length < 50 ? firstSentence : `Explore and Ascent`,
      description: dayItem.description,
      image: image,
      highlights: ['Trek Route Segment', `${t.difficulty} Terrain`, 'Guided Traversal']
    };
  });
  
  const highlights = [
    `Difficulty: ${t.difficulty}`,
    `Best Season: ${t.bestSeason}`,
    `Duration: ${t.durationDays} Days`,
    `Location: Garhwal Himalayas`,
    `Ideal for: Trekkers & Nature Lovers`
  ];
  
  finalPackages.push({
    id: `${slug}-trek`,
    title: t.name,
    subtitle: `Himalayan Trek · ${t.difficulty} Level`,
    duration: `${t.durationDays} Days / ${t.durationDays - 1} Nights`,
    pricing: pricingMap[slug] || '₹15,000',
    rating: getRating(slug),
    reviewsCount: getReviewsCount(slug),
    image: image,
    overview: t.shortDescription || t.guideContent.overview || '',
    highlights: highlights,
    itinerary: itinerary,
    category: 'Trek',
    difficulty: t.difficulty,
    bestSeason: t.bestSeason
  });
});

// 2. Add 4 PILGRIMAGES (Char Dham individual shrines)
const charDhamDef = [
  {
    id: 'yamunotri-pilgrimage',
    title: 'Yamunotri — Sacred River Source Pilgrimage',
    subtitle: 'Char Dham · 1 of 4',
    duration: '4 Days / 3 Nights',
    pricing: '₹1,85,000',
    rating: 4.96,
    reviewsCount: 34,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    overview: 'Yamunotri is the westernmost shrine of the Char Dham circuit and the sacred source of the river Yamuna. Nestled in the Garhwal Himalayas, it symbolizes purification and devotion. Pilgrims visit the Yamunotri Temple to seek blessings and spiritual renewal.',
    highlights: [
      'Location: Uttarkashi district, Uttarakhand',
      'Altitude: 3,293 m (10,804 ft)',
      'Best Season: May – June · Sep – Nov',
      'Helicopter Access: From Dehradun (Sahastradhara)',
      'Presiding Deity: Goddess Yamuna'
    ],
    category: 'Pilgrimage',
    difficulty: 'Easy-Moderate',
    bestSeason: 'May – June · Sep – Nov',
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
    title: 'Gangotri — Glacial Ganga Source Pilgrimage',
    subtitle: 'Char Dham · 2 of 4',
    duration: '4 Days / 3 Nights',
    pricing: '₹1,95,000',
    rating: 4.97,
    reviewsCount: 41,
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
    overview: 'Gangotri marks the origin of River Ganga (Bhagirathi) and stands as one of the four sacred sites of the Char Dham pilgrimage. Nestled in a valley of dense cedar woodlands, it represents purity and divine grace. The Gangotri Temple attracts thousands of devotees every year.',
    highlights: [
      'Location: Uttarkashi district, Uttarakhand',
      'Altitude: 3,048 m (10,000 ft)',
      'Best Season: May – June · Sep – Oct',
      'Helicopter Access: From Harsil / Dehradun',
      'Presiding Deity: Goddess Ganga (Bhagirathi)'
    ],
    category: 'Pilgrimage',
    difficulty: 'Easy',
    bestSeason: 'May – June · Sep – Oct',
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
    title: 'Kedarnath — Cosmic Shiva Jyotirlinga Expedition',
    subtitle: 'Char Dham · 3 of 4',
    duration: '4 Days / 3 Nights',
    pricing: '₹2,65,000',
    rating: 4.99,
    reviewsCount: 88,
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Kedarnath_Temple.jpg',
    overview: 'Kedarnath is the most revered of the four Char Dham shrines and one of the twelve Jyotirlingas of Lord Shiva. Located at 3,583 metres in the Rudraprayag district beside the Mandakini river, surrounded by the majestic peaks of the Kedarnath range, it embodies faith, resilience, and devotion.',
    highlights: [
      'Location: Rudraprayag district, Uttarakhand',
      'Altitude: 3,583 m (11,755 ft)',
      'Best Season: May – June · Sep – Oct',
      'Helicopter Access: Phata · Guptkashi · Sitapur helipads',
      'Presiding Deity: Lord Shiva (Jyotirlinga)'
    ],
    category: 'Pilgrimage',
    difficulty: 'Moderate-Difficult',
    bestSeason: 'May – June · Sep – Oct',
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
    title: 'Badrinath — Sacred Vishnu Alaknanda Abode',
    subtitle: 'Char Dham · 4 of 4',
    duration: '4 Days / 3 Nights',
    pricing: '₹2,45,000',
    rating: 4.98,
    reviewsCount: 62,
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Badrinath_Temple.jpg',
    overview: 'Badrinath is the northernmost of the four shrines and one of the 108 Divya Desams dedicated to Lord Vishnu. Flanked by the Nar and Narayan ranges on the banks of Alaknanda River, it represents spiritual salvation and absolute enlightenment.',
    highlights: [
      'Location: Chamoli district, Uttarakhand',
      'Altitude: 3,133 m (10,279 ft)',
      'Best Season: May – June · Sep – Nov',
      'Helicopter Access: Direct helipad landing',
      'Presiding Deity: Lord Vishnu (Badrinarayan)'
    ],
    category: 'Pilgrimage',
    difficulty: 'Easy',
    bestSeason: 'May – June · Sep – Nov',
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
finalPackages.push(...charDhamDef);

// 3. Add 4 GENERAL TRAVEL PACKAGES (Tours)
const toursDef = [
  {
    id: 'char-dham-helicopter-yatra-package',
    title: 'Char Dham Helicopter Yatra',
    subtitle: 'Helicopter Tour · All-Inclusive Luxury',
    duration: '5 Days / 4 Nights',
    pricing: '₹3,95,000',
    rating: 4.97,
    reviewsCount: 104,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop',
    overview: 'Escape the long roads and travel the sacred Garhwal Himalayas in ultimate luxury. This five-day helicopter charter covers Yamunotri, Gangotri, Kedarnath, and Badrinath in comfort, including elite stays and VIP temple darshan.',
    highlights: [
      'Complete Char Dham circuit by Helicopter',
      'VIP priority temple clearances',
      'Luxury heritage accommodation and meals',
      'DGCA-certified experienced pilots',
      'All inner-valley transfers included'
    ],
    category: 'Travel Package',
    difficulty: 'Easy',
    bestSeason: 'May – June · Sep – Nov',
    itinerary: [
      { day: 1, title: 'Arrival in Dehradun & Pre-Yatra Briefing', description: 'Arrive in Dehradun and transfer to your luxury hotel. Meet our coordinators for a safety briefing and receive your VIP yatra kit.', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop', highlights: ['VIP Airport Pickup', 'Luxury Room Stay', 'Welcome Briefing Ceremony'] },
      { day: 2, title: 'Fly Dehradun to Kharsali (Yamunotri)', description: 'Board your private helicopter at Sahastradhara and fly to Kharsali helipad. Undertake the scenic trek or buggy ride to the Yamunotri temple for VIP rites.', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop', highlights: ['Kharsali Helipad Settle', 'VIP Temple Rites', 'Surya Kund Hot Dip'] },
      { day: 3, title: 'Fly Kharsali to Harsil (Gangotri)', description: 'Fly up to Harsil valley, known as the Switzerland of India. Undertake a private luxury sedan drive to the Gangotri Temple beside the pristine river gorges.', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop', highlights: ['Cedar-Wood Valleys Drive', 'Holy Gangotri Aarti', 'Apple Orchard Walk'] },
      { day: 4, title: 'Fly Harsil to Sersi/Phata & Kedarnath Darshan', description: 'Fly into the Kedar Valley base. Board your shuttle directly up to Kedarnath Peak. Savor immediate VIP fast-track access into the ancient stone temple sanctum.', image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1200&auto=format&fit=crop', highlights: ['Kedarnath Peak Transit', 'VIP Sanctum Abhishek', 'Local Pandit Blessing'] },
      { day: 5, title: 'Fly to Badrinath & Return to Dehradun', description: 'Fly to Badrinath Helipad on Alaknanda banks. Visit the holy shrine and walk Mana Village (Tibetan border) before returning to Dehradun via helicopter.', image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Badrinath_Temple.jpg', highlights: ['Alaknanda Riverbed Prayers', 'Mana Village Border Walk', 'Return Heli Ingress'] }
    ]
  },
  {
    id: 'do-dham-yatra-package',
    title: 'Do Dham Yatra (Kedarnath & Badrinath)',
    subtitle: 'Helicopter Tour · Sacred Twin Abodes',
    duration: '3 Days / 2 Nights',
    pricing: '₹2,25,000',
    rating: 4.95,
    reviewsCount: 76,
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
    overview: 'An expedited spiritual journey designed for those who wish to complete their pilgrimage to the two most powerful twin shrines of Uttarakhand — Kedarnath and Badrinath — via luxury helicopter charter.',
    highlights: [
      'Helicopter transfers from Dehradun',
      'Fast-track VIP access at Kedarnath and Badrinath',
      'Premium stays in Guptkashi/Sersi and Badrinath',
      'Local certified travel escort',
      'Scenic mountain-pass flypasts'
    ],
    category: 'Travel Package',
    difficulty: 'Easy',
    bestSeason: 'May – June · Sep – Nov',
    itinerary: [
      { day: 1, title: 'Fly Dehradun to Guptkashi Base', description: 'Fly from Sahastradhara Helipad to Guptkashi. Settle into a scenic premium resort, prepare for the high-altitude climate, and explore the ancient Vishwanath temple.', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop', highlights: ['Base Helipad Transit', 'Mountain Cottage Stay', 'Temple Evening Walk'] },
      { day: 2, title: 'Fly to Kedarnath Peak & VIP Darshan', description: 'Fly directly to the majestic Kedarnath helipad. Experience VIP fast-track clearance for prayers inside the temple, returning to your base camp for organic dining.', image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1200&auto=format&fit=crop', highlights: ['Heli Shuttle Ingress', 'Brahma Abhishek Puja', 'Mandakini Sunset Walk'] },
      { day: 3, title: 'Fly to Badrinath Shrine & Return', description: 'Board your helicopter for Badrinath. Undertake early morning Abhishek, participate in prayers, and return to Dehradun via helicopter in the afternoon.', image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Badrinath_Temple.jpg', highlights: ['VIP Badrinath Holy Darshan', 'Tapt Kund Sulphur Dip', 'Valley Flyover Departure'] }
    ]
  },
  {
    id: 'shree-khatu-shyam-yatra-package',
    title: 'Shree Khatu Shyam Yatra',
    subtitle: 'Spiritual Tour · Sikar Pilgrimage',
    duration: '2 Days / 1 Night',
    pricing: '₹15,500',
    rating: 4.90,
    reviewsCount: 31,
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1200&auto=format&fit=crop',
    overview: 'Journey to the legendary Khatu Shyam Temple in Sikar, Rajasthan. Dedicated to Lord Shyam (the Sheesh ke Daani, Barbarika of Mahabharata), this pilgrimage is believed to bring extraordinary spiritual strength and blessings.',
    highlights: [
      'Convenient round-trip transfers from Jaipur/Delhi',
      'Premium heritage hotel stay in Sikar',
      'VIP priority access into the temple corridor',
      'Local priest escort for Abhishek Puja',
      'Evening spiritual bhajan sandhya'
    ],
    category: 'Travel Package',
    difficulty: 'Easy',
    bestSeason: 'All Year',
    itinerary: [
      { day: 1, title: 'Jaipur Arrival & Drive to Sikar', description: 'Arrive in Jaipur and undertake a plush road transfer to Sikar. Check into a beautiful traditional Rajasthani Haveli hotel. Attend the captivating evening Sandhya Aarti at Khatu Shyam Temple.', image: 'https://images.unsplash.com/photo-1590073844006-33379778ae09?q=80&w=1200&auto=format&fit=crop', highlights: ['Plush Highway Transfer', 'Rajasthani Haveli Lodging', 'Khatu Shyam Sandhya Aarti'] },
      { day: 2, title: 'Shree Khatu Shyam Abhishek & Sacred Return', description: 'Participate in the highly auspicious morning Abhishek and take sacred holy water as prasad. Visit the Shyam Kund before undertaking your road transfer back to Jaipur or Delhi.', image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1200&auto=format&fit=crop', highlights: ['Morning Abhishek Darshan', 'Shyam Kund Holy Bath', 'Plush Return Transfer'] }
    ]
  },
  {
    id: 'chalo-series-custom-package',
    title: 'Chalo Series Custom',
    subtitle: 'Bespoke Tour · Flexible Planning',
    duration: '3 Days / 2 Nights',
    pricing: '₹25,000',
    rating: 4.89,
    reviewsCount: 22,
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop',
    overview: 'Design your dream holiday or spiritual exploration. Choose from any luxury retreat in Uttarakhand, Rajasthan, or Himachal, and let our curators craft an elite itinerary tailored exactly to your schedule, group size, and spiritual preferences.',
    highlights: [
      'Fully personalized routes and activities',
      'Private certified travel coordinator at your service',
      'Luxury vehicles and premium boutique hotels',
      'Flexible scheduling and spontaneous detours',
      '24/7 dedicated support team'
    ],
    category: 'Travel Package',
    difficulty: 'Easy',
    bestSeason: 'All Year',
    itinerary: [
      { day: 1, title: 'Private Consultation & Curated Arrival', description: 'Your private executive helper greets you upon arrival at the destination of your choice. Map out active itinerary layers over high-quality local refreshments.', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop', highlights: ['In-person Guide Introduction', 'Route Calibration Coffee', 'Chauffeur Comfort Setup'] },
      { day: 2, title: 'Bespoke Exploration & Elite Local Encounters', description: 'Embark on experiences curated specifically for your tastes, whether spiritual rites, remote ridge hikes, heritage home visits, or traditional food trails.', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop', highlights: ['Curated Local Safaris', 'Authentic Local Cuisine', 'Flexible Detour Freedom'] }
    ]
  }
];
finalPackages.push(...toursDef);

// 4. Add 11 CHALO SERIES DESTINATION PACKAGES (Destinations)
chaloDestinations.forEach(cd => {
  const slug = cd.slug;
  const image = imagesMap[slug] || 'https://images.unsplash.com/photo-1598977123418-45f04b01d4ac?q=80&w=1200&auto=format&fit=crop';
  
  // Safely extract nearby attractions as string
  let attractionsStr = '';
  if (cd.guideContent && cd.guideContent.nearbyAttractions) {
    if (typeof cd.guideContent.nearbyAttractions === 'string') {
      attractionsStr = cd.guideContent.nearbyAttractions;
    } else if (Array.isArray(cd.guideContent.nearbyAttractions)) {
      attractionsStr = cd.guideContent.nearbyAttractions.join(', ');
    }
  }
  if (!attractionsStr) attractionsStr = cd.name;

  const highlights = [
    `Category: ${cd.badge || 'Spiritual'}`,
    `Best Season: ${cd.guideContent?.bestTimeToVisit || 'All Year'}`,
    `Key Attractions: ${attractionsStr.substring(0, 60)}${attractionsStr.length > 60 ? '...' : ''}`
  ];
  
  // Custom 2-day immersive itinerary
  const itinerary = [
    {
      day: 1,
      title: 'Historical Walk & Heartwarming Sunset Aarti',
      description: `Arrive in the legendary valley of ${cd.name}. Accompanied by a private local host, settle into a curated premium resort with exceptional views. Embark on a sunset heritage walk exploring ancient pathways, local craft clusters, and experience the magical spiritual sunset Aarti.`,
      image: image,
      highlights: ['Bespoke Welcome Refreshment', 'Heritage Walking Excursion', 'Private Aarti Viewing Deck']
    },
    {
      day: 2,
      title: 'Sunrise Spirituality & Hidden Meadows Discovery',
      description: `Awaken to sound therapy and local herbal tea. Explore ${cd.name}'s hidden corners, including traditional landmarks, nearby riverbanks or hill meadows, and return with refreshing spiritual clarity and handcrafted local souvenirs.`,
      image: image,
      highlights: ['Sunrise Peak Breathing Meditation', 'Secluded Path Exploration', 'Bespoke Private Return']
    }
  ];
  
  finalPackages.push({
    id: `${slug}-destination`,
    title: `${cd.name} — ${cd.tagline}`,
    subtitle: `Custom Destination · ${cd.badge || 'Cultured Journey'}`,
    duration: '3 Days / 2 Nights',
    pricing: pricingMap[slug] || '₹10,000',
    rating: getRating(slug),
    reviewsCount: getReviewsCount(slug),
    image: image,
    overview: cd.shortDescription || cd.guideContent?.overview || '',
    highlights: highlights,
    itinerary: itinerary,
    category: 'Destination',
    difficulty: 'Easy',
    bestSeason: cd.guideContent?.bestTimeToVisit || 'All Year'
  });
});

console.log(`Generated a total of ${finalPackages.length} unified Route Story packages.`);

// Now let's write /src/data.ts
const tsContent = `import { TravelPackage, Review, GalleryItem } from './types';

export const FEATURED_PACKAGES: TravelPackage[] = ${JSON.stringify(finalPackages, null, 2)};

export const GENERAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Gayatri Nair',
    rating: 5,
    text: 'Route Story has redefined pilgrimage for us. The helicopter flight over Yamunotri at sunrise with hot saffron tea on landing was simple poetry. Their level of attention is absolutely unparalleled.',
    date: 'May 14, 2026',
    destination: 'yamunotri-pilgrimage'
  },
  {
    id: 'rev-2',
    name: 'Kabir Malhotra',
    rating: 5,
    text: 'A truly flawless pilgrimage. Flew in comfort directly to Kedarnath with our private host and returned to a serene riverside camp on the banks of Mandakini. Masterfully done.',
    date: 'April 28, 2026',
    destination: 'kedarnath-pilgrimage'
  },
  {
    id: 'rev-3',
    name: 'Anjali Deshmukh',
    rating: 5,
    text: 'The silence at Badrinath is magical. The sunset prayer held on the banks of Alaknanda river for just our family was an emotional, unforgettable moment. Thank you, Route Story.',
    date: 'March 19, 2026',
    destination: 'badrinath-pilgrimage'
  },
  {
    id: 'rev-4',
    name: 'Vikram Rawat',
    rating: 5,
    text: 'The Valley of Flowers trek organized by Route Story was an absolute masterclass in luxury trekking. Moving through UNESCO meadows with local naturalist guides was pure magic.',
    date: 'July 11, 2026',
    destination: 'valley-of-flowers-trek'
  },
  {
    id: 'rev-5',
    name: 'Siddharth Jain',
    rating: 5,
    text: 'Visiting Kainchi Dham of Neem Karoli Baba was on our list for years. Route Story designed a perfect heritage itinerary, bypassing all pilgrim noise. Highly professional.',
    date: 'June 05, 2026',
    destination: 'kainchi-dham-destination'
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
    url: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop',
    title: 'Haridwar Ganga Aarti Ghats',
    location: 'Haridwar, Holy Ganges',
    aspect: 'wide'
  },
  {
    id: 'gal-6',
    url: 'https://images.unsplash.com/photo-1598977123418-45f04b01d4ac?q=80&w=800&auto=format&fit=crop',
    title: 'Rishikesh Hanging Bridge Valley',
    location: 'Rishikesh, Himalayas',
    aspect: 'normal'
  },
  {
    id: 'gal-7',
    url: 'https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?q=80&w=800&auto=format&fit=crop',
    title: 'Udaipur Shimmering Palace',
    location: 'Udaipur, Rajasthan',
    aspect: 'wide'
  },
  {
    id: 'gal-8',
    url: 'https://images.unsplash.com/photo-1504681869696-d977211a5f4c?q=80&w=800&auto=format&fit=crop',
    title: 'Jaisalmer Golden Dunes Fort',
    location: 'Jaisalmer, Thar Desert',
    aspect: 'tall'
  }
];
`;

fs.writeFileSync('src/data.ts', tsContent);
console.log("Successfully wrote all 31 unified packages, custom ratings, reviews and gallery items to src/data.ts!");
