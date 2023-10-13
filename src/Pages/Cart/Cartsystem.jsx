import { useContext } from "react";
import { CartContext } from "../../App";
import { Link } from "react-router-dom";
import QRCode from "qrcode.react"; // Import QRCode component
import "./cart.css";

function CartSystem() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    const item = cart.find((item) => item.id === productId);
    if (item) {
      const deductedAmount = item.quantity - newQuantity;
      updateQuantity(productId, newQuantity, deductedAmount);
    }
  };

  const handleRemoveFromCart = (productId) => {
    const item = cart.find((item) => item.id === productId);
    if (item) {
      removeFromCart(productId, item.quantity);
    }
  };
  return (
    <div className="cart">
      <h2 className="cart-header">Shopping Cart</h2>
      <div className="cart-items">
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
                <th>QR Code</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="cart-items">
                  <td>
                    <div className="product-info">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="products-image"
                      />
                      <h3 className="products-title">{item.title}</h3>
                    </div>
                  </td>
                  <td>${item.price}</td>
                  <td>
                    <div className="cart-item-quantity">
                      <button
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity - 1)
                        }
                        className="quantity-button"
                      >
                        -
                      </button>&nbsp;
                      <span className="quantity">{item.quantity}</span>&nbsp;
                      <button
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity + 1)
                        }
                        className="quantity-button"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>${item.price * item.quantity}</td>
                  <td>
                    <button
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="remove-button"
                    >
                      Remove
                    </button>
                  </td>
                  <td>
                    <div className="product-qr-code">
                      <QRCode
                        value={`Product ID: ${item.id}, Price: $${item.price}`}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className="cart-summary">
        <h3 className="total-label">Total: ${getTotalPrice()}</h3>

        <Link to="/PaymentForm" className="checkout-button" cart={cart}>
          Checkout
        </Link>
      </div>
    </div>
  );
}

export default CartSystem;
