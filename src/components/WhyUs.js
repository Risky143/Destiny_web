import React, { useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const WhyUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation
      once: true,     // Animation occurs only once
    });
  }, []);

  return (
    <>
      <div id='whyus' className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row lg:justify-between mb-8">
          <div className="w-full lg:w-1/2 px-4 py-8">
            <p className="text-blue-600 font-semibold text-lg sm:text-xl lg:text-2xl mb-2">Why choose us</p>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Why Choose Destiny</h1>
          </div>
          <div className="w-full lg:w-1/2 px-4 py-8">
            <p className="text-gray-700 text-base sm:text-lg lg:text-xl">
              Destiny is committed to providing a flexible, comprehensive, and practical learning experience that equips you with the skills and confidence needed to excel in your tech career. Join us and take the next step in your professional journey!
            </p>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row border-b border-gray-300 pb-8">
          <div
            className="w-full lg:w-1/2 px-4 py-8 border-r border-gray-300"
            data-aos="fade-left" // AOS animation
          >
            <div className="space-y-6">
              {[
                {
                  imgSrc: './images/icon-1.png',
                  title: 'Live Weekend Classes:',
                  description: 'Participate in live classes held on weekends, and engaging lessons designed to keep you motivated and on track with your learning goals.'
                },
                {
                  imgSrc: './images/icon-2.png',
                  title: 'Flexible Schedule:',
                  description: 'Our flexible scheduling options allow you to choose class times that fit into your busy life, ensuring that you can balance your education with other commitments.'
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-start p-4  rounded-lg ">
                  <div className="flex-shrink-0 w-16 h-16  rounded-full flex items-center justify-center">
                    <img src={item.imgSrc} alt="" className="w-72 h-50"/>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 mt-2 text-sm sm:text-base">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="w-full lg:w-1/2 px-4 py-8"
            data-aos="fade-right" // AOS animation
          >
            <div className="space-y-6">
              {[
                {
                  imgSrc: './images/icon-3.png',
                  title: 'Wide Range of Courses:',
                  description: 'Explore a diverse selection of courses covering frontend development (React, HTML, CSS, JavaScript), backend development (PHP), and more.'
                },
                {
                  imgSrc: './images/icon-4.png',
                  title: 'Hands-On Projects:',
                  description: 'Gain real-world experience through hands-on projects that simulate actual industry challenges and scenarios.'
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-start p-4  rounded-lg ">
                  <div className="flex-shrink-0 w-16 h-16  rounded-full flex items-center justify-center">
                    <img src={item.imgSrc} alt="" className="w-72 h-50"/>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 mt-2 text-sm sm:text-base">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyUs;
