import { GithubIcon, LinkedinIcon, MailIcon } from './icons';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-stone-100">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-stone-300">
          © {new Date().getFullYear()} Bryan Tam
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/bryntam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-300 hover:text-stone-600 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={15} />
          </a>
          <a
            href="https://www.linkedin.com/in/bryancktam/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-300 hover:text-stone-600 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={15} />
          </a>
          <a
            href="mailto:bryancktam@gmail.com"
            className="text-stone-300 hover:text-stone-600 transition-colors"
            aria-label="Email"
          >
            <MailIcon size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
