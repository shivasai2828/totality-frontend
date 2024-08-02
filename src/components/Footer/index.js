import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>1234 Hotel shivasai Hotels, Hyderabad, India</p>
          <p>Email:boddushivasaigmail.com </p>
          <p>Phone: 8500548260</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
        
            <li>
              <a href="#">Rooms</a>
            </li>
            
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook-f">facebook</i>
            </a>
            <a href="#">
              <i className="fab fa-twitter">twitter</i>
            </a>
            <a href="#">
              <i className="fab fa-instagram">instagram</i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in">linkedin</i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; Shivasai Boddu 2024 Hotel Booking. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
