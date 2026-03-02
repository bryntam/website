interface Role {
  org: string;
  title: string;
  period: string;
  description: string;
}

const roles: Role[] = [
  {
    org: 'TD Bank',
    title: 'Innovation Consultant',
    period: '2024',
    description:
      'Analyzed the TD × Roblox partnership, identifying innovation opportunities through primary and secondary research. Developed strategic recommendations that were accepted and executed by the leadership team.',
  },
  {
    org: 'Cantonese Speaking Club of UofT',
    title: 'Vice President',
    period: '2023 – Present',
    description:
      "Leading one of UofT's active cultural organizations — organizing events, managing a team, and fostering community among Cantonese-speaking students on campus.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 fade-section">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-display text-4xl text-stone-900 mb-2">Experience</h2>
        <p className="text-sm text-stone-400 mb-12">Where I've spent my time.</p>

        <div className="space-y-12">
          {roles.map((role, i) => (
            <div
              key={role.org}
              className={`grid grid-cols-1 md:grid-cols-[180px_1fr] gap-3 md:gap-12 ${
                i < roles.length - 1 ? 'pb-12 border-b border-stone-100' : ''
              }`}
            >
              <div className="pt-0.5">
                <p className="text-xs text-orange-400 tabular-nums">{role.period}</p>
              </div>
              <div>
                <h3 className="text-stone-900 font-medium text-sm mb-0.5">{role.title}</h3>
                <p className="text-sm text-stone-400 mb-3">{role.org}</p>
                <p className="text-sm text-stone-600 leading-relaxed max-w-lg">{role.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
