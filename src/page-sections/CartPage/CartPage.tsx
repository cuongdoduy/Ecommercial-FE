import React, { useContext, useState, useEffect } from "react";
import { CartContext, CartItem } from "@/contexts/CartContext";
import BreadCrums from "@/components/BreadCrums";
import Link from "next/link";
import OrderList from "./OrderList";
import OrderSummary from "./OrderSummary";
import EmptyCart from "public/empty-cart.png";
import Image from "next/image";
import Button from "@/components/Button";

const CartPage = () => {
  const { cartItems } = useContext(CartContext) || {
    cartItems: [],
  };

  const [cartItemsClient, setCartItemsClient] = useState<CartItem[]>([]);

  useEffect(() => {
    setCartItemsClient(cartItems);
  }, [cartItems]);

  const breadCrums = [
    { name: "Home", href: "/" },
    { name: "Cart", href: "/cart" },
  ];

  return (
    <div className="w-[80%] mx-auto">
      <BreadCrums items={breadCrums} />
      <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
          <div className="relative">
            <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <Link
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2"
                  href="/cart"
                >
                  1
                </Link>
                <span className="font-semibold text-gray-900">Shop</span>
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <Link
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white"
                  href="/cart/shipping"
                >
                  2
                </Link>
                <span className="font-semibold text-gray-900">Shipping</span>
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <a
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white"
                  href="#"
                >
                  3
                </a>
                <span className="font-semibold text-gray-500">Payment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="my-[40px]">
        {cartItemsClient.length > 0 ? (
          <div>
            <div className="grid grid-cols-10 gap-4">
              <div className="col-span-6">
                <OrderList />
              </div>
              <div className="col-span-4">
                <OrderSummary />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center my-[40px]">
            <Image src={EmptyCart} alt="empty-cart" />
            <Link href="/" className="text-primary text-h1 my-4">
              <Button title="Continue Shopping" className="!px-[48px]" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default CartPage;
