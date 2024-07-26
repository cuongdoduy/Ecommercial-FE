import type { NextApiRequest, NextApiResponse } from "next";

const PaymentURL = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  if (req.method === "POST") {
    const cartId = req.cookies.cartId; // Get
    const orderId = req.body.orderId as string;
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
    const endpoint = `${API_URL}/checkout/create_payment_url`;
    const response = await fetch(endpoint, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ orderId: orderId }),
    });

    if (response.ok) {
      //log cookies
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

      const data = await response.json();
      if (data.status === "success") {
        res.status(200).json(data);
      } else {
        res.status(400).json({ message: data.message });
      }
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};

export default PaymentURL;
