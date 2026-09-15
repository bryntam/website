import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Highlights from './components/Highlights';
import Photography from './components/Photography';
import Footer from './components/Footer';
import { AppsIndex, CartScanPage, NotFoundPage } from './components/AppPages';
import { BridgeCirclePage } from './components/BridgePages';

function Portfolio() {
  useEffect(() => {
    const sections = document.querySelectorAll('.fade-section');
    const skipSectionMotion = window.matchMedia(
      '(max-width: 767px), (hover: none) and (pointer: coarse), (prefers-reduced-motion: reduce)'
    ).matches;

    if (skipSectionMotion) {
      sections.forEach((section) => section.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    sections.forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#f4f3ef]">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Education />
        <Highlights />
        <Photography />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';

  if (pathname === '/apps') {
    return <AppsIndex />;
  }

  if (pathname === '/apps/cart-scan') {
    return <CartScanPage />;
  }

  if (pathname === '/apps/bridge-with-friends') {
    return <BridgeCirclePage view="combined" />;
  }

  if (pathname === '/apps/bridge-with-friends/privacy') {
    return <BridgeCirclePage view="privacy" />;
  }

  if (pathname === '/apps/bridge-with-friends/support') {
    return <BridgeCirclePage view="support" />;
  }

  if (pathname !== '/') {
    return <NotFoundPage />;
  }

  return <Portfolio />;
}

export default App;
