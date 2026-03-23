import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Pages that have white/light backgrounds and need dark header by default
  const lightBackgroundPages = ['/solutions', '/about', '/how-it-works', '/contact'];
  const isLightPage = lightBackgroundPages.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if header should be dark (scrolled OR on light background page)
  const isDarkHeader = isScrolled || isLightPage;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isDarkHeader 
        ? 'bg-white shadow-md' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - switches between white and colored versions */}
          <Link to="/" className="flex items-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_hellokidney-preview/artifacts/bsr81dag_logo_color.png"
              alt="HelloKidney.ai" 
              className={`w-auto transition-all duration-300 ${!isDarkHeader ? 'brightness-0 invert' : ''}`}
              style={{ height: '1.8rem' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              item.dropdown ? (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(index)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className={`flex items-center space-x-1 font-medium transition-colors py-2 ${
                    isDarkHeader 
                      ? 'text-gray-700 hover:text-[#E1111B]' 
                      : 'text-white hover:text-[#E1111B]'
                  }`}>
                    <span>{item.name}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {openDropdown === index && (
                    <>
                      {/* Invisible bridge to prevent gap */}
                      <div className="absolute top-full left-0 w-full h-2"></div>
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className={`block px-4 py-3 text-sm hover:bg-gray-50 transition-colors ${
                              isActive(subItem.path) ? 'text-[#E1111B] font-medium' : 'text-gray-700'
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-[#E1111B]'
                      : isDarkHeader 
                        ? 'text-gray-700 hover:text-[#E1111B]' 
                        : 'text-white hover:text-[#E1111B]'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center">
            <Link to="/contact">
              <Button className="bg-[#FA2931] hover:bg-[#d91f27] text-white font-semibold px-6 rounded-lg shadow-sm">
                Request a Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isDarkHeader ? 'text-gray-700' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isDarkHeader ? 'text-gray-700' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-white shadow-lg border-t border-gray-100">
            <nav className="flex flex-col py-4">
              {navItems.map((item, index) => (
                item.dropdown ? (
                  <div key={index} className="border-b border-gray-100 last:border-b-0">
                    <div className="px-6 py-3 text-sm font-semibold text-[#0E1833] uppercase tracking-wide">
                      {item.name}
                    </div>
                    <div className="pb-3">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          onClick={() => setIsMenuOpen(false)}
                          className={`block px-8 py-2.5 text-base transition-colors ${
                            isActive(subItem.path)
                              ? 'text-[#E1111B] font-medium bg-red-50'
                              : 'text-gray-600 hover:text-[#E1111B] hover:bg-gray-50'
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-6 py-3 text-base font-medium border-b border-gray-100 last:border-b-0 transition-colors ${
                      isActive(item.path)
                        ? 'text-[#E1111B] bg-red-50'
                        : 'text-[#0E1833] hover:text-[#E1111B] hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <div className="px-6 pt-4 mt-2 border-t border-gray-100">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-[#FA2931] hover:bg-[#d91f27] text-white font-semibold py-3 text-base">
                    Request a Demo
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
