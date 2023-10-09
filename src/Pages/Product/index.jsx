  // Product.js

  import { useEffect, useState } from "react";
  import { useLocation } from "react-router-dom";
  import "./styles.css";
  import Card from "../../Components/Card";
  import productData from "./productData"; // Import productData

  const Product = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const selectedCategory = queryParams.get("category");

    const [items, setItems] = useState([]);
    const [searchedItems, setSearchedItems] = useState([]);
    const [sortOption, setSortOption] = useState("");
    const [deductedAmounts, setDeductedAmounts] = useState({}); // Track deducted amounts

    useEffect(() => {
      setItems(productData);
      setSearchedItems(productData);
    }, []);

    useEffect(() => {
      // Filter products based on the selected category
      if (selectedCategory) {
        const filteredItems = items.filter(
          (item) => item.category.toLowerCase() === selectedCategory.toLowerCase()
        );
        setSearchedItems(filteredItems);
      } else {
        setSearchedItems(items);
      }
    }, [selectedCategory, items]);

    const handleSearchString = (e) => {
      const inputValue = e.target.value;
      const filteredItems = searchedItems.filter((item) =>
        item.title.toLowerCase().includes(inputValue.toLowerCase())
      );
      setSearchedItems(filteredItems);
    };

    const handleSortChange = (e) => {
      const sortValue = e.target.value;
      setSortOption(sortValue);

      let sortedItems = [...searchedItems];

      if (sortValue === "price-asc") {
        sortedItems.sort((a, b) => a.price - b.price);
      } else if (sortValue === "price-desc") {
        sortedItems.sort((a, b) => b.price - a.price);
      } else if (sortValue === "title-asc") {
        sortedItems.sort((a, b) => a.title.localeCompare(b.title));
      } else if (sortValue === "title-desc") {
        sortedItems.sort((a, b) => b.title.localeCompare(a.title));
      }

      setSearchedItems(sortedItems);
    };

    const handleDeductStock = (productId, deductionAmount) => {
      // Update the deducted amounts state
      setDeductedAmounts((prevDeductedAmounts) => ({
        ...prevDeductedAmounts,
        [productId]: (prevDeductedAmounts[productId] || 0) + deductionAmount,
      }));
    };

    const handleAddToStock = (productId) => {
      // Deduct the previously deducted amount from stock
      const deductedAmount = deductedAmounts[productId] || 0;
      const updatedItems = items.map((item) => {
        if (item.id === productId) {
          return {
            ...item,
            stock: item.stock + deductedAmount,
          };
        }
        return item;
      });

      setItems(updatedItems);
      // Reset the deducted amount for the product
      setDeductedAmounts((prevDeductedAmounts) => ({
        ...prevDeductedAmounts,
        [productId]: 0,
      }));
    };

    return (
      <div className="product-container">
        <h1 className="page-title">Products</h1>
        <h2 className="product-count">Total Products: {searchedItems.length}</h2>
        <div className="search-filter-container">
          <input
            className="input"
            type="text"
            placeholder="Enter text to search"
            onChange={handleSearchString}
          ></input>
          <label htmlFor="sorts-select">Sort By:</label>
          <select
            className="sorts-select"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="">None</option>
            <option value="price-asc">Price - Low to High</option>
            <option value="price-desc">Price - High to Low</option>
            <option value="title-asc">Title - A to Z</option>
            <option value="title-desc">Title - Z to A</option>
          </select>
        </div>
        <div className="product-card-container">
          {searchedItems.map((item) => (
            <Card
              key={item.id}
              item={item}
              productId={item.id}
              image={item.image}
              title={item.title}
              stock={item.stock}
              description={item.description}
              rating={item.rating.rate}
              count={item.rating.count}
              price={item.price}
            >
              <button
                onClick={() => handleDeductStock(item.id, 1)}
                className="deduct-stock-button"
              >
                Deduct Stock
              </button>
              <button
                onClick={() => handleAddToStock(item.id)}
                className="add-to-stock-button"
              >
                Add to Stock
              </button>
            </Card>
          ))}
        </div>
      </div>
    );
  };

  export default Product;
