import { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { id: 'experience', label: 'Experience', number: '01' },
  { id: 'projects', label: 'Projects', number: '02' },
  { id: 'education', label: 'Education', number: '03' },
  { id: 'athletics', label: 'Athletics', number: '04' },
  { id: 'photography', label: 'Photography', number: '05' },
];

const Header = () => {
  const [heroCleared, setHeroCleared] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    let frameId: number | null = null;
    let refreshSectionOffsets = true;
    let mounted = true;
    let previousHeroCleared = false;
    let previousActiveSection = '';
    let heroEnd = window.innerHeight;
    let headerBarHeight = 0;
    let sectionOffsets: Array<{ id: string; top: number }> = [];

    const measureSections = () => {
      const hero = document.getElementById('about');
      const headerBar = document.querySelector<HTMLElement>('[data-header-bar]');

      heroEnd = hero ? hero.offsetTop + hero.offsetHeight : window.innerHeight;
      headerBarHeight = headerBar?.offsetHeight ?? (window.innerWidth >= 768 ? 80 : 64);

      sectionOffsets = NAV_ITEMS.flatMap(({ id }) => {
        const section = document.getElementById(id);
        return section ? [{ id, top: section.offsetTop }] : [];
      });
    };

    const updateHeader = () => {
      const scrollY = Math.max(0, window.scrollY);
      const nextHeroCleared = scrollY + headerBarHeight >= heroEnd - 0.5;

      if (nextHeroCleared !== previousHeroCleared) {
        previousHeroCleared = nextHeroCleared;
        setHeroCleared(nextHeroCleared);
      }

      const marker = scrollY + window.innerHeight * 0.32;
      let currentSection = '';

      sectionOffsets.forEach(({ id, top }) => {
        if (top <= marker) {
          currentSection = id;
        }
      });

      if (currentSection !== previousActiveSection) {
        previousActiveSection = currentSection;
        setActiveSection(currentSection);
      }
    };

    const scheduleUpdate = () => {
      if (frameId !== null) return;

      frameId = window.requestAnimationFrame(() => {
        frameId = null;

        if (refreshSectionOffsets) {
          measureSections();
          refreshSectionOffsets = false;
        }

        updateHeader();
      });
    };

    const handleResize = () => {
      refreshSectionOffsets = true;
      scheduleUpdate();
    };

    scheduleUpdate();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', handleResize);

    document.fonts?.ready.then(() => {
      if (mounted) handleResize();
    });

    return () => {
      mounted = false;
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', handleResize);

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const solidHeader = heroCleared || menuOpen;

  return (
    <header
      className={`site-header fixed left-0 right-0 top-0 z-50 border-b ${
        solidHeader
          ? 'site-header-solid border-[#d7d6d1]/80'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div
        data-header-bar
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-8 md:h-20"
      >
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
