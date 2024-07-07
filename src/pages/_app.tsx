import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "@material-tailwind/react";
import { CartProvider } from "@/contexts/CartContext";
import "../styles/globals.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </ThemeProvider>
  );
};

export default MyApp;
