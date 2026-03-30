import { CheckCircle2 } from 'lucide-react';

const product1Bullets = [
  'Calms anxiety in under 60 seconds',
  'Sticks to bath walls, floors, fridges',
  'BPA-free food-grade silicone',
  'Dishwasher and freezer safe',
];

const product2Bullets = [
  'Removes up to 90% of loose fur',
  'Turns grooming into bonding time',
  'Works on all coat types',
  'Machine washable',
];

const bonuses = [
  {
    icon: '📘',
    title: 'Calm Dog Blueprint',
    desc: '40-page PDF system for stopping dog anxiety forever — bath time, thunderstorms, separation and vet visits. Includes 7-day training schedule.',
    value: '$27.00 VALUE — FREE',
  },
  {
    icon: '🍯',
    title: 'Lick Mat Recipe Book',
    desc: '50 vet-approved recipes your dog will go crazy for — anxiety relief, dental health, weight management and puppy-safe options.',
    value: '$12.00 VALUE — FREE',
  },
];

const SolutionSection = () => (
  <section className="py-14 md:py-20" style={{ backgroundColor: '#fff' }}>
    <div className="max-w-5xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
          Meet The Calm Pet Starter Kit
        </h2>
        <p className="text-base" style={{ color: '#888' }}>
          Two powerful tools. Two free guides. One calm, happy dog.
        </p>
      </div>

      {/* Product 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
        <img
          src="https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?w=700"
          alt="PawBliss Calm Lick Mat in use"
          className="w-full rounded-2xl object-cover aspect-square shadow-sm"
          loading="lazy"
        />
        <div>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-3" style={{ backgroundColor: '#C8714A', color: '#fff' }}>
            PRODUCT 1 OF 2
          </span>
          <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
            4-Quadrant Calm Lick Mat
          </h3>
          <p className="text-sm leading-relaxed mb-4" style={{ color: '#555' }}>
            Spread peanut butter, yogurt or wet food across 4 different textured zones. Stick it to any surface with powerful suction cups. Your dog forgets everything stressful and focuses entirely on licking. Works in seconds. Vets call it distraction therapy.
          </p>
          <ul className="space-y-2">
            {product1Bullets.map(b => (
              <li key={b} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#2D4A3E' }} />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Product 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
        <div className="order-2 md:order-1">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-3" style={{ backgroundColor: '#C8714A', color: '#fff' }}>
            PRODUCT 2 OF 2
          </span>
          <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
            ShedAway Deshedding Glove
          </h3>
          <p className="text-sm leading-relaxed mb-4" style={{ color: '#555' }}>
            Slip it on and pet your dog like normal. 255 silicone tips grab loose fur while giving a relaxing massage your dog actually loves. Watch the fur pile up — your couch will thank you.
          </p>
          <ul className="space-y-2">
            {product2Bullets.map(b => (
              <li key={b} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#2D4A3E' }} />
                {b}
              </li>
            ))}
          </ul>
        </div>
        <img
          src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=700"
          alt="PawBliss ShedAway Deshedding Glove"
          className="w-full rounded-2xl object-cover aspect-square shadow-sm order-1 md:order-2"
          loading="lazy"
        />
      </div>

      {/* Free Bonuses */}
      <div className="rounded-2xl p-8 md:p-12" style={{ backgroundColor: '#2D4A3E' }}>
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif', color: '#FAFAF7' }}>
            🎁 Plus Two FREE Bonuses
          </h3>
          <p className="text-sm" style={{ color: '#FAFAF7AA' }}>
            Instant digital download after purchase
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bonuses.map(b => (
            <div key={b.title} className="rounded-xl p-6 border" style={{ backgroundColor: '#35574A', borderColor: '#4A6B5D' }}>
              <span className="text-3xl mb-3 block">{b.icon}</span>
              <h4 className="font-bold text-base mb-2" style={{ color: '#FAFAF7' }}>{b.title}</h4>
              <p className="text-sm leading-relaxed mb-3" style={{ color: '#FAFAF7BB' }}>{b.desc}</p>
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: '#2D4A3E', color: '#C8714A', border: '1px solid #C8714A' }}>
                {b.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SolutionSection;
