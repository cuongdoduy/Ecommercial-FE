import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

type response = {
  data: any;
  message: string;
  statusCode: number;
  success: boolean;
};

const SignUp = async (
  req: NextApiRequest,
  res: NextApiResponse<Data | response>
) => {
  if (req.method === "POST") {
    // Process a POST request
    const { fullname, email, password } = req.body;

    const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/user/register`;

    const data = {
      fullname,
      email,
      password,
    };

    const response = await fetch(endpoint, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData: response = await response.json();

    if (responseData.success === true) {
      res.status(200).json({
        message: responseData.message,
        statusCode: 200,
      });
    } else {
      res.status(400).json({
        message: responseData.message,
        statusCode: 400,
      });
    }
    // res.status(405).json({ message: "Method Not Allowed" });
  } else {
    // Handle any other HTTP method
    res.status(405).json({ message: "Method Not Allowed" });
  }
};

export default SignUp;
