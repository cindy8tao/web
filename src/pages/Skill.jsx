import React from 'react';
import { useState, useEffect } from 'react';

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
import SkillsMobile from '../mobile/SkillsMobile';

const Skills = () => {
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
        return (
            <SkillsMobile />
        )
    }
    return (
        <div name='skills' className='w-full h-screen bg-[#d7f1ff] text-gray-600'>
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
