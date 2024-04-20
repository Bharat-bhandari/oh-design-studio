import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import linkBtn from "@/assets/images/linkBtn.png";
import UpArrow from "@/assets/home/UpArrow.png";
import DownArrow from "@/assets/home/DownArrow.png";
import gsap from "gsap";

import CarouselBlog from "../MoreComponents/CarouselBlog";

const blogData = [
  {
    id: 1,
    title: "Branding & Design Blog",
    subject: "Header or subject",
    content:
      "Since Michael Ferdman founded firstborn in 1997, weve seen the digital landscape change dramatically. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint consequuntur, consequatur vel sequi eligendi amet tempore autem placeat doloremque perferendis sunt excepturi qui dolorem explicabo sit vitae officia fugit! Doloribus sapiente, ipsum nihil placeat nulla enim tempore fuga qui nostrum, sunt ex quam sed accusantium esse incidunt culpa illum numquam minus quis dignissimos sequi. Blanditiis quia veritatis quasi iste labore similique soluta tempora..",
  },
  {
    id: 2,
    title: "Branding & Design Blog",
    subject: "Header or subject",
    content:
      "Since Michael Ferdman founded firstborn in 1997, weve seen the digital landscape change dramatically. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint consequuntur, consequatur vel sequi eligendi amet tempore autem placeat doloremque perferendis sunt excepturi qui dolorem explicabo sit vitae officia fugit! Doloribus sapiente, ipsum nihil placeat nulla enim tempore fuga qui nostrum, sunt ex quam sed accusantium esse incidunt culpa illum numquam minus quis dignissimos sequi. Blanditiis quia veritatis quasi iste labore similique soluta tempora..",
  },
  {
    id: 3,
    title: "Branding & Design Blog",
    subject: "Header or subject",
    content:
      "Since Michael Ferdman founded firstborn in 1997, weve seen the digital landscape change dramatically. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint consequuntur, consequatur vel sequi eligendi amet tempore autem placeat doloremque perferendis sunt excepturi qui dolorem explicabo sit vitae officia fugit! Doloribus sapiente, ipsum nihil placeat nulla enim tempore fuga qui nostrum, sunt ex quam sed accusantium esse incidunt culpa illum numquam minus quis dignissimos sequi. Blanditiis quia veritatis quasi iste labore similique soluta tempora..",
  },
  {
    id: 4,
    title: "Branding & Design Blog",
    subject: "Header or subject",
    content:
      "Since Michael Ferdman founded firstborn in 1997, weve seen the digital landscape change dramatically. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint consequuntur, consequatur vel sequi eligendi amet tempore autem placeat doloremque perferendis sunt excepturi qui dolorem explicabo sit vitae officia fugit! Doloribus sapiente, ipsum nihil placeat nulla enim tempore fuga qui nostrum, sunt ex quam sed accusantium esse incidunt culpa illum numquam minus quis dignissimos sequi. Blanditiis quia veritatis quasi iste labore similique soluta tempora..",
  },
  {
    id: 12,
    title: "Branding & Design Blog",
    subject: "Header or subject",
    content:
      "Since Michael Ferdman founded firstborn in 1997, weve seen the digital landscape change dramatically. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint consequuntur, consequatur vel sequi eligendi amet tempore autem placeat doloremque perferendis sunt excepturi qui dolorem explicabo sit vitae officia fugit! Doloribus sapiente, ipsum nihil placeat nulla enim tempore fuga qui nostrum, sunt ex quam sed accusantium esse incidunt culpa illum numquam minus quis dignissimos sequi. Blanditiis quia veritatis quasi iste labore similique soluta tempora..",
  },
  {
    id: 14,
    title: "Branding & Design Blog",
    subject: "Header or subject",
    content:
      "Since Michael Ferdman founded firstborn in 1997, weve seen the digital landscape change dramatically. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint consequuntur, consequatur vel sequi eligendi amet tempore autem placeat doloremque perferendis sunt excepturi qui dolorem explicabo sit vitae officia fugit! Doloribus sapiente, ipsum nihil placeat nulla enim tempore fuga qui nostrum, sunt ex quam sed accusantium esse incidunt culpa illum numquam minus quis dignissimos sequi. Blanditiis quia veritatis quasi iste labore similique soluta tempora..",
  },
  // Add more blog objects as needed
];

const HomeThoughts = () => {
  return (
    <div className="px-[6.5vw] h-full flex overflow-hidden cursor-default relative ">
      <div className="pt-[9.5vh] pb-[6.5vh] flex justify-between flex-col ">
        <div className="text-textGray text-6xl font-semibold">Thoughts</div>
        {/* <div
          className="grid grid-cols-3 mx-[5.5vw] bg-blue-200"
        >
          {blogData.slice(startIndex, startIndex + 3).map((blog, i) => (
            <div
              key={blog.id}
              className={`flex flex-col gap-6 px-7 border-r border-solid border-0 border-textGray  ${
                (i + 1) % 3 === 0 ? "border-r-0" : ""
              }`}
            >
              <div>{blog.id}</div>
              <div className="flex flex-col gap-3">
                <div className="text-textGray text-2xl font-semibold">
                  {blog.title}
                </div>
                <div className="text-sm leading-4 w-[75%] h-[28vh] mt-4 overflow-hidden">
                  {blog.content}
                </div>
              </div>
              <Image src={linkBtn} alt="link" />
            </div>
          ))}
        </div> */}

        <CarouselBlog />
      </div>
      {/* <div className="absolute right-[6.5vw] bottom-[6.5vh] flex flex-col">
        <Image src={UpArrow} alt="Up Arrow" className="cursor-pointer" />
        <Image src={DownArrow} alt="Down Arrow" className="cursor-pointer" />
      </div> */}
    </div>
  );
};

export default HomeThoughts;
