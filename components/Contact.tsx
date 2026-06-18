"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title">Get Your Free Quote</h2>
          <p className="section-subtitle">
            Fill out the form below and we'll get back to you within 15 minutes. Or call us now at{" "}
            <a href="tel:+15551234567" className="text-blue-600 font-semibold hover:underline">
              (555) 123-4567
            </a>.
          </p>

          {submitted ? (
            <div className="text-center py-12 bg-green-50 rounded-2xl border border-green-200">
              <span className="text-5xl">✅</span>
              <h3 className="text-2xl font-bold text-gray-800 mt-4">Thank You!</h3>
              <p className="text-gray-500 mt-2">
                We've received your request and will contact you shortly.
              </p>
              <p className="text-gray-500 mt-1">
                Need immediate help? Call{" "}
                <a href="tel:+15551234567" className="text-blue-600 font-semibold">
                  (555) 123-4567
                </a>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="(555) 000-0000"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  Service Needed *
                </label>
                <select
                  id="service"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors bg-white"
                >
                  <option value="">Select a service...</option>
                  <option>Emergency Repair</option>
                  <option>Drain Cleaning</option>
                  <option>Water Heater Service</option>
                  <option>Toilet Repair / Install</option>
                  <option>Fixture Installation</option>
                  <option>Leak Detection</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Describe Your Issue
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
                  placeholder="Tell us what's going on..."
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full text-lg !py-4">
                Send Request
              </button>
              <p className="text-xs text-gray-400 text-center">
                By submitting, you agree to be contacted about your inquiry. We respect your privacy.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
