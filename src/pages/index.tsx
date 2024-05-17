import LandingPage from "@/components/LandingPage/LandingPage";
import AboutusMobile1 from "@/components/MobileView/AboutusMobile1";
import AboutusMobile2 from "@/components/MobileView/AboutusMobile2";
import FooterMobile from "@/components/MobileView/FooterMobile";
import LandingPageMobile from "@/components/MobileView/LandingPageMobile";
import MobileNav from "@/components/MobileView/MobileNav";
import PortfolioMobile from "@/components/MobileView/PortfolioMobile";
import { reader } from "@/utils/reader";
import React from "react";

type CarouselItem = {
  slug: string;
  entry: {
    title: string;
    client_name: string;
    headline1: string;
    headline2: string;
    project_link: string;
    project_image: string;
  };
};

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

type HomeProps = {
  data: CarouselItem[];
  portFolioData: PortfolioData[];
};

const Home: React.FC<HomeProps> = ({ data, portFolioData }) => {
  return (
    <main>
      <div className="hidden sm:block">
        <LandingPage data={data} portFolioData={portFolioData} />
      </div>
      <div className="block sm:hidden">
        <MobileNav />
        <LandingPageMobile />
        <AboutusMobile1 />
        <AboutusMobile2 />
        <PortfolioMobile />
        <FooterMobile />
      </div>
    </main>
  );
};

// Fetch data at build time
export async function getStaticProps() {
  // Example of fetching data
  const data = await reader.collections.home_carousel.all();

  const portFolioData = await reader.collections.portfolios.all();

  return {
    props: {
      data,
      portFolioData,
    },
  };
}

export default Home;
