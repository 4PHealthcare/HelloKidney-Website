import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { 
  Stethoscope, Users, FileCheck, Clock, Building2, Tent,
  BarChart3, Settings, Database, TrendingUp, MapPin,
  ChevronRight
} from 'lucide-react';

export const Solutions = () => {
  const [activeTab, setActiveTab] = useState('providers');

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
      {/* Hero Section - Full Screen */}
      <section className="relative h-screen flex items-center overflow-hidden -mt-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://customer-assets.emergentagent.com/job_25f4e8fb-a300-4335-9732-e97354468626/artifacts/bxw9gylr_68d44b93f5fd1d0320d476f0_333bae936a6cb9b2f57145ed9fd2a73a_hero%20bg.png')`,
          }}
        >
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <span className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
            <span className="w-2 h-2 bg-[#FA2931] rounded-full animate-pulse"></span>
            <span className="text-sm text-white font-medium">Solutions</span>
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Tailored Solutions for<br />
            <span className="text-[#FA2931]">Every Healthcare Need</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Whether you're a healthcare provider or managing large-scale public health programs, HelloKidney.ai adapts to your unique requirements.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="sticky top-20 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="inline-flex bg-gray-100 p-1.5 rounded-full my-4">
              <button
                onClick={() => setActiveTab('providers')}
                className={`px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
                  activeTab === 'providers'
                    ? 'bg-[#0E1833] text-white shadow-lg'
                    : 'text-gray-600 hover:text-[#0E1833]'
                }`}
              >
                For Healthcare Providers
              </button>
              <button
                onClick={() => setActiveTab('programs')}
                className={`px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
                  activeTab === 'programs'
                    ? 'bg-[#0E1833] text-white shadow-lg'
                    : 'text-gray-600 hover:text-[#0E1833]'
                }`}
              >
                For Programs & Governments
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Providers Content */}
      {activeTab === 'providers' && (
        <div className="animate-fadeIn">
          {/* Provider Intro */}
          <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0E1833] mb-6">
                  Empower Your Clinical Practice
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Embed guideline-aligned CKD screening into your OPD visits, NCD clinics, and screening camps using HelloKidney.ai. Deliver comprehensive kidney health assessments with confidence.
                </p>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-[32px] font-bold text-[#0E1833] mb-4">
                  Benefits for Healthcare Providers
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  HelloKidney.ai provides everything you need to deliver professional, guideline-based kidney screening.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {providerBenefits.map((benefit, index) => (
                  <div key={index} className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#FA2931]/30 hover:shadow-xl transition-all duration-300">
                    <div className="w-14 h-14 rounded-xl bg-[#FA2931]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
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
                <h2 className="text-[32px] font-bold text-[#0E1833] mb-4">
                  Example Use Cases
                </h2>
                <p className="text-lg text-gray-600">
                  See how healthcare providers are using HelloKidney.ai in real-world settings.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {providerUseCases.map((useCase, index) => (
                  <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-[#FA2931] text-white flex items-center justify-center font-bold mb-5">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-[#0E1833] mb-4">{useCase.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Provider CTA */}
          <section className="py-16 bg-gradient-to-r from-[#FA2931] to-[#d91f27]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                See HelloKidney in Your Clinic
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Schedule a personalized demo to see how HelloKidney.ai can enhance your kidney screening workflow.
              </p>
              <Link to="/contact">
                <Button className="bg-white text-[#FA2931] hover:bg-gray-100 text-lg px-10 py-6 font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
                  Book a Provider Demo
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </section>
        </div>
      )}

      {/* Programs & Governments Content */}
      {activeTab === 'programs' && (
        <div className="animate-fadeIn">
          {/* Program Intro */}
          <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0E1833] mb-6">
                  Scale Your Health Programs
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  HelloKidney.ai supports NCD/CKD strategies, national screening programs, and public health initiatives. Build scalable, evidence-based kidney health programs for your communities.
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

          {/* Program CTA */}
          <section className="py-16 bg-gradient-to-r from-[#0E1833] to-[#1a2847]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Explore a Pilot for Your Program
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Let's discuss how HelloKidney.ai can support your kidney health screening initiative.
              </p>
              <Link to="/contact">
                <Button className="bg-[#FA2931] hover:bg-[#d91f27] text-white text-lg px-10 py-6 font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
                  Discuss a Pilot Project
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};
