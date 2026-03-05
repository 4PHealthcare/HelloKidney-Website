import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Stethoscope, Users, FileCheck, Clock, Building2, Tent } from 'lucide-react';

export const Providers = () => {
  const benefits = [
    {
      icon: <FileCheck className="h-8 w-8 text-[#FA2931]" />,
      title: "Standardised CKD screening workflow",
      description: "Guideline-aligned screening for high-risk patients with diabetes, hypertension, and other risk factors."
    },
    {
      icon: <Stethoscope className="h-8 w-8 text-[#FA2931]" />,
      title: "Easy-to-read reports",
      description: "Clear, colour-coded reports designed for effective doctor–patient counselling and clinical decision-making."
    },
    {
      icon: <Clock className="h-8 w-8 text-[#FA2931]" />,
      title: "Longitudinal patient view",
      description: "Monitor kidney function over time with visit history, trend analysis, and risk progression tracking."
    },
    {
      icon: <Users className="h-8 w-8 text-[#FA2931]" />,
      title: "Multi-disciplinary team support",
      description: "Designed for doctors, nurses, and community health workers working together in coordinated care."
    },
    {
      icon: <Building2 className="h-8 w-8 text-[#FA2931]" />,
      title: "Flexible deployment",
      description: "Works seamlessly in clinics, hospitals, OPD settings, and various healthcare facilities."
    },
    {
      icon: <Tent className="h-8 w-8 text-[#FA2931]" />,
      title: "Community outreach ready",
      description: "Perfect for screening camps and community health outreach programs in diverse settings."
    }
  ];

  const useCases = [
    {
      title: "Diabetes clinic CKD screening",
      description: "Integrate systematic kidney screening into your diabetes management program to catch complications early."
    },
    {
      title: "Hypertension OPD CKD screening",
      description: "Screen hypertensive patients for kidney damage as part of routine blood pressure management."
    },
    {
      title: "Community screening camps",
      description: "Deploy mobile kidney health screening in villages, workplaces, and community health initiatives."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1659353888906-adb3e041693')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E1833]/90 to-[#0E1833]/70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              For Healthcare Providers
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Embed guideline‑aligned CKD screening into your OPD visits, NCD clinics, and screening camps using HelloKidney.ai. Deliver comprehensive kidney health assessments with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0E1833] mb-4">
              Benefits for Healthcare Providers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              HelloKidney.ai provides everything you need to deliver professional, guideline-based kidney screening.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-[#0E1833] mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0E1833] mb-4">
              Example Use Cases
            </h2>
            <p className="text-lg text-gray-600">
              See how healthcare providers are using HelloKidney.ai in real-world settings.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200">
                <h3 className="text-xl font-semibold text-[#FA2931] mb-4">{useCase.title}</h3>
                <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0E1833] to-[#1a2847]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            See HelloKidney in Your Clinic
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule a personalized demo to see how HelloKidney.ai can enhance your kidney screening workflow.
          </p>
          <Link to="/contact">
            <Button className="bg-[#FA2931] hover:bg-[#d91f27] text-white text-lg px-10 py-6 font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
              Book a Provider Demo
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
