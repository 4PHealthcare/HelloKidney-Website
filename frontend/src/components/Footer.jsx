import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'For Healthcare Providers', path: '/providers' },
    { name: 'For Programs & Governments', path: '/programs' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="bg-[#0E1833] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Logo and Description */}
        <div className="mb-8">
          <div className="text-2xl font-bold text-[#FA2931] mb-4">HelloKidney.ai</div>
          <p className="text-gray-300 max-w-2xl text-sm leading-relaxed">
            Early chronic kidney disease screening platform using urine ACR and eGFR for healthcare providers and public health programs.
          </p>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {footerLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-gray-300 hover:text-[#FA2931] transition-colors duration-200 text-sm"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/privacy"
            className="text-gray-300 hover:text-[#FA2931] transition-colors duration-200 text-sm"
          >
            Privacy
          </Link>
          <Link
            to="/terms"
            className="text-gray-300 hover:text-[#FA2931] transition-colors duration-200 text-sm"
          >
            Terms
          </Link>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <p className="text-xs text-gray-400 leading-relaxed max-w-5xl">
            <strong>Disclaimer:</strong> HelloKidney.ai is intended to support kidney health screening and clinical decision‑making and does not replace professional medical advice, diagnosis or treatment. All test results and risk classifications must be reviewed and interpreted by qualified healthcare professionals according to local clinical guidelines.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} HelloKidney.ai. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
