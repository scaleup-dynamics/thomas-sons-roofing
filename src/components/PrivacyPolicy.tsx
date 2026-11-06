import Reveal from './Reveal';

export default function PrivacyPolicy() {
  return (
    <section id="privacy-policy" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Decorative gold glow */}  
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-accent-900/6 blur-[140px]" />

      <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <Reveal className="text-center mb-16">
          <span className="text-accent-300 text-sm font-semibold uppercase tracking-widest font-mono">Legal</span>
          <h2 className="mt-4 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight text-balance">Privacy Policy</h2>
          <p className="mt-4 text-charcoal-400 text-lg leading-relaxed">
            Effective as of the date of publication. This policy applies to thomasroofing.pro and all Thomas &amp; Sons Roofing &amp; Construction web properties.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="glass-titanium rounded-3xl border border-white/10 p-8 lg:p-12 shadow-2xl overflow-hidden">
            <div className="prose prose-lg prose-invert max-w-none text-charcoal-300 leading-relaxed">
              <p className="mb-6 text-white">
                This online privacy policy applies only to information collected through our website and not to information collected offline through the phone or in person with a Thomas &amp; Sons Roofing &amp; Construction staff member.
              </p>
              <p className="mb-6">
                At our discretion, our website may include or offer third party products or services. These third party sites maintain their own separate and independent privacy policies. We have no responsibility or liability for the content and activities of these linked third party sites.
              </p>
              <p className="mb-6">
                We are in compliance with the requirements of COPPA (Children's Online Privacy Protection Act); we do not collect any information from anyone under 13 years of age. Our website, products, and services are all directed to people who are at least 13 years old or older.
              </p>
              <p className="mb-6">
                The information collected by Thomas &amp; Sons Roofing &amp; Construction from visits to our site, and our generic or non-generic web-based logs, will not be shared with others. The only exception is the use of non-identifying and aggregated information for the purposes of improving your experience.
              </p>
              <p className="mb-6">
                We may periodically update this policy from time to time. You retain the right to access, amend, correct, or delete your personal information where it is inaccurate at any time. To do so, please contact us. If you have any questions or suggestions regarding this privacy policy, please also feel free to contact us regarding those issues.
              </p>
              <p className="mb-6">
                Our website links to other outside websites which have their own privacy practices. This privacy policy applies only to pages on our site and does not apply to any other websites we may link to, reference, or be associated with.
              </p>
              <p className="mb-6">
                The private information submitted to us through email or any other method will be kept private unless permission is provided to share the information, or the information is demanded through an order from the Courts or a legal authority.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-charcoal-800/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-charcoal-500 font-mono">
                &copy; {new Date().getFullYear()} Thomas &amp; Sons Roofing &amp; Construction. All rights reserved.
              </div>
              <div className="flex items-center gap-6 text-xs text-charcoal-500">
                <a href="#contact" className="hover:text-charcoal-300 transition-colors">Contact Us</a>
                <a href="#testimonials" className="hover:text-charcoal-300 transition-colors">Reviews</a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
