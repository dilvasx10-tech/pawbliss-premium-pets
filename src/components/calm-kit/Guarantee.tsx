import { Shield } from 'lucide-react';

const Guarantee = () => (
  <section className="py-14 md:py-20 text-center" style={{ backgroundColor: '#fff' }}>
    <div className="max-w-xl mx-auto px-4">
      <Shield className="w-20 h-20 mx-auto mb-6" style={{ color: '#2D4A3E' }} />
      <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
        The PawBliss 30-Day Calm Guarantee
      </h2>
      <p className="text-sm leading-relaxed mb-4" style={{ color: '#444' }}>
        If your dog doesn't calm down during bath time within 30 days of using this kit — we will refund every single penny. No forms. No hassle. No questions asked. We are that confident it works.
      </p>
      <p className="text-xs" style={{ color: '#888' }}>
        Just email us and we handle the rest. Your investment is completely protected.
      </p>
    </div>
  </section>
);

export default Guarantee;
