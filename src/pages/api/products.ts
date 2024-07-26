import { ProductProps } from "@/components/Product";
import type { NextApiRequest, NextApiResponse } from "next";
import { getCookie, setCookie } from "cookies-next";

type Data = {
  new_arrivals: Array<ProductProps>;
  top_sellers: Array<ProductProps>;
};

type Error = {
  message: string;
};

const getProducts = async (
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) => {
  if (req.method === "POST") {
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
    const endpoint = `${API_URL}`;
    const response = await fetch(endpoint, {
      method: "GET",
      headers: headers,
    });

    
    if (response.ok) {
      //log cookies

      const data = await response.json();

      const { products, productsNew } = data;
      const new_arrivals = productsNew.map((product: any) => {
        const productItem: ProductProps = {
          id: product._id,
          name: product.title,
          price: product.price,
          image: product.thumbnail.startsWith("http")
            ? product.thumbnail
            : `${API_URL}${product.thumbnail}`,
          starRating: Math.floor(Math.random() * 5) + 1,
          slug: product.slug,
          discount: product?.discount || 0,
        };
        return productItem;
      });
      const top_sellers = products.map((product: any) => {
        const productItem: ProductProps = {
          id: product._id,
          name: product.title,
          price: product.price,
          image: product.thumbnail.startsWith("http")
            ? product.thumbnail
            : `${API_URL}${product.thumbnail}`,
          starRating: Math.floor(Math.random() * 5) + 1,
          slug: product.slug,
          discount: product?.discount || 0,
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

      res.status(200).json({ new_arrivals, top_sellers });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};

export default getProducts;
