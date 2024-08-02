import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./index.css";
export default class Home extends Component {
  render() {
    return (
      <div className="bg-home">
        <div className="bg-main">
          <h6 className="home-top-para">A Place to Call Home</h6>
          <h1 className="home-middle-text">Rent Your Dream Home</h1>
          <p className="home-bottom-para">
            Discover the perfect home away from home in our diverse selection of
            rentals. Choose the accommodation that best suits your needs.
          </p>
          <Link to="/rooms">
            <button className="btn">More Info</button>
          </Link>
        </div>
      </div>
    );
  }
}
