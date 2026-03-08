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

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-20 pb-20">
          <div className="text-center max-w-4xl mx-auto">
            {/* Social Proof Badge */}
            <div className="pt-[100px]">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                </div>
                <span className="text-sm text-white font-medium">Trusted by healthcare partners</span>
              </div>
            </div>

            {/* Animated Headline */}
            <h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)' }}
            >
              Detect Kidney Disease
              <br />
              <span className="text-[#FA2931]" style={{ textShadow: 'none' }}>at the point-of-care</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-200 mb-10 font-medium leading-relaxed">
              9 out of 10 people don't know they have kidney disease. HelloKidney finds them and tells you what to do about it.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <button 
                  className="relative px-10 h-14 text-lg font-semibold text-white rounded-full transition-all duration-300 hover:scale-105"
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
                  className="relative px-10 h-14 text-lg font-semibold text-white rounded-full transition-all duration-300 hover:scale-105"
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
            <div className="pb-[100px]"></div>
          </div>
        </div>
      </section>

      {/* Why Early Kidney Screening Matters Section - Modern Bento Grid Design */}
      <section className="relative py-28 bg-white overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FA2931]/10 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#4f46e5]/10 rounded-full blur-[120px] animate-pulse-slow animation-delay-300"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0E1833]/5 rounded-full blur-[150px]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <span className="inline-block px-4 py-2 rounded-full bg-[#FA2931]/10 text-[#FA2931] text-sm font-semibold mb-6 border border-[#FA2931]/20">
              THE SILENT EPIDEMIC
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0E1833] mb-6 leading-tight">
              Why Early Screening
              <span className="block bg-gradient-to-r from-[#FA2931] via-[#ff6b6b] to-[#FA2931] bg-clip-text text-transparent">
                Saves Lives
              </span>
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
              <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-purple-500 to-purple-700 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Rising Risk Factors</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <span className="text-white/90">Diabetes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <span className="text-white/90">Hypertension</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <span className="text-white/90">Obesity</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Geography Card */}
            <div className="col-span-12 sm:col-span-6 lg:col-span-4 group">
              <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-blue-500 to-blue-700 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Most Affected Regions</h3>
                <p className="text-white/90 leading-relaxed">
                  India, Kenya & other LMICs face rapidly rising CKD rates due to lifestyle changes.
                </p>
              </div>
            </div>

            {/* Cost Card */}
            <div className="col-span-12 sm:col-span-6 lg:col-span-4 group">
              <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600 hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Late = Costly</h3>
                <p className="text-white/90 leading-relaxed">
                  Late diagnosis means dialysis dependency, higher costs & preventable deaths.
                </p>
              </div>
            </div>

            {/* Solution Card - Full Width */}
            <div className="col-span-12 group">
              <div className="relative p-8 lg:p-10 rounded-3xl bg-gradient-to-r from-[#0E1833] to-[#1a2847] hover:shadow-2xl hover:shadow-[#0E1833]/20 transition-all duration-500 overflow-hidden">
                {/* Animated line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FA2931] to-transparent animate-pulse-slow"></div>
                
                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FA2931] to-[#ff6b6b] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#FA2931]/30">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Simple Screening Tests Can Identify CKD Early</h3>
                      <p className="text-gray-400 text-lg">But access remains limited in primary care settings where it's needed most.</p>
                    </div>
                  </div>
                  <Link to="/how-it-works">
                    <button className="flex items-center space-x-2 px-8 py-4 rounded-full bg-white text-[#0E1833] font-semibold hover:bg-gray-100 transition-all duration-300 group-hover:scale-105 shadow-xl">
                      <span>See How We Help</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What HelloKidney.ai Does */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-[#FA2931] uppercase tracking-wide mb-3">The CKD Screening Platform</p>
            <h2 className="text-[2.5rem] font-bold text-[#0E1833] mb-6">
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

      {/* Impact Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-[#FA2931] uppercase tracking-wide mb-3">Impact</p>
            <h2 className="text-[2.5rem] font-bold text-[#0E1833] mb-4">
              Real results. Really fast.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="mb-4">
                  <div className="text-sm font-semibold text-gray-500 mb-2">{stat.logo}</div>
                </div>
                <div className="text-4xl font-bold text-[#FA2931] mb-3">{stat.metric}</div>
                <p className="text-gray-700 font-medium mb-6 leading-relaxed">{stat.description}</p>
                <div className="flex items-center space-x-3 pt-4 border-t border-gray-200">
                  <div className="text-3xl">{stat.avatar}</div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{stat.author}</div>
                    <div className="text-xs text-gray-500">{stat.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-8 bg-gray-50 px-12 py-6 rounded-2xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0E1833]">40%</div>
                <div className="text-sm text-gray-600">Faster screening time</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0E1833]">25 hours</div>
                <div className="text-sm text-gray-600">Saved per person per month</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0E1833]">95%</div>
                <div className="text-sm text-gray-600">Say they catch cases earlier</div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4">Source: Healthcare provider survey 2025</p>
          </div>
        </div>
      </section>

      {/* Use Cases Section - White background */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-[#FA2931] uppercase tracking-wide mb-3">Use Cases</p>
            <h2 className="text-[2.5rem] font-bold text-[#0E1833] mb-6">
              Built for every team. For any workflow.
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Turn screening processes into playbooks to train colleagues, assist patients, and drive early detection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {detailedUseCases.map((useCase, index) => (
              <Link
                key={index}
                to="/contact"
                className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={useCase.image} 
                    alt={useCase.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030616]/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                      {useCase.icon}
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#0E1833] mb-3 group-hover:text-[#FA2931] transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
                  <div className="mt-4 flex items-center text-[#FA2931] font-semibold text-sm">
                    Learn more 
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/contact">
              <Button className="bg-[#FA2931] hover:bg-[#d91f27] text-white text-lg px-10 py-6 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
                Try HelloKidney Free
              </Button>
            </Link>
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
