import BreadCrums from "@/components/BreadCrums";
import React from "react";
import Filter from "./Filter";
import { ProductDetailProps } from "@/pages/products/[id]";
import ProductSection from "./ProductSection";

const AllProductList = ({products}:{
    products: ProductDetailProps[]
}) => {
  const breadcrumbs = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Products",
      href: "/products",
    },
  ];

  return (
    <div className="w-[80%] mx-auto border-t-[1px] border-[#E6E6E6] pt-[20px]">
      <BreadCrums items={breadcrumbs} />
      <main className="grid grid-cols-10 gap-4">
        <div className="col-span-3">
            <Filter />
        </div>
        <div className="col-span-7">
            <ProductSection products={products} />
        </div>
      </main>
    </div>
  );
};

export default AllProductList;
