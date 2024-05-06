import type { NextApiRequest, NextApiResponse } from "next";

type ContactFormData = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
};

type ResponseData = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "POST") {
    // Extract the form data from the request body
    const formData: ContactFormData = req.body;

    // Log the form data
    console.log("Received form data:", formData);

    // Respond with a success message
    res.status(200).json({ message: "Form data received successfully" });
  } else {
    // Respond with a method not allowed error if the request method is not POST
    res.status(405).json({ message: "Method not allowed" });
  }
}
