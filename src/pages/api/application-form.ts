// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const multer = require("multer");

type FormData = {
  resume: File | string;
  fullName: string;
  email: string;
  phone: string;
  currentCompany?: string;
  portfolioURL?: string;
  linkedin?: string;
  otherWebsite?: string;
  additionalInfo?: string;
};

interface CustomNextApiRequest extends NextApiRequest {
  file: Express.Multer.File; // Assuming Express typings for Multer
}

// Multer configuration
const upload = multer({ dest: "public/uploads/" }); // Define upload directory

export default async function handler(
  req: CustomNextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    try {
      // Parse form data using multer
      upload.single("resume")(req, res, async (err: any) => {
        if (err instanceof multer.MulterError) {
          // A Multer error occurred when uploading
          console.error("Multer error:", err);
          return res.status(500).json({ error: "File upload error" });
        } else if (err) {
          // An unknown error occurred when uploading
          console.error("Unknown error:", err);
          return res.status(500).json({ error: "Unknown error" });
        }

        // Access form data
        const formData: FormData = req.body;
        const resumeFile = req.file;

        // Process form data as needed
        console.log("Form data:", formData);
        console.log("Resume file:", resumeFile);

        // Send response
        res.status(200).json({ message: "Form data received successfully" });
      });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    // Method Not Allowed
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export const config = {
  api: {
    bodyParser: false, // Disable default body parser
  },
};
