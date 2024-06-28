import { ProductProps } from "@/components/Product";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  product: ProductProps;
};

type Error = {
  message: string;
};

const getProductDetail = async (
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) => {
  if (req.method === "POST") {
    const slug = req.body.slug;
    const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
    const endpoint = `${API_URL}/products/detail/${slug}`;
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      const { product } = data;

      const productItem: ProductProps = {
        name: product.title,
        price: product.price,
        image: product.thumbnail.startsWith("http")
          ? product.thumbnail
          : `${API_URL}${product.thumbnail}`,
        starRating: Math.floor(Math.random() * 5) + 1,
        slug: product.slug,
        discount: product?.discount || 0,
      };
      res.status(200).json({ product: productItem });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};

export default getProductDetail;
