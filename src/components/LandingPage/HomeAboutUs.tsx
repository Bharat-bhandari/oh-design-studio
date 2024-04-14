import React from "react";

import about from "@/assets/home/about-us.png";
import linkBtn from "@/assets/images/linkBtn.png";
import Image from "next/image";

const HomeAboutUs = () => {
  return (
    <div className="px-[6.5vw] flex justify-between h-full gap-[5vw]">
      <div className="pt-[9.5vh] pb-[10vh] flex flex-col justify-between ">
        <div className=" text-textGray text-7xl font-semibold">
          Character is a branding and design agency with studios in New York and
          San Francisco.
        </div>
        <div className="text-black text-base max-w-[60%]">
          Since Michael Ferdman founded Firstborn in 1997, we've seen the
          digital landscape change dramatically. Our industry has transformed,
          our clients businesses and their challenges have become more complex,
          consumer behavior has shifted, and we, as a company, have evolved with
          those changes along with it.
        </div>

        <div className="flex items-center gap-2">
          <div className="text-black text-lg font-medium">ABOUT US</div>
          <Image src={linkBtn} width={20} height={20} alt="link" />
        </div>
      </div>
      <Image className="h-full w-[27.5vw]" src={about} alt="about" />
    </div>
  );
};

export default HomeAboutUs;
