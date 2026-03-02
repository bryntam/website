import graduationImg from '../img/graduation.jpg';

const Education = () => {
  return (
    <section id="education" className="py-24 fade-section">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-display text-4xl text-stone-900 mb-2">Education</h2>
        <p className="text-sm text-stone-400 mb-10">Where I studied.</p>

        <div className="rounded-2xl overflow-hidden border border-stone-100 mx-auto w-fit">
          {/* Let the image define its own natural width */}
          <img
            src={graduationImg}
            alt="Bryan Tam at graduation"
            className="block max-h-[640px] w-auto"
          />

          {/* Caption */}
          <div className="px-6 py-5 flex items-start justify-between gap-6">
            <div>
              <h3 className="text-stone-900 font-medium mb-0.5">University of Toronto</h3>
              <p className="text-sm text-stone-400">IT · Bachelor of Business Administration</p>
              <p className="text-sm text-stone-600 leading-relaxed mt-3 max-w-sm">
                Studied Computer Science and Management, with a focus on software development and management strategy.
              </p>
            </div>
            <p className="text-xs text-orange-400 tabular-nums shrink-0 pt-0.5">2021 – 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
