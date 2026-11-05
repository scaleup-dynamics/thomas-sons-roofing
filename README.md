# Thomas & Sons Roofing & Construction — Custom Outreach Demo

> **Phase 1 (Trust Hook)** demo site built by **ScaleUp Dynamics** from the Lucky Roof master template, localized for Thomas & Sons Roofing & Construction. For outreach/pitch purposes only — pending client approval before production use on their domain.

## Client Details

| Field | Value |
|---|---|
| Business | Thomas & Sons Roofing & Construction |
| Primary Phone | (469) 281-6660 |
| Secondary Line | (315) 605-1163 |
| Email | ThomasNSonsconstruction@gmail.com |
| Office | 6289 Independence Pkwy, Plano, TX 75023 |
| Google Maps | https://maps.app.goo.gl/4adYAGAsoU3dtRuG7 |
| Facebook | https://www.facebook.com/ThomasNSonsConstruction/ |
| Current Site | https://thomasroofing.pro/ |
| Google Rating | 4.9★ · 80+ reviews (Plano listing) |
| Markets | Plano · Cedar Hill · Houston · Balcones Heights, TX |

## What Was Localized

- `src/config/site.ts` — all brand, contact, hours, map, and trust-badge parameters
- Header/Footer — clickable phone, email, and Google Maps address links; real Facebook link
- Testimonials — 3 verified Google reviews quoting real customers (Logan Walker, Grace Greene, Roger Gill) and named team members (Danny, Brady)
- Portfolio — all 6 projects relocated to Plano / Cedar Hill / Houston / Balcones Heights
- Hero, TrustStrip, WhyUs — real rating counts, "Since 2016", 4 metro offices; removed unverifiable claims (GAF/BBB/25-year warranty/license numbers)
- FAQ — Texas service areas, 24/7 response times, license wording per client claims
- `index.html` — SEO title, meta description, Open Graph, and LocalBusiness JSON-LD with real address, geo coordinates, and 24/7 hours

## Current Site Audit (Why They Need This)

- Homepage is a bare directory page with a **©2021** footer and no phone number or CTA
- **4 different phone numbers & 4 different addresses** across city pages (Plano / Cedar Hill / Houston / Balcones Heights)
- Zero reviews displayed despite 80–140+ Google reviews
- No 3D/visual differentiation, thin doorway-style city pages with duplicated 25-item service lists
- Inconsistent copyright years (©2020–2026) and empty homepage sections ("Texas Society")

## Development

```bash
npm install   # node_modules is currently a junction to the master template
npm run dev
npm run build # must pass with 0 TypeScript errors
npm run typecheck
```

## Phase 2 Upsell

After the site closes, pitch the **Summit Roof Cost Estimator** (60-second interactive lead-gen wizard) as a high-ticket add-on.

---

Designed & engineered by **ScaleUp Dynamics**.
