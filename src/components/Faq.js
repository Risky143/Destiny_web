import React from 'react';
import FAQItem from './FAQItem';

const Faq = () => {
    const faqs = [
        'What is Destiny?',
        'What is the schedule for the classes?',
        'What is the cost of the courses?'
      ];
    
      return (
        <div className="max-w-4xl lg:mt-[80px] mx-auto p-6">
          <div className="flex flex-col md:flex-row md:space-x-12">
            {/* FAQ List */}
            <div className="md:w-1/2 mb-6 md:mb-0">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq} />
              ))}
            </div>
            {/* Help Section */}
            <div className="md:w-1/2  p-6 rounded-lg">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">How We Can Help You?</h2>
              <p className="text-gray-600 mb-6">
                Follow our newsletter. We will regularly update our latest project and availability.
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Let's Talk
                </button>
              </form>
              <a href="#" className="text-blue-500 mt-4 inline-block">More FAQ &rarr;</a>
            </div>
          </div>
        </div>
      );
};

export default Faq;
