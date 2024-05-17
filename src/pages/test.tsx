import Portfolio from "@/components/PortfolioPage/Portfolio";
import { reader } from "@/utils/reader";
import React from "react";

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
  data: PortfolioEntry;
}

const TestComponent: React.FC<WorkProps> = (props) => {
  const { data } = props;

  console.log(data);

  return (
    <>
      <div>Data</div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};

export default TestComponent;

export const getStaticProps = async () => {
  const data = await reader.collections.portfolios.all();

  return {
    props: {
      data,
    },
  };
};
