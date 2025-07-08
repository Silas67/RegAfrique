"use client";
import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import CornerNavGSAP from "./Corner";

export const Navbar = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  return (
    <div
      className="fixed top-0 left-0 px-8 w-full h-[10vh] flex items-center justify-center z-50 transition-all duration-300
      max-sm:pl-6 max-sm:pr-8 max-sm:py-4 py-8 text-textcolor"
    >
      <nav className="w-full flex items-center justify-between md:mx-[10px] lg:mx-[50px] ">
        <div className="w-full flex justify-between gap-10 items-center text-[12px]  ">
          {/* Logo */}
          <div className="logo-reg text-2xl text-white z-50">RegAfrique</div>

          <div className="flexcent gap-8">
            <div className="flex items-center justify-center max-sm:hidden gap-3 ">
              <div className="p-2 broder rounded-full flex items-center justify-between bg-white text-2xl">
                <Icon icon="line-md:phone-call-filled" color="black"></Icon>
              </div>
              <div>
                <p className="text-neutral-400 logo2 font-bold">Hotline 24/7</p>
                <p className="logo3 ">(+234)-908-832-8894</p>
              </div>
            </div>
            <CornerNavGSAP />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
