import { useState, useEffect } from 'react';
import { GearIcon } from './icons';

const NAV_ITEMS = ['Built', 'Experience', 'Education', 'Athletics', 'Photography'];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#fafafa]/95 backdrop-blur-sm border-b border-stone-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-sm font-medium text-stone-900 hover:text-stone-500 transition-colors"
        >
          Bryan Tam
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-sm text-stone-400 hover:text-stone-900 transition-colors"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-stone-400 hover:text-stone-900 transition-colors"
        >
          <GearIcon size={18} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#fafafa] border-b border-stone-100 px-6 py-4 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-sm text-stone-600 text-left hover:text-stone-900 transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
