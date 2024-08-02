import React from "react";
import "./index.css";

const ContactForm = () => {
  const submitForm = (event) => {
    event.preventDefault();
    alert("Thank you for Your Intrest");
  };
  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form onSubmit={submitForm} className="contact-form">
        <div className="form-group">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone Number" required />
        </div>
        <div className="form-group">
          <textarea placeholder="Message or Enquiry" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      <div className="contact-info">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.210792572916!2d-0.1198233846346841!3d51.50986587963719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a5885f4971ed%3A0x4d6b8ba9715c9b0!2sVictoria%20Island!5e0!3m2!1sen!2sng!4v1622569827721!5m2!1sen!2sng"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <address>
          <p> Madhapur hyderabad, india </p>
          <p>Phone: 8500548260, 8500548260</p>
        </address>
      </div>
    </div>
  );
};

export default ContactForm;
