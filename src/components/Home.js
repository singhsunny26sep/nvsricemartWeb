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
              <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-2xl">🌾</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">NVS Rice Mart</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Home</Link>
              <Link to="/products" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Rice Varieties</Link>
              <Link to="/services" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Our Services</Link>
              <Link to="/analytics" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">About Us</Link>
              <Link to="/settings" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Premium Quality Rice
            <br />
            <span className="text-orange-600">Delivered to Your Door</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Discover the finest varieties of rice sourced directly from the best farms across India.
            Fresh, pure, and premium quality rice for your family's health and happiness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Shop Rice Varieties
            </Link>
            <Link to="/services" className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-lg font-semibold border border-gray-300 transition-colors">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Rice Varieties Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Premium Rice Varieties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl text-green-600">🍚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Basmati Rice</h3>
              <p className="text-gray-600 mb-4">Premium long-grain aromatic rice from the foothills of Himalayas</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Aged for 1-2 years for better taste</li>
                <li>• Gluten-free and healthy</li>
                <li>• Perfect for biryani and pulao</li>
                <li>• Available in 1kg, 5kg, 25kg packs</li>
                <li>• Starting from ₹120/kg</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl text-blue-600">🌾</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sonamasuri Rice</h3>
              <p className="text-gray-600 mb-4">Traditional short-grain rice with soft texture and natural sweetness</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Daily consumption rice</li>
                <li>• Easy to cook and digest</li>
                <li>• Rich in carbohydrates</li>
                <li>• Available in 1kg, 5kg, 25kg packs</li>
                <li>• Starting from ₹80/kg</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl text-orange-600">🥘</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Brown Rice</h3>
              <p className="text-gray-600 mb-4">Whole grain rice packed with nutrients and fiber</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• High in fiber and nutrients</li>
                <li>• Low glycemic index</li>
                <li>• Perfect for health-conscious families</li>
                <li>• Available in 1kg, 5kg packs</li>
                <li>• Starting from ₹100/kg</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-orange-600 text-white rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-2">Free Home Delivery!</h3>
              <p className="mb-4">Order online and get fresh rice delivered to your doorstep within 24 hours</p>
              <Link to="/products" className="bg-white text-orange-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose NVS Rice Mart?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-orange-600">🌾</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">Handpicked, premium rice varieties sourced directly from the finest farms</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-green-600">🚚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Free home delivery within 24 hours across the city. Fresh rice guaranteed</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-blue-600">💎</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Best Prices</h3>
              <p className="text-gray-600">Competitive wholesale prices with special discounts for bulk orders</p>
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
                "NVS Rice Mart provides the best quality rice in the city. Their Basmati rice is exceptional,
                and the delivery is always on time. My family loves their products!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-orange-600 font-bold">RS</span>
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Rajesh Sharma</p>
                  <p className="text-gray-500 text-sm">Regular Customer, Delhi</p>
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
                "As a restaurant owner, I need consistent quality rice. NVS Rice Mart has been our trusted
                supplier for 3 years. Their service and product quality is outstanding!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 font-bold">PK</span>
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Priya Kapoor</p>
                  <p className="text-gray-500 text-sm">Restaurant Owner, Mumbai</p>
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
                "Excellent quality rice with very competitive prices. The free delivery service is a bonus,
                and their customer service is very responsive and helpful."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-purple-600 font-bold">AM</span>
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Amit Mehta</p>
                  <p className="text-gray-500 text-sm">Regular Customer, Bangalore</p>
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
              <div className="w-28 h-28 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                <img
                  src={founderImage}
                  alt="Vikram Singh - CEO & Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Vikram Singh</h3>
              <p className="text-orange-600 font-medium mb-2">CEO & Founder</p>
              <p className="text-gray-600 text-sm">20+ years in rice trading business</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl text-green-600">🌾</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Rajesh Kumar</h3>
              <p className="text-orange-600 font-medium mb-2">Quality Director</p>
              <p className="text-gray-600 text-sm">Expert in rice quality control</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl text-blue-600">🚚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Priya Sharma</h3>
              <p className="text-orange-600 font-medium mb-2">Operations Manager</p>
              <p className="text-gray-600 text-sm">Supply chain and logistics expert</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl text-purple-600">👨‍💼</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Amit Patel</h3>
              <p className="text-orange-600 font-medium mb-2">Customer Relations</p>
              <p className="text-gray-600 text-sm">MBA in Customer Management</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Order Premium Rice?</h2>
            <p className="text-gray-600 mb-6">Get fresh, high-quality rice delivered to your doorstep with free home delivery.</p>
            <Link to="/products" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Order Now
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
