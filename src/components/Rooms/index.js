import React, { Component } from "react";
import "./index.css";
import fetchedData from "../../Data.json";
import { IoLocation } from "react-icons/io5";
import { FaBed } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

import Cookies from "js-cookie";
import CartContext from "../../context/CartContext";

class Rooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: fetchedData,
      filters: {
        location: "",
        minPrice: 0,
        maxPrice: 8500,
        bedrooms: "",
      },
    };
  }

  handleFilterChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      filters: {
        ...prevState.filters,
        [name]: value,
      },
    }));
  };

  handleFilterSubmit = (e) => {
    e.preventDefault();
    const { filters } = this.state;
    let filteredProperties = fetchedData;

    if (filters.location) {
      filteredProperties = filteredProperties.filter((property) =>
        property.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }
    if (filters.minPrice) {
      filteredProperties = filteredProperties.filter(
        (property) => property.price >= filters.minPrice
      );
    }
    if (filters.maxPrice) {
      filteredProperties = filteredProperties.filter(
        (property) => property.price <= filters.maxPrice
      );
    }
    if (filters.bedrooms) {
      filteredProperties = filteredProperties.filter(
        (property) => property.bedrooms >= filters.bedrooms
      );
    }

    this.setState({ properties: filteredProperties });
  };

  render() {
    const { properties, filters } = this.state;

    return (
      <CartContext.Consumer>
        {(value) => {
          const { cartList, addCartItem } = value;

          const onClickAddToCart = (event) => {
            const cartItemData = properties.filter(
              (each) => each.id === event.currentTarget.id
            );

            const product = {
              ...cartItemData[0],
              quantity: 1,
            };
            addCartItem(product);
          };

          return (
            <div className="rooms-main">
              <div className="rooms-content">
                <h1>Property Listings</h1>
                <h4>Apply Filters</h4>
                <form
                  onSubmit={this.handleFilterSubmit}
                  className="input-container-rooms"
                >
                  <input
                    type="search"
                    className="input-box"
                    placeholder="LOCATION"
                    value={filters.location}
                    name="location"
                    onChange={this.handleFilterChange}
                  />
                  <input
                    type="number"
                    className="input-box"
                    placeholder="MIN-PRICE"
                    value={filters.minPrice}
                    name="minPrice"
                    onChange={this.handleFilterChange}
                  />
                  <input
                    type="number"
                    className="input-box"
                    placeholder="MAX-PRICE"
                    value={filters.maxPrice}
                    name="maxPrice"
                    onChange={this.handleFilterChange}
                  />
                  <div className="column-dir">
                    <label htmlFor="bedroomsInput">BEDROOMS</label>
                    <select
                      value={filters.bedrooms}
                      id="bedroomsInput"
                      name="bedrooms"
                      onChange={this.handleFilterChange}
                    >
                      <option value={""}>Any</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                    </select>
                  </div>
                  <button className="btn" type="submit">
                    Apply Filters
                  </button>
                </form>
                <ul>
                  {properties.map((each) => (
                    <li key={each.id} className="each-room-details">
                      <img className="each-img" src={each.image} alt="" />
                      <div className="each-room-content-box">
                        <p className="para-title">{each.title}</p>
                        <p>{each.description}</p>
                        <div className="each-row">
                          <div className="each-row">
                            <p>{each.price}</p>
                            <IoLocation />
                          </div>
                          <div className="each-row">
                            <p>{each.bedrooms}</p>
                            <FaBed />
                          </div>
                        </div>

                        <div className="each-row">
                          {each.amenities.map((items) => (
                            <div className="each-row" key={items}>
                              <p>{items}</p>
                              <FaCheck />
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4> RS- {each.price}</h4>
                        <button
                          onClick={onClickAddToCart}
                          id={each.id}
                          className="btn"
                        >
                          Book Now
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        }}
      </CartContext.Consumer>
    );
  }
}

export default Rooms;
