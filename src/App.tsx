import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Built from './components/Built';
import Experience from './components/Experience';
import Education from './components/Education';
import Highlights from './components/Highlights';
import Photography from './components/Photography';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.05 }
    );

    document.querySelectorAll('.fade-section').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Header />
      <main>
        <Hero />
        <Built />
        <Experience />
        <Education />
        <Highlights />
        <Photography />
      </main>
      <Footer />
    </div>
  );
}

export default App;
