import { useState } from 'react';
import './PaymentForm.css'; // Import CSS
import PaymentSlip from '../Admin/PaymentSlip';
import { PropTypes } from 'prop-types';

function PaymentForm(props) {


  const { cart } = props;


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('ATM');
  const [formData, setFormData] = useState({});
  const [showPaymentSlip, setShowPaymentSlip] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({});


  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handlePostalCodeChange = (e) => {
    setPostalCode(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };



  

  // Define form fields for each payment method
  const atmFields = (
    <div>
      <label className='label'>ATM Card Number:</label>
      <input
        type="text"
        className='input'
        name="atmCardNumber"
        value={formData.atmCardNumber || ''}
        onChange={(e) => setFormData({ ...formData, atmCardNumber: e.target.value })}
      />
      <label className='label'>Expiration Date:</label>
      <input
        type="text"
        className='input'
        name="expirationDate"
        value={formData.expirationDate || ''}
        onChange={(e) => setFormData({ ...formData, expirationDate: e.target.value })}
      />
      <label className='label'>CVV:</label>
      <input
        type="text"
        className='input'
        name="cvv"
        value={formData.cvv || ''}
        onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
      />
      <label className='label'>Amount:</label>
      <input
        type="number"
        className='input'
        name="amount"
        value={formData.amount || ''}
        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
      />
      {/* Add other ATM related fields */}
    </div>
  );

  const cashFields = (
    <div>
      <label className='label'>Cash Pickup Location:</label>
      <input
        type="text"
        className='input'
        name="pickupLocation"
        value={formData.pickupLocation || ''}
        onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
      />
      <label className='label'>Recipient Name:</label>
      <input
        type="text"
        className='input'
        name="recipientName"
        value={formData.recipientName || ''}
        onChange={(e) => setFormData({ ...formData, recipientName: e.target.value })}
      />
      <label className='label'>Identification Number:</label>
      <input
        type="text"
        className='input'
        name="identificationNumber"
        value={formData.identificationNumber || ''}
        onChange={(e) => setFormData({ ...formData, identificationNumber: e.target.value })}
      />
      <label className='label'>Amount:</label>
      <input
        type="number"
        className='input'
        name="amount"
        value={formData.amount || ''}
        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
      />
      {/* Add other Cash related fields */}
    </div>
  );

  const bankFields = (
    <div>
      <label className='label'>Bank Account Number:</label>
      <input
        type="text"
        className='input'
        name="bankAccountNumber"
        value={formData.bankAccountNumber || ''}
        onChange={(e) => setFormData({ ...formData, bankAccountNumber: e.target.value })}
      />
      <label className='label'>Bank Branch:</label>
      <input
        type="text"
        className='input'
        name="bankBranch"
        value={formData.bankBranch || ''}
        onChange={(e) => setFormData({ ...formData, bankBranch: e.target.value })}
      />
      <label className='label'>Account Holder Name:</label>
      <input
        type="text"
        className='input'
        name="accountHolderName"
        value={formData.accountHolderName || ''}
        onChange={(e) => setFormData({ ...formData, accountHolderName: e.target.value })}
      />
      <label className='label'>Amount:</label>
      <input
        type="number"
        className='input'
        name="amount"
        value={formData.amount || ''}
        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
      />
      {/* Add other Bank related fields */}
    </div>
  );

  // Handle payment method change
  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
    setFormData({}); // Reset form data when payment method changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prepare customerInfo, productDetails, and paymentMethod data

    const customerInfoData = {
      name,
      email,
      phone,
      address,
      city,
      postalCode,
      country,
      // Add more customer information fields
    };




    setCustomerInfo(customerInfoData);
    setShowPaymentSlip(true);
  };
  


  return (<>

  <div className='paymentpage'>


  <div className="billing-form">
      <h3>Checkout Information</h3>
      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="forms-row">
          <div className="form-group2">
            <input className='formtext'
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Full Name"
              required
            />
          </div>
          <div className="form-group2">
            <input className='formtext'
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
              required
            />
          </div>
        </div>
        <div className="forms-row">
          <div className="form-group2">
            <input className='formtext'
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Phone"
              required
            />
          </div>
          <div className="form-group2">
            <input className='formtext'
              type="text"
              value={address}
              onChange={handleAddressChange}
              placeholder="Address"
              required
            />
          </div>
          <div className="form-group2">
            <input className='formtext'
              type="text"
              value={city}
              onChange={handleCityChange}
              placeholder="City"
              required
            />
          </div>
        </div>
        <div className="forms-row">
          <div className="form-group2">
            <input className='formtext'
              type="text"
              value={postalCode}
              onChange={handlePostalCodeChange}
              placeholder="Postal Code"
              required
            />
          </div>
          <div className="form-group2">
            <select className='formtext'
              value={country}
              onChange={handleCountryChange}
              required
              
            >
              <option value="">Select Country</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="Pakistan">Pakistan</option>
              <option value="UK">UK</option>
              <option value="Australia">Australia</option>
              <option value="Germany">Germany</option>
              <option value="France">France</option>
              <option value="India">India</option>
              <option value="Brazil">Brazil</option>
              <option value="Mexico">Mexico</option>
              <option value="Japan">Japan</option>
            </select>
          </div>
        </div>


      </form>
    </div>

    <div className="payment-container-fluid">
      <div className="payment-form">
      <h2>Payment Method:</h2>
      <select value={paymentMethod} onChange={handlePaymentMethodChange} className='Select'>
        <option className='opt' value="ATM">ATM</option>
        <option className='opt' value="Cash">Cash</option>
        <option className='opt' value="Bank">Bank</option>
      </select>

      <form onSubmit={handleSubmit}>
        {paymentMethod === 'ATM' && atmFields}
        {paymentMethod === 'Cash' && cashFields}
        {paymentMethod === 'Bank' && bankFields}

        <button type="submit">Submit Payment</button>
      </form>

      </div>

     
      
    </div>

    
  </div>


  <div className="payslip">
        {showPaymentSlip && cart && (
          <PaymentSlip
            customerInfo={customerInfo}
            paymentMethod={paymentMethod}
            amount={formData.amount}
            cart={cart} // Pass the cart data to the PaymentSlip component
          />
        )}
      </div>

</>

);
}


PaymentForm.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    // Add more prop types for your cart items
  })),
};

export default PaymentForm;
