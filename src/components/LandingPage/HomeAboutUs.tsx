import React, { useEffect, useRef } from "react";
import about from "@/assets/home/about-us.png";
import linkBtn from "@/assets/images/linkBtn.png";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const HomeAboutUs = () => {
  const containerRef = useRef(null);
  // useGSAP(
  //   () => {
  //     gsap.from(".test", {
  //       yPercent: 50,
  //       duration: 3,
  //       opacity: 0,
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: ".test",
  //         toggleActions: "restart none none none",
  //         start: "top, center+=30%",
  //         end: "top, center-=10%",
  //         scrub: true,
  //         invalidateOnRefresh: true,

  //         markers: {
  //           startColor: "purple",
  //           endColor: "fuchsia",
  //           fontSize: "2rem",
  //           indent: 200,
  //         },
  //       },
  //     });
  //   },
  //   { scope: containerRef }
  // );

  return (
    <div
      className="px-[6.5vw] flex justify-between h-full gap-[5vw]"
      ref={containerRef}
    >
      <div className="pt-[9.5vh] h-[55vh] overflow-hidden flex flex-col justify-between ">
        <div className="text-textGray text-[4.5vw]  font-semibold test">
          Character is a branding and design agency with studios in New York and
          San Francisco.
        </div>
        <div className="text-black md:text-base max-w-[60%] text-sm">
          Since Michael Ferdman founded Firstborn in 1997, weve seen the digital
          landscape change dramatically. Our industry has transformed, our
          clients businesses and their challenges have become more complex,
          consumer behavior has shifted, and we, as a company, have evolved with
          those changes along with it.
        </div>

        <div className="flex items-center gap-2">
          <div className="text-black text-lg font-medium">ABOUT US</div>
          <Image src={linkBtn} width={17} height={17} alt="link" />
        </div>
      </div>
      <Image className="h-full w-[27.5vw]" src={about} alt="about" />
    </div>
  );
};

export default HomeAboutUs;
