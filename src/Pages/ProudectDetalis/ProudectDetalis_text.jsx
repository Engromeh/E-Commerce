import React from "react";
import { FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ProudectDetalis_text = ({
  productsDetalis,
  isInCart,
  addcartitem,
  isInFav,
  addFavitem,
  removeFavitem,
}) => {
  const navigate = useNavigate();

  const handleAddToCartDetalis = () => {
    addcartitem(productsDetalis);

    toast.success(
      <div className="stoost-wrapper">
        <img
          src={productsDetalis.thumbnail}
          alt={productsDetalis.title}
          className="stoost-image"
        />
        <div className="stoost-content">
          <strong>{productsDetalis.title}</strong>
          <p>Added to cart successfully!</p>
        </div>
        <button className="btn" onClick={() => navigate("/cart")}>
          View Cart
        </button>
      </div>,
      { duration: 4000 }
    );
  };

  const handleFavToggleDetalis = () => {
    if (isInFav) {
      removeFavitem(productsDetalis.id);
    } else {
      addFavitem(productsDetalis);
    }
  };

  return (
    <div className="IteamDetalis">
      <h1 className="name">{productsDetalis.title}</h1>

      <div className="Stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStarHalfStroke />
      </div>

      <p className="price">${productsDetalis.price}</p>
      <p className="description">{productsDetalis.description}</p>

      <div className="actions">
        {!isInCart ? (
          <button className="add-to-cart-btn" onClick={handleAddToCartDetalis}>
            <TiShoppingCart />
            Add To Cart
          </button>
        ) : (
          <button className="add-to-cart-btn disabled" disabled>
            In Cart
          </button>
        )}

        <button
          className={`wishlist-btn ${isInFav ? "active" : ""}`}
          onClick={handleFavToggleDetalis}
        >
          <FaHeart />
        </button>
      </div>
    </div>
  );
};

export default ProudectDetalis_text;
