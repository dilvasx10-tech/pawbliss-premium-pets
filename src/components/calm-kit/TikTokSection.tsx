const TikTokSection = () => (
  <section className="py-10 md:py-14" style={{ backgroundColor: '#fff' }}>
    <div className="max-w-4xl mx-auto px-4 text-center">
      <div className="inline-flex items-center gap-3 rounded-2xl px-8 py-5 shadow-sm" style={{ backgroundColor: '#F5F0E8', border: '2px solid #e8e4dc' }}>
        <span className="text-4xl">🎵</span>
        <div className="text-left">
          <p className="text-lg font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>As Seen on TikTok</p>
          <p className="text-sm" style={{ color: '#888' }}>Over 2M+ views from pet parents loving their Calm Kit</p>
        </div>
      </div>
      <div className="flex justify-center gap-6 mt-6 flex-wrap">
        {['🐕 #CalmDog', '🛁 #BathTimeTikTok', '🐾 #PawBliss', '✨ #DogMomLife'].map(tag => (
          <span key={tag} className="text-sm font-medium px-4 py-2 rounded-full" style={{ backgroundColor: '#F5F0E8', color: '#2D4A3E' }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default TikTokSection;
