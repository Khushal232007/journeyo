import { TravelPackage, Review, GalleryItem } from './types';

export const FEATURED_PACKAGES: TravelPackage[] = [
  {
    "id": "valley-of-flowers-trek",
    "title": "Valley of Flowers Trek",
    "subtitle": "Himalayan Trek · Moderate Level",
    "duration": "6 Days / 5 Nights",
    "pricing": "₹18,500",
    "rating": 4.86,
    "reviewsCount": 66,
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/77/Meadows_of_Valley_of_Flowers_National_Park._Uttarakhand%2C_India.jpg",
    "overview": "This trek takes you through beautiful meadows full of alpine flowers, mountain views, and quiet paths that are perfect for nature lovers.",
    "highlights": [
      "Difficulty: Moderate",
      "Best Season: July to September",
      "Duration: 6 Days",
      "Location: Garhwal Himalayas",
      "Ideal for: Trekkers & Nature Lovers"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Explore and Ascent",
        "description": "Drive from Rishikesh/Haridwar to Govindghat/Joshimath.",
        "image": "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Moderate Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 2,
        "title": "Trek from Govindghat to Ghangaria (13km)",
        "description": "Trek from Govindghat to Ghangaria (13km).",
        "image": "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Moderate Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 3,
        "title": "Explore and Ascent",
        "description": "Trek from Ghangaria to Valley of Flowers and back (8km).",
        "image": "https://images.unsplash.com/photo-1469521669894-1199354d7237?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Moderate Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 4,
        "title": "Explore and Ascent",
        "description": "Trek from Ghangaria to Hemkund Sahib and back (12km).",
        "image": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Moderate Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 5,
        "title": "Trek back to Govindghat and drive to Joshimath",
        "description": "Trek back to Govindghat and drive to Joshimath.",
        "image": "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Moderate Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 6,
        "title": "Drive back to Rishikesh",
        "description": "Drive back to Rishikesh.",
        "image": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Moderate Terrain",
          "Guided Traversal"
        ]
      }
    ],
    "category": "Trek",
    "difficulty": "Moderate",
    "bestSeason": "July to September"
  },
  {
    "id": "kedarkantha-trek",
    "title": "Kedarkantha Trek",
    "subtitle": "Himalayan Trek · Easy-Moderate Level",
    "duration": "6 Days / 5 Nights",
    "pricing": "₹12,500",
    "rating": 4.95,
    "reviewsCount": 50,
    "image": "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=1200&auto=format&fit=crop",
    "overview": "If you love snow, this is the perfect winter trek. It offers beautiful snowy camping grounds and a mountain peak path that is exciting yet manageable.",
    "highlights": [
      "Difficulty: Easy-Moderate",
      "Best Season: December to April",
      "Duration: 6 Days",
      "Location: Garhwal Himalayas",
      "Ideal for: Trekkers & Nature Lovers"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Drive from Dehradun to Sankri (190km, 8-10 hours)",
        "description": "Drive from Dehradun to Sankri (190km, 8-10 hours).",
        "image": "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Easy-Moderate Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 2,
        "title": "Trek from Sankri to Juda Ka Talab (4km, 4 hours)",
        "description": "Trek from Sankri to Juda Ka Talab (4km, 4 hours).",
        "image": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Easy-Moderate Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 3,
        "title": "Explore and Ascent",
        "description": "Trek from Juda Ka Talab to Kedarkantha Base (4km, 3 hours).",
        "image": "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Easy-Moderate Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 4,
        "title": "Explore and Ascent",
        "description": "Summit Push: Base to Kedarkantha Summit and back to Hargaon (6km, 7 hours).",
        "image": "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Easy-Moderate Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 5,
        "title": "Trek from Hargaon to Sankri (6km, 4 hours)",
        "description": "Trek from Hargaon to Sankri (6km, 4 hours).",
        "image": "https://images.unsplash.com/photo-1521542464131-93c29219ea93?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Easy-Moderate Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 6,
        "title": "Drive back from Sankri to Dehradun",
        "description": "Drive back from Sankri to Dehradun.",
        "image": "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Easy-Moderate Terrain",
          "Guided Traversal"
        ]
      }
    ],
    "category": "Trek",
    "difficulty": "Easy-Moderate",
    "bestSeason": "December to April"
  },
  {
    "id": "roopkund-trek",
    "title": "Roopkund Trek",
    "subtitle": "Himalayan Trek · Moderate-Difficult Level",
    "duration": "8 Days / 7 Nights",
    "pricing": "₹19,800",
    "rating": 4.97,
    "reviewsCount": 62,
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/ff/Roopkund_Lake%2C_Uttarakhand%2C_India.jpg",
    "overview": "This trek is known for its deep forests, high mountain meadows, and a lake with a bit of mystery around it. It is a slightly challenging hike with fantastic views.",
    "highlights": [
      "Difficulty: Moderate-Difficult",
      "Best Season: May to June, September to October",
      "Duration: 8 Days",
      "Location: Garhwal Himalayas",
      "Ideal for: Trekkers & Nature Lovers"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Explore and Ascent",
        "description": "Drive from Rishikesh to Lohajung (210km, 10 hours).",
        "image": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Moderate-Difficult Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 2,
        "title": "Trek from Lohajung to Didna Village (6",
        "description": "Trek from Lohajung to Didna Village (6.5km, 5 hours).",
        "image": "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Moderate-Difficult Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 3,
        "title": "Trek from Didna to Ali Bugyal (7km, 6 hours)",
        "description": "Trek from Didna to Ali Bugyal (7km, 6 hours).",
        "image": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Moderate-Difficult Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 4,
        "title": "Explore and Ascent",
        "description": "Trek from Ali Bugyal to Patar Nachuni via Bedni Bugyal (7km, 5 hours).",
        "image": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Moderate-Difficult Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 5,
        "title": "Explore and Ascent",
        "description": "Trek from Patar Nachuni to Bhagwabasa (6km, 5 hours).",
        "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Moderate-Difficult Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 6,
        "title": "Explore and Ascent",
        "description": "Summit Day: Bhagwabasa to Roopkund and back to Patar Nachuni (10km, 9 hours).",
        "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Moderate-Difficult Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 7,
        "title": "Explore and Ascent",
        "description": "Trek from Patar Nachuni to Lohajung via Wan (15km, 8 hours).",
        "image": "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Moderate-Difficult Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 8,
        "title": "Drive back from Lohajung to Rishikesh",
        "description": "Drive back from Lohajung to Rishikesh.",
        "image": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Moderate-Difficult Terrain",
          "Guided Traversal"
        ]
      }
    ],
    "category": "Trek",
    "difficulty": "Moderate-Difficult",
    "bestSeason": "May to June, September to October"
  },
  {
    "id": "har-ki-dun-trek",
    "title": "Har Ki Dun Trek",
    "subtitle": "Himalayan Trek · Easy-Moderate Level",
    "duration": "7 Days / 6 Nights",
    "pricing": "₹15,200",
    "rating": 4.99,
    "reviewsCount": 54,
    "image": "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1200&auto=format&fit=crop",
    "overview": "A quiet walk through old wooden mountain villages and green valleys, where you can see traditional village life up close.",
    "highlights": [
      "Difficulty: Easy-Moderate",
      "Best Season: Spring & Post-Monsoon",
      "Duration: 7 Days",
      "Location: Garhwal Himalayas",
      "Ideal for: Trekkers & Nature Lovers"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Drive from Dehradun to Sankri (190km, 8-10 hours)",
        "description": "Drive from Dehradun to Sankri (190km, 8-10 hours).",
        "image": "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Easy-Moderate Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 2,
        "title": "Explore and Ascent",
        "description": "Drive to Taluka and trek to Pauni Garaat (12km, 6 hours).",
        "image": "https://images.unsplash.com/photo-1521542464131-93c29219ea93?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Easy-Moderate Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 3,
        "title": "Explore and Ascent",
        "description": "Trek from Pauni Garaat to Kalkatiyadhar (8km, 6 hours).",
        "image": "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Easy-Moderate Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 4,
        "title": "Explore and Ascent",
        "description": "Trek from Kalkatiyadhar to Har Ki Dun and back (10km, 7 hours).",
        "image": "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Easy-Moderate Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 5,
        "title": "Trek from Kalkatiyadhar to Boslo (5km, 3 hours)",
        "description": "Trek from Kalkatiyadhar to Boslo (5km, 3 hours).",
        "image": "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Easy-Moderate Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 6,
        "title": "Explore and Ascent",
        "description": "Trek from Boslo to Taluka and drive to Sankri (13km, 7 hours).",
        "image": "https://images.unsplash.com/photo-1469521669894-1199354d7237?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Easy-Moderate Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 7,
        "title": "Drive back from Sankri to Dehradun",
        "description": "Drive back from Sankri to Dehradun.",
        "image": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Easy-Moderate Terrain",
          "Guided Traversal"
        ]
      }
    ],
    "category": "Trek",
    "difficulty": "Easy-Moderate",
    "bestSeason": "Spring & Post-Monsoon"
  },
  {
    "id": "chopta-chandrashila-trek",
    "title": "Chopta Chandrashila Trek",
    "subtitle": "Himalayan Trek · Easy Level",
    "duration": "4 Days / 3 Nights",
    "pricing": "₹9,500",
    "rating": 4.99,
    "reviewsCount": 64,
    "image": "https://images.unsplash.com/photo-1472214222541-d510753a4907?q=80&w=1200&auto=format&fit=crop",
    "overview": "This is a great, easy trek if you are just starting out. It takes you through lovely woods and has a clear summit with solid views of Nanda Devi.",
    "highlights": [
      "Difficulty: Easy",
      "Best Season: All Year",
      "Duration: 4 Days",
      "Location: Garhwal Himalayas",
      "Ideal for: Trekkers & Nature Lovers"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Explore and Ascent",
        "description": "Drive from Rishikesh to Sari Village (190km, 7 hours).",
        "image": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Easy Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 2,
        "title": "Explore and Ascent",
        "description": "Trek to Deoria Tal and back to Sari; Drive to Chopta (30km drive).",
        "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Easy Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 3,
        "title": "Explore and Ascent",
        "description": "Trek to Tungnath and Chandrashila Summit; Back to Chopta (8km trek).",
        "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Easy Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 4,
        "title": "Drive back from Chopta to Rishikesh",
        "description": "Drive back from Chopta to Rishikesh.",
        "image": "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Easy Terrain",
          "Guided Traversal"
        ]
      }
    ],
    "category": "Trek",
    "difficulty": "Easy",
    "bestSeason": "All Year"
  },
  {
    "id": "brahmatal-trek",
    "title": "Brahmatal Trek",
    "subtitle": "Himalayan Trek · Moderate Level",
    "duration": "6 Days / 5 Nights",
    "pricing": "₹14,500",
    "rating": 4.95,
    "reviewsCount": 50,
    "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1200&auto=format&fit=crop",
    "overview": "This classic winter trek offers beautiful campsite fields and views of Mt. Trishul. You'll walk through lovely oak forests to reach a high-altitude lake.",
    "highlights": [
      "Difficulty: Moderate",
      "Best Season: Winter & Spring",
      "Duration: 6 Days",
      "Location: Garhwal Himalayas",
      "Ideal for: Trekkers & Nature Lovers"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Explore and Ascent",
        "description": "Drive from Rishikesh to Lohajung (210km, 10 hours).",
        "image": "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Moderate Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 2,
        "title": "Trek from Lohajung to Bekaltal (6km, 5 hours)",
        "description": "Trek from Lohajung to Bekaltal (6km, 5 hours).",
        "image": "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Moderate Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 3,
        "title": "Trek from Bekaltal to Brahmatal (7km, 6 hours)",
        "description": "Trek from Bekaltal to Brahmatal (7km, 6 hours).",
        "image": "https://images.unsplash.com/photo-1469521669894-1199354d7237?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Moderate Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 4,
        "title": "Explore and Ascent",
        "description": "Summit: Brahmatal to Brahmatal Top and back (5km, 4 hours).",
        "image": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Moderate Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 5,
        "title": "Trek from Brahmatal to Lohajung (12km, 7 hours)",
        "description": "Trek from Brahmatal to Lohajung (12km, 7 hours).",
        "image": "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Moderate Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 6,
        "title": "Drive back from Lohajung to Rishikesh",
        "description": "Drive back from Lohajung to Rishikesh.",
        "image": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Moderate Terrain",
          "Guided Traversal"
        ]
      }
    ],
    "category": "Trek",
    "difficulty": "Moderate",
    "bestSeason": "Winter & Spring"
  },
  {
    "id": "dayara-bugyal-trek",
    "title": "Dayara Bugyal Trek",
    "subtitle": "Himalayan Trek · Easy-Moderate Level",
    "duration": "6 Days / 5 Nights",
    "pricing": "₹11,800",
    "rating": 4.95,
    "reviewsCount": 75,
    "image": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
    "overview": "This is one of the gentlest treks around. It takes you through wide, rolling green meadows that are perfect for families and beginners.",
    "highlights": [
      "Difficulty: Easy-Moderate",
      "Best Season: May–July, Sep–Oct",
      "Duration: 6 Days",
      "Location: Garhwal Himalayas",
      "Ideal for: Trekkers & Nature Lovers"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Drive from Dehradun to Raithal (180km, 7 hours)",
        "description": "Drive from Dehradun to Raithal (180km, 7 hours).",
        "image": "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Easy-Moderate Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 2,
        "title": "Trek from Raithal to Gui (4km, 4 hours)",
        "description": "Trek from Raithal to Gui (4km, 4 hours).",
        "image": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Easy-Moderate Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 3,
        "title": "Trek from Gui to Chilapada (3km, 3 hours)",
        "description": "Trek from Gui to Chilapada (3km, 3 hours).",
        "image": "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Easy-Moderate Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 4,
        "title": "Explore and Ascent",
        "description": "Trek from Chilapada to Dayara Bugyal and back (6km, 5 hours).",
        "image": "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Easy-Moderate Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 5,
        "title": "Trek from Chilapada to Raithal (7km, 4 hours)",
        "description": "Trek from Chilapada to Raithal (7km, 4 hours).",
        "image": "https://images.unsplash.com/photo-1521542464131-93c29219ea93?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Easy-Moderate Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 6,
        "title": "Drive back from Raithal to Dehradun",
        "description": "Drive back from Raithal to Dehradun.",
        "image": "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Easy-Moderate Terrain",
          "Guided Traversal"
        ]
      }
    ],
    "category": "Trek",
    "difficulty": "Easy-Moderate",
    "bestSeason": "May–July, Sep–Oct"
  },
  {
    "id": "kuari-pass-trek",
    "title": "Kuari Pass Trek",
    "subtitle": "Himalayan Trek · Moderate Level",
    "duration": "6 Days / 5 Nights",
    "pricing": "₹15,000",
    "rating": 4.89,
    "reviewsCount": 64,
    "image": "https://images.unsplash.com/photo-1482862549707-f63cb32c5fd9?q=80&w=1200&auto=format&fit=crop",
    "overview": "A famous trail that offers some of the most impressive views of India's tallest mountains as you walk through oak forests and high pastures.",
    "highlights": [
      "Difficulty: Moderate",
      "Best Season: Apr–Jun, Sep–Nov",
      "Duration: 6 Days",
      "Location: Garhwal Himalayas",
      "Ideal for: Trekkers & Nature Lovers"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Explore and Ascent",
        "description": "Drive from Rishikesh to Joshimath (250km, 9 hours).",
        "image": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Moderate Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 2,
        "title": "Drive to Dhak and trek to Gulling (6km, 5 hours)",
        "description": "Drive to Dhak and trek to Gulling (6km, 5 hours).",
        "image": "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Moderate Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 3,
        "title": "Trek from Gulling to Tali Top (6km, 5 hours)",
        "description": "Trek from Gulling to Tali Top (6km, 5 hours).",
        "image": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Moderate Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 4,
        "title": "Explore and Ascent",
        "description": "Summit: Tali Top to Kuari Pass and back (10km, 8 hours).",
        "image": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Moderate Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 5,
        "title": "Explore and Ascent",
        "description": "Trek from Tali Top to Auli via Gorson Bugyal (8km, 6 hours).",
        "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Moderate Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 6,
        "title": "Drive back from Auli/Joshimath to Rishikesh",
        "description": "Drive back from Auli/Joshimath to Rishikesh.",
        "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Moderate Terrain",
          "Guided Traversal"
        ]
      }
    ],
    "category": "Trek",
    "difficulty": "Moderate",
    "bestSeason": "Apr–Jun, Sep–Nov"
  },
  {
    "id": "nag-tibba-trek",
    "title": "Nag Tibba Trek",
    "subtitle": "Himalayan Trek · Easy Level",
    "duration": "2 Days / 1 Nights",
    "pricing": "₹5,800",
    "rating": 4.99,
    "reviewsCount": 49,
    "image": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1200&auto=format&fit=crop",
    "overview": "A quick and easy weekend trek starting from Mussoorie. It is a simple walk with lovely views of the mountain range, great for a short break.",
    "highlights": [
      "Difficulty: Easy",
      "Best Season: All Year",
      "Duration: 2 Days",
      "Location: Garhwal Himalayas",
      "Ideal for: Trekkers & Nature Lovers"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Explore and Ascent",
        "description": "Drive from Dehradun to Pantwari; Trek to Base Camp (5km trek).",
        "image": "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Easy Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 2,
        "title": "Explore and Ascent",
        "description": "Trek to Nag Tibba Summit; Back to Pantwari and drive to Dehradun.",
        "image": "https://images.unsplash.com/photo-1521542464131-93c29219ea93?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Easy Terrain",
          "Guided Traversal"
        ]
      }
    ],
    "category": "Trek",
    "difficulty": "Easy",
    "bestSeason": "All Year"
  },
  {
    "id": "bali-pass-trek",
    "title": "Bali Pass Trek",
    "subtitle": "Himalayan Trek · Difficult Level",
    "duration": "8 Days / 7 Nights",
    "pricing": "₹24,500",
    "rating": 4.92,
    "reviewsCount": 72,
    "image": "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1200&auto=format&fit=crop",
    "overview": "An exciting and challenging high-altitude walk for seasoned hikers. It takes you through pine trees, snow fields, and high ridges.",
    "highlights": [
      "Difficulty: Difficult",
      "Best Season: Pre & Post Monsoon",
      "Duration: 8 Days",
      "Location: Garhwal Himalayas",
      "Ideal for: Trekkers & Nature Lovers"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Drive from Dehradun to Sankri (190km, 9 hours)",
        "description": "Drive from Dehradun to Sankri (190km, 9 hours).",
        "image": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Difficult Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 2,
        "title": "Drive to Taluka; Trek to Seema (12km, 6 hours)",
        "description": "Drive to Taluka; Trek to Seema (12km, 6 hours).",
        "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Difficult Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 3,
        "title": "Trek from Seema to Rainbasera (9km, 6 hours)",
        "description": "Trek from Seema to Rainbasera (9km, 6 hours).",
        "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Difficult Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 4,
        "title": "Explore and Ascent",
        "description": "Trek from Rainbasera to Ruinsara Tal (8km, 5 hours).",
        "image": "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Difficult Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 5,
        "title": "Acclimatization day at Ruinsara Tal",
        "description": "Acclimatization day at Ruinsara Tal.",
        "image": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Difficult Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 6,
        "title": "Trek to Odari (4km, 4 hours)",
        "description": "Trek to Odari (4km, 4 hours).",
        "image": "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Difficult Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 7,
        "title": "Explore and Ascent",
        "description": "Summit: Odari to Bali Pass and down to Lower Dhamni (12km, 10 hours).",
        "image": "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Difficult Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 8,
        "title": "Trek to Janki Chatti and drive back to Dehradun",
        "description": "Trek to Janki Chatti and drive back to Dehradun.",
        "image": "https://images.unsplash.com/photo-1521542464131-93c29219ea93?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Difficult Terrain",
          "Guided Traversal"
        ]
      }
    ],
    "category": "Trek",
    "difficulty": "Difficult",
    "bestSeason": "Pre & Post Monsoon"
  },
  {
    "id": "panwali-kantha-trek",
    "title": "Panwali Kantha Trek",
    "subtitle": "Himalayan Trek · Moderate Level",
    "duration": "6 Days / 5 Nights",
    "pricing": "₹13,500",
    "rating": 4.99,
    "reviewsCount": 44,
    "image": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1200&auto=format&fit=crop",
    "overview": "Walk through wide, green mountain meadows that feel endless. This trek gives you lovely panoramic views of the high peaks without being too difficult.",
    "highlights": [
      "Difficulty: Moderate",
      "Best Season: Spring & Autumn",
      "Duration: 6 Days",
      "Location: Garhwal Himalayas",
      "Ideal for: Trekkers & Nature Lovers"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Drive from Rishikesh to Ghuttu (150km, 6 hours)",
        "description": "Drive from Rishikesh to Ghuttu (150km, 6 hours).",
        "image": "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Moderate Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 2,
        "title": "Trek from Ghuttu to Gaurmanda (10km, 7 hours)",
        "description": "Trek from Ghuttu to Gaurmanda (10km, 7 hours).",
        "image": "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Moderate Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 3,
        "title": "Explore and Ascent",
        "description": "Trek from Gaurmanda to Panwali Kantha (10km, 7 hours).",
        "image": "https://images.unsplash.com/photo-1469521669894-1199354d7237?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Moderate Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 4,
        "title": "Explore Panwali Kantha Meadows",
        "description": "Explore Panwali Kantha Meadows.",
        "image": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Moderate Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 5,
        "title": "Trek down to Ghuttu (18km, 8 hours)",
        "description": "Trek down to Ghuttu (18km, 8 hours).",
        "image": "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Moderate Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 6,
        "title": "Drive back from Ghuttu to Rishikesh",
        "description": "Drive back from Ghuttu to Rishikesh.",
        "image": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Moderate Terrain",
          "Guided Traversal"
        ]
      }
    ],
    "category": "Trek",
    "difficulty": "Moderate",
    "bestSeason": "Spring & Autumn"
  },
  {
    "id": "dodital-trek",
    "title": "Dodital Trek",
    "subtitle": "Himalayan Trek · Easy-Moderate Level",
    "duration": "5 Days / 4 Nights",
    "pricing": "₹12,800",
    "rating": 4.87,
    "reviewsCount": 57,
    "image": "https://images.unsplash.com/photo-1473081556163-2a17de81fc97?q=80&w=1200&auto=format&fit=crop",
    "overview": "An enjoyable, leisurely trek through quiet oak forests to a crystal-clear mountain lake. It's a great spot for camping under the stars.",
    "highlights": [
      "Difficulty: Easy-Moderate",
      "Best Season: April to November",
      "Duration: 5 Days",
      "Location: Garhwal Himalayas",
      "Ideal for: Trekkers & Nature Lovers"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Explore and Ascent",
        "description": "Drive from Dehradun to Sangamchatti (160km, 7 hours).",
        "image": "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Easy-Moderate Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 2,
        "title": "Trek from Sangamchatti to Bebra (8km, 5 hours)",
        "description": "Trek from Sangamchatti to Bebra (8km, 5 hours).",
        "image": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Easy-Moderate Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 3,
        "title": "Trek from Bebra to Dodital (14km, 8 hours)",
        "description": "Trek from Bebra to Dodital (14km, 8 hours).",
        "image": "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Easy-Moderate Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 4,
        "title": "Explore and Ascent",
        "description": "Trek to Darwa Pass and back to Dodital (10km, 7 hours).",
        "image": "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Easy-Moderate Terrain",
          "Guided Traversal"
        ]
      },
      {
        "day": 5,
        "title": "Trek back to Sangamchatti and drive to Dehradun",
        "description": "Trek back to Sangamchatti and drive to Dehradun.",
        "image": "https://images.unsplash.com/photo-1521542464131-93c29219ea93?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trek Route Segment",
          "Easy-Moderate Terrain",
          "Guided Traversal"
        ]
      }
    ],
    "category": "Trek",
    "difficulty": "Easy-Moderate",
    "bestSeason": "April to November"
  },
  {
    "id": "yamunotri-pilgrimage",
    "title": "Yamunotri — Sacred River Source Pilgrimage",
    "subtitle": "Char Dham · 1 of 4",
    "duration": "4 Days / 3 Nights",
    "pricing": "₹1,85,000",
    "rating": 4.96,
    "reviewsCount": 34,
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/67/Yamunotri_temple.jpg",
    "overview": "Yamunotri is where the sacred Yamuna River begins. Nestled in the quiet Garhwal mountains, it is one of the four main pilgrimage shrines. People visit the temple here to pay their respects and enjoy the healing warmth of local hot springs.",
    "highlights": [
      "Location: Uttarkashi district, Uttarakhand",
      "Altitude: 3,293 m (10,804 ft)",
      "Best Season: May – June · Sep – Nov",
      "Helicopter Access: From Dehradun (Sahastradhara)",
      "Presiding Deity: Goddess Yamuna"
    ],
    "category": "Pilgrimage",
    "difficulty": "Easy-Moderate",
    "bestSeason": "May – June · Sep – Nov",
    "itinerary": [
      {
        "day": 1,
        "title": "Dehradun to Kharsali Helipad & Luxury Resort Setup",
        "description": "You will fly from Dehradun by private helicopter, enjoying a scenic ride over the pine valleys. Meet your local host at the Kharsali helipad, who will bring you to your cozy, heated log cottage with a warm cup of local saffron tea.",
        "image": "https://images.unsplash.com/photo-1503177119275-0aa32b31d468?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Private Helicopter Charter Ingress",
          "Bespoke Host Greeting",
          "Acclimatization High-Altitude Tea"
        ]
      },
      {
        "day": 2,
        "title": "Sacred Yamunotri Temple Ascent & Surya Kund Dip",
        "description": "Begin with an exclusive VIP trek or custom luxury sedan-chair ride to the Yamunotri Temple. Perform sacred rites, bathe in the natural thermal springs of Surya Kund, offer cooked rice/potatoes as prasad, and receive holy Vedic blessings from the head priests.",
        "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "VIP Temple Access",
          "Surya Kund Thermal Bath",
          "Inner Sanctum Holy Puja"
        ]
      },
      {
        "day": 3,
        "title": "Secluded Hot Springs & Meditation overlooking the Gorges",
        "description": "Engage in absolute, peaceful relaxation. Spend your morning walking through pristine pine forests and alpine meadows. Witness an elite evening sound-healing meditation overlooking the rushing Yamuna stream, with an organic dinner curated by a private chef.",
        "image": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Somatic Forest Bathing",
          "Vedic Chants Therapy",
          "Bespoke Valley Dining"
        ]
      },
      {
        "day": 4,
        "title": "Dawn Purification & Return Charter flight",
        "description": "Participate in a peaceful morning meditation session before boarding your return VIP helicopter flight back to Dehradun. Cherish sacred memories of spiritual cleansing, carrying holy Yamunotri water and tokens.",
        "image": "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Dawn Sound Therapy",
          "Gourmet Farewell Plate",
          "Scenic Valley Flypast"
        ]
      }
    ]
  },
  {
    "id": "gangotri-pilgrimage",
    "title": "Gangotri — Glacial Ganga Source Pilgrimage",
    "subtitle": "Char Dham · 2 of 4",
    "duration": "4 Days / 3 Nights",
    "pricing": "₹1,95,000",
    "rating": 4.97,
    "reviewsCount": 41,
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/36/Gangotri_temple%2C_Uttarakhand%2C_India.jpg",
    "overview": "Gangotri is where the beautiful River Ganga begins. Surrounded by thick green cedar forests and high cliffs, it is a serene valley where you can visit the old temples and sit by the rushing mountain waters.",
    "highlights": [
      "Location: Uttarkashi district, Uttarakhand",
      "Altitude: 3,048 m (10,000 ft)",
      "Best Season: May – June · Sep – Oct",
      "Helicopter Access: From Harsil / Dehradun",
      "Presiding Deity: Goddess Ganga (Bhagirathi)"
    ],
    "category": "Pilgrimage",
    "difficulty": "Easy",
    "bestSeason": "May – June · Sep – Oct",
    "itinerary": [
      {
        "day": 1,
        "title": "Flight across Peak Canyons to Harsil Valley",
        "description": "Fly elegantly from Dehradun into Harsil Helipad, celebrated as the \"Switzerland of the East\" due to its dense cedar forests. Settle into your boutique luxury wooden cottage surrounded by apple orchards and towering Deodar trees.",
        "image": "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Harsil Helicopter Crossing",
          "Heritage Cottage Log-In",
          "Orchard Herbal Tea Walk"
        ]
      },
      {
        "day": 2,
        "title": "The Holy Gangotri Temple VIP Pilgrimage",
        "description": "Drive along the sacred Bhagirathi River through gorgeous mountain passes to reach the Gangotri Temple. Enjoy exclusive fast-track VIP access for the holy puja on the stone slabs beside the mystical turquoise-blue river waters.",
        "image": "https://images.unsplash.com/photo-1447069387593-a5de0862481e?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "VIP Temple Darshan",
          "Bhagirathi River Blessings",
          "Bespoke Vedic Rites"
        ]
      },
      {
        "day": 3,
        "title": "Mindfulness by the Ganga Source & Pine Canopy Trail",
        "description": "Spend a reflective morning hiking near the sacred waters of Gangnan. Savor custom multi-course organic cuisine cooked by your personal chef under high canopy pines, and watch the sun set over the cold mountain ridges.",
        "image": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Glacial Stream Mindfulness",
          "Apple Orchard Picnic",
          "Sunset Harp Performance"
        ]
      },
      {
        "day": 4,
        "title": "Dawn Blessing & Return Helicopter to Dehradun",
        "description": "Begin with sunrise pranayama yoga beside the mountain stream. Board your return helicopter flight over pristine alpine basins, arriving in Dehradun with spiritual clarity.",
        "image": "https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Sunrise Peak Yoga",
          "Deodar Souvenir Bundle",
          "Return Flight to Sahastradhara"
        ]
      }
    ]
  },
  {
    "id": "kedarnath-pilgrimage",
    "title": "Kedarnath — Cosmic Shiva Jyotirlinga Expedition",
    "subtitle": "Char Dham · 3 of 4",
    "duration": "4 Days / 3 Nights",
    "pricing": "₹2,65,000",
    "rating": 4.99,
    "reviewsCount": 88,
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/15/Kedarnath_Temple.jpg",
    "overview": "Kedarnath is one of the most famous mountain shrines, located high up in the Himalayas beside the Mandakini river. Surrounded by snow-covered peaks, visiting this ancient stone temple is a deeply emotional experience for anyone.",
    "highlights": [
      "Location: Rudraprayag district, Uttarakhand",
      "Altitude: 3,583 m (11,755 ft)",
      "Best Season: May – June · Sep – Oct",
      "Helicopter Access: Phata · Guptkashi · Sitapur helipads",
      "Presiding Deity: Lord Shiva (Jyotirlinga)"
    ],
    "category": "Pilgrimage",
    "difficulty": "Moderate-Difficult",
    "bestSeason": "May – June · Sep – Oct",
    "itinerary": [
      {
        "day": 1,
        "title": "Charter Ingress to Guptkashi Helipad Base",
        "description": "Board your premium helicopter from Sahastradhara, crossing magnificent green gorges to land directly in Guptkashi. Settle into a heated luxury cottage with dramatic scenic views of the Kedar Dome peak.",
        "image": "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Direct Heli Ingress",
          "Luxury Glamping Suite Check-in",
          "Acclimatization Ayurvedic Curation"
        ]
      },
      {
        "day": 2,
        "title": "Helicopter Flight to Kedarnath Peak & VIP Inner Sanctum Puja",
        "description": "Fly directly up to Kedarnath Helipad at 11,000+ feet. Your private expert host guides you through the holy corridor. Perform VIP Abhishek Puja directly inside the ancient stone temple, touching the holy Jyotirlinga for profound cosmic alignment.",
        "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "VIP Temple Abhishek",
          "Helicopter Peak Shuttle",
          "Private Brahmin Escort"
        ]
      },
      {
        "day": 3,
        "title": "Mindfulness by Mandakini River & Twilight Sitar Symphony",
        "description": "Explore calm mountain ridges or indulge in warm therapeutic mudpacks. At sunset, experience a highly exclusive chanting meditation session with a live classical sitar performance right on the stone banks of the rushing Mandakini River.",
        "image": "https://images.unsplash.com/photo-1598977123418-45f04b01d4ac?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Mandakini River Sunset Meditation",
          "Live Sitar Performance",
          "Himalayan Herbal Oil Pack"
        ]
      },
      {
        "day": 4,
        "title": "Sacred Triyuginarayan Visit & Dehradun Return",
        "description": "Take a short, gorgeous drive to Triyuginarayan Temple (the site of Lord Shiva and Goddess Parvati’s celestial wedding). Board your returning helicopter flight to Dehradun, having finished a deeply transformative journey.",
        "image": "https://images.unsplash.com/photo-1561361531-9952a65fe002?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Triyuginarayan Heritage Excursion",
          "Vedic Marriage Ground Ritual",
          "Private Terminal Departure"
        ]
      }
    ]
  },
  {
    "id": "badrinath-pilgrimage",
    "title": "Badrinath — Sacred Vishnu Alaknanda Abode",
    "subtitle": "Char Dham · 4 of 4",
    "duration": "4 Days / 3 Nights",
    "pricing": "₹2,45,000",
    "rating": 4.98,
    "reviewsCount": 62,
    "image": "https://upload.wikimedia.org/wikipedia/commons/2/27/Badrinath_Temple_India.jpg",
    "overview": "Badrinath is a beautiful temple town dedicated to Lord Vishnu, sitting on the banks of the Alaknanda River. Situated between towering mountain walls, it has a peaceful, welcoming feel that leaves a lasting impression.",
    "highlights": [
      "Location: Chamoli district, Uttarakhand",
      "Altitude: 3,133 m (10,279 ft)",
      "Best Season: May – June · Sep – Nov",
      "Helicopter Access: Direct helipad landing",
      "Presiding Deity: Lord Vishnu (Badrinarayan)"
    ],
    "category": "Pilgrimage",
    "difficulty": "Easy",
    "bestSeason": "May – June · Sep – Nov",
    "itinerary": [
      {
        "day": 1,
        "title": "Scenic Flyover of Trishul Range & Badrinath Landing",
        "description": "Fly over majestic deep snow valleys and the Trishul ridge. Touch down at the Badrinath Helipad, where our private luxury transporter escorts you to your luxury riverfront suite near the crystal Alaknanda River.",
        "image": "https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Trishul Summit Heli Views",
          "Luxury Riverfront Suite Check-in",
          "Fireside Welcome Feast"
        ]
      },
      {
        "day": 2,
        "title": "Tapt Kund Warm Dip & Maha Puja Darshan",
        "description": "Bathe in the natural healing sulfur waters of the sacred Tapt Kund before ascending for highly private VIP Darshan of Lord Badri Vishal. Sit for meditative prayers with direct temple head priests and receive a holy prasadam bundle.",
        "image": "https://images.unsplash.com/photo-1503177119275-0aa32b31d468?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Tapt Kund Therapeutic Bath",
          "Maha Puja VIP Pass",
          "Direct Blessing from Head Priest"
        ]
      },
      {
        "day": 3,
        "title": "Legendary Mana Village Hike & High-Altitude Stone High Tea",
        "description": "Explore Mana, the legendary last Indian village on the Tibetan border. Gaze at the natural stone bridge, Bhim Pul, suspended over the roaring Saraswati River. Enjoy an elegant luxury high tea set up right on a stunning high-altitude stone patio.",
        "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Mana Indo-China Border Trek",
          "Bhim Pul & Vyas Gufa Caves",
          "Glacial High-Tea Service"
        ]
      },
      {
        "day": 4,
        "title": "Ganga Junction Return Flypast & Dehradun Arrival",
        "description": "Attend the peaceful morning sacred chants. Board your return charter helicopter, request a brief flypast over the holy Devprayag river confluence, and arrive back in Dehradun with a peaceful heart.",
        "image": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Devprayag Heli Flypast",
          "Commemorative Vaishnavite Medallion",
          "Private Departure Shuttle"
        ]
      }
    ]
  },
  {
    "id": "char-dham-helicopter-yatra-package",
    "title": "Char Dham Helicopter Yatra",
    "subtitle": "Helicopter Tour · All-Inclusive Luxury",
    "duration": "5 Days / 4 Nights",
    "pricing": "₹3,95,000",
    "rating": 4.97,
    "reviewsCount": 104,
    "image": "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1200&auto=format&fit=crop",
    "overview": "Skip the long, bumpy road drives and reach all four shrines in comfort. This five-day flight covers Yamunotri, Gangotri, Kedarnath, and Badrinath with friendly guide support, comfortable hotel stays, and quick temple entries.",
    "highlights": [
      "Complete Char Dham circuit by Helicopter",
      "VIP priority temple clearances",
      "Luxury heritage accommodation and meals",
      "DGCA-certified experienced pilots",
      "All inner-valley transfers included"
    ],
    "category": "Travel Package",
    "difficulty": "Easy",
    "bestSeason": "May – June · Sep – Nov",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Dehradun & Pre-Yatra Briefing",
        "description": "Arrive in Dehradun and transfer to your luxury hotel. Meet our coordinators for a safety briefing and receive your VIP yatra kit.",
        "image": "https://images.unsplash.com/photo-1561361531-9952a65fe002?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "VIP Airport Pickup",
          "Luxury Room Stay",
          "Welcome Briefing Ceremony"
        ]
      },
      {
        "day": 2,
        "title": "Fly Dehradun to Kharsali (Yamunotri)",
        "description": "Board your private helicopter at Sahastradhara and fly to Kharsali helipad. Undertake the scenic trek or buggy ride to the Yamunotri temple for VIP rites.",
        "image": "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Kharsali Helipad Settle",
          "VIP Temple Rites",
          "Surya Kund Hot Dip"
        ]
      },
      {
        "day": 3,
        "title": "Fly Kharsali to Harsil (Gangotri)",
        "description": "Fly up to Harsil valley, known as the Switzerland of India. Undertake a private luxury sedan drive to the Gangotri Temple beside the pristine river gorges.",
        "image": "https://images.unsplash.com/photo-1447069387593-a5de0862481e?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Cedar-Wood Valleys Drive",
          "Holy Gangotri Aarti",
          "Apple Orchard Walk"
        ]
      },
      {
        "day": 4,
        "title": "Fly Harsil to Sersi/Phata & Kedarnath Darshan",
        "description": "Fly into the Kedar Valley base. Board your shuttle directly up to Kedarnath Peak. Savor immediate VIP fast-track access into the ancient stone temple sanctum.",
        "image": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Kedarnath Peak Transit",
          "VIP Sanctum Abhishek",
          "Local Pandit Blessing"
        ]
      },
      {
        "day": 5,
        "title": "Fly to Badrinath & Return to Dehradun",
        "description": "Fly to Badrinath Helipad on Alaknanda banks. Visit the holy shrine and walk Mana Village (Tibetan border) before returning to Dehradun via helicopter.",
        "image": "https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Alaknanda Riverbed Prayers",
          "Mana Village Border Walk",
          "Return Heli Ingress"
        ]
      }
    ]
  },
  {
    "id": "do-dham-yatra-package",
    "title": "Do Dham Yatra (Kedarnath & Badrinath)",
    "subtitle": "Helicopter Tour · Sacred Twin Abodes",
    "duration": "3 Days / 2 Nights",
    "pricing": "₹2,25,000",
    "rating": 4.95,
    "reviewsCount": 76,
    "image": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1200&auto=format&fit=crop",
    "overview": "A shorter and more direct trip by helicopter to visit the two twin shrines—Kedarnath and Badrinath—within a few days, perfect if you have limited time.",
    "highlights": [
      "Helicopter transfers from Dehradun",
      "Fast-track VIP access at Kedarnath and Badrinath",
      "Premium stays in Guptkashi/Sersi and Badrinath",
      "Local certified travel escort",
      "Scenic mountain-pass flypasts"
    ],
    "category": "Travel Package",
    "difficulty": "Easy",
    "bestSeason": "May – June · Sep – Nov",
    "itinerary": [
      {
        "day": 1,
        "title": "Fly Dehradun to Guptkashi Base",
        "description": "Fly from Sahastradhara Helipad to Guptkashi. Settle into a scenic premium resort, prepare for the high-altitude climate, and explore the ancient Vishwanath temple.",
        "image": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Base Helipad Transit",
          "Mountain Cottage Stay",
          "Temple Evening Walk"
        ]
      },
      {
        "day": 2,
        "title": "Fly to Kedarnath Peak & VIP Darshan",
        "description": "Fly directly to the majestic Kedarnath helipad. Experience VIP fast-track clearance for prayers inside the temple, returning to your base camp for organic dining.",
        "image": "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Heli Shuttle Ingress",
          "Brahma Abhishek Puja",
          "Mandakini Sunset Walk"
        ]
      },
      {
        "day": 3,
        "title": "Fly to Badrinath Shrine & Return",
        "description": "Board your helicopter for Badrinath. Undertake early morning Abhishek, participate in prayers, and return to Dehradun via helicopter in the afternoon.",
        "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "VIP Badrinath Holy Darshan",
          "Tapt Kund Sulphur Dip",
          "Valley Flyover Departure"
        ]
      }
    ]
  },
  {
    "id": "shree-khatu-shyam-yatra-package",
    "title": "Shree Khatu Shyam Yatra",
    "subtitle": "Spiritual Tour · Sikar Pilgrimage",
    "duration": "2 Days / 1 Night",
    "pricing": "₹15,500",
    "rating": 4.9,
    "reviewsCount": 31,
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Khatu_Shyam_Ji_Temple.jpg",
    "overview": "A pleasant Caravan trip to the famous Khatu Shyam Temple in Sikar, Rajasthan. It is a highly respected desert temple where millions come to seek peace and positive strength.",
    "highlights": [
      "Convenient round-trip transfers from Jaipur/Delhi",
      "Premium heritage hotel stay in Sikar",
      "VIP priority access into the temple corridor",
      "Local priest escort for Abhishek Puja",
      "Evening spiritual bhajan sandhya"
    ],
    "category": "Travel Package",
    "difficulty": "Easy",
    "bestSeason": "All Year",
    "itinerary": [
      {
        "day": 1,
        "title": "Jaipur Arrival & Drive to Sikar",
        "description": "Arrive in Jaipur and undertake a plush road transfer to Sikar. Check into a beautiful traditional Rajasthani Haveli hotel. Attend the captivating evening Sandhya Aarti at Khatu Shyam Temple.",
        "image": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Plush Highway Transfer",
          "Rajasthani Haveli Lodging",
          "Khatu Shyam Sandhya Aarti"
        ]
      },
      {
        "day": 2,
        "title": "Shree Khatu Shyam Abhishek & Sacred Return",
        "description": "Participate in the highly auspicious morning Abhishek and take sacred holy water as prasad. Visit the Shyam Kund before undertaking your road transfer back to Jaipur or Delhi.",
        "image": "https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Morning Abhishek Darshan",
          "Shyam Kund Holy Bath",
          "Plush Return Transfer"
        ]
      }
    ]
  },
  {
    "id": "chalo-series-custom-package",
    "title": "Chalo Series Custom",
    "subtitle": "Bespoke Tour · Flexible Planning",
    "duration": "3 Days / 2 Nights",
    "pricing": "₹25,000",
    "rating": 4.89,
    "reviewsCount": 22,
    "image": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1200&auto=format&fit=crop",
    "overview": "Do you want to plan something custom? Pick any destination in Uttarakhand, Rajasthan, or Himachal, and we will translate your thoughts into a relaxed, personalized plan just for your friends or family.",
    "highlights": [
      "Fully personalized routes and activities",
      "Private certified travel coordinator at your service",
      "Luxury vehicles and premium boutique hotels",
      "Flexible scheduling and spontaneous detours",
      "24/7 dedicated support team"
    ],
    "category": "Travel Package",
    "difficulty": "Easy",
    "bestSeason": "All Year",
    "itinerary": [
      {
        "day": 1,
        "title": "Private Consultation & Curated Arrival",
        "description": "Your private executive helper greets you upon arrival at the destination of your choice. Map out active itinerary layers over high-quality local refreshments.",
        "image": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "In-person Guide Introduction",
          "Route Calibration Coffee",
          "Chauffeur Comfort Setup"
        ]
      },
      {
        "day": 2,
        "title": "Bespoke Exploration & Elite Local Encounters",
        "description": "Spend the day exploring the sights you love most, whether that means quiet mountain walks, visiting old village homes, or trying local food with us.",
        "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Curated Local Safaris",
          "Authentic Local Cuisine",
          "Flexible Detour Freedom"
        ]
      }
    ]
  },
  {
    "id": "haridwar-destination",
    "title": "Haridwar — Gateway to the Gods",
    "subtitle": "Custom Destination · Spiritual",
    "duration": "3 Days / 2 Nights",
    "pricing": "₹6,500",
    "rating": 4.95,
    "reviewsCount": 30,
    "image": "https://images.unsplash.com/photo-1561361531-9952a65fe002?q=80&w=1200&auto=format&fit=crop",
    "overview": "Haridwar is a classic riverside city where the Ganga river reaches the plains. Sitting by the ghats in the evening and watching the oil lamps float down the water is a peaceful experience everyone should see.",
    "highlights": [
      "Category: Spiritual",
      "Best Season: October–February for pleasant weather and festivals. Avoid July–August monsoon season for outdoor ghats. The Kumbh and Ardh-Kumbh years bring millions of pilgrims.",
      "Key Attractions: [object Object], [object Object], [object Object], [object O..."
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Historical Walk & Heartwarming Sunset Aarti",
        "description": "Arrive in the lively town of Haridwar and get checked into a comfortable riverside hotel. In the late afternoon, take a slow walk through the older lanes and sit by the river to watch the evening oil lanterns float down the Ganga.",
        "image": "https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Bespoke Welcome Refreshment",
          "Heritage Walking Excursion",
          "Private Aarti Viewing Deck"
        ]
      },
      {
        "day": 2,
        "title": "Sunrise Spirituality & Hidden Meadows Discovery",
        "description": "Awaken to sound therapy and local herbal tea. Explore Haridwar's hidden corners, including traditional landmarks, nearby riverbanks or hill meadows, and return with refreshing spiritual clarity and handcrafted local souvenirs.",
        "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Sunrise Peak Breathing Meditation",
          "Secluded Path Exploration",
          "Bespoke Private Return"
        ]
      }
    ],
    "category": "Destination",
    "difficulty": "Easy",
    "bestSeason": "October–February for pleasant weather and festivals. Avoid July–August monsoon season for outdoor ghats. The Kumbh and Ardh-Kumbh years bring millions of pilgrims."
  },
  {
    "id": "rishikesh-destination",
    "title": "Rishikesh — Yoga Capital of the World",
    "subtitle": "Custom Destination · Adventure & Spiritual",
    "duration": "3 Days / 2 Nights",
    "pricing": "₹7,800",
    "rating": 4.95,
    "reviewsCount": 80,
    "image": "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1200&auto=format&fit=crop",
    "overview": "Rishikesh is a quiet foothill town on the banks of the Ganga. It is famous for its riverside yoga spots, forest walks, suspension bridges, and a very relaxed, friendly vibe.",
    "highlights": [
      "Category: Adventure & Spiritual",
      "Best Season: February–May and September–November offer ideal conditions for yoga, trekking, and rafting. Monsoon (July–August) brings strong currents in the Ganga — rafting is restricted.",
      "Key Attractions: [object Object], [object Object], [object Object], [object O..."
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Historical Walk & Heartwarming Sunset Aarti",
        "description": "Arrive in Rishikesh and settle into a peaceful hotel surrounded by hills. Spend your afternoon walking down the famous suspension bridges and visiting peaceful riverside lanes as the evening chants begin.",
        "image": "https://images.unsplash.com/photo-1598977123418-45f04b01d4ac?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Bespoke Welcome Refreshment",
          "Heritage Walking Excursion",
          "Private Aarti Viewing Deck"
        ]
      },
      {
        "day": 2,
        "title": "Sunrise Spirituality & Hidden Meadows Discovery",
        "description": "Awaken to sound therapy and local herbal tea. Explore Rishikesh's hidden corners, including traditional landmarks, nearby riverbanks or hill meadows, and return with refreshing spiritual clarity and handcrafted local souvenirs.",
        "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Sunrise Peak Breathing Meditation",
          "Secluded Path Exploration",
          "Bespoke Private Return"
        ]
      }
    ],
    "category": "Destination",
    "difficulty": "Easy",
    "bestSeason": "February–May and September–November offer ideal conditions for yoga, trekking, and rafting. Monsoon (July–August) brings strong currents in the Ganga — rafting is restricted."
  },
  {
    "id": "kainchi-dham-destination",
    "title": "Kainchi Dham — In the Grace of Neem Karoli Baba",
    "subtitle": "Custom Destination · Spiritual",
    "duration": "3 Days / 2 Nights",
    "pricing": "₹8,500",
    "rating": 4.97,
    "reviewsCount": 82,
    "image": "https://images.unsplash.com/photo-1447069387593-a5de0862481e?q=80&w=1200&auto=format&fit=crop",
    "overview": "Kainchi Dham is a quiet forest ashram dedicated to Baba Neem Karoli. Hidden in the hills near Nainital, it's a wonderfully calm place to take a slow afternoon walk, sit by the stream, and clear your mind.",
    "highlights": [
      "Category: Spiritual",
      "Best Season: March–June & September–November offer pleasant weather and clear mountain views.,July–August (Monsoon) brings greenery but also slippery roads.,June (Annual Bhandara) attracts thousands of devotees — expect heavy crowds.",
      "Key Attractions: [object Object], [object Object], [object Object], [object O..."
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Historical Walk & Heartwarming Sunset Aarti",
        "description": "Arrive in the green hills of Bhowali and check into a relaxing mountain stay. Take a slow, quiet walk under pine trees to visit the local ashram pathways and sit by the calm hillside stream.",
        "image": "https://images.unsplash.com/photo-1590073844006-33379778ae09?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Bespoke Welcome Refreshment",
          "Heritage Walking Excursion",
          "Private Aarti Viewing Deck"
        ]
      },
      {
        "day": 2,
        "title": "Sunrise Spirituality & Hidden Meadows Discovery",
        "description": "Awaken to sound therapy and local herbal tea. Explore Kainchi Dham's hidden corners, including traditional landmarks, nearby riverbanks or hill meadows, and return with refreshing spiritual clarity and handcrafted local souvenirs.",
        "image": "https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Sunrise Peak Breathing Meditation",
          "Secluded Path Exploration",
          "Bespoke Private Return"
        ]
      }
    ],
    "category": "Destination",
    "difficulty": "Easy",
    "bestSeason": [
      "March–June & September–November offer pleasant weather and clear mountain views.",
      "July–August (Monsoon) brings greenery but also slippery roads.",
      "June (Annual Bhandara) attracts thousands of devotees — expect heavy crowds."
    ]
  },
  {
    "id": "dhari-devi-destination",
    "title": "Dhari Devi Maa — Guardian Goddess of Uttarakhand",
    "subtitle": "Custom Destination · Spiritual",
    "duration": "3 Days / 2 Nights",
    "pricing": "₹9,000",
    "rating": 4.99,
    "reviewsCount": 29,
    "image": "https://images.unsplash.com/photo-1514222134-b57cbb8ce0a6?q=80&w=1200&auto=format&fit=crop",
    "overview": "The Dhari Devi Temple sits right on top of the sparkling Alaknanda River. Local villagers view Dhari Devi as the protector of the mountains, and visiting this riverside structure is incredibly scenic and peaceful.",
    "highlights": [
      "Category: Spiritual",
      "Best Season: March–June offers pleasant weather and clear views.,September–November is ideal after the monsoon season.,July–August (Monsoon) can bring heavy rains and landslides — travel cautiously.",
      "Key Attractions: [object Object], [object Object], [object Object], [object O..."
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Historical Walk & Heartwarming Sunset Aarti",
        "description": "Head into Srinagar and check into a quiet valley-facing accommodation. Spend your afternoon exploring ancient river paths and then see the beautiful lakeside shrine of Dhari Devi as the sun starts to set.",
        "image": "https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Bespoke Welcome Refreshment",
          "Heritage Walking Excursion",
          "Private Aarti Viewing Deck"
        ]
      },
      {
        "day": 2,
        "title": "Sunrise Spirituality & Hidden Meadows Discovery",
        "description": "Awaken to sound therapy and local herbal tea. Explore Dhari Devi Maa's hidden corners, including traditional landmarks, nearby riverbanks or hill meadows, and return with refreshing spiritual clarity and handcrafted local souvenirs.",
        "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Sunrise Peak Breathing Meditation",
          "Secluded Path Exploration",
          "Bespoke Private Return"
        ]
      }
    ],
    "category": "Destination",
    "difficulty": "Easy",
    "bestSeason": [
      "March–June offers pleasant weather and clear views.",
      "September–November is ideal after the monsoon season.",
      "July–August (Monsoon) can bring heavy rains and landslides — travel cautiously."
    ]
  },
  {
    "id": "ayodhya-destination",
    "title": "Ayodhya — Birthplace of Lord Ram",
    "subtitle": "Custom Destination · Spiritual",
    "duration": "3 Days / 2 Nights",
    "pricing": "₹9,800",
    "rating": 4.86,
    "reviewsCount": 71,
    "image": "https://images.unsplash.com/photo-1617653243179-88062dfc9bfb?q=80&w=1200&auto=format&fit=crop",
    "overview": "Ayodhya is an ancient riverside city filled with old streets, temple sounds, and peaceful ghats along the Sarayu River. It's a key spot to visit if you want to see the new temple complexes and experience traditional northern Indian roots.",
    "highlights": [
      "Category: Spiritual",
      "Best Season: October–March for comfortable temperatures. Ram Navami (March/April) is the biggest festival — expect massive crowds. Diwali celebrations here are extraordinary, as Ayodhya is the original city of lights.",
      "Key Attractions: [object Object], [object Object], [object Object], [object O..."
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Historical Walk & Heartwarming Sunset Aarti",
        "description": "Arrive in ancient Ayodhya and check into a comfortable, welcoming guest stay. Take a slow evening walk along the old pathways near the Sarayu River to watch the lights and temples.",
        "image": "https://images.unsplash.com/photo-1598977123418-45f04b01d4ac?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Bespoke Welcome Refreshment",
          "Heritage Walking Excursion",
          "Private Aarti Viewing Deck"
        ]
      },
      {
        "day": 2,
        "title": "Sunrise Spirituality & Hidden Meadows Discovery",
        "description": "Awaken to sound therapy and local herbal tea. Explore Ayodhya's hidden corners, including traditional landmarks, nearby riverbanks or hill meadows, and return with refreshing spiritual clarity and handcrafted local souvenirs.",
        "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Sunrise Peak Breathing Meditation",
          "Secluded Path Exploration",
          "Bespoke Private Return"
        ]
      }
    ],
    "category": "Destination",
    "difficulty": "Easy",
    "bestSeason": "October–March for comfortable temperatures. Ram Navami (March/April) is the biggest festival — expect massive crowds. Diwali celebrations here are extraordinary, as Ayodhya is the original city of lights."
  },
  {
    "id": "shree-khatu-shyam-ji-destination",
    "title": "Shree Khatu Shyam Ji — Shrine of the Sheesh ke Daani",
    "subtitle": "Custom Destination · Spiritual",
    "duration": "3 Days / 2 Nights",
    "pricing": "₹6,000",
    "rating": 4.88,
    "reviewsCount": 28,
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Khatu_Shyam_Ji_Temple.jpg",
    "overview": "Khatu Shyam Ji is a famous desert temple in Rajasthan. People travel from all over the country to sit in the peaceful temple halls, listen to local singers, and experience the warm, hospitable atmosphere of Sikar.",
    "highlights": [
      "Category: Spiritual",
      "Best Season: October–March for pleasant weather. Phalgun Mela (February/March) draws millions of pilgrims — plan for heavy crowds. Ekadashi days (every lunar fortnight) see very high footfall.",
      "Key Attractions: [object Object], [object Object], [object Object], [object O..."
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Historical Walk & Heartwarming Sunset Aarti",
        "description": "Arrive in Sikar and check into a welcoming hotel. Settle in and then head out for an unhurried walk around the local town lanes and temple squares to feel the warm desert hospitality.",
        "image": "https://images.unsplash.com/photo-1590073844006-33379778ae09?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Bespoke Welcome Refreshment",
          "Heritage Walking Excursion",
          "Private Aarti Viewing Deck"
        ]
      },
      {
        "day": 2,
        "title": "Sunrise Spirituality & Hidden Meadows Discovery",
        "description": "Awaken to sound therapy and local herbal tea. Explore Shree Khatu Shyam Ji's hidden corners, including traditional landmarks, nearby riverbanks or hill meadows, and return with refreshing spiritual clarity and handcrafted local souvenirs.",
        "image": "https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Sunrise Peak Breathing Meditation",
          "Secluded Path Exploration",
          "Bespoke Private Return"
        ]
      }
    ],
    "category": "Destination",
    "difficulty": "Easy",
    "bestSeason": "October–March for pleasant weather. Phalgun Mela (February/March) draws millions of pilgrims — plan for heavy crowds. Ekadashi days (every lunar fortnight) see very high footfall."
  },
  {
    "id": "nainital-destination",
    "title": "Nainital — City of Lakes",
    "subtitle": "Custom Destination · Hill Station",
    "duration": "3 Days / 2 Nights",
    "pricing": "₹12,500",
    "rating": 4.93,
    "reviewsCount": 28,
    "image": "https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?q=80&w=1200&auto=format&fit=crop",
    "overview": "Nainital is a beautiful mountain town built right around a large, emerald-green lake. With its cool breezes, forest-covered hillsides, and wooden rowboats, it is a lovely place to relax for a couple of days.",
    "highlights": [
      "Category: Hill Station",
      "Best Season: March–June for clear skies and pleasant weather. September–October post-monsoon offers lush greenery. December–February brings snowfall and the magical winter landscape.",
      "Key Attractions: [object Object], [object Object], [object Object], [object O..."
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Historical Walk & Heartwarming Sunset Aarti",
        "description": "Arrive in the cooler mountain air of Nainital and check into a lake-facing cottage. Spend the afternoon taking a slow boat ride across the water or walking the quiet forest Mall road.",
        "image": "https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Bespoke Welcome Refreshment",
          "Heritage Walking Excursion",
          "Private Aarti Viewing Deck"
        ]
      },
      {
        "day": 2,
        "title": "Sunrise Spirituality & Hidden Meadows Discovery",
        "description": "Awaken to sound therapy and local herbal tea. Explore Nainital's hidden corners, including traditional landmarks, nearby riverbanks or hill meadows, and return with refreshing spiritual clarity and handcrafted local souvenirs.",
        "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Sunrise Peak Breathing Meditation",
          "Secluded Path Exploration",
          "Bespoke Private Return"
        ]
      }
    ],
    "category": "Destination",
    "difficulty": "Easy",
    "bestSeason": "March–June for clear skies and pleasant weather. September–October post-monsoon offers lush greenery. December–February brings snowfall and the magical winter landscape."
  },
  {
    "id": "shimla-destination",
    "title": "Shimla — Queen of Hill Stations",
    "subtitle": "Custom Destination · Hill Station",
    "duration": "3 Days / 2 Nights",
    "pricing": "₹14,800",
    "rating": 4.93,
    "reviewsCount": 28,
    "image": "https://images.unsplash.com/photo-1626783416763-67a9cf6e76bc?q=80&w=1200&auto=format&fit=crop",
    "overview": "Shimla is a classic mountain town with old wooden buildings, a wide pedestrian street called the Mall Road, and direct views of the snow peaks. It is a scenic spot to enjoy coffee and calm evening walks.",
    "highlights": [
      "Category: Hill Station",
      "Best Season: March–June for clear skies and pleasant temperatures (15–25°C). December–February for snowfall and winter sports. Avoid July–August for heavy monsoon rains and landslide risk.",
      "Key Attractions: [object Object], [object Object], [object Object], [object O..."
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Historical Walk & Heartwarming Sunset Aarti",
        "description": "Arrive in Shimla and check into your cottage among the pine hills. Spend your afternoon strolling along Mall Road, looking at the old wooden structures and the distant snow peaks.",
        "image": "https://images.unsplash.com/photo-1598977123418-45f04b01d4ac?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Bespoke Welcome Refreshment",
          "Heritage Walking Excursion",
          "Private Aarti Viewing Deck"
        ]
      },
      {
        "day": 2,
        "title": "Sunrise Spirituality & Hidden Meadows Discovery",
        "description": "Awaken to sound therapy and local herbal tea. Explore Shimla's hidden corners, including traditional landmarks, nearby riverbanks or hill meadows, and return with refreshing spiritual clarity and handcrafted local souvenirs.",
        "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Sunrise Peak Breathing Meditation",
          "Secluded Path Exploration",
          "Bespoke Private Return"
        ]
      }
    ],
    "category": "Destination",
    "difficulty": "Easy",
    "bestSeason": "March–June for clear skies and pleasant temperatures (15–25°C). December–February for snowfall and winter sports. Avoid July–August for heavy monsoon rains and landslide risk."
  },
  {
    "id": "manali-destination",
    "title": "Manali — Adventure Capital of India",
    "subtitle": "Custom Destination · Adventure",
    "duration": "3 Days / 2 Nights",
    "pricing": "₹16,500",
    "rating": 4.96,
    "reviewsCount": 86,
    "image": "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?q=80&w=1200&auto=format&fit=crop",
    "overview": "Manali sits high up in the Kullu Valley, walled in by giant snow peaks and pine forests. Whether you want to hike to wood cabins, seek out ancient temples, or drive up to Solang Valley, it is an amazing place.",
    "highlights": [
      "Category: Adventure",
      "Best Season: October–February for snow activities (Rohtang may close). March–June for trekking, rafting, and pleasant weather. July–August is monsoon season — Rohtang Pass remains open but landslides are common. Avoid Manali during Diwali to New Year without advance booking.",
      "Key Attractions: [object Object], [object Object], [object Object], [object O..."
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Historical Walk & Heartwarming Sunset Aarti",
        "description": "Reach the pine forests of Manali and settle into a beautiful wood cabin. Take a relaxing walk through the apple orchards nearby or visit the stone and wood lanes of Old Manali village.",
        "image": "https://images.unsplash.com/photo-1590073844006-33379778ae09?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Bespoke Welcome Refreshment",
          "Heritage Walking Excursion",
          "Private Aarti Viewing Deck"
        ]
      },
      {
        "day": 2,
        "title": "Sunrise Spirituality & Hidden Meadows Discovery",
        "description": "Awaken to sound therapy and local herbal tea. Explore Manali's hidden corners, including traditional landmarks, nearby riverbanks or hill meadows, and return with refreshing spiritual clarity and handcrafted local souvenirs.",
        "image": "https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Sunrise Peak Breathing Meditation",
          "Secluded Path Exploration",
          "Bespoke Private Return"
        ]
      }
    ],
    "category": "Destination",
    "difficulty": "Easy",
    "bestSeason": "October–February for snow activities (Rohtang may close). March–June for trekking, rafting, and pleasant weather. July–August is monsoon season — Rohtang Pass remains open but landslides are common. Avoid Manali during Diwali to New Year without advance booking."
  },
  {
    "id": "udaipur-destination",
    "title": "Udaipur — City of Lakes & Palaces",
    "subtitle": "Custom Destination · Heritage",
    "duration": "3 Days / 2 Nights",
    "pricing": "₹18,500",
    "rating": 4.97,
    "reviewsCount": 82,
    "image": "https://images.unsplash.com/photo-1601999109332-542b18dbec57?q=80&w=1200&auto=format&fit=crop",
    "overview": "Udaipur is built around several beautiful, peaceful lakes with palaces rising directly out of the water. With its quiet clay-pot tea shops, old-city alleys, and stone docks, it has a very warm and relaxing pace.",
    "highlights": [
      "Category: Heritage",
      "Best Season: October–March for cooler weather and outdoor exploration. Avoid April–June (extreme heat up to 45°C). The Mewar Festival in March celebrates spring with folk performances and boat processions.",
      "Key Attractions: [object Object], [object Object], [object Object], [object O..."
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Historical Walk & Heartwarming Sunset Aarti",
        "description": "Arrive in the spectacular lakeside city of Udaipur and check into a quiet, warm haveli. Settle in and enjoy a slow evening walk by the lake as the palace lights begin to reflect in the water.",
        "image": "https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Bespoke Welcome Refreshment",
          "Heritage Walking Excursion",
          "Private Aarti Viewing Deck"
        ]
      },
      {
        "day": 2,
        "title": "Sunrise Spirituality & Hidden Meadows Discovery",
        "description": "Awaken to sound therapy and local herbal tea. Explore Udaipur's hidden corners, including traditional landmarks, nearby riverbanks or hill meadows, and return with refreshing spiritual clarity and handcrafted local souvenirs.",
        "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Sunrise Peak Breathing Meditation",
          "Secluded Path Exploration",
          "Bespoke Private Return"
        ]
      }
    ],
    "category": "Destination",
    "difficulty": "Easy",
    "bestSeason": "October–March for cooler weather and outdoor exploration. Avoid April–June (extreme heat up to 45°C). The Mewar Festival in March celebrates spring with folk performances and boat processions."
  },
  {
    "id": "jaisalmer-destination",
    "title": "Jaisalmer — The Golden City of Rajasthan",
    "subtitle": "Custom Destination · Desert & Heritage",
    "duration": "3 Days / 2 Nights",
    "pricing": "₹15,000",
    "rating": 4.92,
    "reviewsCount": 62,
    "image": "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?q=80&w=1200&auto=format&fit=crop",
    "overview": "Jaisalmer is a beautiful desert town made of yellow sandstone that glows gold in the evening. You can wander the streets of the oldest living fort, sit in sand dunes, and enjoy local family music under the stars.",
    "highlights": [
      "Category: Desert & Heritage",
      "Best Season: October–February for comfortable desert temperatures (10–25°C). Avoid May–June when temperatures soar to 45°C+. The Desert Festival (February) features camel races, folk music, and the Mr. Desert pageant.",
      "Key Attractions: [object Object], [object Object], [object Object], [object O..."
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Historical Walk & Heartwarming Sunset Aarti",
        "description": "Arrive in the golden fort town of Jaisalmer. Settle into a sandstone guest house and take a quiet stroll through the older streets within the fort, watching the sunset glow over the rooftops.",
        "image": "https://images.unsplash.com/photo-1598977123418-45f04b01d4ac?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Bespoke Welcome Refreshment",
          "Heritage Walking Excursion",
          "Private Aarti Viewing Deck"
        ]
      },
      {
        "day": 2,
        "title": "Sunrise Spirituality & Hidden Meadows Discovery",
        "description": "Awaken to sound therapy and local herbal tea. Explore Jaisalmer's hidden corners, including traditional landmarks, nearby riverbanks or hill meadows, and return with refreshing spiritual clarity and handcrafted local souvenirs.",
        "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
        "highlights": [
          "Sunrise Peak Breathing Meditation",
          "Secluded Path Exploration",
          "Bespoke Private Return"
        ]
      }
    ],
    "category": "Destination",
    "difficulty": "Easy",
    "bestSeason": "October–February for comfortable desert temperatures (10–25°C). Avoid May–June when temperatures soar to 45°C+. The Desert Festival (February) features camel races, folk music, and the Mr. Desert pageant."
  }
];

export const GENERAL_REVIEWS: Review[] = [
  {
    "id": "rev-1",
    "name": "Gayatri Nair",
    "rating": 5,
    "text": "Route Story has redefined pilgrimage for us. The helicopter flight over Yamunotri at sunrise with hot saffron tea on landing was simple poetry. Their level of attention is absolutely unparalleled.",
    "date": "May 14, 2026",
    "destination": "yamunotri-pilgrimage"
  },
  {
    "id": "rev-2",
    "name": "Kabir Malhotra",
    "rating": 5,
    "text": "A truly flawless pilgrimage. Flew in comfort directly to Kedarnath with our private host and returned to a serene riverside camp on the banks of Mandakini. Masterfully done.",
    "date": "April 28, 2026",
    "destination": "kedarnath-pilgrimage"
  },
  {
    "id": "rev-3",
    "name": "Anjali Deshmukh",
    "rating": 5,
    "text": "The silence at Badrinath is magical. The sunset prayer held on the banks of Alaknanda river for just our family was an emotional, unforgettable moment. Thank you, Route Story.",
    "date": "March 19, 2026",
    "destination": "badrinath-pilgrimage"
  },
  {
    "id": "rev-4",
    "name": "Vikram Rawat",
    "rating": 5,
    "text": "The Valley of Flowers trek organized by Route Story was an absolute masterclass in luxury trekking. Moving through UNESCO meadows with local naturalist guides was pure magic.",
    "date": "July 11, 2026",
    "destination": "valley-of-flowers-trek"
  },
  {
    "id": "rev-5",
    "name": "Siddharth Jain",
    "rating": 5,
    "text": "Visiting Kainchi Dham of Neem Karoli Baba was on our list for years. Route Story designed a perfect heritage itinerary, bypassing all pilgrim noise. Highly professional.",
    "date": "June 05, 2026",
    "destination": "kainchi-dham-destination"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    "id": "gal-1",
    "url": "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=800&auto=format&fit=crop",
    "title": "Kedarnath Temple Sanctum",
    "location": "Kedarnath, Himalayas",
    "aspect": "tall"
  },
  {
    "id": "gal-2",
    "url": "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop",
    "title": "Badrinath Temple Devotion",
    "location": "Badrinath, Himalayas",
    "aspect": "wide"
  },
  {
    "id": "gal-3",
    "url": "https://images.unsplash.com/photo-1533616688419-b7a585564566?q=80&w=800&auto=format&fit=crop",
    "title": "Gangotri Glacial Flow",
    "location": "Gangotri, Himalayas",
    "aspect": "normal"
  },
  {
    "id": "gal-4",
    "url": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=800&auto=format&fit=crop",
    "title": "Yamunotri Sacred Ridge",
    "location": "Yamunotri, Himalayas",
    "aspect": "tall"
  },
  {
    "id": "gal-5",
    "url": "https://images.unsplash.com/photo-1561361531-9952a65fe002?q=80&w=800&auto=format&fit=crop",
    "title": "Haridwar Ganga Aarti Ghats",
    "location": "Haridwar, Holy Ganges",
    "aspect": "wide"
  },
  {
    "id": "gal-6",
    "url": "https://images.unsplash.com/photo-1626783416763-67a9cf6e76bc?q=80&w=800&auto=format&fit=crop",
    "title": "Rishikesh Hanging Bridge Valley",
    "location": "Rishikesh, Himalayas",
    "aspect": "normal"
  },
  {
    "id": "gal-7",
    "url": "https://images.unsplash.com/photo-1601999109332-542b18dbec57?q=80&w=800&auto=format&fit=crop",
    "title": "Udaipur Shimmering Palace",
    "location": "Udaipur, Rajasthan",
    "aspect": "wide"
  },
  {
    "id": "gal-8",
    "url": "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?q=80&w=800&auto=format&fit=crop",
    "title": "Jaisalmer Golden Dunes Fort",
    "location": "Jaisalmer, Thar Desert",
    "aspect": "tall"
  }
];
