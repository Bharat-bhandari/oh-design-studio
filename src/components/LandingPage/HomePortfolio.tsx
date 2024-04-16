// import React from "react";

// const HomePortfolio = () => {
//   return (
//     <div className="grid grid-cols-3 h-full">
//       <div className="bg-blue-400">Hello</div>
//       <div className="bg-yellow-400">Hello</div>
//       <div className="bg-red-400">Hello</div>
//       <div className="bg-green-400">Hello</div>
//       <div className="bg-pink-400">Hello</div>
//       <div className="bg-purple-400">Hello</div>
//     </div>
//   );
// };

// export default HomePortfolio;

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HomePortfolio = () => {
  const container = useRef();

  useGSAP(
    () => {
      const closestEdge = (x, y, w, h) => {
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

      const distMetric = (x, y, x2, y2) => {
        const xDiff = x - x2;
        const yDiff = y - y2;
        return xDiff * xDiff + yDiff * yDiff;
      };

      const boxes = document.querySelectorAll(".boxes");

      boxes.forEach((box) => {
        box.addEventListener("mouseenter", handleMouseEnter);
        box.addEventListener("mouseleave", handleMouseLeave);
      });

      function handleMouseEnter(e) {
        const x = e.pageX - this.offsetLeft;
        const y = e.pageY - this.offsetTop;
        const edge = closestEdge(x, y, this.clientWidth, this.clientHeight);
        const overlay = this.querySelector(".overlay");

        switch (edge) {
          case "left":
            overlay.style.top = "0%";
            overlay.style.left = "-100%";
            gsap.to(overlay, { duration: 0.5, left: "0%" });
            break;
          case "right":
            overlay.style.top = "0%";
            overlay.style.left = "100%";
            gsap.to(overlay, { duration: 0.5, left: 0 });
            break;
          case "top":
            overlay.style.top = "-100%";
            overlay.style.left = "0%";
            gsap.to(overlay, { duration: 0.5, top: "0%" });
            break;
          case "bottom":
            overlay.style.top = "100%";
            overlay.style.left = "0%";
            gsap.to(overlay, { duration: 0.5, top: "0%" });
            break;
          default:
            break;
        }
      }

      function handleMouseLeave(e) {
        const x = e.pageX - this.offsetLeft;
        const y = e.pageY - this.offsetTop;
        const edge = closestEdge(x, y, this.clientWidth, this.clientHeight);
        const overlay = this.querySelector(".overlay");

        switch (edge) {
          case "left":
            gsap.to(overlay, { duration: 0.5, left: "-100%" });
            break;
          case "right":
            gsap.to(overlay, { duration: 0.5, left: "100%" });
            break;
          case "top":
            gsap.to(overlay, { duration: 0.5, top: "-100%" });
            break;
          case "bottom":
            gsap.to(overlay, { duration: 0.5, top: "100%" });
            break;
          default:
            break;
        }
      }

      // return () => {
      //   // Cleanup event listeners when component unmounts
      //   boxes.forEach((box) => {
      //     box.removeEventListener("mouseenter", handleMouseEnter);
      //     box.removeEventListener("mouseleave", handleMouseLeave);
      //   });
      // };
    },
    { scope: container }
  );

  return (
    <div ref={container}>
      <h1 className="text-center font-roboto-condensed">
        Direction Aware Hover
      </h1>
      <div className="container mx-auto cf">
        <div className="boxes relative w-1/4 h-48 bg-yellow-400 m-2 float-left overflow-hidden cursor-pointer">
          <img
            className="da-image object-cover w-full h-full"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/24345/da_image1.jpg"
            alt=""
          />
          <div className="overlay absolute inset-0 w-full h-full left-[100%] bg-black bg-opacity-80 text-white z-10">
            {" "}
            Hello
          </div>
        </div>
        {/* Repeat for other boxes */}
      </div>
    </div>
  );
};

export default HomePortfolio;
