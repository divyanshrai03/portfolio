import React from 'react'
import './ContactInfoCard.css'

const ContactInfoCard = ({iconUrl, text}) => {
  return (
    <div className='contact-details-card'>
      <div className='icon'>
        <img src={iconUrl} alt={text} />
        <h6 className={text} />
      </div>
    </div>
  )
}

export default ContactInfoCard