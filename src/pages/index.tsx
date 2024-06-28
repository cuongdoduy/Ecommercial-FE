import React, { Fragment, useEffect } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import CallAction from "@/page-sections/HomePage/CallAction";
import Forum from "@/page-sections/HomePage/Forum/Forum";
import Categories from "@/page-sections/HomePage/HomeCategory";
import Discount from "@/page-sections/HomePage/Discount";
import { brandItems, productItems } from "@/constant";
import ProductSection from "@/page-sections/HomePage/ProductSection";
import HomeNavbar from "@/page-sections/HomePage/HomeNavbar";
import Head from "next/head";
import HomeBanner from "@/page-sections/HomePage/Banner";
import Brands from "@/page-sections/HomePage/Brands";
import { ProductProps } from "@/components/Product";

const Home: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const handleActiveIndex = (index: number) => {
    setActiveIndex(index);
  };

  const [newArrivalProducts, setNewArrivalProducts] = React.useState<ProductProps[]>([]);
  const [saleProducts, setSaleProducts] = React.useState<ProductProps[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/products",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setNewArrivalProducts(data.new_arrivals);
      setSaleProducts(data.top_sellers);
    };
    fetchProducts();
  }, []);

  return (
    <Fragment>
      <MetaTags />
      <main>
        <Discount />
        <Navbar />
        <HomeBanner />
        <Brands brands={brandItems} />

        {/*  */}
        {/* <HomeNavbar
          activeIndex={activeIndex}
          handleActiveIndex={handleActiveIndex}
        /> */}
        <ProductSection products={newArrivalProducts} sectionName="NEW ARRIVALS" />
        <ProductSection products={saleProducts} sectionName="TOP SELLING" />
        <Categories />
        <Forum />
        {/* <CallAction /> */}
        <Footer />
      </main>
    </Fragment>
  );
};

const MetaTags = () => {
  return (
    <Head>
      <title>Hàng Việt Tại Úc - Mua bán sản phẩm yêu thích của bạn</title>
      <meta
        name="description"
        content="Trang web trao đổi mua bán hàng hóa uy tín tại Úc, cung cấp các sản phẩm chất lượng với giá cả cạnh tranh, đảm bảo giao dịch an toàn và nhanh chóng."
      />
      <meta
        name="keywords"
        content="mua bán hàng hóa, trao đổi hàng hóa, mua bán online, trang web mua bán tại Úc, sản phẩm chất lượng, giá rẻ, giao dịch an toàn"
      />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta
        property="og:title"
        content="Trang web trao đổi mua bán hàng hóa tại Úc"
      />
      <meta
        property="og:description"
        content="Cung cấp các sản phẩm chất lượng với giá cả cạnh tranh, đảm bảo giao dịch an toàn và nhanh chóng tại Úc."
      />
      <meta property="og:sitename" content="HangVietTaiUc" />
      <meta property="og:url" content="https://hangviettaiuc.com.vn/" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:updated_time" content="2024-06-20T02:08:26+00:00" />
      <meta
        property="og:image"
        content={`${process.env.NEXT_PUBLIC_REDIRECT_URI}/social_image_homepage.jpg`}
      />
      <meta
        property="og:image:secure_url"
        content={`${process.env.NEXT_PUBLIC_REDIRECT_URI}/social_image_homepage.jpg`}
      />
      <meta property="og:image:width" content="900" />
      <meta property="og:image:height" content="900" />
      <meta property="og:image:alt" content="Trao đổi hàng hóa Việt Nam - Úc" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta
        property="article:published_time"
        content="2024-06-01T08:07:31+00:00"
      />
      <meta
        property="article:modified_time"
        content="2024-06-22T02:08:26+00:00"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Trang web trao đổi mua bán hàng hóa tại Úc"
      />
      <meta
        name="twitter:description"
        content="Cung cấp các sản phẩm chất lượng với giá cả cạnh tranh, đảm bảo giao dịch an toàn và nhanh chóng tại Úc."
      />
      <meta
        name="twitter:image"
        content={`${process.env.NEXT_PUBLIC_REDIRECT_URI}/social_image_homepage.jpg`}
      />
      <meta name="twitter:label1" content="Written by" />
      <meta name="twitter:data1" content="Academic Team" />
      <meta name="twitter:label2" content="Time to read" />
      <meta name="twitter:data2" content="2 minutes" />
      <link rel="icon" href="/logo.svg" type="image/x-icon" />
    </Head>
  );
};

export default Home;
