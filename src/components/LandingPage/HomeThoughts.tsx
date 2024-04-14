import Image from "next/image";
import React from "react";
import news1 from "@/assets/home/news1.png";
import news2 from "@/assets/home/news2.png";
import news3 from "@/assets/home/news3.png";

import linkBtn from "@/assets/images/linkBtn.png";

const HomeThoughts = () => {
  return (
    <div className="px-[6.5vw] h-full ">
      <div className="pt-[9.5vh] pb-[10vh] flex flex-col">
        <div className="text-textGray text-6xl font-semibold">Thoughts</div>
        <div className="mx-[5.5vw] mt-8 mb-[6.5vh] grid grid-cols-3 ">
          <div className="flex flex-col h-full gap-6 px-7 border-r border-textGray border-0 border-solid">
            <div>01</div>
            <div className="flex flex-col gap-3">
              <div className="text-textGray text-2xl">
                Branding & Design blog
                <div className="text-textGray text-2xl">Header or subject</div>
              </div>
              <div className="text-sm leading-4">
                Since Michael Ferdman founded firstborn in 1997, weve seen the
                digital landscape change dramatically. Lorem ipsum, dolor sit
                amet consectetur adipisicing elit. Sint consequuntur,
                consequatur vel sequi eligendi amet tempore autem placeat
                doloremque perferendis sunt excepturi qui dolorem explicabo sit
                vitae officia fugit! Doloribus sapiente, ipsum nihil placeat
                nulla enim tempore fuga qui nostrum, sunt ex quam sed
                accusantium esse incidunt culpa illum numquam minus quis
                dignissimos sequi. Blanditiis quia veritatis quasi iste labore
                similique soluta tempora..
              </div>
            </div>
            <Image src={linkBtn} alt="link" />
          </div>
          <div className="flex flex-col h-full gap-6 px-7 border-r border-textGray border-0 border-solid">
            <div>01</div>
            <div className="flex flex-col gap-3">
              <div className="text-textGray text-2xl">
                Branding & Design blog
                <div className="text-textGray text-2xl">Header or subject</div>
              </div>
              <div className="text-sm leading-4">
                Since Michael Ferdman founded firstborn in 1997, weve seen the
                digital landscape change dramatically. Lorem ipsum, dolor sit
                amet consectetur adipisicing elit. Sint consequuntur,
                consequatur vel sequi eligendi amet tempore autem placeat
                doloremque perferendis sunt excepturi qui dolorem explicabo sit
                vitae officia fugit! Doloribus sapiente, ipsum nihil placeat
                nulla enim tempore fuga qui nostrum, sunt ex quam sed
                accusantium esse incidunt culpa illum numquam minus quis
                dignissimos sequi. Blanditiis quia veritatis quasi iste labore
                similique soluta tempora..
              </div>
            </div>
            <Image src={linkBtn} alt="link" />
          </div>
          <div className="flex flex-col h-full gap-6 px-7 border-r border-textGray border-0 border-solid">
            <div>01</div>
            <div className="flex flex-col gap-3">
              <div className="text-textGray text-2xl">
                Branding & Design blog
                <div className="text-textGray text-2xl">Header or subject</div>
              </div>
              <div className="text-sm leading-4">
                Since Michael Ferdman founded firstborn in 1997, weve seen the
                digital landscape change dramatically. Lorem ipsum, dolor sit
                amet consectetur adipisicing elit. Sint consequuntur,
                consequatur vel sequi eligendi amet tempore autem placeat
                doloremque perferendis sunt excepturi qui dolorem explicabo sit
                vitae officia fugit! Doloribus sapiente, ipsum nihil placeat
                nulla enim tempore fuga qui nostrum, sunt ex quam sed
                accusantium esse incidunt culpa illum numquam minus quis
                dignissimos sequi. Blanditiis quia veritatis quasi iste labore
                similique soluta tempora..
              </div>
            </div>
            <Image src={linkBtn} alt="link" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeThoughts;
