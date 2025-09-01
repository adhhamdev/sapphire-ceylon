import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    'Shop Sapphires',
    'Custom Jewellery',
    'Ceylon Heritage',
    'Certification',
    'About Us',
    'Contact'
  ];

  const services = [
    'Gemstone Consultation',
    'Custom Design',
    'Appraisal Services',
    'Investment Gems',
    'Wholesale Inquiries',
    'Certification'
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              SAPPHIRE
              <span className="block text-sm font-normal text-blue-400 tracking-widest">
                CEYLON
              </span>
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Sri Lanka's premier destination for authentic Ceylon sapphires. 
              Three generations of expertise in bringing you the world's finest gems.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors duration-200">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors duration-200">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors duration-200">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#"
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-400 flex-shrink-0" />
                <a 
                  href="mailto:info@sapphireceylon.com"
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-200"
                >
                  info@sapphireceylon.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-400 flex-shrink-0" />
                <a 
                  href="tel:+94112345678"
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-200"
                >
                  +94 11 234 5678
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-blue-400 flex-shrink-0 mt-1" />
                <div className="text-slate-300">
                  <p>123 Gem Palace Road</p>
                  <p>Colombo 03, Sri Lanka</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-slate-800 rounded-lg">
              <h5 className="font-semibold text-blue-400 mb-2">Showroom Hours</h5>
              <p className="text-slate-300 text-sm">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: By appointment only
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2025 Sapphire Ceylon. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200">
                Shipping & Returns
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;