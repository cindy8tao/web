import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const HomePage = () => {
  return (
    <Router>
      <div name='home' className='w-full h-screen background'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <h1 className='text-2xl text-gray-600'>Hi there, my name is</h1>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#8FC1E3]'>
            CINDY TAO
          </h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-[#5085A5]'>
            I'm a
            <Typewriter
              options={{
                strings: ['Full Stack Developer', 'Problem Solver', 'Analytical Thinker', 'Team Player', 'Creative'],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <p className='text-gray-600 py-4 max-w-[700px]'>
            As a software engineer, I am passionate about creating innovative solutions through coding and problem-solving. I enjoy collaborating with teams to develop robust and scalable software applications, using my technical expertise and attention to detail to deliver high-quality products that meet user needs and drive positive impact.
          </p>
          <div>
            {/* <button className='text-black group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-100 hover:border-blue-100'> */}
            <Link to='resume' className='text-black group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-100 hover:border-blue-100'>
              View Resume
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </Link>

            {/* View Resume
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span> */}
            {/* </button> */}
          </div>
        </div>
      </div>
    </Router>
  );
};

export default HomePage;
