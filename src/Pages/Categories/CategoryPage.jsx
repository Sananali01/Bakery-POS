// CategoryPage.jsx

import { useParams } from 'react-router-dom';
import productData from '../Product/productData';
import './categorypage.css'; // Import the CSS file

function CategoryPage() {
  const { category } = useParams();
  const filteredProducts = productData.filter((product) => product.category === category);

  // Calculate the count of products in the current category
  const productCount = filteredProducts.length;

  return (
    <div className="category-page">
      <h1 className="category-title">
        {category} Products <span> ({productCount} {productCount === 1 ? 'Product' : 'Products'})</span> 
      </h1>
      <ul className="product-list">
        {filteredProducts.map((product) => (
          <li
            className={`product-item product-${product.id}`} // Use unique class based on product ID
            key={product.id}
          >
            <h3 className="product-title">{product.title}</h3>
            <img
              className="product-image"
              src={product.image}
              alt={product.title}
            />
            <p className="product-description">{product.description}</p>
            <p className="product-price">Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryPage;
