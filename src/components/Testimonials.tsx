import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';
import Reveal from './Reveal';
import BorderBeam from './BorderBeam';

const testimonials = [
  {
    name: 'Logan Walker',
    role: 'Verified Google Review',
    avatar: 'https://images.pexels.com/photos/36819484/pexels-photo-36819484.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'I contacted three roofing companies for estimates on a new roof and new gutters, and Thomas & Sons stood out right away. The first two felt too sales focused, but Danny was honest, easy to talk to, and clearly cared about doing the job the right way. He pointed out a few roofing and drainage issues the others missed, which gave me a lot of confidence in the inspection. The crew showed up on time, stayed professional, and completed the roof and gutter work on schedule.'
  },
  {
    name: 'Grace Greene',
    role: 'Verified Google Review',
    avatar: 'https://images.pexels.com/photos/37842959/pexels-photo-37842959.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'Thomas & Sons handled my home roof repair after a large oak tree hit the house, damaged the roofing system, and knocked down the chimney. Danny and the crew stayed on schedule, kept the work within budget, and finished everything with real skill and care. I was especially impressed by how smoothly the tree removal, framing, roofing, masonry, and painting all came together. The roofers explained the process clearly and checked the damaged decking and flashing.'
  },
  {
    name: 'Roger Gill',
    role: 'Homeowner · Balcones Heights, TX',
    avatar: 'https://images.pexels.com/photos/36707107/pexels-photo-36707107.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'I called for a small roof repair and expected it would be worked into the schedule whenever the crew had an opening. To my surprise, Brady and another team member arrived at my home in Balcones Heights just a few hours later since they were already working nearby. They found the issue fast, showed me clear photos of the damaged area, explained the roofing problem in simple terms, and finished the repair in less than 30 minutes.'
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [fadeKey, setFadeKey] = useState(0);

  const next = () => { setActive((p) => (p + 1) % testimonials.length); setFadeKey((k) => k + 1); };
  const prev = () => { setActive((p) => (p - 1 + testimonials.length) % testimonials.length); setFadeKey((k) => k + 1); };

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setActive((p) => (p + 1) % testimonials.length);
      setFadeKey((k) => k + 1);
    }, 6000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-charcoal-975/50 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent-600/8 blur-[130px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent-700/8 blur-[120px]" />

      <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-12">
          <span className="text-accent-300 text-sm font-semibold uppercase tracking-widest font-mono">Client Reviews</span>
          <h2 className="mt-4 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight text-balance">What Our Customers Say</h2>
          <div className="mt-5 inline-flex items-center gap-3">
            <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-accent-400 fill-accent-400" />)}</div>
            <span className="text-charcoal-300 font-medium">4.9 out of 5 from 80+ verified Google reviews</span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <BorderBeam className="rounded-3xl">
            <div
              className="relative glass-titanium rounded-3xl p-8 lg:p-14 border border-white/5 overflow-hidden"
              onMouseEnter={() => setAutoPlay(false)}
              onMouseLeave={() => setAutoPlay(true)}
            >
              <Quote className="absolute top-8 right-8 w-20 h-20 text-charcoal-800/60" />
              <div className="absolute top-0 left-0 right-0 h-px neon-line" />

              <div className="absolute top-0 left-0 right-0 h-1 bg-charcoal-800/40">
                <div className="h-full bg-gradient-to-r from-accent-300 to-accent-500 transition-all duration-300" style={{ width: `${((active + 1) / testimonials.length) * 100}%` }} />
              </div>

              <div key={fadeKey} className="animate-fade-in">
                <div className="flex gap-1 mb-6">{[...Array(testimonials[active].rating)].map((_, i) => <Star key={i} className="w-5 h-5 text-accent-400 fill-accent-400" />)}</div>
                <p className="text-lg lg:text-2xl text-charcoal-100 leading-relaxed mb-8 min-h-[120px] font-light">"{testimonials[active].text}"</p>

                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img src={testimonials[active].avatar} alt={testimonials[active].name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-accent-400/40" loading="lazy" />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-success-500 border-2 border-charcoal-900 flex items-center justify-center">
                      <ShieldCheck className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="font-display font-bold text-white text-lg">{testimonials[active].name}</div>
                    <div className="text-sm text-charcoal-400">{testimonials[active].role}</div>
                  </div>
                  <div className="hidden sm:flex flex-col items-end gap-1">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg glass-dark border border-success-500/20">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-success-500" />
                      </span>
                      <span className="text-[10px] font-mono text-success-400 uppercase tracking-wider">Verified</span>
                    </div>
                    <span className="text-[9px] font-mono text-charcoal-600">BLOCKCHAIN SIG: 0x4F2A...</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-8 pt-6 border-t border-charcoal-800/40">
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button key={i} onClick={() => { setActive(i); setFadeKey((k) => k + 1); }}
                      className={`h-2.5 rounded-full transition-all duration-300 ${i === active ? 'w-10 bg-accent-400' : 'w-2.5 bg-charcoal-700 hover:bg-charcoal-600'}`}
                      aria-label={`Go to testimonial ${i + 1}`} />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button onClick={prev} className="w-11 h-11 rounded-xl glass-dark hover:bg-accent-400 hover:text-charcoal-950 text-white flex items-center justify-center transition-all duration-300 hover:scale-105" aria-label="Previous">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button onClick={next} className="w-11 h-11 rounded-xl glass-dark hover:bg-accent-400 hover:text-charcoal-950 text-white flex items-center justify-center transition-all duration-300 hover:scale-105" aria-label="Next">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </BorderBeam>
        </Reveal>
      </div>
    </section>
  );
}
