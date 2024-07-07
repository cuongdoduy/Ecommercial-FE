import { StaticImageData } from "next/image";
import React, { useState } from "react";
import Image from "next/image";

interface ProductImageProps {
  images: string[] | StaticImageData[];
  className?: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ images }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="grid grid-cols-4 w-[40%] gap-4 max-h-[420px]">
      <div className="grid grid-rows-3 gap-4 my-[20px] col-span-1">
        {images?.map((image, index) => (
          <div
            key={index}
            onClick={() => setActiveImageIndex(index)}
            className={`${
              index === activeImageIndex &&
              "border-black border-[1px] rounded-[20px] shadow-lg"
            }`}
          >
            <Image
              src={image}
              alt="product image"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-full object-cover rounded-[20px] cursor-pointer"
            />
          </div>
        ))}
      </div>
      <div className="col-span-3 my-[20px]">
        {images && (
          <Image
            src={images[activeImageIndex]}
            alt="product image"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-full rounded-[20px]"
          />
        )}
      </div>
    </div>
  );
};

export default ProductImage;
