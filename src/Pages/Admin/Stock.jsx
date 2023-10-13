// Stock.js
import { useState } from "react";
import productData from "../../Pages/Product/productData";
import "./stock.css";
import Invoice from "./Invoices";

function Stock() {
  const [productQuantities, setProductQuantities] = useState(
    productData.reduce((quantities, product) => {
      quantities[product.id] = { stock: product.stock, deduction: 0 };
      return quantities;
    }, {})
  );

  const [addStockQuantities, setAddStockQuantities] = useState(
    productData.reduce((quantities, product) => {
      quantities[product.id] = 0;
      return quantities;
    }, {})
  );

  const [transferStockQuantities, setTransferStockQuantities] = useState(
    productData.reduce((quantities, product) => {
      quantities[product.id] = 0;
      return quantities;
    }, {})
  );

  const [setTransferredProducts] = useState([]);

  const [showInvoice, setShowInvoice] = useState(false); // State for showing/hiding the invoice

  const handleAddStockQuantityChange = (productId, newQuantity) => {
    setAddStockQuantities({
      ...addStockQuantities,
      [productId]: newQuantity,
    });
  };

  const handleTransferStockQuantityChange = (productId, newQuantity) => {
    setTransferStockQuantities({
      ...transferStockQuantities,
      [productId]: newQuantity,
    });
  };

  const handleDeductStock = (product) => {
    const { stock } = productQuantities[product.id];
    const transferQuantity = transferStockQuantities[product.id];

    if (transferQuantity > 0 && transferQuantity <= stock) {
      const updatedStock = stock - transferQuantity;

      setProductQuantities((prevQuantities) => ({
        ...prevQuantities,
        [product.id]: {
          ...prevQuantities[product.id],
          stock: updatedStock,
          deduction: transferQuantity,
        },
      }));

      setTransferredProducts((prevTransferredProducts) => [
        ...prevTransferredProducts,
        {
          productName: product.title,
          transferredQuantity: transferQuantity,
        },
      ]);

      setTransferStockQuantities((prevQuantities) => ({
        ...prevQuantities,
        [product.id]: 0,
      }));
    }
  };

  const handleAddStock = (product) => {
    const { stock } = productQuantities[product.id];
    const addQuantity = addStockQuantities[product.id];

    if (addQuantity > 0) {
      const updatedStock = stock + addQuantity;

      setProductQuantities((prevQuantities) => ({
        ...prevQuantities,
        [product.id]: {
          ...prevQuantities[product.id],
          stock: updatedStock,
        },
      }));

      setAddStockQuantities((prevQuantities) => ({
        ...prevQuantities,
        [product.id]: 0,
      }));
    }
  };

  const handlePrintInvoice = () => {
    // Print only the invoice section when the invoice button is clicked
    const invoiceContainer = document.getElementById("invoice-container");
    const invoiceWindow = window.open("", "_blank");
    const customCss = `
    <style>


      .invoice-container {
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        overflow-x: auto;
      }
      
      .invoice-table {
        width: 100%;
        border-collapse: collapse;
      }

      .invoice-table th {
        background-color: #ff643c;
        color: #fff;
        padding: 10px;
        text-align: left;
        border: 2px solid #444;
      }

      .invoice-table td {
        padding: 10px;
        border: 2px solid black;
      }
      
      /* Additional styles for the printed invoice content */
      .in-head {
        display:none;
      }
      
      /* Add more custom styles as needed for the printed invoice */

    </style>
  `;

  // Write the custom CSS and invoice content to the print window
  invoiceWindow.document.write(customCss);
    invoiceWindow.document.write(invoiceContainer.innerHTML);
    invoiceWindow.document.close();
    invoiceWindow.print();
  };

  return (
    <>
      <div className="invoicepage">
        <button
          style={{ marginBottom: "25px" }}
          onClick={() => setShowInvoice(!showInvoice)}
        >
          {showInvoice ? "Hide Invoice" : "Show Invoice"}
        </button>

        {showInvoice && (
          <div>
            <Invoice
              productData={productData}
              productQuantities={productQuantities}
            />

            <button onClick={handlePrintInvoice}>Print Invoice</button>
          </div>
        )}
      </div>

      <div className="stock-container">
        <table className="stock-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Image</th>
              <th>Price</th>
              <th>Add Stock Quantity</th>
              <th>Item Stock</th>
              <th>Transfer Stock Quantity</th>
              <th>Deducted Stock</th>
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
                    value={addStockQuantities[product.id]}
                    onChange={(e) =>
                      handleAddStockQuantityChange(
                        product.id,
                        parseInt(e.target.value)
                      )
                    }
                  />
                  <button
                    className="add-stock-button"
                    onClick={() => handleAddStock(product)}
                  >
                    Add Stock
                  </button>
                </td>
                <td>{productQuantities[product.id].stock}</td>
                <td>
                  <input
                    className="stock-deduction-input"
                    type="number"
                    min="0"
                    value={transferStockQuantities[product.id]}
                    onChange={(e) =>
                      handleTransferStockQuantityChange(
                        product.id,
                        parseInt(e.target.value)
                      )
                    }
                  />
                  <button
                    className="stock-button"
                    onClick={() => handleDeductStock(product)}
                  >
                    Transfer Stock
                  </button>
                </td>
                <td>{productQuantities[product.id].deduction}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Stock;
