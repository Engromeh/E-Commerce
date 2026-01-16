import React, { useContext } from "react";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import CartProvider, { CartContext } from "../CartProvider/CartProvider";
import toast from "react-hot-toast";
import { FaHeart } from "react-icons/fa";

import "./SlideProudect.css";

{
  /* بجيب البروبس هنا بقاا */
}

const Proudect = ({ products }) => {
  const { addcartitem, cartitems, addFavitem, favitems, removeFavitem } =
    useContext(CartContext);

  const isInFav = favitems.some((item) => item.id === products.id);
  const isInCart = cartitems.some((item) => item.id === products.id);

  // اشتغلنا علي لما تحط في الكارت  يطلع زي اشعار تحت كده ان اضاف
  const navigate = useNavigate();
  const handleAddToCart = () => {
    addcartitem(products);
    toast.success(
      <div className="stoost-wrapper">
        <img
          src={products.thumbnail}
          alt={products.title}
          className="stoost-image"
        />
        <div className="stoost-content">
          <strong>{products.title}</strong>
          <p>Added to cart successfully!</p>
        </div>
        <button className="btn" onClick={() => navigate("/cart")}>
          View Cart
        </button>
      </div>,
      { duration: 4000 }
    );
  };

  const handleFavToggle = () => {
    if (isInFav) {
      removeFavitem(products.id);
    } else {
      addFavitem(products);
    }
  };

  return (
    <div className="proudect">
      <Link to={`/product/${products.id}`}>
        {isInCart && <div className="in-cart-badge">✔ In cart</div>}
        <div className="proudect_img">
          <img src={products.thumbnail} alt="proudect" />
        </div>
        <p className="name_proudect">{products.title}</p>
        <div className="Stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStarHalfStroke />
        </div>
      </Link>
      <p className="price">{products.price}$</p>

      <div className="Icons_Proudect">
        {!isInCart && (
          <span onClick={() => handleAddToCart()}>
            <FaCartArrowDown />
          </span>
        )}
        <span
          className={`fav-icon ${isInFav ? "active" : ""}`}
          onClick={handleFavToggle}
        >
          {isInFav ? <FaHeart /> : <FaRegHeart />}
        </span>

        <span>
          <FaShare />
        </span>
      </div>
    </div>
  );
};

export default Proudect;
