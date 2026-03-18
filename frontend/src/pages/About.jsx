import React from 'react';
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
      {/* Hero Section */}
      <section className="py-32 pt-40 -mt-20 bg-gradient-to-br from-[#0E1833] to-[#1a2847]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About HelloKidney.ai
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Empowering early detection of chronic kidney disease through accessible, evidence-based technology.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0E1833] mb-6">
              Our Mission
            </h2>
          </div>
          
          <div className="bg-gray-50 p-10 rounded-2xl border border-gray-200">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              HelloKidney.ai was created to enable early chronic kidney disease detection in high-risk populations using accessible technology. We combine smartphone-based urine ACR testing with eGFR calculations to bring systematic kidney screening closer to patients who need it.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Chronic kidney disease affects millions globally, yet often goes undetected until advanced stages. By making screening more accessible and actionable, we aim to change the trajectory of kidney health in communities worldwide.
            </p>
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

      {/* Vision & Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0E1833] mb-4">
              Our Vision & Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and drive our commitment to kidney health worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-[#0E1833] mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-20 bg-gradient-to-br from-[#0E1833] to-[#1a2847]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Building a Future Where CKD is Detected Early
          </h2>
          <p className="text-xl text-gray-200 leading-relaxed">
            Every patient screened, every high-risk individual identified early, and every healthcare worker empowered with better tools brings us closer to our vision of universal access to quality kidney health screening.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};
