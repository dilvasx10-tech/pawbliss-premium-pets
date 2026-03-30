import CtaButton from './CtaButton';

const problems = [
  {
    emoji: '😰',
    title: 'Bath time is a nightmare',
    desc: 'Your dog shakes, squirms and makes it impossible to wash them properly. You end up soaked. Every. Single. Time.',
  },
  {
    emoji: '🌩️',
    title: 'Thunderstorms destroy the peace',
    desc: "Anxious pacing, whining, hiding under the bed. You feel completely helpless watching them suffer through it.",
  },
  {
    emoji: '🪮',
    title: 'Fur is absolutely everywhere',
    desc: "On your couch, your clothes, your food. You lint roll yourself before leaving the house every single day.",
  },
];

const ProblemSection = () => (
  <section className="max-w-5xl mx-auto px-4 py-14 md:py-20 text-center" style={{ backgroundColor: '#FAFAF7' }}>
    <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
      Sound Familiar?
    </h2>
    <p className="text-sm mb-10" style={{ color: '#888' }}>
      You're not alone — 67 million dog owners deal with these exact problems every day
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {problems.map(p => (
        <div key={p.title} className="rounded-2xl p-6 text-left shadow-sm" style={{ backgroundColor: '#fff', border: '1px solid #e8e4dc' }}>
          <span className="text-3xl mb-3 block">{p.emoji}</span>
          <h3 className="font-bold text-base mb-2">{p.title}</h3>
          <p className="text-sm leading-relaxed" style={{ color: '#555' }}>{p.desc}</p>
        </div>
      ))}
    </div>
    <p className="mt-8 text-base italic" style={{ color: '#C8714A' }}>
      There's a better way — and it costs less than a single grooming appointment.
    </p>
    <CtaButton label="GET THE CALM KIT — $44.99 🐾" className="max-w-md mx-auto mt-8" />
  </section>
);

export default ProblemSection;
