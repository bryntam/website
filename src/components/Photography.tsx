import photo1 from '../img/photography/DSCF0031.JPG';
import photo2 from '../img/photography/DSCF0294.JPG';
import photo3 from '../img/photography/DSCF0296.JPG';
import photo4 from '../img/photography/DSCF0500 (1).JPG';
import photo5 from '../img/photography/DSCF0595.JPG';
import photo6 from '../img/photography/DSCF0663.JPG';
import photo7 from '../img/photography/DSCF0671.JPG';

const photos = [
  { src: photo1, alt: 'A quiet city street framed by blue sky' },
  { src: photo2, alt: 'People looking across the water toward the skyline' },
  { src: photo3, alt: 'A textured rocky landscape' },
  { src: photo4, alt: 'A sunlit tree beside a waterfront path' },
  { src: photo5, alt: 'A snow-covered shoreline beneath an overcast sky' },
  { src: photo6, alt: 'City lights seen at night' },
  { src: photo7, alt: 'A bright landscape viewed through green railings' },
];

const PhotoFrame = ({
  photo,
  className = '',
}: {
  photo: (typeof photos)[number];
  className?: string;
}) => (
  <figure className={`group overflow-hidden bg-stone-200 ${className}`}>
    <img
      src={photo.src}
      alt={photo.alt}
      className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.015] group-hover:brightness-[0.96]"
    />
  </figure>
);

const Photography = () => (
  <section id="photography" className="fade-section bg-[#f4f3ef] py-28 md:py-36">
    <div className="mx-auto max-w-6xl px-6 sm:px-8">
      <div className="pb-14 md:pb-20">
        <p className="mb-5 text-[11px] uppercase tracking-[0.18em] text-stone-500">
          05 /
        </p>
        <h2 className="font-display text-[clamp(3.7rem,8vw,7rem)] font-medium leading-[0.84] tracking-[-0.07em] text-[#0b0d0c]">
          Photography.
        </h2>
      </div>

      <div className="space-y-3 border-y border-[#d7d6d1] py-3 md:space-y-4 md:py-4">
        <div className="grid gap-3 md:grid-cols-[1.35fr_0.65fr] md:gap-4">
          <PhotoFrame photo={photos[0]} className="aspect-[3/2]" />
          <PhotoFrame photo={photos[1]} className="aspect-[4/5] md:aspect-auto" />
        </div>

        <div className="grid gap-3 md:grid-cols-[0.65fr_1.35fr] md:gap-4">
          <PhotoFrame photo={photos[2]} className="aspect-[4/5] md:aspect-auto" />
          <PhotoFrame photo={photos[3]} className="aspect-[3/2]" />
        </div>

        <PhotoFrame photo={photos[4]} className="aspect-[3/2] md:aspect-[16/7]" />

        <div className="grid gap-3 md:grid-cols-[1.2fr_0.8fr] md:gap-4">
          <PhotoFrame photo={photos[5]} className="aspect-[3/2]" />
          <PhotoFrame photo={photos[6]} className="aspect-[4/5] md:aspect-auto" />
        </div>
      </div>
    </div>
  </section>
);

export default Photography;
