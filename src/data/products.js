export const products = [
  {
    id: 'luxe-01',
    title: 'Double-Faced Cashmere Overcoat',
    subtitle: 'Hand-finished in Florence from 100% Mongolian cashmere',
    category: 'Women',
    subCategory: 'Outerwear',
    price: 890,
    originalPrice: 1150,
    badge: 'ATELIER EDIT',
    images: [
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Camel Tan', hex: '#C19A6B' },
      { name: 'Noir Black', hex: '#111111' },
      { name: 'Ivory Cream', hex: '#EAE6DF' }
    ],
    rating: 4.9,
    reviewsCount: 38,
    description: 'Sculpted with relaxed dropped shoulders and a structured notched lapel, this double-faced coat is woven from featherlight yet insulating cashmere.',
    fabric: '100% Pure Cashmere • Lining: 100% Cupro Silk • Made in Italy',
    inStock: 6
  },
  {
    id: 'luxe-02',
    title: 'Structured Italian Wool Tuxedo Blazer',
    subtitle: 'Sharp peak lapels with satin contrast framing',
    category: 'Men',
    subCategory: 'Tailoring',
    price: 750,
    originalPrice: 920,
    badge: 'NEW RUNWAY',
    images: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['38R', '40R', '42R', '44R'],
    colors: [
      { name: 'Midnight Black', hex: '#0A0A0A' },
      { name: 'Deep Navy', hex: '#0B132B' }
    ],
    rating: 5.0,
    reviewsCount: 42,
    description: 'Tailored using traditional bespoke techniques with horsehair canvas internal structuring to provide an impeccable chest drape and shoulder profile.',
    fabric: '100% Super 150s Virgin Wool • Silk Grosgrain Lapels • Made in Milan',
    inStock: 9
  },
  {
    id: 'luxe-03',
    title: 'Mulberry Silk Bias-Cut Gown',
    subtitle: 'Floor-length silhouette with liquid silk sheen',
    category: 'Women',
    subCategory: 'Dresses',
    price: 680,
    originalPrice: null,
    badge: 'LIMITED EDITION',
    images: [
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['XS', 'S', 'M'],
    colors: [
      { name: 'Champagne Gold', hex: '#D4AF37' },
      { name: 'Emerald Noir', hex: '#0C2A1E' },
      { name: 'Ruby Wine', hex: '#4A0E17' }
    ],
    rating: 4.8,
    reviewsCount: 29,
    description: 'Cut on the bias to hug curves gracefully with effortless fluidity. Features delicate rouleau straps and an open back with minimalist criss-cross ties.',
    fabric: '100% Organic Grade 6A Mulberry Silk • Dry Clean Only • Handcrafted in Paris',
    inStock: 4
  },
  {
    id: 'luxe-04',
    title: 'Heavyweight Milano Knit Turtleneck',
    subtitle: 'Chunky ribbed trim with ultra-fine merino wool',
    category: 'Men',
    subCategory: 'Knitwear',
    price: 420,
    originalPrice: 480,
    badge: 'BESTSELLER',
    images: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Oatmeal Heather', hex: '#D3C5B4' },
      { name: 'Charcoal Grey', hex: '#2A2A2A' },
      { name: 'Deep Olive', hex: '#3E442B' }
    ],
    rating: 4.9,
    reviewsCount: 56,
    description: 'An enduring staple knitted on 7-gauge machines in Northern Italy. Unmatched thermal warmth with zero itch, designed for seamless cold-weather layering.',
    fabric: '100% Extra-Fine Australian Merino Wool • Spun in Biella',
    inStock: 14
  },
  {
    id: 'luxe-05',
    title: 'Architectural Trench with Horn Buttons',
    subtitle: 'Waterproof gabardine cotton with storm flap collar',
    category: 'Women',
    subCategory: 'Outerwear',
    price: 820,
    originalPrice: 950,
    badge: 'HERITAGE',
    images: [
      'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Classic Khaki', hex: '#BDB395' },
      { name: 'Ink Black', hex: '#111111' }
    ],
    rating: 4.9,
    reviewsCount: 64,
    description: 'Inspired by military heritage outerwear, updated with a modern oversized silhouette, tortoiseshell-effect genuine horn buttons, and D-ring belt.',
    fabric: '100% High-Density Cotton Gabardine • Water Repellent Finish',
    inStock: 8
  },
  {
    id: 'luxe-06',
    title: 'Monogram Calfskin Atelier Briefcase',
    subtitle: 'Full-grain vegetable tanned Italian leather',
    category: 'Accessories',
    subCategory: 'Leather',
    price: 940,
    originalPrice: null,
    badge: 'HANDCRAFTED',
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['One Size'],
    colors: [
      { name: 'Espresso Brown', hex: '#3B2F2F' },
      { name: 'Onyx Black', hex: '#0F0F0F' }
    ],
    rating: 5.0,
    reviewsCount: 19,
    description: 'Hand-stitched by Tuscan master leather crafters with palladium hardware and padded 16-inch laptop compartment. Develops a rich vintage patina over time.',
    fabric: '100% Full-Grain Tuscan Calfskin • Solid Brass Hardware',
    inStock: 5
  },
  {
    id: 'luxe-07',
    title: 'Wide-Leg Pleated Atelier Trousers',
    subtitle: 'High-rise waist with fluid drape and sharp front crease',
    category: 'Women',
    subCategory: 'Tailoring',
    price: 390,
    originalPrice: 460,
    badge: 'NEW DROP',
    images: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Sand Cream', hex: '#DCD4C4' },
      { name: 'Pitch Black', hex: '#111111' }
    ],
    rating: 4.7,
    reviewsCount: 22,
    description: 'A masterclass in modern proportion. High-waisted with double inverted pleats that cascade into a dramatic wide leg. Beautiful fluid movement as you walk.',
    fabric: '70% Wool, 30% Mulberry Silk • Hand-finished hem',
    inStock: 11
  },
  {
    id: 'luxe-08',
    title: 'Minimalist Suede Chelsea Boots',
    subtitle: 'Blake-stitched construction with Vibram rubber soles',
    category: 'Men',
    subCategory: 'Footwear',
    price: 520,
    originalPrice: null,
    badge: 'ATELIER EDIT',
    images: [
      'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: [
      { name: 'Snuff Suede', hex: '#8B5A2B' },
      { name: 'Noir Suede', hex: '#1C1C1C' }
    ],
    rating: 4.9,
    reviewsCount: 31,
    description: 'Crafted in Northamptonshire from water-resistant calf suede with tonal elastic gussets and pull tabs. Impeccably comfortable from the first wear.',
    fabric: '100% English Calf Suede • Calfskin Lining • Vibram Outsole',
    inStock: 7
  },
  {
    id: 'luxe-09',
    title: 'Crushed Velvet Evening Dinner Jacket',
    subtitle: 'Midnight velvet with hand-quilted silk lining',
    category: 'Men',
    subCategory: 'Tailoring',
    price: 880,
    originalPrice: 1100,
    badge: 'LIMITED RUN',
    images: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['38R', '40R', '42R'],
    colors: [
      { name: 'Midnight Wine', hex: '#3E001F' },
      { name: 'Royal Emerald', hex: '#002E1B' },
      { name: 'Abyssal Black', hex: '#090909' }
    ],
    rating: 5.0,
    reviewsCount: 17,
    description: 'The definitive statement for black-tie galas. Pure cotton velvet with a rich, light-catching luster, finished with shawl lapels in tonal duchess satin.',
    fabric: '100% Italian Cotton Velvet • Silk Satin Trim • Made in Napoli',
    inStock: 3
  },
  {
    id: 'luxe-10',
    title: 'Sculptural Plissé Cape Dress',
    subtitle: 'Sunburst pleated georgette with floating chiffon hem',
    category: 'Women',
    subCategory: 'Dresses',
    price: 790,
    originalPrice: null,
    badge: 'RUNWAY EXCLUSIVE',
    images: [
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['XS', 'S', 'M'],
    colors: [
      { name: 'Alabaster White', hex: '#F4F1EA' },
      { name: 'Obsidian Black', hex: '#111111' }
    ],
    rating: 4.8,
    reviewsCount: 14,
    description: 'Permanent sunburst heat pleats engineered into airy silk georgette. Dramatic integrated capelet that flows effortlessly with every movement.',
    fabric: '100% Silk Georgette • Fully Lined in Crepe de Chine',
    inStock: 5
  },
  {
    id: 'luxe-11',
    title: 'Hand-Rolled Silk Twill Scarf 90cm',
    subtitle: 'Mythological atelier print with hand-stitched rolled edges',
    category: 'Accessories',
    subCategory: 'Accessories',
    price: 240,
    originalPrice: 280,
    badge: 'BESTSELLER',
    images: [
      'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['90x90 cm'],
    colors: [
      { name: 'Gold & Ivory', hex: '#D4AF37' },
      { name: 'Midnight Azure', hex: '#1E3F66' }
    ],
    rating: 4.9,
    reviewsCount: 45,
    description: 'Screen-printed on 18 momme silk twill with 14 distinct color screens. Features hand-rolled edges sewn by skilled seamstresses in Lyon, France.',
    fabric: '100% Mulberry Silk Twill • Hand-Rolled Hem',
    inStock: 20
  },
  {
    id: 'luxe-12',
    title: 'Relaxed Drop-Shoulder Alpaca Hoodie',
    subtitle: 'Cloud-soft baby alpaca with kangaroo pocket',
    category: 'Men',
    subCategory: 'Knitwear',
    price: 360,
    originalPrice: 420,
    badge: 'NEW DROP',
    images: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Heather Grey', hex: '#8C8C8C' },
      { name: 'Bone White', hex: '#EBE7DF' },
      { name: 'Washed Black', hex: '#222222' }
    ],
    rating: 4.9,
    reviewsCount: 39,
    description: 'Redefining casual luxury. Spun from sustainable Peruvian baby alpaca and organic cotton for a featherlight cocoon feel that breathes naturally.',
    fabric: '60% Baby Alpaca, 40% Organic Pima Cotton',
    inStock: 12
  }
]
