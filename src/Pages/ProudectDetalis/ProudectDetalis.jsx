import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProudectDetalis.css";
import { FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import SlideProudect from "../../Components/SlideProudect/SlideProudect";
import { CartContext } from "../../Components/CartProvider/CartProvider";

const ProudectDetalis = () => {
  const { addcartitem, cartitems } = useContext(CartContext);
  const { id } = useParams();

  const [productsDetalis, setproductsDetalis] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mainImg, setMainImg] = useState("");

  const isInCart =
    productsDetalis &&
    cartitems.some((item) => item.id === productsDetalis.id);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setproductsDetalis(data);
        setMainImg(data.images[0]);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <>
      {/* Product Details */}
      <div className="Proudect_Detalis">
        <div className="container">
          {/* Images Section */}
          <div className="IteamImg_Detalis">
            <div className="MainImg">
              <img src={mainImg} alt={productsDetalis.title} />
            </div>

            <div className="SubImg">
              {productsDetalis.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={productsDetalis.title}
                  onClick={() => setMainImg(img)}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="IteamDetalis">
            <h1 className="name">{productsDetalis.title}</h1>

            <div className="Stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStarHalfStroke />
            </div>

            <p className="price">Price: ${productsDetalis.price}</p>
            <p className="description">{productsDetalis.description}</p>

            <h5>
              Availability:
              <span>{productsDetalis.availabilityStatus}</span>
            </h5>

            <h5>
              Brand:
              <span>{productsDetalis.brand}</span>
            </h5>

            <span className="stock">
              Hurry Up! Only {productsDetalis.stock} left in stock!
            </span>

            {/* Actions */}
            <div className="actions">
              {!isInCart ? (
                <button
                  className="add-to-cart-btn"
                  onClick={() => addcartitem(productsDetalis)}
                >
                  <span>Add To Cart</span>
                  <TiShoppingCart className="cart-icon" />
                </button>
              ) : (
                <button className="add-to-cart-btn disabled" disabled>
                  In Cart
                </button>
              )}

              <button className="wishlist-btn">
                <FaHeart />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Slider */}
      <SlideProudect
        titel={productsDetalis.category}
        category={productsDetalis.category}
        currentId={productsDetalis.id}
      />
    </>
  );
};

export default ProudectDetalis;
