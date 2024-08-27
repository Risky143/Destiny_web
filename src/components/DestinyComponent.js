import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const DestinyComponent = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);

  return (
    <div className="relative max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 mt-8 lg:mt-16">
        <div className="lg:w-1/2" data-aos="fade-right">
          <div className="rounded-lg overflow-hidden mb-4">
            <img 
              src="/images/pic.png" 
              alt="Woman with laptop" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        
        <div className="lg:w-1/2 flex flex-col justify-center lg:ml-8" data-aos="fade-left">
          <h2 className="text-blue-600 font-semibold mb-2 text-base sm:text-lg lg:text-xl">About Destiny</h2>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">We're Shaping Digital Futures</h1>
          <p className="text-gray-600 mb-6 text-base sm:text-lg md:text-xl lg:text-2xl">
            We cover everything you need to know, from the basics to more advanced topics. Our curriculum is designed for self-paced learning, so you can progress at your own speed.
          </p>
          <div className="space-y-4 sm:space-y-6">
            {['Accessible Learning', 'Affordable Pricing'].map((feature, index) => (
              <div key={index} className="flex items-start" data-aos="fade-up">
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={index === 0 ? "M4 6h16M4 10h16M4 14h16M4 18h16" : "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"} />
                  </svg>
                </div>
                <div className="ml-2 sm:ml-4">
                  <h3 className="text-base sm:text-lg font-semibold">{feature}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {index === 0 
                      ? "Access course materials anytime, anywhere, and learn at your own pace."
                      : "We offer competitive pricing options to make learning accessible to all."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinyComponent;
