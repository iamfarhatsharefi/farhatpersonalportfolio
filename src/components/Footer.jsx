import React from 'react';
import { FaRocket } from 'react-icons/fa'; // Retaining the rocket icon for creativity

// Function declaration
function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-700 via-indigo-800 to-purple-900 text-gray-100 py-6 text-center md:text-left">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="mb-2 md:mb-0 text-lg font-semibold text-orange-400">
          &copy;
          <span>{new Date().getFullYear()}</span>
          <span> Designed with love and innovation by Farhat Sharefi</span>
        </p>
        <div className="flex items-center mt-2 md:mt-0">
          <FaRocket className="text-yellow-400 mr-2 animate-pulse" />
          <span className="text-yellow-400">Building the future, one line at a time!</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
