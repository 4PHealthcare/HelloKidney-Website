import React from 'react';
import { faqData } from '../utils/mock';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

export const FAQ = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-[#0E1833] to-[#1a2847]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Find answers to common questions about HelloKidney.ai and our kidney screening platform.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={`item-${faq.id}`}
                className="bg-gray-50 border border-gray-200 rounded-xl px-6 hover:shadow-md transition-shadow duration-200"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-[#0E1833] hover:text-[#FA2931] transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed pb-6 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#0E1833] mb-6">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We're here to help. Reach out to our team for more information about HelloKidney.ai.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-[#FA2931] hover:bg-[#d91f27] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};
