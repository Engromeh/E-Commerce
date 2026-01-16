import React, { useContext } from "react";
import { CartContext } from "../../Components/CartProvider/CartProvider";
import { FaHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./Favlist.css";
import PageTransation from "../Other_Style/PageTransation";

const Favlist = () => {
  const { favitems, removeFavitem, addcartitem, cartitems } =
    useContext(CartContext);

  const navigate = useNavigate();

  if (favitems.length === 0) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Your Fav List is empty 😔</h2>;
  }

  return (
    <PageTransation>
    <div className="wishlist-container">
      <h2>Your Favorites ❤️</h2>
      <div className="wishlist-grid">
        {favitems.map((product) => {
          const isInCart = cartitems.some((item) => item.id === product.id);

          const handleAddToCart = () => {
            addcartitem(product);
            toast.success(`${product.title} added to cart!`);
          };

          return (
            <div key={product.id} className="wishlist-item">
              <img
                src={product.thumbnail}
                alt={product.title}
                onClick={() => navigate(`/product/${product.id}`)}
              />
              <h4>{product.title}</h4>
              <p>${product.price}</p>

              <div className="wishlist-actions">
                {!isInCart ? (
                  <button onClick={handleAddToCart}>
                    <TiShoppingCart /> Add To Cart
                  </button>
                ) : (
                  <button disabled>In Cart</button>
                )}
                <button
                  className="remove-btn"
                  onClick={() => removeFavitem(product.id)}
                >
                  <FaHeart /> Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </PageTransation>
  );
};

export default Favlist;
