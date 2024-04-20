import React from 'react';
import './MobileNav.css';
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

const MobileNav = ({ isOpen, toggleMenu }) => {
    return (
        <>
            <div
                className={`mobile-menu ${isOpen ? "active" : ""}`}
                onClick={toggleMenu}
            >

                <div className='mobile-menu-container'>
                    <img className='logo' src='./src/assets/images/logo.png' alt='' />

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
                                <Link to='#skills' style={{ color: 'white', textDecoration: 'none' }}>
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
                            <a href='https://drive.google.com/file/d/18QXTKPxO_qXlsc30SC07HIg2D-S_CsLm/view?usp=sharing' style={{ color: 'white', textDecoration: 'none'}}>Resume</a>
                        </button>

                    </ul>
                </div>
            </div>
        </>
    );
};

export default MobileNav;
