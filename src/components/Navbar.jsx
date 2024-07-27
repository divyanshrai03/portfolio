import React, { useState, useRef } from 'react';
import './Navbar.css';
import MobileNav from './MobileNav/MobileNav';
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Skills from './Skills/Skills';
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import { NavLink } from 'react-router-dom';
import { WorkExperience } from './WorkExperience/WorkExperience';
import Logo from '../assets/images/logo.png';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const skillsRef = useRef(null);
    const workExperienceRef = useRef(null);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    const scrollToRef = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
            <nav className='nav-wrapper'>
                <div className='nav-content'>
                    <img className='logo' src={Logo} alt='' />
                    <ul> 
                        <li>
                            <a className='menu-item' href='/home'>
                                <Link to='#home' style={{ color: 'white', textDecoration: 'none' }}>
                                    Home
                                </Link>
                            </a>
                        </li>
                        <li>
                            <a className='menu-item' href='/skills'>
                                <Link to='#skills' style={{ color: 'white' , textDecoration: 'none'}}>
                                    Skills
                                </Link>
                            </a>
                        </li>
                        <li>
                            <a className='menu-item'>
                                <Link to='#workexperience' style={{ color: 'white', textDecoration: 'none' }}>
                                    Work Experience
                                </Link>
                            </a>
                        </li>

                        <li>
                            <a className='menu-item'>
                                <Link to='#hireme' style={{ color: 'white', textDecoration: 'none' }}>
                                    Hire Me
                                </Link>
                            </a>
                        </li>
                        <button className='contact-btn' onClick={() => {}}>
                            <a href='https://drive.google.com/file/d/1rciLWeB9eOqXYovru4oWUqkx6YPDksUn/view?usp=sharing' style={{ color: 'white', textDecoration: 'none'}}>Resume</a>
                        </button>
                    </ul>
                    <button className='menu-btn' onClick={toggleMenu}>
                        <span className="icon">{openMenu ? <IoMdClose /> : <CiMenuBurger />}</span>
                    </button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
