import React from 'react'
import './Hero.css'
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import Img01 from '../../assets/images/img2.png';

const Hero = () => {
    return (
        <section className='hero-container' id='home'>
            <div className='hero-content'>
                <h4>Hello👋</h4>
                <h2>I'm Divyansh Rai</h2>
                <h3>I build things for web</h3>

                <p>
                    Passionate FrontEnd Developer | Transforming Ideas into Seamless and Visually Stunning Web Solutions
                </p>
            </div>

            <div className='hero-img'>
                <div>
                    <div className='tech-icon'>
                    <FaReact size={50}/>
                    </div>

                    <img src={Img01} alt='' />
                </div>

                <div>
                    <div className='tech-icon'>
                    <FaHtml5 size={50}/>
                    </div>

                    <div className='tech-icon'>
                    <FaCss3Alt size={50}/>
                    </div>

                    <div className='tech-icon'>
                    <SiJavascript size={50}/>
                    </div>

                    <div className='tech-icon'>
                    <SiTailwindcss size={50}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero
