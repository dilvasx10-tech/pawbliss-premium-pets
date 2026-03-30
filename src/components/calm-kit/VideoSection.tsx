import { useRef, useCallback } from 'react';

const videos = ['/calm-kit-demo.mp4', '/calm-kit-demo-2.mp4'];

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const currentIndex = useRef(0);

  const handleEnded = useCallback(() => {
    currentIndex.current = (currentIndex.current + 1) % videos.length;
    const video = videoRef.current;
    if (video) {
      video.src = videos[currentIndex.current];
      video.play();
    }
  }, []);

  return (
    <section className="py-14 md:py-20" style={{ backgroundColor: '#fff' }}>
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
          See It In Action 🎬
        </h2>
        <p className="text-sm mb-8" style={{ color: '#888' }}>
          Watch how the Calm Kit transforms bath time in seconds
        </p>
        <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-video" style={{ backgroundColor: '#1A1A1A' }}>
          <video
            ref={videoRef}
            controls
            preload="metadata"
            playsInline
            className="w-full h-full object-cover"
            src={videos[0]}
            onEnded={handleEnded}
          />
        </div>
        <div className="flex justify-center gap-6 mt-6 text-sm" style={{ color: '#555' }}>
          <span>🐕 Real dogs, real results</span>
          <span>⏱️ 45 second demo</span>
          <span>🔇 Works with sound off</span>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
