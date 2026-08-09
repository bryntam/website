import { useEffect, useState } from 'react';

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
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-stone-300/70 bg-[#f4f3ef]/95 backdrop-blur-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-end px-6 sm:px-8 md:h-20">
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`text-[13px] font-medium tracking-[-0.01em] transition-colors ${
                scrolled
                  ? 'text-stone-500 hover:text-stone-950'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`text-[13px] font-medium transition-colors md:hidden ${
            scrolled
              ? 'text-stone-600 hover:text-stone-950'
              : 'text-white/75 hover:text-white'
          }`}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className={`mx-5 flex flex-col border-t px-5 py-4 md:hidden ${
            scrolled
              ? 'border-stone-200 bg-[#f4f3ef]/98'
              : 'border-white/20 bg-[#0a0c0b]/95 backdrop-blur-md'
          }`}
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`border-b py-3 text-left text-sm font-medium transition-colors last:border-0 ${
                scrolled
                  ? 'border-stone-200 text-stone-600 hover:text-stone-950'
                  : 'border-white/15 text-white/75 hover:text-white'
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
