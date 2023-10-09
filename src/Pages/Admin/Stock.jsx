import { useState } from "react";
import productData from "../../Pages/Product/productData";
import "./stock.css"; // Import the CSS file

function Stock() {
  const [productQuantities, setProductQuantities] = useState(
    productData.reduce((quantities, product) => {
      quantities[product.id] = { stock: product.stock, deduction: 0 };
      return quantities;
    }, {})
  );

  const handleQuantityChange = (productId, newQuantity) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: {
        ...prevQuantities[productId],
        deduction: newQuantity,
      },
    }));
  };

  const handleDeductStock = (product) => {
    const { stock, deduction } = productQuantities[product.id];
    if (deduction > 0 && deduction <= stock) {
      // Deduct the quantity from the stock of the product
      const updatedStock = stock - deduction;

      // Update the product stock in the state
      setProductQuantities((prevQuantities) => ({
        ...prevQuantities,
        [product.id]: {
          ...prevQuantities[product.id],
          stock: updatedStock,
          deduction: 0,
        },
      }));
    }
  };

  const handleAddStock = (product) => {
    const { stock, deduction } = productQuantities[product.id];
    if (deduction > 0) {
      // Add the quantity to the stock of the product
      const updatedStock = stock + deduction;

      // Update the product stock in the state
      setProductQuantities((prevQuantities) => ({
        ...prevQuantities,
        [product.id]: {
          ...prevQuantities[product.id],
          stock: updatedStock,
          deduction: 0,
        },
      }));
    }
  };

  

  return (
    <div className="stock-container">
      <table className="stock-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Stock</th>
            <th>Stock Deduction</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {productData.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>
                <img
                  src={product.image}
                  alt={product.title}
                  className="stock-image"
                />
              </td>
              <td>${product.price}</td>
              <td>
                <input
                  className="stock-quantity-input"
                  type="number"
                  min="0"
                  value={productQuantities[product.id].deduction}
                  onChange={(e) =>
                    handleQuantityChange(product.id, parseInt(e.target.value))
                  }
                />
                <button
                  className="add-stock-button"
                  onClick={() => handleAddStock(product)}
                >
                  Add Stock
                </button>
              </td>
              <td>
                {productQuantities[product.id].stock} (
                {productQuantities[product.id].deduction})
              </td>
              <td>
                <input
                  className="stock-deduction-input"
                  type="number"
                  min="0"
                  value={productQuantities[product.id].deduction}
                  onChange={(e) =>
                    handleQuantityChange(product.id, parseInt(e.target.value))
                  }
                />
              </td>
              <td>
                <button
                  className="stock-button"
                  onClick={() => handleDeductStock(product)}
                >
                  Transfer Stock
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Stock;
