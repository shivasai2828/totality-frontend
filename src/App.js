import { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import CartContext from "./context/CartContext";
import Cart from "./components/Cart";
import Rooms from "./components/Rooms";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contactus from "./components/Contactus";
import Notfound from "./components/NotFound";
class App extends Component {
  state = {
    cartList: [],
  };

  incrementCartItemQuantity = (id) => {
    const { cartList } = this.state;
    const update = cartList.map((each) => {
      if (each.id === id) {
        return {
          title: each.title,
          description: each.description,
          id: each.id,
          imageUrl: each.imageUrl,
          price: each.price,
          quantity: each.quantity + 1,
        };
      } else {
        return {
          description: each.description,
          id: each.id,
          imageUrl: each.imageUrl,
          price: each.price,
          quantity: each.quantity,

          title: each.title,
        };
      }
    });
    this.setState((prevState) => ({ cartList: update }));
  };
  decrementCartItemQuantity = (id) => {
    const { cartList } = this.state;
    const update = cartList.map((each) => {
      if (each.id === id) {
        return {
          description: each.description,
          id: each.id,
          imageUrl: each.imageUrl,
          price: each.price,
          quantity: each.quantity - 1,

          title: each.title,
        };
      } else {
        return {
          description: each.description,
          id: each.id,
          imageUrl: each.imageUrl,
          price: each.price,
          quantity: each.quantity,

          title: each.title,
        };
      }
    });
    this.setState((prevState) => ({ cartList: update }));
    this.setState((prevState) => ({
      cartList: prevState.cartList.filter((each) => each.quantity !== 0),
    }));
  };
  removeAllCartItems = () => {
    this.setState({ cartList: [] });
  };
  removeCartItem = (id) => {
    const { cartList } = this.state;
    const update = cartList.filter((each) => each.id !== id);
    console.log(cartList);
    this.setState({ cartList: update });
  };
  addCartItem = (product) => {
    const { cartList } = this.state;

    const isProductThere = cartList.find((each) => each.id === product.id);

    if (isProductThere === undefined) {
      this.setState((prevState) => ({
        cartList: [...prevState.cartList, product],
      }));
    } else if (isProductThere !== undefined) {
      const update = cartList.map((each) => {
        if (each.id === product.id) {
          return {
            description: each.description,
            id: each.id,
            imageUrl: each.imageUrl,
            price: each.price,
            quantity: each.quantity + product.quantity,

            title: each.title,
          };
        } else {
          return {
            description: each.description,
            id: each.id,
            imageUrl: each.imageUrl,
            price: each.price,
            quantity: each.quantity,

            title: each.title,
          };
        }
      });
      this.setState({ cartList: update });
    }
  };

  render() {
    const { cartList } = this.state;

    return (
      <div className="App">
        <CartContext.Provider
          value={{
            cartList,
            addCartItem: this.addCartItem,
            removeCartItem: this.removeCartItem,
            incrementCartItemQuantity: this.incrementCartItemQuantity,
            decrementCartItemQuantity: this.decrementCartItemQuantity,
            removeAllCartItems: this.removeAllCartItems,
          }}
        >
          <Router>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/rooms" element={<Rooms />} />
              <Route exact path="/ContactUs" element={<Contactus />} />
              <Route exact path="/*" element={<Notfound />} />
            </Routes>
            <Footer />
          </Router>
        </CartContext.Provider>
      </div>
    );
  }
}

export default App;
