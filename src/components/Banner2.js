import React from 'react';

const Banner2 = () => {
  return (
<div className="flex items-center justify-center min-h-screen-[65vh] bg-white px-4 sm:px-6 lg:px-8">
  <div className="relative w-full max-w-[1200px] h-[455px] lg:mt-[122px] bg-blue-500 rounded-[26px] grid-background flex flex-col lg:flex-row">
    <div className="flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8 lg:w-1/2 lg:items-start lg:text-left lg:justify-center lg:pt-16 lg:pb-4 lg:pl-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[44px] font-bold text-white mb-4">
        Start Your Journey <br /> With Us Now
      </h1>
      <button className="mt-4 px-4 py-2 sm:px-6 sm:py-3 bg-white text-blue-500 rounded-full font-semibold">
        Start Now
      </button>
    </div>

    <div className="hidden lg:flex justify-center items-center lg:items-end lg:justify-end lg:w-1/2 lg:pr-8">
      <img
        src="/images/Group 1000004892.png"
        alt="Overflowing Image"
        className="w-[300px] sm:w-[450px] md:w-[550px] h-auto"
        style={{ transform: 'translateY(0)' }}
      />
    </div>


    <div className="lg:hidden absolute inset-x-0 bottom-0 flex justify-center items-end pb-4">
      <img
        src="/images/Group 1000004892.png"
        alt="Overflowing Image"
        className="w-[250px] sm:w-[450px] md:w-[550px] h-auto"
        style={{ transform: 'translateY(15px)' }}
      />
    </div>
  </div>
</div>
  );
};

export default Banner2;
