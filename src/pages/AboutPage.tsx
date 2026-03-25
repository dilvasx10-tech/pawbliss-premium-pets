import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Shield, Leaf } from 'lucide-react';
import founderImg from '@/assets/founder.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutPage = () => (
  <div>
    {/* Hero */}
    <section className="container py-16 sm:py-24">
      <motion.div initial="hidden" animate="visible" className="max-w-3xl mx-auto text-center">
        <motion.p variants={fadeInUp} className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-3">Our story</motion.p>
        <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl font-serif font-bold mb-6 leading-tight">
          We're Pet Parents Who Got Tired of Mediocre Products
        </motion.h1>
        <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed">
          PawBliss started in a tiny apartment with two anxious rescue dogs and a frustrated owner who couldn't find a single product that actually worked. Every "solution" was cheap, broke within weeks, or was clearly designed by someone who'd never owned a pet.
        </motion.p>
      </motion.div>
    </section>

    {/* Founder */}
    <section className="bg-secondary/50 py-16 sm:py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="aspect-[4/5] bg-secondary rounded-3xl overflow-hidden">
            <img src={founderImg} alt="PawBliss founder with her cat" className="w-full h-full object-cover" loading="lazy" width={1024} height={1280} />
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-3">The founder</p>
            <h2 className="text-3xl font-serif font-bold mb-4">From Frustrated Pet Parent to Founder</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              "I spent thousands on products that promised to calm my dogs, simplify grooming, and keep my home clean. Most ended up in the trash. So I partnered with veterinarians and product designers to create what I wished existed — products that actually solve problems."
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, PawBliss serves over 10,000 pet parents across the country. Every product is vet-approved, rigorously tested, and backed by a 30-day money-back guarantee.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Mission */}
    <section className="py-16 sm:py-24">
      <div className="container max-w-3xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-3">Our mission</p>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">
          At PawBliss, we believe every pet deserves products that actually work — backed by science, loved by pets, and trusted by vets.
        </h2>
      </div>
    </section>

    {/* Values */}
    <section className="bg-secondary/50 py-16 sm:py-24">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: <Heart className="w-8 h-8" />, title: 'Quality First', desc: 'Every product is tested by real pet parents and their furry friends before it reaches you.' },
            { icon: <Shield className="w-8 h-8" />, title: 'Vet Approved', desc: 'Our advisory board of veterinarians reviews every product for safety and efficacy.' },
            { icon: <Leaf className="w-8 h-8" />, title: 'Pet-Safe Materials', desc: 'BPA-free, non-toxic, and built to withstand even the most enthusiastic chewers.' },
          ].map(v => (
            <div key={v.title} className="text-center p-8">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                {v.icon}
              </div>
              <h3 className="font-serif font-bold text-xl mb-3">{v.title}</h3>
              <p className="text-muted-foreground text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="py-16 sm:py-24">
      <div className="container text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-3">The team</p>
        <h2 className="text-3xl font-serif font-bold mb-10">Meet the Pack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { name: 'Alex Chen', role: 'Founder & CEO', emoji: '👩‍💼' },
            { name: 'Dr. Sarah Kim', role: 'Vet Advisor', emoji: '👩‍⚕️' },
            { name: 'Marcus Rivera', role: 'Product Design', emoji: '👨‍🎨' },
            { name: 'Emma Patel', role: 'Community', emoji: '👩‍🔧' },
          ].map(t => (
            <div key={t.name} className="text-center">
              <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center text-4xl mx-auto mb-3">
                {t.emoji}
              </div>
              <p className="font-semibold text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-primary text-primary-foreground py-16 sm:py-24">
      <div className="container text-center max-w-2xl">
        <h2 className="text-3xl font-serif font-bold mb-4">Join Our Community</h2>
        <p className="text-primary-foreground/70 mb-8">Follow us for pet wellness tips, product updates, and adorable pet content from our community.</p>
        <Link to="/collections" className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity">
          Shop the Collection
        </Link>
      </div>
    </section>
  </div>
);

export default AboutPage;
