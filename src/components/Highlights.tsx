import boxingImg from '../img/boxing.jpeg';

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

        <div className="grid border-y border-white/20 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="overflow-hidden bg-white/5">
            <img
              src={boxingImg}
              alt="Bryan Tam competing in a charity boxing event"
              className="aspect-[16/11] h-full w-full object-cover object-[50%_68%] grayscale-[12%] contrast-[1.03]"
            />
          </div>

          <div className="flex flex-col justify-between border-t border-white/20 py-8 lg:border-l lg:border-t-0 lg:px-10 lg:py-10 xl:px-12 xl:py-12">
            <div>
              <div className="flex items-center justify-between gap-5 text-[11px] uppercase tracking-[0.16em] text-white/45">
                <span>Charity Boxing</span>
                <span className="tabular-nums">2026</span>
              </div>

              <h3 className="mt-12 max-w-md font-display text-[clamp(2.4rem,4.5vw,4rem)] font-medium leading-[0.95] tracking-[-0.055em] lg:mt-20">
                Stepped into the unknown.
              </h3>

              <p className="mt-6 max-w-md text-base leading-relaxed text-white/60">
                I started as a complete beginner, trained for eight months, and competed in a charity boxing event that raised money for a great cause.
              </p>
            </div>

            <dl className="mt-16 grid grid-cols-2 gap-5 border-t border-white/20 pt-6 lg:mt-20">
              <div>
                <dt className="font-display text-[clamp(2rem,4vw,3.5rem)] font-medium leading-none tracking-[-0.05em]">
                  8
                </dt>
                <dd className="mt-2 text-[10px] uppercase tracking-[0.16em] text-white/45">
                  Months training
                </dd>
              </div>
              <div>
                <dt className="font-display text-[clamp(2rem,4vw,3.5rem)] font-medium leading-none tracking-[-0.05em]">
                  $4K+
                </dt>
                <dd className="mt-2 text-[10px] uppercase tracking-[0.16em] text-white/45">
                  Raised together
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
