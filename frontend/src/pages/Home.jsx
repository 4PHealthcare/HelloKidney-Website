import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Activity, Smartphone, Shield, TrendingUp, CheckCircle2, Star } from 'lucide-react';

export const Home = () => {
  const useCases = [
    { icon: "🏥", title: "Screen high-risk patients", path: "/providers" },
    { icon: "📊", title: "Manage screening programs", path: "/programs" },
    { icon: "🎯", title: "Deploy at screening camps", path: "/how-it-works" },
    { icon: "📱", title: "Enable community outreach", path: "/providers" },
    { icon: "👨‍⚕️", title: "Train healthcare workers", path: "/how-it-works" },
    { icon: "📈", title: "Track patient outcomes", path: "/programs" }
  ];

  const capabilities = [
    {
      icon: <Activity className="h-8 w-8 text-[#FA2931]" />,
      title: "Early CKD screening using UACR and eGFR",
      description: "Comprehensive kidney function assessment combining albumin-to-creatinine ratio and estimated glomerular filtration rate."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-[#FA2931]" />,
      title: "Smartphone urine ACR workflow",
      description: "Guided testing workflow with supported test kits and devices for point-of-care screening."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-[#FA2931]" />,
      title: "Automatic eGFR calculation",
      description: "Real-time kidney function staging with automatic calculations and risk classification."
    },
    {
      icon: <Shield className="h-8 w-8 text-[#FA2931]" />,
      title: "Secure, compliant platform",
      description: "HIPAA-compliant infrastructure with role-based access and encrypted data storage."
    }
  ];

  const trustLogos = [
    { name: "Ministry of Health, India", width: "140px" },
    { name: "Kenya Health System", width: "120px" },
    { name: "WHO Partner", width: "100px" },
    { name: "AIIMS Collaboration", width: "130px" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Social Proof Badge */}
            <div className="inline-flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-full mb-6">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              </div>
              <span className="text-sm text-gray-600 font-medium">Trusted by healthcare providers in 10+ countries</span>
            </div>

            {/* Animated Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#0E1833] mb-6 leading-tight">
              Early CKD Detection
              <br />
              <span className="text-[#FA2931]">Made Simple</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-4 font-medium leading-relaxed">
              Smartphone urine ACR and eGFR workflows to detect kidney disease before it's too late.
            </p>
            
            <p className="text-lg text-gray-500 mb-10 max-w-3xl mx-auto">
              Chronic kidney disease is often silent until it's advanced. HelloKidney helps healthcare teams screen high‑risk people early at clinics or from home.
            </p>

            {/* Use Case Cards */}
            <div className="mb-10">
              <p className="text-sm text-gray-600 font-medium mb-4">How will your team use HelloKidney.ai?</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 max-w-5xl mx-auto">
                {useCases.map((useCase, index) => (
                  <Link
                    key={index}
                    to={useCase.path}
                    className="flex flex-col items-center p-4 bg-white border-2 border-gray-200 rounded-xl hover:border-[#FA2931] hover:shadow-md transition-all duration-200 group"
                  >
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{useCase.icon}</div>
                    <p className="text-xs text-gray-700 font-medium text-center leading-tight">{useCase.title}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/contact">
                <Button className="bg-[#FA2931] hover:bg-[#d91f27] text-white text-lg px-10 py-7 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
                  Request a Demo
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 text-lg px-10 py-7 font-semibold rounded-xl transition-all duration-200">
                  How It Works
                </Button>
              </Link>
            </div>

            {/* Trust Bar */}
            <div className="border-t border-gray-200 pt-8">
              <p className="text-sm text-gray-500 mb-6 font-medium">Trusted by healthcare organizations across India, Kenya, and beyond</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                {trustLogos.map((logo, index) => (
                  <div key={index} className="text-gray-400 font-semibold text-sm" style={{ width: logo.width }}>
                    {logo.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-20 left-0 w-72 h-72 bg-red-50 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30"></div>
      </section>

      {/* What HelloKidney.ai Does */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-[#FA2931] uppercase tracking-wide mb-3">The CKD Screening Platform</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0E1833] mb-6">
              Capture and optimize screening workflows
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              HelloKidney.ai combines smartphone‑based urine UACR testing with point‑of‑care creatinine/eGFR to bring early CKD screening closer to patients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white p-10 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="mb-6">{capability.icon}</div>
                <h3 className="text-2xl font-bold text-[#0E1833] mb-4">{capability.title}</h3>
                <p className="text-gray-600 leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/how-it-works">
              <Button variant="outline" className="border-2 border-[#FA2931] text-[#FA2931] hover:bg-[#FA2931] hover:text-white px-10 py-6 text-lg font-semibold rounded-xl transition-all duration-200">
                See How It Works →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Early Screening Matters */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-bold text-[#FA2931] uppercase tracking-wide mb-3">Impact</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#0E1833] mb-6">
                Why Early Kidney Screening Matters
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Early detection of chronic kidney disease can significantly improve patient outcomes and quality of life.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-[#FA2931] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 leading-relaxed">CKD is common and often has no symptoms until late stages.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-[#FA2931] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 leading-relaxed">Diabetes, high blood pressure, and obesity are major drivers in India, Kenya and similar regions.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-[#FA2931] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 leading-relaxed">Many patients are diagnosed only when kidney damage is advanced.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-[#FA2931] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 leading-relaxed">Early screening with urine ACR and eGFR can slow or prevent progression.</p>
                </div>
              </div>
            </div>
            <div 
              className="rounded-3xl shadow-2xl h-[500px] bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1771774982253-adcc7715b8f6')`,
              }}
            >
              <div className="h-full w-full bg-gradient-to-t from-[#0E1833]/40 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#0E1833] to-[#1a2847]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Partner with HelloKidney.ai to bring early CKD screening to your patients and communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-[#FA2931] hover:bg-[#d91f27] text-white text-lg px-10 py-7 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
                Request a Demo
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#0E1833] text-lg px-10 py-7 font-semibold rounded-xl transition-all duration-200">
                Talk to Sales →
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
