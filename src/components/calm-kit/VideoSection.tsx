const videos = ['/calm-kit-demo.mp4', '/calm-kit-demo-2.mp4'];

const VideoSection = () => {
  return (
    <section className="py-14 md:py-20" style={{ backgroundColor: '#fff' }}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
          See It In Action 🎬
        </h2>
        <p className="text-sm mb-8" style={{ color: '#888' }}>
          Watch how the Calm Kit transforms bath time in seconds
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((src, i) => (
            <div key={i} className="space-y-3">
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-video" style={{ backgroundColor: '#1A1A1A' }}>
                <video
                  controls
                  preload="metadata"
                  playsInline
                  className="w-full h-full object-cover"
                  src={src}
                />
              </div>
              <p className="text-xs font-medium" style={{ color: '#555' }}>
                {i === 0 ? '🛁 Demo 1 — Bath time calm' : '🐕 Demo 2 — Lick Mat in action'}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-6 mt-6 text-sm" style={{ color: '#555' }}>
          <span>🐕 Real dogs, real results</span>
          <span>⏱️ Short demos</span>
          <span>🔇 Works with sound off</span>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
