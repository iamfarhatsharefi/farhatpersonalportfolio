import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
} from 'react-icons/fa';

const projects = [
  {
    title: '1: Personal Portfolio Webpage',
    description: 'My Personal Portfolio Webpage showcases my skills and projects in web development. Built with HTML and CSS.',
    images: ['images/portfolio.png'],
    liveLink: 'https://iamfarhatsharefi.github.io/personal-portfolio/',
    sourceLink: 'https://github.com/iamfarhatsharefi/personal-portfolio',
  },
  {
    title: '2: Roman Numeral Converter',
    description: 'Roman Numeral Converter is a web application designed to convert numbers between Roman numerals and Arabic numerals.',
    images: ['images/roman.png'],
    liveLink: 'https://iamfarhatsharefi.github.io/Roman-Numeral-Converter/',
    sourceLink: 'https://github.com/iamfarhatsharefi/Roman-Numeral-Converter',
  },
  {
    title: '3: Palindrome Checker',
    description: 'Palindrome Checker is a web application designed to determine whether a given string is a palindrome.',
    images: ['images/Picture1.png'],
    longDescription: 'Palindrome Checker is an innovative web application that determines whether a given string is a palindrome, meaning it reads the same forwards and backwards. Built using HTML, CSS, and JavaScript, this project demonstrates my proficiency in front-end web development and interactive design.',
    technologies: ['HTML', 'CSS', 'JS'],
    liveLink: 'https://iamfarhatsharefi.github.io/PalindromeChecker/',
    sourceLink: 'https://github.com/iamfarhatsharefi/PalindromeChecker',
  },
  {
    title: '4: Telephone Number Validator',
    description: 'Telephone Number Validator is a web application designed to verify the validity of telephone numbers.',
    images: ['images/Picture3.png'],
    longDescription: 'Telephone Number Validator is a robust web application developed to verify the validity of telephone numbers, ensuring they meet specific formatting criteria. Built using HTML, CSS, and JavaScript, this project showcases my skills in creating practical, interactive web applications that deliver a seamless user experience.',
    technologies: ['HTML', 'CSS', 'JS'],
    liveLink: 'https://iamfarhatsharefi.github.io/TelephoneNumberValidator/',
    sourceLink: 'https://github.com/iamfarhatsharefi/TelephoneNumberValidator',
  },
  {
    title: '5: Pokémon Search App',
    description: 'Pokémon Search App allows users to search for and view detailed information about various Pokémon.',
    images: ['images/picture 5.png'],
    longDescription: 'Pokémon Search App is an engaging web application designed to provide users with detailed information about their favorite Pokémon. Built using HTML, CSS, and JavaScript, this project highlights my skills in developing dynamic, interactive web applications that offer a seamless user experience.',
    screenshots: ['images/PPP2.png', 'images/PO2.png'],
    technologies: ['HTML', 'CSS', 'JS'],
    liveLink: 'https://iamfarhatsharefi.github.io/Pokeman-search-App/',
    sourceLink: 'https://github.com/iamfarhatsharefi/Pokeman-search-App',
  },
  {
    title: '6: Cash-Register',
    description: 'This project is a cash register application designed to calculate change and manage cash transactions.',
    images: ['images/Picture4 cash register.png'],
    longDescription: 'It allows users to input a purchase price and the amount paid by the customer, then calculates the change due. The application considers the available cash in the drawer (CID) and determines whether the transaction results in "INSUFFICIENT_FUNDS", "CLOSED", or remains "OPEN". It handles various denominations (PENNY, NICKEL, DIME, QUARTER, ONE, FIVE, TEN, TWENTY, ONE HUNDRED) and displays the status of the transaction dynamically on the screen.',
    technologies: ['HTML', 'CSS', 'JS'],
    liveLink: 'https://iamfarhatsharefi.github.io/Cash-Register/',
    sourceLink: 'https://github.com/iamfarhatsharefi/Cash-Register',
  },
  {
    title: '7✨ Markdown Previewer:',
    description: 'This project introduces significant enhancements and features to the Markdown Previewer project.',
    images: ['images/previewer.PNG'],
    longDescription: 'The primary objective is to ensure that the previewer accurately reflects Markdown syntax in real-time while providing a smooth and responsive user experience. This update also ensures full compliance with FreeCodeCamp requirements, ESLint checks, and optimized design for both desktop and mobile responsiveness.',
    technologies: ['HTML', 'CSS', 'JS', 'REACT.JS'],
    liveLink: 'https://luminous-muffin-3f93df.netlify.app/',
    sourceLink: 'https://github.com/iamfarhatsharefi/Markdown-Previewer',
  },
  {
    title: '8✨ Javascript Calculator:',
    description: 'This project brings a touch of brilliance to the FreeCodeCamp JavaScript Calculator project! 🚀',
    images: ['images/calculatorphoto.PNG'],
    longDescription: 'Brings a touch of brilliance to the FreeCodeCamp JavaScript Calculator project! 🚀 We’ve meticulously crafted a dynamic, user-friendly calculator that embodies both elegance and functionality. Dive into a world of clean code and stunning design!',
    technologies: ['REACT.JS'],
    liveLink: 'https://deploy-preview-1--comforting-shortbread-5df959.netlify.app',
    sourceLink: 'https://github.com/iamfarhatsharefi/javascript-calculator',
  },
  {
    title: '9✨ Dynamic Drum Machine',
    description: 'The Dynamic Drum Machine is a fully interactive and responsive web application built using React and Bootstrap, designed to simulate a real drum machine.',
    images: ['images/drumphoto.PNG'],
    longDescription: 'The app is packed with custom audio clips, and it updates in real-time to reflect the drum pad being played. It offers a smooth and engaging user experience for both desktop and mobile users, passing all the requirements of the FreeCodeCamp Drum Machine project.',
    technologies: ['REACT.JS'],
    liveLink: 'https://darling-madeleine-3b4c04.netlify.app/',
    sourceLink: 'https://github.com/iamfarhatsharefi/drum-machine',
  },
  {
    title: '10✨ 🕒 Clock Project',
    description: 'This Clock Project is a dynamic and responsive digital clock application built with React.',
    images: ['images/clockpicture.PNG'],
    longDescription: 'It displays real-time updates and offers a clean, minimalistic user interface. The clock is fully customizable, featuring different themes and adaptable layouts for mobile, tablet, and desktop screens. The project utilizes React hooks for efficient state management and adheres to best coding practices using ESLint and Stylelint for clean, maintainable code.',
    technologies: ['REACT.JS'],
    liveLink: 'https://clock-lqoqqw853-farhat-sharefis-projects.vercel.app/',
    sourceLink: 'https://github.com/iamfarhatsharefi/clock',
  },
  {
    title: '11✨ Space Travelers Hub',
    description: 'Space Travelers Hub is an exciting, interactive web application that allows users to explore space missions, learn about spacecraft, and track astronauts\' journeys.',
    images: ['images/reactspace.PNG'],
    longDescription: 'Space Travelers Hub is a dynamic web application designed to bring space exploration to life. This platform offers an interactive experience where users can discover real-time space missions, learn about various spacecraft, and track the journeys of astronauts. With a user-friendly interface and rich data on space agencies and missions, the app provides educational content alongside engaging visuals.',
    technologies: ['React.js'],
    liveLink: 'https://dev--earnest-wisp-77ac4d.netlify.app/',
    sourceLink: 'https://github.com/Saqibi4213/space-travelers/pulls',
  },
   {
    title: '11 🎬✨Movie App',
    description: 'The ultimate gateway to explore and discover the world of cinema! Whether you’re a casual moviegoer or a passionate film aficionado, this app offers a seamless and engaging experience.',
    images: ['images/movie app.PNG'], 
    longDescription: 'Immerse yourself in the magic of storytelling by browsing through popular films, viewing detailed information, and enjoying a unique cinematic experience.',
    technologies: ['Next.js'],
    liveLink: 'https://clock-lqoqqw853-farhat-sharefis-projects.vercel.app/',
    sourceLink: 'https://github.com/iamfarhatsharefi/movie-app',
  },
];

const technologyIcons = {
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  JS: <FaJs />,
  REACT: <FaReact />,
};

function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>
                <div className="flex space-x-2 mb-4">
                  {Object.keys(technologyIcons).map((tech) => (
                    <span key={tech} className="text-lg text-yellow-500">
                      {technologyIcons[tech]}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
