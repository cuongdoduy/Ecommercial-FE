import { ProductDetailProps } from "@/pages/products/[id]";
import React from "react";
import ProductImage from "./ProductImage";
import ProductDescription from "./ProductDescription";

const ProductDetailSection: React.FC<ProductDetailProps> = (product) => {
  const { images } = product;
  return (
    <div className="w-[80%] mx-auto flex">
      <ProductImage images={images} />
      <ProductDescription {...product} />
    </div>
  );
};

export default ProductDetailSection;
