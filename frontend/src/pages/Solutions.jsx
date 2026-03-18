import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { CTASection } from '../components/CTASection';
import { 
  Stethoscope, Users, FileCheck, Clock, Building2, Tent,
  BarChart3, Settings, Database, TrendingUp, MapPin,
  ChevronRight
} from 'lucide-react';

export const Solutions = () => {
  const providerBenefits = [
    {
      icon: <FileCheck className="h-8 w-8 text-[#FA2931]" />,
      title: "Standardised CKD screening workflow",
      description: "Guideline-aligned screening for high-risk patients with diabetes, hypertension, and other risk factors."
    },
    {
      icon: <Stethoscope className="h-8 w-8 text-[#FA2931]" />,
      title: "Easy-to-read reports",
      description: "Clear, colour-coded reports designed for effective doctor-patient counselling and clinical decision-making."
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

  const providerUseCases = [
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

  const programFeatures = [
    {
      icon: <Settings className="h-8 w-8 text-[#FA2931]" />,
      title: "Configurable to local guidelines",
      description: "Adapt screening workflows and risk criteria to match national and regional CKD/NCD protocols."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-[#FA2931]" />,
      title: "Aggregated dashboards",
      description: "Monitor coverage, risk distribution, screening outcomes, and follow-up rates across your entire program."
    },
    {
      icon: <MapPin className="h-8 w-8 text-[#FA2931]" />,
      title: "Multi-site deployment",
      description: "Deploy across facilities, screening camps, mobile units, and community outreach programs seamlessly."
    },
    {
      icon: <Database className="h-8 w-8 text-[#FA2931]" />,
      title: "Integration-ready architecture",
      description: "Connect with existing health information systems where standards and approvals allow for streamlined data flow."
    }
  ];

  const programOutcomes = [
    "Number of people screened across all sites",
    "Risk category distribution (low, moderate, high)",
    "Follow-up completion rates and compliance tracking",
    "Geographic and demographic coverage analysis",
    "Longitudinal trends in kidney health outcomes"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - White background with split layout */}
      <section className="relative min-h-screen flex items-center bg-white -mt-20 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0E1833] mb-6 leading-tight">
                Bridges the gap between detection and care.
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Screen patients for chronic kidney disease in minutes using urine ACR and eGFR.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <button className="w-full sm:w-auto px-8 py-4 bg-[#FA2931] text-white font-semibold rounded-xl hover:bg-[#d91f27] transition-all duration-300 shadow-lg hover:shadow-xl">
                    Request a Demo
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="w-full sm:w-auto px-8 py-4 bg-white text-[#0E1833] font-semibold rounded-xl border-2 border-gray-300 hover:border-[#0E1833] transition-all duration-300">
                    Talk to Sales
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <img 
                src="https://customer-assets.emergentagent.com/job_25f4e8fb-a300-4335-9732-e97354468626/artifacts/w8okgzdz_image2.avif"
                alt="Healthcare professionals"
                style={{ width: '700px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20" style={{ backgroundColor: '#f9fafc' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center space-x-2 bg-[#FA2931]/10 px-4 py-2 rounded-full mb-6 border border-[#FA2931]/20">
              <span className="w-2 h-2 bg-[#FA2931] rounded-full"></span>
              <span className="text-sm text-[#FA2931] font-semibold uppercase tracking-wider">Key Features</span>
            </span>
            <h2 className="text-[32px] font-bold text-[#0E1833]">
              Everything You Need for Kidney Care
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 - Fast Detection */}
            <div className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-[#FA2931]/30 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#FA2931] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0E1833] mb-4">Fast Detection</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#FA2931] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>60-second smartphone-based urine ACR testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#FA2931] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Point-of-care creatinine with automated eGFR calculations</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#FA2931] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Instant color-coded CKD risk assessments</span>
                </li>
              </ul>
            </div>

            {/* Feature 2 - Smart Treatment Guidance */}
            <div className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-[#FA2931]/30 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#FA2931] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0E1833] mb-4">Smart Treatment Guidance</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#FA2931] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Built-in clinical decision tool delivers KDIGO guideline-directed treatment recommendations</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#FA2931] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Personalized care plans based on CKD stage, comorbidities, and risk factors</span>
                </li>
              </ul>
            </div>

            {/* Feature 3 - Clear Communication */}
            <div className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-[#FA2931]/30 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#FA2931] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0E1833] mb-4">Clear Communication</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#FA2931] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Simple summaries for patients</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#FA2931] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Evidence-based protocols for clinicians</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#FA2931] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Everyone knows what to do next</span>
                </li>
              </ul>
            </div>

            {/* Feature 4 - Complete Patient Tracking */}
            <div className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-[#FA2931]/30 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#FA2931] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0E1833] mb-4">Complete Patient Tracking</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#FA2931] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Patient lists & visit history</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#FA2931] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Treatment adherence & follow-up reminders</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#FA2931] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Long-term kidney health monitoring</span>
                </li>
              </ul>
            </div>

            {/* Feature 5 - Built to Scale */}
            <div className="group bg-gradient-to-br from-[#0E1833] to-[#1a2847] p-8 rounded-2xl border border-[#0E1833] hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-2">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-[#FA2931] flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Built to Scale</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Designed for regions where diabetes and hypertension along with CKDu are driving silent kidney epidemics. Deploy across clinics, hospitals, and community health programs with ease.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Benefit? Section - For Healthcare Professionals */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header - Left aligned like reference */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-1">
              <span className="inline-flex items-center space-x-2 bg-[#0E1833]/5 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#0E1833]/10">
                <span className="text-sm text-[#0E1833] font-medium">For Healthcare Professionals</span>
              </span>
              <h2 className="text-[32px] font-bold text-[#0E1833] mb-6 leading-tight">
                Who Can Benefit?
              </h2>
              <p className="text-base text-gray-600 leading-relaxed mb-8">
                HelloKidney.ai is designed for healthcare professionals at the forefront of kidney disease management.
              </p>
              <Link to="/contact">
                <button className="px-8 py-4 rounded-full bg-[#FA2931] text-white font-semibold hover:bg-[#d91f27] transition-all duration-300 shadow-lg shadow-[#FA2931]/30 hover:shadow-xl">
                  Get Started Free
                </button>
              </Link>
            </div>

            {/* Top Row Cards - 2 Cards */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {/* Nephrologists */}
              <div className="group relative rounded-3xl overflow-hidden h-72 cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1612349316228-5942a9b489c2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODh8MHwxfHNlYXJjaHwzfHxkb2N0b3IlMjBzdGV0aG9zY29wZSUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDB8fHx8MTc3Mjk0Nzc2OHww&ixlib=rb-4.1.0&q=85"
                  alt="Nephrologists"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-[#FA2931] flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">Nephrologists</h3>
                  </div>
                  <p className="text-gray-300 text-sm">Kidney specialists leading CKD diagnosis and treatment</p>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Physicians */}
              <div className="group relative rounded-3xl overflow-hidden h-72 cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1758691462123-8a17ae95d203?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwxfHxwaHlzaWNpYW4lMjBkb2N0b3IlMjBwYXRpZW50JTIwY29uc3VsdGF0aW9ufGVufDB8fHx8MTc3Mjk0Nzc1MXww&ixlib=rb-4.1.0&q=85"
                  alt="Physicians"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-[#FA2931] flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">Physicians</h3>
                  </div>
                  <p className="text-gray-300 text-sm">Medical doctors providing comprehensive patient care</p>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row - 3 Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* General Practitioners */}
            <div className="group relative rounded-3xl overflow-hidden h-96 cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1666887360445-e3b7bba7917c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MTJ8MHwxfHNlYXJjaHwyfHxnZW5lcmFsJTIwcHJhY3RpdGlvbmVyJTIwcHJpbWFyeSUyMGNhcmUlMjBkb2N0b3J8ZW58MHx8fHwxNzcyOTQ3NzUyfDA&ixlib=rb-4.1.0&q=85"
                alt="General Practitioners"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">General Practitioners</h3>
                <p className="text-gray-300 text-sm">Primary care providers for early CKD detection</p>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Diabetologists */}
            <div className="group relative rounded-3xl overflow-hidden h-96 cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1673865641073-4479f93a7776?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MTN8MHwxfHNlYXJjaHwyfHxkaWFiZXRlcyUyMGRvY3RvciUyMGVuZG9jcmlub2xvZ2lzdHxlbnwwfHx8fDE3NzI5NDc3NjF8MA&ixlib=rb-4.1.0&q=85"
                alt="Diabetologists"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Diabetologists</h3>
                <p className="text-gray-300 text-sm">Diabetes specialists monitoring kidney complications</p>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Cardiologists */}
            <div className="group relative rounded-3xl overflow-hidden h-96 cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1612943733919-f9661f1331f5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODh8MHwxfHNlYXJjaHwyfHxkb2N0b3IlMjBzdGV0aG9zY29wZSUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDB8fHx8MTc3Mjk0Nzc2OHww&ixlib=rb-4.1.0&q=85"
                alt="Cardiologists"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Cardiologists</h3>
                <p className="text-gray-300 text-sm">Heart specialists managing cardiovascular-renal health</p>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Footer Text */}
          <div className="text-center">
            <p className="text-gray-500 text-lg">
              <span className="font-semibold text-[#0E1833]">Join 500+</span> healthcare professionals already using HelloKidney.ai
            </p>
          </div>
        </div>
      </section>

      {/* Programs & Governments Section - Highlighted */}
      <section className="py-20 bg-gradient-to-br from-[#0E1833] to-[#1a2847] relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FA2931]/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-[100px]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center space-x-2 bg-[#FA2931]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#FA2931]/30">
              <span className="w-2 h-2 bg-[#FA2931] rounded-full animate-pulse"></span>
              <span className="text-sm text-[#FA2931] font-semibold uppercase tracking-wider">For Programs & Governments</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Scale Your <span className="text-[#FA2931]">Health Programs</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              HelloKidney.ai supports <span className="text-white font-semibold">NCD/CKD strategies</span>, <span className="text-white font-semibold">national screening programs</span>, and <span className="text-white font-semibold">public health initiatives</span>. Build scalable, evidence-based kidney health programs for your communities.
            </p>
          </div>
        </div>
      </section>

      {/* Program Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[32px] font-bold text-[#0E1833] mb-4">
              Program Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Purpose-built capabilities for large-scale kidney health screening and management programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {programFeatures.map((feature, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#FA2931]/30 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-[#FA2931]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#0E1833] mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes & Monitoring Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[32px] font-bold text-[#0E1833] mb-6">
                Outcomes & Monitoring
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Track the impact of your kidney health program with comprehensive analytics and reporting tools designed for program managers and policy makers.
              </p>
              <div className="space-y-4">
                {programOutcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start space-x-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#FA2931] to-[#d91f27] text-white rounded-lg flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 pt-1">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FA2931]/20 to-[#0E1833]/20 rounded-3xl blur-2xl"></div>
              <div 
                className="relative rounded-2xl shadow-2xl overflow-hidden h-96 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800')`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1833]/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data-Driven Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#0E1833] to-[#1a2847] p-10 rounded-3xl">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-[#FA2931] flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Data-Driven Program Management
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  HelloKidney.ai provides real-time visibility into screening coverage, risk identification, and follow-up compliance across your entire program. Use evidence-based insights to optimize resource allocation, identify high-burden areas, and demonstrate program impact to stakeholders.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#FA2931] rounded-full mr-3"></div>
                    Real-time program performance dashboards
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#FA2931] rounded-full mr-3"></div>
                    Geographic and demographic analysis tools
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#FA2931] rounded-full mr-3"></div>
                    Customizable reports for stakeholders and funders
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};
