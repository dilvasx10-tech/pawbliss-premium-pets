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
            <span className={`absolute top-3 left-3 text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
              product.badge === 'Bestseller' ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground'
            }`}>
              {product.badge}
            </span>
          )}
        </div>
      </Link>
      <div className="p-5">
        <Link to={`/product/${product.slug}`}>
          <h3 className="font-serif font-bold text-base mb-1 group-hover:text-primary transition-colors">{product.name}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2">{product.tagline}</p>
        </Link>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary">${product.price}</span>
          <button
            onClick={() => addItem(product)}
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <ShoppingBag className="w-4 h-4" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
