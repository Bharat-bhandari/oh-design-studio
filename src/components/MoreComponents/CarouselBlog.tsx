import * as React from "react";

import linkBtn from "@/assets/images/linkBtn.png";

// import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

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
      "Since Michael Ferdman founded firstborn in 1997, weve seen the digital landscape change r vel sequi eligendi amet tempore autem placeat doloremque perferendis sunt excepturi qui dolorem explicabo sit vitae officia fugit! Doloribus sapiente, ipsum nihil placeat nulla enim tempore fuga qui nostrum, sunt ex quam sed accusantium esse incidunt culpa illum numquam minus quis dignissimos sequi. Blanditiis quia veritatis quasi iste labore similique soluta tempora..",
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
    id: 4,
    title: "Branding & Design Blog",
    subject: "Header or subject",
    content:
      "Since Michael Ferdman founded firstborn in 1997, weve seen the digital landscape change dramatically. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint consequuntur, consequatur vel sequi eligendi amet tempore autem placeat doloremque perferendis sunt excepturi qui dolorem explicabo sit vitae officia fugit! Doloribus sapiente, ipsum nihil placeat nulla enim tempore fuga qui nostrum, sunt ex quam sed accusantium esse incidunt culpa illum numquam minus quis dignissimos sequi. Blanditiis quia veritatis quasi iste labore similique soluta tempora..",
  },
  {
    id: 5,
    title: "Branding & Design Blog",
    subject: "Header or subject",
    content:
      "Since Michael Ferdman founded firstborn in 1997, weve seen the digital landscape change dramatically. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint consequuntur, consequatur vel sequi eligendi amet tempore autem placeat doloremque perferendis sunt excepturi qui dolorem explicabo sit vitae officia fugit! Doloribus sapiente, ipsum nihil placeat nulla enim tempore fuga qui nostrum, sunt ex quam sed accusantium esse incidunt culpa illum numquam minus quis dignissimos sequi. Blanditiis quia veritatis quasi iste labore similique soluta tempora..",
  },
  {
    id: 6,
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

  // Add more blog objects as needed
];

export default function CarouselBlog() {
  const chunks = Array.from(
    { length: Math.ceil(blogData.length / 3) },
    (_, i) => blogData.slice(i * 3, i * 3 + 3)
  );

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-[87vw] h-fit"
    >
      <CarouselContent className="h-[48vh]">
        {chunks.map((chunk, index) => (
          <CarouselItem key={index}>
            <div className="grid grid-cols-3 mx-[5.5vw] h-full  ">
              {chunk.map((blog, blogIndex) => (
                <div
                  key={blogIndex}
                  className={`flex flex-col gap-6 px-7 border-r border-solid border-0 border-textGray  ${
                    (blogIndex + 1) % 3 === 0 ? "border-r-0" : ""
                  }`}
                >
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <div className="mb-8">{blog.id}</div>
                      <div className="text-textGray text-2xl font-semibold">
                        <div>{blog.title}</div>
                        <div>{blog.subject}</div>
                      </div>
                      <div className="text-sm leading-4 w-[75%] mt-4 overflow-hidden">
                        {blog.content}
                      </div>
                    </div>

                    <Image src={linkBtn} alt="link" />
                  </div>
                </div>
              ))}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
