import React, { useContext, useState } from "react";
import { CartContext } from "../../Components/CartProvider/CartProvider";
import { MdDelete } from "react-icons/md";
import PageTransation from "../../Components/Other_Style/PageTransation";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import CheckoutForm from "../../Components/CheckoutForm/CheckoutForm";
import "react-toastify/dist/ReactToastify.css";
import "./Cart.css";

const Cart = () => {
  const { cartitems, Incrense, Decrense, DeletItem, ClearCart } =
    useContext(CartContext);

  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  // حساب التوتال
  const total = cartitems.reduce(
    (acc, item) => acc + item.price * item.Quantity,
    0
  );

  // زر Place Order
  const handlePlaceOrder = () => {
    if (cartitems.length === 0) {
      toast.error("❌ The cart is empty");
    } else {
      setShowForm(true);
    }
  };

 const handleConfirmOrder = (userData) => {
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 3);

  const orderData = {
    items: cartitems,
    total,
    userData,
    deliveryDate: deliveryDate.toDateString(),
  };

  localStorage.setItem("lastOrder", JSON.stringify(orderData));

  toast.success("✅ Order added successfully");

// بعد 500ms نعمل Navigate
setTimeout(() => {
  navigate("/order-success", { state: orderData });
}, 800);


  ClearCart();
  setShowForm(false);
};


  return (
    <PageTransation>
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

                <div className="Quality_contral">
                  <button
                    className="quality_btn"
                    onClick={() => Decrense(item.id)}
                  >
                    -
                  </button>

                  <span className="quality_number">{item.Quantity}</span>

                  <button
                    className="quality_btn"
                    onClick={() => Incrense(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                className="delete-btn"
                onClick={() => DeletItem(item.id)}
              >
                <MdDelete />
              </button>
            </div>
          ))}
        </div>

        <div className="cart-total">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <button className="order-btn" onClick={handlePlaceOrder}>
          Place order
        </button>

        {showForm && (
          <CheckoutForm
            onConfirm={handleConfirmOrder}
            onClose={() => setShowForm(false)}
          />
        )}

        <ToastContainer
          position="top-right"
          autoClose={3000}
          theme="dark"
        />
      </div>
    </PageTransation>
  );
};

export default Cart;
