import  { useState } from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserAuthContext, CartContext } from "../../App";
import img from '/src/assets/images/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const { userAuth, handleLogout } = useContext(UserAuthContext);
  const { cart } = useContext(CartContext);
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const [isNavOpen, setIsNavOpen] = useState(false);

  function toggleNav() {
    setIsNavOpen(!isNavOpen);
  }

  // Function to close the navigation menu when a link is clicked
  function closeNav() {
    setIsNavOpen(false);
  }

  return (
    <nav className={`navbar ${isNavOpen ? "open" : ""}`}>
      <div className="nav-container">
        <div className="toggle-button" onClick={toggleNav}>
          <div className={`bar ${isNavOpen ? "open" : ""}`}></div>
          <div className={`bar ${isNavOpen ? "open" : ""}`}></div>
          <div className={`bar ${isNavOpen ? "open" : ""}`}></div>
        </div>
        <div className="nav-logo">
          <NavLink to="/" className="logo">
            <img src={img} alt="" />
          </NavLink>
        </div>
        <div className="logotxt"><span className="logo-text">Pinoy Tindahan</span></div>
        <div className={`nav-links ${isNavOpen ? "open" : ""}`}>
          <NavLink className="nav-item" to="/About" onClick={closeNav}>
            About
          </NavLink>
          <NavLink className="nav-item" to="/Categories" onClick={closeNav}>
            Categories
          </NavLink>
          <NavLink className="nav-item" to="/Product" onClick={closeNav}>
            Products
          </NavLink>
          <NavLink className="nav-item" to="/Cart" onClick={closeNav}>
            Cart
          </NavLink>
          <NavLink className="nav-item" to="/CartSystem" onClick={closeNav}>
            <FontAwesomeIcon icon={faShoppingCart} />
            {totalQuantity > 0 && <span className="cart-item-count">{totalQuantity}</span>}
          </NavLink>
          {userAuth ? (
            <>
              <button className="nav-button" onClick={handleLogout}>
                Logout
              </button>
              {/* Add user profile icon here */}
            </>
          ) : (
            <>
              <NavLink className="nav-button" to="/Login" onClick={closeNav}>
                Login
              </NavLink>
              <NavLink className="nav-button" to="/Signup" onClick={closeNav}>
                Signup
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
