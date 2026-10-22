import boxingImg from '../img/boxing.jpeg';
import halfMarathonImg from '../img/toronto-waterfront-half-marathon.jpg';

const Highlights = () => {
  return (
    <section id="athletics" className="fade-section overflow-hidden bg-[#0a0c0b] py-28 text-white md:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="pb-14 md:pb-20">
          <p className="mb-5 text-[11px] uppercase tracking-[0.18em] text-white/45">
            04 /
          </p>
          <h2 className="font-display text-[clamp(3.7rem,8vw,7rem)] font-medium leading-[0.84] tracking-[-0.07em]">
            Athletics.
          </h2>
        </div>

        <div className="grid overflow-hidden border-y border-white/20 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="relative aspect-[16/11] overflow-hidden bg-white/5 lg:aspect-square">
            <img
              src={boxingImg}
              alt="Bryan Tam competing in a charity boxing event"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-[50%_68%] grayscale-[12%] contrast-[1.03]"
            />
          </div>

          <div className="flex flex-col justify-center border-t border-white/20 py-10 lg:border-l lg:border-t-0 lg:px-10 lg:py-12 xl:px-12 xl:py-14">
            <time dateTime="2026-01-17" className="text-sm tabular-nums tracking-[0.06em] text-white/45">
              January 17, 2026
            </time>

            <h3 className="mt-4 max-w-[12ch] font-display text-[clamp(2rem,3vw,2.75rem)] font-medium leading-[1.08] tracking-[-0.045em]">
              Charity boxing
            </h3>

            <dl className="mt-6 grid grid-cols-2 gap-5">
              <div className="flex flex-col">
                <dt className="order-2 mt-2 text-sm leading-relaxed text-white/60">
                  Months training
                </dt>
                <dd className="font-display text-3xl font-medium leading-none tracking-[-0.035em]">
                  8
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="order-2 mt-2 text-sm leading-relaxed text-white/60">
                  Raised together
                </dt>
                <dd className="font-display text-3xl font-medium leading-none tracking-[-0.035em]">
                  $4K+
                </dd>
              </div>
            </dl>

            <p className="mt-8 border-t border-white/20 pt-8 text-base leading-[1.65] text-white/60 sm:text-lg">
              I started as a complete beginner, trained for eight months, and competed in a charity boxing event that raised money for a great cause.
            </p>
          </div>
        </div>

        <article
          id="half-marathon"
          aria-labelledby="half-marathon-title"
          className="mt-12 grid scroll-mt-28 overflow-hidden border-y border-white/20 md:mt-16 lg:grid-cols-[1.25fr_0.75fr]"
        >
          <div className="relative aspect-[16/11] overflow-hidden bg-white/5 lg:aspect-square">
            <img
              src={halfMarathonImg}
              alt="Bryan Tam wearing his finisher medal after the Toronto Waterfront Half Marathon"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-[60%_50%]"
            />
          </div>

          <div className="flex flex-col justify-center border-t border-white/20 py-10 lg:border-l lg:border-t-0 lg:px-10 lg:py-12 xl:px-12 xl:py-14">
            <time dateTime="2026-10-18" className="text-sm tabular-nums tracking-[0.06em] text-white/45">
              October 18, 2026
            </time>

            <h3 id="half-marathon-title" className="mt-4 font-display text-[clamp(2rem,3vw,2.75rem)] font-medium leading-[1.08] tracking-[-0.045em]">
              Toronto Waterfront <span className="whitespace-nowrap">Half Marathon</span>
            </h3>

            <dl className="mt-8 border-t border-white/20 pt-8">
              <div className="flex flex-col">
                <dt className="order-2 mt-2 text-sm leading-relaxed text-white/60">
                  Finish time
                </dt>
                <dd className="font-display text-3xl font-medium tabular-nums leading-none tracking-[-0.035em]">
                  1:54:26
                </dd>
              </div>
            </dl>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Highlights;
