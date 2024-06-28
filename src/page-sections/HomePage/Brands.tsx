import { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import Image from "next/image";

interface BrandsProps {
  brands: Array<{
    logo: string | StaticImageData;
    name: string;
    url: string;
  }>;
}

const Brands: React.FC<BrandsProps> = ({ brands }) => {
  return (
    <div className="bg-primary w-full">
      <div className="w-[98%] mx-auto">
        <div className="flex justify-around items-center flex-wrap">
          {brands.map((brand, index) => (
            <Link href={brand.url} key={index}>
              <Image
                src={brand.logo}
                alt={brand.name}
                width="0"
                height="0"
                sizes="100vw"
                className="w-[100px] h-[100px] object-contain cursor-pointer"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
