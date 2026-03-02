import boxingImg from '../img/boxing.jpeg';

const Highlights = () => {
  return (
    <section id="highlights" className="py-24 fade-section">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-display text-4xl text-stone-900 mb-2">Highlights</h2>
        <p className="text-sm text-stone-400 mb-10">A few things I'm proud of.</p>

        <div className="rounded-2xl overflow-hidden border border-stone-100 mx-auto w-fit">
          {/* Let the image define its own natural width */}
          <img
            src={boxingImg}
            alt="Bryan Tam boxing"
            className="block max-h-[640px] w-auto"
          />

          {/* Caption */}
          <div className="px-6 py-5 flex items-start justify-between gap-6">
            <div>
              <h3 className="text-stone-900 font-medium mb-0.5">Charity Boxing — Won</h3>
              <p className="text-sm text-stone-400">White Collar Boxing Event</p>
              <p className="text-sm text-stone-600 leading-relaxed mt-3 max-w-sm">
                Trained and competed in a charity boxing event, winning my fight.
                Together we raised over{' '}
                <span className="text-orange-500 font-medium">$4,000</span> for a great cause.
              </p>
            </div>
            <p className="text-xs text-orange-400 tabular-nums shrink-0 pt-0.5">2024</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
