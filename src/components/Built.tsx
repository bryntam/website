import splitBillsImg from '../img/splitbills.jpeg';
import playMahjongImg from '../img/playmahjong-live.png';
import { ArrowUpRightIcon } from './icons';

interface Project {
  num: string;
  name: string;
  description: string;
  stack: string;
  link: string;
  visual: 'splitbills' | 'mahjong';
}

const projects: Project[] = [
  {
    num: '01',
    name: 'SplitBills',
    description:
      'An iOS app that makes shared expenses easier to track, settle, and understand.',
    stack: 'React Native · Firebase · Expo Router',
    link: 'https://www.splitbillsapp.com',
    visual: 'splitbills',
  },
  {
    num: '02',
    name: 'playmahjong.app',
    description:
      'A modern way to learn and play mahjong online, designed to get a table started in seconds.',
    stack: 'React · Python',
    link: 'https://www.playmahjong.app',
    visual: 'mahjong',
  },
];

const ProjectVisual = ({ project }: { project: Project }) => {
  if (project.visual === 'splitbills') {
    return (
      <div className="aspect-[16/10] overflow-hidden bg-[#ebeaf0]">
        <img
          src={splitBillsImg}
          alt="SplitBills product preview"
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.015]"
        />
      </div>
    );
  }

  return (
    <div className="aspect-[16/10] overflow-hidden bg-[#11130f]">
      <img
        src={playMahjongImg}
        alt="playmahjong.app homepage"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
      />
    </div>
  );
};

const ProjectFeature = ({ project }: { project: Project }) => (
  <article className="border-t border-[#d7d6d1] py-10 last:border-b sm:py-12 lg:py-14">
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group grid items-center gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16"
    >
      <div className="flex h-full flex-col justify-between lg:min-h-[22rem]">
        <div>
          <div className="mb-12 text-[11px] uppercase tracking-[0.16em] text-stone-500 lg:mb-0">
            <span>{project.num}</span>
          </div>

          <div className="mt-auto lg:pt-20">
            <h3 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[0.95] tracking-[-0.055em] text-[#0b0d0c]">
              {project.name}
            </h3>
            <p className="mt-5 max-w-md text-base leading-relaxed text-stone-600">
              {project.description}
            </p>
          </div>
        </div>

        <div className="mt-8 flex items-end justify-between gap-5 lg:mt-10">
          <p className="text-xs leading-relaxed text-stone-500">{project.stack}</p>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-stone-300 text-stone-700 transition-colors duration-300 group-hover:border-[#0b0d0c] group-hover:bg-[#0b0d0c] group-hover:text-white">
            <ArrowUpRightIcon size={15} />
          </span>
        </div>
      </div>

      <ProjectVisual project={project} />
    </a>
  </article>
);

const Built = () => {
  return (
    <section id="built" className="fade-section bg-[#f4f3ef] py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid gap-8 pb-16 md:grid-cols-[0.65fr_1.35fr] md:items-end md:pb-20">
          <div>
            <p className="mb-5 text-[11px] uppercase tracking-[0.18em] text-stone-500">
              01 /
            </p>
            <h2 className="font-display text-[clamp(4rem,9vw,7.5rem)] font-medium leading-[0.82] tracking-[-0.07em] text-[#0b0d0c]">
              Built.
            </h2>
          </div>
          <p className="max-w-xl text-xl leading-snug tracking-[-0.025em] text-stone-600 md:justify-self-end md:text-2xl">
            Digital products I’ve taken from an idea to something people can use.
          </p>
        </div>

        <div>
          {projects.map((project) => (
            <ProjectFeature key={project.num} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Built;
