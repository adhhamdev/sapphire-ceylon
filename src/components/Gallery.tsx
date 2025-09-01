import React, { useState } from 'react';
import { X, Loader2 } from 'lucide-react';
import { useGems } from '../hooks/useGems';
import { Gem } from '../types/gem';

const Gallery = () => {
  const { gems, loading, error } = useGems();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const getImageUrl = (gem: Gem): string => {
    if (gem.image?.sizes?.card?.url) {
      return `http://localhost:3001${gem.image.sizes.card.url}`;
    }
    if (gem.image?.url) {
      return `http://localhost:3001${gem.image.url}`;
    }
    return 'https://images.pexels.com/photos/1721935/pexels-photo-1721935.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop';
  };

  const getHighResImageUrl = (gem: Gem): string => {
    if (gem.image?.sizes?.hero?.url) {
      return `http://localhost:3001${gem.image.sizes.hero.url}`;
    }
    if (gem.image?.url) {
      return `http://localhost:3001${gem.image.url}`;
    }
    return getImageUrl(gem);
  };

  if (loading) {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-64">
            <Loader2 className="w-8 h-8 animate-spin text-blue-700" />
            <span className="ml-2 text-slate-600">Loading gallery...</span>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-red-600">Error loading gallery: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  // Take first 6 gems for gallery display
  const galleryGems = gems.slice(0, 6);

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

        {galleryGems.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-slate-600">No gems available in the gallery at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryGems.map((gem) => (
              <div 
                key={gem.id}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
                onClick={() => setSelectedImage(getHighResImageUrl(gem))}
              >
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img 
                    src={getImageUrl(gem)}
                    alt={gem.image?.alt || gem.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                      <span className="text-slate-800 font-semibold">View Details</span>
                    </div>
                  </div>
                  {gem.featured && (
                    <div className="absolute top-4 right-4 bg-amber-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      Featured
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-800 text-center mb-2">
                    {gem.name}
                  </h3>
                  {gem.weight && (
                    <p className="text-sm text-slate-500 text-center">{gem.weight} carats</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

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