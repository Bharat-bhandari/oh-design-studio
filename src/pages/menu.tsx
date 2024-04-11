import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const MainMenu = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(".overlay", { xPercent: -101 });
    },
    { scope: container }
  );

  const onMouseEnter = (className: string) => {
    gsap.to(`.${className} .overlay`, { xPercent: 0 });
  };

  const onMouseLeave = (className: string) => {
    gsap.to(`.${className} .overlay`, { xPercent: -101 });
  };

  return (
    <>
      <div ref={container} className="h-screen flex">
        <div className=" my-auto text-3xl w-full flex text-white panel h-[75vh] flex-col items-center">
          <div className="justify-between flex flex-col h-full overflow-hidden">
            <div
              className=" w-fit text-[13.5vh] leading-none font-semibold text-black us px-2 relative"
              onMouseEnter={() => onMouseEnter("us")}
              onMouseLeave={() => onMouseLeave("us")}
            >
              <div className="w-fit">
                Us.
                <div className="bg-yellowMenu absolute w-full  h-full top-0 left-0 -z-10 overlay"></div>
              </div>
            </div>
            <div
              className=" text-[13.5vh] leading-none  w-fit font-semibold text-black px-2 work relative"
              onMouseEnter={() => onMouseEnter("work")}
              onMouseLeave={() => onMouseLeave("work")}
            >
              <div className="w-fit">
                Work.
                <div className="bg-yellowMenu absolute w-full  h-full top-0 left-0 -z-10 overlay"></div>
              </div>
            </div>
            <div
              className=" text-[13.5vh] leading-none  w-fit font-semibold thoughts text-black px-2 relative"
              onMouseEnter={() => onMouseEnter("thoughts")}
              onMouseLeave={() => onMouseLeave("thoughts")}
            >
              <div className="w-fit">
                Thoughts.
                <div className="bg-yellowMenu absolute w-full  h-full top-0 left-0 -z-10 overlay"></div>
              </div>
            </div>
            <div
              className=" text-[13.5vh] leading-none  w-fit font-semibold career text-black px-2 relative"
              onMouseEnter={() => onMouseEnter("career")}
              onMouseLeave={() => onMouseLeave("career")}
            >
              <div className="w-fit">
                Careers.
                <div className="bg-yellowMenu absolute w-full  h-full top-0 left-0 -z-10 overlay"></div>
              </div>
            </div>
            <div
              className=" text-[13.5vh] leading-none  w-fit font-semibold contact text-black px-2 relative"
              onMouseEnter={() => onMouseEnter("contact")}
              onMouseLeave={() => onMouseLeave("contact")}
            >
              <div className="w-fit">
                Contact.
                <div className="bg-yellowMenu absolute w-full  h-full top-0 left-0 -z-10 overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainMenu;
