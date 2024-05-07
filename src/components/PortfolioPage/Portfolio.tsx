"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { usePathname } from "next/navigation";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { TransitionContext } from "@/context/TransitionContext";
import HomeFooter from "../LandingPage/HomeFooter";
import HomePortfolio from "../LandingPage/HomePortfolio";
import Image from "next/image";

import { Draggable } from "gsap/dist/Draggable";

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

type Portfolios = PortfolioData[];

gsap.registerPlugin(useGSAP, ScrollTrigger, Draggable);

const Portfolio = () => {
  const container = useRef<HTMLDivElement>(null);

  const pathname = usePathname();

  const { timeline } = useContext(TransitionContext);

  const { setPreviousRoute } = useContext(TransitionContext);

  const [portfolioData, setPortfolioData] = useState<Portfolios>([
    {
      slug: "logo",
      entry: {
        title: "Logo",
        client_name: "Logo",
        headline1: "Test",
        headline2: "Test and Test",
        portfolio_category: "Test",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, nulla quas iure necessitatibus voluptatem quasi odio exercitationem eius dolorem natus placeat temporibus suscipit, officiis ab aliquid fugiat! Dolorem, possimus ullam.",
        project_bg_image: "/images/portfolios/logo/project_bg_image.jpg",
        portfolio_images: [
          "/images/singlePortfolio/logo/portfolio_images/0.jpg",
          "/images/singlePortfolio/logo/portfolio_images/1.jpg",
          "/images/singlePortfolio/logo/portfolio_images/2.jpg",
          "/images/singlePortfolio/logo/portfolio_images/3.jpg",
          "/images/singlePortfolio/logo/portfolio_images/4.jpg",
          "/images/singlePortfolio/logo/portfolio_images/5.jpg",
          "/images/singlePortfolio/logo/portfolio_images/6.jpg",
          "/images/singlePortfolio/logo/portfolio_images/7.jpg",
          "/images/singlePortfolio/logo/portfolio_images/8.jpg",
        ],
      },
    },
    {
      slug: "taj-villas",
      entry: {
        title: "Taj Villas",
        client_name: "Taj Villas",
        headline1: "We create",
        headline2: "Game Changing Brands",
        portfolio_category: "Test",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, nulla quas iure necessitatibus voluptatem quasi odio exercitationem eius dolorem natus placeat temporibus suscipit, officiis ab aliquid fugiat! Dolorem, possimus ullam.",
        project_bg_image: "/images/portfolios/taj-villas/project_bg_image.jpg",
        portfolio_images: [
          "/images/singlePortfolio/taj-villas/portfolio_images/0.jpg",
          "/images/singlePortfolio/taj-villas/portfolio_images/1.jpg",
          "/images/singlePortfolio/taj-villas/portfolio_images/2.jpg",
          "/images/singlePortfolio/taj-villas/portfolio_images/3.jpg",
        ],
      },
    },
    {
      slug: "taj-villas",
      entry: {
        title: "Taj Villas",
        client_name: "Taj Villas",
        headline1: "We create",
        headline2: "Game Changing Brands",
        portfolio_category: "Test",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, nulla quas iure necessitatibus voluptatem quasi odio exercitationem eius dolorem natus placeat temporibus suscipit, officiis ab aliquid fugiat! Dolorem, possimus ullam.",
        project_bg_image: "/images/portfolios/taj-villas/project_bg_image.jpg",
        portfolio_images: [
          "/images/singlePortfolio/taj-villas/portfolio_images/0.jpg",
          "/images/singlePortfolio/taj-villas/portfolio_images/1.jpg",
          "/images/singlePortfolio/taj-villas/portfolio_images/2.jpg",
          "/images/singlePortfolio/taj-villas/portfolio_images/3.jpg",
        ],
      },
    },
    {
      slug: "taj-villas",
      entry: {
        title: "Taj Villas",
        client_name: "Taj Villas",
        headline1: "We create",
        headline2: "Game Changing Brands",
        portfolio_category: "Test",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, nulla quas iure necessitatibus voluptatem quasi odio exercitationem eius dolorem natus placeat temporibus suscipit, officiis ab aliquid fugiat! Dolorem, possimus ullam.",
        project_bg_image: "/images/portfolios/taj-villas/project_bg_image.jpg",
        portfolio_images: [
          "/images/singlePortfolio/taj-villas/portfolio_images/0.jpg",
          "/images/singlePortfolio/taj-villas/portfolio_images/1.jpg",
          "/images/singlePortfolio/taj-villas/portfolio_images/2.jpg",
          "/images/singlePortfolio/taj-villas/portfolio_images/3.jpg",
        ],
      },
    },
    {
      slug: "taj-villas",
      entry: {
        title: "Taj Villas",
        client_name: "Taj Villas",
        headline1: "We create",
        headline2: "Game Changing Brands",
        portfolio_category: "Test",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, nulla quas iure necessitatibus voluptatem quasi odio exercitationem eius dolorem natus placeat temporibus suscipit, officiis ab aliquid fugiat! Dolorem, possimus ullam.",
        project_bg_image: "/images/portfolios/taj-villas/project_bg_image.jpg",
        portfolio_images: [
          "/images/singlePortfolio/taj-villas/portfolio_images/0.jpg",
          "/images/singlePortfolio/taj-villas/portfolio_images/1.jpg",
          "/images/singlePortfolio/taj-villas/portfolio_images/2.jpg",
          "/images/singlePortfolio/taj-villas/portfolio_images/3.jpg",
        ],
      },
    },
    {
      slug: "taj-villas",
      entry: {
        title: "Taj Villas",
        client_name: "Taj Villas",
        headline1: "We create",
        headline2: "Game Changing Brands",
        portfolio_category: "Test",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, nulla quas iure necessitatibus voluptatem quasi odio exercitationem eius dolorem natus placeat temporibus suscipit, officiis ab aliquid fugiat! Dolorem, possimus ullam.",
        project_bg_image: "/images/portfolios/taj-villas/project_bg_image.jpg",
        portfolio_images: [
          "/images/singlePortfolio/taj-villas/portfolio_images/0.jpg",
          "/images/singlePortfolio/taj-villas/portfolio_images/1.jpg",
          "/images/singlePortfolio/taj-villas/portfolio_images/2.jpg",
          "/images/singlePortfolio/taj-villas/portfolio_images/3.jpg",
        ],
      },
    },
    {
      slug: "taj-villas",
      entry: {
        title: "Taj Villas",
        client_name: "Taj Villas",
        headline1: "We create",
        headline2: "Game Changing Brands",
        portfolio_category: "Test",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, nulla quas iure necessitatibus voluptatem quasi odio exercitationem eius dolorem natus placeat temporibus suscipit, officiis ab aliquid fugiat! Dolorem, possimus ullam.",
        project_bg_image: "/images/portfolios/taj-villas/project_bg_image.jpg",
        portfolio_images: [
          "/images/singlePortfolio/taj-villas/portfolio_images/0.jpg",
          "/images/singlePortfolio/taj-villas/portfolio_images/1.jpg",
          "/images/singlePortfolio/taj-villas/portfolio_images/2.jpg",
          "/images/singlePortfolio/taj-villas/portfolio_images/3.jpg",
        ],
      },
    },
    {
      slug: "taj-villas",
      entry: {
        title: "Taj Villas",
        client_name: "Taj Villas",
        headline1: "We create",
        headline2: "Game Changing Brands",
        portfolio_category: "Test",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, nulla quas iure necessitatibus voluptatem quasi odio exercitationem eius dolorem natus placeat temporibus suscipit, officiis ab aliquid fugiat! Dolorem, possimus ullam.",
        project_bg_image: "/images/portfolios/taj-villas/project_bg_image.jpg",
        portfolio_images: [
          "/images/singlePortfolio/taj-villas/portfolio_images/0.jpg",
          "/images/singlePortfolio/taj-villas/portfolio_images/1.jpg",
          "/images/singlePortfolio/taj-villas/portfolio_images/2.jpg",
          "/images/singlePortfolio/taj-villas/portfolio_images/3.jpg",
        ],
      },
    },
    {
      slug: "taj-villas",
      entry: {
        title: "Taj Villas",
        client_name: "Taj Villas",
        headline1: "We create",
        headline2: "Game Changing Brands",
        portfolio_category: "Test",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, nulla quas iure necessitatibus voluptatem quasi odio exercitationem eius dolorem natus placeat temporibus suscipit, officiis ab aliquid fugiat! Dolorem, possimus ullam.",
        project_bg_image: "/images/portfolios/taj-villas/project_bg_image.jpg",
        portfolio_images: [
          "/images/singlePortfolio/taj-villas/portfolio_images/0.jpg",
          "/images/singlePortfolio/taj-villas/portfolio_images/1.jpg",
          "/images/singlePortfolio/taj-villas/portfolio_images/2.jpg",
          "/images/singlePortfolio/taj-villas/portfolio_images/3.jpg",
        ],
      },
    },
    {
      slug: "taj-villas",
      entry: {
        title: "Taj Villas",
        client_name: "Taj Villas",
        headline1: "We create",
        headline2: "Game Changing Brands",
        portfolio_category: "Test",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, nulla quas iure necessitatibus voluptatem quasi odio exercitationem eius dolorem natus placeat temporibus suscipit, officiis ab aliquid fugiat! Dolorem, possimus ullam.",
        project_bg_image: "/images/portfolios/taj-villas/project_bg_image.jpg",
        portfolio_images: [
          "/images/singlePortfolio/taj-villas/portfolio_images/0.jpg",
          "/images/singlePortfolio/taj-villas/portfolio_images/1.jpg",
          "/images/singlePortfolio/taj-villas/portfolio_images/2.jpg",
          "/images/singlePortfolio/taj-villas/portfolio_images/3.jpg",
        ],
      },
    },
  ]);

  console.log("gfdhjs", portfolioData);

  const oddIndexData = portfolioData.filter((_, index) => index % 2 !== 0);
  const evenIndexData = portfolioData.filter((_, index) => index % 2 === 0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/portfolio");
        const data = await response.json();
        // setPortfolioData(data);
      } catch (error) {
        console.error("Error fetching carousel data:", error);
      }
    };

    fetchData();
  }, []);

  let maxWidth = 0;

  useGSAP(
    () => {
      const sections: HTMLDivElement[] = gsap.utils.toArray(".panel");

      const amountToScroll = 100 * (sections.length - 1);
      const scrollSpeed = sections.length * 1000;

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
        // snap: 1 / (sections.length - 1),
        start: "center center",
        scrub: 2,
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

      // gsap.to(sections, {
      //   xPercent: -amountToScroll, // amount to scroll
      //   ease: "none",
      //   scrollTrigger: {
      //     trigger: container.current,
      //     pin: true,
      //     // snap: 1 / (sections.length - 1),
      //     start: "center center",
      //     scrub: 1,
      //     end: () => {
      //       return `+=${scrollSpeed}`;
      //     },
      //     // markers: {
      //     //   startColor: "purple",
      //     //   endColor: "fuchsia",
      //     //   fontSize: "2rem",
      //     //   indent: 200,
      //     // },
      //   },
      // });

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

      const closestEdge = (x: number, y: number, w: number, h: number) => {
        const topEdgeDist = distMetric(x, y, w / 2, 0);
        const bottomEdgeDist = distMetric(x, y, w / 2, h);
        const leftEdgeDist = distMetric(x, y, 0, h / 2);
        const rightEdgeDist = distMetric(x, y, w, h / 2);
        const min = Math.min(
          topEdgeDist,
          bottomEdgeDist,
          leftEdgeDist,
          rightEdgeDist
        );
        switch (min) {
          case leftEdgeDist:
            return "left";
          case rightEdgeDist:
            return "right";
          case topEdgeDist:
            return "top";
          case bottomEdgeDist:
            return "bottom";
          default:
            return "";
        }
      };

      const distMetric = (x: number, y: number, x2: number, y2: number) => {
        const xDiff = x - x2;
        const yDiff = y - y2;
        return xDiff * xDiff + yDiff * yDiff;
      };

      const boxes = document.querySelectorAll<HTMLDivElement>(".boxes");

      boxes.forEach((box) => {
        box.addEventListener("mouseenter", handleMouseEnter);
        box.addEventListener("mouseleave", handleMouseLeave);
      });
      function handleMouseEnter(this: HTMLDivElement, e: MouseEvent) {
        const x = e.clientX - this.offsetLeft;
        const y = e.clientY - this.offsetTop;
        const edge = closestEdge(x, y, this.clientWidth, this.clientHeight);
        const overlay = this.querySelector<HTMLDivElement>(".overlay");
        const overlayText = this.querySelector<HTMLDivElement>(".textOverlay");

        console.log("edge", edge);

        if (!overlay) return; // Check if overlay is null
        if (!overlayText) return; // Check if overlay is null

        switch (edge) {
          case "left":
            overlay.style.top = "0%";
            overlay.style.left = "-100%";
            overlayText.style.top = "0%";
            overlayText.style.left = "-100%";

            gsap.to(overlay, { duration: 0.25, left: "0%" });
            gsap.to(overlayText, { duration: 0.25, left: "0%" });

            break;
          case "right":
            overlay.style.top = "0%";
            overlay.style.left = "100%";
            overlayText.style.top = "0%";
            overlayText.style.left = "100%";
            gsap.to(overlay, { duration: 0.25, left: "0%" });
            gsap.to(overlayText, { duration: 0.25, left: "0%" });
            break;
          case "top":
            overlay.style.top = "-100%";
            overlay.style.left = "0%";
            overlayText.style.top = "-100%";
            overlayText.style.left = "0%";
            gsap.to(overlay, { duration: 0.25, top: "0%" });
            gsap.to(overlayText, { duration: 0.25, top: "0%" });
            break;
          case "bottom":
            overlay.style.top = "100%";
            overlay.style.left = "0%";
            overlayText.style.top = "100%";
            overlayText.style.left = "0%";
            gsap.to(overlay, { duration: 0.25, top: "0%" });
            gsap.to(overlayText, { duration: 0.25, top: "0%" });
            break;
          default:
            break;
        }
      }

      function handleMouseLeave(this: HTMLDivElement, e: MouseEvent) {
        const x = e.clientX - this.offsetLeft;
        const y = e.clientY - this.offsetTop;
        const edge = closestEdge(x, y, this.clientWidth, this.clientHeight);
        const overlay = this.querySelector<HTMLDivElement>(".overlay");
        const overlayText = this.querySelector<HTMLDivElement>(".textOverlay");

        if (!overlay) return; // Check if overlay is null
        if (!overlayText) return; // Check if overlay is null

        switch (edge) {
          case "left":
            gsap.set(overlay, { left: "-100%" });
            gsap.to(overlayText, {
              duration: 0.25,
              left: "100%",
              ease: "power4.in",
            });
            break;
          case "right":
            gsap.set(overlay, { left: "100%" });
            gsap.to(overlayText, {
              duration: 0.25,
              left: "-100%",
              ease: "power4.in",
            });
            break;
          case "top":
            gsap.set(overlay, { top: "-100%" });
            gsap.to(overlayText, {
              duration: 0.25,
              top: "100%",
              ease: "power4.in",
            });
            break;
          case "bottom":
            gsap.set(overlay, { top: "100%" });
            gsap.to(overlayText, {
              duration: 0.25,
              top: "-100%",
              ease: "power4.in",
            });
            break;
          default:
            gsap.set(overlay, { top: "100%" });
            break;
        }

        // Delay before hiding the overlay
        setTimeout(() => {
          gsap.set(overlay, { top: "100%" });
        }, 250); // Adjust the delay time as needed
      }
      return () => {
        // Cleanup event listeners when component unmounts
        boxes.forEach((box) => {
          box.removeEventListener("mouseenter", handleMouseEnter);
          box.removeEventListener("mouseleave", handleMouseLeave);
        });
      };
    },
    { scope: container, dependencies: [portfolioData] }
  );

  return (
    <>
      <div ref={container} id="mainContainer" className="invisible">
        <div className="flex h-screen hello cursor-default ">
          <div className="h-[75vh] w-auto flex my-auto flex-row  ml-[4vw]">
            {/* <HomePortfolio /> */}
            {oddIndexData.map((item, index) => (
              <div
                key={index}
                className="panel w-[30vw] boxes z-50 h-[50%] relative overflow-hidden cursor-pointer"
              >
                <Image
                  src={item.entry.project_bg_image}
                  width={500}
                  height={500}
                  alt="ima"
                  className="h-full w-full"
                />
                <Link href={`/portfolios/${item.slug}`}>
                  <div className="overlay absolute inset-0 w-full h-full left-[100%] bg-[#f2f3f2] text-white z-10"></div>
                  <div className="textOverlay absolute inset-0 w-full h-full flex flex-col justify-center items-center text-[#534e50] left-[100%] z-20 text-4xl ">
                    <div className=" text-sm font-semibold mb-2 text-[#191718]">
                      {item.entry.client_name}
                    </div>
                    <div className=" text-3xl font-semibold ">
                      {item.entry.headline1}
                    </div>
                    <div className=" text-3xl font-semibold mb-[1.5vh] ">
                      {item.entry.headline2}
                    </div>

                    <div className="text-sm font-semibold mt-6">
                      {item.entry.portfolio_category}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
            {evenIndexData.map((item, index) => (
              <div
                key={index}
                className="panel w-[30vw] boxes z-50 h-[50%] relative overflow-hidden cursor-pointer"
              >
                <Image
                  src={item.entry.project_bg_image}
                  width={500}
                  height={500}
                  alt="ima"
                  className="h-full w-full"
                />
                <Link href={`/portfolios/${item.slug}`}>
                  <div className="overlay absolute inset-0 w-full h-full left-[100%] bg-[#f2f3f2] text-white z-10"></div>
                  <div className="textOverlay absolute inset-0 w-full h-full flex flex-col justify-center items-center text-[#534e50] left-[100%] z-20 text-4xl ">
                    <div className=" text-sm font-semibold mb-2 text-[#191718]">
                      {item.entry.client_name}
                    </div>
                    <div className=" text-3xl font-semibold ">
                      {item.entry.headline1}
                    </div>
                    <div className=" text-3xl font-semibold mb-[1.5vh] ">
                      {item.entry.headline2}
                    </div>

                    <div className="text-sm font-semibold mt-6">
                      {item.entry.portfolio_category}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="panel h-[75vh] my-auto w-[96vw] pr-[4vw]   flex-shrink-0 ">
            <HomeFooter />
          </div>
          <div className="drag-proxy invisible absolute"></div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
