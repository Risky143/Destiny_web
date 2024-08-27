import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white flex items-center justify-between py-4 px-4 sm:px-8 lg:px-16">
            {/* Container for Logo and Menu Items */}
            <div className="flex items-center flex-grow">
                {/* Logo */}
                <div className="flex items-center">
                    <img src={'/images/logo2.png'} alt="Destiny Logo" className="h-[60px] w-[120px] md:h-[85px] md:w-[162px]" />
                </div>

                {/* Desktop Menu Items */}
                <div className="hidden md:flex md:items-center md:space-x-8 flex-grow justify-center">
                    <a href="#home" className="text-black-400 font-inter">Home</a>
                    <a href="#whyus" className="text-black-600 font-inter">About us</a>
                    <a href="#" className="text-black-200 font-inter">Services</a>
                    <a href="#" className="text-black-600 font-inter">Courses</a>
                </div>
            </div>

            {/* Contact Us Button */}
            <div className="hidden md:block">
                <a href="#" className="px-4 py-2 border border-blue-500 text-blue-500 rounded-full font-semibold">Contact us</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
                <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-800">
                    {isMenuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-gray-900 bg-opacity-90 z-50 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex flex-col items-center justify-center h-full space-y-6 p-4">
                    <button onClick={toggleMenu} className="absolute top-4 right-4 text-white">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <a href="#home" className="text-white text-2xl font-bold" onClick={toggleMenu}>Home</a>
                    <a href="#whyus" className="text-white text-2xl font-bold" onClick={toggleMenu}>About us</a>
                    <a href="#" className="text-white text-2xl font-bold" onClick={toggleMenu}>Services</a>
                    <a href="#" className="text-white text-2xl font-bold" onClick={toggleMenu}>Courses</a>
                    <a href="#" className="text-white text-2xl font-bold mt-4 border-t border-white pt-4" onClick={toggleMenu}>Contact us</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
