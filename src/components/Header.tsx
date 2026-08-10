import { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { id: 'experience', label: 'Experience', number: '01' },
  { id: 'projects', label: 'Projects', number: '02' },
  { id: 'education', label: 'Education', number: '03' },
  { id: 'athletics', label: 'Athletics', number: '04' },
  { id: 'photography', label: 'Photography', number: '05' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const updateHeader = () => {
      setScrolled(window.scrollY > 10);

      const marker = window.scrollY + window.innerHeight * 0.32;
      let currentSection = '';

      NAV_ITEMS.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= marker) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    window.addEventListener('resize', updateHeader);

    return () => {
      window.removeEventListener('scroll', updateHeader);
      window.removeEventListener('resize', updateHeader);
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const solidHeader = scrolled || menuOpen;

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${
        solidHeader
          ? 'border-[#d7d6d1]/80 bg-[#f4f3ef]/95 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-8 md:h-20">
        <button
          onClick={() => scrollTo('about')}
          className={`font-display text-[19px] font-semibold tracking-[-0.045em] transition-colors md:text-xl ${
            solidHeader ? 'text-[#0b0d0c]' : 'text-white'
          }`}
          aria-label="Back to the top"
        >
          Bryan Tam.
        </button>

        <nav className="hidden items-center gap-6 lg:gap-8 md:flex" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`group relative flex items-baseline gap-1.5 py-2 text-[12px] font-medium tracking-[-0.01em] transition-colors ${
                solidHeader
                  ? activeSection === item.id
                    ? 'text-[#0b0d0c]'
                    : 'text-stone-500 hover:text-stone-950'
                  : 'text-white/70 hover:text-white'
              }`}
              aria-current={activeSection === item.id ? 'page' : undefined}
            >
              <span className="text-[9px] tabular-nums opacity-45">{item.number}</span>
              <span>{item.label}</span>
              <span
                className={`absolute bottom-0 left-0 h-px bg-current transition-[width] duration-300 ${
                  activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </button>
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`text-[11px] font-medium uppercase tracking-[0.16em] transition-colors md:hidden ${
            solidHeader ? 'text-stone-600 hover:text-stone-950' : 'text-white/75 hover:text-white'
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
          className="mx-auto max-w-6xl border-t border-[#d7d6d1] px-6 pb-5 sm:px-8 md:hidden"
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`grid w-full grid-cols-[2.25rem_1fr] items-baseline border-b border-[#d7d6d1] py-4 text-left transition-colors last:border-0 ${
                activeSection === item.id
                  ? 'text-[#0b0d0c]'
                  : 'text-stone-500 hover:text-stone-950'
              }`}
              aria-current={activeSection === item.id ? 'page' : undefined}
            >
              <span className="text-[10px] tabular-nums opacity-55">{item.number}</span>
              <span className="font-display text-2xl font-medium tracking-[-0.04em]">
                {item.label}
              </span>
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
