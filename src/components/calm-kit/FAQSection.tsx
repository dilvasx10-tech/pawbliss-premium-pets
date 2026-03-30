import { useState } from 'react';

const faqs = [
  {
    q: 'What food should I put on the lick mat?',
    a: 'Peanut butter (xylitol-free), plain yogurt, wet dog food, banana or pumpkin puree all work great. We include a free recipe book with 50 vet-approved recipes with your order.',
  },
  {
    q: 'Will the suction cups actually hold?',
    a: 'Yes — they grip glass, tile, acrylic bathtubs and most smooth surfaces. Wet the surface slightly for extra hold.',
  },
  {
    q: 'My dog is a heavy chewer — is this safe?',
    a: 'The lick mat is designed for licking not chewing. If your dog tries to chew it, add more food to redirect their attention. Not recommended for aggressive power chewers.',
  },
  {
    q: 'How long does it keep them distracted?',
    a: 'Most dogs take 10-20 minutes to lick it clean. Freeze it overnight to extend that to 30-45 minutes.',
  },
  {
    q: 'How fast do I get the digital bonuses?',
    a: 'Instantly — you get a download link the moment your order is confirmed. No waiting.',
  },
  {
    q: 'How fast is the physical shipping?',
    a: 'We ship within 24 hours. US delivery 7-14 days. Full tracking number by email.',
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-14 md:py-20" style={{ backgroundColor: '#F5F0E8' }}>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10" style={{ fontFamily: 'Playfair Display, serif' }}>
          Quick Answers
        </h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-xl overflow-hidden" style={{ backgroundColor: '#fff', border: '1px solid #e8e4dc' }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-semibold text-sm pr-4">{f.q}</span>
                <span className="text-lg font-bold shrink-0" style={{ color: '#2D4A3E' }}>
                  {open === i ? '−' : '+'}
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-5">
                  <p className="text-sm leading-relaxed" style={{ color: '#555' }}>{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
