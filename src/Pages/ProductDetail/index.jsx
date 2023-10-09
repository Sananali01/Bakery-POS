import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserAuthContext } from "../../App";
import "./styles.css";
import { useDispatch } from "react-redux";
import { INCREMENT } from "../../Store/Action";
import productData from "../Product/productData"

const ProductDetails = () => {
  const navigate = useNavigate();
  const valueReceivedByContext = useContext(UserAuthContext);
  const [product, setProduct] = useState(null); // Initialize product as null
  const { productId } = useParams();
  const dispatch = useDispatch();

  const onBuyHandler = () => {
    navigate("/login");
  };

  const GoBackHandler = () => {
    navigate("/Product");
  };

  useEffect(() => {
    // Find the product in productData that matches the productId
    const foundProduct = productData.find((item) => item.id === parseInt(productId));
    setProduct(foundProduct); // Set the product state with the found product
  }, [productId]);

  const handleAddToCart = () => {
    dispatch(INCREMENT(product));
  };

  if (!product) {
    return <div>Loading...</div>; // Display a loading message until product data is loaded
  }

  return (
    <>
      <div className="details">
        <h4 className="text">Product ID = <span className="head">{productId}</span></h4>
      <img width={250}  src={product.image} alt="image"  className="pddt"/>
        <h3 className="text">Product Title: <br/><span className="head">{product.title}</span></h3>
        <p className="text">Category: <br/><span className="head">{product.category}</span></p>
        <p className="text">Description: <br/><span className="head">{product.description}</span></p>
        <p className="text">Price: <br/> <span className="head">${product.price}</span></p>
        <button onClick={GoBackHandler} className="button">Go Back</button>
        <br/>
        {valueReceivedByContext.userAuth ? (
          <button onClick={handleAddToCart} className="button">Add to Cart</button>
        ) : (
          <button onClick={onBuyHandler} className="button">Buy</button>
        )}
      </div>
    </>
  );
};

export default ProductDetails;