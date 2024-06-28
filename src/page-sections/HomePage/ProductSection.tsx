import Button from "@/components/Button";
import { ProductProps } from "@/components/Product";
import ProductList from "@/components/ProductList";
import React from "react";

interface ProductSectionProps {
  products: ProductProps[];
  sectionName: string;
}

const ProductSection: React.FC<ProductSectionProps> = ({
  products,
  sectionName,
}) => {
  return (
    <div className="my-20">
      <h2 className="text-h2 !text-[58px] font-bold text-center my-[40px]">{sectionName}</h2>
      <div className="w-[90%] mx-auto grid grid-cols-12 gap-x-4 my-[12px] mb-[120px]">
        <div className="col-span-12">
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
