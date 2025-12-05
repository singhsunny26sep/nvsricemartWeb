import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Services() {
  const services = [
    {
      id: 1,
      name: "Solar System Design & Installation",
      description: "Complete end-to-end solar system design and professional installation services",
      price: "Starting from ₹1,50,000",
      icon: "🏗️",
      features: [
        "Site assessment and feasibility study",
        "Custom system design",
        "Professional installation",
        "System testing and commissioning",
        "Performance warranty"
      ]
    },
    {
      id: 2,
      name: "Solar Maintenance & Support",
      description: "Comprehensive maintenance services to keep your solar system performing optimally",
      price: "₹5,000/year",
      icon: "🔧",
      features: [
        "Regular system inspection",
        "Cleaning and maintenance",
        "Performance monitoring",
        "24/7 technical support",
        "Emergency repairs"
      ]
    },
    {
      id: 3,
      name: "Energy Audit & Consultation",
      description: "Professional energy assessment to optimize your solar investment",
      price: "₹10,000",
      icon: "📊",
      features: [
        "Energy consumption analysis",
        "Solar potential assessment",
        "ROI calculations",
        "Government subsidy guidance",
        "Custom recommendations"
      ]
    },
    {
      id: 4,
      name: "Solar Battery Installation",
      description: "Expert installation of solar battery storage systems for energy independence",
      price: "₹50,000",
      icon: "🔋",
      features: [
        "Battery system design",
        "Professional installation",
        "System integration",
        "Safety testing",
        "User training"
      ]
    },
    {
      id: 5,
      name: "Solar Panel Upgradation",
      description: "Upgrade your existing solar system with latest technology panels",
      price: "₹75,000",
      icon: "⬆️",
      features: [
        "System assessment",
        "Upgrade planning",
        "Panel replacement",
        "System optimization",
        "Performance guarantee"
      ]
    },
    {
      id: 6,
      name: "Training & Education",
      description: "Comprehensive training programs for solar system owners and installers",
      price: "₹15,000",
      icon: "🎓",
      features: [
        "System operation training",
        "Maintenance workshops",
        "Safety protocols",
        "Troubleshooting guides",
        "Certification programs"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-2xl">☀️</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">SolarGrid</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</Link>
              <Link to="/products" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Products</Link>
              <Link to="/services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</Link>
              <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Dashboard</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Professional solar services from design to maintenance. We provide comprehensive solutions for all your solar energy needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl text-blue-600">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <p className="text-2xl font-bold text-blue-600 mb-4">{service.price}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-gray-900 font-medium mb-2">What's Included:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                  Get Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-blue-600">1️⃣</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Consultation</h3>
              <p className="text-gray-600">Free assessment and consultation</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-blue-600">2️⃣</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Design</h3>
              <p className="text-gray-600">Custom system design and planning</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-blue-600">3️⃣</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Installation</h3>
              <p className="text-gray-600">Professional installation service</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-blue-600">4️⃣</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Support</h3>
              <p className="text-gray-600">Ongoing maintenance and support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-6">Contact us today for a free consultation and quote for your solar project.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Request Quote
              </button>
              <Link to="/products" className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-lg font-semibold border border-gray-300 transition-colors">
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Services;