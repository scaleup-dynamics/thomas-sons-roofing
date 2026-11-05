import { Phone, ChevronRight } from 'lucide-react';
import { site } from '@/config/site';

export default function MobileStickyBar() {
  return (
    <div className="fixed inset-x-3 bottom-3 z-[60] grid grid-cols-[0.85fr_1.15fr] gap-2 rounded-2xl border border-white/10 bg-charcoal-980/95 p-2 shadow-2xl backdrop-blur-xl md:hidden safe-area-bottom">
      <a
        href={`tel:${site.phoneHref}`}
        className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 text-sm font-semibold text-white transition active:scale-[0.98]"
      >
        <Phone className="h-4 w-4 text-primary-300" />
        <span>Call</span>
      </a>
      <a
        href="#contact"
        className="flex items-center justify-center gap-2 rounded-xl bg-primary-500 px-3 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-500/25 transition active:scale-[0.98]"
      >
        <span>Free Inspection</span>
        <ChevronRight className="h-4 w-4" />
      </a>
    </div>
  );
}
