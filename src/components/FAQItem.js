import React, { useState } from 'react';

const FAQItem = ({ question }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="w-full text-left text-lg md:text-xl font-medium text-gray-800 flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <span
          className={`ml-4 transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600 text-base md:text-lg">
          Answer content goes here.
        </div>
      )}
    </div>
  );
};

export default FAQItem;
