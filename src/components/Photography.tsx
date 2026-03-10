import photo1 from '../img/photography/DSCF0031.JPG';
import photo2 from '../img/photography/DSCF0294.JPG';
import photo3 from '../img/photography/DSCF0296.JPG';
import photo4 from '../img/photography/DSCF0500 (1).JPG';
import photo5 from '../img/photography/DSCF0595.JPG';
import photo6 from '../img/photography/DSCF0663.JPG';
import photo7 from '../img/photography/DSCF0671.JPG';

const photos = [
  { src: photo1 },
  { src: photo2 },
  { src: photo3 },
  { src: photo4 },
  { src: photo5 },
  { src: photo6 },
  { src: photo7 },
];

const Photography = () => (
  <section id="photography" className="py-24 fade-section">
    <div className="max-w-5xl mx-auto px-6 mb-12">
      <h2 className="font-display text-4xl text-stone-900 mb-2">Photography</h2>
      <p className="text-sm text-stone-400">A few frames from around.</p>
    </div>
    <div className="w-full">
      <div className="columns-1 sm:columns-2 gap-0">
        {photos.map((photo, i) => (
          <div key={i} className="group break-inside-avoid overflow-hidden bg-stone-100">
            <img
              src={photo.src}
              alt={`Photo ${i + 1}`}
              className="w-full h-auto block transition-all duration-500 ease-out group-hover:scale-[1.03] group-hover:brightness-90"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Photography;
