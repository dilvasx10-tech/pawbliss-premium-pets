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
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden px-4 pb-3 pt-2" style={{ backgroundColor: '#2D4A3E' }}>
        <button
          onClick={() => setShowModal(true)}
          className="w-full py-3.5 rounded-xl text-base font-bold"
          style={{ backgroundColor: '#C8714A', color: '#fff' }}
        >
          YES — SEND ME THE CALM KIT 🐾
        </button>
        <p className="text-center text-[10px] mt-1 font-medium" style={{ color: '#FAFAF7AA' }}>
          🔥 Only 47 kits left · $44.99 · Free Shipping
        </p>
      </div>
      <DogInfoModal open={showModal} onClose={() => setShowModal(false)} onSubmit={handleConfirm} />
    </>
  );
};

export default MobileStickyBar;
