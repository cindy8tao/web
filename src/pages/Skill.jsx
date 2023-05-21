import React from 'react';

import {
    DiJava,
    DiGit,
    DiJavascript,
    DiNpm,
    DiPython,
    DiMysql,
    DiJenkins,
    DiReact,
} from "react-icons/di";

const Skills = () => {
    const isMobile = window.innerWidth <= 768; // Check if the window width is less than or equal to 768px
    if (isMobile) {
        return (
            <div name='skills' className='w-full h-screen bg-[#e0eff4] text-gray-600'>
                {/* Container */}
                <div className='max-w-[250px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                    <div>
                        <p className='text-4xl font-bold inline border-b-4 border-[#E27D60] '>Skills</p>
                    </div>

                    <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                        <div className='flex flex-col items-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <DiJava size={50} color="#f89917" />
                            <p className='my-4'>JAVA</p>
                        </div>
                        <div className='flex flex-col items-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <DiGit size={50} color="black" />
                            <p className='my-4'>Git</p>
                        </div>
                        <div className='flex flex-col items-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <DiJavascript size={50} color="#f0dc4e" />
                            <p className='my-4'>Javascript</p>
                        </div>
                        <div className='flex flex-col items-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <DiNpm size={50} color="#bd3f3e" />
                            <p className='my-4'>NPM</p>
                        </div>
                        <div className='flex flex-col items-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <DiPython size={50} color="#3973a5" />
                            <p className='my-4'>Python</p>
                        </div>
                        <div className='flex flex-col items-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <DiMysql size={50} color="#658593" />
                            <p className='my-4'>MySQL</p>
                        </div>
                        <div className='flex flex-col items-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <DiJenkins size={50} color="black" />
                            <p className='my-4'>Jenkins</p>
                        </div>
                        <div className='flex flex-col items-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <DiReact size={50} color="#65d4ee" />
                            <p className='my-4'>React</p>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
    return (
        <div name='skills' className='w-full h-screen bg-[#e0eff4] text-gray-600'>
            {/* Container */}
            <div className='max-w-[500px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#E27D60] '>Skills</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='flex flex-col items-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <DiJava size={100} color="#f89917" />
                        <p className='my-4'>JAVA</p>
                    </div>
                    <div className='flex flex-col items-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <DiGit size={100} color="black" />
                        <p className='my-4'>Git</p>
                    </div>
                    <div className='flex flex-col items-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <DiJavascript size={100} color="#f0dc4e" />
                        <p className='my-4'>Javascript</p>
                    </div>
                    <div className='flex flex-col items-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <DiNpm size={100} color="#bd3f3e" />
                        <p className='my-4'>NPM</p>
                    </div>
                    <div className='flex flex-col items-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <DiPython size={100} color="#3973a5" />
                        <p className='my-4'>Python</p>
                    </div>
                    <div className='flex flex-col items-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <DiMysql size={100} color="#658593" />
                        <p className='my-4'>MySQL</p>
                    </div>
                    <div className='flex flex-col items-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <DiJenkins size={100} color="black" />
                        <p className='my-4'>Jenkins</p>
                    </div>
                    <div className='flex flex-col items-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <DiReact size={100} color="#65d4ee" />
                        <p className='my-4'>React</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skills;
