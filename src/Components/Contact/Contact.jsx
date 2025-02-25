import React, { useState } from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';

const Contact = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone : "",
      message : "",
    });

    const [message, setMessage] = useState(null);  // State for feedback message
    const [isSuccess, setIsSuccess] = useState(false);  // To determine success/error styling

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const form = e.target;
        const formData = new FormData(form);

        const scriptURL = "https://script.google.com/macros/s/AKfycbx0V4iLj4S7vWdm6o9iQW-ynR8X3pmq0AiDfSrXSpir7Om4_8Lb2CZI58TuBFWApzh0ig/exec";

        const response = await fetch(scriptURL, {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          setMessage("✅ Thank you! Your form has been submitted successfully.");
          setIsSuccess(true);
          setFormData({ name: "", email: "", phone: "", message: "" }); // Clear form fields
        } else {
          setMessage("❌ Error submitting form. Please try again.");
          setIsSuccess(false);
        }
      } catch (error) {
        console.error("Error!", error);
        setMessage("❌ An error occurred while submitting the form.");
        setIsSuccess(false);
      }

      // Auto-hide message after 5 seconds
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    };

    return (
      <div className='contact'>
        <div className="contact-col">
          <h3>Send us a message <img src={msg_icon} alt="" /></h3>
          <p>Feel free to reach out through our contact form or find our contact details below. Your feedback, questions, and ideas matter to us as we work towards delivering top-notch digital marketing solutions at Gling Media.</p>
          <ul>
              <li><img src={mail_icon} alt="" />Contact@glingmedia.in</li>
              <li><img src={phone_icon} alt="" />+91 90361 93181</li>
              <li><img src={location_icon} alt="" />Raheja Arcade, 2nd Floor, Koramangala<br/> Bengaluru, Karnataka 560095</li>
          </ul>
        </div>
        
        <div className="contact-col">
          <form onSubmit={handleSubmit}>
              <label>Your name</label>
              <input type="text" name='name' value={formData.name} onChange={handleChange} placeholder='Enter your name' required/>
              
              <label>Email Address</label>
              <input type="email" name='email' value={formData.email} onChange={handleChange} placeholder='Enter Your Email Address' required/>
              
              <label>Phone Number</label>
              <input type="tel" name='phone' value={formData.phone} onChange={handleChange} placeholder='Enter your mobile number' required/>
              
              <label>Write your messages here</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows="6" placeholder='Enter your message' required></textarea>
              
              <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
          </form>

          {/* Message Display */}
          {message && (
            <div className={`message-box ${isSuccess ? 'success' : 'error'}`}>
              {message}
            </div>
          )}
        </div>
      </div>
    );
};

export default Contact;
