"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { usePathname } from "next/navigation";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { TransitionContext } from "@/context/TransitionContext";

import { Draggable } from "gsap/dist/Draggable";

import { useParams } from "next/navigation";

interface Params {
  [key: string]: string;
}

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

import {
  FaBehance,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { LiaCopyright } from "react-icons/lia";

import Image from "next/image";

const images = [
  { src: require("@/assets/portfolio/01.jpg"), alt: "Image 1" },
  { src: require("@/assets/portfolio/02.jpg"), alt: "Image 2" },
  { src: require("@/assets/portfolio/03.jpg"), alt: "Image 3" },
  { src: require("@/assets/portfolio/04.jpg"), alt: "Image 4" },
  { src: require("@/assets/portfolio/05.jpg"), alt: "Image 5" },
  { src: require("@/assets/portfolio/06.jpg"), alt: "Image 6" },
  { src: require("@/assets/portfolio/07.jpg"), alt: "Image 7" },
  { src: require("@/assets/portfolio/08.jpg"), alt: "Image 8" },
  { src: require("@/assets/portfolio/09.jpg"), alt: "Image 9" },
  { src: require("@/assets/portfolio/10.jpg"), alt: "Image 10" },
  // Add more images as needed
];

gsap.registerPlugin(useGSAP, ScrollTrigger, Draggable);

const SinglePortFolioDesign = () => {
  // Get the Data

  const params = useParams<Params>();
  const [slug, setSlug] = useState<string>("");

  useEffect(() => {
    if (params?.slug) {
      setSlug(params.slug);
    }
  }, [params]);

  console.log(slug);

  const [singlePortfolio, setSinglePortfolio] = useState<PortfolioEntry | null>(
    null
  );

  console.log("value==", singlePortfolio);

  useEffect(() => {
    const fetchData = async () => {
      if (slug.trim() !== "") {
        // Check if slug is not empty or whitespace
        try {
          const response = await fetch("/api/single-portfolio", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ slug: slug }),
          });
          const data = await response.json();
          setSinglePortfolio(data);
        } catch (error) {
          console.error("Error fetching portfolio data:", error);
        }
      }
    };

    fetchData();
  }, [slug]);

  // Gsap Animation ----------------------------------
  const container = useRef<HTMLDivElement>(null);

  const pathname = usePathname();

  const { timeline } = useContext(TransitionContext);

  const { setPreviousRoute } = useContext(TransitionContext);

  let maxWidth = 0;

  useGSAP(
    () => {
      // Scrolling

      const sections: HTMLDivElement[] = gsap.utils.toArray(".panel");

      const amountToScroll = 100 * (sections.length - 1);

      const getMaxWidth = () => {
        maxWidth = 0;
        sections.forEach((section) => {
          maxWidth += section.offsetWidth;
        });
      };

      // let scrollWidth: number = maxWidth;

      // if (container.current) {
      //   scrollWidth = container.current.scrollWidth;
      // }

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

      const screenWidth = window.innerWidth;

      const tl = gsap.timeline();

      const init = () => {
        if (singlePortfolio !== null) {
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
        }
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
    { scope: container, dependencies: [singlePortfolio] }
  );

  return (
    <>
      <div ref={container} id="mainContainer" className="invisible">
        <div className="flex h-screen hello cursor-default ">
          <div className="panel h-[75vh] my-auto  w-[46vw] bg-yellowBg ml-[4vw] flex-shrink-0 ">
            <div className=" flex flex-col justify-center h-full pl-[18%] pr-[10%]">
              <div className="text-[10vh] font-semibold text-textGray mb-6">
                {singlePortfolio?.client_name}
              </div>
              <div className="mb-6 hidden lg:block text-sm lg:text-base ">
                {singlePortfolio?.description}
              </div>
              <div className="mb-6  lg:hidden text-sm  ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                laboriosam repellat unde numquam nemo. Tempore adipisci impedit
                aperiam neque.
              </div>

              <div className="text-sm lg:text-base">
                Sound Interesting? Scroll for more team vibes.
              </div>
            </div>
          </div>

          {singlePortfolio?.portfolio_images
            .filter((image) => image !== null)
            .map((image, index) => (
              <div
                key={index}
                className="panel h-[75vh] w-fit my-auto flex-shrink-0"
              >
                {image && (
                  <Image
                    src={image}
                    alt="portfolio image"
                    width={1000}
                    height={1000}
                    // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="h-full w-fit"
                    priority={true}
                  />
                )}
              </div>
            ))}
          <div className="panel h-[75vh] my-auto w-[20vw] flex-shrink-0 flex justify-center items-end">
            <div className="h-60 flex flex-col justify-between">
              <div className="text-lg w-48">
                402, Makani Center, 35th Linking Road, Bandra(W), 400050.
              </div>
              <div>Leave a message</div>
              <div>
                <div className="flex gap-1">
                  <FaTwitter className="bg-gray-900 rounded-full p-1 text-white" />
                  <FaFacebook className="bg-gray-900 rounded-full p-1 text-white" />
                  <FaInstagram className="bg-gray-900 rounded-full p-1 text-white" />
                  <FaLinkedinIn className="bg-gray-900 rounded-full p-1 text-white" />
                  <FaBehance className="bg-gray-900 rounded-full p-1 text-white" />
                </div>
              </div>
              <div className="flex items-center gap-1  mt-8">
                <LiaCopyright className="h-5 w-5" />
                <div className="text-lg font-semibold">Copyright 2024</div>
              </div>
            </div>
          </div>

          <div className="drag-proxy invisible absolute"></div>
        </div>
      </div>
    </>
  );
};

export default SinglePortFolioDesign;
