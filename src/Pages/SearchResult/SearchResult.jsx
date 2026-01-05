import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageTransation from "../../Components/Other_Style/PageTransation";
import Proudect from "../../Components/SlideProudect/Proudect";

const SearchResult = () => {
  const location = useLocation();
  const [result, setresult] = useState([]);
  const [loading, setLoading] = useState(true);
  const query = new URLSearchParams(location.search).get("q");

  console.log(location.search);

useEffect(() => {
  if (!query) {
    setLoading(false);
    return;
  }

  setLoading(true);

  fetch(`https://dummyjson.com/products/search?q=${query}`)
    .then(res => res.json())
    .then(data => {
      setresult(data.products || []);
      setLoading(false);
    })
    .catch(err => {
      console.error(err);
      setLoading(false);
    });

}, [query]);



  if (loading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <PageTransation key={query}>
<div className="category-page">
        <div className="container">
          <div className="top_slide">
            <h2>
              Result for : {query} : {result.length}
            </h2>
            <p>{query}</p>
          </div>
          <div className="proudect-category">
            {result.map((item) => (
            <Proudect key={item.id} products={item}  />
            ))}
          </div>
        </div>
      </div>    </PageTransation>
  );
};

export default SearchResult;
