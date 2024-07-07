import React from "react";
import Product, { ProductProps } from "@/components/Product";
import Button from "@/components/Button";

interface ProductListProps {
  products: ProductProps[];
}

const ProductSection: React.FC<ProductListProps> = ({ products }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </div>
    </>
  );
};

export default ProductSection;
