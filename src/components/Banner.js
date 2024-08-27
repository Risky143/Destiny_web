import React from 'react';

const Banner = () => {
  return (
    <div className="flex items-center justify-center h-[190px] bg-cover bg-center md:bg-contain" style={{ backgroundImage: 'url(/images/banner.png)' }}>
      <div className="text-center p-4 rounded-lg">
        <h1 className="text-2xl md:text-4xl font-bold text-blue-900">" Learn. Grow. Succeed. "</h1>
      </div>
    </div>
  );
}

export default Banner;
