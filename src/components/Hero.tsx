import { GithubIcon, LinkedinIcon, MailIcon, ArrowUpRightIcon, XIcon } from './icons';
import photo from '../img/photo.jpg';

const Hero = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-start md:items-center pt-14 overflow-hidden bg-black"
    >
      {/* Background photo */}
      <img
        src="/hero-bg.jpg"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Gradient overlay — heavier on left where text lives */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-gradient-to-r from-black/75 via-black/50 to-black/20"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full pt-6 pb-24 md:py-24">
        <div className="flex-1 max-w-md space-y-7">

          {/* Photo — above name */}
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden">
            <img
              src={photo}
              alt="Bryan Tam"
              className="w-full h-full object-cover"
              style={{ objectPosition: '50% 20%' }}
            />
          </div>

          <h1 className="font-display text-[clamp(4rem,10vw,7rem)] text-white leading-[0.9] tracking-tight">
            Bryan<br />
            <span className="italic text-white">Tam</span>
          </h1>

          <p className="text-xl text-white font-semibold leading-relaxed max-w-xs">
            I build and ship digital products.
          </p>

          <p className="text-sm text-white font-semibold leading-relaxed max-w-sm">
            Business Systems Analyst at Scotiabank.
            I help build things from start to finish.
          </p>

          <div className="flex items-center gap-6 pt-1">
            <a
              href="https://www.linkedin.com/in/bryancktam/"
              target="_blank"
              rel="noopener noreferrer"
              className="group font-hero flex items-center gap-1.5 text-sm text-white hover:text-white/70 transition-colors"
            >
              <LinkedinIcon size={14} />
              <span>LinkedIn</span>
              <ArrowUpRightIcon
                size={11}
                className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
              />
            </a>

            <a
              href="mailto:bryancktam@gmail.com"
              className="group font-hero flex items-center gap-1.5 text-sm text-white hover:text-white/70 transition-colors"
            >
              <MailIcon size={14} />
              <span>Email</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
