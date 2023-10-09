import { useState } from 'react';
import './PaymentForm.css'; // Import CSS

function PaymentForm() {
  const [paymentMethod, setPaymentMethod] = useState('ATM');
  const [formData, setFormData] = useState({}); // Store form data

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
        type="text"
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
        type="text"
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
        type="text"
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

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted data:', formData);
    // You can add logic here to handle the form submission, e.g., sending data to a server.
  };

  return (
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
  );
}

export default PaymentForm;
