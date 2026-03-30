import { useCart } from '@/context/CartContext';
import { getProductById } from '@/data/products';

interface CtaButtonProps {
  label?: string;
  className?: string;
  height?: number;
}

const CtaButton = ({ label = 'YES — SEND ME THE CALM KIT 🐾', className = '', height = 60 }: CtaButtonProps) => {
  const { addItem } = useCart();

  const handleBuy = () => {
    const lickMat = getProductById('1');
    const glove = getProductById('5');
    if (lickMat) addItem(lickMat);
    if (glove) addItem(glove);
  };

  return (
    <div className={className}>
      <button
        onClick={handleBuy}
        className="w-full px-8 rounded-xl text-lg font-bold transition-transform hover:scale-[1.02] active:scale-[0.98]"
        style={{ backgroundColor: '#C8714A', color: '#FAFAF7', minHeight: height }}
      >
        {label}
      </button>
      <p className="text-center text-xs mt-2" style={{ color: '#888' }}>
        🔒 Secure checkout · 30-day money back guarantee · Ships within 24hrs
      </p>
    </div>
  );
};

export default CtaButton;
