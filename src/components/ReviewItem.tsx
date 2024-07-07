import { Review } from "@/constant";
import React from "react";
import Image from "next/image";
import Star from "public/star.svg";
import TickIcon from "public/tick.svg";

const ReviewItem: React.FC<Review> = ({
  startRate,
  name,
  review_desc,
  date,
}) => {
  return (
    <div className="flex flex-col items-start rounded-[20px] py-[24px] px-[32px] border-[1px] border-[#E6E6E6]">
      <div className="flex items-center justify-start">
        {Array.from({ length: startRate }, (_, index) => (
          <Image
            key={index}
            src={Star}
            alt="star"
            width={12}
            height={12}
            className="mx-[1px] first:ml-0"
          />
        ))}
      </div>
      <div className="flex items-center gap-2">
        <p className="text-[#333] font-semibold">{name}</p>
        <div className="w-[24px] h-[24px] rounded-full   cursor-pointer bg-[#01AB31]">
          <div className="flex items-center justify-between h-[100%] w-[50%] mx-auto">
            <Image
              src={TickIcon}
              alt="tym"
              width={16}
              height={16}
              className="items-center w-auto h-auto"
            />
          </div>
        </div>
      </div>
      <q className="text-[#333] line-clamp-3 min-h-[84px]">{review_desc}</q>
      <p className="text-[gray] text-body">Posted on {date}</p>
    </div>
  );
};

export default ReviewItem;
