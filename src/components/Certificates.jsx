import React, { useState } from 'react';

const certificatesData = [
  {
    topic: 'Responsive Web Design',
    description: 'Core principles of web development, emphasizing structure, functionality, and design',
    image: '/images/ssss.jpg',
  },
  {
    topic: 'JavaScript and algorithms',
    description: 'Proficient in JavaScript to create dynamic and interactive web experiences.',
    image: '/images/ffff.jpg',
  },
  {
    topic: 'Frontend Libraries',
    description: 'Advanced focus on solving complex problems and managing data effectively.',
    image: '/images/frontendc.jpg',
  },
  {
    topic: 'Html and css crash',
    description: 'Intensive training in HTML and CSS.',
    image: '/images/cert.jpg',
  },
  {
    topic: 'photography and Graphic design',
    description: 'Skilled in photography and graphic design.',
    image: '/images/P- (15) Farhat Sharifi.jpg',
  },
];

function Certificates() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (
      prevIndex === 0 ? certificatesData.length - 1 : prevIndex - 1
    ));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (
      prevIndex === certificatesData.length - 1 ? 0 : prevIndex + 1
    ));
  };

  return (
    <section className="py-12 bg-whitesmoke">
      <h2 className="text-center text-4xl font-bold text-white mb-8">
        Certificates
      </h2>

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Slider Content */}
        <div className="flex flex-col items-center space-y-4">
          <img
            src={certificatesData[currentIndex].image}
            alt={certificatesData[currentIndex].topic}
            className="w-80 h-60 object-cover rounded-lg shadow-lg border-2 border-gray-300"
          />
          <h3 className="text-2xl font-semibold text-gray-300">
            {certificatesData[currentIndex].topic}
          </h3>
          <p className="text-center text-gray-300">
            {certificatesData[currentIndex].description}
          </p>
        </div>

        {/* Navigation Buttons */}
        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-yellow-600 transition"
        >
          &#8592;
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-yellow-600 transition"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
}

export default Certificates;
