import React, { createContext, useEffect, useState } from "react";

// 🌟 إنشاء Context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // 🛒 Cart
  const [cartitems, setCartitems] = useState(() => {
    const saved = localStorage.getItem("cartitems");
    return saved ? JSON.parse(saved) : [];
  });

  // ❤️ Favorites
  const [favitems, setfavitems] = useState(() => {
    const saved = localStorage.getItem("favitems");
    return saved ? JSON.parse(saved) : [];
  });

  // 🛍️ Orders
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem("orders");
    return saved ? JSON.parse(saved) : [];
  });

  /* ================== Effects ================== */
  useEffect(() => {
    localStorage.setItem("cartitems", JSON.stringify(cartitems));
  }, [cartitems]);

  useEffect(() => {
    localStorage.setItem("favitems", JSON.stringify(favitems));
  }, [favitems]);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  /* ================== Cart Functions ================== */
  const addcartitem = (item) => {
    setCartitems((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, Quantity: i.Quantity + 1 } : i
        );
      }
      return [...prev, { ...item, Quantity: 1 }];
    });
  };

  const Incrense = (id) => {
    setCartitems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, Quantity: item.Quantity + 1 } : item
      )
    );
  };

  const Decrense = (id) => {
    setCartitems((prev) =>
      prev.map((item) =>
        item.id === id && item.Quantity > 1
          ? { ...item, Quantity: item.Quantity - 1 }
          : item
      )
    );
  };

  const DeletItem = (id) => setCartitems((prev) => prev.filter((item) => item.id !== id));
  const ClearCart = () => setCartitems([]);

  /* ================== Favorites Functions ================== */
  const addFavitem = (item) => {
    setfavitems((prev) => {
      const exists = prev.some((fav) => fav.id === item.id);
      if (exists) return prev;
      return [...prev, item];
    });
  };

  const removeFavitem = (id) => setfavitems((prev) => prev.filter((item) => item.id !== id));

  /* ================== Orders Functions ================== */
  const addOrder = (order) => setOrders((prev) => [...prev, order]);

  /* ================== Provider ================== */
  return (
    <CartContext.Provider
      value={{
        cartitems,
        favitems,
        orders,
        setOrders,

        addcartitem,
        Incrense,
        Decrense,
        DeletItem,
        ClearCart,

        addFavitem,
        removeFavitem,

        addOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
