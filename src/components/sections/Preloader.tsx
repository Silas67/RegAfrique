"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Preloader = ({ onFinish }: { onFinish: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center px-6 scale-[0.6]">
      {/* Animated Logo */}
      <motion.div
        initial={{ letterSpacing: "10px", scale: 0.6 }}
        animate={{ letterSpacing: "0px", scale: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="text-white text-4xl md:text-5xl font-bold mb-6 logo-reg"
      >
        Regafrique
      </motion.div>

      {/* Progress Bar */}
      <div className="w-full max-w-[200px] h-[4px] bg-neutral-700 rounded overflow-hidden">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default Preloader;
