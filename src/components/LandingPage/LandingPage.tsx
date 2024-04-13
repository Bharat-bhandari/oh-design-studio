"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { TransitionContext } from "@/context/TransitionContext";

import CImage1 from "@/assets/home/CImage1.png";
import CImage2 from "@/assets/home/CImage2.png";
import CImage3 from "@/assets/home/CImage3.png";
import HomeAboutUs from "./HomeAboutUs";
import HomeAboutUs2 from "./HomeAboutUs2";
import HomeFooter from "./HomeFooter";
import HomePortfolio from "./HomePortfolio";
import HomeClients from "./HomeClients";
import HomeNews from "./HomeNews";
import HomeThoughts from "./HomeThoughts";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const LandingPage = () => {
  const container = useRef<HTMLDivElement>(null);

  const pathname = usePathname();

  const { timeline } = useContext(TransitionContext);

  const { previousRoute } = useContext(TransitionContext);
  const { setPreviousRoute } = useContext(TransitionContext);

  useGSAP(
    () => {
      const sections: HTMLDivElement[] = gsap.utils.toArray(".panel");

      const amountToScroll = 100 * (sections.length - 1);

      // console.log(amountToScroll);

      gsap.to(sections, {
        xPercent: -amountToScroll, // amount to scroll
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          pin: true,
          // snap: 1 / (sections.length - 1),
          start: "center center",
          scrub: 1,
          end: () => {
            const mainContainer =
              document.querySelector<HTMLElement>("#mainContainer");
            return mainContainer ? `+=${mainContainer.offsetWidth}` : "+=0";
          },
          // markers: {
          //   startColor: "purple",
          //   endColor: "fuchsia",
          //   fontSize: "2rem",
          //   indent: 200,
          // },
        },
      });

      // Your other GSAP animations

      const screenWidth = window.innerWidth;

      const totalContentWidth = sections.length * window.innerWidth;

      const tl = gsap.timeline();

      if (
        previousRoute === "" ||
        previousRoute === "/menu" ||
        previousRoute === "/contact"
      ) {
        tl.fromTo(
          container.current,
          {
            x: screenWidth,
            autoAlpha: 0,
          },
          {
            x: 0,
            duration: 1,
            ease: "power2.out",
            autoAlpha: 1,
          }
        );
      } else if (previousRoute === "/portfolio") {
        tl.fromTo(
          container.current,
          {
            x: -totalContentWidth,
          },
          {
            x: 0,
          }
        );
      }

      setPreviousRoute(pathname);

      console.log("previous route", previousRoute);

      timeline.add(
        gsap.to(container.current, {
          x: totalContentWidth,
          duration: 0.5,
          ease: "power2.in",
        })
      );
    },

    { scope: container }
  );

  return (
    <>
      <div ref={container} id="mainContainer" className="invisible">
        <div className="flex h-screen  ">
          <div className=" panel h-[75vh] my-auto  w-[96vw] pl-[4vw] flex-shrink-0 ">
            <div
              style={{
                // use the src property of the image object
                backgroundImage: `url(${CImage1.src})`,
                // other styles
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "96vw",
                height: "75vh",
                display: "flex",
                // alignItems: "center",
                // justifyContent: "center",
              }}
            >
              <div className="flex justify-between h-full w-full items-end px-[6.5vw] ">
                <div className="pb-[6.5vh]">
                  <div className=" text-sm font-semibold">CLIENT NAME</div>
                  <div className=" text-4xl font-semibold ">WE CREATE</div>
                  <div className=" text-4xl font-semibold mb-[1.5vh] ">
                    GAME CHANGING BRANDS
                  </div>

                  <div className="text-sm text-[#fff500] font-semibold">
                    GO TO PROJECT
                  </div>
                </div>
                <div className="pb-[6.5vh]">heloo</div>
              </div>
            </div>
          </div>
          <div className="  panel h-[75vh] my-auto w-screen flex-shrink-0 ">
            <div
              style={{
                // use the src property of the image object
                backgroundImage: `url(${CImage2.src})`,
                // other styles
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "75vh",
                display: "flex",
                // alignItems: "center",
                // justifyContent: "center",
              }}
            >
              <div className="flex justify-between h-full w-full items-end px-[6.5vw] ">
                <div className="pb-[6.5vh]">
                  <div className=" text-sm font-semibold">CLIENT NAME</div>
                  <div className=" text-4xl font-semibold ">WE CREATE</div>
                  <div className=" text-4xl font-semibold mb-[1.5vh] ">
                    GAME CHANGING BRANDS
                  </div>

                  <div className="text-sm text-[#fff500] font-semibold">
                    GO TO PROJECT
                  </div>
                </div>
                <div className="pb-[6.5vh]">heloo</div>
              </div>
            </div>
          </div>
          <div className="  panel h-[75vh] my-auto w-screen flex-shrink-0 ">
            <div
              style={{
                // use the src property of the image object
                backgroundImage: `url(${CImage3.src})`,
                // other styles
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "75vh",
                display: "flex",
                // alignItems: "center",
                // justifyContent: "center",
              }}
            >
              <div className="flex justify-between h-full w-full items-end px-[6.5vw] ">
                <div className="pb-[6.5vh]">
                  <div className=" text-sm font-semibold">CLIENT NAME</div>
                  <div className=" text-4xl font-semibold ">WE CREATE</div>
                  <div className=" text-4xl font-semibold mb-[1.5vh] ">
                    GAME CHANGING BRANDS
                  </div>

                  <div className="text-sm text-[#fff500] font-semibold">
                    GO TO PROJECT
                  </div>
                </div>
                <div className="pb-[6.5vh]">heloo</div>
              </div>
            </div>
          </div>
          <div className="bg-yellowBg panel h-[75vh] my-auto w-screen   flex-shrink-0 ">
            <HomeAboutUs />
          </div>
          <div className="bg-yellowBg panel h-[75vh] my-auto w-screen   flex-shrink-0 ">
            <HomeAboutUs2 />
          </div>
          <div className=" panel h-[75vh] my-auto w-screen   flex-shrink-0 ">
            <HomePortfolio />
          </div>
          <div className=" panel h-[75vh] my-auto w-screen   flex-shrink-0 ">
            <HomeClients />
          </div>
          <div className=" panel h-[75vh] my-auto w-screen  flex-shrink-0 ">
            <HomeNews />
          </div>
          <div className=" panel h-[75vh] my-auto w-screen  flex-shrink-0 ">
            <HomeThoughts />
          </div>
          <div className="panel h-[75vh] my-auto w-[96vw] pr-[4vw]   flex-shrink-0 ">
            <HomeFooter />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
