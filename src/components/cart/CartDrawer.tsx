import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { getProductImage } from '@/data/productImages';

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, amountToFreeShipping, freeShippingThreshold } = useCart();

  if (!isOpen) return null;

  const shippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  return (
    <>
      <div className="fixed inset-0 bg-foreground/30 backdrop-blur-sm z-50" onClick={() => setIsOpen(false)} />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background z-50 shadow-2xl animate-slide-in-right flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-lg font-serif font-bold">Your Cart</h2>
          <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-secondary rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free shipping bar */}
        <div className="px-6 py-3 bg-secondary">
          {amountToFreeShipping > 0 ? (
            <>
              <p className="text-xs font-medium text-foreground/70 mb-2">
                Add <span className="font-bold text-primary">${amountToFreeShipping.toFixed(2)}</span> more for free shipping!
              </p>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: `${shippingProgress}%` }} />
              </div>
            </>
          ) : (
            <p className="text-xs font-medium text-primary flex items-center gap-1">🚚 You've unlocked free shipping!</p>
          )}
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-muted-foreground/30 mb-4" />
              <p className="text-muted-foreground font-medium">Your cart is empty</p>
              <p className="text-sm text-muted-foreground/70 mt-1">Add something wonderful for your pet!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.product.id} className="flex gap-4 p-3 bg-card rounded-xl">
                  <div className="w-20 h-20 bg-secondary rounded-lg overflow-hidden shrink-0">
                    <img src={getProductImage(item.product.slug)} alt={item.product.name} loading="lazy" width={80} height={80} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold truncate">{item.product.name}</h3>
                    {item.variant && <p className="text-xs text-muted-foreground">{item.variant}</p>}
                    <p className="text-sm font-bold text-primary mt-1">${item.product.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="w-7 h-7 rounded-md bg-secondary flex items-center justify-center hover:bg-muted transition-colors">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="w-7 h-7 rounded-md bg-secondary flex items-center justify-center hover:bg-muted transition-colors">
                        <Plus className="w-3 h-3" />
                      </button>
                      <button onClick={() => removeItem(item.product.id)} className="ml-auto text-muted-foreground hover:text-destructive transition-colors">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border p-6 space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-bold text-lg">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted-foreground text-center">Taxes and shipping calculated at checkout</p>
            <button className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity">
              Checkout — ${subtotal.toFixed(2)}
            </button>
            <p className="text-xs text-center text-muted-foreground">🔒 Secure checkout • 30-day money back guarantee</p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
