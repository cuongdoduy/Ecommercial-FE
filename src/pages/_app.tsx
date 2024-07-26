import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "@material-tailwind/react";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "@/contexts/CartContext";

const MyApp: React.FC<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default MyApp;
