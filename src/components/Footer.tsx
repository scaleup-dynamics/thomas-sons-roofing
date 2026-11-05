import { useState } from 'react';
import { Home, Phone, Mail, MapPin, Facebook, Instagram, Youtube, Send } from 'lucide-react';
import { site } from '@/config/site';

const links = {
  Services: ['Residential Roofing', 'Commercial Roofing', 'Roof Repairs', 'Storm Restoration', 'Gutter Systems'],
  Company: ['About Us', 'Our Projects', 'Reviews', 'Process', 'Careers'],
  Resources: ['Free Inspection', 'Insurance Claims', 'Hail & Storm Damage', 'FAQ', 'Blog'],
};

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative border-t border-charcoal-800/40 bg-charcoal-980 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px neon-line" />
      <div className="absolute top-0 right-0 w-[400px] h-[300px] rounded-full bg-primary-700/5 blur-[120px]" />

      <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-32 md:py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent-300 to-accent-500 flex items-center justify-center shadow-lg shadow-accent-500/30">
                <Home className="w-5 h-5 text-charcoal-950" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-extrabold text-xl text-white">
                  Thomas <span className="text-accent-300">&amp; Sons</span>
                </span>
                <span className="text-[10px] text-charcoal-500 font-mono tracking-widest uppercase mt-0.5">
                  Roofing &amp; Construction
                </span>
              </div>
            </div>
            <p className="text-charcoal-400 text-sm leading-relaxed max-w-sm mb-6">
              Licensed, bonded &amp; insured Texas roofing contractor serving Plano,
              Cedar Hill, Houston &amp; Balcones Heights. Rated 4.9★ from 80+ Google
              reviews — trusted since 2016.
            </p>

            <div className="mb-6">
              <p className="text-xs text-charcoal-500 uppercase tracking-wider mb-3 font-mono">Get Roofing Tips &amp; Offers</p>
              <form onSubmit={subscribe} className="flex gap-2">
                <input type="email" required value={email}
                  onChange={(e) => setEmail(e.target.value)} placeholder="Your email"
                  className="flex-1 px-4 py-2.5 rounded-xl bg-charcoal-950/60 border border-charcoal-800 text-white text-sm placeholder-charcoal-500 focus:outline-none focus:border-primary-500 focus:shadow-[0_0_15px_rgba(11,138,240,0.15)] transition-all" />
                <button type="submit"
                  className="px-4 py-2.5 rounded-xl bg-accent-400 hover:bg-accent-300 text-charcoal-950 transition-colors flex items-center justify-center">
                  <Send className="w-4 h-4" />
                </button>
              </form>
              {subscribed && <p className="text-xs text-success-400 mt-2 animate-fade-in font-mono">Thanks for subscribing!</p>}
            </div>

            <div className="flex gap-3">
              <a href={site.facebookUrl} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass-titanium hover:bg-accent-400 border border-charcoal-700/50 hover:border-accent-400 flex items-center justify-center text-charcoal-300 hover:text-charcoal-950 transition-all duration-300"
                aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              {[Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#"
                  className="w-10 h-10 rounded-lg glass-titanium hover:bg-accent-400 border border-charcoal-700/50 hover:border-accent-400 flex items-center justify-center text-charcoal-300 hover:text-charcoal-950 transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.entries(links).map(([title, items]) => (
              <div key={title}>
                <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">{title}</h4>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm text-charcoal-400 hover:text-accent-300 transition-colors">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">Contact</h4>
            <div className="space-y-3">
              <a href={`tel:${site.phoneHref}`} className="flex items-center gap-2.5 text-sm text-charcoal-400 hover:text-white transition-colors">
                <div className="w-8 h-8 rounded-lg glass border border-accent-500/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-accent-300" />
                </div>
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2.5 text-sm text-charcoal-400 hover:text-white transition-colors break-all">
                <div className="w-8 h-8 rounded-lg glass border border-accent-500/30 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-accent-300" />
                </div>
                {site.email}
              </a>
              <a href={site.mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-charcoal-400 hover:text-white transition-colors">
                <div className="w-8 h-8 rounded-lg glass border border-accent-500/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-accent-300" />
                </div>
                6289 Independence Pkwy<br />Plano, TX 75023
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-charcoal-800/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-charcoal-500 font-mono">
            &copy; {new Date().getFullYear()} Thomas &amp; Sons Roofing &amp; Construction. All rights reserved. &middot; Licensed, Bonded &amp; Insured
          </div>
          <div className="flex items-center gap-6 text-xs text-charcoal-500">
            <a href="#" className="hover:text-charcoal-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-charcoal-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-charcoal-300 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


