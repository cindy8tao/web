import React from 'react';
import { HiArrowNarrowRight, HiArrowUp } from 'react-icons/hi';
import Typewriter from 'typewriter-effect';
import CindyResume2023 from '../CindyResume2023.pdf';
import self1 from '../images/self1.png';
import HomePageMobile from '../mobile/HomePageMobile';
import { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { Button } from 'antd';

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1025);

  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth);
      setIsMobile(window.innerWidth <= 1025);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isMobile) {
    return <HomePageMobile />;
  }

  const scrollToTop = () => {
    scroll.scrollToTop({
      smooth: true,
      duration: 1000, // Adjust the duration to control the scrolling speed
    });
  };

  // Default desktop view
  return (
    <div name="home" className="w-full h-[100vh] background">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full relative">
        <div className="z-10">
          <h1 className="text-2xl text-gray-600 mt-10">Hi there, my name is</h1>
          <h1 className="text-4xl sm:text-6xl font-bold text-[#5085A5]">
            CINDY TAO
          </h1>
          <h2 className="text-4xl sm:text-4xl font-bold text-[#8FC1E3]">
            I'm a
          </h2>
          <h2 className="text-2xl sm:text-2xl font-bold text-[#E27D60]">
            <Typewriter
              options={{
                strings: ['Software Engineer', 'Problem Solver', 'Analytical Thinker', 'Team Player'],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <div className="flex">
            <div>
              <p className="text-gray-600 py-4 max-w-[700px]">
                As a software engineer, I am passionate about creating innovative solutions through coding and problem-solving. I enjoy collaborating with teams to develop robust and scalable software applications, using my technical expertise and attention to detail to deliver high-quality products that meet user needs and drive positive impact.
              </p>
              <Button className="text-black group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#E27D60] hover:border-[#E27D60]">
                <a href={CindyResume2023} target="_blank" rel="noopener noreferrer">
                  View Resume (PDF)
                </a>
                <HiArrowNarrowRight className="ml-3" />
              </Button>
            </div>
            <img src={self1} alt="Self 1" className="ml-4 w-[250px] h-[500px] mt-[-20%]" />
          </div>
          <div className="fixed bottom-28 right-10">
            <button onClick={scrollToTop}>
              <HiArrowUp className="ml-3" style={{ fontSize: '24px' }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
