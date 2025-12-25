import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();
const CartProvider = ({ children }) => {
  // استرجاع العناصر من localStorage عند التحميل
  const [cartitems, setCartitems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartitems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });
  // حفظ العناصر في localStorage عند التغيير
  useEffect(() => {
    localStorage.setItem("cartitems", JSON.stringify(cartitems));
  }, [cartitems]);

  const addcartitem = (item) => {
    setCartitems((prevItems) => [...prevItems, item]);
  };
  return (
    <>
      <CartContext.Provider value={{ cartitems, addcartitem }}>
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartProvider;
