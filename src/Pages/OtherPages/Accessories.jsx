import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OtherPages.css";

const Accessories = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

useEffect(() => {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
      const accessories = data.products.filter((item) =>
        item.category.toLowerCase().includes("accessories")
      );
      setProducts(accessories);
      setLoading(false);
    });
}, []);


  if (loading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="accessories-container">
      <h2>Accessories</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <img src={product.thumbnail} alt={product.title} />
            <h4>{product.title}</h4>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accessories;
