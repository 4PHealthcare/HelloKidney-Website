import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Heart, Users, Globe } from 'lucide-react';
import { CTASection } from '../components/CTASection';

export const About = () => {
  const values = [
    {
      icon: <Target className="h-10 w-10 text-[#FA2931]" />,
      title: "Improving kidney outcomes through early detection",
      description: "We believe that timely screening can prevent progression and save lives by identifying CKD before it reaches advanced stages."
    },
    {
      icon: <Heart className="h-10 w-10 text-[#FA2931]" />,
      title: "Supporting healthcare workers with practical tools",
      description: "Our platform is designed with frontline providers in mind, making sophisticated screening accessible and actionable."
    },
    {
      icon: <Globe className="h-10 w-10 text-[#FA2931]" />,
      title: "Building scalable, secure digital health infrastructure",
      description: "We create technology that works in diverse settings, from urban hospitals to rural screening camps, with uncompromising security."
    },
    {
      icon: <Users className="h-10 w-10 text-[#FA2931]" />,
      title: "Partnering with governments and programs",
      description: "We collaborate with public health initiatives to bring kidney screening to communities that need it most."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative h-[60vh] flex items-center -mt-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://customer-assets.emergentagent.com/job_25f4e8fb-a300-4335-9732-e97354468626/artifacts/eppj4v5h_about_banner.png')`,
          }}
        >
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 pt-32">
          <h1 
            className="font-bold text-[#0E1833] mb-6 leading-tight max-w-4xl mx-auto"
            style={{ fontSize: '3rem', letterSpacing: '-1.5px' }}
          >
            We're on a mission to unleash and uplevel the world's know-how.
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            We are a team of Nephrologists
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <button className="w-full sm:w-auto px-8 py-4 bg-[#FA2931] text-white font-semibold rounded-xl hover:bg-[#d91f27] transition-all duration-300 shadow-lg hover:shadow-xl">
                Try HelloKidney
              </button>
            </Link>
            <Link to="/contact">
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-[#0E1833] font-semibold rounded-xl border-2 border-gray-300 hover:border-[#0E1833] transition-all duration-300">
                Contact Sales
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif italic text-[#0E1833] mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide every decision we make at HelloKidney.
            </p>
          </div>

          {/* Values Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 - Light Blue */}
            <div className="bg-[#E8F4FC] rounded-2xl p-8 min-h-[380px] flex flex-col justify-end transition-transform hover:scale-105 duration-300">
              <h3 className="text-xl font-semibold text-[#0E1833] mb-3 text-center">
                Patient First
              </h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Every decision begins with one question: does this serve the patient better?
              </p>
            </div>

            {/* Card 2 - Light Peach */}
            <div className="bg-[#FEF3E2] rounded-2xl p-8 min-h-[380px] flex flex-col justify-end transition-transform hover:scale-105 duration-300">
              <h3 className="text-xl font-semibold text-[#0E1833] mb-3 text-center">
                Remain Curious
              </h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Stay on the lookout for better ways to serve our partners and their patients.
              </p>
            </div>

            {/* Card 3 - Light Mint */}
            <div className="bg-[#E8F5F0] rounded-2xl p-8 min-h-[380px] flex flex-col justify-end transition-transform hover:scale-105 duration-300">
              <h3 className="text-xl font-semibold text-[#0E1833] mb-3 text-center">
                Collaboration
              </h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                It takes a great team. We trust each other and work together toward shared goals.
              </p>
            </div>

            {/* Card 4 - Light Pink */}
            <div className="bg-[#F9F0F9] rounded-2xl p-8 min-h-[380px] flex flex-col justify-end transition-transform hover:scale-105 duration-300">
              <h3 className="text-xl font-semibold text-[#0E1833] mb-3 text-center">
                Ownership
              </h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Take responsibility, be accountable, and deliver on every promise we make.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0E1833] mb-6">
                The Organisation
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                HelloKidney.ai is developed by a dedicated health-tech team based in Hyderabad, India. We work closely with healthcare partners across India, Kenya, and other low- and middle-income countries (LMICs) where the burden of chronic kidney disease is growing rapidly.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our team combines expertise in digital health, clinical medicine, public health, and software engineering to create solutions that are both clinically sound and practically deployable in resource-constrained settings.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe that technology should serve healthcare workers and patients, not the other way around. Every feature we build is tested in real-world clinical environments to ensure it meets the needs of frontline providers.
              </p>
            </div>
            <div 
              className="rounded-2xl shadow-2xl h-96 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1656009178152-1e4402050560')`,
              }}
            >
              <div className="h-full w-full bg-gradient-to-t from-[#0E1833]/40 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Values Section - Redesigned */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0E1833] mb-12">
            Our values
          </h2>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Card 1 - Large Light Blue/Purple Gradient */}
            <div className="md:col-span-7 rounded-3xl p-8 min-h-[320px] flex flex-col justify-end"
              style={{
                background: 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 50%, #ddd6fe 100%)'
              }}
            >
              <div className="mb-4">
                <svg className="w-10 h-10 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0E1833] mb-2">Improving kidney outcomes</h3>
              <p className="text-gray-700">
                We believe that timely screening can prevent progression and save lives by identifying CKD before it reaches advanced stages.
              </p>
            </div>

            {/* Card 2 - Dark Purple Gradient */}
            <div className="md:col-span-5 rounded-3xl p-8 min-h-[320px] flex flex-col justify-end"
              style={{
                background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)'
              }}
            >
              <div className="mb-4">
                <svg className="w-10 h-10 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Supporting healthcare workers</h3>
              <p className="text-gray-300">
                Our platform is designed with frontline providers in mind, making sophisticated screening accessible.
              </p>
            </div>

            {/* Card 3 - Dark Blue Gradient */}
            <div className="md:col-span-5 rounded-3xl p-8 min-h-[320px] flex flex-col justify-end"
              style={{
                background: 'linear-gradient(135deg, #0c1445 0%, #1e3a5f 50%, #0f172a 100%)'
              }}
            >
              <div className="mb-4">
                <svg className="w-10 h-10 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Building scalable infrastructure</h3>
              <p className="text-gray-300">
                We create technology that works in diverse settings, from urban hospitals to rural screening camps.
              </p>
            </div>

            {/* Card 4 - Light Pink Gradient */}
            <div className="md:col-span-7 rounded-3xl p-8 min-h-[320px] flex flex-col justify-end"
              style={{
                background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #f5d0fe 100%)'
              }}
            >
              <div className="mb-4">
                <svg className="w-10 h-10 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0E1833] mb-2">Partnering with governments</h3>
              <p className="text-gray-700">
                We collaborate with public health initiatives to bring kidney screening to communities that need it most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};
