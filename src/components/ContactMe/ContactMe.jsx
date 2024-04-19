import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { ContactForm } from './ContactForm/ContactForm';


function ContactMe() {
  return (
    <section className='contact-container' id='hireme'>
        <h5>Contact Me</h5>

        <div className='contact-content'>
            <div style={{flex: 1}}>
              <ContactInfoCard
                iconUrl="./src/assets/images/email-icon.svg"
                text="ce.divyanshrai@gmail.com"
              />
              <ContactInfoCard
                iconUrl="./src/assets/images/github-icon.svg"
                text="https://github.com/divyanshrai03"
              />
            </div>
            <div style={{flex: 1}}>
              <ContactForm />
            </div>
        </div>
    </section>
  )
}

export default ContactMe