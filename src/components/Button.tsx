import Image, { StaticImageData } from "next/image";
import React from "react";

interface ButtonProps {
  title: string;
  className?: string;
  icon?: string | StaticImageData;
}

const Button: React.FC<ButtonProps> = ({ title, className, icon }) => {
  return (
    <button
      className={`${className} bg-primary px-[12px] py-[8px] rounded-full min-w-[160px] text-body text-white flex items-center justify-center hover:opacity-[0.8]`}
    >
      {title}
      {icon && <Image src={icon} alt={'icon'} className="mx-2"/>}
    </button>
  );
};

export default Button;
