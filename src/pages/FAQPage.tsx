import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useState } from 'react';

const faqCategories = ['All', 'Shipping', 'Returns', 'Products', 'Safety'] as const;
type FaqCategory = typeof faqCategories[number];

interface FAQ {
  q: string;
  a: string;
  category: Exclude<FaqCategory, 'All'>;
}

const faqs: FAQ[] = [
  { q: 'How long does shipping take?', a: 'Standard shipping takes 3–7 business days within the continental US. Expedited shipping (1–3 days) is available at checkout for an additional fee.', category: 'Shipping' },
  { q: 'Do you ship internationally?', a: 'Currently, we ship to the US and Canada. We\'re working on expanding to more countries — join our newsletter to be the first to know!', category: 'Shipping' },
  { q: 'What is your return policy?', a: 'We offer a 30-day no-questions-asked return policy. If you or your pet aren\'t happy, we\'ll refund you in full. Just email us at hello@pawbliss.com.', category: 'Returns' },
  { q: 'Are your products vet-approved?', a: 'Yes! Every PawBliss product is reviewed and approved by our advisory board of licensed veterinarians before it reaches your door.', category: 'Safety' },
  { q: 'Are materials pet-safe and BPA-free?', a: 'Absolutely. All PawBliss products are made with non-toxic, BPA-free, food-grade materials that meet or exceed FDA safety standards.', category: 'Safety' },
  { q: 'How does the lick mat calm my pet?', a: 'Licking releases endorphins in dogs and cats, creating a natural calming effect. The multi-texture surface extends licking time, keeping your pet engaged and relaxed during stressful moments like baths, storms, or vet visits.', category: 'Products' },
  { q: 'What size cooling mat should I get?', a: 'Small (20"x16") for pets under 20 lbs, Medium (28"x20") for 20–50 lbs, Large (36"x28") for 50–90 lbs, XL (44"x32") for dogs over 90 lbs.', category: 'Products' },
  { q: 'How do I clean the water fountain?', a: 'Disassemble the fountain weekly and rinse all parts with warm water. The pump can be cleaned with a small brush. Replace the filter cartridge every 2–4 weeks for optimal filtration.', category: 'Products' },
  { q: 'Does the grooming hammock work for cats?', a: 'Yes! The Zen Grooming Hammock works great for cats between 5–25 lbs. Many cat parents report it\'s the only way they can trim nails without getting scratched.', category: 'Products' },
  { q: 'How often should I use the deshedding glove?', a: 'We recommend using the ShedAway Glove 2–3 times per week during heavy shedding seasons and once a week during other times. It doubles as a gentle massage, so your pet will love it!', category: 'Products' },
  { q: 'Can I bundle products for a discount?', a: 'Yes! We offer curated bundles that save you up to 22%. Check our bundles section for the Calm Bundle, Clean Home Bundle, and the Complete PawBliss Kit.', category: 'Products' },
  { q: 'How do I contact support?', a: 'Email us at hello@pawbliss.com or use the chat widget on our website. We respond to all inquiries within 24 hours, Monday through Friday.', category: 'Shipping' },
];

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState<FaqCategory>('All');

  const filtered = activeCategory === 'All' ? faqs : faqs.filter(f => f.category === activeCategory);

  return (
    <div className="container py-12 sm:py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-3">Support</p>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-3">Frequently Asked Questions</h1>
        <p className="text-muted-foreground max-w-lg mx-auto">Everything you need to know about PawBliss products, shipping, and returns.</p>
      </motion.div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {faqCategories.map(c => (
          <button
            key={c}
            onClick={() => setActiveCategory(c)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeCategory === c ? 'bg-primary text-primary-foreground' : 'bg-secondary text-foreground/70 hover:bg-muted'}`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {filtered.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-sm sm:text-base hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Contact CTA */}
      <div className="text-center mt-16">
        <p className="text-muted-foreground mb-4">Still have questions?</p>
        <a href="mailto:hello@pawbliss.com" className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity">
          Contact Support
        </a>
      </div>
    </div>
  );
};

export default FAQPage;
