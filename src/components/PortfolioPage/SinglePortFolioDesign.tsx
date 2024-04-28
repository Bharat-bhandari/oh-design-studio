"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { usePathname } from "next/navigation";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useContext, useRef } from "react";
import Link from "next/link";
import { TransitionContext } from "@/context/TransitionContext";

import { Draggable } from "gsap/dist/Draggable";

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
  const container = useRef<HTMLDivElement>(null);

  const pathname = usePathname();

  const { timeline } = useContext(TransitionContext);

  const { setPreviousRoute } = useContext(TransitionContext);

  useGSAP(
    () => {
      // Scrolling

      const sections: HTMLDivElement[] = gsap.utils.toArray(".panel");

      const amountToScroll = 100 * (sections.length - 1);

      let maxWidth = 0;

      const getMaxWidth = () => {
        maxWidth = 0;
        sections.forEach((section) => {
          maxWidth += section.offsetWidth;
        });
      };

      let scrollWidth: number = maxWidth;

      if (container.current) {
        scrollWidth = container.current.scrollWidth;
      }

      getMaxWidth();
      ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

      let scrollTween = gsap.to(sections, {
        // x: () => `-${maxWidth - window.innerWidth}`,
        // xPercent: -amountToScroll, // amount to scroll

        x: () => -(scrollWidth - document.documentElement.clientWidth) + "px",

        ease: "none",
      });

      let horizontalScroll = ScrollTrigger.create({
        animation: scrollTween,
        trigger: container.current,
        pin: true,
        // snap: 1 / (sections.length - 1),
        start: "center center",
        scrub: 3,
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
      <div ref={container} id="mainContainer" className="invisible">
        <div className="flex h-screen hello cursor-default ">
          <div className="panel h-[75vh] my-auto  w-[46vw] bg-yellowBg ml-[4vw] flex-shrink-0 ">
            <div className=" flex flex-col justify-center h-full pl-[18%] pr-[10%]">
              <div className="text-[10vh] font-semibold text-textGray mb-6">
                Tata Housing
              </div>
              <div className="mb-6 hidden lg:block text-sm lg:text-base ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                laboriosam repellat unde numquam nemo. Tempore adipisci impedit
                aperiam neque. Accusantium possimus, tempore beatae vel iusto,
                nostrum debitis recusandae culpa cumque magnam nulla, nihil quo
                nobis ex architecto praesentium at placeat quaerat
                necessitatibus sapiente maxime voluptatibus veniam. Architecto
                et doloremque porro itaque, perspiciatis sapiente consequuntur
                tenetur voluptates, nihil dolor qui accusantium ut. Architecto
                alias numquam animi earum
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

          {images.map((image, index) => (
            <div key={index} className="panel h-[75vh] my-auto flex-shrink-0">
              <Image
                src={image.src}
                alt={image.alt}
                className="h-full w-full"
              />
            </div>
          ))}
          <div className="panel h-[80vh] my-auto w-[25vw] flex-shrink-0 flex justify-center items-end">
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
