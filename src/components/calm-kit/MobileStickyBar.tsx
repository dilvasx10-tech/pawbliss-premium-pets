import { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { getProductById } from '@/data/products';
import DogInfoModal from './DogInfoModal';

const MobileStickyBar = () => {
  const { addItem } = useCart();
  const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero-section');
      if (hero) {
        const rect = hero.getBoundingClientRect();
        setVisible(rect.bottom < 0);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleConfirm = (info: { name: string; breed: string; age: string }) => {
    console.log('Dog info:', info);
    const lickMat = getProductById('1');
    const glove = getProductById('5');
    if (lickMat) addItem(lickMat);
    if (glove) addItem(glove);
    setShowModal(false);
  };

  if (!visible) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex items-center justify-between px-4" style={{ backgroundColor: '#2D4A3E', height: 64 }}>
        <div className="text-xs font-medium" style={{ color: '#FAFAF7' }}>
          <span className="font-bold">$44.99</span>
          <span className="block text-[10px]" style={{ color: '#FAFAF7AA' }}>Free Shipping + $45 Bonuses</span>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="px-5 py-2.5 rounded-lg text-sm font-bold"
          style={{ backgroundColor: '#C8714A', color: '#fff' }}
        >
          GET THE KIT 🐾
        </button>
      </div>
      <DogInfoModal open={showModal} onClose={() => setShowModal(false)} onSubmit={handleConfirm} />
    </>
  );
};

export default MobileStickyBar;
