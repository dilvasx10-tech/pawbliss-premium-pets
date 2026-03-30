import { useState } from 'react';
import { Star, Package, Gift, Truck, ChevronLeft, ChevronRight } from 'lucide-react';
import CtaButton from './CtaButton';
import CountdownTimer from './CountdownTimer';
import { useCJProducts, getCJProductBySlug } from '@/hooks/useCJProducts';
import { Skeleton } from '@/components/ui/skeleton';
import heroFallback from '@/assets/hero-fallback.jpg';
import lickMatFallback from '@/assets/lick-mat-fallback.jpg';
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
  const { cjProducts, isLoading } = useCJProducts();
  const lickMatCJ = getCJProductBySlug(cjProducts, 'calm-lick-mat');
  const gloveCJ = getCJProductBySlug(cjProducts, 'shedaway-glove');
  const [heroIdx, setHeroIdx] = useState(0);

  // Build hero images from CJ data or fallback
  const heroImages = lickMatCJ?.productImageSet?.length
    ? lickMatCJ.productImageSet
    : [heroFallback];

  const lickMatThumb = lickMatCJ?.productImageSet?.[0] || lickMatFallback;
  const gloveThumb = gloveCJ?.productImageSet?.[0] || glove1;

  const prevHero = () => setHeroIdx(i => (i > 0 ? i - 1 : heroImages.length - 1));
  const nextHero = () => setHeroIdx(i => (i < heroImages.length - 1 ? i + 1 : 0));

  return (
    <section id="hero-section" className="max-w-6xl mx-auto px-4 py-8 md:py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
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

          <div className="flex items-center gap-2 mb-5">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-medium">4.9/5</span>
            <span className="text-sm" style={{ color: '#888' }}>— 2,847 verified reviews</span>
          </div>

          <div className="rounded-xl overflow-hidden mb-6 border-2" style={{ borderColor: '#2D4A3E' }}>
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

        {/* Image with carousel */}
        <div className="order-1 md:order-2 relative">
          {isLoading ? (
            <Skeleton className="w-full rounded-2xl aspect-[4/5] md:aspect-[3/4]" />
          ) : (
            <>
              <img
                src={heroImages[heroIdx]}
                alt="Happy calm dog ready for bath time"
                className="w-full rounded-2xl object-cover aspect-[4/5] md:aspect-[3/4] shadow-lg"
                loading="eager"
              />
              {heroImages.length > 1 && (
                <>
                  <button onClick={prevHero} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 transition-colors">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button onClick={nextHero} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {heroImages.map((_, i) => (
                      <button key={i} onClick={() => setHeroIdx(i)} className={`w-2 h-2 rounded-full transition-colors ${heroIdx === i ? 'bg-white' : 'bg-white/40'}`} />
                    ))}
                  </div>
                </>
              )}
            </>
          )}
          {/* Product thumbnails */}
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
      </div>
    </section>
  );
};

export default HeroSection;
