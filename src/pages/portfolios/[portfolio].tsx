import Portfolio from "@/components/PortfolioPage/Portfolio";
import PortfolioNav from "@/components/PortfolioPage/PortfolioNav";
import React from "react";

import { GetStaticPropsContext } from "next";
import { reader } from "@/utils/reader";

interface MyContext extends GetStaticPropsContext {
  params: {
    portfolio: string;
  };
  locales?: string[];
  locale?: string;
  defaultLocale?: string;
}

interface PortfolioImage {
  image: string | null;
  width: number;
  height: number;
}

interface PortfolioEntry {
  title: string;
  client_name: string;
  headline1: string;
  headline2: string;
  portfolio_category: ("print" | "digital" | "packaging" | "environmental")[];
  description: string;
  project_bg_image: string;
  portfolio_images: PortfolioImage[];
}

interface PortfolioData {
  slug: string;
  entry: PortfolioEntry;
}

interface WorkProps {
  data: PortfolioData[];
}

const Work: React.FC<WorkProps> = ({ data }) => {
  return (
    <>
      <PortfolioNav />
      <Portfolio data={data} />
    </>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { portfolio: "all" } },
      { params: { portfolio: "print" } },
      { params: { portfolio: "digital" } },
      { params: { portfolio: "packaging" } },
      { params: { portfolio: "environmental" } },
    ],
    fallback: false,
  };
};

export const getStaticProps = async (context: MyContext) => {
  const id = context.params.portfolio;

  if (id === "all") {
    const data = await reader.collections.portfolios.all();

    return {
      props: {
        data,
      },
    };
  } else {
    const allData = await reader.collections.portfolios.all();

    const data = allData.filter((item) => {
      if (
        id === "print" ||
        id === "digital" ||
        id === "packaging" ||
        id === "environmental"
      ) {
        return item.entry.portfolio_category.includes(id);
      }
    });

    return {
      props: {
        data,
      },
    };
  }
};

export default Work;
