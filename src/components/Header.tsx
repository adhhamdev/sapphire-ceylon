import React, { useState, useEffect } from 'react';
import { Menu, X, User, Search, ShoppingBag } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    'Shop Sapphires',
    'Custom Jewellery', 
    'Ceylon Heritage',
    'Certification',
    'About Us',
    'Contact'
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl lg:text-3xl font-bold text-slate-800 tracking-tight">
              SAPPHIRE
              <span className="block text-sm font-normal text-blue-700 tracking-widest">
                CEYLON
              </span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-slate-700 hover:text-blue-700 transition-colors duration-200 font-medium text-sm tracking-wide"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="p-2 text-slate-600 hover:text-blue-700 transition-colors duration-200">
              <Search size={20} />
            </button>
            <button className="p-2 text-slate-600 hover:text-blue-700 transition-colors duration-200">
              <User size={20} />
            </button>
            <button className="p-2 text-slate-600 hover:text-blue-700 transition-colors duration-200">
              <ShoppingBag size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-slate-600 hover:text-blue-700 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-white shadow-lg border-t">
            <nav className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block text-slate-700 hover:text-blue-700 transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="flex items-center space-x-6 pt-4 border-t">
                <button className="text-slate-600 hover:text-blue-700 transition-colors duration-200">
                  <Search size={20} />
                </button>
                <button className="text-slate-600 hover:text-blue-700 transition-colors duration-200">
                  <User size={20} />
                </button>
                <button className="text-slate-600 hover:text-blue-700 transition-colors duration-200">
                  <ShoppingBag size={20} />
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;