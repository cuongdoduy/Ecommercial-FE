"use client";
import React, { useEffect, useContext, useState } from "react";
import { CartContext, CartItem } from "@/contexts/CartContext";
import OrderItem from "./OrderItem";

const OrderList = () => {
  const { cartItems, removeFromCart, addToCart, removeItem } = useContext(
    CartContext
  ) || {
    cartItems: [],
  };
  const [cartItemsClient, setCartItemsClient] = useState<CartItem[]>([]);

  useEffect(() => {
    setCartItemsClient(cartItems);
  }, [cartItems]);

  const handleIncrement = (cart: CartItem) => {
    return addToCart && addToCart(cart);
  };

  const handleDecrement = (cart: CartItem) => {
    return removeFromCart && removeFromCart(cart);
  };

  const handleRemoveItem = (id: string) => {
    return removeItem && removeItem(id);
  };

  return (
    <ul className="border-[1px] rounded-[20px] border-[#E6E6E6] p-[20px]">
      {cartItemsClient?.map((item, key) => (
        <li
          key={key}
          className="border-b-[1px] py-[12px] border-[#E6E6E6] last:border-[0px]"
        >
          <OrderItem
            {...item}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
            handleRemoveItem={handleRemoveItem}
          />
        </li>
      ))}
    </ul>
  );
};
export default OrderList;
