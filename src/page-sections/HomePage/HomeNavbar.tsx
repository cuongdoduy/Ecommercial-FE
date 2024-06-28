import { homePageNavItems } from "@/constant";
import Image from "next/image";
import React from "react";

const HomeNavbar: React.FC<{ activeIndex: number, handleActiveIndex: (index: number) => void }> = ({ activeIndex, handleActiveIndex }) => {
  return (
    <nav className="w-[90%] mx-auto flex justify-start items-center hidden sm:flex">
      {homePageNavItems.map((item, index) => (
        <button
          key={index}
          className={`text-body mr-[12px] hover:text-primary hover:text-[17px] flex items-center ${
            index === activeIndex ? "font-[700]": "text-[#00000073]"
          }`}
          onClick={() => handleActiveIndex(index)}
        >
          {item.active_icon && activeIndex==index && (
            <Image src={item.active_icon} alt={item.name} width={20} height={20} className="mr-[4px]"/>
          )}
          {item.disactive_icon && activeIndex!==index && (
            <Image src={item.disactive_icon} alt={item.name} width={20} height={20} className="mr-[4px]"/>
          )}
          {item.name}
        </button>
      ))}
    </nav>
  );
};

export default HomeNavbar;
