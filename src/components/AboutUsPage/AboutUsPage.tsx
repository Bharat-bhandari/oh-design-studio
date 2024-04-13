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

gsap.registerPlugin(useGSAP, ScrollTrigger);

const AboutUsPage = () => {
  const container = useRef<HTMLDivElement>(null);

  const pathname = usePathname();

  const hello = useRef();
  const { timeline } = useContext(TransitionContext);

  const { setPreviousRoute } = useContext(TransitionContext);

  useGSAP(
    () => {
      const sections: HTMLDivElement[] = gsap.utils.toArray(".panel");

      const amountToScroll = 100 * (sections.length - 1);

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

      const screenWidth = window.innerWidth;

      const tl = gsap.timeline();

      tl.fromTo(
        container.current,
        {
          x: screenWidth,
        },
        {
          x: 0,
          duration: 1,
          ease: "power2.out",
        }
      );

      setPreviousRoute(pathname);

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
      <div ref={container} id="mainContainer">
        <div className="flex h-screen hello ">
          <div className="bg-purple-400  text-3xl text-white panel h-[75vh] my-auto  w-[96vw] ml-[4vw] flex-shrink-0 ">
            AboutUsPage Page
          </div>
          <div className="bg-green-400 text-3xl text-white panel h-[75vh] my-auto w-screen flex-shrink-0 ">
            Page2
          </div>
          {/* <div className="bg-yellow-400 text-white text-3xl  panel h-[75vh] my-auto w-screen flex-shrink-0 ">
            Page3
          </div>
          <div className="bg-orange-400 text-3xl text-white panel h-[75vh] my-auto w-screen   flex-shrink-0 ">
            Page4
          </div> */}
          <div className="bg-yellowBg panel h-[75vh] my-auto w-screen   flex-shrink-0 ">
            <HomeAboutUs2 />
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
