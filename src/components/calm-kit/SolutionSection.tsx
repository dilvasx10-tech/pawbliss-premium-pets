import { useState } from 'react';
import { CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import CtaButton from './CtaButton';
import { useCJProducts, getCJProductBySlug } from '@/hooks/useCJProducts';
import { Skeleton } from '@/components/ui/skeleton';
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

const ImageCarousel = ({ images, alt }: { images: string[]; alt: string }) => {
  const [idx, setIdx] = useState(0);
  if (images.length <= 1) {
    return <img src={images[0]} alt={alt} className="w-full rounded-2xl object-cover aspect-square shadow-sm" loading="lazy" />;
  }
  return (
    <div className="relative">
      <img src={images[idx]} alt={alt} className="w-full rounded-2xl object-cover aspect-square shadow-sm" loading="lazy" />
      <button onClick={() => setIdx(i => (i > 0 ? i - 1 : images.length - 1))} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 transition-colors">
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button onClick={() => setIdx(i => (i < images.length - 1 ? i + 1 : 0))} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 transition-colors">
        <ChevronRight className="w-4 h-4" />
      </button>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)} className={`w-2 h-2 rounded-full transition-colors ${idx === i ? 'bg-white' : 'bg-white/40'}`} />
        ))}
      </div>
    </div>
  );
};

const SolutionSection = () => {
  const { cjProducts, isLoading } = useCJProducts();
  const lickMatCJ = getCJProductBySlug(cjProducts, 'calm-lick-mat');
  const gloveCJ = getCJProductBySlug(cjProducts, 'shedaway-glove');

  const lickMatImages = lickMatCJ?.productImageSet?.length
    ? lickMatCJ.productImageSet
    : [lickMatFallback];

  const gloveImages = gloveCJ?.productImageSet?.length
    ? gloveCJ.productImageSet
    : [glove1, glove2, glove3, glove4, glove5];

  return (
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
          {isLoading ? (
            <Skeleton className="w-full aspect-square rounded-2xl" />
          ) : (
            <ImageCarousel images={lickMatImages} alt="PawBliss Calm Lick Mat in use" />
          )}
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
          {isLoading ? (
            <Skeleton className="w-full aspect-square rounded-2xl order-1 md:order-2" />
          ) : (
            <div className="order-1 md:order-2">
              <ImageCarousel images={gloveImages} alt="PawBliss ShedAway Deshedding Glove" />
            </div>
          )}
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
              <div key={b.title} className="rounded-xl p-6 border flex gap-5" style={{ backgroundColor: '#35574A', borderColor: '#4A6B5D' }}>
                <div className="shrink-0 w-20 h-28 relative" style={{ perspective: '400px' }}>
                  <div
                    className="w-full h-full rounded-md shadow-lg flex flex-col items-center justify-center text-center p-2"
                    style={{
                      backgroundColor: b.icon === '📘' ? '#C8714A' : '#2D4A3E',
                      border: '2px solid rgba(250,250,247,0.2)',
                      transform: 'rotateY(-10deg)',
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <span className="text-2xl mb-1">{b.icon}</span>
                    <span className="text-[8px] font-bold leading-tight" style={{ color: '#FAFAF7' }}>{b.title}</span>
                    <span className="text-[6px] mt-0.5" style={{ color: '#FAFAF7AA' }}>PawBliss</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-base mb-2" style={{ color: '#FAFAF7' }}>{b.title}</h4>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: '#FAFAF7BB' }}>{b.desc}</p>
                  <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: '#2D4A3E', color: '#C8714A', border: '1px solid #C8714A' }}>
                    {b.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <CtaButton className="max-w-md mx-auto mt-10" />
      </div>
    </section>
  );
};

export default SolutionSection;
