import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const DURATION = 0.3;
const STAGGER = 0.025;
const FlipLink = ({ children, href }: { children: string; href: string }) => {
  return (
    <Link href={href}>
      <motion.div
        initial="initial"
        whileHover="hovered"
        animate="initial"
        transition={{
          duration: 0.5,
        }}
        className="relative block overflow-hidden outline-none font-sans text-sm"
      >
        <div>
          {children.split("").map((l: string, i: number) => (
            <motion.span
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: [0, -30],
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className=" inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </div>
        <div className="absolute inset-0 ">
          {children.split("").map((l: string, i: number) => (
            <motion.span
              variants={{
                initial: {
                  y: 30,
                },
                hovered: {
                  y: [30, 0],
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className=" inline-block "
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </Link>
  );
};

export default FlipLink;
