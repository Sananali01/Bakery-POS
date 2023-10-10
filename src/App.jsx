import { useState } from "react";
import { createContext } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import Product from "./Pages/Product";
import Categories from "./Pages/Categories";
import PrivateRoute from "./Components/PrivateRoute";
import ProductDetail from "./Pages/ProductDetail";
import PageContainer from "./Pages/PageContainer";
import PaymentForm from "./Pages/Cart/PaymentForm";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Checkout from "./Pages/Cart/Checkout";
import CategoryPage from "./Pages/Categories/CategoryPage";
import Cartsystem from "./Pages/Cart/Cartsystem";
import Stock from "./Pages/Admin/Stock";

export const UserAuthContext = createContext();
export const CartContext = createContext();

function App() {
  const [userAuth, setUserAuth] = useState(false);
  const [cart, setCart] = useState([]);

  const handleLogin = async () => {
    setUserAuth(true);
  };

  const handleLogout = async () => {
    setUserAuth(false);
  };

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  return (
    <>
      <UserAuthContext.Provider value={{ userAuth, handleLogin, handleLogout }}>
        <CartContext.Provider
          value={{ cart, addToCart, removeFromCart, updateQuantity }}
        >
          <Routes>
        
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<SignUp />} />
            <Route path="/" element={<PageContainer />}>
              <Route path="/" element={<Home />} />
              <Route path="About" element={<About />} />
              <Route path="Categories" element={<Categories />} />
              <Route path="/category/:category" element={<CategoryPage />} />
              <Route path="Checkout" element={<Checkout/>} />
              <Route path="/PaymentForm" element={<PaymentForm/>} />
              <Route path="/Stock" element={<Stock/>} />
              <Route path="/Cartsystem" element={<Cartsystem />} />

              {/* nestin route */}

              <Route path="/Product" element={<Product />} />
              
              <Route path="Product" element={<Product />} />
              {/* <Route path="Product"> */}
              <Route path="product-detail">
                <Route path=":productId" element={<ProductDetail />} />
              </Route>

              {/* <Route path="BestSelling" element={<BestSelling />} />
          <Route path="Featured" element={<Featured />} /> */}
              {/* </Route> */}
              <Route path="*" element={<ErrorPage />} />

              <Route path="/Cart" element={<Cart />} />
            </Route>

            <Route
              path="/checkout"
              element={
                <PrivateRoute>
                  <Checkout />
                </PrivateRoute>
              }
            ></Route>


          </Routes>
        </CartContext.Provider>
      </UserAuthContext.Provider>
    </>
  );
}

export default App;
