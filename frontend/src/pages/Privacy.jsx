import React from 'react';

export const Privacy = () => {
  return (
    <div className="min-h-screen">
      <section className="py-32 bg-gradient-to-br from-[#0E1833] to-[#1a2847]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-6">
              Last updated: December 2025
            </p>

            <h2 className="text-2xl font-bold text-[#0E1833] mt-8 mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              HelloKidney.ai is committed to protecting the privacy and security of health information. This policy describes how we collect, use, and safeguard patient and user data in compliance with applicable regulations including health data protection laws in India, Kenya, and other jurisdictions where we operate.
            </p>

            <h2 className="text-2xl font-bold text-[#0E1833] mt-8 mb-4">Data Collection</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We collect patient health information necessary for kidney screening including demographics, medical history, test results (urine ACR, creatinine, eGFR), and risk assessments. User information for healthcare providers includes professional credentials and access logs.
            </p>

            <h2 className="text-2xl font-bold text-[#0E1833] mt-8 mb-4">Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              All data is encrypted in transit and at rest. Access is controlled through role-based permissions and authentication. We maintain audit logs and follow industry best practices for health information security.
            </p>

            <h2 className="text-2xl font-bold text-[#0E1833] mt-8 mb-4">Data Usage</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Patient data is used for clinical screening, monitoring, and program management. De-identified data may be used for analytics, quality improvement, and research where permitted by regulations and institutional agreements.
            </p>

            <h2 className="text-2xl font-bold text-[#0E1833] mt-8 mb-4">Contact</h2>
            <p className="text-gray-700 leading-relaxed">
              For privacy inquiries, please contact us at privacy@hellokidney.ai
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
