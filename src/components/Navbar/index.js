import React, { Component } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./index.css";
//home
// Listings
// locations
// About  Us
// blog
// List  Your  Place
// contact  us
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/">
            <img
              src="https://www.totalitycorp.com/_next/static/media/logo.f83b3df6.webp"
              alt="logo-home navbar-logo"
            />
          </a>
          <div className="menu-icon" onClick={this.toggleMenu}>
            <i className={this.state.isOpen ? "fas fa-times" : "fas fa-bars"}>
              <GiHamburgerMenu />
            </i>
          </div>
          <ul
            onClick={this.toggleMenu}
            className={this.state.isOpen ? "nav-menu active" : "nav-menu"}
          >
            <li className="nav-item">
              <a href="/" className="nav-links">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/Rooms" className="nav-links">
                Rooms
              </a>
            </li>

            <li className="nav-item">
              <a href="/Cart" className="nav-links">
                Cart
              </a>
            </li>

            <li className="nav-item">
              <a href="/ContactUs" className="nav-links">
                ContactUs
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
