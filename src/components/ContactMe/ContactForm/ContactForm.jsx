import React from 'react';
import './ContactForm.css';

export const ContactForm = () => {
  return (
    <div className='contact-form-content'>
      <form action="info.php" method="POST">
        <div className='name-container'>
          <input type='text' name='firstname' placeholder='First'/>
          <input type="text" name= "lastname" placeholder='Last'/>
        </div>

        <input type='text' name='email' placeholder='Email' />
        <textarea name='message' placeholder='Message' rows={3}></textarea>

        <button type='submit'>SEND</button>
      </form>
    </div>
  );
};
