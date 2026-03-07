import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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

  const navItems = [
    {
      name: 'Solutions',
      dropdown: [
        { name: 'For Healthcare Providers', path: '/providers' },
        { name: 'For Programs & Governments', path: '/programs' }
      ]
    },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-md' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - switches between white and colored versions */}
          <Link to="/" className="flex items-center">
            <img 
              src={isScrolled 
                ? "https://customer-assets.emergentagent.com/job_hellokidney-preview/artifacts/bsr81dag_logo_color.png"
                : "https://customer-assets.emergentagent.com/job_hellokidney-preview/artifacts/bsr81dag_logo_color.png"
              }
              alt="HelloKidney.ai" 
              className={`h-8 w-auto transition-all duration-300 ${!isScrolled ? 'brightness-0 invert' : ''}`}
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
                    isScrolled 
                      ? 'text-gray-700 hover:text-[#FA2931]' 
                      : 'text-white hover:text-[#FA2931]'
                  }`}>
                    <span>{item.name}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {openDropdown === index && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className={`block px-4 py-3 text-sm hover:bg-gray-50 transition-colors ${
                            isActive(subItem.path) ? 'text-[#FA2931] font-medium' : 'text-gray-700'
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium transition-colors ${
                    isActive(item.path) 
                      ? 'text-[#FA2931]' 
                      : isScrolled 
                        ? 'text-gray-700 hover:text-[#FA2931]' 
                        : 'text-white hover:text-[#FA2931]'
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
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 bg-white rounded-b-lg">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item, index) => (
                item.dropdown ? (
                  <div key={index}>
                    <div className="px-4 py-2 text-sm font-semibold text-gray-900">{item.name}</div>
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block pl-8 pr-4 py-2 text-sm transition-colors ${
                          isActive(subItem.path)
                            ? 'text-[#FA2931] font-medium'
                            : 'text-gray-600 hover:text-[#FA2931]'
                        }`}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-2 text-sm transition-colors ${
                      isActive(item.path)
                        ? 'text-[#FA2931] font-medium'
                        : 'text-gray-700 hover:text-[#FA2931]'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <div className="pt-4 px-4">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-[#FA2931] hover:bg-[#d91f27] text-white font-semibold">
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
