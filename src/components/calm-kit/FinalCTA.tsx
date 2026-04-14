import CtaButton from './CtaButton';

const items = [
  { icon: '✅', label: '4-Quadrant Calm Lick Mat', price: '$24.99' },
  { icon: '✅', label: 'ShedAway Deshedding Glove', price: '$18.99' },
  { icon: '🎁', label: 'FREE Calm Dog Blueprint', price: '$27.00' },
  { icon: '🎁', label: 'FREE Lick Mat Recipe Book', price: '$12.00' },
  { icon: '✅', label: 'FREE US Shipping', price: '$6.99' },
];

const FinalCTA = () => (
  <section className="py-14 md:py-20 text-center" style={{ backgroundColor: '#2D4A3E' }}>
    <div className="max-w-2xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif', color: '#FAFAF7' }}>
        Your Dog Deserves Better Bath Days
      </h2>
      <p className="text-base mb-8" style={{ color: '#FAFAF7AA' }}>
        Join 10,000+ pet parents who eliminated bath time stress and took back their fur-covered couches
      </p>

      <div className="space-y-2 mb-6 text-left max-w-sm mx-auto">
        {items.map(item => (
          <div key={item.label} className="flex items-center justify-between text-sm" style={{ color: '#FAFAF7DD' }}>
            <span>{item.icon} {item.label}</span>
            <span>{item.price}</span>
          </div>
        ))}
        <div className="border-t pt-3 mt-3" style={{ borderColor: '#FAFAF733' }}>
          <div className="flex justify-between text-sm" style={{ color: '#FAFAF7AA' }}>
            <span>Total Value:</span>
            <span className="line-through">$89.97</span>
          </div>
          <div className="flex justify-between text-xl font-bold mt-1" style={{ color: '#FAFAF7' }}>
            <span>TODAY:</span>
            <span>$44.99</span>
          </div>
        </div>
      </div>

      <CtaButton height={64} />
      <p className="text-xs mt-3" style={{ color: '#FAFAF7AA' }}>
        🔒 256-bit secure checkout · 30-day money back guarantee · Ships within 24 hours
      </p>
    </div>

    {/* Minimal footer */}
    <div className="mt-12 text-[10px]" style={{ color: '#FAFAF755' }}>
      © {new Date().getFullYear()} PawBliss | Privacy Policy | Terms | Contact
    </div>
  </section>
);

export default FinalCTA;
