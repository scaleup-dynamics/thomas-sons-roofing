import { Phone, ChevronRight } from 'lucide-react';
import { site } from '@/config/site';

export default function MobileStickyBar() {
  return (
    <div className="fixed inset-x-3 bottom-3 z-[60] grid grid-cols-[0.85fr_1.15fr] gap-2 rounded-2xl border border-white/10 bg-charcoal-980/95 p-2 shadow-2xl backdrop-blur-xl md:hidden safe-area-bottom">
      <a
        href={`tel:${site.phoneHref}`}
        className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 text-sm font-semibold text-white transition active:scale-[0.98]"
      >
        <Phone className="h-4 w-4 text-charcoal-950" />
        <span>Call</span>
      </a>
      <a
        href="#contact"
        className="flex items-center justify-center gap-2 rounded-xl bg-accent-400 px-3 py-3 text-sm font-bold text-charcoal-950 shadow-lg shadow-accent-500/25 transition active:scale-[0.98]"
      >
        <span>Free Inspection</span>
        <ChevronRight className="h-4 w-4" />
      </a>
    </div>
  );
}
