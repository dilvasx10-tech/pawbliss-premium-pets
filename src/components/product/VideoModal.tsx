import { X } from 'lucide-react';

interface VideoModalProps {
  videoUrl: string;
  title: string;
  onClose: () => void;
}

const VideoModal = ({ videoUrl, title, onClose }: VideoModalProps) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={onClose}>
    <div className="relative max-w-3xl w-full mx-4" onClick={e => e.stopPropagation()}>
      <button onClick={onClose} className="absolute -top-12 right-0 text-white hover:text-white/70 transition-colors">
        <X className="w-8 h-8" />
      </button>
      <div className="aspect-video bg-black rounded-xl overflow-hidden">
        <video
          src={videoUrl}
          controls
          autoPlay
          className="w-full h-full"
          title={title}
        />
      </div>
    </div>
  </div>
);

export default VideoModal;
