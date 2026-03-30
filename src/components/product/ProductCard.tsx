import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/data/products';
import { getProductImage } from '@/data/productImages';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, Play, Images } from 'lucide-react';
import { CJProduct } from '@/hooks/useCJProducts';
import { Skeleton } from '@/components/ui/skeleton';
import ImageGalleryModal from './ImageGalleryModal';
import VideoModal from './VideoModal';

interface ProductCardProps {
  product: Product;
  cjData?: CJProduct;
  isLoading?: boolean;
}

const ProductCard = ({ product, cjData, isLoading }: ProductCardProps) => {
  const { addItem } = useCart();
  const [showGallery, setShowGallery] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const mainImage = cjData?.productImageSet?.[0] || getProductImage(product.slug);
  const hasGallery = cjData && cjData.productImageSet.length > 1;
  const hasVideo = cjData?.videoUrl != null;
  const isDev = import.meta.env.DEV;

  if (isLoading) {
    return (
      <div className="bg-card rounded-2xl overflow-hidden border border-border">
        <Skeleton className="aspect-square w-full" />
        <div className="p-3 sm:p-5 space-y-2">
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <div className="flex justify-between pt-2">
            <Skeleton className="h-6 w-16" />
            <Skeleton className="h-9 w-20 rounded-lg" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
        <div className="relative">
          <Link to={`/product/${product.slug}`} className="block">
            <div className="relative aspect-square bg-secondary flex items-center justify-center overflow-hidden">
              <img src={mainImage} alt={product.name} loading="lazy" width={800} height={800} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              {product.badge && (
                <span className={`absolute top-2 left-2 sm:top-3 sm:left-3 text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider px-2 sm:px-3 py-1 rounded-full ${
                  product.badge === 'Bestseller' ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground'
                }`}>
                  {product.badge}
                </span>
              )}
            </div>
          </Link>

          {/* Gallery button */}
          {hasGallery && (
            <button
              onClick={() => setShowGallery(true)}
              className="absolute bottom-2 left-2 bg-black/60 hover:bg-black/80 text-white rounded-lg px-2 py-1.5 flex items-center gap-1 text-xs font-medium transition-colors"
            >
              <Images className="w-3.5 h-3.5" />
              {cjData.productImageSet.length}
            </button>
          )}

          {/* Video button */}
          {hasVideo && (
            <button
              onClick={() => setShowVideo(true)}
              className="absolute bottom-2 right-2 bg-black/60 hover:bg-black/80 text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors"
            >
              <Play className="w-4 h-4 fill-white" />
            </button>
          )}

          {/* View on CJ badge — dev only */}
          {isDev && cjData && (
            <span className="absolute top-2 right-2 bg-blue-600 text-white text-[8px] font-mono px-1.5 py-0.5 rounded">
              CJ
            </span>
          )}
        </div>

        <div className="p-3 sm:p-5">
          <Link to={`/product/${product.slug}`}>
            <h3 className="font-serif font-bold text-sm sm:text-base mb-1 group-hover:text-primary transition-colors line-clamp-1">{product.name}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-2 sm:mb-3 line-clamp-2">{product.tagline}</p>
          </Link>
          <div className="flex items-center justify-between gap-2">
            <span className="text-base sm:text-lg font-bold text-primary">${product.price}</span>
            <button
              onClick={() => addItem(product)}
              className="flex items-center gap-1 sm:gap-2 bg-primary text-primary-foreground px-3 sm:px-4 py-2 min-h-[40px] sm:min-h-0 rounded-lg text-xs sm:text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Add
            </button>
          </div>
        </div>
      </div>

      {showGallery && cjData && (
        <ImageGalleryModal
          images={cjData.productImageSet}
          alt={product.name}
          onClose={() => setShowGallery(false)}
        />
      )}

      {showVideo && cjData?.videoUrl && (
        <VideoModal
          videoUrl={cjData.videoUrl}
          title={product.name}
          onClose={() => setShowVideo(false)}
        />
      )}
    </>
  );
};

export default ProductCard;
