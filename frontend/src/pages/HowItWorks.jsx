import React from 'react';
import { howItWorksSteps } from '../utils/mock';
import { UserPlus, TestTube, FileSearch, Activity } from 'lucide-react';

export const HowItWorks = () => {
  const stepIcons = [
    <UserPlus className="h-12 w-12" />,
    <TestTube className="h-12 w-12" />,
    <FileSearch className="h-12 w-12" />,
    <Activity className="h-12 w-12" />
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-[#0E1833] to-[#1a2847]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            How It Works
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            A simple, four-step workflow for comprehensive kidney health screening and monitoring.
          </p>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {howItWorksSteps.map((step, index) => (
              <div key={step.id} className="relative">
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}>
                  {/* Icon & Number */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-32 h-32 bg-gradient-to-br from-[#FA2931] to-[#d91f27] rounded-2xl flex items-center justify-center text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
                        {stepIcons[index]}
                      </div>
                      <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#0E1833] text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                        {step.id}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-gray-50 p-8 rounded-xl border border-gray-200">
                    <h3 className="text-2xl font-bold text-[#0E1833] mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connecting Line */}
                {index < howItWorksSteps.length - 1 && (
                  <div className="hidden md:block absolute left-16 top-32 w-0.5 h-16 bg-gradient-to-b from-[#FA2931] to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0E1833] mb-4">
              Technology Overview
            </h2>
          </div>
          
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-200">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              HelloKidney.ai leverages smartphone technology for guided urine ACR testing workflows, combined with a secure cloud backend that enables real-time data synchronization and analysis. Healthcare teams can access the platform through web browsers or mobile applications, ensuring flexibility across different clinical settings.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-3">📱</div>
                <h4 className="font-semibold text-[#0E1833] mb-2">Smartphone Workflow</h4>
                <p className="text-sm text-gray-600">Guided testing with compatible devices</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-3">☁️</div>
                <h4 className="font-semibold text-[#0E1833] mb-2">Secure Cloud Backend</h4>
                <p className="text-sm text-gray-600">Encrypted data storage and processing</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-3">💻</div>
                <h4 className="font-semibold text-[#0E1833] mb-2">Multi-Platform Access</h4>
                <p className="text-sm text-gray-600">Browser and app-based interfaces</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Note */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-10 rounded-2xl shadow-sm border-l-4 border-[#FA2931]">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 text-3xl">⚕️</div>
              <div>
                <h3 className="text-2xl font-bold text-[#0E1833] mb-4">
                  Important Safety Note
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  HelloKidney.ai supports screening and clinical decision‑making. It does not replace a doctor's diagnosis or treatment. All results must be reviewed and interpreted by qualified healthcare professionals in accordance with local clinical guidelines and standards of care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
