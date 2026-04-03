import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Shield, Truck, RotateCcw, CheckCircle, X as XIcon, ChevronUp, Play } from 'lucide-react';
import { getProductBySlug, products, reviews } from '@/data/products';
import { getProductImage, getProductGallery } from '@/data/productImages';
import { useCart } from '@/context/CartContext';
import { useCJProducts, getCJProductBySlug } from '@/hooks/useCJProducts';
import ProductCard from '@/components/product/ProductCard';
import ImageGalleryModal from '@/components/product/ImageGalleryModal';
import VideoModal from '@/components/product/VideoModal';
import { Skeleton } from '@/components/ui/skeleton';

const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || '');
  const { addItem } = useCart();
  const { cjProducts, isLoading: cjLoading } = useCJProducts();
  const cjData = getCJProductBySlug(cjProducts, slug || '');

  const [selectedVariant, setSelectedVariant] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  // Build gallery from CJ data or fallback to static
  const gallery = getProductGallery(slug || '');

  useEffect(() => {
    if (product?.variant) setSelectedVariant(product.variant.options[0]);
  }, [product]);

  useEffect(() => {
    const handler = () => setShowStickyBar(window.scrollY > 600);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-serif font-bold mb-4">Product not found</h1>
        <Link to="/collections" className="text-primary hover:underline">← Back to shop</Link>
      </div>
    );
  }

  const productReviews = reviews.filter(r => r.productId === product.id);
  const crossSell = products.filter(p => p.id !== product.id).slice(0, 2);

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) addItem(product, selectedVariant);
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="container py-4">
        <nav className="text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/collections" className="hover:text-primary">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>
      </div>

      {/* Product Hero */}
      <section className="container pb-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {cjLoading ? (
              <>
                <Skeleton className="aspect-square w-full rounded-2xl mb-4" />
                <div className="grid grid-cols-5 gap-3">
                  {[...Array(5)].map((_, i) => <Skeleton key={i} className="aspect-square rounded-xl" />)}
                </div>
              </>
            ) : (
              <>
                <div
                  className="relative aspect-square bg-secondary rounded-2xl overflow-hidden mb-4 cursor-pointer"
                  onClick={() => setShowGallery(true)}
                >
                  <img src={gallery[activeImage]} alt={product.name} width={800} height={800} className="w-full h-full object-cover" />
                  {cjData?.videoUrl && (
                    <button
                      onClick={e => { e.stopPropagation(); setShowVideo(true); }}
                      className="absolute bottom-4 right-4 bg-black/60 hover:bg-black/80 text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors"
                    >
                      <Play className="w-5 h-5 fill-white" />
                    </button>
                  )}
                  {import.meta.env.DEV && cjData && (
                    <span className="absolute top-3 right-3 bg-blue-600 text-white text-[9px] font-mono px-2 py-1 rounded">CJ</span>
                  )}
                </div>
                <div className="grid grid-cols-5 gap-3">
                  {gallery.slice(0, 5).map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`aspect-square bg-secondary rounded-xl overflow-hidden cursor-pointer transition-all ${activeImage === i ? 'ring-2 ring-primary' : 'hover:ring-2 ring-primary/40'}`}
                    >
                      <img src={img} alt={`${product.name} view ${i + 1}`} loading="lazy" width={200} height={200} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </>
            )}
          </motion.div>

          {/* Details */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            {product.badge && (
              <span className={`inline-block text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 ${product.badge === 'Bestseller' ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground'}`}>
                {product.badge}
              </span>
            )}
            <h1 className="text-3xl sm:text-4xl font-serif font-bold mb-2">{product.name}</h1>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex text-accent">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-sm text-muted-foreground">({product.reviewCount.toLocaleString()} reviews)</span>
            </div>

            <p className="text-lg text-muted-foreground mb-6">{product.tagline}</p>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold text-primary">${product.price}</span>
            </div>

            {/* Variant selector */}
            {product.variant && (
              <div className="mb-6">
                <p className="text-sm font-semibold mb-3">{product.variant.type === 'color' ? 'Color' : 'Size'}: <span className="text-muted-foreground font-normal">{selectedVariant}</span></p>
                <div className="flex flex-wrap gap-2">
                  {product.variant.options.map(opt => (
                    <button
                      key={opt}
                      onClick={() => setSelectedVariant(opt)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${selectedVariant === opt ? 'border-primary bg-primary/5 text-primary' : 'border-border hover:border-primary/30'}`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-sm font-semibold mb-3">Quantity</p>
              <div className="flex items-center gap-3 w-fit border border-border rounded-lg">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-secondary transition-colors rounded-l-lg">−</button>
                <span className="font-medium w-8 text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-secondary transition-colors rounded-r-lg">+</button>
              </div>
            </div>

            {product.stock < 15 && (
              <p className="text-sm text-accent font-medium mb-4">🔥 Only {product.stock} left in stock</p>
            )}

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <button onClick={handleAdd} className="flex-1 bg-primary text-primary-foreground py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity">
                Add to Cart
              </button>
              <button onClick={handleAdd} className="flex-1 bg-accent text-accent-foreground py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity">
                Buy Now
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: <Shield className="w-4 h-4" />, text: 'Secure Checkout' },
                { icon: <Truck className="w-4 h-4" />, text: 'Free Shipping $45+' },
                { icon: <RotateCcw className="w-4 h-4" />, text: '30-Day Returns' },
                { icon: <CheckCircle className="w-4 h-4" />, text: 'Vet Approved' },
              ].map(b => (
                <div key={b.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">{b.icon}</span>
                  {b.text}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-secondary/50">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-serif font-bold text-center mb-10">Why PawBliss Wins</h2>
          <div className="bg-card rounded-2xl border border-border overflow-hidden">
            <div className="grid grid-cols-3 bg-primary text-primary-foreground text-sm font-semibold">
              <div className="p-4">Feature</div>
              <div className="p-4 text-center">PawBliss</div>
              <div className="p-4 text-center">Generic Brand</div>
            </div>
            {product.comparisonFeatures.map((f, i) => (
              <div key={f} className={`grid grid-cols-3 text-sm ${i % 2 ? 'bg-secondary/50' : ''}`}>
                <div className="p-4 font-medium">{f}</div>
                <div className="p-4 text-center text-primary"><CheckCircle className="w-5 h-5 mx-auto" /></div>
                <div className="p-4 text-center text-muted-foreground"><XIcon className="w-5 h-5 mx-auto" /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl font-serif font-bold text-center mb-10">Why You'll Love It</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.benefits.map((b, i) => (
              <div key={i} className="bg-card p-6 rounded-2xl border border-border text-center">
                <span className="text-3xl mb-4 block">✨</span>
                <p className="text-sm font-medium">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-16 bg-secondary/50">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-serif font-bold text-center mb-10">How to Use</h2>
          <div className="space-y-6">
            {product.howToUse.map((step, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="w-10 h-10 shrink-0 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-serif font-bold">{i + 1}</span>
                <p className="text-foreground/80 pt-2">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-serif font-bold text-center mb-6">Materials & Safety</h2>
          <p className="text-center text-muted-foreground">{product.materials}</p>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-secondary/50">
        <div className="container">
          <h2 className="text-2xl font-serif font-bold text-center mb-10">Customer Reviews</h2>
          <div className="text-center mb-8">
            <div className="flex justify-center text-accent mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
            </div>
            <p className="text-lg font-bold">{product.rating} out of 5</p>
            <p className="text-sm text-muted-foreground">Based on {product.reviewCount.toLocaleString()} reviews</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[...productReviews, ...reviews.filter(r => r.productId !== product.id).slice(0, 4 - productReviews.length)].slice(0, 4).map(r => (
              <div key={r.id} className="bg-card p-6 rounded-2xl border border-border">
                <div className="flex text-accent mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
                <p className="text-sm text-foreground/80 italic mb-4">"{r.text}"</p>
                <div className="flex items-center gap-2">
                  <span className="text-lg">{r.avatar}</span>
                  <span className="text-sm font-semibold">{r.name}</span>
                  <span className="text-xs text-muted-foreground">· {r.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-sell */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl font-serif font-bold text-center mb-10">Complete the Routine</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {crossSell.map(p => (
              <ProductCard
                key={p.id}
                product={p}
                cjData={getCJProductBySlug(cjProducts, p.slug)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Add to Cart Bar */}
      {showStickyBar && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-md border-t border-border py-3 animate-fade-in">
          <div className="container flex items-center justify-between">
            <div>
              <p className="font-serif font-bold text-sm">{product.name}</p>
              <p className="text-lg font-bold text-primary">${product.price}</p>
            </div>
            <button onClick={handleAdd} className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity">
              Add to Cart
            </button>
          </div>
        </div>
      )}

      {/* Modals */}
      {showGallery && (
        <ImageGalleryModal
          images={gallery}
          initialIndex={activeImage}
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

export default ProductPage;
