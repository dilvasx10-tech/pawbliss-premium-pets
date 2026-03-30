import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageGalleryModalProps {
  images: string[];
  initialIndex?: number;
  alt: string;
  onClose: () => void;
}

const ImageGalleryModal = ({ images, initialIndex = 0, alt, onClose }: ImageGalleryModalProps) => {
  const [current, setCurrent] = useState(initialIndex);

  const prev = () => setCurrent(i => (i > 0 ? i - 1 : images.length - 1));
  const next = () => setCurrent(i => (i < images.length - 1 ? i + 1 : 0));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div className="relative max-w-3xl w-full mx-4" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute -top-12 right-0 text-white hover:text-white/70 transition-colors">
          <X className="w-8 h-8" />
        </button>

        <div className="relative aspect-square bg-black rounded-xl overflow-hidden">
          <img
            src={images[current]}
            alt={`${alt} - image ${current + 1}`}
            className="w-full h-full object-contain"
          />

          {images.length > 1 && (
            <>
              <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2 transition-colors">
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2 transition-colors">
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className="flex gap-2 mt-3 justify-center overflow-x-auto pb-2">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-16 h-16 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${current === i ? 'border-white' : 'border-transparent opacity-60 hover:opacity-100'}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        <p className="text-white/60 text-center text-sm mt-2">
          {current + 1} / {images.length}
        </p>
      </div>
    </div>
  );
};

export default ImageGalleryModal;
