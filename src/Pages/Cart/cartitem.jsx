import  { useState } from "react";
import PropTypes from 'prop-types'; 
import "./cart.css"; 

function CartItem({ item, onRemoveFromCart, onUpdateQuantity }) {
  const [quantity, setQuantity] = useState(item.quantity);
  console.log()

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onUpdateQuantity(item.id, newQuantity);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onUpdateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.image} style={{width:'30%'}}  alt={item.name} />
      </div>
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>${item.price}</p>
      </div>
      <div className="cart-item-quantity">
        <button onClick={handleDecrement}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <button className="remove-button" onClick={() => onRemoveFromCart(item.id)}>
        Remove
      </button>
    </div>
  );
}

// Define prop type validations
CartItem.propTypes = {
  item: PropTypes.shape({
    quantity: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  onRemoveFromCart: PropTypes.func.isRequired,
  onUpdateQuantity: PropTypes.func.isRequired,
};

export default CartItem;
