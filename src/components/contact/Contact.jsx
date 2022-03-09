import React from 'react'

import emailjs from 'emailjs-com';
import "./contact.scss";

export default function Contact() {
  function sendEmail(e){
    e.preventDefault();
    

    emailjs.sendForm('service_yasmm7d', 'template_a9u03vc', e.target, 'user_xqaYI8HsMyZG5dzqDdBdu')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
}
  
  return (
    <div>
      
    <div className="contact" id="contact">
      <div className="contactHeader"></div>
      

      <div class="right">
      <h1>Contact</h1>
        <form style={{background: "transparent"}} onSubmit={sendEmail}>
          <div class="row">
            <div class="col-25">
                <label htmlFor='username'>Full Name: </label>
                <input type='text'  placeholder="Write your Name" name="Name" />
                              
            </div>
            <div class="col-75">
                <label htmlFor='email'>Email address: </label>
                <input type='email'  placeholder="Email (optional)" name="email" />
                </div>
          </div>
          <div class="row">
            <div class="col-25">
            <label htmlFor='Contact'>Contact Number: </label>
                <input type='contact'  placeholder="Contact No (optional)" name="ContactNo" />
                </div>
            <div class="col-75">
            <label htmlFor='userMessage'>Message: </label>
                <input type='text' rows="4" placeholder="Message" name="comments" />
                </div>
          </div>
          
          <div class="row">
            <input type="submit" value="Submit"/>
          </div>
        </form>
      </div>    
        <div className='left'>
          <div className="contactHeader">
          <h2>Reach out</h2>
          <h2> +92 3355433725</h2>
          
          </div>
          
          <div>
            <iframe
            
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89430.97884090773!2d73.09735517753849!3d33.592364490905105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfed982491f315%3A0x950fc0e4dca42a53!2sModel%20Town%20Humak%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1627226600809!5m2!1sen!2s" width="600" height="450"
              allowFullScreen=''
              aria-hidden='false'
              title='Contact Me'
              tabIndex='0'
            ></iframe>
          </div>
        </div>
      

        
      </div> 
      <p className='footer'>
        Made with ❤ by Ali Mazhar Sultan
      </p>
    </div>
    
  )
}
