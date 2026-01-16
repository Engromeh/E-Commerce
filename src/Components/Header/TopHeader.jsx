import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/Romeh-removebg-preview.png";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import "./Header.css";
import { CartContext } from "../CartProvider/CartProvider";
import SearchBox from "../SearchBar/SearchBox";

const TopHeader = () => {
  const{cartitems , favitems}=useContext(CartContext)
  return (
    <div className="top_header">
      <div className="container">
        <Link to="/" className="logo">
          <img src={Logo} alt="Logo" style={{width:"120px"}} />
        </Link>

    <SearchBox/>
        <div className="header_icon">
        <Link to="/Favlist">

          <div className="icon">
            <FaRegHeart style={{color:"black"}} />
            <span className="Counter_icon">{favitems.length}</span>
          </div>
          </Link>

          <Link to="/cart">
            <div className="icon">
            <TiShoppingCart  style={{color:"black"}}/>
            <span className="Counter_icon">{cartitems.length}</span>
          </div>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
