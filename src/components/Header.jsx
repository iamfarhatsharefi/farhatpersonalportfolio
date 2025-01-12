import React, { useState } from 'react';
import { FaHamburger, FaTimes, FaRocket } from 'react-icons/fa'; // Added a new icon for a fresh look

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 ${
        menuOpen ? 'bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600' : 'bg-black bg-opacity-70 backdrop-blur-sm'
      } transition-all duration-500 shadow-xl`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo with new creative effect */}
        <a
          href="#home"
          className="text-5xl font-extrabold text-pink-500 hover:text-pink-400 transition-transform duration-500 transform hover:scale-110 font-serif text-shadow-md"
        >
          <FaRocket className="inline-block text-pink-500 text-4xl mr-2 animate-bounce" />
          Farhat
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-white font-serif">
          <ul className="flex space-x-8">
            <li>
              <a
                href="#home"
                className="hover:text-pink-500 transition duration-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-pink-500 transition duration-500"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-pink-500 transition duration-500"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#certificates"
                className="hover:text-pink-500 transition duration-500"
              >
                Certificates
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-pink-500 transition duration-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-pink-500 text-3xl focus:outline-none"
            type="button"
          >
            {menuOpen ? <FaTimes /> : <FaHamburger />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-gray-800 bg-opacity-80 backdrop-blur-sm z-40">
          <button
            onClick={closeMenu}
            className="absolute top-4 right-4 text-pink-500 text-4xl focus:outline-none"
            type="button"
          >
            <FaTimes />
          </button>
          <div className="flex flex-col items-center justify-center text-white h-full">
            <nav>
              <ul className="space-y-6 text-3xl font-serif">
                <li>
                  <a href="#home" onClick={closeMenu}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#projects" onClick={closeMenu}>
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#skills" onClick={closeMenu}>
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#certificates" onClick={closeMenu}>
                    Certificates
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={closeMenu}>
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
