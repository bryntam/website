import { ArrowUpRightIcon } from './icons';

interface Project {
  num: string;
  name: string;
  description: string;
  tags: string[];
  link?: string;
}

const projects: Project[] = [
  {
    num: '01',
    name: 'SplitBills',
    description: 'iOS app to split expenses among friends, track payments, and settle up.',
    tags: ['React Native', 'Firebase', 'Expo Router'],
    link: 'https://www.splitbillsapp.com',
  },
  {
    num: '02',
    name: 'playmahjong.app',
    description: 'Created a mordern majong site to play mahjong.',
    tags: ['React', 'Python'],
    link: 'https://www.playmahjong.app',
  }
];

const ProjectRow = ({ project }: { project: Project }) => {
  const inner = (
    <div className="flex items-start gap-6 py-6 rounded-lg transition-colors group-hover:bg-stone-50 -mx-3 px-3">
      <span className="text-xs text-orange-400 font-mono pt-0.5 w-5 shrink-0 select-none">
        {project.num}
      </span>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 mb-1.5">
          <h3 className="text-stone-900 font-medium text-sm">{project.name}</h3>
          {project.link && (
            <span className="text-stone-300 opacity-0 group-hover:opacity-100 group-hover:text-stone-600 transition-all shrink-0">
              <ArrowUpRightIcon size={13} />
            </span>
          )}
        </div>
        <p className="text-sm text-stone-500 leading-relaxed mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="group border-t border-stone-100 last:border-b">
      {project.link ? (
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          {inner}
        </a>
      ) : (
        <div>{inner}</div>
      )}
    </div>
  );
};

const Built = () => {
  return (
    <section id="built" className="py-24 fade-section">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-display text-4xl text-stone-900 mb-2">Built</h2>
        <p className="text-sm text-stone-400 mb-10">Things I've made.</p>
        <div>
          {projects.map((p) => (
            <ProjectRow key={p.num} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Built;
