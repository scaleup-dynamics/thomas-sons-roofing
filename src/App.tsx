import { Suspense, lazy } from 'react';
import ScrollProgress from './components/ScrollProgress';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactCTA from './components/ContactCTA';
import Estimator from './components/Estimator';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import { useDeviceCapabilities } from './hooks/useDeviceCapabilities';

const ParticleField = lazy(() => import('./components/3d/ParticleField'));

function App() {
  const caps = useDeviceCapabilities();

  // Disable ambient 3D background on mobile, low-end devices, or when reduced motion is preferred
  const showBackgroundParticles =
    caps.supportsWebGL && !caps.isMobile && !caps.isLowEnd && !caps.prefersReducedMotion;

  return (
    <div className="relative min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-charcoal-980 text-charcoal-100 antialiased noise-bg">
      {showBackgroundParticles && (
        <Suspense fallback={null}>
          <ParticleField particleCount={caps.isLowEnd ? 400 : 700} dprMax={1} />
        </Suspense>
      )}
      <ScrollProgress />
      <Header />
      <main className="relative z-10 w-full overflow-x-hidden">
        <Hero />
        <TrustStrip />
        <Services />
        <Process />
        <Portfolio />
        <WhyUs />
        <Estimator />
        <Testimonials />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}

export default App;
