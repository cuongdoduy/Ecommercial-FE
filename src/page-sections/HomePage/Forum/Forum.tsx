import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { type Swiper as SwiperRef } from "swiper";
import Image from "next/image";

import "swiper/css";
import { footerItems } from "@/constant";
import Link from "next/link";

import LeftArrow from "public/left_arrow.svg";
import RightArrow from "public/right_arrow.svg";
import AuthorImg from "public/author.svg";
import ProductImg from "public/product.svg";

import ForumItem from "./ForumItem";

const Forum: React.FC = () => {
  const [swiper, setSwiper] = useState<SwiperRef | null>(null);

  const forumItem = {
    authorImage: AuthorImg,
    authorName: "Kevin Nguyen",
    authorQuote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    likeCount: 0,
    commentCount: 8,
    imagePost: ProductImg,
  };

  return (
    <main className="py-[40px] overflow-hidden w-[80%] mx-auto">
      <div className="flex items-center justify-between ">
        <h1 className="text-[40px] font-[700] my-4">OUR HAPPY CUSTOMERS</h1>
        <div className="flex items-center justify-between min-w-[40px]">
          <button
            onClick={() => swiper && swiper.slidePrev()}
            className={`rounded-full p-[8px] hidden sm:block`}
          >
            <Image src={LeftArrow} alt="left arrow" width={20} height={20} />
          </button>
          <button
            onClick={() => swiper && swiper.slideNext()}
            className={`rounded-full p-[8px] hidden sm:block`}
          >
            <Image src={RightArrow} alt="right arrow" width={20} height={20} />
          </button>
        </div>
      </div>
      <div className="w-[100%]">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1440: {
              slidesPerView: 3,
            },
          }}
          onSwiper={setSwiper}
          className="w-full rounded-lg"
        >
          {footerItems.map((_, index) => (
            <SwiperSlide key={index}>
              <div className="flex h-full w-full items-center justify-center">
                <ForumItem {...forumItem} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
};

export default Forum;
