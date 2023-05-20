import React, { useState } from 'react';
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../images/logo.png';
import { Link } from 'react-scroll';

const Menu = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[background] text-[#5085A5] font-bold'>
            <div>
                <a href="/web">
                    <img src={Logo} alt='Logo Image' style={{ width: '70px' }} />
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
                    <Link to='work' smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={500}>
                        Contact
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
                        : 'absolute top-0 left-0 w-full h-screen bg-[background] flex flex-col justify-center items-center'
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
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* FootNote */}
            <div className='fixed w-full h-[150px] lg:flex flex-col bottom-[0%] bg-[background]'>
                <ul className='flex space-x-3 justify-center'>
                    <li className='flex py-4 px-8 justify-between items-center'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/cindytao/'>
                            <FaLinkedin size={30} color="blue" />
                        </a>
                    </li>
                    <li className='flex py-4 px-8 justify-between items-center'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/cindy8tao/'>
                            <FaGithub size={30} color="black" />
                        </a>
                    </li>
                    <li className='flex py-4 px-8 justify-between items-center'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='/'>
                            <BsFillPersonLinesFill size={30} color="gray" />
                        </a>
                    </li>
                </ul>
                <p className='text-center py-4 px-8'>&copy; 2023 Cindy Tao. All rights reserved.</p>

            </div>

        </div>
    );
};

export default Menu;
