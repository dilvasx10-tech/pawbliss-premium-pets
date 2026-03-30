const items = [
  { emoji: '🔒', label: 'Secure Checkout', desc: 'SSL encrypted payment' },
  { emoji: '🚚', label: 'Free US Shipping', desc: 'No hidden fees' },
  { emoji: '↩️', label: '30-Day Returns', desc: 'No questions asked' },
  { emoji: '✅', label: 'Vet Approved', desc: 'Recommended by vets' },
];

const TrustBar = () => (
  <section className="py-6 border-y" style={{ backgroundColor: '#F5F0E8', borderColor: '#e8e4dc' }}>
    <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
      {items.map(t => (
        <div key={t.label} className="flex flex-col items-center gap-1">
          <span className="text-2xl">{t.emoji}</span>
          <span className="text-xs font-bold">{t.label}</span>
          <span className="text-[10px]" style={{ color: '#888' }}>{t.desc}</span>
        </div>
      ))}
    </div>
  </section>
);

export default TrustBar;
