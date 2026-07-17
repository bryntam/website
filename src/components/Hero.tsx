import photo from '../img/photo.jpg';
import { LinkedinIcon, MailIcon } from './icons';

const Hero = () => {
  return (
    <section
      id="about"
      className="relative min-h-[100svh] overflow-hidden bg-[#080a09] text-white"
    >
      <img
        src="/hero-bg.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-[57%_center] md:object-center"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,6,0.9)_0%,rgba(5,7,6,0.72)_43%,rgba(5,7,6,0.18)_82%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,6,0.18)_0%,transparent_48%,rgba(5,7,6,0.58)_100%)]"
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col px-6 pb-7 pt-20 sm:px-8 md:pb-8 md:pt-24">
        <div className="flex flex-1 items-center py-10 md:py-14">
          <div className="max-w-[50rem]">
            <div className="flex items-center gap-5 sm:gap-7 md:gap-8">
              <div className="h-28 w-28 shrink-0 overflow-hidden rounded-full border-[3px] border-white bg-stone-100 shadow-[0_18px_48px_rgba(0,0,0,0.35)] sm:h-40 sm:w-40 md:h-56 md:w-56">
                <img
                  src={photo}
                  alt="Bryan Tam"
                  className="h-full w-full scale-110 object-cover"
                  style={{ objectPosition: '50% 23%' }}
                />
              </div>

              <div>
                <p className="mb-1 text-sm font-medium text-white/60 sm:text-base">
                  Hi, I’m
                </p>
                <h1 className="font-display text-[clamp(3rem,6vw,5rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
                  Bryan
                  <span className="block sm:inline"> Tam.</span>
                </h1>
              </div>
            </div>

            <h2 className="mt-9 max-w-[48rem] font-display text-[clamp(2rem,4.2vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.045em] sm:mt-11">
              I build and ship digital products from start to finish.
            </h2>

            <div className="mt-8 flex flex-wrap items-center gap-x-12 gap-y-4 sm:mt-9 sm:gap-x-16">
              <a
                href="https://www.linkedin.com/in/bryancktam/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-base font-semibold text-white transition-colors hover:text-white/65 sm:text-lg"
              >
                <LinkedinIcon size={20} />
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:bryancktam@gmail.com"
                className="inline-flex items-center gap-2.5 text-base font-semibold text-white transition-colors hover:text-white/65 sm:text-lg"
              >
                <MailIcon size={20} />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-end text-xs leading-relaxed text-white/75">
          <a
            href="#built"
            className="text-right transition-colors hover:text-white"
          >
            Scroll to explore ↓
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
