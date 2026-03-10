import photo1 from '../img/photography/DSCF0031.JPG';
import photo2 from '../img/photography/DSCF0294.JPG';
import photo3 from '../img/photography/DSCF0296.JPG';
import photo4 from '../img/photography/DSCF0500 (1).JPG';
import photo5 from '../img/photography/DSCF0595.JPG';
import photo6 from '../img/photography/DSCF0663.JPG';
import photo7 from '../img/photography/DSCF0671.JPG';

const photos = [
  { src: photo1, aspect: 'aspect-[3/4]' },
  { src: photo2, aspect: 'aspect-[4/3]' },
  { src: photo3, aspect: 'aspect-[1/1]' },
  { src: photo4, aspect: 'aspect-[4/3]' },
  { src: photo5, aspect: 'aspect-[3/4]' },
  { src: photo6, aspect: 'aspect-[4/3]' },
  { src: photo7, aspect: 'aspect-[1/1]' },
];

const Photography = () => (
  <section id="photography" className="py-24 fade-section">
    <div className="max-w-5xl mx-auto px-6 mb-12">
      <h2 className="font-display text-4xl text-stone-900 mb-2">Photography</h2>
      <p className="text-sm text-stone-400">A few frames from around.</p>
    </div>
    <div className="max-w-6xl mx-auto px-4 md:px-6">
      <div className="columns-2 md:columns-3 gap-2">
        {photos.map((photo, i) => (
          <div key={i} className="group break-inside-avoid mb-2 overflow-hidden bg-stone-100">
            <div className={`${photo.aspect} w-full overflow-hidden`}>
              <img
                src={photo.src}
                alt={`Photo ${i + 1}`}
                className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-[1.03] group-hover:brightness-90"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Photography;
