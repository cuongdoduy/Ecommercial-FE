import React, { Fragment } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import Discount from "@/page-sections/HomePage/Discount";
import Head from "next/head";
import CartPage from "@/page-sections/CartPage/CartPage";

const Cart: React.FC = () => {

  return (
    <Fragment>
      <MetaTags />
      <main>
        <Discount />
        <Navbar />
        <CartPage />
        <Footer />
      </main>
    </Fragment>
  );
};

export const MetaTags = () => {
  return (
    <Head>
      <title>Shop.co - Buy Your Favorite Clothes Online</title>
      <meta
        name="description"
        content="Shop.co offers a wide range of stylish and affordable clothes. Enjoy a seamless shopping experience with fast delivery and secure transactions."
      />
      <meta
        name="keywords"
        content="buy clothes online, fashion, affordable clothes, trendy outfits, online shopping, Shop.co"
      />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta
        property="og:title"
        content="Shop.co - Your Go-To Online Clothing Store"
      />
      <meta
        property="og:description"
        content="Discover the latest fashion trends at Shop.co. Shop now for stylish and affordable clothing with fast delivery and secure payments."
      />
      <meta property="og:sitename" content="Shop.co" />
      <meta property="og:url" content="https://shop.co/" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:updated_time" content="2024-06-29T02:08:26+00:00" />
      <meta
        property="og:image"
        content={`${process.env.NEXT_PUBLIC_REDIRECT_URI}/logo.svg`}
      />
      <meta
        property="og:image:secure_url"
        content={`${process.env.NEXT_PUBLIC_REDIRECT_URI}/logo.svg`}
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Shop.co - Your Online Fashion Store"
      />
      <meta property="og:image:type" content="image/jpeg" />
      <meta
        property="article:published_time"
        content="2024-06-01T08:07:31+00:00"
      />
      <meta
        property="article:modified_time"
        content="2024-06-29T02:08:26+00:00"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Shop.co - Your Go-To Online Clothing Store"
      />
      <meta
        name="twitter:description"
        content="Discover the latest fashion trends at Shop.co. Shop now for stylish and affordable clothing with fast delivery and secure payments."
      />
      <meta
        name="twitter:image"
        content={`${process.env.NEXT_PUBLIC_REDIRECT_URI}/logo.svg`}
      />
      <meta name="twitter:label1" content="Written by" />
      <meta name="twitter:data1" content="Shop.co Team" />
      <meta name="twitter:label2" content="Time to read" />
      <meta name="twitter:data2" content="2 minutes" />
      <link rel="icon" href="/logo.svg" type="image/x-icon" />
    </Head>
  );
};

export default Cart;
