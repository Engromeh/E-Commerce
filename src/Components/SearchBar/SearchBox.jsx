import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./SearchBox.css";


// صندوق البحث مع اقتراحات البحث
const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  // جلب الاقتراحات أثناء الكتابة
  useEffect(() => {
    if (searchTerm.trim().length < 2) {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(() => {
      fetch(`https://dummyjson.com/products/search?q=${searchTerm}`)
        .then((res) => res.json())
        .then((data) => {
          setSuggestions(data.products.slice(0, 5));
        })
        .catch(() => setSuggestions([]));
    }, 400);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // عند الضغط Enter
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      setSuggestions([]);
    }
  };

  // عند اختيار اقتراح
  const handleClick = (title) => {
    setSearchTerm(title);
    navigate(`/search?q=${encodeURIComponent(title)}`);
    setSuggestions([]);
  };

  return (
    <div className="SearchBox-contianer" style={{ position: "relative" }}>
      <form className="Search_box" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search for product"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>

      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((item) => (
            <li key={item.id} onClick={() => handleClick(item.title)}>
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;
