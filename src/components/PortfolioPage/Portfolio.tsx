import { useMemo, useRef, useContext, useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Draggable } from "gsap/dist/Draggable";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import HomeFooter from "../LandingPage/HomeFooter";
import { TransitionContext } from "@/context/TransitionContext";

type PortfolioEntry = {
  title: string;
  client_name: string;
  headline1: string;
  headline2: string;
  portfolio_category: string;
  description: string;
  project_bg_image: string;
};

type PortfolioData = {
  slug: string;
  entry: PortfolioEntry;
};

type Portfolios = PortfolioData[];

gsap.registerPlugin(ScrollTrigger, Draggable);

const Portfolio = () => {
  const container = useRef<HTMLDivElement>(null);
  const { timeline, setPreviousRoute } = useContext(TransitionContext);
  const pathname = usePathname();

  const [portfolioData, setPortfolioData] = useState<Portfolios>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/portfolio");
        const data = await response.json();
        setPortfolioData(data);
      } catch (error) {
        console.error("Error fetching carousel data:", error);
      }
    };

    fetchData();
  }, []);

  useGSAP(
    () => {
      // Scroll and drag handling logic
      const sections: HTMLDivElement[] = gsap.utils.toArray(".panel");

      let maxWidth = 0;
      const getMaxWidth = () => {
        maxWidth = sections.reduce(
          (acc, section) => acc + section.offsetWidth,
          0
        );
      };

      getMaxWidth();
      ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

      const scrollTween = gsap.to(sections, {
        x: () => `-${maxWidth - window.innerWidth}`,
        ease: "none",
      });

      const horizontalScroll = ScrollTrigger.create({
        animation: scrollTween,
        trigger: container.current,
        pin: true,
        start: "center center",
        scrub: 2,
        end: () => `+=${maxWidth}`,
        invalidateOnRefresh: true,
      });

      const dragRatio = maxWidth / (maxWidth - window.innerWidth);

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

  const renderEvenPortfolioItems = useMemo(
    () =>
      portfolioData.map(
        (item, index) =>
          index % 2 === 0 && (
            <div
              key={index}
              className=" w-[32vw] boxes z-50 h-full relative overflow-hidden cursor-pointer"
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
          )
      ),
    [portfolioData]
  );

  const renderOddPortfolioItems = useMemo(
    () =>
      portfolioData.map(
        (item, index) =>
          index % 2 !== 0 && (
            <div
              key={index}
              className=" w-[32vw] boxes z-50 h-full relative overflow-hidden cursor-pointer"
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
          )
      ),
    [portfolioData]
  );

  return (
    <div ref={container} id="mainContainer" className="invisible">
      <div className="flex h-screen hello cursor-default ">
        <div className="panel h-[75vh] w-auto flex my-auto flex-col">
          {/* <HomePortfolio /> */}
          <div className="flex flex-row h-[50%] ml-[4vw]">
            {renderEvenPortfolioItems}
          </div>
          <div className="flex flex-row h-[50%] ml-[4vw]">
            {renderOddPortfolioItems}
          </div>
        </div>
        <div className="panel h-[75vh] my-auto w-[96vw] pr-[4vw]   flex-shrink-0 ">
          <HomeFooter />
        </div>
        <div className="drag-proxy invisible absolute"></div>
      </div>
    </div>
  );
};

export default Portfolio;
