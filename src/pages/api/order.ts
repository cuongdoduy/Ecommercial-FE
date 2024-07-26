import type { NextApiRequest, NextApiResponse } from "next";

const Order = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  if (req.method === "POST") {
    const cartId = req.cookies.cartId; // Get cartId from cookies
    const { userInfo } = req.body;

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
    const endpoint = `${API_URL}/checkout/order`;
    const response = await fetch(endpoint, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        userInfo: userInfo,
      }),
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
  } else if (req.method === "GET") {
    const cartId = req.cookies.cartId; // Get cartId from cookies
    const orderId = req.query.orderId as string;

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
    const endpoint = `${API_URL}/checkout/success`;
    const response = await fetch(`${endpoint}/${orderId}`, {
      method: "GET",
      headers: headers,
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
  } else if (req.method === "PATCH") {
    const cartId = req.cookies.cartId; // Get cartId from cookies
    const orderId = req.query.orderId as string;
    const { paymentMethod } = req.body;

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
    const endpoint = `${API_URL}/checkout/update`;
    const response = await fetch(`${endpoint}/${orderId}`, {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify({
        payment: paymentMethod,
      }),
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
  } else if (req.method === "DELETE") {
    const cartId = req.cookies.cartId; // Get cartId from cookies
    const orderId = req.query.orderId as string;

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
    const endpoint = `${API_URL}/checkout/success`;
    const response = await fetch(`${endpoint}/${orderId}`, {
      method: "GET",
      headers: headers,
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

export default Order;
