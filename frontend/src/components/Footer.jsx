import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Twitter, Facebook } from 'lucide-react';

export const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "How It Works", path: "/how-it-works" },
        { name: "For Healthcare Providers", path: "/providers" },
        { name: "For Programs & Governments", path: "/programs" },
        { name: "Security", path: "/about" },
        { name: "FAQ", path: "/faq" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Contact Sales", path: "/contact" },
        { name: "Request Demo", path: "/contact" },
        { name: "Blog", path: "/about" },
        { name: "Case Studies", path: "/about" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About HelloKidney", path: "/about" },
        { name: "Careers", path: "/about" },
        { name: "Partners", path: "/about" },
        { name: "Support", path: "/contact" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Terms of Service", path: "/terms" },
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Data Protection", path: "/privacy" },
        { name: "Compliance", path: "/about" }
      ]
    }
  ];

  return (
    <footer className="relative bg-[#030616] text-white overflow-hidden">
      {/* Top Gradient Background - blends from Enterprise section */}
      <div 
        className="absolute top-0 left-0 right-0 h-80 opacity-30"
        style={{
          backgroundImage: `url('https://customer-assets.emergentagent.com/job_hellokidney-preview/artifacts/lcl3tjjs_6985efd2f97600ced801109e_long%20transition.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          transform: 'rotate(180deg)'
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <div className="text-2xl font-bold bg-gradient-to-r from-[#FA2931] to-[#ff4d4d] bg-clip-text text-transparent">
                HelloKidney.ai
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Early chronic kidney disease screening platform using smartphone urine ACR and eGFR workflows for healthcare providers worldwide.
            </p>
            <a href="mailto:contact@hellokidney.ai" className="text-gray-300 hover:text-[#FA2931] transition-colors text-sm flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>contact@hellokidney.ai</span>
            </a>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4 text-sm">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-[#FA2931] transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-4">
            <p className="text-gray-400 text-sm">© 2026 HelloKidney.ai — All rights reserved.</p>
          </div>

          {/* Social Media Links - Right Side */}
          <div className="flex items-center space-x-4">
            <a href="#" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors border border-white/10">
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors border border-white/10">
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors border border-white/10">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white" />
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-xs text-gray-500 leading-relaxed max-w-5xl">
            <strong className="text-gray-400">Medical Disclaimer:</strong> HelloKidney.ai is intended to support kidney health screening and clinical decision‑making and does not replace professional medical advice, diagnosis or treatment. All test results and risk classifications must be reviewed and interpreted by qualified healthcare professionals according to local clinical guidelines.
          </p>
        </div>
      </div>
    </footer>
  );
};
