// Categories.jsx
import { Link } from 'react-router-dom';
import './category.css'

function Categories() {
  const categories = [
    'Cakes',
    'Cookies',
    'Pie',
    'Bread',
    'Candy',
    'Donuts',
    'Beverages',
  ];

  return (
    <div className="categories-container">
      <h1 className="categories-title">Browse Categories</h1>
      <div className="category-list">
        {categories.map((category, index) => (
          <div className="category-item" key={index}>
            <h2 className="category-name">{category}</h2>
            {/* Navigate to the category page when clicked */}
            <Link to={`/category/${encodeURIComponent(category)}`}>
              <button className="browse-button">Browse Items</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
