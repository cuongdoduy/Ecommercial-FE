import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Star from "public/star.svg";
import StarNotPassed from "public/star_none.svg";
import Link from "next/link";

export interface ProductProps {
  id: string;
  name: string;
  price: number;
  image: string | StaticImageData;
  old_price?: number;
  discount: number;
  starRating: number;
  slug?: string;
  in_stock?: number;
}

const Product: React.FC<ProductProps> = ({
  name,
  price,
  image,
  starRating,
  slug,
}) => {
  const maxRating = 5;
  return (
    <Link href={`/products/${slug}`} className="flex flex-col justify-start">
      <Image
        src={image}
        alt={name}
        width="0"
        height="0"
        sizes="100vw"
        className="w-[295px] h-[298px] rounded-lg  hover:shadow-lg  "
      />
      <p className="text-body font-[700] line-clamp-1">{name}</p>
      <div className="flex items-center justify-start">
        {Array.from({ length: starRating }, (_, index) => (
          <Image
            key={index}
            src={Star}
            alt="star"
            width={12}
            height={12}
            className="mx-[1px] first:ml-0"
          />
        ))}
        {Array.from({ length: maxRating - starRating }, (_, index) => (
          <Image
            key={index}
            src={StarNotPassed}
            alt="star"
            width={12}
            height={12}
            priority
            className="first:ml-0 mx-[1px] w-auto max-w-[12px] last:mr-0"
          />
        ))}
        <span className="text-caption text-gray-500 ml-2">
          {starRating}/{maxRating}
        </span>
      </div>
      <p className="text-h5 text-primary font-semibold">${price}</p>
    </Link>
  );
};

export default Product;
