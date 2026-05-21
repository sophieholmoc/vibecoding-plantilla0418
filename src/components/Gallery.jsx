import { siteConfig } from "@/config/site";

export default function Gallery() {
  const { heading, subheading, images } = siteConfig.gallery;

  return (
    <section id="gallery" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {heading}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subheading}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative aspect-square overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
