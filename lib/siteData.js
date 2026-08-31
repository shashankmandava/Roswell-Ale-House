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
