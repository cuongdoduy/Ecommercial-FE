import React, { useContext, useEffect } from "react";
import { CartContext } from "@/contexts/CartContext";
import DiscountTag from "public/discount.svg";
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";

const OrderSummary = () => {
  const { getCartTotal } = useContext(CartContext) || {};

  const [total, setTotal] = React.useState(0);
  const [shipping, setShipping] = React.useState(10);

  useEffect(() => {
    setTotal((getCartTotal && getCartTotal()) || 0);
  }, [getCartTotal]);

  return (
    <div className="border-[1px] rounded-[20px] border-[#E6E6E6] p-[20px] ml-auto min-h-[300px]">
      <h4 className="text-h4 font-[700]">Order Summary</h4>
      <div className="flex flex-col justify-between min-h-[60px] my-4">
        <div className="flex justify-between">
          <p className="text-[16px]">Subtotal</p>
          <p className="text-[16px] font-bold">${total}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-[16px]">Delivery Fee</p>
          <p className="text-[16px] font-bold">${shipping}</p>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between">
        <p className="text-[16px]">Total</p>
        <p className="text-[16px] font-bold">${total + shipping}</p>
      </div>
      <div className="grid grid-cols-10 my-4 gap-4">
        <div className="col-span-6 py-[12px] px-[32px] pl-[12px] first:ml-0 bg-[#F0F0F0] text-black flex items-center justify-between min-w-[200px] rounded-[62px]">
          <Image src={DiscountTag} alt="discount" width={16} height={16} />
          <input
            type="text"
            placeholder="Enter discount code"
            className="bg-transparent outline-none border-none text-[16px] mx-2"
          />
        </div>
        <div className="col-span-4">
          <Button title="Apply" className="!py-[12px]" />
        </div>
      </div>
      <Link className="w-[100%]" href={'/cart/shipping'}>
        <Button title="Go To Checkout" className="!py-[12px] w-full" />
      </Link>
    </div>
  );
};

export default OrderSummary;
