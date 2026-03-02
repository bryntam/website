import { GithubIcon, LinkedinIcon, MailIcon, ArrowUpRightIcon, XIcon } from './icons';
import photo from '../img/photo.jpg';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center pt-14">
      <div className="max-w-5xl mx-auto px-6 w-full py-24">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-16">

          {/* Text */}
          <div className="flex-1 max-w-md space-y-7">
            <h1 className="font-display text-[clamp(4rem,10vw,7rem)] text-stone-900 leading-[0.9] tracking-tight">
              Bryan<br />
              <span className="italic text-stone-400">Tam</span>
            </h1>

            <p className="text-xl text-stone-500 font-light leading-relaxed max-w-xs">
              I build and ship digital products.
            </p>

            <p className="text-sm text-stone-500 leading-relaxed max-w-sm">
              Business Systems Analyst at Scotiabank.
              I help build things from start to finish.
            </p>

            <div className="flex items-center gap-6 pt-1">
              {/* <a
                href="https://github.com/bryntam"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 text-sm text-stone-400 hover:text-stone-900 transition-colors"
              >
                <GithubIcon size={14} />
                <span>GitHub</span>
                <ArrowUpRightIcon
                  size={11}
                  className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                />
              </a> */}

              <a
                href="https://www.linkedin.com/in/bryancktam/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 text-sm text-stone-400 hover:text-stone-900 transition-colors"
              >
                <LinkedinIcon size={14} />
                <span>LinkedIn</span>
                <ArrowUpRightIcon
                  size={11}
                  className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                />
              </a>

              {/* <a
                href="https://x.com/bryntamm"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 text-sm text-stone-400 hover:text-stone-900 transition-colors"
              >
                <XIcon size={14} />
                <span>Twitter</span>
                <ArrowUpRightIcon
                  size={11}
                  className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                />
              </a> */}

              <a
                href="mailto:bryancktam@gmail.com"
                className="group flex items-center gap-1.5 text-sm text-stone-400 hover:text-stone-900 transition-colors"
              >
                <MailIcon size={14} />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="shrink-0">
            <div className="relative w-72 h-72 md:w-[420px] md:h-[420px]">
              <img
                src={photo}
                alt="Bryan Tam"
                className="w-full h-full rounded-full object-cover" style={{ objectPosition: '50% 20%' }}
              />
              <div className="absolute inset-0 rounded-full ring-1 ring-stone-200 ring-offset-2 ring-offset-[#fafafa]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
