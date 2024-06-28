import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { ProductProps } from "@/components/Product";
import { GetStaticProps } from "next";
import { StaticImageData } from "next/image";
import { shirtViewImages } from "@/constant";
import React from "react";
import ProductDetailSection from "@/page-sections/DetailProduct/ProductSection";
import { MetaTags } from "..";

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
      <Footer />
    </>
  );
};

export default ProductDetail;

export const getStaticPaths = async () => {
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
    const paths = products
      .filter((product: any) => product.slug != undefined && product.thumbnail != undefined)
      .map((product: any) => ({
        params: {
          id: product?.slug,
        },
      }));
    return {
      paths,
      fallback: true,
    };
  } else {
    return {
      paths: [],
      fallback: true,
    };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
  const endpoint = `${API_URL}/products/detail/${id}`;
  const response = await fetch(endpoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    const data = await response.json();
    const { product } = data;
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
