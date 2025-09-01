import React from 'react';
import { ArrowRight } from 'lucide-react';

const Collections = () => {
  const collections = [
    {
      name: 'Royal Blue Sapphires',
      description: 'The most coveted Ceylon sapphires with deep, velvety blue hues',
      image: 'https://images.pexels.com/photos/1721935/pexels-photo-1721935.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      price: 'From $2,500',
      featured: true
    },
    {
      name: 'Padparadscha Sapphires',
      description: 'Rare pink-orange sapphires exclusive to Ceylon',
      image: 'https://images.pexels.com/photos/1454671/pexels-photo-1454671.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      price: 'From $5,000',
      featured: true
    },
    {
      name: 'Yellow Sapphires',
      description: 'Brilliant golden Ceylon sapphires with exceptional clarity',
      image: 'https://images.pexels.com/photos/1721946/pexels-photo-1721946.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      price: 'From $1,800',
      featured: false
    },
    {
      name: 'Pink Sapphires',
      description: 'Delicate and feminine pink Ceylon sapphires',
      image: 'https://images.pexels.com/photos/1454674/pexels-photo-1454674.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      price: 'From $3,200',
      featured: false
    },
    {
      name: 'White Sapphires',
      description: 'Pure and brilliant colorless Ceylon sapphires',
      image: 'https://images.pexels.com/photos/1454672/pexels-photo-1454672.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      price: 'From $900',
      featured: false
    },
    {
      name: 'Star Sapphires',
      description: 'Rare asterism phenomena in Ceylon sapphires',
      image: 'https://images.pexels.com/photos/1454673/pexels-photo-1454673.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      price: 'From $4,500',
      featured: false
    }
  ];

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {collections.filter(collection => collection.featured).map((collection, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{collection.name}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{collection.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-semibold text-blue-700">{collection.price}</span>
                  <button className="group/btn bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl">
                    View Collection
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Regular Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.filter(collection => !collection.featured).map((collection, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{collection.name}</h3>
                <p className="text-slate-600 text-sm mb-4">{collection.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-blue-700">{collection.price}</span>
                  <button className="text-blue-700 hover:text-blue-800 font-semibold text-sm transition-colors duration-200">
                    View →
                  </button>
                </div>
              </div>
            </div>
          ))}
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