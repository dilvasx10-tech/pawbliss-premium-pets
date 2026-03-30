import { useCart } from '@/context/CartContext';
import { getProductById } from '@/data/products';
import { getProductImage } from '@/data/productImages';
import { Star, Shield, Truck, RotateCcw, CheckCircle2 } from 'lucide-react';

const CalmKitLanding = () => {
  const { addItem } = useCart();

  const lickMat = getProductById('1')!;
  const glove = getProductById('5')!;

  const handleBuy = () => {
    addItem(lickMat);
    addItem(glove);
  };

  const CtaButton = ({ className = '' }: { className?: string }) => (
    <div className={className}>
      <button
        onClick={handleBuy}
        className="w-full py-4 px-8 rounded-xl text-lg font-bold transition-transform hover:scale-[1.02] active:scale-[0.98]"
        style={{ backgroundColor: '#C8714A', color: '#FAFAF7', minHeight: 56 }}
      >
        YES — SEND ME THE CALM KIT 🐾
      </button>
      <p className="text-center text-xs mt-2" style={{ color: '#666' }}>
        🔒 Secure checkout · 30-day money back guarantee
      </p>
    </div>
  );

  return (
    <div style={{ backgroundColor: '#FAFAF7', color: '#1A1A1A', fontFamily: 'Inter, sans-serif' }} className="min-h-screen">
      {/* STICKY TOP BAR */}
      <div
        className="sticky top-0 z-50 text-center py-2.5 px-4"
        style={{ backgroundColor: '#2D4A3E', color: '#FAFAF7', fontSize: 13 }}
      >
        <span className="tracking-wide">
          🐾 LIMITED OFFER: Free Shipping Today Only | Only <strong>47</strong> Kits Remaining
        </span>
      </div>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* LEFT */}
          <div className="order-2 md:order-1">
            <span
              className="inline-block text-sm font-semibold tracking-widest uppercase mb-3"
              style={{ color: '#C8714A' }}
            >
              THE CALM PET STARTER KIT
            </span>
            <h1
              className="text-4xl md:text-5xl font-bold leading-tight mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Stop Bath Time Drama. Forever.
            </h1>
            <p className="text-base md:text-lg leading-relaxed mb-5" style={{ color: '#444' }}>
              The 2-product system 10,000+ dog parents use to keep their pets calm during baths,
              grooming, thunderstorms and vet visits
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-medium">4.9/5</span>
              <span className="text-sm" style={{ color: '#888' }}>(2,847 reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-4">
              <span className="line-through text-lg" style={{ color: '#999' }}>$43.98</span>
              <span className="text-3xl font-bold" style={{ color: '#2D4A3E' }}>$44.99</span>
            </div>
            <span
              className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full mb-6"
              style={{ backgroundColor: '#2D4A3E', color: '#FAFAF7' }}
            >
              🚚 FREE SHIPPING INCLUDED
            </span>

            {/* What's Included */}
            <div
              className="rounded-xl p-5 mb-6 border"
              style={{ backgroundColor: '#F5F0E8', borderColor: '#2D4A3E33' }}
            >
              <p className="font-semibold text-sm mb-3" style={{ color: '#2D4A3E' }}>
                What's included:
              </p>
              <div className="space-y-2.5 text-sm">
                {[
                  ['PawBliss 4-Quadrant Calm Lick Mat', '$24.99 value'],
                  ['PawBliss ShedAway Deshedding Glove', '$18.99 value'],
                  ['Free Peanut Butter Recipe Card', ''],
                  ['Free US Shipping', '$6.99 value'],
                ].map(([item, val]) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#2D4A3E' }} />
                    <span>
                      {item} {val && <span style={{ color: '#888' }}>({val})</span>}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <CtaButton />
          </div>

          {/* RIGHT — Image */}
          <div className="order-1 md:order-2 relative">
            <img
              src="https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?w=800&q=80"
              alt="Happy calm dog licking a mat"
              className="w-full rounded-2xl object-cover aspect-[4/5] md:aspect-[3/4]"
              loading="eager"
            />
            <div
              className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold"
              style={{ backgroundColor: '#2D4A3E', color: '#FAFAF7' }}
            >
              As seen on TikTok 🎵
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section style={{ backgroundColor: '#F5F0E8' }} className="py-6">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { icon: <Shield className="w-5 h-5" />, label: 'Secure Checkout' },
            { icon: <Truck className="w-5 h-5" />, label: 'Free US Shipping' },
            { icon: <RotateCcw className="w-5 h-5" />, label: '30-Day Returns' },
            { icon: <CheckCircle2 className="w-5 h-5" />, label: 'Vet Approved' },
          ].map(t => (
            <div key={t.label} className="flex flex-col items-center gap-1.5">
              <span style={{ color: '#2D4A3E' }}>{t.icon}</span>
              <span className="text-xs font-medium">{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="max-w-5xl mx-auto px-4 py-14 md:py-20 text-center">
        <h2
          className="text-3xl md:text-4xl font-bold mb-10"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Sound Familiar?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              emoji: '😰',
              title: 'Bath time is a battle',
              desc: 'Your dog shakes, squirms, and makes it impossible to wash them properly. Every single time.',
            },
            {
              emoji: '🌩️',
              title: 'Thunderstorms are a nightmare',
              desc: "Anxious pacing, whining, hiding under the bed. You feel helpless watching them suffer through it.",
            },
            {
              emoji: '🪮',
              title: 'Fur is absolutely everywhere',
              desc: "On your couch, your clothes, your food. You lint roll yourself before leaving the house every day.",
            },
          ].map(p => (
            <div
              key={p.title}
              className="rounded-xl p-6 text-left"
              style={{ backgroundColor: '#fff', border: '1px solid #e8e4dc' }}
            >
              <span className="text-3xl mb-3 block">{p.emoji}</span>
              <h3 className="font-bold text-base mb-2">{p.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#555' }}>{p.desc}</p>
            </div>
          ))}
        </div>
        <p
          className="mt-8 text-base italic"
          style={{ color: '#C8714A' }}
        >
          There's a better way — and it costs less than a single grooming appointment.
        </p>
      </section>

      {/* SOLUTION */}
      <section style={{ backgroundColor: '#2D4A3E' }} className="py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ fontFamily: 'Playfair Display, serif', color: '#FAFAF7' }}
            >
              Meet The Calm Pet Starter Kit
            </h2>
            <p className="text-base" style={{ color: '#FAFAF7CC' }}>
              Two simple tools. One calm dog.
            </p>
          </div>

          {/* Product 1 — Lick Mat */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <img
              src={getProductImage('calm-lick-mat')}
              alt="PawBliss Calm Lick Mat"
              className="w-full rounded-xl object-cover aspect-square"
              loading="lazy"
            />
            <div>
              <span
                className="text-xs font-semibold tracking-widest uppercase mb-2 block"
                style={{ color: '#C8714A' }}
              >
                PRODUCT 1
              </span>
              <h3
                className="text-2xl font-bold mb-3"
                style={{ fontFamily: 'Playfair Display, serif', color: '#FAFAF7' }}
              >
                {lickMat.name}
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#FAFAF7BB' }}>
                {lickMat.description}
              </p>
              <ul className="space-y-2">
                {lickMat.benefits.map(b => (
                  <li key={b} className="flex items-start gap-2 text-sm" style={{ color: '#FAFAF7DD' }}>
                    <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#C8714A' }} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Product 2 — Glove */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <span
                className="text-xs font-semibold tracking-widest uppercase mb-2 block"
                style={{ color: '#C8714A' }}
              >
                PRODUCT 2
              </span>
              <h3
                className="text-2xl font-bold mb-3"
                style={{ fontFamily: 'Playfair Display, serif', color: '#FAFAF7' }}
              >
                {glove.name}
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#FAFAF7BB' }}>
                {glove.description}
              </p>
              <ul className="space-y-2">
                {glove.benefits.map(b => (
                  <li key={b} className="flex items-start gap-2 text-sm" style={{ color: '#FAFAF7DD' }}>
                    <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#C8714A' }} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <img
              src={getProductImage('shedaway-glove')}
              alt="PawBliss ShedAway Glove"
              className="w-full rounded-xl object-cover aspect-square order-1 md:order-2"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="max-w-5xl mx-auto px-4 py-14 md:py-20">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-10"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          What Pet Parents Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: 'Sarah M.',
              pet: 'Max',
              text: "My husky used to destroy everything when I left. The lick mat changed everything. He's calm, focused, and I can actually leave the house without anxiety.",
            },
            {
              name: 'Mike R.',
              pet: 'Bella',
              text: "Bath time used to be a 2-person job. Now Bella just licks peanut butter on the mat and I can actually wash her. Game. Changer.",
            },
            {
              name: 'Jessica P.',
              pet: 'Cooper',
              text: "The deshedding glove picks up SO much fur. I use it every evening while we watch TV. Cooper thinks it's just petting. Win-win.",
            },
          ].map(r => (
            <div
              key={r.name}
              className="rounded-xl p-6"
              style={{ backgroundColor: '#fff', border: '1px solid #e8e4dc' }}
            >
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#444' }}>
                "{r.text}"
              </p>
              <p className="text-xs font-semibold">
                {r.name} <span style={{ color: '#888' }}>· {r.pet}'s parent</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: '#F5F0E8' }} className="py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-10"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'Does the lick mat actually work for anxiety?',
                a: 'Yes — licking releases calming endorphins. Vets recommend lick mats for bath time, thunderstorms, and separation anxiety. 92% of our customers report a calmer pet within the first use.',
              },
              {
                q: 'What size dog is this for?',
                a: 'The lick mat works for any size dog or cat. The deshedding glove is one-size-fits-all for the human and works on all coat types.',
              },
              {
                q: 'Is the lick mat dishwasher safe?',
                a: 'Yes! It\'s made from food-grade, BPA-free silicone. Top rack dishwasher safe.',
              },
              {
                q: 'What if my pet doesn\'t like it?',
                a: 'We offer a full 30-day money-back guarantee. If your pet doesn\'t love it, we\'ll refund every penny — no questions asked.',
              },
              {
                q: 'How long does shipping take?',
                a: 'Orders ship within 1–2 business days. Standard delivery is 3–5 business days within the US. Free shipping on all Calm Kit orders.',
              },
            ].map((f, i) => (
              <details
                key={i}
                className="rounded-xl p-5 group"
                style={{ backgroundColor: '#fff', border: '1px solid #e8e4dc' }}
              >
                <summary className="font-semibold text-sm cursor-pointer list-none flex items-center justify-between">
                  {f.q}
                  <span className="text-lg transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-sm mt-3 leading-relaxed" style={{ color: '#555' }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-2xl mx-auto px-4 py-14 md:py-20 text-center">
        <h2
          className="text-3xl md:text-4xl font-bold mb-3"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Ready for a Calmer Pet?
        </h2>
        <p className="text-base mb-6" style={{ color: '#555' }}>
          Join 10,000+ happy pet parents. Free shipping today only.
        </p>
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="line-through" style={{ color: '#999' }}>$43.98</span>
          <span className="text-3xl font-bold" style={{ color: '#2D4A3E' }}>$44.99</span>
        </div>
        <CtaButton />
        <div className="flex justify-center gap-6 mt-8">
          {[
            { icon: <Shield className="w-4 h-4" />, label: 'Secure Checkout' },
            { icon: <Truck className="w-4 h-4" />, label: 'Free Shipping' },
            { icon: <RotateCcw className="w-4 h-4" />, label: '30-Day Guarantee' },
          ].map(t => (
            <div key={t.label} className="flex items-center gap-1.5 text-xs" style={{ color: '#888' }}>
              {t.icon}
              {t.label}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <div className="text-center py-6 text-xs" style={{ color: '#aaa' }}>
        © {new Date().getFullYear()} PawBliss · All rights reserved
      </div>
    </div>
  );
};

export default CalmKitLanding;
