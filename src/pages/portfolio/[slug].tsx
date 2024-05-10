// import React, { useEffect, useState } from "react";
// import { useParams } from "next/navigation";

// interface Params {
//   [key: string]: string;
// }

// type PortfolioEntry = {
//   title: string;
//   client_name: string;
//   headline1: string;
//   headline2: string;
//   portfolio_category: string;
//   description: string;
//   project_bg_image: string;
//   portfolio_images: (string | null)[];
// };

// const PortfolioMain = () => {
//   const params = useParams<Params>();
//   const [slug, setSlug] = useState<string>("");

//   useEffect(() => {
//     if (params?.slug) {
//       setSlug(params.slug);
//     }
//   }, [params]);

//   console.log(slug);

//   const [singlePortfolio, setSinglePortfolio] = useState<PortfolioEntry | null>(
//     null
//   );

//   console.log(singlePortfolio);

//   useEffect(() => {
//     const fetchData = async () => {
//       if (slug.trim() !== "") {
//         // Check if slug is not empty or whitespace
//         try {
//           const response = await fetch("/api/single-portfolio", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ slug: slug }),
//           });
//           const data = await response.json();
//           setSinglePortfolio(data);
//         } catch (error) {
//           console.error("Error fetching portfolio data:", error);
//         }
//       }
//     };

//     fetchData();
//   }, [slug]);

//   return <div>portfolioMain</div>;
// };

// export default PortfolioMain;

import Nav from "@/components/LandingPage/Nav";
import SinglePortFolioDesignMobile from "@/components/MobileView/SinglePortFolioDesignMobile";
import SinglePortFolioDesign from "@/components/PortfolioPage/SinglePortFolioDesign";
import React from "react";

const SinglePortfolio = () => {
  return (
    <>
      <div className="hidden sm:block">
        <Nav />
        <SinglePortFolioDesign />
      </div>
      <div className="sm:hidden">
        <SinglePortFolioDesignMobile />
      </div>
    </>
  );
};

export default SinglePortfolio;
