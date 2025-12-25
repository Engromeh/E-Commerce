import React, { useContext } from "react";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { Link } from "react-router-dom";
import CartProvider, { CartContext } from "../CartProvider/CartProvider";

{
  /* بجيب البروبس هنا بقاا */
}

const Proudect = ({ products }) => {
  const { addcartitem, cartitems } = useContext(CartContext);

  const isInCart = cartitems.some((item) => item.id === products.id);
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
          <span onClick={() => addcartitem(products)}>
            <FaCartArrowDown />
          </span>
        )}
        <span>
          <FaRegHeart />
        </span>
        <span>
          <FaShare />
        </span>
      </div>
    </div>
  );
};

export default Proudect;
