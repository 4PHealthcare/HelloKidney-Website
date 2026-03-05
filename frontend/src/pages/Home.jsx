import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Activity, Smartphone, Shield, TrendingUp, Users, FileText } from 'lucide-react';

export const Home = () => {
  const whyScreening = [
    "CKD is common and often has no symptoms until late stages.",
    "Diabetes, high blood pressure, and obesity are major drivers in India, Kenya and similar regions.",
    "Many patients are diagnosed only when kidney damage is advanced.",
    "Early screening with urine ACR and eGFR can slow or prevent progression."
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
      icon: <FileText className="h-8 w-8 text-[#FA2931]" />,
      title: "Colour-coded risk reports",
      description: "Clear, actionable reports with program-level dashboards for tracking and management."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1771015138120-319470ad8f04')`,
          }}
        >
          <div className="absolute inset-0 bg-[#0E1833]/75"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              HelloKidney.ai – Early CKD Screening Made Simple
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 mb-6 font-medium">
              Smartphone urine ACR and eGFR workflows to detect kidney disease before it's too late.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Chronic kidney disease is often silent until it's advanced. HelloKidney helps healthcare teams screen high‑risk people early at clinics or from home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button className="bg-[#FA2931] hover:bg-[#d91f27] text-white text-lg px-8 py-6 font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
                  Request a Demo
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 font-semibold transition-all duration-200">
                  How It Works
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Early Kidney Screening Matters */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0E1833] mb-4">
              Why Early Kidney Screening Matters
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Early detection of chronic kidney disease can significantly improve patient outcomes and quality of life.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyScreening.map((point, index) => (
              <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex-shrink-0 w-8 h-8 bg-[#FA2931] text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-700 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What HelloKidney.ai Does */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0E1833] mb-6">
              What HelloKidney.ai Does
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
              HelloKidney.ai combines smartphone‑based urine Albumin‑to‑Creatinine Ratio (UACR) testing with point‑of‑care creatinine/eGFR to bring early CKD screening closer to patients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="mb-4">{capability.icon}</div>
                <h3 className="text-lg font-semibold text-[#0E1833] mb-3">{capability.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/how-it-works">
              <Button variant="outline" className="border-2 border-[#FA2931] text-[#FA2931] hover:bg-[#FA2931] hover:text-white px-8 py-6 font-semibold transition-all duration-200">
                See How It Works
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0E1833] to-[#1a2847]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Partner with HelloKidney.ai to bring early CKD screening to your patients and communities.
          </p>
          <Link to="/contact">
            <Button className="bg-[#FA2931] hover:bg-[#d91f27] text-white text-lg px-10 py-6 font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
              Request a Demo Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
