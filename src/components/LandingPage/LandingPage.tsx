"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Draggable } from "gsap/dist/Draggable";

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
import Nav from "./Nav";

gsap.registerPlugin(useGSAP, ScrollTrigger, Draggable);

const LandingPage = () => {
  const container = useRef<HTMLDivElement>(null);

  const [isLoading, setIsLoading] = useState(true);

  const pathname = usePathname();

  const { timeline } = useContext(TransitionContext);

  const { previousRoute } = useContext(TransitionContext);
  const { setPreviousRoute } = useContext(TransitionContext);

  useGSAP(
    () => {
      // Scrolling
      const sections: HTMLDivElement[] = gsap.utils.toArray(".panel");

      let maxWidth = 0;

      const getMaxWidth = () => {
        maxWidth = 0;
        sections.forEach((section) => {
          maxWidth += section.offsetWidth;
        });
      };

      getMaxWidth();
      ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

      let scrollTween = gsap.to(sections, {
        x: () => `-${maxWidth - window.innerWidth}`,
        ease: "none",
      });

      let horizontalScroll = ScrollTrigger.create({
        animation: scrollTween,
        trigger: container.current,
        pin: true,
        snap: 1 / (sections.length - 1),
        start: "center center",
        scrub: 1,
        end: () => `+=${maxWidth}`,
        invalidateOnRefresh: true,
        // markers: {
        //   startColor: "purple",
        //   endColor: "fuchsia",
        //   fontSize: "2rem",
        //   indent: 200,
        // },
      });

      // Draggable Part

      var dragRatio = maxWidth / (maxWidth - window.innerWidth);

      console.log("ratio", dragRatio);

      Draggable.create(".drag-proxy", {
        trigger: container.current,
        type: "x",
        allowContextMenu: true,
        onPress() {
          this.startScroll = horizontalScroll.scroll();
        },
        onDrag() {
          horizontalScroll.scroll(
            this.startScroll - (this.x - this.startX) * dragRatio
          );
        },
      });

      // Draggable Part
      // Scrolling

      // Your other GSAP animations

      const screenWidth = window.innerWidth;

      const totalContentWidth = sections.length * window.innerWidth;

      const tl = gsap.timeline();

      const init = () => {
        if (previousRoute === "") {
          tl.fromTo(
            ".loading",
            {
              x: -screenWidth,
              autoAlpha: 0,
            },
            {
              x: screenWidth,
              autoAlpha: 1,
              duration: 1.2,
            }
          )
            .fromTo(
              ".textOH",
              {
                autoAlpha: 0,
              },
              {
                autoAlpha: 1,
                duration: 0.2,
              }
            )
            .fromTo(
              ".textHello",
              { y: 0 },
              {
                y: -40,
                duration: 0.5,
                delay: 1.2,
                onComplete: () => setIsLoading(false),
              }
            )
            .fromTo(
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
        } else if (previousRoute === "/menu" || previousRoute === "/contact") {
          setIsLoading(false);
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
      };

      setTimeout(() => {
        init();
      }, 0.0001);

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
      {isLoading && (
        <>
          <div className=" absolute top-0 left-0 h-screen w-screen flex justify-center items-center z-50 loading invisible">
            <div className="border-[2px] border-solid w-screen border-black"></div>
          </div>
          <div className=" absolute top-0 left-0 h-screen w-screen flex justify-center items-center z-50 ">
            <div className="text-4xl invisible textOH font-semibold overflow-hidden w-fit h-10 gap-5 flex  ">
              OH!
              <div className=" italic font-semibold textHello ">
                <div>Hello</div>
                <div>Design</div>
              </div>
            </div>
          </div>
        </>
      )}
      <div>
        <div>{!isLoading && <Nav />}</div>

        <div ref={container} id="mainContainer" className="invisible">
          <div className="flex h-screen cursor-default ">
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
                <div className="flex justify-between h-full w-full items-end px-[6.5vw] text-white">
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
                <div className="flex justify-between h-full w-full items-end px-[6.5vw] text-white">
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
                <div className="flex justify-between h-full w-full items-end px-[6.5vw] text-white">
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
            <div className="panel h-[75vh] my-auto w-[96vw] pr-[4vw]   flex-shrink-0  cursor-default">
              <HomeFooter />
            </div>
            <div className="drag-proxy invisible absolute"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
