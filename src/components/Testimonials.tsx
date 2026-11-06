import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';
import Reveal from './Reveal';
import BorderBeam from './BorderBeam';

const testimonials = [
  {
    name: 'Jacqueline Conner',
    role: 'Verified Google Review · Plano, TX',
    avatar: 'https://images.pexels.com/photos/36819484/pexels-photo-36819484.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'We have used Thomas & Sons Roofing & Construction twice now for our roofing needs, and each time has been a great experience. Bryan, our roofer, was very knowledgeable and took the time to explain exactly what was going on with our roof. He kept in touch with us throughout the process to make sure all our concerns were addressed. Since our home was remodeled before we bought it, there were some issues left behind…',
  },
  {
    name: 'Bella Dixon',
    role: 'Verified Google Review · Plano, TX',
    avatar: 'https://images.pexels.com/photos/37842959/pexels-photo-37842959.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'I was really happy with the roofing service I received. After some heavy rain in Plano, I noticed a water leak coming through my master bedroom ceiling. Bryan worked with my busy schedule and was able to come out the same day. He explained everything clearly and was honest about what needed to be done. Since I don\u2019t know much about roofing, I could have easily thought it was a big issue, but he quickly found the…',
  },
  {
    name: 'Todd',
    role: 'Verified Google Review · Plano, TX',
    avatar: 'https://images.pexels.com/photos/36707107/pexels-photo-36707107.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'Thomas & Sons Roofing & Construction did an excellent job restoring our home after a hail storm in Plano. Todd was easy to work with from the start and carefully inspected the roof, windows, gutters, and downspouts. He pointed out storm damage we had missed and kept us updated throughout the roofing and exterior repairs with regular check-ins. He also rechecked everything, documented the damage clearly, and was at our house during the insurance inspection to help make sure nothing was missed.',
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
