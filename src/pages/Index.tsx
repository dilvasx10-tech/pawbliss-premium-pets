import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroImg from '@/assets/hero-dog.jpg';
import { Star, Truck, Shield, CheckCircle, ChevronUp, X, MessageCircle, ShoppingBag } from 'lucide-react';
import { getProductImage } from '@/data/productImages';
import ProductCard from '@/components/product/ProductCard';
import { products, bundles, reviews } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useCJProducts, getCJProductBySlug } from '@/hooks/useCJProducts';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

// Hero
const HeroSection = () => (
  <section className="relative overflow-hidden">
    <div className="container py-12 sm:py-24 lg:py-32">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.p variants={fadeInUp} className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
            Science-backed pet wellness
          </motion.p>
          <motion.h1 variants={fadeInUp} className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold leading-[1.1] mb-6">
            Your Pet Deserves Better.{' '}
            <span className="text-primary">So Do You.</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
            Science-backed products for calmer, happier, healthier pets — designed for modern pet parents.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
            <Link to="/collections" className="inline-flex items-center px-8 py-4 min-h-[48px] bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity">
              Shop Now
            </Link>
            <a href="#how-it-works" className="inline-flex items-center px-8 py-4 min-h-[48px] border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
              See How It Works
            </a>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="relative order-last">
          <div className="aspect-[4/5] sm:aspect-[4/5] rounded-2xl overflow-hidden">
            <img src={heroImg} alt="Happy golden retriever relaxing in a cozy home living room" className="w-full h-full object-cover" width={1200} height={1500} />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-2xl shadow-lg border border-border">
            <div className="flex items-center gap-2">
              <div className="flex text-accent">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="text-sm font-bold">4.9/5</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">10,000+ happy pets</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// Trust Bar
const TrustBar = () => (
  <div className="bg-secondary border-y border-border">
    <div className="container py-4 flex flex-wrap justify-center gap-4 sm:gap-10 text-sm text-muted-foreground">
      {[
        { icon: '⭐', text: '4.9/5 Rating' },
        { icon: '🐾', text: '10,000+ Happy Pets' },
        { icon: '🚚', text: 'Free Shipping $45+' },
        { icon: '✅', text: 'Vet Recommended' },
      ].map(t => (
        <span key={t.text} className="flex items-center gap-2 font-medium text-xs sm:text-sm">
          <span>{t.icon}</span> {t.text}
        </span>
      ))}
    </div>
  </div>
);

// Problems Section
const ProblemsSection = () => (
  <section className="py-16 sm:py-28">
    <div className="container">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12 sm:mb-16">
        <motion.p variants={fadeInUp} className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-3">Real problems. Real solutions.</motion.p>
        <motion.h2 variants={fadeInUp} className="text-2xl sm:text-4xl font-serif font-bold">We Solved the Problems Pet Parents<br className="hidden sm:block" /> Complain About Most</motion.h2>
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {[
          { emoji: '🐕', problem: '"My dog is anxious all the time"', solution: 'Our lick mats calm pets naturally in minutes', link: 'calm-lick-mat' },
          { emoji: '🪮', problem: '"Grooming is a nightmare"', solution: 'Our hammock makes nail trims stress-free', link: 'zen-grooming-hammock' },
          { emoji: '🧹', problem: '"Dog hair is everywhere"', solution: 'Our deshedding glove removes fur in seconds', link: 'shedaway-glove' },
        ].map(p => (
          <motion.div key={p.problem} variants={fadeInUp}>
            <Link to={`/product/${p.link}`} className="block bg-card p-6 sm:p-8 rounded-2xl border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
              <span className="text-4xl sm:text-5xl mb-4 sm:mb-6 block">{p.emoji}</span>
              <p className="font-serif font-bold text-base sm:text-lg mb-2 text-foreground/80">{p.problem}</p>
              <p className="text-accent font-semibold text-sm">→ {p.solution}</p>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

// Featured Products
const FeaturedProducts = () => {
  const { cjProducts, isLoading } = useCJProducts();
  return (
    <section className="py-16 sm:py-28 bg-secondary/50">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12 sm:mb-16">
          <motion.p variants={fadeInUp} className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-3">The collection</motion.p>
          <motion.h2 variants={fadeInUp} className="text-2xl sm:text-4xl font-serif font-bold mb-3">The PawBliss Collection</motion.h2>
          <motion.p variants={fadeInUp} className="text-muted-foreground">Six products. Every pet problem solved.</motion.p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {products.map(p => (
            <motion.div key={p.id} variants={fadeInUp}>
              <ProductCard product={p} cjData={getCJProductBySlug(cjProducts, p.slug)} isLoading={isLoading} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// How It Works
const HowItWorks = () => (
  <section id="how-it-works" className="py-16 sm:py-28">
    <div className="container">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12 sm:mb-16">
        <motion.p variants={fadeInUp} className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-3">Simple as 1-2-3</motion.p>
        <motion.h2 variants={fadeInUp} className="text-2xl sm:text-4xl font-serif font-bold">How It Works</motion.h2>
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {[
          { step: '01', title: 'Pick Your Problem', desc: 'Choose from our vet-approved solutions' },
          { step: '02', title: 'We Ship Fast', desc: 'Delivered to your door in 3–7 days' },
          { step: '03', title: 'Watch the Magic', desc: 'Real results or your money back' },
        ].map(s => (
          <motion.div key={s.step} variants={fadeInUp} className="text-center p-6 sm:p-8">
            <span className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary text-primary-foreground font-serif font-bold text-lg sm:text-xl mb-4 sm:mb-6">{s.step}</span>
            <h3 className="font-serif font-bold text-lg sm:text-xl mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm sm:text-base">{s.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

// Social Proof
const SocialProof = () => {
  const reviewData = [
    { ...reviews[0], initials: 'SM', color: 'bg-[#2D4A3E]', petLabel: 'Dog mom to Max' },
    { ...reviews[1], initials: 'JT', color: 'bg-[#C8714A]', petLabel: 'Cat dad to Luna' },
    { ...reviews[2], initials: 'PK', color: 'bg-[#4A6FA5]', petLabel: 'Cat mom to Mochi & Chai' },
  ];

  return (
    <section className="py-16 sm:py-28 bg-secondary/50">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12 sm:mb-16">
          <motion.p variants={fadeInUp} className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-3">Real reviews</motion.p>
          <motion.h2 variants={fadeInUp} className="text-2xl sm:text-4xl font-serif font-bold">10,000+ Pet Parents Can't Be Wrong</motion.h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-6">
          {reviewData.map(r => (
            <motion.div key={r.id} variants={fadeInUp} className="bg-card p-6 sm:p-8 rounded-2xl border border-border">
              <div className="flex text-[#F6AD55] mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />)}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6 italic text-sm sm:text-base" style={{ minHeight: '80px' }}>"{r.text}"</p>
              <div className="flex items-center gap-3">
                <span className={`w-10 h-10 ${r.color} text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0`}>
                  {r.initials}
                </span>
                <div>
                  <p className="font-semibold text-sm">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.petLabel}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-10">
          <Link to="/collections" className="text-sm font-semibold text-primary hover:underline">See All Reviews →</Link>
        </div>
      </div>
    </section>
  );
};

// Bundle Section
const BundleSection = () => {
  const { addItem } = useCart();
  const mainBundle = bundles[2];
  const [timeLeft, setTimeLeft] = useState({ h: 23, m: 47, s: 12 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; m = 59; s = 59; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 sm:py-28">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="bg-card rounded-3xl border border-border p-6 sm:p-12 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <span className="inline-block font-mono text-xs uppercase tracking-[0.2em] text-white bg-[#C8714A] px-3 py-1 rounded-full mb-3">
                ⭐ Most Popular
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold mb-4">The Complete PawBliss Kit</h2>
              <p className="text-muted-foreground mb-6 text-sm sm:text-base">All 6 products — everything your pet needs for a calmer, happier, healthier life. Save ${mainBundle.savings}.</p>
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-3xl sm:text-4xl font-bold text-primary">${mainBundle.price}</span>
                <span className="text-lg sm:text-xl text-muted-foreground line-through">${mainBundle.originalPrice}</span>
                <span className="font-mono text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full">SAVE ${mainBundle.savings}</span>
              </div>
              <div className="flex gap-3 mb-6">
                {[
                  { label: 'HRS', value: timeLeft.h },
                  { label: 'MIN', value: timeLeft.m },
                  { label: 'SEC', value: timeLeft.s },
                ].map(t => (
                  <div key={t.label} className="bg-secondary rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-center min-w-[65px] sm:min-w-[75px]">
                    <span className="text-2xl sm:text-3xl font-bold font-mono" style={{ color: '#2D4A3E' }}>{String(t.value).padStart(2, '0')}</span>
                    <p className="text-[10px] font-mono text-muted-foreground mt-1">{t.label}</p>
                  </div>
                ))}
              </div>
              <button onClick={() => products.forEach(p => addItem(p))} className="inline-flex items-center gap-2 px-10 sm:px-14 py-4 min-h-[48px] bg-accent text-accent-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity text-base sm:text-lg w-full sm:w-auto justify-center">
                <ShoppingBag className="w-5 h-5" />
                Build Your Bundle
              </button>
            </motion.div>
            <motion.div variants={fadeInUp} className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {products.map(p => (
                <div key={p.id} className="bg-secondary rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow" style={{ minHeight: '180px' }}>
                  <img src={getProductImage(p.slug)} alt={p.name} loading="lazy" width={400} height={400} className="w-full h-full object-cover" />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Email Capture
const EmailCapture = () => {
  const [email, setEmail] = useState('');

  return (
    <section className="bg-primary text-primary-foreground py-16 sm:py-28">
      <div className="container text-center max-w-2xl">
        <h2 className="text-2xl sm:text-4xl font-serif font-bold mb-4">Get 15% Off Your First Order</h2>
        <p className="text-primary-foreground/70 mb-8 text-sm sm:text-base">Plus weekly pet wellness tips from our in-house vet advisor.</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 px-5 py-4 min-h-[48px] rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button className="px-8 py-4 min-h-[48px] bg-accent text-accent-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity whitespace-nowrap">
            Claim My 15% Off
          </button>
        </div>
        <p className="text-xs text-primary-foreground/40 mt-4">No spam. Unsubscribe anytime. We hate junk mail too.</p>
      </div>
    </section>
  );
};

// Instagram Placeholder
const InstagramFeed = () => (
  <section className="py-16 sm:py-20">
    <div className="container text-center mb-10">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-3">@pawbliss</p>
      <h2 className="text-xl sm:text-2xl font-serif font-bold">Follow Us on Instagram</h2>
    </div>
    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-1">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="aspect-square bg-secondary flex items-center justify-center text-3xl sm:text-4xl hover:opacity-80 transition-opacity cursor-pointer">
          {['🐕', '🐈', '🐾', '🦮', '🐱', '🐶'][i]}
        </div>
      ))}
    </div>
  </section>
);

// As Seen In
const AsSeenIn = () => (
  <div className="py-12 border-y border-border">
    <div className="container">
      <p className="text-center text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6">As Seen In</p>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-12">
        {['Forbes', 'BuzzFeed', 'The Dodo', 'Good Morning America'].map(b => (
          <span key={b} className="text-base sm:text-lg font-serif font-bold text-muted-foreground/30">{b}</span>
        ))}
      </div>
    </div>
  </div>
);

// Back to top + Chat widget
const FloatingWidgets = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handler = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <button className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center hover:opacity-90 transition-opacity">
        <MessageCircle className="w-6 h-6" />
      </button>
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-24 right-6 z-40 w-10 h-10 bg-card border border-border rounded-full shadow-md flex items-center justify-center hover:bg-secondary transition-colors"
        >
          <ChevronUp className="w-4 h-4" />
        </button>
      )}
    </>
  );
};

// Social proof notification
const SocialProofNotification = () => {
  const [show, setShow] = useState(false);
  const [current, setCurrent] = useState(0);

  const notifications = [
    'Sarah from Austin just bought the Calm Lick Mat ✓',
    'James from Portland added the Grooming Hammock to cart ✓',
    'Priya from Brooklyn just bought the Complete Kit ✓',
  ];

  useEffect(() => {
    const showNext = () => {
      setShow(true);
      setTimeout(() => {
        setShow(false);
        setCurrent(prev => (prev + 1) % notifications.length);
      }, 5000);
    };

    const timer = setTimeout(showNext, 8000);
    const interval = setInterval(showNext, 20000);
    return () => { clearTimeout(timer); clearInterval(interval); };
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-24 left-4 sm:left-6 z-40 max-w-xs bg-card border border-border rounded-xl shadow-lg p-4 animate-fade-in">
      <div className="flex items-center gap-3">
        <span className="text-2xl">🛒</span>
        <p className="text-sm text-foreground/80">{notifications[current]}</p>
      </div>
    </div>
  );
};

// Exit Intent Popup
const ExitPopup = () => {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const handler = (e: MouseEvent) => {
      if (e.clientY < 10) setShow(true);
    };
    document.addEventListener('mouseleave', handler);
    return () => document.removeEventListener('mouseleave', handler);
  }, [dismissed]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/40 backdrop-blur-sm animate-fade-in">
      <div className="bg-background rounded-3xl p-8 sm:p-12 max-w-md mx-4 relative shadow-2xl">
        <button onClick={() => { setShow(false); setDismissed(true); }} className="absolute top-4 right-4 p-2 hover:bg-secondary rounded-lg">
          <X className="w-5 h-5" />
        </button>
        <div className="text-center">
          <span className="text-5xl block mb-4">🐾</span>
          <h3 className="text-2xl font-serif font-bold mb-2">Wait! Don't Leave Without Your 15% Off</h3>
          <p className="text-muted-foreground text-sm mb-6">Join 10,000+ pet parents who trust PawBliss for happier, calmer pets.</p>
          <input type="email" placeholder="your@email.com" className="w-full px-5 py-3 min-h-[48px] rounded-xl border border-border bg-secondary focus:outline-none focus:ring-2 focus:ring-primary mb-3" />
          <button className="w-full min-h-[48px] bg-primary text-primary-foreground py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity">
            Claim My 15% Off
          </button>
          <button onClick={() => { setShow(false); setDismissed(true); }} className="text-xs text-muted-foreground mt-4 block mx-auto hover:underline">
            No thanks, I'll pay full price
          </button>
        </div>
      </div>
    </div>
  );
};

// Cookie Banner
const CookieBanner = () => {
  const [show, setShow] = useState(true);
  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border p-4 animate-fade-in">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">We use cookies to improve your experience. By continuing, you agree to our cookie policy.</p>
        <div className="flex gap-3 shrink-0">
          <button onClick={() => setShow(false)} className="px-5 py-2 min-h-[48px] sm:min-h-0 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90">Accept</button>
          <button onClick={() => setShow(false)} className="px-5 py-2 min-h-[48px] sm:min-h-0 border border-border rounded-lg text-sm font-medium hover:bg-secondary">Decline</button>
        </div>
      </div>
    </div>
  );
};

// Main Homepage
const HomePage = () => (
  <>
    <HeroSection />
    <TrustBar />
    <ProblemsSection />
    <FeaturedProducts />
    <AsSeenIn />
    <HowItWorks />
    <SocialProof />
    <BundleSection />
    <EmailCapture />
    <InstagramFeed />
    <FloatingWidgets />
    <SocialProofNotification />
    <ExitPopup />
    <CookieBanner />
  </>
);

export default HomePage;
