import { useEffect, useRef, useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import Reveal from './Reveal';

const faqs = [
  { q: 'How long does a roof replacement take?', a: 'Most residential roof replacements take 1–3 Days depending on the size and complexity. Commercial projects can take longer. We provide a detailed timeline in your written estimate and stick to it.' },
  { q: 'Do you offer free roof inspections?', a: 'Yes. Every inspection is completely free with no obligation. Our certified inspector will assess your roof, document findings with photos, and provide a transparent report within 48 hours.' },
  { q: 'How fast can you get to my home?', a: 'We operate 24/7 across all four metro locations. Homeowners tell us crews often arrive the same day — one Balcones Heights customer had a repair finished less than three hours after calling because the team was already working nearby. Call (469) 281-6660 for same-day scheduling.' },
  { q: 'Can you help with insurance claims?', a: 'Absolutely. We work directly with insurance companies all the time. We provide detailed photo documentation, meet with your adjuster on-site, and handle billing directly with your insurer to simplify the process.' },
  { q: 'What roofing materials do you work with?', a: 'We install and repair asphalt shingles, impact-resistant shingles, metal roofing, clay and concrete tile, TPO and EPDM for flat roofs, and more. We help you choose the best material for your budget, style, and Texas climate.' },
  { q: 'Do you offer financing or payment plans?', a: 'Yes, we offer flexible financing options with competitive rates. We can discuss payment plan details during your free consultation to find a solution that fits your budget.' },
  { q: 'Are you licensed and insured?', a: 'Yes — Thomas & Sons Roofing & Construction is fully licensed, bonded, and carries comprehensive liability insurance and workers compensation coverage. We provide proof of insurance upon request.' },
  { q: 'What areas do you serve?', a: 'Our four offices cover Plano & the DFW Metro (including Cedar Hill), Greater Houston, and Balcones Heights / San Antonio. Call us to confirm if we cover your area.' },
];

function FAQItem({ faq, isOpen, onClick }: { faq: { q: string; a: string }; isOpen: boolean; onClick: () => void }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) setHeight(isOpen ? contentRef.current.scrollHeight : 0);
  }, [isOpen]);

  return (
    <div className={`glass-titanium rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? 'border-accent-400/40' : 'border-white/5'}`}>
      <button onClick={onClick} className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left group">
        <span className={`font-display font-bold text-base lg:text-lg transition-colors ${isOpen ? 'text-accent-300' : 'text-white group-hover:text-accent-200'}`}>{faq.q}</span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-accent-400 text-charcoal-950 rotate-180' : 'glass-dark text-charcoal-300'}`}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>
      <div style={{ height: `${height}px` }} className="transition-all duration-300 overflow-hidden">
        <div ref={contentRef} className="px-6 pb-5">
          <p className="text-charcoal-400 text-sm leading-relaxed">{faq.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-accent-900/8 blur-[120px]" />

      <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-12">
          <span className="text-accent-300 text-sm font-semibold uppercase tracking-widest font-mono">Questions &amp; Answers</span>
          <h2 className="mt-4 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight text-balance">Frequently Asked Questions</h2>
          <p className="mt-4 text-charcoal-400 text-lg">Everything you need to know about working with Thomas &amp; Sons. Still have questions? We're a phone call away.</p>
        </Reveal>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 50}>
              <FAQItem faq={faq} isOpen={open === i} onClick={() => setOpen(open === i ? null : i)} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-10 glass-titanium rounded-2xl border border-white/5 p-6 lg:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl glass border border-accent-500/20 flex items-center justify-center flex-shrink-0">
                <HelpCircle className="w-7 h-7 text-accent-300" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white">Still have questions?</h3>
                <p className="text-sm text-charcoal-400 mt-0.5">Our team is ready to help — call us for a free consultation.</p>
              </div>
            </div>
            <a href="tel:+14692816660" className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent-300 to-accent-400 hover:from-accent-200 hover:to-accent-300 text-charcoal-950 font-bold transition-all duration-300 shadow-lg shadow-accent-500/25 hover:shadow-accent-500/50 whitespace-nowrap border-beam">
              <Phone className="w-5 h-5" /> (469) 281-6660
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
