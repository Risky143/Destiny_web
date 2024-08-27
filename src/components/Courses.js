import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

// Sample data for the courses
const courses = [
    {
        title: 'Computer Basics',
        description: 'Range of course',
        image: '/images/c1.png',
        color: '#CAFF76', // Use hex color directly
    },
    {
        title: 'Microsoft Office Suite',
        description: 'Range of course',
        image: '/images/c2.png',
        color: '#FFC876',
    },
    {
        title: 'Internet Skills',
        description: 'Range of course',
        image: '/images/c3.png',
        color: '#B8E6FF',
    },
    {
        title: 'Programming Language',
        description: 'Range of course',
        image: '/images/c1.png',
        color: '#FFC2DF',
    },
    {
        title: 'Web Development',
        description: 'Range of course',
        image: '/images/c1.png',
        color: '#F4FF76',
    },
    {
        title: 'Database Management',
        description: 'Range of course',
        image: '/images/c1.png',
        color: '#D2C7FF',
    },
];

const getArrowPositionStyles = (index) => {
    // Define margin styles based on the arrow position
    const isTop = index % 2 === 0;
    return {
        top: isTop ? '30px' : 'auto',
        bottom: isTop ? 'auto' : '30px',
        left: '30px',
        right: 'auto',
    };
};

const Courses = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="flex flex-col items-center bg-gray-100 py-10 px-4 sm:px-8 lg:px-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8">
                Courses You’ll Find
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                {courses.map((course, index) => {
                    const arrowPositionStyles = getArrowPositionStyles(index);
                    return (
                        <div
                            key={index}
                            className="p-4 sm:p-6 rounded-[37px] h-auto sm:h-[266px] w-full sm:w-[372px] relative flex flex-col justify-between"
                            style={{ backgroundColor: course.color }} // Apply dynamic color here
                            data-aos="fade-up"
                        >
                            {/* Arrow icon */}
                            <div
                                className={`absolute w-[40px] h-[40px] sm:w-[58px] sm:h-[58px] flex items-center justify-center bg-white rounded-full border-2 border-transparent hover:border-black shadow-md transition-transform duration-800`}
                                style={arrowPositionStyles} // Apply dynamic margin styles here
                            >
                                <svg width="40" height="40" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="58" height="58" rx="29" fill="white" />
                                    <path d="M23.6406 34.3631L33.599 24.4047M25.1727 23.6387H33.2817C33.8801 23.6387 34.3651 24.1237 34.3651 24.722V32.8311" stroke="#07274A" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                            {index % 2 === 0 ? (
                                <>
                                    <div className="flex items-center justify-center sm:justify-end mb-4">
                                        <img
                                            src={course.image}
                                            alt={course.title}
                                            className="w-[100px] h-[85px] sm:w-[155px] sm:h-[130px]"
                                        />
                                    </div>
                                    <div className="text-center sm:text-left">
                                        <span className="text-black w-[88px] h-[29px] p-1 text-[14px] border-blue-500 rounded-[30px] ">
                                            {course.description}
                                        </span>
                                        <h2 className="text-lg font-bold">{course.title}</h2>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="text-center sm:text-left">
                                        <span className="text-black w-[100px] h-[29px] text-[14px] border-blue-500 rounded-[30px] ">
                                            {course.description}
                                        </span>
                                        <h3 className="text-lg font-bold mb-4">{course.title}</h3>
                                    </div>
                                    <div className="flex items-center justify-center sm:justify-end">
                                        <img
                                            src={course.image}
                                            alt={course.title}
                                            className="w-[100px] h-[85px] sm:w-[155px] sm:h-[130px]"
                                        />
                                    </div>
                                </>
                            )}
                        </div>
                    );
                })}
            </div>
            <button className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-full font-semibold abutton transition">
                Browse all
            </button>
        </div>
    );
};

export default Courses;
