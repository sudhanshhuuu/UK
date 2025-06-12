import React, { useState } from 'react';
import { FaXmark, FaBars } from 'react-icons/fa6';
import { Link } from 'react-scroll';
import  whatsapp  from '../assets/project/WhatsApp.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const navItem = [
        { link: 'Home', path: 'home' },
        { link: 'About', path: 'about' },
        { link: 'Services', path: 'services' },
        { link: 'Project', path: 'projects' },
        { link: 'Contact', path: 'contact' },
    ];

    return (
      <>
          <nav className='w-full flex bg-white justify-between items-center gap-1 lg:px-16 px-6 py-4 top-0 z-50'>
            <h1 className='text-black md:text-4xl text-3xl font-bold font-rubik'>
                U.K <span className='text-yellow-500 italic'> SUPERTECH CONSTRUCTION ENTERPRISE</span>
            </h1>
            {/* Desktop Menu */}
            <ul className='lg:flex justify-normal items-center gap-6 hidden'>
                {navItem.map((item, index) => (
                    <li key={index}>
                        <Link
                            to={item.path}
                            className='text-black uppercase font-bold cursor-pointer p-3 rounded-full hover:bg-yellow-500 hover:text-black text-[16px]'
                            spy={true}
                            offset={-100}
                            smooth={true}
                        >
                            {item.link}
                        </Link>
                    </li>
                ))}
            </ul>
            <a
                href="https://wa.me/919917631340?text=Hello%2C%20I%20would%20like%20to%20get%20in%20touch."
                target="_blank"
                rel="noopener noreferrer"
            >
               <img src={whatsapp} alt="WhatsApp-Icon"  className='w-10 h-10'/>
            </a>

            {/* Mobile Menu Toggle Icon */}
            <div className='flex justify-between items-center lg:hidden mt-3' onClick={toggleMenu}>
                {isMenuOpen ? (
                    <FaXmark className='text-yellow-500 text-3xl cursor-pointer' />
                ) : (
                    <FaBars className='text-yellow-500 text-3xl cursor-pointer' />
                )}
            </div>

            {/* Mobile Menu */}
            <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-yellow-500 p-4 absolute top-[72px] left-0`} onClick={closeMenu}>
                <ul className='flex flex-col justify-center items-center gap-2 w-full'>
                    {navItem.map((item, index) => (
                        <li key={index}>
                            <Link
                                to={item.path}
                                className='text-black uppercase font-semibold cursor-pointer p-2 rounded-lg hover:bg-black hover:text-white w-full text-center'
                                spy={true}
                                offset={-100}
                                smooth={true}
                            >
                                {item.link}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            
        </nav>
        <div lassName='w-full h-[6px] bg-yellow-500'>
            <p className='text-center text-white font-semibold'>GST Number : 05AFUPI7278B1Z7</p>
        </div>
      </>
        
    );
};

export default Header;
