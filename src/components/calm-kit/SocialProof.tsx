import { Star } from 'lucide-react';

const reviews = [
  {
    text: "I cried the first time I used this. My golden retriever has been terrified of baths for 4 years. I stuck the mat on the wall with peanut butter and she just stood there. Calm. I could not believe it.",
    initials: 'SM',
    color: '#2D4A3E',
    name: 'Sarah M.',
    pet: 'Dog mom to Bella 🐕',
  },
  {
    text: "The glove is witchcraft. I brushed my husky for 5 minutes and collected enough fur to knit a sweater. My couch has never been cleaner. Already ordered a second one.",
    initials: 'JT',
    color: '#C8714A',
    name: 'James T.',
    pet: 'Husky dad 🐕',
  },
  {
    text: "Bought this almost as a joke. Now I use the lick mat every single bath. My vet asked what changed because my dog is so much less anxious at checkups too.",
    initials: 'PK',
    color: '#64748b',
    name: 'Priya K.',
    pet: 'Dog mom to Mango 🐕',
  },
];

const SocialProof = () => (
  <section className="py-14 md:py-20" style={{ backgroundColor: '#F5F0E8' }}>
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10" style={{ fontFamily: 'Playfair Display, serif' }}>
        10,000+ Pet Parents Can't Be Wrong
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map(r => (
          <div key={r.name} className="rounded-2xl p-6 shadow-sm" style={{ backgroundColor: '#fff', border: '1px solid #e8e4dc' }}>
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#444' }}>"{r.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: r.color, color: '#fff' }}>
                {r.initials}
              </div>
              <div>
                <p className="text-xs font-semibold">{r.name}</p>
                <p className="text-[10px]" style={{ color: '#888' }}>{r.pet}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-xs mt-6" style={{ color: '#888' }}>
        Verified purchases · Results may vary
      </p>
    </div>
  </section>
);

export default SocialProof;
