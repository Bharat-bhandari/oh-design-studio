import React from "react";

import logo from "@/assets/images/Logo .png";
import Menu from "@/assets/images/Menu Bar.png";

import Image from "next/image";

const Nav = () => {
  return (
    <div className="relative">
      <Image
        className="fixed top-[8.3vh] left-[6.3vw] cursor-pointer z-50"
        src={logo}
        alt="Logo"
      />

      <Image
        className="fixed top-[8.3vh] right-[6.3vw] cursor-pointer z-50"
        src={Menu}
        alt="Menu"
      />
    </div>
  );
};

export default Nav;
