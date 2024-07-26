import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { ProductProps } from "@/components/Product";
import { GetServerSideProps } from "next";
import { StaticImageData } from "next/image";
import React from "react";
import ProductDetailSection from "@/page-sections/DetailProduct/ProductSection";
import { MetaTags } from "..";
import { ToastContainer } from "react-toastify";

export interface ProductDetailProps extends ProductProps {
  images: string[] | StaticImageData[];
  description: string;
}

const ProductDetail: React.FC<{
  product: ProductDetailProps;
  id: string;
}> = ({ product }) => {
  return (
    <>
      <MetaTags />
      <Navbar />
      <ProductDetailSection {...product} />
      <ToastContainer />
      <Footer />
    </>
  );
};

export default ProductDetail;


export const getServerSideProps: GetServerSideProps = async (context) => {

  const cartId = context.req.cookies.cartId; // Get cartId from cookies

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

  const id = context.query.id as string;
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
  const endpoint = `${API_URL}/products/detail/${id}`;
  const response = await fetch(endpoint, {
    method: "GET",
    headers: headers,
  });
  if (response.ok) {
    const data = await response.json();
    const { product } = data;
    const image = product.thumbnail.startsWith("http")
      ? product.thumbnail
      : `${API_URL}${product.thumbnail}`;
    const productItem: ProductDetailProps = {
      id: product._id,
      name: product.title,
      price: product.price,
      image: product.thumbnail.startsWith("http")
        ? product.thumbnail
        : `${API_URL}${product.thumbnail}`,
      starRating: Math.floor(Math.random() * 5) + 1,
      slug: product.slug,
      images: [image],
      description: product.description,
      discount: product?.discountPercentage || 0,
      in_stock: product?.stock || 0,
    };
    return {
      props: { product: productItem, id },
    };
  } else {
    return {
      props: { product: {}, id },
    };
  }
};
