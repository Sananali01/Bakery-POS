import { useContext } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import "./styles.css"

function Card({ image, title, price, productId, stock, deductedAmount }) {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(`/product-detail/${productId}`);
  };

  const handleAddToCart = () => {
    if (stock > 0) {
      addToCart({
        id: productId,
        image,
        title,
        price,
      });
      console.log("Added to cart:", { id: productId, title, price });
    } else {
      console.log("Product is out of stock");
    }
  };

  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
      <p className="card-stock">
        Stock: {stock} {deductedAmount > 0 && `(-${deductedAmount})`}
      </p>
      <p className="card-price">${price}</p>
      <button className="buttons" onClick={onClickHandler}>
        View Details
      </button>
      <button className="buttons" onClick={handleAddToCart} disabled={stock <= 0}>
        Add to Cart
      </button>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  productId: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
  deductedAmount: PropTypes.number.isRequired, // Add deductedAmount prop
};

export default Card;
