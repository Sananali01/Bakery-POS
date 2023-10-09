import  { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

function Checkout() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [shippingMethod, setShippingMethod] = useState('standard');
  const [newsletterSubscription, setNewsletterSubscription] = useState(false);
  const [gender, setGender] = useState(''); // Added gender
  const [billingCountry, setBillingCountry] = useState(''); // Added billing country

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

  const handleCreditCardNumberChange = (e) => {
    setCreditCardNumber(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const handlePromoCodeChange = (e) => {
    setPromoCode(e.target.value);
  };

  const handleShippingMethodChange = (e) => {
    setShippingMethod(e.target.value);
  };

  const handleNewsletterSubscriptionChange = (e) => {
    setNewsletterSubscription(e.target.checked);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleBillingCountryChange = (e) => {
    setBillingCountry(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here or perform validation
  };

  return (
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
        <div className="forms-row">
          <div className="form-group2">
            <input className='formtext'
              type="text"
              value={creditCardNumber}
              onChange={handleCreditCardNumberChange}
              placeholder="Credit Card Number"
              required
            />
          </div>
          <div className="form-group2">
            <input className='formtext'
              type="text"
              value={expiryDate}
              onChange={handleExpiryDateChange}
              placeholder="Expiry Date"
              required
            />
          </div>
          <div className="form-group2">
            <input className='formtext'
              type="text"
              value={cvv}
              onChange={handleCvvChange}
              placeholder="CVV"
              required
            />
          </div>
        </div>
        <div className="forms-row">
          <div className="form-group2">
            <input className='formtext'
              type="text"
              value={promoCode}
              onChange={handlePromoCodeChange}
              placeholder="Promo Code"
            />
          </div>
          <div className="form-group2">
            <select className='formtext'
              value={shippingMethod}
              onChange={handleShippingMethodChange}
              
            >
              <option value="standard">Shipping</option>
              <option value="">Standard Shipping</option>
              <option value="express">Express Shipping</option>
            </select>
          </div>
          <div className="form-group2">
            <label className='formtext'>
              <input className='formtext'
                type="checkbox"
                checked={newsletterSubscription}
                onChange={handleNewsletterSubscriptionChange}
              />
              Subscribe to Newsletter
            </label>
          </div>
        </div>
        <div className="forms-row">
          <div className="form-group2">
            <select className='formtext'
              value={gender}
              onChange={handleGenderChange}
              required
              
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group2">
            <select className='formtext'
              value={billingCountry}
              onChange={handleBillingCountryChange}
              required
              
            >
              <option value="">Select Billing Country</option>
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
              {/* Add more billing country options here */}
            </select>
          </div>
        </div>
        <Link to="/PaymentForm" type="submit" className="checkout-btn">
          Place Order
        </Link>
      </form>
    </div>
  );
}

export default Checkout;
