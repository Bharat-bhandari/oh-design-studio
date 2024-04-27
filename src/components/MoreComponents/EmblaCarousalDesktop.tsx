import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import CImage1 from "@/assets/home/CImage1.png";
import CImage2 from "@/assets/home/CImage2.png";
import CImage3 from "@/assets/home/CImage3.png";

import {
  DotButton,
  useDotButton,
} from "@/components/ui/EmblaCarouselDotButton";
import Image from "next/image";

const EmblaCarousalDesktop = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  return (
    <div className="embla h-full ">
      <div className="embla__viewport h-full " ref={emblaRef}>
        <div className="embla__container h-full">
          <div className="embla__slide flex justify-center items-center h-full relative">
            <Image className="h-full w-full " src={CImage1} alt="img " />
            <div className="bottom-[6.5vh] left-[6.5vw] text-white brandText absolute">
              <div className=" text-sm font-semibold">CLIENT NAME</div>
              <div className=" text-4xl font-semibold ">WE CREATE</div>
              <div className=" text-4xl font-semibold mb-[1.5vh] ">
                GAME CHANGING BRANDS
              </div>

              <div className="text-sm text-[#fff500] font-semibold">
                GO TO PROJECT
              </div>
            </div>
          </div>
          <div className="embla__slide flex justify-center items-center h-full relative">
            <Image className="h-full w-full " src={CImage2} alt="img" />
            <div className="bottom-[6.5vh] left-[6.5vw] text-white  absolute">
              <div className=" text-sm font-semibold">CLIENT NAME</div>
              <div className=" text-4xl font-semibold ">WE CREATE</div>
              <div className=" text-4xl font-semibold mb-[1.5vh] ">
                GAME CHANGING BRANDS
              </div>

              <div className="text-sm text-[#fff500] font-semibold">
                GO TO PROJECT
              </div>
            </div>
          </div>
          <div className="embla__slide flex justify-center items-center h-full relative">
            <Image className="h-full w-full " src={CImage3} alt="img" />
            <div className="bottom-[6.5vh] left-[6.5vw] text-white  absolute">
              <div className=" text-sm font-semibold">CLIENT NAME</div>
              <div className=" text-4xl font-semibold ">WE CREATE</div>
              <div className=" text-4xl font-semibold mb-[1.5vh] ">
                GAME CHANGING BRANDS
              </div>

              <div className="text-sm text-[#fff500] font-semibold">
                GO TO PROJECT
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="embla__dots absolute bottom-[6.5vh] right-[6.5vw] flex gap-2">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={"embla__dot h-3 w-3 rounded-full border-0  cursor-pointer".concat(
              index === selectedIndex
                ? " embla__dot--selected bg-gray-200 "
                : " bg-textGray"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousalDesktop;
