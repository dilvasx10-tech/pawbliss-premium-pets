import { useState } from 'react';
import { Star, Package, Gift, Truck, ChevronLeft, ChevronRight, Shield } from 'lucide-react';
import CtaButton from './CtaButton';
import CountdownTimer from './CountdownTimer';
import lickmat1 from '@/assets/lickmat-1.jpg';
import lickmat2 from '@/assets/lickmat-2.jpg';
import lickmat3 from '@/assets/lickmat-3.jpg';
import lickmat4 from '@/assets/lickmat-4.jpg';
import lickmat5 from '@/assets/lickmat-5.jpg';
import lickmat6 from '@/assets/lickmat-6.jpg';
import lickmat7 from '@/assets/lickmat-7.jpg';
import glove1 from '@/assets/glove-1.jpg';
import glove2 from '@/assets/glove-2.jpg';
import glove3 from '@/assets/glove-3.jpg';
import glove4 from '@/assets/glove-4.jpg';
import glove5 from '@/assets/glove-5.jpg';

const valueItems = [
  { icon: <Package className="w-4 h-4" style={{ color: '#2D4A3E' }} />, label: 'PawBliss 4-Quadrant Calm Lick Mat', price: '$24.99' },
  { icon: <Package className="w-4 h-4" style={{ color: '#2D4A3E' }} />, label: 'PawBliss ShedAway Deshedding Glove', price: '$18.99' },
  { icon: <Gift className="w-4 h-4" style={{ color: '#C8714A' }} />, label: 'FREE: Calm Dog Blueprint PDF', price: '$27.00 value' },
  { icon: <Gift className="w-4 h-4" style={{ color: '#C8714A' }} />, label: 'FREE: Lick Mat Recipe Book PDF', price: '$12.00 value' },
  { icon: <Truck className="w-4 h-4" style={{ color: '#2D4A3E' }} />, label: 'Free US Shipping', price: '$6.99 value' },
];

const HeroSection = () => {
  const lickMatImages = [lickmat1, lickmat2, lickmat3, lickmat4, lickmat5, lickmat6, lickmat7];
  const gloveImages = [glove1, glove2, glove3, glove4, glove5];
  const [heroIdx, setHeroIdx] = useState(0);

  const safeHeroIdx = ((heroIdx % lickMatImages.length) + lickMatImages.length) % lickMatImages.length;
  const heroImage = lickMatImages[safeHeroIdx];
  const lickMatThumb = lickMatImages[0];
  const gloveThumb = gloveImages[0];

  const prevHero = () => setHeroIdx(i => (i > 0 ? i - 1 : lickMatImages.length - 1));
  const nextHero = () => setHeroIdx(i => (i < lickMatImages.length - 1 ? i + 1 : 0));

  return (
    <section id="hero-section" className="max-w-6xl mx-auto px-4 py-4 md:py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start">
        {/* Image — show first on mobile for above-fold impact */}
        <div className="relative">
          <img
            src={heroImage}
            alt="Dog using fish-shaped lick mat"
            className="w-full rounded-2xl object-cover aspect-[4/5] md:aspect-[3/4] shadow-lg"
            loading="eager"
          />
          {lickMatImages.length > 1 && (
            <>
              <button onClick={prevHero} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={nextHero} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="absolute bottom-20 md:bottom-20 left-1/2 -translate-x-1/2 flex gap-1.5">
                {lickMatImages.map((_, i) => (
                  <button key={i} onClick={() => setHeroIdx(i)} className={`w-2 h-2 rounded-full transition-colors ${safeHeroIdx === i ? 'bg-white' : 'bg-white/40'}`} />
                ))}
              </div>
            </>
          )}
          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
            <div className="flex-1 rounded-xl overflow-hidden shadow-lg border-2 border-white">
              <img src={lickMatThumb} alt="Calm Lick Mat" className="w-full aspect-square object-cover" loading="eager" />
            </div>
            <div className="flex-1 rounded-xl overflow-hidden shadow-lg border-2 border-white">
              <img src={gloveThumb} alt="ShedAway Deshedding Glove" className="w-full aspect-square object-cover" loading="eager" />
            </div>
          </div>
          <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: '#C8714A', color: '#fff' }}>
            ⭐ #1 Rated Calm Kit
          </div>
        </div>

        {/* Copy — compact on mobile */}
        <div>
          <span className="inline-block text-xs md:text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: '#C8714A' }}>
            THE CALM PET STARTER KIT
          </span>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-2 md:mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Stop Bath Time Drama. Forever.
          </h1>
          <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-5" style={{ color: '#444' }}>
            The 2-product system 10,000+ dog parents use to keep their pets calm during baths, grooming, thunderstorms and vet visits — plus $45 in free digital bonuses
          </p>

          {/* Star rating + review count + trust signals */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-3">
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-medium">4.9/5</span>
              <span className="text-xs" style={{ color: '#888' }}>— 2,847 reviews</span>
            </div>
            <div className="flex items-center gap-1 text-xs" style={{ color: '#2D4A3E' }}>
              <Truck className="w-3.5 h-3.5" />
              <span className="font-medium">Free Shipping</span>
            </div>
            <div className="flex items-center gap-1 text-xs" style={{ color: '#2D4A3E' }}>
              <Shield className="w-3.5 h-3.5" />
              <span className="font-medium">30-Day Guarantee</span>
            </div>
          </div>

          {/* Price block — visible on mobile */}
          <div className="flex items-baseline gap-3 mb-3">
            <span className="text-2xl md:text-3xl font-bold" style={{ color: '#2D4A3E' }}>$44.99</span>
            <span className="text-sm line-through" style={{ color: '#999' }}>$89.97</span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ backgroundColor: '#C8714A', color: '#fff' }}>SAVE 50%</span>
          </div>

          {/* CTA — immediately visible on mobile */}
          <CtaButton className="mb-4" />

          {/* What you get box — below fold on mobile, that's ok */}
          <div className="rounded-xl overflow-hidden border hidden md:block" style={{ borderColor: '#2D4A3E' }}>
            <div className="px-5 py-3" style={{ backgroundColor: '#2D4A3E' }}>
              <p className="font-semibold text-xs tracking-widest uppercase" style={{ color: '#FAFAF7' }}>
                📦 WHAT YOU GET TODAY
              </p>
            </div>
            <div className="p-5 space-y-3" style={{ backgroundColor: '#F5F0E8' }}>
              {valueItems.map(item => (
                <div key={item.label} className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: '#fff', border: '1px solid #e8e4dc' }}>
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                  <span className="shrink-0 text-xs font-medium" style={{ color: '#888' }}>({item.price})</span>
                </div>
              ))}
            </div>
            <div className="px-5 py-4 border-t" style={{ backgroundColor: '#F5F0E8', borderColor: '#2D4A3E33' }}>
              <CountdownTimer />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
