import React, { useContext } from "react";
import { CartContext } from "@/contexts/CartContext";
import BreadCrums from "@/components/BreadCrums";
import Link from "next/link";
import OrderList from "./OrderList";
import OrderSummary from "./OrderSummary";
import EmptyCart from "public/empty-cart.png";
import Image from "next/image";
import Button from "@/components/Button";

const CartPage = () => {
  const { cartItems } = useContext(CartContext) || {};

  const cartItemsLength = cartItems?.length || 0;

  const breadCrums = [
    { name: "Home", href: "/" },
    { name: "Cart", href: "/cart" },
  ];

  return (
    <div className="w-[80%] mx-auto">
      <BreadCrums items={breadCrums} />
      <div className="my-[40px]">
        {cartItemsLength > 0 ? (
          <>
            <h1 className="text-h1 font-[700] uppercase text-[42px]">
              Your Cart
            </h1>
            <div className="grid grid-cols-10 gap-4">
              <div className="col-span-6">
                <OrderList />
              </div>
              <div className="col-span-4">
                <OrderSummary />
              </div>
            </div>
          </>
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
