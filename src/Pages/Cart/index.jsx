// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./cart.css"; // Import your CSS file for styling
import productData from "../Product/productData"; // Import productData

function Cart() {
  const allowedCategories = [
    "Cakes",
    "Cookies",
    "Pie",
    "Bread",
    "Candy",
    "Donuts",
    "Beverages",
  ];

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: 0,
    image: "", // You may use a file input to upload an image
    category: "",
    rating: { rate: 0, count: 0 },
  });
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({
        ...formData,
        image: reader.result, // Store the image data (as a base64 string) in the formData
      });
    };

    if (file) {
      reader.readAsDataURL(file); // Read the selected file as a data URL
    }
  };

  const handleInputChange1 = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new product object using the formData
    const newProduct = {
      ...formData,
      id: productData.length + 1, // Generate a unique ID
    };

    // Update the productData array with the new product
    productData.push(newProduct);

    // Clear the form
    setFormData({
      title: "",
      description: "",
      price: 0,
      image: "",
      category: "",
      rating: { rate: 0, count: 0 },
    });

    // You can also save the updated productData to a backend server here

    alert("Product added successfully!"); // Show a success message
  };

  return (
    <div className="add-product-container">
      <h1 className="page-title">Add a New Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            className="inp"
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            className="inp"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            className="inp"
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            className="inp"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange1}
          >
            <option value="">Select a category</option>
            {allowedCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*" // Specify accepted file types (e.g., images)
            onChange={handleImageChange} // Handle image change
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default Cart;