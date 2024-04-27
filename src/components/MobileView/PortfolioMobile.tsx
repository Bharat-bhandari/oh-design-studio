import React from "react";

import portfolio1 from "@/assets/portfolio/portFolio1.png";
import portfolio2 from "@/assets/portfolio/thumb.jpg";
import Image from "next/image";

const PortfolioMobile = () => {
  return (
    <div className="h-screen">
      <div className="h-1/2">
        <Image
          className="h-full w-screen object-cover"
          src={portfolio1}
          alt="home1 Image"
        />
      </div>
      <div className="h-1/2">
        <Image
          className="h-full w-full object-cover"
          src={portfolio2}
          alt="home1 Image"
        />
      </div>
    </div>
  );
};

export default PortfolioMobile;
