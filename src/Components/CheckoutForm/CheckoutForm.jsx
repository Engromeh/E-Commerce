import React, { useState } from "react";
import "./CheckoutForm.css";

const CheckoutForm = ({ onConfirm, onClose }) => {
  const [data, setData] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm(data);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h3>Checkout</h3>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />

          <input
            name="address"
            placeholder="Address"
            onChange={handleChange}
            required
          />

          <input
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
            required
          />

          <div className="modal-actions">
            <button type="button" className="cancel" onClick={onClose}>
              Cancel
            </button>

            <button type="submit" className="confirm">
              Confirm Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
