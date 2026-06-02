import { TravelPackage, Review, GalleryItem } from './types';

export const FEATURED_PACKAGES: TravelPackage[] = [
  {
    id: 'rishikesh-sanctuary',
    title: 'Ananda Sacred Celestial Retreat & Spa',
    subtitle: 'Rishikesh Sanctuary of Healing & Spiritual Alchemy',
    duration: '5 Days / 4 Nights',
    pricing: '₹2,35,000',
    rating: 4.98,
    reviewsCount: 42,
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1200&auto=format&fit=crop',
    overview: 'Perched in the spiritual foothills of the majestic Himalayas, this bespoke retreat combines the ancient sciences of Ayurveda, Yoga, and Vedanta with premium modern luxury. Retreat from the world to experience deep rejuvenation, gourmet organic dining, and private access to the holy river Ganges.',
    highlights: [
      'Private luxury villa with a heated infinity pool overlooking the Ganges valley',
      'Personalized daily Ayurvedic wellness assessment and customized treatment schedule',
      'Exclusive sunrise yoga and meditation sessions led by Himalayan masters',
      'VVIP private seating at the spectacular evening Ganga Aarti ceremony',
      'Helicopter transfers from the regional airport directly to the resort helipad'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Celestial Arrival & Twilight Blessing',
        description: 'Arrive via private helicopter at the mountain sanctuary. Welcome by our wellness curators with a traditional Himalayan mineral bath. In the evening, witness a private sunset fire-cleansing ritual on the resort deck as the mountains fade to amber.',
        image: 'https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?q=80&w=1200&auto=format&fit=crop',
        highlights: ['Helicopter arrival', 'Personal wellness consultation', 'Sunset welcoming ritual']
      },
      {
        day: 2,
        title: 'Ayurvedic Awakening & Sensory Massage',
        description: 'Begin with specialized Ayurvedic diagnostics, followed by a four-hand Abhyanga oil massage. In the afternoon, practice somatic float therapy and mindful breathing in the glass meditation pavilion overlooking the misty forest canopy.',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop',
        highlights: ['Abhyanga massage therapy', 'Organic pranayama yoga', 'Private nutrition chef curation']
      },
      {
        day: 3,
        title: 'Secluded Ganges Rafting & Riverside Gourmet',
        description: 'Set out on an ultra-luxury private rafting expedition down a scenic, calm stretch of the Ganges. Anchor at a secluded white-sand river beach, where a luxurious white-tented gourmet setup awaits with a personal butler-served champagne lunch.',
        image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1200&auto=format&fit=crop',
        highlights: ['Private river rafting', 'Beachside champagne lunch', 'Forest medicinal trail walk']
      },
      {
        day: 4,
        title: 'Private Ganga Aarti & Sacred Sound Healing',
        description: 'Spend the morning at leisure in the world-renowned infinity spa. At dusk, we escort you to a private, candle-lit stone ghat on the edge of the Ganges for a magnificent Vedic Ganga Aarti ceremony curated for you alone, accompanied by live sitar music.',
        image: 'https://images.unsplash.com/photo-1561361531-9952a65fe002?q=80&w=1200&auto=format&fit=crop',
        highlights: ['Exclusive Ganga Aarti access', 'Sitar concert on the riverbank', 'Caviar & herbal cocktail pairing']
      },
      {
        day: 5,
        title: 'Dawn Meditation & Departure Journey',
        description: 'Conclude your transformative retreat with a powerful dawn candle meditation and a final herbal infusion breakfast. Board your charter flight with a sense of eternal clarity and inner peace, carrying the essence of the Himalayas.',
        image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1200&auto=format&fit=crop',
        highlights: ['Dawn sound healing', 'Gourmet departure luncheon', 'Himalayan parting tokens']
      }
    ]
  },
  {
    id: 'mussoorie-estate',
    title: 'The Cloud-Kissed Tudor Estate Escape',
    subtitle: 'Mussoorie Vintage Romance & High-altitude Solitude',
    duration: '6 Days / 5 Nights',
    pricing: '₹2,80,000',
    rating: 4.95,
    reviewsCount: 38,
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
    overview: 'Enter a bygone era of unparalleled Victorian elegance. Nestled amidst towering oak trees and heavy mountain mists, this 19th-century luxury Tudor estate provides absolute seclusion, bespoke vintage fireplaces, and stunning panoramas of the snow-capped Garhwal peaks.',
    highlights: [
      'Stays in a lavishly restored Tudor Royal Suite with fireplace and private veranda',
      'Traditional British Afternoon Tea service in our sun-drenched orchid glasshouse',
      'Curated mountain-trail gourmet picnic driven by a vintage Land Rover classic Defender',
      'Exclusive stargazing night using our professional-grade astronomical observatory dome',
      'Private high-altitude cheese and luxury single-malt pairing evening'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival at the Castle in the Clouds',
        description: 'Ascend the winding pine-scented tracks to our grand private gates. Our valets welcome you with hot mulled wine beside a crackling hearth. Settle into the royal Tudor suite featuring polished mahogany floorboards and handcrafted brass bathtubs.',
        image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop',
        highlights: ['Private estate arrival', 'Vintage fireside welcome', 'Heritage suite immersion']
      },
      {
        day: 2,
        title: 'Orchid Glasshouse Breakfast & Forest Bathing',
        description: 'Wake to mountain mists swirling past your glass. Enjoy a gourmet visual breakfast in the conservatory. Following this, a certified naturalist guides you on an exclusive forest bathing walk through ancient oaks, pointing out rare species.',
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop',
        highlights: ['Glasshouse gourmet dining', 'Eco-mindfulness walk', 'Hand-brewed single-origin coffees']
      },
      {
        day: 3,
        title: 'Defender Expedition & Mountain-Top Feast',
        description: 'Board our impeccably restored vintage 1974 Land Rover Defender. Travel up secret, scenic crests to a private peak. Here, our waitstaff sets elegant crystal on linen tablecloths for an exquisite Italian lunch looking out at the snow caps.',
        image: 'https://images.unsplash.com/photo-1533587837720-4e5cb48292fb?q=80&w=1200&auto=format&fit=crop',
        highlights: ['Vintage Defender safari', 'Alpine alpine peak banquet', 'Cellared vintage wines']
      },
      {
        day: 4,
        title: 'Artists Conservatory & High-Tea Lounge',
        description: 'Spend an inspiring morning painting or writing with a local artisan, or simply relax. In the afternoon, enjoy a high-tea celebration consisting of freshly baked scones, clotted Devonshire cream, and single-estate Darjeeling black tea.',
        image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=1200&auto=format&fit=crop',
        highlights: ['Artisan interaction workshop', 'British royal tea service', 'Candlelit harp dining']
      },
      {
        day: 5,
        title: 'Stargazing Seclusion & Observatory Dinner',
        description: 'Indulge in a premium Himalayan herbal hot bath. At nightfall, gain private access to our observatory dome. Look deep into Jupiter’s rings and distant nebulae with our astronomer, accompanied by single malts and high-end cheeses.',
        image: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=1200&auto=format&fit=crop',
        highlights: ['Dome observatory tour', 'Cognac and artisanal cheese tasting', 'Gourmet multi-course gastronomy']
      },
      {
        day: 6,
        title: 'Misty Alpine Sunrise Farewell',
        description: 'Witness the snow peaks glow golden-orange on a gorgeous final sunrise. After a heartwarming breakfast on the verandah, our classic chauffeured luxury vehicle whisks you back down the mountain, leaving you deeply inspired.',
        image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop',
        highlights: ['Gold sun mountain view', 'Chauffeured departure', 'Heritage photo keepsake']
      }
    ]
  },
  {
    id: 'corbett-woodlands',
    title: 'The Majestic Tiger Woodlands Safari',
    subtitle: 'Corbett Wilderness Luxury Lodge & Deep Wild Expedition',
    duration: '4 Days / 3 Nights',
    pricing: '₹3,45,000',
    rating: 4.99,
    reviewsCount: 56,
    image: 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?q=80&w=1200&auto=format&fit=crop',
    overview: 'Enter a pristine riverine wilderness where the legendary Royal Bengal Tiger reigns supreme. Our ultra-luxury thatched glamping cottages combine canvas-walled romance with modern climate control, handcrafted copper details, private viewing decks, and elite naturalists.',
    highlights: [
      'Ultra-luxury safari tented lodge overlooking the rushing Ramganga River',
      'Exclusive private customized open-top 4x4 safaris driven by elite naturalists',
      'Gourmet forest barbecues under lanterns hung from centuries-old trees',
      'Private sunset river deck with champagne, caviar, and live flutist melody',
      'Eco-luxury wellness therapies designed around raw forest medicinal herbs'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Savannah Skies & Secret Lodge',
        description: 'Drive through beautiful dense sal forests to our riverside outpost of luxury. Enjoy chilled lemongrass towels and fresh forest juices. Enter your grand canvas-roof villa, detailed with rich teak, Persian rugs, and deep copper clawfoot tubs.',
        image: 'https://images.unsplash.com/photo-1581850518616-bcb8077fa213?q=80&w=1200&auto=format&fit=crop',
        highlights: ['Sal forest arrival', 'Teakwood villa sanctuary', 'Riverside wild sundowner']
      },
      {
        day: 2,
        title: 'Into the Kingdom of the Orange Emperor',
        description: 'Wake up at 5:00 AM to the distant roar of a tiger. Board your private 4x4 safari with our master tracker. Traverse golden meadows and mist-shrouded rivers to witness the Royal Bengal Tiger stealthily patrol its vast, green territory.',
        image: 'https://images.unsplash.com/photo-1602491453977-1b3991f42253?q=80&w=1200&auto=format&fit=crop',
        highlights: ['Private dawn safari trek', 'Rare bird spotting walk', 'Warm forest tea service']
      },
      {
        day: 3,
        title: 'Champagne Deck Sundowner & Wilderness Feast',
        description: 'Explore the grasslands on a magnificent afternoon river trek. As dusk settles, we guide you to a floating deck on the Ramganga. Savor champagne with fine caviar as mist rises off the water. At night, delight in an expansive candlelit sal-forest barbecue.',
        image: 'https://images.unsplash.com/photo-1541004995602-b3e89b784953?q=80&w=1200&auto=format&fit=crop',
        highlights: ['Floating river platform', 'Champagne sunset toast', 'Forest lantern barbecue banquet']
      },
      {
        day: 4,
        title: 'Dawn Safari & River Departure',
        description: 'Take one last safari to search for wild tusker herds and golden leopards. Return to the lodge for a rich organic farewell brunch. Depart with stunning professional photographs and a wild spirit.',
        image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1200&auto=format&fit=crop',
        highlights: ['Tusker photo safari', 'Riverside gourmet farewell', 'Chauffeur luxury transfer']
      }
    ]
  },
  {
    id: 'himalayan-meadows',
    title: 'Himalayan Meadows & Glacier Expedition',
    subtitle: 'Nanda Devi Biosphere High-Altitude Helicopter Expedition',
    duration: '7 Days / 6 Nights',
    pricing: '₹4,85,000',
    rating: 5.0,
    reviewsCount: 29,
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
    overview: 'This is the crown jewel of high-altitude travel. Fly inside deep snow canyons via custom VIP helicopters, landing on pristine alpine glaciers. Savor high-altitude dome bubble camping under millions of brilliant stars and hike through fields of extremely rare wild orchids.',
    highlights: [
      'Private helicopter transport across towering peak ridges (Nanda Devi views)',
      'Luxury geodesic insulated dome tents with heated beds and transparent roofs',
      'Exclusive guided trekking in the Valley of Flowers with elite mountain botanists',
      'Private Himalayan sherpa and gourmet alpine personal chef service',
      'High-altitude hot tub soaking overlooking majestic snow-clad peaks'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Helicopter Mountain Crossing & Glacier Landing',
        description: 'Board our VIP high-performance helicopter. Soar over vertical canyon green walls right into the Nanda Devi biosphere. Touch down on a high alpine meadows valley. Enter your heated geodesic dome tent with panoramic view ceilings.',
        image: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=1200&auto=format&fit=crop',
        highlights: ['Private helicopter charter flight', 'Geodesic luxury camp setup', 'Acclimatization gourmet high tea']
      },
      {
        day: 2,
        title: 'Valleys of Rare Orchids & Dream Meadows',
        description: 'Set out on foot with our veteran mountain botanist. Enter quiet valleys carpeted with rare blue poppies and yellow cobra lilies. Settle down inside a luxury canvas canopy set up amidst the blossoms for a warm organic wild honey lunch.',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
        highlights: ['Exclusive alpine botany tour', 'Meadow private lunch', 'Wild mountain aromatherapy pack']
      },
      {
        day: 3,
        title: 'The Glacial Lake Sanctuary Journey',
        description: 'Trek under soaring peaks of 23,000 feet to reach a crystal-clear sacred glacial lake. Our sherpas set up luxurious carpets and fur seats right on the stone lake shore, serving warm hot cocoa and truffles in full mountain stillness.',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
        highlights: ['Glacial lake premium camp', 'Fur-insulated loungers', 'Silent meditation session']
      },
      {
        day: 4,
        title: 'Himalayan Hot Tub & Star Dome Night',
        description: 'Return to our high-meadow camp. Spend the afternoon relaxing inside our heated mountain hot tub, glass in hand, gazing upon the dramatic snow-white ridges of Dunagiri. Sleep under a sky teeming with visible celestial galaxies.',
        image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200&auto=format&fit=crop',
        highlights: ['Hot tub scenic soaking', 'Himalayan herbal full-body oil massage', 'Celestial laser sky viewing']
      },
      {
        day: 5,
        title: 'Ascending Chopta’s Holy Winds & Ridge Shrines',
        description: 'Fly briefly to Chopta, the "Switzerland of India". Hike up smooth grassy ridges to ancient moss-covered stone shrines where bells ring in the cold thin air. Savor hot saffron tea while taking in a majestic 360-degree Himalayan skyline.',
        image: 'https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=1200&auto=format&fit=crop',
        highlights: ['Brief peak flight', 'Chopta high-ridge trek', 'Sunset bell ring ritual']
      },
      {
        day: 6,
        title: 'Gourmet Peak Dinner Under the Heavens',
        description: 'Celebrate our final evening with an incredible 5-course alpine fusion dinner cooked by our executive chef, featuring high-altitude wild herbs, Himalayan truffle oil, and local pine honeys, accompanied by live chamber music.',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop',
        highlights: ['5-course alpine feast', 'Classical duet performance', 'Hearth side story telling']
      },
      {
        day: 7,
        title: 'Helicopter Sunrise Farewell flight',
        description: 'Fly out over the mountains during sunrise as peaks glow pink and gold. Savor final high-altitude parting tokens before heading onward, completely transformed in spirit.',
        image: 'https://images.unsplash.com/photo-1494548162494-384bba4ab999?q=80&w=1200&auto=format&fit=crop',
        highlights: ['Sunrise peak flypast', 'Airport private terminal drop', 'Journey commemorative badge']
      }
    ]
  }
];

export const GENERAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Gayatri Nair',
    rating: 5,
    text: 'JOURNEYO has redefined exploration for me. The helicopter flight over Dunagiri during sunrise with hot saffron tea on landing was simple poetry. Their level of attention is absolutely unparalleled.',
    date: 'May 14, 2026',
    destination: 'Himalayan Meadows & Glacier Expedition'
  },
  {
    id: 'rev-2',
    name: 'Kabir Malhotra',
    rating: 5,
    text: 'A truly flawless safari adventure. Tracked a beautiful female tiger on Day 2 with our private naturalist, and returned to a floating candlelit champagne deck on the river Ramganga. Masterfully done.',
    date: 'April 28, 2026',
    destination: 'The Majestic Tiger Woodlands Safari'
  },
  {
    id: 'rev-3',
    name: 'Anjali Deshmukh',
    rating: 5,
    text: 'The silence at the Ananda sacred retreat in Rishikesh is mystical. The sunset Vedic Aarti held on a private secluded ghat for just my husband and myself was an emotional, unforgettable moment. Thank you, JOURNEYO.',
    date: 'March 19, 2026',
    destination: 'Ananda Sacred Celestial Retreat & Spa'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    url: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=800&auto=format&fit=crop',
    title: 'Amalfi Radiance Vista',
    location: 'Positano, Italy',
    aspect: 'tall'
  },
  {
    id: 'gal-2',
    url: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=800&auto=format&fit=crop',
    title: 'Midnight Overwater Serenity',
    location: 'Bora Bora, French Polynesia',
    aspect: 'wide'
  },
  {
    id: 'gal-3',
    url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop',
    title: 'Eternal Golden Temple Shadows',
    location: 'Kyoto, Japan',
    aspect: 'normal'
  },
  {
    id: 'gal-4',
    url: 'https://images.unsplash.com/photo-1482862549707-f63cb32c5fd9?q=80&w=800&auto=format&fit=crop',
    title: 'Himalayan Ridge Dreamscape',
    location: 'Garhwal Himalayas / Uttarakhand',
    aspect: 'tall'
  },
  {
    id: 'gal-5',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
    title: 'The Turquoise Lagoon',
    location: 'Maldives Private Islet',
    aspect: 'wide'
  },
  {
    id: 'gal-6',
    url: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop',
    title: 'Morning Serengeti Ascent',
    location: 'Maasai Mara, Kenya',
    aspect: 'normal'
  },
  {
    id: 'gal-7',
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop',
    title: 'Mist-clad Emerald Valley',
    location: 'Yosemite, USA',
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
