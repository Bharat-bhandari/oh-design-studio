import LandingPage from "@/components/LandingPage/LandingPage";
import AboutusMobile1 from "@/components/MobileView/AboutusMobile1";
import LandingPageMobile from "@/components/MobileView/LandingPageMobile";
import MobileNav from "@/components/MobileView/MobileNav";
import React from "react";

const Home = () => {
  return (
    <main>
      <div className="hidden sm:block">
        <LandingPage />
      </div>
      <div className="block sm:hidden">
        <MobileNav />
        <LandingPageMobile />
        <AboutusMobile1 />
      </div>
    </main>
  );
};

export default Home;
