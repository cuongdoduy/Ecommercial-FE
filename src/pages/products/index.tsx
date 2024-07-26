import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import AllProductList from "@/page-sections/AllProductPage";
import Discount from "@/page-sections/HomePage/Discount";
import React from "react";
import { MetaTags } from "..";
import { GetServerSideProps } from "next";
import { ProductDetailProps } from "./[id]";
import { shirtViewImages } from "@/constant";

const AllProductsPage = ({ products }: { products: ProductDetailProps[] }) => {
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

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const cartId = req.cookies.cartId; // Get cartId from cookies

  let headers: {
    "Content-Type": string;
    Cookie?: string;
  } = {
    "Content-Type": "application/json",
  };

  // Add cartId to headers if it exists
  if (cartId) {
    headers.Cookie = `cartId=${cartId}`;
  }
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
  const endpoint = `${API_URL}/products`;
  const response = await fetch(endpoint, {
    method: "GET",
    headers: headers,
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
          id: product._id,
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
    const cookies = response.headers.get("set-cookie");
    if (cookies && !cartId) {
      const cartIdCookie = cookies.split(";")[0].split("=")[1];
      res.setHeader(
        "Set-Cookie",
        `cartId=${cartIdCookie}; Path=/; Expires=${new Date(
          Date.now() + 1000 * 60 * 60 * 24 * 365
        ).toUTCString()}; HttpOnly; SameSite=Lax; Secure`
      );
    }
    return {
      props: { products: productItems },
    };
  } else {
    return {
      props: { product: [] },
    };
  }
};
