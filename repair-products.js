
export const maintainProducts = [
  { id: 1, name: 'Select Product', MerchCode: 'NA' },
  { id: 2, name: 'Cooktop', MerchCode: 'COOKTOP' },
  { id: 3, name: 'Dishwasher', MerchCode: 'DISHWASHBI' },
  { id: 4, name: 'Double Oven', MerchCode: 'OVENBIDB' },
  { id: 5, name: 'Dryer', MerchCode: 'DRYERE' },
  { id: 6, name: 'Freezer', MerchCode: 'FREEZERO9' },
  { id: 7, name: 'Garbage Disposal', MerchCode: 'DISPOSER' },
  { id: 8, name: 'Gas Grill', MerchCode: 'GRILLOUTGAS' },
  { id: 9, name: 'Ice Maker Freestanding', MerchCode: 'ICEMAKER' },
  { id: 10, name: 'Microwave', MerchCode: 'OVENMWAVEBI' },
  { id: 11, name: 'Range', MerchCode: 'RANGEEG' },
  { id: 12, name: 'Range Hood', MerchCode: 'RANGEHOOD' },
  { id: 13, name: 'Refrigerator', MerchCode: 'REFRIGBF' },
  { id: 14, name: 'Oven', MerchCode: 'OVENBI' },
  { id: 15, name: 'Stacked Laundry Unit', MerchCode: 'WASHERDRYERL' },
  { id: 16, name: 'Trash Compactor', MerchCode: 'COMPACTOR' },
  { id: 17, name: 'Washer', MerchCode: 'WASHERFL' },
  { id: 18, name: 'Washer Dryer Combo', MerchCode: 'WASHFLSDS1Y5' },
];

/**
 *
 * Jira {@link: https://searshomeservices.atlassian.net/browse/SR-965}
 *
 * repairProducts is a list of appliance used CompactScheduler for serviceType repair.
 *
 */

export const repairProducts = [
  {
    id: 1,
    name: 'Select Product',
    MerchCode: 'NA',
  },
  {
    id: 2,
    name: 'Refrigerator',
    MerchCode: 'REFRIGBF',
    Brands: [
      'Frigidaire',
      'GE',
      'Kenmore',
      'LG',
      'Samsung',
      'Whirlpool',
      'Amana',
      'Daewoo',
      'Electrolux',
      'Estate',
      'Gladiator',
      'Haier',
      'Hotpoint',
      'KitchenAid',
      'Maytag',
    ],
  },
  {
    id: 3,
    name: 'Dishwasher',
    MerchCode: 'DISHWASHBI',
    Brands: [
      'Bosch',
      'Frigidaire',
      'GE',
      'Kenmore',
      'KitchenAid',
      'Whirlpool',
      'Amana',
      'Electrolux',
      'Estate',
      'Hotpoint',
      'LG',
      'Maytag',
      'Samsung',
      'Haier',
    ],
  },
  {
    id: 4,
    name: 'Washer',
    MerchCode: 'WASHERFL',
    Brands: [
      'GE',
      'Kenmore',
      'LG',
      'Maytag',
      'Samsung',
      'Whirlpool',
      'Amana',
      'Electrolux',
      'Estate',
      'Frigidaire',
      'Haier',
      'Roper',
      'Hotpoint',
    ],
  },
  {
    id: 5,
    name: 'Dryer - Electric',
    MerchCode: 'DRYERE',
    Brands: [
      'GE',
      'Kenmore',
      'LG',
      'Maytag',
      'Samsung',
      'Whirlpool',
      'Amana',
      'Electrolux',
      'Estate',
      'Frigidaire',
      'Haier',
      'Hotpoint',
      'Roper',
      'Bosch',
    ],
  },
  {
    id: 6,
    name: 'Dryer - Gas',
    MerchCode: 'DRYERG',
    Brands: [
      'GE',
      'Kenmore',
      'LG',
      'Maytag',
      'Samsung',
      'Whirlpool',
      'Amana',
      'Electrolux',
      'Estate',
      'Frigidaire',
      'Haier',
      'Hotpoint',
      'Roper',
      'Bosch',
    ],
  },
  {
    id: 7,
    name: 'Range',
    MerchCode: 'RANGEEG',
    Brands: [
      'Frigidaire',
      'GE',
      'Kenmore',
      'KitchenAid',
      'Samsung',
      'Whirlpool',
      'Amana',
      'Electrolux',
      'Estate',
      'Haier',
      'Hotpoint',
      'LG',
      'Maytag',
    ],
  },
  {
    id: 8,
    name: 'Oven',
    MerchCode: 'OVENBI',
    Brands: [
      'Frigidaire',
      'GE',
      'Kenmore',
      'KitchenAid',
      'Samsung',
      'Whirlpool',
      'Amana',
      'Electrolux',
      'Estate',
      'Haier',
      'Hotpoint',
      'LG',
      'Maytag',
    ],
  },
  {
    id: 9,
    name: 'Cooktop',
    MerchCode: 'COOKTOP',
    Brands: [
      'GE',
      'Kenmore',
      'KitchenAid',
      'Whirlpool',
      'Amana',
      'Electrolux',
      'Frigidaire',
      'LG',
      'Maytag',
      'Samsung',
    ],
  },
  {
    id: 10,
    name: 'Freezer',
    MerchCode: 'FREEZERO9',
    Brands: [
      'Electrolux',
      'Frigidaire',
      'GE',
      'Kenmore',
      'Maytag',
      'Whirlpool',
      'Amana',
      'Gladiator',
      'Hotpoint',
    ],
  },
  {
    id: 11,
    name: 'Central Air Conditioner',
    MerchCode: 'AIRCENT1Y1P',
    Brands: [
      'Carrier',
      'Goodman',
      'Kenmore',
      'Lennox',
      'Rheem',
      'Trane',
      'Addison',
      'AirQuest',
      'Amana',
      'American Std',
      'Aprilaire',
      'Arcoaire',
      'Armstrong',
      'Bard',
      'Bryant',
      'Coleman',
      'Comfortglow',
      'Comfortmaker',
      'Day & Night',
      'Delonghi',
      'Fedders',
      'Frigidaire',
      'GE',
      'Heil-Quaker',
      'ICP',
      'Intercity',
      'Intl Cmf Prd',
      'Janitrol',
      'Keeprite',
      'LG',
      'Luxaire',
      'Magic Chef',
      'Magic-Pak',
      'Mastercool',
      'Midea',
      'Mitsubishi',
      'Nordyne',
      'Panasonic',
      'Payne',
      'Ruud',
      'Sears',
      'Singer',
      'Snyder General',
      'Space Pak',
      'Style Crest',
      'Tappan',
      'Tempstar',
      'Weatherking',
      'Westinghouse',
      'Whirlpool',
      'Williams',
      'York',
      'Zonaire',
    ],
  },
  {
    id: 12,
    name: 'Air Conditioner - Window Unit',
    MerchCode: 'AIRCONRML',
    Brands: [
      'Amana',
      'Carrier',
      'Frigidaire',
      'GE',
      'Kenmore',
      'LG',
      'Addison',
      'AirQuest',
      'American Std',
      'Aprilaire',
      'Arcoaire',
      'Armstrong',
      'Bard',
      'Bryant',
      'Coleman',
      'Comfortglow',
      'Comfortmaker',
      'Day & Night',
      'Emerson',
      'Fedders',
      'Goodman',
      'Heil-Quaker',
      'ICP',
      'Inglis',
      'Intl Cmf Prd',
      'Janitrol',
      'Keeprite',
      'Kenmore',
      'Luxaire',
      'Magic Chef',
      'Nordyne',
      'Panasonic',
      'Payne',
      'Rheem',
      'Royal Sovereign',
      'Ruud',
      'Sears',
      'Singer',
      'Snyder General',
      'Soleus Air',
      'Style Crest',
      'Tappan',
      'Tempstar',
      'Toyotomi',
      'Trane',
      'Weatherking',
      'Westinghouse',
      'Whirlpool',
      'Williams',
      'York',
      'Zonaire',
    ],
  },
  {
    id: 13,
    name: 'Boiler',
    MerchCode: 'BOILERGAS',
    Brands: [
      'Carrier',
      'Dunkirk',
      'Goodman',
      'Kenmore',
      'Rheem',
      'Trane',
      'Addison',
      'AirQuest',
      'American Std',
      'Arcoaire',
      'Armstrong',
      'Bard',
      'Bryant',
      'Comfortglow',
      'Comfortmaker',
      'Day & Night',
      'GE',
      'Heil-Quaker',
      'ICP',
      'Intercity',
      'Intl Cmf Prd',
      'Janitrol',
      'Keeprite',
      'Luxaire',
      'Magic Chef',
      'Nordyne',
      'Oneida Royal',
      'Panasonic',
      'Ruud',
      'Sears',
      'Singer',
      'Snyder General',
      'Style Crest',
      'Tappan',
      'Tempstar',
      'Weatherking',
      'Westinghouse',
      'Whirlpool',
      'Williams',
      'York',
      'Zonaire',
    ],
  },
  {
    id: 14,
    name: 'Furnace',
    MerchCode: 'FURNFAGAS',
    Brands: [
      'Carrier',
      'Goodman',
      'Kenmore',
      'Lennox',
      'Rheem',
      'Trane',
      'Addison',
      'AirQuest',
      'Amana',
      'American Std',
      'Arcoaire',
      'Armstrong',
      'Bard',
      'Bryant',
      'Coleman',
      'Comfortglow',
      'Comfortmaker',
      'Day & Night',
      'GE',
      'Heil-Quaker',
      'ICP',
      'Intercity',
      'Intl Cmf Prd',
      'Janitrol',
      'Keeprite',
      'Luxaire',
      'Magic Chef',
      'Nordyne',
      'Panasonic',
      'Payne',
      'Ruud',
      'Sears',
      'Singer',
      'Snyder General',
      'Style Crest',
      'Tappan',
      'Tempstar',
      'Weatherking',
      'Westinghouse',
      'Whirlpool',
      'Williams',
      'York',
      'Zonaire',
    ],
  },
  {
    id: 15,
    name: 'Garage Door Opener',
    MerchCode: 'GARAGEDOOROP',
    Brands: ['Chamberlain', 'Craftsman', 'Genie'],
  },
  {
    id: 16,
    name: 'Garbage Disposal',
    MerchCode: 'DISPOSER',
    Brands: ['Kenmore'],
  },
  {
    id: 17,
    name: 'Gas Grill',
    MerchCode: 'GRILLOUTGAS',
    Brands: [
      'Char-Broil',
      'Coleman',
      'GrillMaster',
      'Kenmore',
      'KitchenAid',
      'Weber',
      'BBQ Pro',
      'Dynasty',
      'Fiesta',
      'Jade',
      'Patio Master',
      'Sears',
      'Sunbeam',
      'Thermos',
    ],
  },
  {
    id: 18,
    name: 'Heat Pump',
    MerchCode: 'AIRHEATPUMP',
    Brands: [
      'Carrier',
      'Goodman',
      'Kenmore',
      'Lennox',
      'Rheem',
      'Trane',
      'Addison',
      'AirQuest',
      'American Std',
      'Arcoaire',
      'Armstrong',
      'Bard',
      'Bryant',
      'Comfortglow',
      'Comfortmaker',
      'Day & Night',
      'GE',
      'Heil-Quaker',
      'ICP',
      'Intercity',
      'Intl Cmf Prd',
      'Janitrol',
      'Keeprite',
      'Luxaire',
      'Magic Chef',
      'Nordyne',
      'Panasonic',
      'Ruud',
      'Sears',
      'Singer',
      'Snyder General',
      'Style Crest',
      'Tappan',
      'Tempstar',
      'Weatherking',
      'Westinghouse',
      'Whirlpool',
      'Williams',
      'Williamson',
      'York',
      'Zonaire',
    ],
  },
  {
    id: 19,
    name: 'Ice Maker Freestanding',
    MerchCode: 'ICEMAKER',
    Brands: ['Electrolux', 'Kenmore', 'KitchenAid', 'Whirlpool'],
  },
  {
    id: 20,
    name: 'Microwave',
    MerchCode: 'OVENMWAVEBI',
    Brands: [
      'Amana',
      'Frigidaire',
      'Kenmore',
      'LG',
      'Maytag',
      'Samsung',
      'Electrolux',
      'GE',
      'Haier',
      'Hotpoint',
      'KitchenAid',
      'Whirlpool',
    ],
  },
  {
    id: 21,
    name: 'Double Oven',
    MerchCode: 'OVENBIDB',
    Brands: [
      'Frigidaire',
      'GE',
      'Kenmore',
      'KitchenAid',
      'Maytag',
      'Whirlpool',
      'Amana',
      'Electrolux',
      'Haier',
      'LG',
      'Samsung',
    ],
  },
  {
    id: 22,
    name: 'Range Hood',
    MerchCode: 'RANGEHOOD',
    Brands: [
      'Broan',
      'Frigidaire',
      'GE',
      'Kenmore',
      'KitchenAid',
      'Whirlpool',
      'Amana',
      'Electrolux',
      'Haier',
      'LG',
      'Maytag',
      'Samsung',
    ],
  },
  {
    id: 23,
    name: 'Stacked Laundry Unit',
    MerchCode: 'WASHERDRYERL',
    Brands: ['Frigidaire', 'GE', 'LG', 'Kenmore', 'Whirlpool'],
  },
  {
    id: 24,
    name: 'Trash Compactor',
    MerchCode: 'COMPACTOR',
    Brands: ['GE', 'Kenmore', 'KitchenAid', 'Whirlpool', 'Gladiator'],
  },
  {
    id: 25,
    name: 'Washer Dryer Combo',
    MerchCode: 'WASHFLSDS1Y5',
    Brands: ['Frigidaire', 'GE', 'LG', 'Kenmore', 'Whirlpool'],
  },
  {
    id: 26,
    name: 'Riding Mower',
    MerchCode: 'TRACTRD1YR',
    Brands: ['Craftsman', 'Husqvarna', 'Murray', 'Poulan', 'Yard Machines'],
  },
  {
    id: 27,
    name: 'Snowblower',
    MerchCode: 'SNOWTH2S1YR',
    Brands: ['Craftsman'],
  },
  {
    id: 28,
    name: 'Wide Deck Mower',
    MerchCode: 'MOWERLWA2YR',
    Brands: ['Craftsman', 'Husqvarna', 'Murray', 'Poulan', 'Yard Machines'],
  },
  {
    id: 29,
    name: 'Water Softener',
    MerchCode: 'WATERSOFT',
    Brands: ['Kenmore'],
  },
  {
    id: 30,
    name: 'Water Heater',
    MerchCode: 'WATERHEAT',
    Brands: [
      'American',
      'AO Smith',
      'GE',
      'Kenmore',
      'Rheem',
      'State',
      'Ace',
      'Ambassador',
      'Crosley',
      'Marathon',
      'Reliance',
      'Rexel',
      'Ruud',
      'Sentry',
      'Superior',
      'Thermo King',
      'Wheelers',
    ],
  },
  {
    id: 31,
    name: 'Whole House Dehumidifiers and Humidifiers',
    MerchCode: 'HUMID1Y1P',
    Brands: ['Aprilaire', 'Kenmore'],
  },
  {
    id: 32,
    name: 'Elliptical Machine',
    MerchCode: 'EXERCISENE',
    Brands: [
      'Life Fitness',
      'Lifestyler',
      'Nautilus',
      'ProForm',
      'AFG',
      'BH Fitness',
      'Bladez',
      'Diamondback',
      'Schwinn',
      'Weslo',
    ],
  },
  {
    id: 33,
    name: 'Fitness Weight Machine',
    MerchCode: 'FITNESS',
    Brands: ['Aprilaire', 'Kenmore'],
  },
  {
    id: 34,
    name: 'Treadmill',
    MerchCode: 'TREADMILL',
    Brands: [
      'Bowflex',
      'Health Rider',
      'Nautilus',
      'ProForm',
      'AFG',
      'BH Fitness',
      'Bladez',
      'Body Champ',
      'Body Flex',
      'Body Power',
      'Diamondback',
      'Epic',
      'Horizon',
      'Life Fitness',
      'Lifestyler',
      'Reebok',
      'Schwinn',
      'Weider',
      'Weslo',
    ],
  },
  {
    id: 35,
    name: 'Stepper',
    MerchCode: 'EXERCISER',
    Brands: [
      'Life Fitness',
      'Lifestyler',
      'Nautilus',
      'ProForm',
      'AFG',
      'BH Fitness',
      'Bladez',
      'Diamondback',
      'Schwinn',
      'Weslo',
    ],
  },
  {
    id: 36,
    name: 'Stationary Bike',
    MerchCode: 'EXERCISE1',
    Brands: [
      'Bowflex',
      'Health Rider',
      'Nautilus',
      'ProForm',
      'AFG',
      'BH Fitness',
      'Bladez',
      'Body Champ',
      'Body Flex',
      'Body Power',
      'Diamondback',
      'Epic',
      'Horizon',
      'Life Fitness',
      'Lifestyler',
      'Reebok',
      'Schwinn',
      'Weider',
      'Weslo',
    ],
  },
];
/**
 * Repair Product names used to filter cms repair categories which can be processed via the scheduler (to be used in src/components/cms/list/ScheduleRepairItemList.tsx)
 */
export const scheduleRepairProductNames = [
  'Dishwasher',
  'Washer',
  'Refrigerator',
  'Dryer',
  'Range',
  'Oven',
  'Air Conditioner: Window, Room Installed',
  'Air Conditioner: Window, Over 11,500 BTU',
  'Boiler',
  'Central Air Conditioner',
  'Cooktop',
  'Elliptical Machine',
  'Fitness Weight Machine',
  'Freezer',
  'Furnace',
  'Garage Door Opener',
  'Garbage Disposal',
  'Gas Grill',
  'Heat Pump',
  'Ice Maker Freestanding',
  'Microwave',
  'Double Oven',
  'Range Hood',
  'Riding Mower',
  'Snowblower',
  'Stacked Laundry Unit',
  'Stationary Bike',
  'Stepper',
  'Treadmill',
  'TV',
  'Trash Compactor',
  'Washer Dryer Combo',
  'Water Heater',
  'Water Softener',
  'Wide Deck Mower',
  'Whole House Dehumidifiers and Humidifiers',
];
