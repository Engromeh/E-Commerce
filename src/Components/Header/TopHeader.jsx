import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/Romeh-removebg-preview.png";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CartContext } from "../CartProvider/CartProvider";
import SearchBox from "../SearchBar/SearchBox";
import "./Header.css";

const TopHeader = () => {
  const { cartitems, favitems, orders } = useContext(CartContext);

  return (
    <div className="top_header">
      <div className="container">
        <Link to="/" className="logo">
          <img src={Logo} alt="Logo" style={{ width: "120px" }} />
        </Link>

        <SearchBox />

        <div className="header_icon">
          {/* ❤️ Favorites */}
          <Link to="/Favlist">
            <div className="icon">
              <FaRegHeart style={{ color: "black" }} />
              <span className="Counter_icon">{favitems.length}</span>
            </div>
          </Link>

          {/* 🛒 Cart → مجموع Quantity */}
          <Link to="/cart">
            <div className="icon">
              <TiShoppingCart style={{ color: "black" }} />
              <span className="Counter_icon">
                {cartitems.reduce((acc, item) => acc + item.Quantity, 0)}
              </span>
            </div>
          </Link>

          {/* 🛍️ Orders → مجموع Quantity لكل الأوردرز */}
          <Link to="/order-success">
            <div className="icon">
              <MdOutlineShoppingBag style={{ color: "black" }} />
       
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
