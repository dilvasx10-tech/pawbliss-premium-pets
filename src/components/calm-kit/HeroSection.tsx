import { Star, CheckCircle2 } from 'lucide-react';
import CtaButton from './CtaButton';

const valueItems = [
  { icon: '✅', label: 'PawBliss 4-Quadrant Calm Lick Mat', price: '$24.99' },
  { icon: '✅', label: 'PawBliss ShedAway Deshedding Glove', price: '$18.99' },
  { icon: '🎁', label: 'FREE: Calm Dog Blueprint PDF', price: '$27.00 value' },
  { icon: '🎁', label: 'FREE: Lick Mat Recipe Book PDF', price: '$12.00 value' },
  { icon: '✅', label: 'Free US Shipping', price: '$6.99 value' },
];

const HeroSection = () => (
  <section id="hero-section" className="max-w-6xl mx-auto px-4 py-10 md:py-16">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
      {/* Text */}
      <div className="order-2 md:order-1">
        <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#C8714A' }}>
          THE CALM PET STARTER KIT
        </span>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          Stop Bath Time Drama. Forever.
        </h1>
        <p className="text-base md:text-lg leading-relaxed mb-5" style={{ color: '#444' }}>
          The 2-product system 10,000+ dog parents use to keep their pets calm during baths, grooming, thunderstorms and vet visits — plus $45 in free digital bonuses when you order today
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-5">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-sm font-medium">4.9/5</span>
          <span className="text-sm" style={{ color: '#888' }}>— 2,847 verified reviews</span>
        </div>

        {/* Value Stack */}
        <div className="rounded-xl p-5 mb-6 border-2" style={{ backgroundColor: '#F5F0E8', borderColor: '#2D4A3E' }}>
          <p className="font-semibold text-xs tracking-widest uppercase mb-3" style={{ color: '#2D4A3E' }}>
            WHAT YOU GET TODAY
          </p>
          <div className="space-y-2.5 text-sm">
            {valueItems.map(item => (
              <div key={item.label} className="flex items-start justify-between gap-2">
                <div className="flex items-start gap-2">
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
                <span className="shrink-0 text-xs" style={{ color: '#888' }}>({item.price})</span>
              </div>
            ))}
          </div>
          <div className="border-t mt-4 pt-4" style={{ borderColor: '#2D4A3E33' }}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm" style={{ color: '#888' }}>Total Value:</span>
              <span className="text-sm line-through" style={{ color: '#999' }}>$89.97</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold" style={{ color: '#2D4A3E' }}>TODAY ONLY:</span>
              <span className="text-2xl font-bold" style={{ color: '#2D4A3E' }}>$44.99</span>
            </div>
          </div>
        </div>

        <CtaButton />
      </div>

      {/* Image */}
      <div className="order-1 md:order-2 relative">
        <img
          src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800"
          alt="Happy calm dog ready for bath time"
          className="w-full rounded-2xl object-cover aspect-[4/5] md:aspect-[3/4] shadow-lg"
          loading="eager"
        />
        <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: '#2D4A3E', color: '#FAFAF7' }}>
          🎵 As Seen on TikTok
        </div>
        <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: '#C8714A', color: '#fff' }}>
          ⭐ #1 Rated Calm Kit
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
