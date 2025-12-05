import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import founderImage from '../img/founder.jpeg';
function Home() {
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
              <h1 className="text-2xl font-bold text-gray-900">Gigagrid</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</Link>
              <Link to="/products" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Products</Link>
              <Link to="/services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</Link>
           
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Power Your Future
            <br />
            <span className="text-blue-600">With Solar Energy</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Discover cutting-edge solar products and comprehensive services to harness the power of the sun.
            Join the renewable energy revolution with SolarGrid.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Explore Products
            </Link>
            <Link to="/services" className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-lg font-semibold border border-gray-300 transition-colors">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Solar Yojana Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Solar Yojana - Government Schemes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl text-green-600">🏛️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">PM Surya Ghar Yojana</h3>
              <p className="text-gray-600 mb-4">Get up to ₹1,80,000 subsidy for residential solar installations</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 3KW system: ₹78,000 subsidy</li>
                <li>• 2KW system: ₹60,000 subsidy</li>
                <li>• 1KW system: ₹30,000 subsidy</li>
                <li>• Free solar panels worth ₹1,00,000</li>
                <li>• Additional ₹18,000 for battery storage</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl text-blue-600">🏢</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Commercial Solar Subsidy</h3>
              <p className="text-gray-600 mb-4">40% subsidy for commercial and industrial solar installations</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Up to 500KW capacity</li>
                <li>• Accelerated depreciation</li>
                <li>• Net metering benefits</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl text-orange-600">🌞</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Solar Rooftop Scheme</h3>
              <p className="text-gray-600 mb-4">State government schemes with additional incentives</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• State-specific subsidies</li>
                <li>• Low-interest loans</li>
                <li>• Tax exemptions</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-blue-600 text-white rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-2">Get Your Subsidy Application Done!</h3>
              <p className="mb-4">We handle all paperwork and ensure you get maximum government benefits</p>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Apply for Subsidy
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose SolarGrid?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-blue-600">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">High Efficiency</h3>
              <p className="text-gray-600">Advanced solar panels with industry-leading efficiency rates up to 22%</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-green-600">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cost Savings</h3>
              <p className="text-gray-600">Reduce your electricity bills by up to 90% with our solar solutions</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-blue-600">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">Clean, renewable energy that reduces carbon footprint</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  ★★★★★
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">
                "SolarGrid installed a complete solar system for our home. The team was professional,
                the installation was seamless, and we've already seen a 70% reduction in our electricity bills!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold">RS</span>
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Rajesh Sharma</p>
                  <p className="text-gray-500 text-sm">Homeowner, Delhi</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  ★★★★★
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">
                "As a business owner, I needed reliable solar solutions. SolarGrid provided excellent
                consultation and their maintenance service has been outstanding. Highly recommended!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 font-bold">PK</span>
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Priya Kapoor</p>
                  <p className="text-gray-500 text-sm">Business Owner, Mumbai</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  ★★★★★
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">
                "The solar installation exceeded our expectations. Professional service from start to finish,
                and the monitoring dashboard helps us track our energy savings in real-time."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-purple-600 font-bold">AM</span>
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Amit Mehta</p>
                  <p className="text-gray-500 text-sm">Tech Professional, Bangalore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Expert Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-28 h-28 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                <img
                  src={founderImage}
                  alt="Sanjay Gupta - CEO & Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sanjay Gupta</h3>
              <p className="text-blue-600 font-medium mb-2">CEO & Founder</p>
              <p className="text-gray-600 text-sm">15+ years in renewable energy sector</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl text-green-600">👩‍🔬</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Meera Singh</h3>
              <p className="text-blue-600 font-medium mb-2">Technical Director</p>
              <p className="text-gray-600 text-sm">PhD in Solar Engineering</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl text-purple-600">👨‍💻</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Vikram Rao</h3>
              <p className="text-blue-600 font-medium mb-2">Lead Engineer</p>
              <p className="text-gray-600 text-sm">Certified Solar Installation Expert</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl text-orange-600">👩‍💼</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kavita Patel</h3>
              <p className="text-blue-600 font-medium mb-2">Customer Success Manager</p>
              <p className="text-gray-600 text-sm">MBA in Business Development</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Go Solar?</h2>
            <p className="text-gray-600 mb-6">Get a free consultation and personalized solar solution for your home or business.</p>
            <Link to="/services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
