import React from "react";
import Image from "next/image";
import Banner from "public/banner.png";
import Button from "@/components/Button";

const HomeBanner: React.FC = () => {
  const ourNumbers: { title: string; number: string }[] = [
    {
      title: "International Brands",
      number: '200',
    },
    {
      title: "High Quality Products",
      number: '2,000',
    },
    {
      title: "Happy Customers",
      number: '30,000',
    },
  ];

  return (
    <div className="relative">
      <Image
        src={Banner}
        alt="banner"
        width="0"
        height="0"
        sizes="100vw"
        priority={true}
        className="w-full"
        quality={100}
      />
      <div className="absolute top-[50%] translate-y-[-50%] left-0 right-0">
        <div className="w-[60%] mr-auto max-w-[625px] flex items-start flex-col justify-start align-middle min-h-[300px] ml-[10%]">
          <p className="text-primary font-[700] text-[52px] leading-[78px]">
            FIND CLOTHES THAT MATCHES YOUR STYLE{" "}
          </p>
          <p className="text-body my-4 mb-8">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Button title="Shop Now" className="!rounded-full"></Button>
          <div className="flex items-center justify-between w-[80%] my-10">
            {ourNumbers.map((item, index) => (
              <div className="flex items-start flex-col border-[1px] border-r-[#000000] border-opacity-[0.1] last:border-[0px] px-[8px]" key={index}>
                <p className="text-primary text-h1 font-[700]">{item.number} + </p>
                <p className="text-body opacity-[0.4]">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeBanner;
