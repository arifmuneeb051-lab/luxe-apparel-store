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
    title: 'Sculpted Hourglass Italian Blazer',
    subtitle: 'Cinched waist architecture with horn buttons',
    category: 'Women',
    subCategory: 'Tailoring',
    price: 620,
    originalPrice: 780,
    badge: 'NEW ARRIVAL',
    images: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Crema Sand', hex: '#E8DFD8' },
      { name: 'Pitch Black', hex: '#141414' }
    ],
    rating: 4.7,
    reviewsCount: 22,
    description: 'A masterpiece of precision tailoring. Exaggerated padded shoulders balanced against a sculpted tapered waist creating a formidable runway silhouette.',
    fabric: '96% Virgin Wool, 4% Elastane • Horn Button Closure',
    inStock: 8
  },
  {
    id: 'luxe-06',
    title: 'Monogram Calfskin Atelier Briefcase',
    subtitle: 'Hand-burnished full-grain Italian box calf leather',
    category: 'Accessories',
    subCategory: 'Accessories',
    price: 940,
    originalPrice: 1200,
    badge: 'ICONIC PIECE',
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['One Size (40x29x8 cm)'],
    colors: [
      { name: 'Cognac Saddle', hex: '#8B4513' },
      { name: 'Obsidian Black', hex: '#0D0D0D' }
    ],
    rating: 5.0,
    reviewsCount: 64,
    description: 'Constructed by multi-generational artisans in Tuscany. Hand-painted beveled edges, solid palladium hardware, and padded compartment for a 16" laptop.',
    fabric: '100% Full-Grain Tuscan Calfskin • Suede Microfiber Lining',
    inStock: 5
  },
  {
    id: 'luxe-07',
    title: 'Hand-Stitched Leather Chelsea Boots',
    subtitle: 'Blake-stitched construction with Goodyear leather welt',
    category: 'Men',
    subCategory: 'Leather',
    price: 580,
    originalPrice: null,
    badge: 'HERITAGE CRAFT',
    images: [
      'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['40 EU', '41 EU', '42 EU', '43 EU', '44 EU', '45 EU'],
    colors: [
      { name: 'Espresso Polish', hex: '#3B2F2F' },
      { name: 'Black Patent', hex: '#111111' }
    ],
    rating: 4.9,
    reviewsCount: 31,
    description: 'Handcrafted in Northamptonshire from premium European crust leather. Fitted with flexible elasticated side gussets and stacked leather heels.',
    fabric: '100% Calf Leather Upper • Oak Bark Tanned Leather Soles',
    inStock: 11
  },
  {
    id: 'luxe-08',
    title: 'Belted Wool-Cashmere Trench',
    subtitle: 'Double-breasted storm flap with removable shearling collar',
    category: 'Women',
    subCategory: 'Outerwear',
    price: 920,
    originalPrice: 1180,
    badge: 'ATELIER EDIT',
    images: [
      'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Olive Khaki', hex: '#556B2F' },
      { name: 'Desert Sand', hex: '#C2B280' }
    ],
    rating: 4.9,
    reviewsCount: 19,
    description: 'An architectural reinterpretation of the iconic trench. Heavy drape wool-cashmere with exaggerated storm flaps and an extra-wide self-tie waist belt.',
    fabric: '85% Virgin Wool, 15% Cashmere • Detachable Shearling Collar',
    inStock: 7
  },
  {
    id: 'luxe-09',
    title: 'Shawl Lapel Velvet Smoking Jacket',
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
    sizes: ['38R', '40R', '42R', '44R'],
    colors: [
      { name: 'Midnight Wine', hex: '#3E001F' },
      { name: 'Royal Emerald', hex: '#002E1B' },
      { name: 'Abyssal Black', hex: '#090909' }
    ],
    rating: 5.0,
    reviewsCount: 17,
    description: 'The definitive statement for black-tie galas. Pure cotton velvet with a rich, light-catching luster, finished with shawl lapels in tonal duchess satin.',
    fabric: '100% Italian Cotton Velvet • Silk Satin Trim • Made in Napoli',
    inStock: 5
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
  },
  {
    id: 'luxe-13',
    title: 'Spanish Merino Shearling Aviator Coat',
    subtitle: 'Nappa leather finish with dense curly shearling fleece',
    category: 'Women',
    subCategory: 'Outerwear',
    price: 1250,
    originalPrice: 1550,
    badge: 'ICONIC PIECE',
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Espresso & Cream', hex: '#2E1D13' },
      { name: 'Desert Sand', hex: '#C2B280' }
    ],
    rating: 5.0,
    reviewsCount: 27,
    description: 'Artfully handcrafted from Spanish Entrefino shearling with antiqued brass buckles at the collar and waist. The pinnacle of winter runway outerwear.',
    fabric: '100% Natural Merino Shearling • Antique Brass Hardware • Made in Spain',
    inStock: 4
  },
  {
    id: 'luxe-14',
    title: 'Bespoke Pinstripe Double-Breasted Suit',
    subtitle: 'Super 160s chalk stripe wool with roped pagoda shoulders',
    category: 'Men',
    subCategory: 'Tailoring',
    price: 1180,
    originalPrice: 1450,
    badge: 'ATELIER EDIT',
    images: [
      'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['38R', '40R', '42R', '44R', '46R'],
    colors: [
      { name: 'Navy Chalk Stripe', hex: '#0B132B' },
      { name: 'Charcoal Pinstripe', hex: '#1C1C1C' }
    ],
    rating: 5.0,
    reviewsCount: 34,
    description: 'Savile Row inspired proportions cut from lightweight British worsted wool. Features a 6x2 button stance, hand-finished Milanese lapel buttonhole, and side adjusters on trousers.',
    fabric: '100% Super 160s Virgin Wool • Mother of Pearl Buttons • Handcrafted',
    inStock: 7
  },
  {
    id: 'luxe-15',
    title: 'Draped Velvet Backless Evening Gown',
    subtitle: 'Floor-sweeping column silhouette with dramatic low-back drape',
    category: 'Women',
    subCategory: 'Dresses',
    price: 850,
    originalPrice: 1050,
    badge: 'NEW RUNWAY',
    images: [
      'https://images.unsplash.com/photo-1518049362265-d5b2a6467637?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['XS', 'S', 'M'],
    colors: [
      { name: 'Midnight Noir', hex: '#0A0A0A' },
      { name: 'Burgundy Crimson', hex: '#4A0E17' }
    ],
    rating: 4.9,
    reviewsCount: 18,
    description: 'Crafted from stretch silk-velvet that cascades seamlessly with the body. Features an understated boat neckline transitioning into an audacious plunged open back.',
    fabric: '82% Rayon, 18% Silk Velvet • Internal Invisible Corsetry',
    inStock: 6
  },
  {
    id: 'luxe-16',
    title: 'Lambskin Leather Minimalist Biker Jacket',
    subtitle: 'Ultra-soft washed lambskin with asymmetric Swiss Raccagni zips',
    category: 'Men',
    subCategory: 'Leather',
    price: 980,
    originalPrice: 1250,
    badge: 'BESTSELLER',
    images: [
      'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Washed Matte Black', hex: '#141414' },
      { name: 'Vintage Oxblood', hex: '#3A141A' }
    ],
    rating: 4.9,
    reviewsCount: 52,
    description: 'Refined reduction of the classic biker jacket. Tonal hardware, no unnecessary studs, and washed buttery lambskin that forms to the wearer like a second skin.',
    fabric: '100% Full-Grain French Lambskin • Silk Satin Lining',
    inStock: 8
  },
  {
    id: 'luxe-17',
    title: 'Wide-Leg Pleated Silk-Wool Trousers',
    subtitle: 'High-rise relaxed fit with deep inverted double pleats',
    category: 'Women',
    subCategory: 'Tailoring',
    price: 480,
    originalPrice: 560,
    badge: 'ATELIER EDIT',
    images: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Ecru Chalk', hex: '#F0EBE1' },
      { name: 'Charcoal Flannel', hex: '#262626' }
    ],
    rating: 4.8,
    reviewsCount: 31,
    description: 'The archetype of effortless elegance. Tailored with a clean extended waistband tab, fluid drape, and unhemmed cuffs for bespoke tailor customization.',
    fabric: '65% Wool, 35% Silk • Horn Button Closures',
    inStock: 10
  },
  {
    id: 'luxe-18',
    title: 'Giza 45 Egyptian Cotton Poplin Shirt',
    subtitle: '200/2 ply compact poplin with Australian mother-of-pearl buttons',
    category: 'Men',
    subCategory: 'Tailoring',
    price: 290,
    originalPrice: 340,
    badge: 'ESSENTIAL',
    images: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['15.0', '15.5', '16.0', '16.5', '17.0'],
    colors: [
      { name: 'Crisp Optic White', hex: '#FFFFFF' },
      { name: 'Pale Sky Azure', hex: '#D6E6F2' }
    ],
    rating: 4.9,
    reviewsCount: 48,
    description: 'Spun from the queen of Egyptian cottons, Giza 45. Single-needle stitching with 24 stitches per inch, semi-spread collar, and curved split yoke.',
    fabric: '100% Giza 45 Long-Staple Cotton • Australian MOP Buttons',
    inStock: 16
  },
  {
    id: 'luxe-19',
    title: 'Knee-High Hand-Burnished Leather Boots',
    subtitle: 'Sculpted almond toe with 75mm stacked cuban heel',
    category: 'Women',
    subCategory: 'Leather',
    price: 820,
    originalPrice: 980,
    badge: 'LIMITED EDITION',
    images: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['36 EU', '37 EU', '38 EU', '39 EU', '40 EU', '41 EU'],
    colors: [
      { name: 'Deep Burgundy Wine', hex: '#3E001F' },
      { name: 'Gloss Noir', hex: '#111111' }
    ],
    rating: 5.0,
    reviewsCount: 24,
    description: 'Individually hand-burnished in Civitanova Marche with natural carnauba waxes. Features a pull-on shaft with internal pull tabs and cushioned leather footbeds.',
    fabric: '100% Calfskin Leather • Leather Sole with Injected Rubber Grip',
    inStock: 6
  },
  {
    id: 'luxe-20',
    title: 'Waffle-Knit Pure Cashmere Crewneck',
    subtitle: '4-ply Scottish spun cashmere in tactile waffle stitch',
    category: 'Men',
    subCategory: 'Knitwear',
    price: 460,
    originalPrice: 540,
    badge: 'BESTSELLER',
    images: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Dark Caramel', hex: '#7E481C' },
      { name: 'Slate Blue', hex: '#3A4B5C' },
      { name: 'Winter Ecru', hex: '#EBE7DF' }
    ],
    rating: 4.9,
    reviewsCount: 36,
    description: 'Substantial 4-ply cashmere with rich textural depth. Ribbed cuffs and hem knitted with Lycra threading to guarantee lifelong shape retention.',
    fabric: '100% Grade-A Mongolian Cashmere • Spun in Kinross, Scotland',
    inStock: 11
  },
  {
    id: 'luxe-21',
    title: 'Pussy-Bow Silk Georgette Blouse',
    subtitle: 'Sheer fluid silk with elongated self-tie scarf neck',
    category: 'Women',
    subCategory: 'Tailoring',
    price: 410,
    originalPrice: null,
    badge: 'NEW ARRIVAL',
    images: [
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Champagne Blush', hex: '#F3E5D8' },
      { name: 'Pure Noir', hex: '#111111' }
    ],
    rating: 4.8,
    reviewsCount: 19,
    description: 'Sensual fluidity meets aristocratic tailoring. Features gathered poet sleeves, French cuffs, and an extended neck tie that can be knotted into a decadent pussy-bow or draped loosely.',
    fabric: '100% Pure Silk Georgette • Mother of Pearl Concealed Buttons',
    inStock: 9
  },
  {
    id: 'luxe-22',
    title: 'Calfskin Penny Loafers with Blake Stitching',
    subtitle: 'Classic apron toe with hand-painted antiqued patina',
    category: 'Men',
    subCategory: 'Leather',
    price: 540,
    originalPrice: 620,
    badge: 'HERITAGE CRAFT',
    images: [
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['40 EU', '41 EU', '42 EU', '43 EU', '44 EU', '45 EU'],
    colors: [
      { name: 'Burgundy Cherry', hex: '#4A121A' },
      { name: 'Tuscan Oak', hex: '#5C381E' }
    ],
    rating: 4.9,
    reviewsCount: 28,
    description: 'Understated Italian sartorial footwear. Flexible unlined construction that molds instantly to the foot without any break-in period.',
    fabric: '100% French Calfskin • Hand-Finished Leather Outsole',
    inStock: 8
  },
  {
    id: 'luxe-23',
    title: 'Asymmetric Draped Satin Midi Dress',
    subtitle: 'Liquid hammered satin with sculpted waist gathers',
    category: 'Women',
    subCategory: 'Dresses',
    price: 620,
    originalPrice: 750,
    badge: 'NEW RUNWAY',
    images: [
      'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['XS', 'S', 'M'],
    colors: [
      { name: 'Bronze Olive', hex: '#5A4E32' },
      { name: 'Silver Slate', hex: '#9E9E9E' }
    ],
    rating: 4.7,
    reviewsCount: 16,
    description: 'An architectural study in drapery. Features a high cowl neck, diagonal waist gathering that slims the torso, and an asymmetric handkerchief hem.',
    fabric: '100% Heavyweight Japanese Hammered Satin',
    inStock: 7
  },
  {
    id: 'luxe-24',
    title: 'Technical Storm Trench with Horn Buttons',
    subtitle: 'Weatherproof bonded cotton gabardine with removable down liner',
    category: 'Men',
    subCategory: 'Outerwear',
    price: 890,
    originalPrice: 1100,
    badge: 'ATELIER EDIT',
    images: [
      'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['38R', '40R', '42R', '44R'],
    colors: [
      { name: 'Midnight Charcoal', hex: '#1F2421' },
      { name: 'Khaki Tan', hex: '#8F8172' }
    ],
    rating: 4.9,
    reviewsCount: 22,
    description: 'Merging heritage military trench details with cutting-edge 3-layer weatherproof membrane technology. Completely windproof and water-resistant while remaining exquisitely breathable.',
    fabric: 'Bonded Cotton Gabardine • 90/10 Goose Down Detachable Gilet',
    inStock: 5
  },
  {
    id: 'luxe-25',
    title: 'Ribbed Pure Cashmere Cocoon Cardigan',
    subtitle: 'Chunky fisherman rib with oversized mother-of-pearl buttons',
    category: 'Women',
    subCategory: 'Knitwear',
    price: 510,
    originalPrice: 620,
    badge: 'BESTSELLER',
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Vanilla Cream', hex: '#F3EDE2' },
      { name: 'Charcoal Melange', hex: '#2C2C2C' }
    ],
    rating: 5.0,
    reviewsCount: 41,
    description: 'Effortless cocoon silhouette designed to envelop the body. Deep V-neckline, drop shoulders, and generous patch pockets made for luxurious lounging or layering.',
    fabric: '100% 5-Gauge Mongolian Cashmere • 30mm MOP Buttons',
    inStock: 12
  },
  {
    id: 'luxe-26',
    title: 'Minimalist Stand-Collar Car Coat',
    subtitle: 'Double-woven virgin wool with concealed horn button placket',
    category: 'Men',
    subCategory: 'Outerwear',
    price: 780,
    originalPrice: null,
    badge: 'NEW RUNWAY',
    images: [
      'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['38R', '40R', '42R', '44R'],
    colors: [
      { name: 'Deep Camel', hex: '#B8860B' },
      { name: 'Raven Black', hex: '#0B0B0B' }
    ],
    rating: 4.8,
    reviewsCount: 20,
    description: 'Clean Scandinavian-inspired geometry. Clean fly front with concealed button fastening, architectural stand collar, and deep welt hand-warmer pockets.',
    fabric: '100% Italian Virgin Wool Melange • Bemberg Cupro Lining',
    inStock: 8
  },
  {
    id: 'luxe-27',
    title: 'Quilted Lambskin Chain Flap Bag',
    subtitle: 'Diamond quilted nappa leather with 24k gold-plated hardware',
    category: 'Accessories',
    subCategory: 'Accessories',
    price: 1150,
    originalPrice: 1400,
    badge: 'ICONIC PIECE',
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['Medium (25x15x7 cm)'],
    colors: [
      { name: 'Noir Gold', hex: '#0F0F0F' },
      { name: 'Alabaster Gold', hex: '#EDE8DF' }
    ],
    rating: 5.0,
    reviewsCount: 73,
    description: 'Pillowy quilted French lambskin paired with an interwoven leather and chain strap. Fitted with an iconic turn-lock closure and burgundy leather interior with dual slip pockets.',
    fabric: '100% Quilted Lambskin • 24k Gold Electroplated Brass',
    inStock: 4
  },
  {
    id: 'luxe-28',
    title: 'Single-Breasted Travel Blazer in Super 130s',
    subtitle: 'Wrinkle-resistant high-twist wool with butterfly lining',
    category: 'Men',
    subCategory: 'Tailoring',
    price: 690,
    originalPrice: 820,
    badge: 'ATELIER EDIT',
    images: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['38R', '40R', '42R', '44R'],
    colors: [
      { name: 'Petrol Navy', hex: '#1B263B' },
      { name: 'Dark Taupe', hex: '#483C32' }
    ],
    rating: 4.9,
    reviewsCount: 29,
    description: 'Engineered specifically for the global traveler. Woven with high-twist 4-ply yarn that naturally bounces back from suitcase folds with zero wrinkles.',
    fabric: '100% Super 130s High-Twist Wool • Unstructured Shoulder',
    inStock: 9
  },
  {
    id: 'luxe-29',
    title: 'Minimalist Pointed Leather Slingback Pumps',
    subtitle: '65mm sculpted stiletto heel with delicate ankle strap',
    category: 'Women',
    subCategory: 'Leather',
    price: 490,
    originalPrice: 580,
    badge: 'NEW DROP',
    images: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['36 EU', '37 EU', '38 EU', '39 EU', '40 EU'],
    colors: [
      { name: 'Glossy Black', hex: '#111111' },
      { name: 'Warm Bone', hex: '#EBE5D8' }
    ],
    rating: 4.8,
    reviewsCount: 15,
    description: 'Sharp elongated pointed toe crafted from lustrous boxcalf leather. Perfectly calibrated 65mm kitten stiletto offering round-the-clock comfort with black-tie poise.',
    fabric: '100% Italian Boxcalf Upper • Hand-Finished Leather Sole',
    inStock: 7
  },
  {
    id: 'luxe-30',
    title: 'Handcrafted Japanese Titanium Sunglasses',
    subtitle: 'Beta-titanium frame with anti-reflective nylon lenses',
    category: 'Accessories',
    subCategory: 'Accessories',
    price: 340,
    originalPrice: null,
    badge: 'BESTSELLER',
    images: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['One Size (52-20-145)'],
    colors: [
      { name: 'Brushed Gold & Olive', hex: '#D4AF37' },
      { name: 'Matte Gunmetal & Smoke', hex: '#2F2F2F' }
    ],
    rating: 5.0,
    reviewsCount: 51,
    description: 'Individually machined in Sabae, Japan. Ultra-lightweight 14-gram beta-titanium structure with 100% UVA/UVB Category 3 nylon lenses.',
    fabric: '100% Pure Japanese Titanium • Zeiss Anti-Reflective Lenses',
    inStock: 15
  },
  {
    id: 'luxe-31',
    title: 'Full-Grain Leather Belt with Solid Brass Buckle',
    subtitle: '35mm vegetable-tanned bridle leather with beveled edge',
    category: 'Accessories',
    subCategory: 'Accessories',
    price: 210,
    originalPrice: 250,
    badge: 'ESSENTIAL',
    images: [
      'https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['85 cm', '90 cm', '95 cm', '100 cm', '105 cm'],
    colors: [
      { name: 'Saddle Tan', hex: '#8B4513' },
      { name: 'Aniline Black', hex: '#111111' }
    ],
    rating: 4.9,
    reviewsCount: 38,
    description: 'Cut from 4mm thick English bridle leather that patinas gorgeously over decades of wear. Hand-burnished edges with solid forged brass buckle.',
    fabric: '100% Full-Grain Vegetable Tanned Leather • Solid Brass Hardware',
    inStock: 18
  },
  {
    id: 'luxe-32',
    title: 'Atelier Amber & Smoked Oud Extrait de Parfum',
    subtitle: '35% perfume oil concentration with aged Cambodian oud',
    category: 'Accessories',
    subCategory: 'Accessories',
    price: 280,
    originalPrice: null,
    badge: 'ATELIER EXCLUSIVE',
    images: [
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['100ml Extrait'],
    colors: [
      { name: 'Amber Gold Flacon', hex: '#D4AF37' }
    ],
    rating: 5.0,
    reviewsCount: 62,
    description: 'The signature olfactory identity of the House of Luxe. Opening with saffron and pink pepper, descending into a heart of Taif rose and 12-year aged wild Cambodian oud.',
    fabric: 'Hand-Poured in Grasse, France • Heavy Glass Flacon with Magnetic Cap',
    inStock: 14
  }
]
