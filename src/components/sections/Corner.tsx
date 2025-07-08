"use client";
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export const Navlinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function CornerNavGSAP() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const pathname = usePathname();
  const [hash, setHash] = useState<string>("");

  const closeMenu = () => {
    if (tl.current) tl.current.reverse();
    setOpen(false);
  };

  // Hash Changing Utility
  useEffect(() => {
    setHash(window.location.hash);
    const handle = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handle);
    return () => window.removeEventListener("hashchange", handle);
  }, []);

  // Active Class Utility
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" && hash === "";
    }
    if (href.startsWith("#")) {
      return hash === href;
    }
    return pathname === href;
  };

  // Hash Instant Changing Function
  const handleNavClick = (href: string) => {
    setHash(href); // ✅ instantly set active
    closeMenu(); // ✅ close the menu
  };

  // Lock Scrolling When Open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  // GSAP Animation For Opening and Closing Menu
  useGSAP(() => {
    if (!menuRef.current) return;

    gsap.set(menuRef.current, {
      clipPath: "circle(0% at 92% 5%)",
    });

    tl.current = gsap.timeline({
      paused: true,
      onStart: () => {
        menuRef.current!.style.display = "flex";
        menuRef.current!.style.pointerEvents = "auto";
      },
      onReverseComplete: () => {
        menuRef.current!.style.display = "none";
        menuRef.current!.style.pointerEvents = "none";
      },
    });

    tl.current.to(menuRef.current, {
      backgroundColor: "#000",
      clipPath: "circle(150% at 100% 0%)", // expand from center
      ease: "power4.inOut",
      duration: 1,
    });
  }, []);

  // Toggle Utility Class for Opening and Closing Menu
  const toggle = () => {
    if (!tl.current) return;
    if (open) {
      tl.current.reverse();
    } else {
      tl.current.play();
    }
    setOpen(!open); // flips icon
  };

  // Function to Close Menu
  useEffect(() => {
    if (open) closeMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Fuction to Close Menu if Hash Changes
  useEffect(() => {
    const handleHashChange = () => {
      if (open) closeMenu();
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [open]);

  return (
    <>
      {/* toggle button */}
      <button
        aria-label="Toggle navigation"
        onClick={toggle}
        className="z-50 flex items-center justify-center 
                    text-white rounded-xl transition-discrete
                    duration-300"
      >
        {open ? (
          <Icon
            icon="fluent:dismiss-20-regular"
            width="18"
            height="18"
            className="z-50"
          />
        ) : (
          <Icon
            icon="fluent:apps-20-regular"
            width="18"
            height="18"
            className="z-50"
          />
        )}
      </button>

      {/* menu */}

      <div
        ref={menuRef}
        style={{
          display: "none",
          pointerEvents: "none",
          willChange: "clip-path",
        }}
        className="absolute inset-0 bg-primary
                   z-40 h-screen md:px-[100px] px-8 flex items-center justify-between max-sm:flex-col"
      >
        <div
          className="md:w-[70%] w-full h-full  flex flex-col items-start justify-center gap-10
                   text-4xl text-neutral-300"
          onClick={closeMenu}
        >
          {" "}
          {Navlinks.map((txt, idx) => {
            const active = isActive(txt.href);

            return (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "anticipate" }}
                key={idx}
              >
                <Link
                  href={txt.href}
                  onClick={() => handleNavClick(txt.href)}
                  className={`uppercase hover:tracking-wider transition-all duration-300 hover:text-primary ${
                    active ? "text-primary" : "text-white"
                  }`}
                >
                  {txt.label}
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="flex flex-col items-center justify-center flex-1 w-[30%]  h-full max-sm:hidden ">
          <div className="border-l border-white px-[50px] space-y-8">
            {" "}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "anticipate" }}
              className="flex flex-col items-start justify-center "
            >
              <h1 className="font-semibold text-xl text-white">Office</h1>
              <div className="text-sm flex-col items-center flex space-y-2">
                <span>
                  1st Floor, Kebbi Hotel, Central Business District, Abuja,
                  Nigeria
                </span>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "anticipate" }}
              className="flex flex-col items-start justify-center "
            >
              <h1 className="font-semibold text-xl text-white">Contact</h1>
              <p className="flex items-center  gap-2">
                <Icon
                  icon="line-md:phone-filled"
                  width="18"
                  height="18"
                  className="text-primary"
                />
                <span className="text-sm">+234 803 283 2962</span>
              </p>
              <p className="flex items-center gap-2">
                <Icon
                  icon="material-symbols:mail"
                  width="18"
                  height="18"
                  className="text-primary"
                />
                <span className="text-sm"> Blinkzsparks@gmail.com</span>
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "anticipate" }}
              className="flex flex-col items-start justify-center "
            >
              <h1 className="font-semibold text-xl text-white">Social</h1>
              <p className="flex items-center gap-2 text-primary">
                <Link href={"https://instagram.com"}>
                  <Icon
                    icon="line-md:instagram"
                    width="18"
                    height="18"
                    className="hover:scale-[1.2] transition-all duration-300 hover:text-white"
                  />
                </Link>

                <Link href={"https://twitter.com"}>
                  <Icon
                    icon="line-md:twitter"
                    width="18"
                    height="18"
                    className="hover:scale-[1.2] transition-all duration-300 hover:text-white"
                  />
                </Link>

                <Link href={"https://linkedin.com"}>
                  <Icon
                    icon="line-md:linkedin"
                    width="18"
                    height="18"
                    className="scale-[1] hover:scale-[1.2] transition-all duration-300 hover:text-white"
                  />
                </Link>
              </p>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-6 left-0 w-full px-8 flex flex-col items-center gap-4">
          {/* small‑screen social icons */}
          <div className="flex gap-6 sm:hidden">
            <Link href="https://instagram.com">
              <Icon
                icon="line-md:instagram"
                width="20"
                height="20"
                className="text-primary hover:text-white transition"
              />
            </Link>
            <Link href="https://twitter.com">
              <Icon
                icon="line-md:twitter"
                width="20"
                height="20"
                className="text-primary hover:text-white transition"
              />
            </Link>
            <Link href="https://linkedin.com">
              <Icon
                icon="line-md:linkedin"
                width="20"
                height="20"
                className="text-primary hover:text-white transition"
              />
            </Link>
          </div>

          {/* contact button – visible everywhere */}
          <Link
            href="#contact"
            onClick={() => handleNavClick("#contact")}
            className="w-full max-w-xs py-3 bg-primary rounded-3xl text-center
               text-black font-semibold hover:bg-secondary transition lg:hidden"
          >
            Contact&nbsp;Us
          </Link>
        </div>
      </div>
    </>
  );
}
