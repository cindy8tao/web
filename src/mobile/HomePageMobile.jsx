import React from 'react';
import Typewriter from 'typewriter-effect';
import { animateScroll as scroll } from 'react-scroll';
import { HiArrowUp } from 'react-icons/hi';

const scrollToTop = () => {
    scroll.scrollToTop({
        smooth: true,
        duration: 1000, // Adjust the duration to control the scrolling speed
    });
};
const HomePageMobile = () => {
    return (
        <div name='home' className='w-full h-[100vh] background'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full relative'>
                <div className='z-10'>
                    <h1 className='text-2xl text-gray-600 mt-10'>Hi there, my name is</h1>
                    <h1 className='text-4xl sm:text-6xl font-bold text-[#5085A5]'>
                        CINDY TAO
                    </h1>
                    <h2 className='text-4xl sm:text-4xl font-bold text-[#8FC1E3]'>
                        I'm a
                    </h2>
                    <h2 className='text-2xl sm:text-2xl font-bold text-[#E27D60]'>
                        <Typewriter
                            options={{
                                strings: ['Software Engineer', 'Problem Solver', 'Analytical Thinker', 'Team Player'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h2>
                    <div>
                        <p className='text-gray-600 py-4 max-w-[700px]'>
                            As a software engineer, I am passionate about creating innovative solutions through coding and problem-solving. I enjoy collaborating with teams to develop robust and scalable software applications, using my technical expertise and attention to detail to deliver high-quality products that meet user needs and drive positive impact.
                        </p>
                    </div>
                </div>
            </div>
            <div className="fixed bottom-28 right-10">
                <button onClick={scrollToTop}>
                    <HiArrowUp className="ml-3" style={{ fontSize: '24px' }} />
                </button>
            </div>
        </div>
    );
};

export default HomePageMobile;
