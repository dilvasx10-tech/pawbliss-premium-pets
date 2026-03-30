import CtaButton from './CtaButton';

const steps = [
  { num: '01', title: 'Spread', desc: 'Apply peanut butter, yogurt or wet food across the lick mat zones — takes 30 seconds' },
  { num: '02', title: 'Stick', desc: 'Press the suction cups onto any smooth surface — bath wall, floor or fridge door' },
  { num: '03', title: 'Relax', desc: 'Watch your dog go completely calm while you bathe, groom or just enjoy the peace' },
];

const HowItWorks = () => (
  <section className="py-14 md:py-20" style={{ backgroundColor: '#F5F0E8' }}>
    <div className="max-w-5xl mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10" style={{ fontFamily: 'Playfair Display, serif' }}>
        It's Embarrassingly Simple
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {steps.map((s, i) => (
          <div key={s.num} className="flex flex-col items-center relative">
            <div className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold mb-4" style={{ backgroundColor: '#2D4A3E', color: '#FAFAF7' }}>
              {s.num}
            </div>
            <h3 className="font-bold text-lg mb-2">{s.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: '#555' }}>{s.desc}</p>
            {i < 2 && (
              <span className="hidden md:block absolute top-7 -right-4 text-xl" style={{ color: '#2D4A3E' }}>→</span>
            )}
          </div>
        ))}
      </div>
      <CtaButton className="max-w-md mx-auto" />
    </div>
  </section>
);

export default HowItWorks;
