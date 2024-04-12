import React from "react";
import Image from "next/image";
import linkBtn from "@/assets/images/linkBtn.png";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const HomeFooter = () => {
  return (
    <div className="px-[6.5vw] flex h-full gap-24 ">
      <div className="pt-[9.5vh] pb-[10vh] flex flex-col justify-between">
        <div>
          <div className="text-xl font-semibold">Address:</div>
          <div className="text-xl w-52">
            402, Makani Center, 35th Linking Road, Bandra(W), 400050.
          </div>
        </div>
        <div>
          <div className="text-xl font-semibold">Phone:</div>
          <div className="text-xl ">+91 2661 6280</div>
        </div>
        <div>
          <div className="text-xl font-semibold">Inquiries:</div>
          <div className="flex items-center gap-4">
            <div className="text-xl ">Lets talk</div>
            <Image src={linkBtn} width={20} height={20} alt="link" />
          </div>
        </div>
        <div>
          <div className="text-xl font-semibold">Careers:</div>
          <div className="flex items-center gap-4">
            <div className="text-xl">View openings</div>
            <Image src={linkBtn} width={20} height={20} alt="link" />
          </div>
        </div>
        <div>
          <div className="text-xl font-semibold">Follow:</div>
          <div>
            <AiFillTwitterCircle />
            <FaFacebook />
            <FaInstagramSquare />
          </div>
        </div>
      </div>
      <div className="pt-[9.5vh] pb-[10vh]">Hello</div>
    </div>
  );
};

export default HomeFooter;
