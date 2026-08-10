import scotiabankLogo from '../img/logos/scotiabank.svg';
import aiaLogo from '../img/logos/aia.svg';
import hktdcLogo from '../img/logos/hktdc.png';
import noveltyLogo from '../img/logos/novelty-cantonese-club.jpg';

interface ProfessionalRole {
  org: string;
  title: string;
  period: string;
  logo: string;
  logoAlt: string;
  logoClassName: string;
}

const professionalRoles: ProfessionalRole[] = [
  {
    org: 'Scotiabank',
    title: 'Business Systems Analyst',
    period: '2025 – Present',
    logo: scotiabankLogo,
    logoAlt: 'Scotiabank',
    logoClassName: 'h-5 w-auto max-w-[112px] md:h-6 md:max-w-[145px]',
  },
  {
    org: 'AIA',
    title: 'Data Analyst Intern',
    period: '2023',
    logo: aiaLogo,
    logoAlt: 'AIA',
    logoClassName: 'h-9 w-auto max-w-[110px]',
  },
  {
    org: 'Hong Kong Trade Development Council',
    title: 'Event Management Intern',
    period: '2022',
    logo: hktdcLogo,
    logoAlt: 'Hong Kong Trade Development Council',
    logoClassName: 'h-16 w-auto mix-blend-multiply md:h-20',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="fade-section bg-[#f4f3ef] py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="pb-14 md:pb-20">
          <p className="mb-5 text-[11px] uppercase tracking-[0.18em] text-stone-500">
            01 /
          </p>
          <h2 className="font-display text-[clamp(3.7rem,8vw,7rem)] font-medium leading-[0.84] tracking-[-0.07em] text-[#0b0d0c]">
            Experience.
          </h2>
        </div>

        <div>
          <p className="border-t border-[#d7d6d1] py-5 text-[10px] uppercase tracking-[0.18em] text-stone-500">
            Professional
          </p>

          <div className="border-y border-[#d7d6d1]">
            {professionalRoles.map((role, index) => (
              <article
                key={role.org}
                className={`grid grid-cols-[112px_1fr] items-center gap-x-5 gap-y-3 py-8 md:grid-cols-[190px_1fr_auto] md:gap-x-12 md:py-10 ${
                  index < professionalRoles.length - 1 ? 'border-b border-[#d7d6d1]' : ''
                }`}
              >
                <div className="flex h-20 items-center">
                  <img
                    src={role.logo}
                    alt={role.logoAlt}
                    className={role.logoClassName}
                  />
                </div>

                <div>
                  <h3 className="text-base font-medium tracking-[-0.015em] text-[#0b0d0c]">
                    {role.title}
                  </h3>
                  <p className="mt-1 text-sm text-stone-500">{role.org}</p>
                </div>

                <p className="col-start-2 text-xs tabular-nums text-stone-500 md:col-auto md:justify-self-end">
                  {role.period}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-16 md:mt-20">
            <p className="border-t border-[#d7d6d1] py-5 text-[10px] uppercase tracking-[0.18em] text-stone-500">
              Volunteer
            </p>

            <div className="grid grid-cols-[112px_1fr] items-center gap-x-5 gap-y-3 border-y border-[#d7d6d1] py-9 md:grid-cols-[190px_1fr_auto] md:gap-x-12 md:py-11">
              <div className="flex h-20 items-center overflow-hidden">
                <img
                  src={noveltyLogo}
                  alt="Novelty Cantonese Students' Association"
                  className="w-full max-w-[92px] mix-blend-multiply md:max-w-[125px]"
                />
              </div>
              <div>
                <h3 className="text-base font-medium tracking-[-0.015em] text-[#0b0d0c]">
                  Vice President
                </h3>
                <p className="mt-1 text-sm text-stone-500">
                  Novelty Cantonese Students’ Association
                </p>
              </div>
              <p className="col-start-2 text-xs tabular-nums text-stone-500 md:col-auto md:justify-self-end">
                2024 – 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
