import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-2xl">🌾</span>
              </div>
              <h3 className="text-2xl font-bold">NVS Rice Mart</h3>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Premium quality rice supplier offering fresh, pure, and authentic rice varieties sourced directly
              from the finest farms across India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <span className="text-xl">📘</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <span className="text-xl">🐦</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <span className="text-xl">📷</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <span className="text-xl">💼</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Rice Varieties
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-orange-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Basmati Rice
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Sonamasuri Rice
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Brown Rice
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Bulk Orders
                </a>
              </li>
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Download Our App</h4>
            <div className="flex flex-col space-y-3">
              <a href="https://drive.google.com/file/d/1yreKUS7XpGVp6AnjyGCGehWJk3wzOS3j/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="inline-block">
                <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" className="h-12 hover:opacity-80 transition-opacity" />
              </a>
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="inline-block">
                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" className="h-10 hover:opacity-80 transition-opacity" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <span className="text-orange-400 mr-3">📍</span>
              <div>
                <p className="text-white font-medium">Address</p>
                <p className="text-gray-400">456 Grain Market, Rice District, India</p>
              </div>
            </div>

            <div className="flex items-center">
              <span className="text-orange-400 mr-3">📞</span>
              <div>
                <p className="text-white font-medium">Phone</p>
                <p className="text-gray-400">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-center">
              <span className="text-orange-400 mr-3">✉️</span>
              <div>
                <p className="text-white font-medium">Email</p>
                <p className="text-gray-400">info@nvsricemart.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 NVS Rice Mart. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
              Quality Guarantee
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
