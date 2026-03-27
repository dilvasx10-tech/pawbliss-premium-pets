import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import PeekingDog from '@/components/PeekingDog';

const AnnouncementBar = ({ onDismiss }: { onDismiss: () => void }) => (
  <div className="bg-[#2D4A3E] text-[#F5F0E8] text-center py-2 px-4 relative" style={{ fontSize: '13px' }}>
    <span className="font-mono tracking-wide">
      🐾 Free Shipping on Orders $45+ | Use code <span className="font-bold">PAWBLISS15</span> for 15% off your first order | Limited time offer
    </span>
    <button
      onClick={onDismiss}
      className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:opacity-70 transition-opacity"
      aria-label="Dismiss announcement"
    >
      <X className="w-3.5 h-3.5 text-[#F5F0E8]" />
    </button>
  </div>
);

const Header = () => {
  const { totalItems, setIsOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  const navLinks = [
    { to: '/collections', label: 'Shop' },
    { to: '/about', label: 'About' },
    { to: '/faq', label: 'FAQ' },
  ];

  return (
    <>
      {showAnnouncement && <AnnouncementBar onDismiss={() => setShowAnnouncement(false)} />}
      <PeekingDog />
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-14 sm:h-20">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-mono text-primary">🐾</span>
            <span className="text-xl sm:text-2xl font-serif font-bold text-primary tracking-tight">PawBliss</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(l => (
              <Link key={l.to} to={l.to} className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button onClick={() => setIsOpen(true)} className="relative p-2 hover:bg-secondary rounded-lg transition-colors">
              <ShoppingBag className="w-5 h-5 text-foreground" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground text-[10px] font-bold rounded-full flex items-center justify-center animate-count-pulse">
                  {totalItems}
                </span>
              )}
            </button>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 min-h-[48px] min-w-[48px] flex items-center justify-center">
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-background animate-fade-in">
            <nav className="container py-4 flex flex-col gap-3">
              {navLinks.map(l => (
                <Link key={l.to} to={l.to} onClick={() => setMobileOpen(false)} className="text-base font-medium text-foreground/80 hover:text-primary py-3 min-h-[48px] flex items-center">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
