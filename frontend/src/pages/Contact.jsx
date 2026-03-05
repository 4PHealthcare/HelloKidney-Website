import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { mockContactSubmission } from '../utils/mock';
import { toast } from 'sonner';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    role: '',
    email: '',
    country: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({
      ...prev,
      country: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await mockContactSubmission(formData);
      if (response.success) {
        toast.success(response.message);
        setFormData({
          name: '',
          organisation: '',
          role: '',
          email: '',
          country: '',
          message: ''
        });
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-[#0E1833] to-[#1a2847]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Partner with HelloKidney.ai for early CKD screening. Let's discuss how we can support your organization.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#0E1833] mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-[#0E1833] font-medium">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="mt-2 border-gray-300 focus:border-[#FA2931] focus:ring-[#FA2931]"
                  />
                </div>

                <div>
                  <Label htmlFor="organisation" className="text-[#0E1833] font-medium">Organisation *</Label>
                  <Input
                    id="organisation"
                    name="organisation"
                    value={formData.organisation}
                    onChange={handleChange}
                    required
                    placeholder="Your organisation name"
                    className="mt-2 border-gray-300 focus:border-[#FA2931] focus:ring-[#FA2931]"
                  />
                </div>

                <div>
                  <Label htmlFor="role" className="text-[#0E1833] font-medium">Role *</Label>
                  <Input
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    placeholder="e.g., Doctor, Program Manager, Director"
                    className="mt-2 border-gray-300 focus:border-[#FA2931] focus:ring-[#FA2931]"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-[#0E1833] font-medium">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="mt-2 border-gray-300 focus:border-[#FA2931] focus:ring-[#FA2931]"
                  />
                </div>

                <div>
                  <Label htmlFor="country" className="text-[#0E1833] font-medium">Country *</Label>
                  <Select onValueChange={handleSelectChange} value={formData.country} required>
                    <SelectTrigger className="mt-2 border-gray-300 focus:border-[#FA2931] focus:ring-[#FA2931]">
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="india">India</SelectItem>
                      <SelectItem value="kenya">Kenya</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-[#0E1833] font-medium">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your screening needs, program details, or any questions you have..."
                    rows={5}
                    className="mt-2 border-gray-300 focus:border-[#FA2931] focus:ring-[#FA2931]"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#FA2931] hover:bg-[#d91f27] text-white font-semibold py-6 text-lg transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-50 p-10 rounded-2xl border border-gray-200">
              <h3 className="text-2xl font-bold text-[#0E1833] mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#FA2931] rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0E1833] mb-1">Email</h4>
                    <p className="text-gray-600">info@hellokidney.ai</p>
                    <p className="text-gray-600">support@hellokidney.ai</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#FA2931] rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0E1833] mb-1">Phone</h4>
                    <p className="text-gray-600">+91 (xxx) xxx-xxxx</p>
                    <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9AM-6PM IST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#FA2931] rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0E1833] mb-1">Location</h4>
                    <p className="text-gray-600">Hyderabad, India</p>
                    <p className="text-sm text-gray-500 mt-1">Serving India, Kenya, and beyond</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-300">
                <h4 className="font-semibold text-[#0E1833] mb-3">Office Hours</h4>
                <div className="space-y-2 text-gray-600">
                  <p className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">10:00 AM - 2:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
