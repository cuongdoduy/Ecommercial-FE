import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import AllProductList from "@/page-sections/AllProductPage";
import Discount from "@/page-sections/HomePage/Discount";
import React from "react";
import { MetaTags } from "..";
import { GetStaticProps } from "next";
import { ProductDetailProps } from "./[id]";
import { shirtViewImages } from "@/constant";

const AllProductsPage = ({ products }: { products: ProductDetailProps[] }) => {
  console.log(products);
  return (
    <>
      <MetaTags />
      <Discount />
      <Navbar />
      <AllProductList products={products} />
      <Footer />
    </>
  );
};

export default AllProductsPage;

export const getStaticProps: GetStaticProps = async () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
  const endpoint = `${API_URL}/products`;
  const response = await fetch(endpoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    const data = await response.json();
    const { products } = data;
    const productItems: ProductDetailProps[] = products
      .filter(
        (product: any) =>
          product.slug != undefined && product.thumbnail != undefined
      )
      .map((product: any) => {
        const productItem: ProductDetailProps = {
          name: product.title,
          price: product.price,
          image: product.thumbnail.startsWith("http")
            ? product.thumbnail
            : `${API_URL}${product.thumbnail}`,
          starRating: Math.floor(Math.random() * 5) + 1,
          slug: product.slug,
          images: shirtViewImages,
          description: product.description,
          discount: product?.discountPercentage || 0,
          in_stock: product?.stock || 0,
        };
        return productItem;
      });
    return {
      props: { products: productItems },
    };
  } else {
    return {
      props: { product: [] },
    };
  }
};
