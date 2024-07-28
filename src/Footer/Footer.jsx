// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          {/* Logo */}
          <div className="text-4xl font-bold mb-6 md:mb-0 text-center md:text-left">
            <a href="/" className="hover:text-gray-400 transition-colors duration-300">Nike Swift</a>
          </div>
          
          {/* Links */}
          <div className="flex flex-col md:flex-row mb-6 md:mb-0 space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left">
            <a href="/about" className="hover:text-gray-400 transition-colors duration-300">About Us</a>
            <a href="/services" className="hover:text-gray-400 transition-colors duration-300">Services</a>
            <a href="/contact" className="hover:text-gray-400 transition-colors duration-300">Contact</a>
            <a href="/privacy" className="hover:text-gray-400 transition-colors duration-300">Privacy Policy</a>
          </div>

          {/* Email Subscription */}
          <div className="text-center mb-6 md:mb-0">
            <p className="text-lg font-semibold mb-2">Subscribe to our newsletter</p>
            <div className="flex flex-col md:flex-row justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 mb-2 md:mb-0 md:mr-2 rounded-l-md border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-300 shadow-md hover:shadow-lg"
              />
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 transform hover:scale-105"
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 text-2xl mb-6 md:mb-0 justify-center">
            <a href="https://facebook.com" className="hover:text-gray-400 transition-colors duration-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" className="hover:text-gray-400 transition-colors duration-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" className="hover:text-gray-400 transition-colors duration-300">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="text-center mt-6">
          <p className="text-sm">© 2024 Nike Swift. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
