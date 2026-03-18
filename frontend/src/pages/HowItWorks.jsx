import React from 'react';
import { howItWorksSteps } from '../utils/mock';
import { UserPlus, TestTube, FileSearch, Activity } from 'lucide-react';
import { CTASection } from '../components/CTASection';

export const HowItWorks = () => {
  const stepIcons = [
    <UserPlus className="h-12 w-12" />,
    <TestTube className="h-12 w-12" />,
    <FileSearch className="h-12 w-12" />,
    <Activity className="h-12 w-12" />
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Full Screen with Background Image */}
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
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            How It Works
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            A simple, four-step workflow for comprehensive kidney health screening and monitoring.
          </p>
        </div>
      </section>

      {/* How It Works Cards Section - From Home */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="inline-flex items-center space-x-2 bg-[#0E1833]/5 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#0E1833]/10">
              <span className="text-sm text-[#0E1833] font-medium">How it Works</span>
            </span>
            <p className="text-[32px] font-bold text-[#0E1833] max-w-3xl mx-auto leading-tight">
              Kidney disease risk in four simple steps from the comfort of your home.
            </p>
          </div>

          {/* Steps Grid - Cards with background images */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
            {/* Step 1 */}
            <div className="group flex flex-col items-center">
              <div 
                className="relative overflow-hidden hover:shadow-2xl transition-all duration-500 group-hover:scale-105"
                style={{ width: '290px', height: '400px', borderRadius: '14px' }}
              >
                {/* Background Image */}
                <img 
                  src="https://customer-assets.emergentagent.com/job_17dc8ed8-144a-4a9c-b813-f73220e3b763/artifacts/n5yv6qah_slide%201.png"
                  alt="Register Patient"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Text Below Card */}
              <div className="mt-6 text-center max-w-[290px]">
                <h3 className="text-xl font-bold text-[#0E1833] mb-2">1. Register Patient</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Record basic demographics and risk profile (diabetes, hypertension, family history).
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group flex flex-col items-center">
              <div 
                className="relative overflow-hidden hover:shadow-2xl transition-all duration-500 group-hover:scale-105"
                style={{ width: '290px', height: '400px', borderRadius: '14px' }}
              >
                {/* Background Image */}
                <img 
                  src="https://customer-assets.emergentagent.com/job_17dc8ed8-144a-4a9c-b813-f73220e3b763/artifacts/nvbv9b6r_slide2.png"
                  alt="Perform Tests"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Text Below Card */}
              <div className="mt-6 text-center max-w-[290px]">
                <h3 className="text-xl font-bold text-[#0E1833] mb-2">2. Perform Tests</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Run a urine ACR test with Hellokidney UACR strips and an eGFR test with the creatinine meter.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group flex flex-col items-center">
              <div 
                className="relative overflow-hidden hover:shadow-2xl transition-all duration-500 group-hover:scale-105"
                style={{ width: '290px', height: '400px', borderRadius: '14px' }}
              >
                {/* Background Image */}
                <img 
                  src="https://customer-assets.emergentagent.com/job_17dc8ed8-144a-4a9c-b813-f73220e3b763/artifacts/xlx7woyx_slide3.png"
                  alt="View Risk Category"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Text Below Card */}
              <div className="mt-6 text-center max-w-[290px]">
                <h3 className="text-xl font-bold text-[#0E1833] mb-2">3. View Risk Category</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Receive a colour‑coded kidney risk classification with guidance for next steps.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="group flex flex-col items-center">
              <div 
                className="relative overflow-hidden hover:shadow-2xl transition-all duration-500 group-hover:scale-105"
                style={{ width: '290px', height: '400px', borderRadius: '14px' }}
              >
                {/* Background Image */}
                <img 
                  src="https://customer-assets.emergentagent.com/job_17dc8ed8-144a-4a9c-b813-f73220e3b763/artifacts/iarlard2_slide4.png"
                  alt="Track Follow-Up"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Text Below Card */}
              <div className="mt-6 text-center max-w-[290px]">
                <h3 className="text-xl font-bold text-[#0E1833] mb-2">4. Track Follow‑Up</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Monitor follow‑up visits, repeat testing, and patient outcomes over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Early Detection Section */}
      <section className="py-24 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center space-x-2 bg-[#0E1833]/5 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#0E1833]/10">
              <span className="text-sm text-[#0E1833] font-medium">Urine ACR test</span>
            </span>
            <h2 className="text-[34px] font-bold text-[#0E1833] leading-tight">
              The best time to know is early.<br />
              The best time to act is now.
            </h2>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img 
                  src="https://customer-assets.emergentagent.com/job_b7000787-beb3-44cf-a329-f73023b4c1bd/artifacts/nt2cqqh0_uacr_image.png"
                  alt="HelloKidney Urine ACR Test"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6">
              <h3 className="text-[24px] font-bold text-[#0E1833] leading-tight">
                Detect CKD risk under <span className="text-[#FA2931]">60 Seconds</span>
              </h3>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  People with diabetes, high blood pressure, obesity, heart 
                  disease, and older people are more likely to have kidney 
                  problems. In fact, 4 out of 10 people with diabetes and 
                  1 out of 5 people with high blood pressure suffer from kidney 
                  disease.
                </p>
                <p>
                  The test is easy to use and can be performed in 
                  clinics or at home by patients using a smartphone. It checks 
                  the level of a substance in your urine called "Urine 
                  Albumin/Creatinine Ratio (UACR)".
                </p>
                <p>
                  This test helps identify kidney disease early, enabling 
                  appropriate treatment and improved health outcomes.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-8 py-4 bg-[#FA2931] text-white font-semibold rounded-full hover:bg-[#e02129] transition-colors shadow-lg hover:shadow-xl">
                  Order Now
                </button>
                <button className="px-8 py-4 bg-white text-[#0E1833] font-semibold rounded-full border-2 border-[#0E1833] hover:bg-[#0E1833] hover:text-white transition-colors">
                  Talk to Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* eGFR Test Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center space-x-2 bg-[#0E1833]/5 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#0E1833]/10">
              <span className="text-sm text-[#0E1833] font-medium">eGFR Test</span>
            </span>
            <h2 className="text-[34px] font-bold leading-tight">
              <span className="text-[#FA2931]">eGFR</span> <span className="text-[#0E1833]">Creatinine Meter</span>
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-100 rounded-full p-1">
              <button className="px-6 py-2 rounded-full bg-[#0E1833] text-white font-medium transition-all">
                Eaglenos
              </button>
              <button className="px-6 py-2 rounded-full text-gray-600 font-medium hover:text-[#0E1833] transition-all">
                NovaMaxPro
              </button>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Content */}
            <div className="space-y-6">
              <h3 className="text-[24px] font-bold text-[#0E1833]">
                Eaglenos Creatinine Meter
              </h3>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Rapid, lab-accurate measurement of creatinine 
                  and eGFR in under 30 seconds.
                </p>
                <p>
                  eGFR and creatinine results
                  instantly appear in the Hellokidney.ai App
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-8 py-4 bg-[#FA2931] text-white font-semibold rounded-full hover:bg-[#e02129] transition-colors shadow-lg hover:shadow-xl">
                  Order Now
                </button>
                <button className="px-8 py-4 bg-white text-[#0E1833] font-semibold rounded-full border-2 border-[#0E1833] hover:bg-[#0E1833] hover:text-white transition-colors">
                  Talk to Sales
                </button>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <img 
                  src="https://customer-assets.emergentagent.com/job_b7000787-beb3-44cf-a329-f73023b4c1bd/artifacts/nhq0ne0v_EGFR.png"
                  alt="eGFR Creatinine Meter"
                  className="w-full h-full"
                />
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

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};
