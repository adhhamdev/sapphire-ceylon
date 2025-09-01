import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: 'https://images.pexels.com/photos/1721935/pexels-photo-1721935.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      alt: 'Blue Ceylon Sapphire',
      title: '15.2ct Royal Blue Sapphire'
    },
    {
      src: 'https://images.pexels.com/photos/1454671/pexels-photo-1454671.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      alt: 'Pink Ceylon Sapphire',
      title: '8.7ct Padparadscha Sapphire'
    },
    {
      src: 'https://images.pexels.com/photos/1721946/pexels-photo-1721946.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      alt: 'Yellow Ceylon Sapphire',
      title: '12.1ct Yellow Sapphire'
    },
    {
      src: 'https://images.pexels.com/photos/1454674/pexels-photo-1454674.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      alt: 'Pink Sapphire Ring',
      title: 'Custom Pink Sapphire Ring'
    },
    {
      src: 'https://images.pexels.com/photos/1454672/pexels-photo-1454672.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      alt: 'White Ceylon Sapphire',
      title: '10.5ct White Sapphire'
    },
    {
      src: 'https://images.pexels.com/photos/1454673/pexels-photo-1454673.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      alt: 'Star Sapphire',
      title: 'Rare Star Sapphire'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Gallery of Excellence
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore our curated collection of the finest Ceylon sapphires, each piece representing 
            the pinnacle of natural beauty and craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <span className="text-slate-800 font-semibold">View Details</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-800 text-center">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
              >
                <X size={32} />
              </button>
              <img 
                src={selectedImage}
                alt="Selected sapphire"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;