import React from "react";
import Image from "next/image";
import linkBtn from "@/assets/images/linkBtn.png";
import { FaBehance, FaFacebook } from "react-icons/fa";
import { LiaCopyright } from "react-icons/lia";

import { FaTwitter } from "react-icons/fa";

import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const HomeFooter = () => {
  return (
    <div className="px-[6.5vw] flex h-full gap-24 bg-yellowBg ">
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
          <div className="flex gap-1">
            <FaTwitter className="bg-gray-900 rounded-full p-1 text-white" />
            <FaFacebook className="bg-gray-900 rounded-full p-1 text-white" />
            <FaInstagram className="bg-gray-900 rounded-full p-1 text-white" />
            <FaLinkedinIn className="bg-gray-900 rounded-full p-1 text-white" />
            <FaBehance className="bg-gray-900 rounded-full p-1 text-white" />
          </div>
        </div>
      </div>
      <div className="pt-[9.5vh] pb-[10vh] flex flex-col justify-between">
        <div>
          <div className="text-xl font-semibold">Our Services:</div>
          <div className="text-xl ">
            <li className="list-none"> Brand Insights and Audit</li>
            <li className="list-none"> Brand Strategy and Positioning</li>
            <li className="list-none"> Brand Architecture</li>
            <li className="list-none"> Brand Story and Narratives</li>
            <li className="list-none"> Voice and Communication</li>
            <li className="list-none"> Naming and Identity System</li>
            <li className="list-none"> Branded Environment</li>
            <li className="list-none"> Brand Internalization</li>
            <li className="list-none"> Brand Governance</li>
          </div>
        </div>
        <div>
          <div className="text-xl font-semibold">Find Us:</div>
          <div className="text-xl ">(^) Google Map</div>
        </div>
        <div>
          <div className="flex items-center gap-1">
            <LiaCopyright className="h-5 w-5" />
            <div className="text-xl font-semibold">Copyright 2024</div>
          </div>
          <div className="text-xl ">All Rights Reserved</div>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
