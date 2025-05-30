"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import FlipLink from "./FlipLink";

import { motion } from "framer-motion";

export const Navbar = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },

  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const sideref = useRef(null);
  const [navIsLive, setNavIsLive] = useState(false);

  const handleClick = () => {
    setNavIsLive(!navIsLive);
    console.log(navIsLive);
  };

  useEffect(() => {
    document.body.style.overflow = navIsLive ? "hidden" : "auto";
  }, [navIsLive]);

  return (
    <div
      className="fixed top-0 left-0 px-8 w-full h-[10vh] flex items-center justify-center z-50 transition-all duration-300
      max-sm:pl-6 max-sm:pr-8 max-sm:py-4 text-textcolor"
    >
      <nav className="w-full flex items-center justify-between md:mx-[10px] lg:mx-[50px] ">
        <div className="w-full flex justify-between gap-10 items-center text-[12px] lg:mt-12 ">
          <div className="flexcent gap-18">
            {/* Logo */}
            <div className="w-[50px] h-[50px] bg-foreground rounded-full"></div>
            {/* Navbar */}
            <div className="md:flex gap-10 hidden ">
              {Navbar.map((link, id) => {
                // const active = pathname === link.href;
                return (
                  <div key={id}>
                    <FlipLink href={link.href}>{link.label}</FlipLink>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-center max-sm:hidden gap-3 ">
            <div className="p-2 broder rounded-full flex items-center justify-between bg-white text-2xl">
              <Icon icon="line-md:phone-call-filled" color="black"></Icon>
            </div>
            <div>
              <p className="text-neutral-400">Hotline 24/7</p>
              <p>(+234)-810-488-4845</p>
            </div>
          </div>
        </div>

        <div
          onClick={handleClick}
          className="md:hidden text-2xl flex sm:text-3xl relative transition-all duration-[2s] z-50"
        >
          {navIsLive ? (
            <Icon
              icon="line-md:menu-to-close-transition"
              width="24"
              height="24"
            />
          ) : (
            <Icon
              icon="line-md:close-to-menu-transition"
              width="24"
              height="24"
            />
          )}
        </div>
      </nav>

      <motion.aside
        ref={sideref}
        className="md:hidden fixed top-0 left-0 w-full h-screen bg-[#333333] text-white z-40 flex flex-col justify-between px-6 pt-8 pb-6"
        initial={{ x: "-100%", opacity: 0 }}
        animate={navIsLive ? { x: 0, opacity: 1 } : { x: "100%", opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* Top */}
        <div className="flex justify-between items-center">
          <div className="text-xl font-semibold">Regafrique</div>
          <button onClick={handleClick} className="text-white text-2xl">
            <Icon icon="line-md:cse" />
          </button>
        </div>

        {/* Nav Links */}
        <ul className="flex flex-col gap-6 uppercase font-inter transform -translate-y-14 text-4xl font-semibold">
          {Navbar.map((link, i) => (
            <li key={i}>
              <Link
                href={link.href}
                onClick={handleClick}
                className="hover:text-secondary transition-colors duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Bottom section */}
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <Icon icon="ri:linkedin-box-fill" width="24" height="24" />
            <Icon icon="ri:facebook-box-fill" width="24" height="24" />
          </div>
          <button className="bg-primary text-black py-2 px-4 rounded-full font-semibold">
            CONTACT US NOW
          </button>
        </div>
      </motion.aside>
    </div>
  );
};

export default Header;
