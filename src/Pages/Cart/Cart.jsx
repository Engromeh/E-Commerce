import React, { useContext } from "react";
import { CartContext } from "../../Components/CartProvider/CartProvider";
import { MdDelete } from "react-icons/md";
import "./Cart.css";

const Cart = () => {
  const { cartitems } = useContext(CartContext);
// هنا بحسب توتال الاسعار بتاعت المنتجات اللي في الكارت
  const total = cartitems.reduce(
    (acc, item) => acc + item.price,
    0
  );

  return (
    <div className="cart-wrapper">
      <h2 className="cart-title">Order Summary</h2>

      <div className="cart-items">
        {cartitems.length === 0 && <h3>Your cart is empty</h3>}

        {cartitems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.thumbnail} alt={item.title} />

            <div className="cart-info">
              <h4>{item.title}</h4>
              <p>${item.price}</p>

              <div className="Quality_contral" >
              <button className="quality_btn">-</button>
              <span className="quality_number">1</span>
              <button className="quality_btn">+</button>
            </div>
            </div>
            

            <button className="delete-btn">
              <MdDelete />
            </button>
          </div>
        ))}
      </div>

      <div className="cart-total">
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <button className="order-btn">Place order</button>
    </div>
  );
};

export default Cart;
