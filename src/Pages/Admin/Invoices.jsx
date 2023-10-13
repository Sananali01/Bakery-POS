// Invoice.js
import PropTypes from "prop-types";
import './Invoices.css'

function Invoice({ productData, productQuantities }) {
  return (
    <div className="invoice-container" id="invoice-container">
      <h2 className="in-head">Invoice</h2>
      <table className="invoice-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Deducted Stock</th>
          </tr>
        </thead>
        <tbody>
          {productData.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>${product.price}</td> {/* Display the product price */}
              <td>{productQuantities[product.id].stock}</td>
              <td>{productQuantities[product.id].deduction}</td>
            </tr>
          ))}
        
        </tbody>
      </table>
    </div>
  );
}


Invoice.propTypes = {
  productData: PropTypes.array.isRequired, // Ensure that productData is an array and is required.
  productQuantities: PropTypes.object.isRequired, // Ensure that productQuantities is an object and is required.
};


export default Invoice;
