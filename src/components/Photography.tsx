// To add real photos:
// 1. Place your images in src/img/ (e.g., src/img/photo1.jpg)
// 2. Import them at the top of this file:
//    import photo1 from '../img/photo1.jpg';
//    import photo2 from '../img/photo2.jpg';
//    ...
// 3. Replace the placeholder divs below with:
//    <img src={photo1} alt="..." className="w-full h-full object-cover" />

const PHOTO_COUNT = 6;

const Photography = () => {
  return (
    <section id="photography" className="py-24 fade-section">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-display text-4xl text-stone-900 mb-2">Photography</h2>
        <p className="text-sm text-stone-400 mb-10">A few frames from around.</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
          {Array.from({ length: PHOTO_COUNT }).map((_, i) => (
            <div
              key={i}
              className="aspect-[4/3] bg-stone-100 rounded-md overflow-hidden hover:bg-stone-150 transition-colors"
            >
              {/* Replace this div with an <img> tag when you have photos */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Photography;
