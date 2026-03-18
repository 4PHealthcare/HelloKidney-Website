import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

export const CTASection = () => {
  return (
    <section className="relative pt-32 pb-32 overflow-hidden bg-[#030616]">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Content Card with Purple/Blue Gradient Background */}
        <div 
          className="relative rounded-3xl overflow-hidden p-12 lg:p-20"
          style={{
            background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 30%, #8b5cf6 60%, #6366f1 100%)'
          }}
        >
          {/* Subtle diagonal lines overlay */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 10px,
                rgba(255,255,255,0.1) 10px,
                rgba(255,255,255,0.1) 20px
              )`
            }}
          ></div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to try HelloKidney?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              HelloKidney.ai automatically captures and streamlines kidney screening workflows. Work smarter and faster. Turn processes into playbooks in seconds.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button className="bg-white hover:bg-gray-100 text-[#030616] text-lg px-10 py-6 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
                  Try HelloKidney free
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10 text-lg px-8 py-6 font-semibold transition-all duration-200">
                  Talk to Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
