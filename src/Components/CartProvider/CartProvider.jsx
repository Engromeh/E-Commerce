import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();
const CartProvider = ({ children }) => {
  // بتجيب ال العنصرمن لوكل استورتيجي وتحفظوا
  const [cartitems, setCartitems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartitems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  // المفضله
  const [favitems, setfavitems] = useState(() => {
    const savedFavItems = localStorage.getItem("Favitems");
    return savedFavItems ? JSON.parse(savedFavItems) : [];
  });

  const addFavitem = (item) => {
    setfavitems((prevItems) => {
      const exists = prevItems.some((favitem) => favitem.id === item.id);
      if (exists) return prevItems; // ⛔ منع التكرار

      return [...prevItems, item];
    });
  };
    const removeFavitem = (id) => {
    setfavitems((prev) => prev.filter((item) => item.id !== id));
  };
  useEffect(() => {
    localStorage.setItem("favitems", JSON.stringify(favitems));
  }, [favitems]);


  // دي الفانكشن اللي بتضيف العنصر للكارت
  const addcartitem = (item) => {
    setCartitems((prevItems) => [...prevItems, { ...item, Quantity: 1 }]);
  };
  // لما تعمل ريفرش تفضل حافظ علي العنصر
  useEffect(() => {
    localStorage.setItem("cartitems", JSON.stringify(cartitems));
  }, [cartitems]);

  // لما عايز ازود او انقص من الكميه اللي في المارت في بعمل التو فانكشن دول وابعتهم لل صفحة الكارت
  const Incrense = (id) => {
    setCartitems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, Quantity: item.Quantity + 1 } : item
      )
    );
  };
  const Decrense = (id) => {
    setCartitems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.Quantity > 1
          ? { ...item, Quantity: item.Quantity - 1 }
          : item
      )
    );
  };

  // دي فانكشن لحذف العنصر من الكارت
  const DeletItem = (id) => {
    setCartitems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <>
      <CartContext.Provider
        value={{
          cartitems,
          addcartitem,
          Incrense,
          Decrense,
          DeletItem,
          favitems,
          addFavitem,
          removeFavitem
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartProvider;
