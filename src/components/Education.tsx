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
          <div className="overflow-hidden bg-stone-200">
            <img
              src={graduationImg}
              alt="Bryan Tam celebrating his graduation from the University of Toronto"
              className="aspect-[5/4] h-full w-full object-cover object-[50%_48%]"
            />
          </div>

          <div className="flex flex-col justify-between border-t border-[#cfcec8] px-0 py-8 lg:border-l lg:border-t-0 lg:px-10 lg:py-10 xl:px-12 xl:py-12">
            <div>
              <div className="flex items-center justify-between gap-5 text-[11px] uppercase tracking-[0.16em] text-stone-500">
                <span>University of Toronto</span>
                <span className="tabular-nums">2021—2025</span>
              </div>

              <h3 className="mt-12 max-w-md font-display text-[clamp(2.4rem,4.5vw,4rem)] font-medium leading-[0.95] tracking-[-0.055em] text-[#0b0d0c] lg:mt-20">
                Computer science meets business.
              </h3>

              <p className="mt-6 max-w-md text-base leading-relaxed text-stone-600">
                I took third year level computer science courses alongside my management studies, which helped me approach problems from both the technical and business sides.
              </p>
            </div>

            <dl className="mt-16 grid grid-cols-2 gap-5 border-t border-[#cfcec8] pt-6 lg:mt-20">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.16em] text-stone-500">Degree</dt>
                <dd className="mt-2 text-sm leading-snug text-[#0b0d0c]">
                  Bachelor of Business Administration
                </dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.16em] text-stone-500">Specialization</dt>
                <dd className="mt-2 text-sm leading-snug text-[#0b0d0c]">
                  Information Technology
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
