import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { getProductById } from '@/data/products';
import DogInfoModal from './DogInfoModal';

interface CtaButtonProps {
  label?: string;
  className?: string;
  height?: number;
}

const CtaButton = ({ label = 'YES — SEND ME THE CALM KIT 🐾', className = '', height = 56 }: CtaButtonProps) => {
  const { addItem } = useCart();
  const [showModal, setShowModal] = useState(false);

  const handleConfirm = (info: { name: string; breed: string; age: string }) => {
    console.log('Dog info:', info);
    const lickMat = getProductById('1');
    const glove = getProductById('5');
    if (lickMat) addItem(lickMat);
    if (glove) addItem(glove);
    setShowModal(false);
  };

  return (
    <div className={className}>
      <button
        onClick={() => setShowModal(true)}
        className="w-full px-6 rounded-xl text-base md:text-lg font-bold transition-transform hover:scale-[1.02] active:scale-[0.98]"
        style={{ backgroundColor: '#C8714A', color: '#FAFAF7', minHeight: height }}
      >
        {label}
      </button>
      <p className="text-center text-xs font-semibold mt-1.5" style={{ color: '#C8714A' }}>
        🔥 Only 47 kits left at this price
      </p>
      <p className="text-center text-[11px] mt-1" style={{ color: '#888' }}>
        🔒 Secure checkout · 30-day money back guarantee · Ships within 24hrs
      </p>
      <DogInfoModal open={showModal} onClose={() => setShowModal(false)} onSubmit={handleConfirm} />
    </div>
  );
};

export default CtaButton;
