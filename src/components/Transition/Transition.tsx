import React, { ReactNode, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Transition = ({ children }: { children: ReactNode }) => {
  const [displayChildren, setDisplayChildren] = useState(children);

  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (
      (children as React.ReactElement).key !==
      (displayChildren as React.ReactElement).key
    ) {
      const containerElement = container.current;

      console.log(containerElement);

      if (containerElement) {
        const sections: HTMLDivElement[] = Array.from(
          containerElement.querySelectorAll(".panel")
        );

        const totalContentWidth = sections.length * window.innerWidth;

        const helloElement = containerElement.querySelector(".hello");

        if (helloElement) {
          gsap
            .to(helloElement, {
              x: -totalContentWidth,
              duration: 0.5,
              ease: "power2.in",
            })
            .then(() => {
              setDisplayChildren(children);
            });
        }
      }
    }
  }, [children]);

  return <div ref={container}>{displayChildren}</div>;
};

export default Transition;
