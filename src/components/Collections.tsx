import React from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import { useGems, useFeaturedGems } from '../hooks/useGems';
import { Gem } from '../types/gem';

const Collections = () => {
  const { gems, loading: allGemsLoading, error: allGemsError } = useGems();
  const { featuredGems, loading: featuredLoading, error: featuredError } = useFeaturedGems();

  const getCategoryDisplayName = (category: string): string => {
    const categoryMap: Record<string, string> = {
      'royal-blue': 'Royal Blue Sapphires',
      'padparadscha': 'Padparadscha Sapphires',
      'yellow': 'Yellow Sapphires',
      'pink': 'Pink Sapphires',
      'white': 'White Sapphires',
      'star': 'Star Sapphires',
    };
    return categoryMap[category] || category;
  };

  const getImageUrl = (gem: Gem): string => {
    if (gem.image?.sizes?.card?.url) {
      return `http://localhost:3001${gem.image.sizes.card.url}`;
    }
    if (gem.image?.url) {
      return `http://localhost:3001${gem.image.url}`;
    }
    // Fallback to placeholder
    return 'https://images.pexels.com/photos/1721935/pexels-photo-1721935.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop';
  };

  if (featuredLoading || allGemsLoading) {
    return (
      <section id="shop-sapphires" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-64">
            <Loader2 className="w-8 h-8 animate-spin text-blue-700" />
            <span className="ml-2 text-slate-600">Loading collections...</span>
          </div>
        </div>
      </section>
    );
  }

  if (featuredError || allGemsError) {
    return (
      <section id="shop-sapphires" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-red-600">Error loading collections: {featuredError || allGemsError}</p>
          </div>
        </div>
      </section>
    );
  }

  // Group non-featured gems by category
  const nonFeaturedGems = gems.filter(gem => !gem.featured);
  const gemsByCategory = nonFeaturedGems.reduce((acc, gem) => {
    if (!acc[gem.category]) {
      acc[gem.category] = [];
    }
    acc[gem.category].push(gem);
    return acc;
  }, {} as Record<string, Gem[]>);

  return (
    <section id="shop-sapphires" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Our Collections
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Each sapphire in our collection represents the pinnacle of Ceylon's gemological heritage, 
            carefully selected for its exceptional beauty and authenticity.
          </p>
        </div>

        {/* Featured Collections */}
        {featuredGems.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredGems.map((gem) => (
              <div 
                key={gem.id}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={getImageUrl(gem)}
                    alt={gem.image?.alt || gem.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                  {!gem.inStock && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Sold
                    </div>
                  )}
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">{gem.name}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{gem.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-semibold text-blue-700">{gem.price}</span>
                    <button className="group/btn bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl">
                      View Details
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                  {gem.weight && (
                    <p className="text-sm text-slate-500 mt-2">{gem.weight} carats</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Regular Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(gemsByCategory).map(([category, categoryGems]) => {
            // Show first gem from each category
            const representativeGem = categoryGems[0];
            if (!representativeGem) return null;

            return (
              <div 
                key={category}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={getImageUrl(representativeGem)}
                    alt={representativeGem.image?.alt || representativeGem.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2 bg-white/90 text-slate-700 px-2 py-1 rounded text-xs font-medium">
                    {categoryGems.length} available
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    {getCategoryDisplayName(category)}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">{representativeGem.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-blue-700">{representativeGem.price}</span>
                    <button className="text-blue-700 hover:text-blue-800 font-semibold text-sm transition-colors duration-200">
                      View →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-6">
            Can't find exactly what you're looking for?
          </p>
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Request Custom Sapphire
          </button>
        </div>
      </div>
    </section>
  );
};

export default Collections;