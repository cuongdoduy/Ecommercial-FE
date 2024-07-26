import React, { useContext } from "react";
import Star from "public/star.svg";
import StarNotPassed from "public/star_none.svg";
import Image, { StaticImageData } from "next/image";
import TickIcon from "public/tick.svg";
import AddIcon from "public/addition.svg";
import MinusIcon from "public/subtraction.svg";
import { CartContext } from "@/contexts/CartContext";
import { toast } from "react-toastify";

interface ProductDescriptionProps {
  id: string;
  name: string;
  price: number;
  starRating: number;
  description: string;
  discount: number;
  in_stock?: number;
  images: string[] | StaticImageData[];
}

const ProductDescription: React.FC<ProductDescriptionProps> = (
  productDescription
) => {
  const maxStar = 5;

  const { addToCart } = useContext(CartContext) || {};

  const [userChoose, setUserChoose] = React.useState<{
    color: string;
    size: string;
    quantiy: number;
  }>({
    color: "#4F4631",
    size: "Small",
    quantiy: 1,
  });

  return (
    <div className="w-[50%] ml-auto my-[20px]">
      <div className="py-4">
        <h3 className="text-h3 font-bold">{productDescription.name}</h3>
        <div className="flex items-center">
          <div className="flex items-center">
            {Array.from(
              { length: productDescription.starRating },
              (_, index) => (
                <Image
                  key={index}
                  src={Star}
                  alt="star"
                  width={16}
                  height={16}
                  className="mx-1 first:ml-0"
                />
              )
            )}
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
        <span className="text-caption text-[#000000] opacity-[0.6]">
          Remaining : <b>{productDescription.in_stock}</b>
        </span>
      </div>
      <div className="py-4 border-t-[1px] border-[#9A9A9A]">
        <p className="text-body text-[#000000] opacity-[0.6]">Select Colors</p>
        <div className="flex items-center justify-start my-2">
          {["#4F4631", "#314F4A", "#31344F"].map((color, index) => (
            <div
              key={index}
              style={{ backgroundColor: color }}
              onClick={() =>
                setUserChoose({
                  ...userChoose,
                  color: color,
                })
              }
              className="w-[32px] h-[32px] rounded-full mx-1 first:ml-0 cursor-pointer"
            >
              {color === userChoose.color && (
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
          {["Small", "Medium", "Large", "X-Large"].map((size, index) => (
            <button
              key={index}
              onClick={() =>
                setUserChoose({
                  ...userChoose,
                  size: size,
                })
              }
              className={`py-[12px] px-[24px] rounded-[62px] mx-2 first:ml-0 cursor-pointer ${
                userChoose.size === size
                  ? "text-white bg-[#000000]"
                  : "bg-[#F0F0F0] text-black"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      <div className="py-4 border-t-[1px] border-[#9A9A9A]">
        <div className="flex items-center justify-between my-2">
          <div className="py-[12px] px-[32px] first:ml-0 cursor-pointer bg-[#F0F0F0] text-black flex items-center justify-between min-w-[200px] rounded-[62px]">
            <div
              className={`${userChoose.quantiy === 1 && "opacity-[0.3]"}`}
              onClick={() =>
                userChoose.quantiy > 1 &&
                setUserChoose({
                  ...userChoose,
                  quantiy: userChoose.quantiy - 1,
                })
              }
            >
              <Image src={MinusIcon} alt="minus" width={16} height={16} />
            </div>
            <p className="font-[700]">{userChoose.quantiy}</p>
            <div
              className={`${userChoose.quantiy === productDescription.in_stock && "opacity-[0.3]"}`}
              onClick={() =>
                userChoose.quantiy < (productDescription.in_stock || 0) &&
                setUserChoose({
                  ...userChoose,
                  quantiy: userChoose.quantiy + 1,
                })
              }
            >
              <Image src={AddIcon} alt="minus" width={16} height={16} />
            </div>
          </div>
          <button
            className={`py-[12px] px-[24px] rounded-[62px] mx-2 first:ml-0 cursor-pointer text-white bg-[#000000] min-w-[400px]`}
            onClick={() => {
              addToCart &&
                addToCart({
                  id: productDescription.id,
                  name: productDescription.name,
                  price: productDescription.price,
                  quantity: userChoose.quantiy,
                  image: productDescription.images[0],
                  size: userChoose.size,
                  color: userChoose.color,
                });
              toast.success("Added to cart successfully");
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
