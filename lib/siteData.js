export const restaurant = {
  name: 'Roswell Ale House',
  phone: '(770) 555-0188',
  email: 'hello@roswellalehouse.com',
  address: '4651 Woodstock Rd Ste 301, Roswell, GA 30075',
  hours: [
    ['Monday – Thursday', '11:00 AM – 12:00 AM'],
    ['Friday – Saturday', '11:00 AM – 2:00 AM'],
    ['Sunday', '11:00 AM – 11:00 PM']
  ],
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=4651+Woodstock+Rd+Ste+301+Roswell+GA+30075',
  social: {
    instagram: '#',
    x: '#',
    yelp: '#'
  }
};

export const testimonials = [
  { quote: 'Great place to catch the game, grab a burger, and hang out with friends.', name: 'Guest Review' },
  { quote: 'Fun sports-bar energy, friendly service, and plenty of screens.', name: 'Guest Review' },
  { quote: 'The wings and cold drinks make this an easy game-night pick.', name: 'Guest Review' },
  { quote: 'A lively neighborhood spot with a relaxed Roswell feel.', name: 'Guest Review' }
];

export const foodCategories = [
  {
    id: 'appetizers',
    name: 'Appetizers',
    items: [
      ['Ale House Wings', 'Crispy wings tossed in buffalo, BBQ, garlic parmesan, or sweet chili.', '$13'],
      ['Loaded Nachos', 'Tortilla chips, queso, pico, jalapeños, sour cream, and seasoned beef.', '$12'],
      ['Pretzel Bites', 'Warm pretzel bites served with beer cheese and house mustard.', '$9'],
      ['Fried Pickles', 'Crispy pickle chips with ranch dipping sauce.', '$8']
    ]
  },
  {
    id: 'soups-salads',
    name: 'Soups & Salads',
    items: [
      ['House Chili', 'Beef chili topped with cheddar, scallions, and sour cream.', '$8'],
      ['Southwest Chicken Salad', 'Grilled chicken, corn, black beans, avocado, tortilla strips, and chipotle ranch.', '$14'],
      ['Classic Caesar', 'Romaine, parmesan, croutons, and Caesar dressing.', '$10']
    ]
  },
  {
    id: 'burgers',
    name: 'Burgers',
    items: [
      ['Roswell Classic', 'Two beef patties, American cheese, lettuce, tomato, pickles, and house sauce.', '$15'],
      ['Bacon BBQ Burger', 'Cheddar, crispy bacon, onion straws, and smoky BBQ sauce.', '$16'],
      ['Mushroom Swiss', 'Sautéed mushrooms, Swiss cheese, and garlic aioli.', '$15']
    ]
  },
  {
    id: 'pasta',
    name: 'Pasta',
    items: [
      ['Cajun Chicken Pasta', 'Blackened chicken, peppers, onions, and creamy Cajun sauce.', '$17'],
      ['Ale House Mac', 'Creamy four-cheese sauce with toasted breadcrumbs.', '$13'],
      ['Garlic Parmesan Pasta', 'Penne, roasted garlic, parmesan cream, spinach, and tomato.', '$14']
    ]
  },
  {
    id: 'sides',
    name: 'Sides',
    items: [
      ['Seasoned Fries', 'Crispy fries with house seasoning.', '$5'],
      ['Onion Rings', 'Beer-battered onion rings.', '$6'],
      ['Side Salad', 'Mixed greens, tomato, cucumber, and choice of dressing.', '$5'],
      ['Mac & Cheese', 'Creamy cheddar mac.', '$6']
    ]
  }
];

export const drinkCategories = [
  {
    id: 'mocktails',
    name: 'Mocktails',
    items: [
      ['Roswell Sunset', 'Orange, pineapple, grenadine, and soda.', '$7'],
      ['Berry Fizz', 'Mixed berry, lime, mint, and sparkling water.', '$7'],
      ['Ginger Lime Cooler', 'Ginger beer, fresh lime, and cucumber.', '$7']
    ]
  },
  {
    id: 'cocktails',
    name: 'Cocktails',
    items: [
      ['House Margarita', 'Tequila, orange liqueur, fresh lime, and agave.', '$10'],
      ['Peach Bourbon Smash', 'Bourbon, peach, lemon, and mint.', '$11'],
      ['Game Day Mule', 'Vodka, ginger beer, lime, and bitters.', '$10'],
      ['Roswell Old Fashioned', 'Bourbon, bitters, orange, and demerara.', '$12']
    ]
  }
];

export const weeklyOffers = [
  {
    id: 'monday',
    day: 'Monday',
    shortDay: 'Mon',
    offer: '1/2 Price Margaritas',
    active: true
  },
  {
    id: 'tuesday',
    day: 'Tuesday',
    shortDay: 'Tue',
    offer: 'Trivia Night',
    active: true
  },
  {
    id: 'wednesday',
    day: 'Wednesday',
    shortDay: 'Wed',
    offer: 'Kids Night / Musical Bingo',
    active: true
  },
  {
    id: 'thursday',
    day: 'Thursday',
    shortDay: 'Thu',
    offer: 'Ladies Night',
    active: true
  },
  {
    id: 'friday',
    day: 'Friday',
    shortDay: 'Fri',
    offer: 'Late Night Open',
    active: true
  },
  {
    id: 'saturday',
    day: 'Saturday',
    shortDay: 'Sat',
    offer: 'Late Night Open',
    active: true
  },
  {
    id: 'sunday',
    day: 'Sunday',
    shortDay: 'Sun',
    offer: 'Game Day Open Late',
    active: true
  }
];

export const events = [
  {
    id: 'trivia-night',
    title: 'Trivia Night',
    type: 'Trivia',
    schedule: 'Every Tuesday',
    time: '7:30 PM',
    description:
      'Grab your team and test your knowledge with weekly trivia at Roswell Ale House.',
    active: true
  },
  {
    id: 'musical-bingo',
    title: 'Musical Bingo',
    type: 'Bingo',
    schedule: 'Every Wednesday',
    time: '7:00 PM',
    description:
      'Listen, match the songs on your card, and compete for prizes.',
    active: true
  },
  {
    id: 'friday-night',
    title: 'Friday Night at the Ale House',
    type: 'Special Event',
    schedule: 'Every Friday',
    time: '9:00 PM',
    description:
      'Kick off the weekend with food, drinks, music, and late-night sports.',
    active: true
  }
];

export const sportsGames = [
  {
    id: 'nfl-falcons-bucs-001',
    externalId: 'sample-nfl-001',
    league: 'NFL',
    awayTeam: 'Tampa Bay Buccaneers',
    homeTeam: 'Atlanta Falcons',
    date: 'Sep 13, 2026',
    time: '1:00 PM',
    channel: 'FOX',
    venue: 'Mercedes-Benz Stadium',
    visible: true,
    featured: true
  },
  {
    id: 'mlb-mets-braves-001',
    externalId: 'sample-mlb-001',
    league: 'MLB',
    awayTeam: 'New York Mets',
    homeTeam: 'Atlanta Braves',
    date: 'Sep 15, 2026',
    time: '7:20 PM',
    channel: 'TBD',
    venue: 'Truist Park',
    visible: true,
    featured: false
  },
  {
    id: 'ncaaf-alabama-georgia-001',
    externalId: 'sample-ncaaf-001',
    league: 'NCAAF',
    awayTeam: 'Alabama',
    homeTeam: 'Georgia',
    date: 'Sep 19, 2026',
    time: '7:30 PM',
    channel: 'ABC',
    venue: 'Sanford Stadium',
    visible: true,
    featured: true
  },
  {
    id: 'nfl-panthers-falcons-001',
    externalId: 'sample-nfl-002',
    league: 'NFL',
    awayTeam: 'Carolina Panthers',
    homeTeam: 'Atlanta Falcons',
    date: 'Sep 20, 2026',
    time: '1:00 PM',
    channel: 'CBS',
    venue: 'Mercedes-Benz Stadium',
    visible: false,
    featured: false
  },
  {
    id: 'mlb-phillies-braves-001',
    externalId: 'sample-mlb-002',
    league: 'MLB',
    awayTeam: 'Philadelphia Phillies',
    homeTeam: 'Atlanta Braves',
    date: 'Sep 22, 2026',
    time: '7:20 PM',
    channel: 'TBD',
    venue: 'Truist Park',
    visible: false,
    featured: false
  },
  {
    id: 'mls-miami-atlanta-001',
    externalId: 'sample-mls-001',
    league: 'MLS',
    awayTeam: 'Inter Miami',
    homeTeam: 'Atlanta United',
    date: 'Sep 26, 2026',
    time: '7:30 PM',
    channel: 'MLS Season Pass',
    venue: 'Mercedes-Benz Stadium',
    visible: false,
    featured: false
  },
  {
    id: 'ncaaf-georgia-tech-clemson-001',
    externalId: 'sample-ncaaf-002',
    league: 'NCAAF',
    awayTeam: 'Clemson',
    homeTeam: 'Georgia Tech',
    date: 'Sep 26, 2026',
    time: '3:30 PM',
    channel: 'ESPN',
    venue: 'Bobby Dodd Stadium',
    visible: false,
    featured: false
  },
  {
    id: 'nba-hawks-celtics-001',
    externalId: 'sample-nba-001',
    league: 'NBA',
    awayTeam: 'Boston Celtics',
    homeTeam: 'Atlanta Hawks',
    date: 'Oct 24, 2026',
    time: '7:30 PM',
    channel: 'TBD',
    venue: 'State Farm Arena',
    visible: false,
    featured: false
  }
];

export const galleryMedia = [
  {
    id: 'restaurant-video',
    type: 'video',
    src: '/hero-video.mp4',
    poster: '/hero-video-poster.png',
    title: 'Roswell Ale House',
    category: 'Restaurant',
    visible: true,
    featured: true
  },
  {
    id: 'restaurant-atmosphere',
    type: 'image',
    src: '/hero-video-poster.png',
    poster: '',
    title: 'Restaurant Atmosphere',
    category: 'Restaurant',
    visible: true,
    featured: false
  },
  {
    id: 'logo-black',
    type: 'image',
    src: '/Roswell Ale House Logo Black.png',
    poster: '',
    title: 'Roswell Ale House Logo',
    category: 'Branding',
    visible: false,
    featured: false
  },
  {
    id: 'logo-original',
    type: 'image',
    src: '/Roswell Ale House Logo.jpeg',
    poster: '',
    title: 'Roswell Ale House Original Logo',
    category: 'Branding',
    visible: false,
    featured: false
  }
];