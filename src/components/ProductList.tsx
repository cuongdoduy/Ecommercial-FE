import React from "react";
import Product, { ProductProps } from "./Product";
import Button from "./Button";

interface ProductListProps {
  products: ProductProps[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const maxItems = 4;
  const productsLength = products.length;
  if (productsLength > maxItems) {
    products = products.slice(0, maxItems);
  }
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-[90%] mx-auto">
        {products.map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </div>
      <div className="w-[10%] m-auto">
        <Button
          title="View All"
          className="mt-[20px] !bg-white !text-primary !border-[1px] !border-[#000000] border-opacity-[0.1]"
        />
      </div>
    </>
  );
};

export default ProductList;
