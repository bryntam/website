interface Role {
  org: string;
  title: string;
  period: string;
}

const roles: Role[] = [
  {
    org: 'Scotiabank',
    title: 'Business Systems Analyst',
    period: '2025 – Present',
  },
  {
    org: 'Cantonese Speaking Club of UofT',
    title: 'Vice President',
    period: '2024 – 2025',
  },
  {
    org: 'AIA',
    title: 'Data Analyst Intern',
    period: '2023',
  },
  {
    org: 'Hong Kong Trade Development Council',
    title: 'Event Management Intern',
    period: '2022',
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
                <p className="text-sm text-stone-400">{role.org}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
