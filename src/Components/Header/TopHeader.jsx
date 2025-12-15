import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png"
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import "./Header.css"

const TopHeader = () => {
  return (
    <div className="top_header">
      <div className="container">
        <Link to="/" className="logo" >
<img src={Logo} alt="Logo" />
        </Link>

        <form action="" className="Search_box">
          <input type="text" name="search" id="search" placeholder="search for proudect" />
          <button type="submit"><FaSearch />
</button>
        </form>
        <div className="header_icon">
        <div className="icon">
<FaRegHeart />
<span className="Counter_icon">0</span>
        </div>
          <div className="icon">
<TiShoppingCart />
<span className="Counter_icon">0</span>
        </div>

        </div>

      </div>
    </div>
  );
};

export default TopHeader;
