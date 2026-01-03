import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Proudect from "../../Components/SlideProudect/Proudect";
import "./CategoryPage.css";
import PageTransation from "../../Components/Other_Style/PageTransation";
const CategoryPage = () => {
  const [loading, setLoading] = useState(true);

  const { category } = useParams();
  const [productsCategory, setProductsCategory] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setProductsCategory(data.products);
        setLoading(false);
      });
  }, [category]);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <PageTransation>
      <div className="category-page">
        <div className="container">
          <div className="top_slide">
            <h2>
              {category} : {productsCategory.length}
            </h2>
            <p>{category}</p>
          </div>
          <div className="proudect-category">
            {productsCategory.map((item) => (
              <Proudect key={item.id} products={item} />
            ))}
          </div>
        </div>
      </div>
    </PageTransation>
  );
};

export default CategoryPage;
