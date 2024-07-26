import { ProductProps } from "@/components/Product";
import { StaticImageData } from "next/image";
import React, { createContext, useState, useEffect, ReactNode } from "react";
import { toast } from "react-toastify";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  color: string;
  size: string;
  image: string | StaticImageData;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  totalItems: () => number;
  removeItem: (id: string) => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const fetchCart = async () => {
    const res = await fetch("/api/cart", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      const data = await res.json();
      const cartConvert = data.cart.products.map((product: any) => {
        const productItem = {
          id: product._id,
          name: product.title,
          price: product.price,
          image: product.thumbnail.startsWith("http")
            ? product.thumbnail
            : `${process.env.NEXT_PUBLIC_API_URL}${product.thumbnail}`,
          color: "red",
          size: "M",
          quantity: product.quantity,
        };
        return productItem;
      });
      setCartItems(cartConvert);
    }
  };

  const updateCart = async (item: CartItem) => {
    const res = await fetch("/api/cart", {
      method: "PATCH",
      body: JSON.stringify({
        product_id: item.id,
        quantity: item.quantity,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      fetchCart();
    }
  };

  const removeCart = async (id: string) => {
    const res = await fetch("/api/cart", {
      method: "DELETE",
      body: JSON.stringify({
        product_id: id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      fetchCart();
    }
  };


  const addToCart = async (item: CartItem) => {
    const res = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({
        product_id: item.id,
        quantity: item.quantity,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      // toast.success("Added to cart successfully");
      fetchCart();
    }
  };

  const removeFromCart = (item: CartItem) => {
    updateCart(item);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const totalItems = () => {
    return cartItems.length;
  };

  const removeItem = (id: string) => {
    removeCart(id);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        totalItems,
        getCartTotal,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
