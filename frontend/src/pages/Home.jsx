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

      {/* The Problem Section - Dramatic Impact */}
      <section className="relative py-20 sm:py-28 bg-white overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FA2931]/5 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#0E1833]/5 rounded-full blur-[120px]"></div>
        </div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0E1833 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Label */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-flex items-center space-x-2 bg-[#FA2931]/10 backdrop-blur-sm px-4 py-2 rounded-full border border-[#FA2931]/20">
              <span className="w-2 h-2 bg-[#FA2931] rounded-full animate-pulse"></span>
              <span className="text-sm text-[#FA2931] font-semibold uppercase tracking-wider">The Problem</span>
            </span>
          </div>

          {/* Main Content - Three Stacked Cards */}
          <div className="space-y-6 sm:space-y-8">
            {/* Card 1 - The Statistic */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FA2931]/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 sm:p-10 hover:border-[#FA2931]/30 hover:shadow-xl transition-all duration-500">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
                  <div className="flex-shrink-0">
                    <div className="text-6xl sm:text-8xl lg:text-9xl font-black text-[#FA2931]" style={{ lineHeight: '1' }}>
                      90%
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-xl sm:text-2xl lg:text-3xl text-[#0E1833] font-medium leading-relaxed">
                      of people with kidney disease <span className="text-[#FA2931] font-bold">don't know they have it.</span>
                    </p>
                    <p className="text-base sm:text-lg text-gray-500 mt-3">
                      When they finally discover it, kidneys are often beyond saving.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - The Gap */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 sm:p-10 hover:border-amber-500/30 hover:shadow-xl transition-all duration-500">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center">
                      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-xl sm:text-2xl text-[#0E1833] font-medium leading-relaxed">
                      But even when we detect CKD early, <span className="text-amber-600 font-bold">patients fall through the cracks.</span>
                    </p>
                    <div className="flex flex-wrap gap-3 mt-4">
                      <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-600 text-sm border border-gray-200">No clear treatment plan</span>
                      <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-600 text-sm border border-gray-200">No follow-up</span>
                      <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-600 text-sm border border-gray-200">No action</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - The Truth */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FA2931]/20 to-[#FA2931]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-r from-[#FA2931] to-[#d91f27] rounded-2xl p-6 sm:p-10 shadow-xl shadow-[#FA2931]/20 hover:shadow-2xl hover:shadow-[#FA2931]/30 transition-all duration-500">
                <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 flex items-center justify-center">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold leading-tight">
                      Detection without action saves no one.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="relative py-20 sm:py-28 bg-[#f8fafc] overflow-hidden">
        {/* Background subtle pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#0E1833 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header - Centered at top */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center space-x-2 bg-[#0E1833]/5 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#0E1833]/10">
              <span className="w-2 h-2 bg-[#0E1833] rounded-full"></span>
              <span className="text-sm text-[#0E1833] font-semibold uppercase tracking-wider">Our Solution</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0E1833] leading-tight max-w-3xl mx-auto">
              HelloKidney bridges the gap between detection and care.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              {/* Description */}
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Screen patients for chronic kidney disease in minutes using urine ACR and eGFR. Then get physician-led, KDIGO guideline-directed treatment recommendations — personalised to each patient's clinical data and test results.
              </p>

              {/* Highlight Statement */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-16 bg-gradient-to-b from-[#FA2931] to-[#FA2931]/30 rounded-full"></div>
                <p className="text-xl sm:text-2xl font-semibold text-[#0E1833]">
                  From screening to treatment plan in one app.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <button className="px-8 py-4 bg-[#FA2931] text-white font-semibold rounded-full hover:bg-[#d91f27] transition-all duration-300 shadow-lg shadow-[#FA2931]/20 hover:shadow-xl">
                    Request a Demo
                  </button>
                </Link>
                <Link to="/how-it-works">
                  <button className="px-8 py-4 bg-white text-[#0E1833] font-semibold rounded-full border border-gray-200 hover:border-[#0E1833]/30 hover:bg-gray-50 transition-all duration-300">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Image - Mobile App Screenshot */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glow effect behind phone */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FA2931]/10 via-[#0E1833]/5 to-transparent rounded-[2rem] blur-2xl scale-110"></div>
                
                {/* Phone mockup container */}
                <div className="relative bg-[#0E1833] rounded-[1.5rem] p-1.5 shadow-xl shadow-[#0E1833]/20">
                  <img 
                    src="https://customer-assets.emergentagent.com/job_25f4e8fb-a300-4335-9732-e97354468626/artifacts/c1ccldvq_hellokidney_mobile%20app.png"
                    alt="HelloKidney Mobile App"
                    className="w-[200px] sm:w-[240px] rounded-[1.2rem]"
                  />
                </div>
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
