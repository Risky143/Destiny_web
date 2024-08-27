import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Logo and Social Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <div className="flex flex-col items-center md:items-start">
              <img src="/images/logo2.png" alt="Destiny Logo" className="mb-4 w-[162px] h-[85px]" />
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.04c-5.51 0-10 4.49-10 10 0 4.41 2.88 8.15 6.84 9.48.5.09.68-.22.68-.49v-1.68c-2.78.6-3.37-1.2-3.37-1.2-.45-1.15-1.11-1.45-1.11-1.45-.91-.62.07-.61.07-.61 1.01.07 1.54 1.05 1.54 1.05.9 1.53 2.36 1.09 2.93.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.12-4.56-4.96 0-1.1.39-2 .99-2.71-.1-.25-.43-1.27.09-2.64 0 0 .82-.26 2.7 1.03a9.44 9.44 0 0 1 4.92 0c1.88-1.29 2.7-1.03 2.7-1.03.52 1.37.19 2.39.09 2.64.61.71.99 1.61.99 2.71 0 3.86-2.34 4.71-4.57 4.96.36.31.69.93.69 1.88v2.79c0 .27.18.58.69.48a10.02 10.02 0 0 0 6.81-9.48c0-5.51-4.49-10-10-10z" />
                  </svg>
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.643 4.937a9.983 9.983 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.905 9.905 0 0 1-3.127 1.184 4.916 4.916 0 0 0-8.372 4.482A13.945 13.945 0 0 1 1.671 3.15a4.914 4.914 0 0 0 1.523 6.574 4.895 4.895 0 0 1-2.229-.616v.062a4.913 4.913 0 0 0 3.946 4.814 4.902 4.902 0 0 1-2.224.084 4.918 4.918 0 0 0 4.588 3.42 9.867 9.867 0 0 1-6.102 2.1c-.396 0-.79-.023-1.174-.068a13.897 13.897 0 0 0 7.548 2.212c9.056 0 14.01-7.503 14.01-14.011 0-.213-.005-.425-.014-.636a10.025 10.025 0 0 0 2.459-2.547z" />
                  </svg>
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .732.592 1.324 1.325 1.324h11.494v-9.294h-3.127v-3.622h3.127v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.461.099 2.792.143v3.237h-1.917c-1.504 0-1.794.716-1.794 1.762v2.317h3.589l-.467 3.622h-3.122v9.294h6.11c.732 0 1.324-.592 1.324-1.325v-21.351c0-.733-.592-1.325-1.324-1.325z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* Links and Courses */}
          <div className="w-full sm:w-1/2 md:w-1/3 mb-6 md:mb-0">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="mb-6 md:mb-0">
                <h2 className="text-lg font-bold text-gray-800 mb-4">Links</h2>
                <ul className="text-gray-700 space-y-2">
                  <li><a href="#" className="hover:underline">Home</a></li>
                  <li><a href="#" className="hover:underline">About Destiny</a></li>
                  <li><a href="#" className="hover:underline">Why Choose Us</a></li>
                  <li><a href="#" className="hover:underline">Courses</a></li>
                  <li><a href="#" className="hover:underline">Service</a></li>
                </ul>
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-800 mb-4">Courses</h2>
                <ul className="text-gray-700 space-y-2">
                  <li><a href="#" className="hover:underline">React</a></li>
                  <li><a href="#" className="hover:underline">JavaScript</a></li>
                  <li><a href="#" className="hover:underline">HTML & CSS</a></li>
                  <li><a href="#" className="hover:underline">PHP</a></li>
                  <li><a href="#" className="hover:underline">Backend Development</a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* Contact Info */}
          <div className="w-full sm:w-1/2 md:w-1/3">
            <div className="flex flex-col items-center md:items-start">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Get in Touch</h2>
              <a href="mailto:contact@destiny.com" className="text-gray-700 mb-2 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.5 4h15a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-15a.5.5 0 0 1 .5-.5zm13.793 3.793l-5.646 5.646a1.5 1.5 0 0 1-2.121 0l-5.646-5.646v8.707h13.413v-8.707zm-6.293 4.707l6-6h-12l6 6z" />
                </svg>
                contact@destiny.com
              </a>
              <a href="tel:+1999897979" className="text-gray-700 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.5 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1.3a1 1 0 0 1 .94.659l.76 2.241a1 1 0 0 1-.214.973l-1.62 1.62a12.042 12.042 0 0 0 5.193 5.192l1.62-1.62a1 1 0 0 1 .973-.214l2.241.76a1 1 0 0 1 .659.94v1.3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3.5a.5.5 0 0 0-.5-.5c-9.945 0-18-8.055-18-18a.5.5 0 0 0-.5-.5h-3.5a1 1 0 0 0-1 1v2z" />
                </svg>
                +1 999 897 979
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
