"use client";
import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      <motion.div
        initial={{ letterSpacing: "10px", scale: 0.4 }}
        animate={{ letterSpacing: 0, scale: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="text-white text-4xl font-bold animate-pulse logo-reg"
      >
        Regafrique
      </motion.div>
    </div>
  );
};

export default Loading;
