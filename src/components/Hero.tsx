import { Star, ShieldCheck, Home, Phone, ArrowRight } from 'lucide-react';
import MagneticButton from './MagneticButton';
import { site } from '@/config/site';

const goldText: React.CSSProperties = {
  backgroundImage: 'linear-gradient(100deg, #fad884 0%, #f6bd3c 42%, #f3a115 100%)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
};

export default function Hero() {
  return (
    <section className="relative min-h-[660px] sm:min-h-[720px] lg:min-h-[90vh] flex items-center overflow-hidden noise-bg">
      {/* Custom Thomas & Sons hero photograph (dusk luxury home) */}
      <img
        src="/thomas-sons-hero.jpg"
        alt="Luxury Texas home at dusk with a newly installed architectural shingle roof — Thomas & Sons Roofing & Construction"
        className="absolute inset-0 h-full w-full object-cover object-[68%_center] lg:object-[62%_center]"
        loading="eager"
      />

      {/* Dusk-sky navy tint (matches primary-950) */}
      <div className="absolute inset-0 bg-primary-950/25" />

      {/* Left scrim — keeps the copy legible over the photograph */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(100deg, #07090b 0%, rgba(7,9,11,0.95) 30%, rgba(7,9,11,0.70) 50%, rgba(7,9,11,0.28) 72%, rgba(7,9,11,0.06) 100%)',
        }}
      />

      {/* Top scrim — seats the fixed header cleanly on the photo */}
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-charcoal-980/85 to-transparent" />

      {/* Bottom blend — flows into the TrustStrip below */}
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-charcoal-980 via-charcoal-980/70 to-transparent" />

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 pt-28 sm:pt-32 lg:pt-36 pb-28 md:pb-24 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Copy block */}
          <div className="lg:col-span-7 xl:col-span-6 text-center lg:text-left">
            {/* Gold eyebrow */}
            <div
              className="flex items-center gap-4 justify-center lg:justify-start mb-7 animate-fade-up"
              style={{ animationDelay: '0.1s', opacity: 0 }}
            >
              <span className="hidden sm:block h-px w-10 lg:w-16 bg-gradient-to-r from-accent-400 to-transparent" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.32em] text-accent-300">
                Premium Roofing &amp; Construction
              </span>
            </div>

            {/* Serif headline with gold italic accent — mirrors the brand hero */}
            <h1
              className="font-playfair font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.08] tracking-tight text-balance animate-fade-up"
              style={{ animationDelay: '0.2s', opacity: 0 }}
            >
              Your Home Deserves{' '}
              <span className="italic" style={goldText}>
                the Best.
              </span>
            </h1>

            {/* PROTECT • ENHANCE • TRANSFORM */}
            <div
              className="mt-6 flex items-center gap-3 sm:gap-4 justify-center lg:justify-start text-[10px] sm:text-xs font-medium uppercase tracking-[0.34em] text-charcoal-200 animate-fade-up"
              style={{ animationDelay: '0.32s', opacity: 0 }}
            >
              <span>Protect</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent-400 shadow-[0_0_8px_rgba(243,161,21,0.8)]" />
              <span>Enhance</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent-400 shadow-[0_0_8px_rgba(243,161,21,0.8)]" />
              <span>Transform</span>
            </div>

            {/* Localized value line */}
            <p
              className="mt-6 text-base sm:text-lg text-charcoal-300 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-up"
              style={{ animationDelay: '0.42s', opacity: 0 }}
            >
              Licensed, bonded &amp; insured Texas roofers serving{' '}
              <span className="text-white font-medium">Plano, Cedar Hill, Houston &amp; Balcones Heights</span> —
              free photo inspections and 24/7 storm response. Rated 4.9&#9733; from 80+ Google reviews.
            </p>

            {/* CTAs — gold primary mirrors the brand mock, glass phone line second */}
            <div
              className="mt-9 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up"
              style={{ animationDelay: '0.54s', opacity: 0 }}
            >
              <MagneticButton
                href="#contact"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-accent-300 to-accent-400 hover:from-accent-200 hover:to-accent-300 text-charcoal-950 font-bold shadow-2xl shadow-accent-500/25 hover:-translate-y-1 border-beam"
              >
                <span className="flex items-center gap-2 whitespace-nowrap">
                  Request a Roof Inspection <ArrowRight className="w-4 h-4" />
                </span>
              </MagneticButton>
              <MagneticButton
                href={`tel:${site.phoneHref}`}
                className="px-7 py-4 rounded-full glass hover:bg-white/10 text-white font-semibold border border-white/15"
              >
                <span className="flex items-center gap-2.5 whitespace-nowrap">
                  <Phone className="w-4 h-4 text-accent-300" /> {site.phone}
                </span>
              </MagneticButton>
            </div>

            {/* Trust row — mirrors the mock's proof strip */}
            <div
              className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4 justify-center lg:justify-start animate-fade-up"
              style={{ animationDelay: '0.66s', opacity: 0 }}
            >
              <div className="flex items-center gap-3">
                <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-accent-400 fill-accent-400" />)}</div>
                <div className="leading-tight text-left">
                  <span className="text-sm font-bold text-white">4.9/5</span>
                  <span className="block text-[11px] text-charcoal-400">80+ Google Reviews</span>
                </div>
              </div>
              <div className="hidden sm:block h-9 w-px bg-charcoal-700/70" />
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-accent-300" />
                <span className="text-sm text-charcoal-200">Licensed &amp; Insured</span>
              </div>
              <div className="hidden sm:block h-9 w-px bg-charcoal-700/70" />
              <div className="flex items-center gap-2.5">
                <Home className="w-5 h-5 text-accent-300" />
                <span className="text-sm text-charcoal-200">Residential &amp; Commercial</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue — mirrors the mock's SCROLL DOWN indicator */}
        <div className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 animate-fade-up" style={{ animationDelay: '1s', opacity: 0 }}>
          <span className="text-[9px] uppercase tracking-[0.4em] text-charcoal-500 font-mono">Scroll Down</span>
          <span className="w-px h-8 bg-gradient-to-b from-accent-400/70 to-transparent" />
        </div>
      </div>
    </section>
  );
}
