import PropTypes from "prop-types";
import "./PaymentSlip.css";

function PaymentSlip({ customerInfo, paymentMethod, amount, cart }) {
  const handlePrint = () => {
    const printContent = document.getElementById("payment-slip"); // Get the payment slip content by ID

    const newWindow = window.open("_blank", ""); // Open a new window
    newWindow.document.open();
    newWindow.document.write(
      "<html><head><title>Payment Slip</title></head><body>"
    ); // Create a new HTML document
    newWindow.document.write(`
   <style>


   .customer-info {
    text-align: center; 
    margin-bottom: 20px;
  }

  .payment-method{
    text-align: center; 
    margin-top: 50px;
  }
  .customer-info h3 {
    font-size: 18px;
  }

  .customer-info p {
    font-size: 18px;
  }

      .product-details table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 10px;
      }

      .product-details th, .product-details td {
        border: 1px solid #ccc;
        padding: 8px;
        text-align: left;
      }

      .print-button {
          display:none;
      }

      .total-amount{
        font-size: 20px;
      }

    </style>
  `);
    newWindow.document.write(printContent.innerHTML); // Copy the payment slip content
    newWindow.document.write("</body></html>");
    newWindow.document.close();

    newWindow.print(); // Trigger the print dialog in the new window
    newWindow.close(); // Close the new window after printing
  };

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div id="payment-slip" className="payment-slip">
      <h2>Payment Slip</h2>
      <div className="customer-info">
        <h3>Customer Information</h3>
        <p>Name: {customerInfo.name}</p>
        <p>Email: {customerInfo.email}</p>
        <p>Phone: {customerInfo.phone}</p>
        <p>Address: {customerInfo.address}</p>
        <p>City: {customerInfo.city}</p>
        <p>Postal Code: {customerInfo.postalCode}</p>
        <p>Country: {customerInfo.country}</p>
        {/* Add more customer details here */}
      </div>
      <div className="product-details">
        <h3>Product Details</h3>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td style={{ color: "black" }}>{item.title}</td>
                <td style={{ color: "black" }}>${item.price}</td>
                <td style={{ color: "black" }}>{item.quantity}</td>
                <td style={{ color: "black" }}>
                  ${item.price * item.quantity}
                </td>
              </tr>
            ))}
          </tbody>
          <div className="total-amount">
            <p>Total Amount: $ {totalAmount}</p>
          </div>
        </table>
      </div>
      <div className="payment-method">
        <h3>Payment Method</h3>
        <p>{paymentMethod}</p>
        <p>Amount : $ {amount}</p>
      </div>
      <div className="print-button">
        <button onClick={handlePrint}>Print Slip</button>
      </div>
    </div>
  );
}

PaymentSlip.propTypes = {
  customerInfo: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    postalCode: PropTypes.string,
    country: PropTypes.string,
    // Add more customer information PropTypes
  }),
  paymentMethod: PropTypes.string,
  amount: PropTypes.number,
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      price: PropTypes.number,
      quantity: PropTypes.number,
      // Add more cart item PropTypes
    })
  ),
};

export default PaymentSlip;