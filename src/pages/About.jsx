import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#e0eff4] text-gray-600'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full px-4'>
          <div className='text-4xl font-bold text-gray-600 text-center mb-8'>
            <span className='border-b-4 border-[#E27D60]'>About</span>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
            <div className='sm:text-right'>
              <p className='text-2xl font-bold'>Welcome to my personal website! I'm Cindy Tao, and I'm excited to share my journey as a software engineer with you.</p>
            </div>
            <div>
              <p>
                I'm a skilled software engineer with a versatile background in developing scalable applications. Proficient in Java, Python, and C++, I excel in collaborating with cross-functional teams to deliver innovative solutions. With expertise in AWS, Azure, and database ecosystems, I constantly strive to stay at the forefront of technology. Committed to problem-solving and meticulous in my approach, I bring a diverse perspective and a strong attention to detail to every project. My goal is to leverage technology to make a positive impact and drive innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
