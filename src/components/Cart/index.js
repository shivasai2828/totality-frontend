import CartListView from "../CartListView";

import CartContext from "../../context/CartContext";

import CartSummary from "../CartSummary";
import { Link } from "react-router-dom";
import "./index.css";

const Cart = () => (
  <CartContext.Consumer>
    {(value) => {
      const { cartList, removeAllCartItems } = value;
      console.log(cartList);
      const showEmptyView = cartList.length === 0;
      console.log(cartList);
      const removeAllItems = () => {
        removeAllCartItems();
      };
      const EmptyCartView = () => (
        <div className="cart-empty-view-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
            className="cart-empty-img"
            alt="cart empty"
          />
          <h1 className="cart-empty-heading">Your Cart Is Empty</h1>

          <Link to="/">
            <button type="button" className="shop-now-btn">
              BOOK NOW
            </button>
          </Link>
        </div>
      );

      return (
        <>
          <div className="cart-container">
            {cartList.length === 0 ? (
              EmptyCartView()
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <div className="remove-all-container">
                  <button
                    type="button"
                    className="remove-all-buttn"
                    onClick={removeAllItems}
                  >
                    Remove All
                  </button>
                </div>

                <CartListView />
                <CartSummary />
              </div>
            )}
          </div>
        </>
      );
    }}
  </CartContext.Consumer>
);
export default Cart;
