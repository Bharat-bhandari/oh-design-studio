"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { usePathname } from "next/navigation";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useContext, useRef } from "react";
import Link from "next/link";
import { TransitionContext } from "@/context/TransitionContext";
import HomeFooter from "../LandingPage/HomeFooter";
import HomeClients from "../LandingPage/HomeClients";
import HomeAboutUs2 from "../LandingPage/HomeAboutUs2";
import AboutUsSection1 from "./AboutUsSection1";
import AboutUsSection3 from "./AboutUsSection3";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const AboutUsPage = () => {
  const container = useRef<HTMLDivElement>(null);

  const pathname = usePathname();

  const { timeline } = useContext(TransitionContext);

  const { setPreviousRoute } = useContext(TransitionContext);

  useGSAP(
    () => {
      const sections: HTMLDivElement[] = gsap.utils.toArray(".panel");

      const amountToScroll = 100 * (sections.length - 1);
      const scrollSpeed = sections.length * 1000;

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
            return `+=${scrollSpeed}`;
          },
          // markers: {
          //   startColor: "purple",
          //   endColor: "fuchsia",
          //   fontSize: "2rem",
          //   indent: 200,
          // },
        },
      });

      const screenWidth = window.innerWidth;

      const tl = gsap.timeline();

      const init = () => {
        tl.fromTo(
          container.current,
          {
            x: screenWidth,
            autoAlpha: 0,
          },
          {
            x: 0,
            autoAlpha: 1,
            duration: 1,
            ease: "power2.out",
          }
        );
      };

      setTimeout(() => {
        init();
      }, 0.0001);

      if (pathname !== null) {
        setPreviousRoute(pathname);
      }

      const totalContentWidth = sections.length * window.innerWidth;

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
        <div className="flex h-screen hello ">
          <div className="bg-yellowBg panel h-[75vh] my-auto  w-[96vw] ml-[4vw] flex-shrink-0 ">
            <AboutUsSection1 />
          </div>
          <div className="bg-yellowBg panel h-[75vh] my-auto w-screen   flex-shrink-0 ">
            <HomeAboutUs2 />
          </div>
          <div className="bg-yellowBg panel h-[75vh] my-auto w-screen   flex-shrink-0 ">
            <AboutUsSection3 />
          </div>
          <div className=" panel h-[75vh] my-auto w-screen   flex-shrink-0 ">
            <HomeClients />
          </div>
          <div className="panel h-[75vh] my-auto w-[96vw] pr-[4vw]   flex-shrink-0 ">
            <HomeFooter />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
