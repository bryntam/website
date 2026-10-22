import graduationImg from '../img/graduation.jpg';

const Education = () => {
  return (
    <section id="education" className="fade-section bg-[#ebeae5] py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="pb-14 md:pb-20">
          <p className="mb-5 text-[11px] uppercase tracking-[0.18em] text-stone-500">
            03 /
          </p>
          <h2 className="font-display text-[clamp(3.7rem,8vw,7rem)] font-medium leading-[0.84] tracking-[-0.07em] text-[#0b0d0c]">
            Education.
          </h2>
        </div>

        <div className="grid overflow-hidden border-y border-[#cfcec8] lg:grid-cols-[1.25fr_0.75fr]">
          <div className="relative aspect-[5/4] overflow-hidden bg-stone-200 lg:aspect-square">
            <img
              src={graduationImg}
              alt="Bryan Tam celebrating his graduation from the University of Toronto"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-[50%_48%]"
            />
          </div>

          <div className="flex flex-col justify-center border-t border-[#cfcec8] py-10 lg:border-l lg:border-t-0 lg:px-10 lg:py-12 xl:px-12 xl:py-14">
            <p className="text-sm tabular-nums tracking-[0.06em] text-stone-500">
              2021—2025
            </p>

            <h3 className="mt-4 max-w-[12ch] font-display text-[clamp(2rem,3vw,2.75rem)] font-medium leading-[1.08] tracking-[-0.045em] text-[#0b0d0c]">
              University of Toronto
            </h3>

            <div className="mt-6 space-y-2">
              <p className="text-lg font-medium leading-snug text-[#0b0d0c] sm:text-xl">
                Bachelor of Business Administration
              </p>
              <p className="text-base leading-relaxed text-stone-600">
                Specialization in Information Technology
              </p>
            </div>

            <p className="mt-8 border-t border-[#cfcec8] pt-8 text-base leading-[1.65] text-stone-600 sm:text-lg">
              I took third year level computer science courses alongside my management studies, which helped me approach problems from both the technical and business sides.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
