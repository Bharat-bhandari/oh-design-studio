import reader from "@/lib/keystatic";
import { NextResponse } from "next/server";

type PortfolioImage = {
  image: string | null;
  width: number;
  height: number;
};

type PortfolioEntry = {
  title: string;
  client_name: string;
  headline1: string;
  headline2: string;
  portfolio_category: ReadonlyArray<
    "print" | "digital" | "packaging" | "environmental"
  >;
  description: string;
  project_bg_image: string;
  portfolio_images: ReadonlyArray<PortfolioImage>;
};

type PortfolioData = {
  slug: string;
  entry: PortfolioEntry;
};

type Portfolios = ReadonlyArray<PortfolioData>;

export const POST = async (req: Request) => {
  try {
    const { slug } = await req.json();

    console.log("hello world", slug);

    const portfolioData = await reader.collections.portfolios.all();

    const filteredPortfolioData: Portfolios = portfolioData.filter((item) => {
      if (
        slug === "print" ||
        slug === "digital" ||
        slug === "packaging" ||
        slug === "environmental"
      ) {
        return item.entry.portfolio_category.includes(slug);
      } else if (slug === "all") {
        return true; // Return full data if slug is not one of the specified values
      }
    });

    return NextResponse.json(filteredPortfolioData);
  } catch (error) {
    console.error("Error fetching carousel data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
