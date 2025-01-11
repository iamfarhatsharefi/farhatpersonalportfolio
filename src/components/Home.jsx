import React, { useEffect } from 'react';
import { AiOutlineDownload } from 'react-icons/ai';

function Home() {
  useEffect(() => {
    const pointerCircle = document.createElement('div');
    pointerCircle.classList.add('pointer-circle');
    document.body.appendChild(pointerCircle);

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      pointerCircle.style.left = `${x - pointerCircle.offsetWidth / 2}px`;
      pointerCircle.style.top = `${y - pointerCircle.offsetHeight / 2}px`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.body.removeChild(pointerCircle);
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 py-12 bg-gray-900 relative overflow-hidden">
      {/* Left Side Content */}
      <div className="space-y-6 md:space-y-8 text-gray-300 text-center md:text-left z-10">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-500 via-red-500 to-purple-500 text-transparent bg-clip-text animate-text">
          I am Farhat Sharefi
        </h1>
        <p className="text-lg md:text-xl">
        Junior Web Developer & Graphic Design Student at Kabul University
With a heart full of creativity and a passion for coding, I turn challenges into beautiful solutions. Combining my love for design and web development, I’m driven to craft seamless, innovative experiences that inspire.


        </p>

        {/* Social Media Icons */}
        <ul className="flex justify-center md:justify-start space-x-6 text-3xl">
          <li>
            <a
              href="https://www.linkedin.com/in/farhat-sharefi-13a101309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                id="social-icon1"
                src="/images/LinkedIn Circled.png"
                alt="LinkedIn"
                className="hover:scale-110 transition-all duration-300 transform"
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/iamfarhatsharefi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                id="social-icon2"
                src="/images/GitHub.png"
                alt="GitHub"
                className="hover:scale-110 transition-all duration-300 transform"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/share/pr9qDL3r8b3LffJ7/?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                id="social-icon3"
                src="/images/fb.png"
                alt="Facebook"
                className="hover:scale-110 transition-all duration-300 transform"
              />
            </a>
          </li>
        </ul>
      </div>

      {/* Right Side Profile Image */}
      <div className="mb-8 md:mb-0 md:block">
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
          <img
            src="/images/employe1.png"
            alt="Profile"
            className="w-full h-full rounded-full object-cover shadow-lg transform hover:scale-110 transition-all duration-500 relative z-10"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-500 via-red-500 to-purple-500 blur-sm opacity-50" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-purple-600 opacity-30 animate-pulse" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-yellow-500 border-l-purple-500 animate-spin-slow" />
        </div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 opacity-30 animate-gradient-x" />
    </section>
  );
}

export default Home;
