import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../../Components/CartProvider/CartProvider";
import { toast } from "react-toastify";
import "./OrderSuccess.css";

const OrderSuccess = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { orders, setOrders } = useContext(CartContext);

  if (!state) {
    return <h2 style={{ textAlign: "center" }}>No Order Found</h2>;
  }

  const { items, total, deliveryDate } = state;

  // 🔹 حذف الأوردر واظهار Toast
  const handleDeleteOrder = () => {
    const filteredOrders = orders.filter((order) => order !== state);
    setOrders(filteredOrders); // تحديث Context + LocalStorage
    toast.success("🗑️ Order deleted successfully"); // ✅ Toast يظهر هنا مباشرة


    setTimeout(() => {
  navigate("/order-success", { state: null });
}, 500)
  };

  return (
    <div className="order-success-page">
      <div className="order-card">
        <h2>🎉 Order Confirmed!</h2>
        <p className="delivery-date">
          📦 Your order will arrive on <span>{deliveryDate}</span>
        </p>

        <div className="order-items">
          {items.map((item) => (
            <div className="order-item" key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <div className="item-info">
                <h4>{item.title}</h4>
                <p>{item.Quantity} × ${item.price}</p>
              </div>
              <span className="item-total">
                ${(item.Quantity * item.price).toFixed(2)}
              </span>
            </div>
          ))}
        </div>

        <div className="order-total">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <div className="order-buttons">
          <button className="back-btn" onClick={() => navigate("/")}>
            Continue Shopping
          </button>

          <button className="deleteee-btn" onClick={handleDeleteOrder}>
            Delete Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
