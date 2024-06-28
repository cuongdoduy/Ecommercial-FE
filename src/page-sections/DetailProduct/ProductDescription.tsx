// import {
//     ContactInformationProps,
//     ProductDescriptionProps as ProductDescriptionInterface,
//   } from "@/constant";
import React from "react";
import Star from "public/star.svg";
import StarNotPassed from "public/star_none.svg";
import Image from "next/image";
import Button from "@/components/Button";
import TickIcon from "public/tick.svg";
import { index } from "@material-tailwind/react/types/components/select";
//   import ContactInformation from "./ContactInformation";

interface ProductDescriptionProps {
  name: string;
  price: number;
  starRating: number;
  description: string;
  discount: number;
}

const ProductDescription: React.FC<ProductDescriptionProps> = (
  productDescription
) => {
  const maxStar = 5;

  const [activeColor, setActiveColor] = React.useState<index | null>(null);

  return (
    <div className="w-[50%] ml-auto my-[20px]">
      <h3 className="text-h3 font-bold">{productDescription.name}</h3>

      <div className="flex items-center">
        <div className="flex items-center">
          {Array.from({ length: productDescription.starRating }, (_, index) => (
            <Image
              key={index}
              src={Star}
              alt="star"
              width={16}
              height={16}
              className="mx-1 first:ml-0"
            />
          ))}
          {Array.from(
            { length: maxStar - productDescription.starRating },
            (_, index) => (
              <Image
                key={index}
                src={StarNotPassed}
                alt="star"
                width={20}
                height={20}
                className="first:ml-0 mx-1 last:mr-0"
              />
            )
          )}
          <span className="text-gray-500 ml-2 pt-1">
            {productDescription.starRating}/{maxStar}
          </span>
        </div>
      </div>
      <div className="flex items-center">
        {/* <ContactInformation {...contactInformation} /> */}
        {/* <div className="flex items-center mx-2">
          <Image src={TymIcon} alt="tym" width={24} height={24} />
          <p className="text-body mx-2">Add to wishlist</p>
        </div> */}
        <h4 className="text-[24px] my-2 font-[700]">
          $
          {((100 - productDescription.discount) / 100) *
            productDescription.price}
        </h4>
        <h4 className="text-[24px] my-2 font-[700] line-through mx-2 text-[gray]">
          ${productDescription.price}
        </h4>
        <div className="rounded-[40px] bg-[#FFEBEB] px-4 py-2">
          <p className="text-body text-[#FF3333] font-[700]">
            -{productDescription.discount}%
          </p>
        </div>
      </div>
      <div
        className="text-body my-2 text-[#A9A9A9]"
        dangerouslySetInnerHTML={{
          __html: productDescription.description,
        }}
      ></div>
      <div className="py-4 border-t-[1px] border-[#9A9A9A]">
        <p className="text-body text-[#000000] opacity-[0.6]">Select Colors</p>
        <div className="flex items-center justify-start my-2">
          {["#4F4631", "#314F4A", "#31344F"].map((color, index) => (
            <div
              key={index}
              style={{ backgroundColor: color }}
              onClick={() => setActiveColor(index)}
              className="w-[32px] h-[32px] rounded-full mx-1 first:ml-0 cursor-pointer"
            >
              {index === activeColor && (
                <div className="flex items-center justify-between h-[100%] w-[50%] mx-auto">
                  <Image
                    src={TickIcon}
                    alt="tym"
                    width={16}
                    height={16}
                    className="items-center w-auto h-auto"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="py-4 border-t-[1px] border-[#9A9A9A]">
        <p className="text-body text-[#000000] opacity-[0.6]">Choose Size</p>
        <div className="flex items-center justify-start my-2">
          {["#4F4631", "#314F4A", "#31344F"].map((color, index) => (
            <div
              key={index}
              style={{ backgroundColor: color }}
              onClick={() => setActiveColor(index)}
              className="w-[32px] h-[32px] rounded-full mx-1 first:ml-0 cursor-pointer"
            >
              {index === activeColor && (
                <div className="flex items-center justify-between h-[100%] w-[50%] mx-auto">
                  <Image
                    src={TickIcon}
                    alt="tym"
                    width={16}
                    height={16}
                    className="items-center w-auto h-auto"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Product Attribute */}
      {/* <div className="py-[10px]">
        <h5 className="text-body font-[700]">Product Attributes</h5>
        <ul>
          {Object.entries(productDescription.productAttributes).map(
            ([key, value], index) => (
              <li key={index} className="grid grid-cols-2 my-2">
                <span className="text-[#00000073]">{key}: </span>
                <span className="text-body">{value}</span>
              </li>
            )
          )}
        </ul>
      </div> */}
    </div>
  );
};

export default ProductDescription;
