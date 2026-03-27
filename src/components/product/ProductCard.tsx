import { Link } from 'react-router-dom';
import { Product } from '@/data/products';
import { getProductImage } from '@/data/productImages';
import { useCart } from '@/context/CartContext';
import { ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();

  return (
    <div className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-square bg-secondary flex items-center justify-center overflow-hidden">
          <img src={getProductImage(product.slug)} alt={product.name} loading="lazy" width={800} height={800} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          {product.badge && (
            <span className={`absolute top-2 left-2 sm:top-3 sm:left-3 text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider px-2 sm:px-3 py-1 rounded-full ${
              product.badge === 'Bestseller' ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground'
            }`}>
              {product.badge}
            </span>
          )}
        </div>
      </Link>
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
  );
};

export default ProductCard;
