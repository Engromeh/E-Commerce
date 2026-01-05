import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navgite = useNavigate();
  const handelsubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navgite(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };
  return (
    <div className="SearchBox-contianer">
      <form action="" className="Search_box" onSubmit={handelsubmit}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="search for proudect"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
