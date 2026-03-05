import React from 'react';

export const Terms = () => {
  return (
    <div className="min-h-screen">
      <section className="py-32 bg-gradient-to-br from-[#0E1833] to-[#1a2847]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Terms of Service
          </h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-6">
              Last updated: December 2025
            </p>

            <h2 className="text-2xl font-bold text-[#0E1833] mt-8 mb-4">Terms of Use</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              HelloKidney.ai provides a platform for kidney health screening and management. By using our services, you agree to these terms and conditions.
            </p>

            <h2 className="text-2xl font-bold text-[#0E1833] mt-8 mb-4">Intended Use</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              HelloKidney.ai is intended for use by qualified healthcare professionals for screening and clinical decision support. It is not a diagnostic device and does not replace professional medical judgment.
            </p>

            <h2 className="text-2xl font-bold text-[#0E1833] mt-8 mb-4">User Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Users must maintain the confidentiality of their access credentials, use the platform in accordance with local clinical guidelines, and ensure appropriate patient consent is obtained.
            </p>

            <h2 className="text-2xl font-bold text-[#0E1833] mt-8 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              HelloKidney.ai provides screening support tools. Clinical decisions remain the responsibility of qualified healthcare professionals. We are not liable for clinical outcomes or decisions made using the platform.
            </p>

            <h2 className="text-2xl font-bold text-[#0E1833] mt-8 mb-4">Modifications</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We may update these terms periodically. Continued use of the platform constitutes acceptance of updated terms.
            </p>

            <h2 className="text-2xl font-bold text-[#0E1833] mt-8 mb-4">Contact</h2>
            <p className="text-gray-700 leading-relaxed">
              For questions about these terms, contact legal@hellokidney.ai
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
