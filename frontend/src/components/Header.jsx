import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_hellokidney-preview/artifacts/ju8d0ytr_logo_hk.png" 
              alt="HelloKidney.ai" 
              className="h-8 w-auto"
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
                  <button className="flex items-center space-x-1 text-white hover:text-[#FA2931] font-medium transition-colors py-2">
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
                  className={`text-white hover:text-[#FA2931] font-medium transition-colors ${
                    isActive(item.path) ? 'text-[#FA2931]' : ''
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/contact">
              <Button variant="ghost" className="text-white hover:text-[#FA2931] hover:bg-white/10 font-medium">
                Talk to Sales
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="bg-[#FA2931] hover:bg-[#d91f27] text-white font-semibold px-6 rounded-lg shadow-sm">
                Request a Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10 bg-[#0E1833]/95 backdrop-blur-lg rounded-b-lg">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item, index) => (
                item.dropdown ? (
                  <div key={index}>
                    <div className="px-4 py-2 text-sm font-semibold text-white">{item.name}</div>
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block pl-8 pr-4 py-2 text-sm transition-colors ${
                          isActive(subItem.path)
                            ? 'text-[#FA2931] font-medium'
                            : 'text-gray-300 hover:text-white'
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
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <div className="pt-4 px-4 space-y-2">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">
                    Talk to Sales
                  </Button>
                </Link>
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
