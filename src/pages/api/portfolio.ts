// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import reader, { portfolioType } from "@/lib/keystatic";
import type { NextApiRequest, NextApiResponse } from "next";

type PortfolioEntry = {
  title: string;
  client_name: string;
  headline1: string;
  headline2: string;
  portfolio_category: string;
  description: string;
  project_bg_image: string;
  portfolio_images: (string | null)[];
};

type PortfolioData = {
  slug: string;
  entry: PortfolioEntry;
};

type Portfolios = PortfolioData[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Portfolios | { error: string }>
) {
  try {
    const portfolioData = await reader.collections.portfolios.all();

    const filteredPortfolioData = portfolioData.map((item) => ({
      slug: item.slug,
      entry: {
        ...item.entry,
        portfolio_images: item.entry.portfolio_images.filter(
          (image) => image !== null
        ),
      },
    }));

    console.log(filteredPortfolioData);

    res.status(200).json(filteredPortfolioData);
  } catch (error) {
    console.error("Error fetching carousel data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
