import Link from "next/link";
import React from "react";

const Discount: React.FC = () => {
  return (
    <div className="bg-primary w-full">
      <div className="w-[80%] sm:w-[50%] lg:w-[40%] mx-auto">
        <p className="w-full p-2 text-center text-white text-h5 font-[700] bg-transparent border-none outline-none">
          Sign up and get 20% off to your first order.{" "}
          <Link href={"/"} className="underline">Sign Up Now </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Discount;
