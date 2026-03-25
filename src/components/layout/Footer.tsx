import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <span className="text-xl">🐾</span>
            <span className="text-2xl font-serif font-bold tracking-tight">PawBliss</span>
          </Link>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Happy Pet. Calm Home. Blissful Life.
          </p>
          <div className="flex gap-4 mt-6">
            {['Instagram', 'TikTok', 'Facebook'].map(s => (
              <a key={s} href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors text-xs font-mono">
                {s === 'Instagram' ? <Instagram className="w-4 h-4" /> : s[0]}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-sans font-semibold text-sm mb-4 uppercase tracking-wider text-primary-foreground/50">Shop</h4>
          <div className="flex flex-col gap-2">
            {['All Products', 'For Dogs', 'For Cats', 'Bundles', 'Bestsellers'].map(l => (
              <Link key={l} to="/collections" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">{l}</Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-sans font-semibold text-sm mb-4 uppercase tracking-wider text-primary-foreground/50">Company</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: 'About', to: '/about' },
              { label: 'FAQ', to: '/faq' },
              { label: 'Contact', to: '/faq' },
              { label: 'Shipping Policy', to: '/faq' },
              { label: 'Returns', to: '/faq' },
            ].map(l => (
              <Link key={l.label} to={l.to} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-sans font-semibold text-sm mb-4 uppercase tracking-wider text-primary-foreground/50">As Seen In</h4>
          <div className="flex flex-wrap gap-3">
            {['Forbes', 'BuzzFeed', 'The Dodo', 'GMA'].map(b => (
              <span key={b} className="text-xs font-mono bg-primary-foreground/10 px-3 py-1.5 rounded-full text-primary-foreground/60">{b}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-primary-foreground/50">© {new Date().getFullYear()} PawBliss. All rights reserved.</p>
        <p className="text-xs text-primary-foreground/50">Made with love for pet parents 🐾</p>
      </div>
    </div>
  </footer>
);

export default Footer;
