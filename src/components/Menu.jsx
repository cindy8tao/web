import React, { useState } from 'react';
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin
} from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../images/logo.png';
import { Link } from 'react-scroll';

const Menu = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-white text-[#5085A5] font-bold'>
            <div>
                <a href="/web">
                    <img src={Logo} alt='My Icon' style={{ width: '70px' }} />
                </a>
            </div>

            {/* menu */}
            <ul className='hidden md:flex'>
                <li>
                    <Link to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to='projects' smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to='journey' smooth={true} duration={500}>
                        Timeline
                    </Link>
                </li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu */}
            <ul
                className={
                    !nav
                        ? 'hidden'
                        : 'absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center'
                }
            >
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='work' smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='work' smooth={true} duration={500}>
                        Timeline
                    </Link>
                </li>
            </ul>

            <div className='fixed inset-x-0 bottom-0 h-[100px] lg:flex flex-col bg-white'>
                {/* Content of the footer */}
                <ul className='flex space-x-3 justify-center'>
                    <li className='flex py-4 px-8 justify-between items-center'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/cindytao/'>
                            <FaLinkedin size={30} color="#0077B5" />
                        </a>
                    </li>
                    <li className='flex py-4 px-8 justify-between items-center'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/cindy8tao/'>
                            <FaGithub size={30} color="black" />
                        </a>
                    </li>
                    <li className='flex py-4 px-8 justify-between items-center'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='/contact'>
                            <Link to='contact' smooth={true} duration={500}>
                                <BsFillPersonLinesFill size={30} color="gray" />
                            </Link>
                        </a>
                    </li>
                </ul>
                <p className='text-center py-2 px-8 text-[#E27D60] text-sm'>&copy; 2023 Cindy Tao. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Menu;
