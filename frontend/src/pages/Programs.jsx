import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { BarChart3, Settings, Users, Database, TrendingUp, MapPin } from 'lucide-react';

export const Programs = () => {
  const features = [
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

  const outcomes = [
    "Number of people screened across all sites",
    "Risk category distribution (low, moderate, high)",
    "Follow-up completion rates and compliance tracking",
    "Geographic and demographic coverage analysis",
    "Longitudinal trends in kidney health outcomes"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1599666882726-fe28581e3147')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E1833]/90 to-[#0E1833]/70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              For Programs & Governments
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              HelloKidney.ai supports NCD/CKD strategies, national screening programs, and public health initiatives. Build scalable, evidence-based kidney health programs for your communities.
            </p>
          </div>
        </div>
      </section>

      {/* Program Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0E1833] mb-4">
              Program Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Purpose-built capabilities for large-scale kidney health screening and management programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="mb-4">{feature.icon}</div>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0E1833] mb-6">
                Outcomes & Monitoring
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Track the impact of your kidney health program with comprehensive analytics and reporting tools designed for program managers and policy makers.
              </p>
              <div className="space-y-4">
                {outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#FA2931] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div 
                className="rounded-xl shadow-2xl overflow-hidden h-96 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1589104759909-e355f8999f7e')`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1833]/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-white p-10 rounded-2xl border border-gray-200 shadow-sm">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <TrendingUp className="h-12 w-12 text-[#FA2931]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0E1833] mb-4">
                  Data-Driven Program Management
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  HelloKidney.ai provides real-time visibility into screening coverage, risk identification, and follow-up compliance across your entire program. Use evidence-based insights to optimize resource allocation, identify high-burden areas, and demonstrate program impact to stakeholders.
                </p>
                <ul className="space-y-3 text-gray-700">
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
      <section className="py-20 bg-gradient-to-br from-[#0E1833] to-[#1a2847]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Explore a Pilot for Your Program
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how HelloKidney.ai can support your kidney health screening initiative.
          </p>
          <Link to="/contact">
            <Button className="bg-[#FA2931] hover:bg-[#d91f27] text-white text-lg px-10 py-6 font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
              Discuss a Pilot Project
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
