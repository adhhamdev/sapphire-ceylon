import React from 'react';
import { Award, Globe, Users, Gem } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'Certified Excellence',
      description: 'Every sapphire comes with international gemological certification'
    },
    {
      icon: Globe,
      title: 'Sri Lankan Heritage',
      description: 'Direct sourcing from the legendary mines of Ceylon'
    },
    {
      icon: Users,
      title: 'Expert Craftsmen',
      description: 'Three generations of gemstone expertise and craftsmanship'
    },
    {
      icon: Gem,
      title: 'Exceptional Quality',
      description: 'Hand-selected for color, clarity, and brilliance'
    }
  ];

  return (
    <section id="about-us" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            The Ceylon Sapphire Legacy
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            For over 2,000 years, the island of Ceylon (now Sri Lanka) has been renowned as the world's most prestigious source of sapphires. Our family business continues this tradition, bringing you the finest gems with unmatched beauty and authenticity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center group hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-700 rounded-full mb-6 group-hover:bg-blue-700 group-hover:text-white transition-all duration-300">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12 flex items-center">
              <div>
                <h3 className="text-3xl font-bold text-slate-800 mb-6">
                  Why Ceylon Sapphires?
                </h3>
                <div className="space-y-4 text-slate-600">
                  <p className="leading-relaxed">
                    Ceylon sapphires are renowned worldwide for their exceptional color saturation, remarkable clarity, and brilliant sparkle. The unique geological conditions of Sri Lanka produce sapphires with an unmatched vibrancy that sets them apart from gems found anywhere else on Earth.
                  </p>
                  <p className="leading-relaxed">
                    Our direct relationships with miners and cutting facilities ensure that every sapphire meets our exacting standards for quality, authenticity, and ethical sourcing.
                  </p>
                </div>
                <button className="mt-8 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Learn More About Our Process
                </button>
              </div>
            </div>
            <div className="relative h-64 lg:h-auto">
              <img 
                src="https://images.pexels.com/photos/1454671/pexels-photo-1454671.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Ceylon sapphire mining"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;