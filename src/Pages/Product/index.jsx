// Product.js
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./styles.css";
import Card from "../../Components/Card";
import productData from "./productData";

const Product = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("category");

  const [searchedItems, setSearchedItems] = useState([]);
  const [sortOption, setSortOption] = useState({});

  useEffect(() => {
    setSearchedItems(productData);
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      const filteredItems = productData.filter(
        (item) => item.category.toLowerCase() === selectedCategory.toLowerCase()
      );
      setSearchedItems(filteredItems);
    } else {
      setSearchedItems(productData);
    }
  }, [selectedCategory]);

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
            productId={item.id} 
            item={item}
            image={item.image}
            title={item.title}
            stock={item.stock}
            description={item.description}
            rating={item.rating.rate}
            count={item.rating.count}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
