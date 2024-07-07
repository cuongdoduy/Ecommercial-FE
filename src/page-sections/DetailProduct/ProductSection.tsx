import { ProductDetailProps } from "@/pages/products/[id]";
import React from "react";
import ProductImage from "./ProductImage";
import ProductDescription from "./ProductDescription";
import { UnderlineTabs } from "./ProductInformation";
import { reviews } from "@/constant";
import ProductSection from "../HomePage/ProductSection";
import BreadCrums from "@/components/BreadCrums";

const ProductDetailSection: React.FC<ProductDetailProps> = (product) => {
  const { images } = product;
  const breadcumbs = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Products",
      href: "/products",
    },
    {
      name: product.name,
      href: `/products/${product.slug}`
    },
  ];
  return (
    <div className="w-[80%] mx-auto ">
      <BreadCrums items={breadcumbs} />
      <div className="flex">
        <ProductImage images={images} />
        <ProductDescription {...product} />
      </div>
      
      <UnderlineTabs reviews={reviews} description={product.description}/>
      <ProductSection sectionName="YOU MIGHT ALSO LIKE"  products={[]}/>
    </div>
  );
};

export default ProductDetailSection;
