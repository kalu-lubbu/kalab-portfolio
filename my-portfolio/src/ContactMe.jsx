import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactMe() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false); // State for success message

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_tr8pf79", "template_misogbq", form.current, {
        publicKey: "TelJwMBMNi8u6g3HE",
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setMessageSent(true); // Show success message
          form.current.reset(); // Optionally reset the form

          // Hide the success message after 5 seconds
          setTimeout(() => {
            setMessageSent(false); // Reset success message state
          }, 5000); // 5000ms = 5 seconds
        },
        (error) => {
          console.log('FAILED...', error.text);
          setMessageSent(false); // Optionally handle error state
        },
      );
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">+251 909863829</p>
      </div>
      <form ref={form} onSubmit={sendEmail} className="contact--form--container">
        {/* Form fields */}
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input type="text" className="contact--input text-md" name="user_name" id="first-name" required />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input type="text" className="contact--input text-md" name="last_name" id="last-name" required />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input type="email" className="contact--input text-md" name="user_email" id="email" required />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input type="tel" className="contact--input text-md" name="phone_number" id="phone-number" required />
          </label>
        </div>
        <label htmlFor="choose-topic" className="contact--label">
          <span className="text-md">Choose a Topic</span>
          <select id="choose-topic" name="topic" className="contact--input text-md">
            <option>Select One...</option>
            <option>Hiring Inquiries</option>
            <option>Collaboration Ideas</option>
            <option>General Questions</option>
            <option>Feedback and Testimonials</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            name="message"
            rows="8"
            placeholder="Type your message..."
            required
          />
        </label>
        
        <div>  
          <input type="submit" className="btn btn-primary contact--form--btn" value="Send"/>
        </div>

      </form>

      {/* Success Message */}
      {messageSent && (
        <div className="success-message">
          Message successfully sent!
        </div>
      )}
    </section>
  );
}

export default ContactMe;
