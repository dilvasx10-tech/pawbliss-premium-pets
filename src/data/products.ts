export interface ProductVariant {
  type: 'color' | 'size';
  options: string[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  price: number;
  comparePrice?: number;
  description: string;
  benefits: string[];
  variant?: ProductVariant;
  badge?: 'Bestseller' | 'Staff Pick' | 'New';
  category: 'dogs' | 'cats' | 'both';
  stock: number;
  rating: number;
  reviewCount: number;
  howToUse: string[];
  materials: string;
  comparisonFeatures: string[];
  image: string;
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'calm-lick-mat',
    name: 'PawBliss Calm Lick Mat',
    tagline: 'Turn bath time, vet visits, and storms into calm moments',
    price: 24.99,
    description: 'Premium food-grade silicone lick mat with multi-texture surface. Reduces anxiety, slows feeding, supports dental health. Dishwasher safe. BPA-free.',
    benefits: ['Anxiety relief during stressful moments', 'Slows feeding to improve digestion', 'Multi-texture surface promotes dental hygiene', 'Industrial-strength suction cup base'],
    variant: { type: 'color', options: ['Sage Green', 'Blush Pink', 'Slate Blue'] },
    badge: 'Bestseller',
    category: 'both',
    stock: 12,
    rating: 4.9,
    reviewCount: 2847,
    howToUse: ['Spread peanut butter, yogurt, or wet food on the mat', 'Press suction cup firmly to any smooth surface', 'Let your pet lick away stress — perfect for baths, storms, or alone time'],
    materials: 'Food-grade silicone, BPA-free, dishwasher safe. Meets FDA food contact standards.',
    comparisonFeatures: ['Multi-texture surface', 'Industrial suction cup', 'Dishwasher safe', 'BPA-free certified', 'Vet recommended'],
    image: '/placeholder.svg',
  },
  {
    id: '2',
    slug: 'pure-flow-cat-fountain',
    name: 'PawBliss Pure Flow Cat Fountain',
    tagline: 'Fresh filtered water your cat will actually drink',
    price: 44.99,
    description: 'Ultra-quiet circulation pump, 3-stage filtration, 2L capacity. Encourages hydration which vets say is critical for kidney health in cats.',
    benefits: ['3-stage filtration removes impurities', 'Whisper-quiet pump under 30dB', 'Encourages cats to drink more water', 'Easy disassembly for quick cleaning'],
    variant: { type: 'color', options: ['Matte White', 'Matte Black'] },
    badge: 'Staff Pick',
    category: 'cats',
    stock: 34,
    rating: 4.8,
    reviewCount: 1923,
    howToUse: ['Fill the 2L reservoir with fresh water', 'Insert the 3-stage filter cartridge', 'Plug in and let the ultra-quiet pump circulate fresh water 24/7'],
    materials: 'BPA-free ABS plastic, activated carbon + ion exchange + foam filter. Replacement filters sold separately.',
    comparisonFeatures: ['3-stage filtration', 'Ultra-quiet pump', '2L capacity', 'Easy-clean design', 'LED water level indicator'],
    image: '/placeholder.svg',
  },
  {
    id: '3',
    slug: 'arctic-cool-mat',
    name: 'PawBliss Arctic Cool Mat',
    tagline: 'Keep your dog cool without power or refrigeration',
    price: 34.99,
    description: 'Pressure-activated self-cooling gel mat. No electricity, no water needed. Folds flat for travel. Machine washable cover.',
    benefits: ['Self-activating cooling — no electricity needed', 'Folds flat for easy travel and storage', 'Non-toxic pressure-activated gel core', 'Waterproof, machine-washable cover'],
    variant: { type: 'size', options: ['S', 'M', 'L', 'XL'] },
    category: 'dogs',
    stock: 8,
    rating: 4.7,
    reviewCount: 1456,
    howToUse: ['Unfold the mat and place on any flat surface', 'Your pet\'s body weight activates the cooling gel', 'Mat recharges itself after 15–20 minutes of non-use'],
    materials: 'Non-toxic cooling gel, 300D Oxford fabric exterior, waterproof TPU liner. Machine washable cover.',
    comparisonFeatures: ['Self-cooling gel', 'No electricity needed', 'Folds flat', 'Machine washable', 'Non-toxic certified'],
    image: '/placeholder.svg',
  },
  {
    id: '4',
    slug: 'zen-grooming-hammock',
    name: 'PawBliss Zen Grooming Hammock',
    tagline: 'Nail trims in under 5 minutes — no drama, no biting',
    price: 29.99,
    description: 'Adjustable hammock sling that gently suspends your pet for stress-free nail trimming, grooming, and bathing. Works for dogs and cats 5–50 lbs.',
    benefits: ['Stress-free grooming for pets and owners', 'Adjustable straps fit 5–50 lb pets', 'Machine washable breathable mesh', 'Vet-recommended restraint technique'],
    variant: { type: 'color', options: ['Forest Green', 'Sand Beige'] },
    badge: 'Bestseller',
    category: 'both',
    stock: 19,
    rating: 4.9,
    reviewCount: 3102,
    howToUse: ['Hang the hammock from any standard doorframe or hook', 'Gently place your pet in the sling and adjust straps', 'Trim nails through the leg openings — pets stay calm and secure'],
    materials: 'Heavy-duty breathable mesh, reinforced nylon straps, stainless steel carabiners. Machine washable.',
    comparisonFeatures: ['Adjustable fit', 'Breathable mesh', 'Doorframe compatible', 'Machine washable', 'Vet endorsed'],
    image: '/placeholder.svg',
  },
  {
    id: '5',
    slug: 'shedaway-glove',
    name: 'PawBliss ShedAway Glove',
    tagline: 'Stop wearing your pet\'s fur. Start wearing your clothes again.',
    price: 18.99,
    description: 'Premium silicone deshedding glove with 255 soft rubber tips. Removes loose fur while giving your pet a relaxing massage. Works on dogs, cats, horses.',
    benefits: ['255 soft rubber tips for gentle deshedding', 'Works on wet or dry fur', 'One size fits all with adjustable wrist strap', 'Machine washable — fur peels right off'],
    variant: { type: 'color', options: ['Forest Green', 'Charcoal'] },
    badge: 'Staff Pick',
    category: 'both',
    stock: 45,
    rating: 4.8,
    reviewCount: 2234,
    howToUse: ['Slip on the glove and adjust the wrist strap', 'Pet your dog or cat with gentle, long strokes', 'Peel collected fur off the glove and dispose — it\'s that easy'],
    materials: 'Medical-grade silicone tips, breathable polyester mesh back, adjustable velcro wrist strap.',
    comparisonFeatures: ['255 rubber tips', 'Works wet or dry', 'Universal fit', 'Machine washable', 'Works on all pets'],
    image: '/placeholder.svg',
  },
  {
    id: '6',
    slug: 'iq-puzzle-feeder',
    name: 'PawBliss IQ Puzzle Feeder',
    tagline: 'A bored dog is a destructive dog. Problem solved.',
    price: 39.99,
    description: 'Level-2 interactive puzzle feeder with 4 different challenge zones. Slows eating, prevents bloat, reduces boredom and destructive behavior.',
    benefits: ['4 unique challenge zones for mental stimulation', 'Non-slip base stays put during play', 'Dishwasher safe for easy cleaning', 'Vet-endorsed enrichment activity'],
    variant: { type: 'color', options: ['Forest Green', 'Cream'] },
    category: 'dogs',
    stock: 22,
    rating: 4.8,
    reviewCount: 1678,
    howToUse: ['Hide treats in the 4 different challenge compartments', 'Let your dog explore, sniff, and solve each puzzle', 'Increase difficulty by using smaller treats or combining zones'],
    materials: 'Food-grade ABS plastic, non-slip TPR base, BPA-free. Dishwasher safe.',
    comparisonFeatures: ['4 challenge zones', 'Non-slip base', 'Dishwasher safe', 'BPA-free', 'Vet endorsed'],
    image: '/placeholder.svg',
  },
];

export interface Bundle {
  id: string;
  name: string;
  tagline: string;
  productIds: string[];
  price: number;
  originalPrice: number;
  savings: number;
}

export const bundles: Bundle[] = [
  {
    id: 'b1',
    name: 'The Calm Bundle',
    tagline: 'Lick Mat + Grooming Hammock',
    productIds: ['1', '4'],
    price: 44.99,
    originalPrice: 54.98,
    savings: 10,
  },
  {
    id: 'b2',
    name: 'The Clean Home Bundle',
    tagline: 'ShedAway Glove + Lick Mat',
    productIds: ['5', '1'],
    price: 34.99,
    originalPrice: 43.98,
    savings: 9,
  },
  {
    id: 'b3',
    name: 'The Complete PawBliss Kit',
    tagline: 'All 6 products — the ultimate pet parent starter pack',
    productIds: ['1', '2', '3', '4', '5', '6'],
    price: 149.99,
    originalPrice: 193.94,
    savings: 43,
  },
];

export const reviews = [
  {
    id: '1',
    name: 'Sarah M.',
    title: 'Dog Mom',
    avatar: '🐕',
    petName: 'Max',
    rating: 5,
    text: 'My husky used to destroy everything when I left. The lick mat changed everything. He\'s calm, focused, and I can actually leave the house without anxiety.',
    productId: '1',
  },
  {
    id: '2',
    name: 'James T.',
    title: 'Cat Dad',
    avatar: '🐱',
    petName: 'Luna',
    rating: 5,
    text: 'The grooming hammock saved my sanity. Luna actually sits still now. Nail trims went from 45 minutes of chaos to 5 minutes of peace.',
    productId: '4',
  },
  {
    id: '3',
    name: 'Priya K.',
    title: 'Cat Mom',
    avatar: '🐈',
    petName: 'Mochi & Chai',
    rating: 5,
    text: 'I\'ve tried 6 cat fountains. This one is the only one my cats actually use. The quiet pump is a game-changer — no more 3am motor noises.',
    productId: '2',
  },
  {
    id: '4',
    name: 'David L.',
    title: 'Dog Dad',
    avatar: '🦮',
    petName: 'Cooper',
    rating: 5,
    text: 'The puzzle feeder turned my destructive golden into a problem-solving genius. He spends 30 minutes working on it instead of eating my shoes.',
    productId: '6',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}
