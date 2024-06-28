import React from "react";
import { categoryItems } from "@/constant";
import Image from "next/image";

import RightArrowPrimaryColor from "public/right_arrow_primary.svg";
import Link from "next/link";
import Button from "../../components/Button";

const Categories = () => {
  const colSpan = (index: number) => {
    return index % 2 == 0
      ? 2 - ((index / 2 + 1) % 2)
      : 2 - (((index - 1) / 2 + 2) % 2);
  };
  return (
    <div className="rounded-[40px] bg-[#F0F0F0] w-[80%] mx-auto p-[40px]">
      <h1 className="text-center text-[52px] font-[700] mb-[20px]">
        BROWSE BY DRESS STYLE
      </h1>
      <div className={`grid grid-cols-3 gap-4`}>
        {categoryItems.map((category, index) => (
          <Link
            href={category.url}
            key={index}
            className={`relative h-[289px] flex items-center flex-col justify-center hover:opacity-[0.8] rounded-lg col-span-${colSpan(
              index
            )}`}
          >
            <Image
              src={category.background}
              alt={category.title}
              fill
              priority
              className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover z-[1] rounded-lg"
            />
            <div className=" w-full h-full z-[2] p-4">
              <h5 className="text-[32px] font-[700] text-primary">
                {category.title}
              </h5>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
