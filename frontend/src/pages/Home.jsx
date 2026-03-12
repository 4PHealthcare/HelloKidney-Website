import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Activity, Smartphone, Shield, TrendingUp, CheckCircle2, Star, Lock, FileCheck, Users, BarChart } from 'lucide-react';

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

  const impactStats = [
    {
      logo: "AIIMS Delhi",
      metric: "35%",
      description: "Increase in early CKD detection rate",
      author: "Dr. Rajesh Kumar",
      title: "Chief, Nephrology Department",
      avatar: "👨‍⚕️"
    },
    {
      logo: "Kenya National Hospital",
      metric: "50%",
      description: "Reduction in time spent on screening documentation",
      author: "Dr. Jane Mwangi",
      title: "Program Manager, NCD Unit",
      avatar: "👩‍⚕️"
    },
    {
      logo: "Mumbai Municipal Corp",
      metric: "10,000+",
      description: "Patients screened in first 6 months",
      author: "Priya Sharma",
      title: "Public Health Director",
      avatar: "👩‍💼"
    },
    {
      logo: "Nairobi County Health",
      metric: "92%",
      description: "Healthcare workers adoption rate",
      author: "Dr. James Ochieng",
      title: "County Health Director",
      avatar: "👨‍⚕️"
    }
  ];

  const detailedUseCases = [
    {
      icon: <FileCheck className="h-10 w-10 text-[#FA2931]" />,
      title: "Create screening protocols and SOPs",
      description: "Standardize kidney screening workflows across your facilities with guideline-aligned protocols.",
      image: "https://images.unsplash.com/photo-1659353888906-adb3e041693"
    },
    {
      icon: <Users className="h-10 w-10 text-[#FA2931]" />,
      title: "Train healthcare teams",
      description: "Onboard doctors, nurses, and CHWs quickly with intuitive workflows and guided screening.",
      image: "https://images.unsplash.com/photo-1659353888096-cc5e333db5e0"
    },
    {
      icon: <BarChart className="h-10 w-10 text-[#FA2931]" />,
      title: "Deploy screening programs",
      description: "Launch community screening camps and track coverage, outcomes, and follow-up compliance.",
      image: "https://images.unsplash.com/photo-1599666882726-fe28581e3147"
    },
    {
      icon: <Activity className="h-10 w-10 text-[#FA2931]" />,
      title: "Monitor patient outcomes",
      description: "Track kidney function over time and identify high-risk patients needing intervention.",
      image: "https://images.unsplash.com/photo-1589104759909-e355f8999f7e"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Gradient Background - extends under header */}
      <section className="relative h-screen flex items-center overflow-hidden -mt-20">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://customer-assets.emergentagent.com/job_hellokidney-preview/artifacts/6a03ms4t_background_image.png')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#0E1833]/40 via-transparent to-[#0E1833]/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-20">
          <div className="text-center max-w-4xl mx-auto">
            {/* Social Proof Badge */}
            <div className="pt-[60px] sm:pt-[100px]">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6 border border-white/20">
                <div className="flex items-center">
                  <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-yellow-400" />
                  <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-yellow-400" />
                  <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-yellow-400" />
                  <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-yellow-400" />
                  <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-yellow-400" />
                </div>
                <span className="text-xs sm:text-sm text-white font-medium">Trusted by healthcare partners</span>
              </div>
            </div>

            {/* Animated Headline */}
            <h1 
              className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2"
              style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)' }}
            >
              Detect Kidney Disease
              <br />
              <span className="text-[#FA2931]" style={{ textShadow: 'none' }}>at the point-of-care</span>
            </h1>

            <p className="text-base sm:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-10 font-medium leading-relaxed px-4 sm:px-0">
              9 out of 10 people don't know they have kidney disease. HelloKidney finds them and tells you what to do about it.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
              <Link to="/contact">
                <button 
                  className="relative w-full sm:w-auto px-8 sm:px-10 h-12 sm:h-14 text-base sm:text-lg font-semibold text-white rounded-full transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                  }}
                >
                  Request a Demo
                </button>
              </Link>
              <Link to="/how-it-works">
                <button 
                  className="relative w-full sm:w-auto px-8 sm:px-10 h-12 sm:h-14 text-base sm:text-lg font-semibold text-white rounded-full transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
                  }}
                >
                  How It Works
                </button>
              </Link>
            </div>
            {/* Bottom padding */}
            <div className="pb-[60px] sm:pb-[100px]"></div>
          </div>
        </div>
      </section>

      {/* Why Early Kidney Screening Matters Section - Modern Bento Grid Design */}
      <section className="relative py-28 bg-[#f8fafc] overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FA2931]/10 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#4f46e5]/10 rounded-full blur-[120px] animate-pulse-slow animation-delay-300"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0E1833]/5 rounded-full blur-[150px]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <span className="inline-flex items-center space-x-2 bg-[#0E1833]/5 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#0E1833]/10">
              <span className="text-sm text-[#0E1833] font-medium">The Silent Epidemic</span>
            </span>
            <h2 className="text-[32px] font-bold text-[#0E1833] mb-6 leading-tight">
              Why Early Screening Saves Lives
            </h2>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-12 gap-4 lg:gap-6">
            {/* Large Feature Card - Stats */}
            <div className="col-span-12 lg:col-span-8 group">
              <div className="relative h-full p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-[#0E1833] to-[#1a2847] border border-[#0E1833]/20 hover:shadow-2xl hover:shadow-[#0E1833]/20 transition-all duration-500 overflow-hidden">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FA2931]/0 to-[#FA2931]/0 group-hover:from-[#FA2931]/5 group-hover:to-transparent transition-all duration-500 rounded-3xl"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                    <div className="flex-1">
                      <div className="text-7xl lg:text-8xl font-bold bg-gradient-to-r from-[#FA2931] to-[#ff6b6b] bg-clip-text text-transparent mb-4">
                        850M+
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-3">People Affected Globally</h3>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        Chronic kidney disease affects over 850 million people worldwide, yet most cases go undetected until advanced stages.
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="relative w-40 h-40">
                        {/* Animated ring */}
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8"/>
                          <circle cx="50" cy="50" r="45" fill="none" stroke="url(#gradient)" strokeWidth="8" strokeLinecap="round" strokeDasharray="283" strokeDashoffset="28" className="animate-pulse-slow"/>
                          <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#FA2931"/>
                              <stop offset="100%" stopColor="#ff6b6b"/>
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-3xl font-bold text-white">90%</span>
                        </div>
                      </div>
                      <p className="text-center text-gray-400 mt-2 text-sm">Undiagnosed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Silent Disease Card */}
            <div className="col-span-12 sm:col-span-6 lg:col-span-4 group">
              <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-[#FA2931] to-[#d91f27] hover:shadow-2xl hover:shadow-[#FA2931]/30 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Silent Killer</h3>
                  <p className="text-white/90 leading-relaxed">
                    Early-stage CKD has no symptoms. Patients feel fine while kidney damage quietly progresses.
                  </p>
                </div>
              </div>
            </div>

            {/* Risk Factors Card */}
            <div className="col-span-12 sm:col-span-6 lg:col-span-4 group">
              <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 hover:shadow-xl hover:shadow-purple-100 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0E1833] mb-4">Rising Risk Factors</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <span className="text-gray-700">Diabetes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <span className="text-gray-700">Hypertension</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <span className="text-gray-700">Obesity</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Geography Card */}
            <div className="col-span-12 sm:col-span-6 lg:col-span-4 group">
              <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 hover:shadow-xl hover:shadow-blue-100 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0E1833] mb-3">Most Affected Regions</h3>
                <p className="text-gray-700 leading-relaxed">
                  India, Kenya & other LMICs face rapidly rising CKD rates due to lifestyle changes.
                </p>
              </div>
            </div>

            {/* Cost Card */}
            <div className="col-span-12 sm:col-span-6 lg:col-span-4 group">
              <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-amber-50 to-orange-100 border border-amber-200 hover:shadow-xl hover:shadow-amber-100 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-amber-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0E1833] mb-3">Late = Costly</h3>
                <p className="text-gray-700 leading-relaxed">
                  Late diagnosis means dialysis dependency, higher costs & preventable deaths.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
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

      {/* Who Can Benefit? Section */}
      <section className="py-28 bg-[#f9fafc]">
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

      {/* Customer Reviews Section */}
      <section className="py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center space-x-2 bg-[#0E1833]/5 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#0E1833]/10">
              <span className="text-sm text-[#0E1833] font-medium">Customer Reviews</span>
            </span>
            <h2 className="text-[32px] font-bold text-[#0E1833] mb-6">
              What Healthcare Professionals Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by leading healthcare providers across 10+ countries
            </p>
          </div>
        </div>

        {/* Scrolling Reviews Marquee */}
        <div className="relative w-full">
          <div className="flex animate-marquee hover:pause">
            {/* First set of cards */}
            <div className="flex gap-6 pr-6">
              {/* Review 1 */}
              <div className="flex-shrink-0 w-[400px] bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:border-[#FA2931]/20 transition-all duration-500">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  "HelloKidney has transformed how we screen for CKD in our diabetes clinic. We're catching kidney disease months earlier than before."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FA2931] to-[#d91f27] flex items-center justify-center text-white font-bold text-lg mr-4">
                    DR
                  </div>
                  <div>
                    <div className="font-semibold text-[#0E1833]">Dr. Rajesh Kumar</div>
                    <div className="text-sm text-gray-500">Diabetologist, Apollo Hospitals</div>
                  </div>
                </div>
              </div>

              {/* Review 2 */}
              <div className="flex-shrink-0 w-[400px] bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:border-[#FA2931]/20 transition-all duration-500">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  "The simplicity of the workflow is incredible. Our community health workers can now screen patients in remote areas without any hassle."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg mr-4">
                    JO
                  </div>
                  <div>
                    <div className="font-semibold text-[#0E1833]">James Ochieng</div>
                    <div className="text-sm text-gray-500">Program Manager, Kenya Health Ministry</div>
                  </div>
                </div>
              </div>

              {/* Review 3 */}
              <div className="flex-shrink-0 w-[400px] bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:border-[#FA2931]/20 transition-all duration-500">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  "We've reduced our screening time by 40% and increased early detection rates significantly. A must-have for any primary care clinic."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg mr-4">
                    PS
                  </div>
                  <div>
                    <div className="font-semibold text-[#0E1833]">Dr. Priya Sharma</div>
                    <div className="text-sm text-gray-500">General Practitioner, Max Healthcare</div>
                  </div>
                </div>
              </div>

              {/* Review 4 */}
              <div className="flex-shrink-0 w-[400px] bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:border-[#FA2931]/20 transition-all duration-500">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  "The color-coded risk classification makes it so easy to explain results to patients. They understand immediately what steps to take."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white font-bold text-lg mr-4">
                    AM
                  </div>
                  <div>
                    <div className="font-semibold text-[#0E1833]">Dr. Amit Mehta</div>
                    <div className="text-sm text-gray-500">Nephrologist, Fortis Hospital</div>
                  </div>
                </div>
              </div>

              {/* Review 5 */}
              <div className="flex-shrink-0 w-[400px] bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:border-[#FA2931]/20 transition-all duration-500">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  "Integrating HelloKidney into our cardiology practice has helped us identify cardiorenal syndrome cases much earlier. Excellent tool!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-500 to-rose-600 flex items-center justify-center text-white font-bold text-lg mr-4">
                    SK
                  </div>
                  <div>
                    <div className="font-semibold text-[#0E1833]">Dr. Sunita Kapoor</div>
                    <div className="text-sm text-gray-500">Cardiologist, Medanta Hospital</div>
                  </div>
                </div>
              </div>

              {/* Review 6 */}
              <div className="flex-shrink-0 w-[400px] bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:border-[#FA2931]/20 transition-all duration-500">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  "The follow-up tracking feature has been a game changer. We never lose track of patients who need repeat testing anymore."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white font-bold text-lg mr-4">
                    VR
                  </div>
                  <div>
                    <div className="font-semibold text-[#0E1833]">Dr. Vikram Rao</div>
                    <div className="text-sm text-gray-500">Internal Medicine, AIIMS Delhi</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="flex gap-6 pr-6">
              {/* Review 1 - Duplicate */}
              <div className="flex-shrink-0 w-[400px] bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:border-[#FA2931]/20 transition-all duration-500">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  "HelloKidney has transformed how we screen for CKD in our diabetes clinic. We're catching kidney disease months earlier than before."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FA2931] to-[#d91f27] flex items-center justify-center text-white font-bold text-lg mr-4">
                    DR
                  </div>
                  <div>
                    <div className="font-semibold text-[#0E1833]">Dr. Rajesh Kumar</div>
                    <div className="text-sm text-gray-500">Diabetologist, Apollo Hospitals</div>
                  </div>
                </div>
              </div>

              {/* Review 2 - Duplicate */}
              <div className="flex-shrink-0 w-[400px] bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:border-[#FA2931]/20 transition-all duration-500">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  "The simplicity of the workflow is incredible. Our community health workers can now screen patients in remote areas without any hassle."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg mr-4">
                    JO
                  </div>
                  <div>
                    <div className="font-semibold text-[#0E1833]">James Ochieng</div>
                    <div className="text-sm text-gray-500">Program Manager, Kenya Health Ministry</div>
                  </div>
                </div>
              </div>

              {/* Review 3 - Duplicate */}
              <div className="flex-shrink-0 w-[400px] bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:border-[#FA2931]/20 transition-all duration-500">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  "We've reduced our screening time by 40% and increased early detection rates significantly. A must-have for any primary care clinic."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg mr-4">
                    PS
                  </div>
                  <div>
                    <div className="font-semibold text-[#0E1833]">Dr. Priya Sharma</div>
                    <div className="text-sm text-gray-500">General Practitioner, Max Healthcare</div>
                  </div>
                </div>
              </div>

              {/* Review 4 - Duplicate */}
              <div className="flex-shrink-0 w-[400px] bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:border-[#FA2931]/20 transition-all duration-500">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  "The color-coded risk classification makes it so easy to explain results to patients. They understand immediately what steps to take."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white font-bold text-lg mr-4">
                    AM
                  </div>
                  <div>
                    <div className="font-semibold text-[#0E1833]">Dr. Amit Mehta</div>
                    <div className="text-sm text-gray-500">Nephrologist, Fortis Hospital</div>
                  </div>
                </div>
              </div>

              {/* Review 5 - Duplicate */}
              <div className="flex-shrink-0 w-[400px] bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:border-[#FA2931]/20 transition-all duration-500">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  "Integrating HelloKidney into our cardiology practice has helped us identify cardiorenal syndrome cases much earlier. Excellent tool!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-500 to-rose-600 flex items-center justify-center text-white font-bold text-lg mr-4">
                    SK
                  </div>
                  <div>
                    <div className="font-semibold text-[#0E1833]">Dr. Sunita Kapoor</div>
                    <div className="text-sm text-gray-500">Cardiologist, Medanta Hospital</div>
                  </div>
                </div>
              </div>

              {/* Review 6 - Duplicate */}
              <div className="flex-shrink-0 w-[400px] bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:border-[#FA2931]/20 transition-all duration-500">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  "The follow-up tracking feature has been a game changer. We never lose track of patients who need repeat testing anymore."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white font-bold text-lg mr-4">
                    VR
                  </div>
                  <div>
                    <div className="font-semibold text-[#0E1833]">Dr. Vikram Rao</div>
                    <div className="text-sm text-gray-500">Internal Medicine, AIIMS Delhi</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Ready Section */}
      <section className="relative -mt-24 pt-72 pb-24 bg-[#030616] overflow-hidden">
        {/* Top Gradient Transition Image - aurora effect blending into dark */}
        <div 
          className="absolute -top-20 left-0 right-0 h-[600px]"
          style={{
            backgroundImage: `url('https://customer-assets.emergentagent.com/job_hellokidney-preview/artifacts/lcl3tjjs_6985efd2f97600ced801109e_long%20transition.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top'
          }}
        ></div>
        {/* Gradient overlay to blend image into dark background */}
        <div 
          className="absolute -top-20 left-0 right-0 h-[600px]"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, transparent 50%, #030616 100%)'
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-[#FA2931] uppercase tracking-wide mb-3">Enterprise Ready</p>
            <h2 className="text-[2.5rem] font-bold text-white mb-6">
              The standard for centralizing screening
            </h2>
            <Link to="/contact">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#0E1833] text-lg px-10 py-6 font-semibold rounded-xl transition-all duration-200">
                Talk to Sales
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - Redact sensitive data */}
            <div className="flex flex-col">
              <div 
                className="relative h-80 rounded-2xl overflow-hidden mb-6 border border-white/20"
                style={{
                  backgroundImage: `url('https://customer-assets.emergentagent.com/job_hellokidney-preview/artifacts/qobk093x_prv1.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
              <h3 className="text-2xl font-bold text-white mb-4">Redact sensitive data</h3>
              <p className="text-gray-300 leading-relaxed">
                Document key screening processes without worrying about exposing sensitive patient information.
              </p>
            </div>

            {/* Card 2 - Enterprise-grade security */}
            <div className="flex flex-col">
              <div 
                className="relative h-80 rounded-2xl overflow-hidden mb-6 border border-white/20"
                style={{
                  backgroundImage: `url('https://customer-assets.emergentagent.com/job_hellokidney-preview/artifacts/hsjj61qt_Enterprise-grade%20security.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise-grade security</h3>
              <p className="text-gray-300 leading-relaxed">
                Meet your organization's security requirements with built-in data protection and access controls.
              </p>
            </div>

            {/* Card 3 - Stay compliant */}
            <div className="flex flex-col">
              <div 
                className="relative h-80 rounded-2xl overflow-hidden mb-6 border border-white/20"
                style={{
                  backgroundImage: `url('https://customer-assets.emergentagent.com/job_hellokidney-preview/artifacts/iwuz8psj_Stay%20compliant.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
              <h3 className="text-2xl font-bold text-white mb-4">Stay compliant</h3>
              <p className="text-gray-300 leading-relaxed">
                HelloKidney meets HIPAA, GDPR, and other rigorous healthcare industry standards.
              </p>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap justify-center items-center gap-8">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
              <span className="text-white font-semibold">SOC 2 Type II</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
              <span className="text-white font-semibold">HIPAA Compliant</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
              <span className="text-white font-semibold">GDPR Ready</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
              <span className="text-white font-semibold">ISO 27001</span>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to try HelloKidney? Section - Dark background with content card */}
      <section className="relative pt-32 pb-32 overflow-hidden bg-[#030616]">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          {/* Content Card with Purple/Blue Gradient Background */}
          <div 
            className="relative rounded-3xl overflow-hidden p-12 lg:p-20"
            style={{
              background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 30%, #8b5cf6 60%, #6366f1 100%)'
            }}
          >
            {/* Subtle diagonal lines overlay */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  -45deg,
                  transparent,
                  transparent 10px,
                  rgba(255,255,255,0.1) 10px,
                  rgba(255,255,255,0.1) 20px
                )`
              }}
            ></div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to try HelloKidney?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                HelloKidney.ai automatically captures and streamlines kidney screening workflows. Work smarter and faster. Turn processes into playbooks in seconds.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/contact">
                  <Button className="bg-white hover:bg-gray-100 text-[#030616] text-lg px-10 py-6 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
                    Try HelloKidney free
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10 text-lg px-8 py-6 font-semibold transition-all duration-200">
                    Talk to Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
