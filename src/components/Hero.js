import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
    }, []);
    
    return (
        <section id='home' className="p-8 bg-cover bg-no-repeat" style={{
            backgroundImage: "url(/images/herobg.png)"
        }}>
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="flex-1 text-center md:text-left mb-8 md:mb-0 leading-10">
                    <h1 className="leading-tight mb-4 text-4xl md:text-6xl" style={{ fontFamily: "Spartan" }} data-aos="fade-up">
                        Empower Your <br /> Skills With
                    </h1>
                    <div className="relative inline-block">
                        <span className="text-4xl md:text-5xl font-bold text-white hover-effect" data-aos="fade-up">
                            DESTINY
                        </span>
                    </div>
                    <p className="text-lg md:text-2xl mt-5 text-black-700 font-inter" data-aos="fade-up" data-aos-delay="200">
                        Are you interested in learning about computers? Our online classes make it easy! Join us today and begin your exploration into the fascinating world of computers!
                    </p>
                    <a href="#" className="mt-4 inline-block px-6 py-2 border border-blue-500 text-blue-500 rounded-full abutton" data-aos="fade-up" data-aos-delay="400">View course</a>
                </div>
                <div className="flex-1 flex justify-center md:justify-end">
                    <img src="/images/Image.png" alt="Hero" className="rounded-lg w-full md:w-auto" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
