import React from "react";

const FormPage = () => {
  return (
    <div className="px-[6.5vw] h-full relative  ">
      <div className="absolute top-[6vh] font-semibold">
        SUBMIT YOUR APPLICATION
      </div>
      <div className="pt-[9.5vh] pb-[10vh] grid grid-cols-2">
        <div className="grid grid-cols-12 mt-4">
          <div className="col-span-4  space-y-10">
            <div>Resume/CV*</div>
            <div className="py-1">Full name*</div>
            <div className="py-1">Email*</div>
            <div className="py-1">Phone*</div>
            <div className="py-1">Current Company*</div>
          </div>
          <div className="col-span-8  space-y-10 ">
            <input className="flex" type="file" required />
            <input className="flex p-1 w-[70%]" type="name" required />
            <input className="flex p-1 w-[70%]" type="email" required />
            <input className="flex p-1 w-[70%]" type="text" required />
            <input className="flex p-1 w-[70%]" type="text" required />
          </div>
        </div>
        <div className="mt-4">
          <div className="text-lg font-semibold">LINKS</div>
          <div className="grid grid-cols-12 mt-9">
            <div className="col-span-4  space-y-10">
              <div>Portfolio URL*</div>
              <div className="py-1">Linkedin*</div>
              <div className="py-1">Other Website*</div>
            </div>
            <div className="col-span-8  space-y-10 ">
              <input className="flex p-1 w-[70%]" type="name" required />
              <input className="flex p-1 w-[70%]" type="email" required />
              <input className="flex p-1 w-[70%]" type="text" required />
            </div>
          </div>
          <div className="mt-12 font-semibold">ADDITIONAL INFORMATION</div>
          <input className="mt-4 w-[81%] h-20" type="textarea" required />
          <button className="bg-yellowBg border-0 py-2 px-5 mt-4 font-semibold">
            SUBMIT APPLICATION
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
