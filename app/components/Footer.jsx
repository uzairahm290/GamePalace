import React from 'react';
import { 
  FaCrown, 
  FaComments, 
  FaDiscord, 
  FaMoon,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTiktok,
  FaGamepad
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Information - Left Column */}
          <div className="md:col-span-1">
            {/* Logo */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                <FaGamepad className="text-white text-2xl" />
              </div>
              <h2 className="text-xl font-bold">HUH Boost</h2>
            </div>
            
            {/* Main Title */}
            <h3 className="text-2xl font-bold mb-3">
              The All-In-One Platform for Gamers
            </h3>
            
            {/* Subtitle */}
            <p className="text-gray-400 mb-6">
              Changing the lives of everyday gamers, one game at a time.
            </p>
            
            {/* Contact Details */}
            <div className="text-gray-400 text-sm space-y-1">
              <p>Headquarters</p>
              <p>Office address</p>
              <p>Global Gaming Services d.o.o.</p>
              <p>Croatia</p>
            </div>
          </div>

          {/* Company Links - Second Column */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Work with us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Definitions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Site Map</a></li>
            </ul>
          </div>

          {/* Legal Links - Third Column */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/terms-of-service" className="hover:text-white transition-colors">Terms of service</a></li>
              <li><a href="/privacy-policy" className="hover:text-white transition-colors">Privacy policy</a></li>
              <li><a href="/cookies-policy" className="hover:text-white transition-colors">Cookies policy</a></li>
              <li><a href="/code-of-honor" className="hover:text-white transition-colors">Code of honor</a></li>
              <li><a href="/report-abuse" className="hover:text-white transition-colors">Report Abuse</a></li>
            </ul>
          </div>

          {/* Need Help Section - Fourth Column */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-bold mb-4">Need Help?</h4>
            <p className="text-gray-400 mb-6">
              We're here to help. Our expert human-support team is at your service 24/7.
            </p>
            
            {/* Action Buttons */}
            <div className="space-y-3 mb-6">
              <button className="group relative flex items-center space-x-2 px-4 py-2 bg-white/5 backdrop-blur-xl text-white rounded-lg hover:bg-white/10 transition-all duration-500 w-full overflow-hidden shadow-lg hover:shadow-white/5 border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <FaComments className="text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                <span className="relative z-10 group-hover:text-blue-300 transition-colors duration-300">Let's Chat</span>
              </button>
              
              <button className="group relative flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 backdrop-blur-xl text-white rounded-lg hover:from-blue-600/90 hover:to-purple-600/90 transition-all duration-500 w-full overflow-hidden shadow-xl hover:shadow-blue-500/25 border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <FaDiscord className="text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                <span className="relative z-10">Join Discord</span>
              </button>
            </div>
            
            {/* Language and Theme Selector */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <span className="text-sm">English / EUR</span>
              </div>
              <button className="p-2 text-gray-400 hover:text-white transition-colors">
                <FaMoon className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright, Partners, Social Media */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              Copyright © 2025 Global Gaming Services d.o.o. All rights Reserved
            </div>
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaYoutube className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTiktok className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


/**
 * @typedef {Object} FooterProps
 * @property {FooterQuery} footer
 * @property {HeaderQuery} header
 * @property {string} publicStoreDomain
 */

/** @typedef {import('storefrontapi.generated').FooterQuery} FooterQuery */
/** @typedef {import('storefrontapi.generated').HeaderQuery} HeaderQuery */
