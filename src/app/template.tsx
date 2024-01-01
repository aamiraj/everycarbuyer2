"use client"

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

const Template = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <div style={{ overflow: "hidden" }}>
        <motion.main key={pathname} variants={variants} animate="in" initial="out" exit="out">
          {children}
        </motion.main>
    </div>
  );
};

const variants = {
  out: {
    opacity: 0,
    y: 40,
    transition: {
      duration: 1,
    },
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
};

export default Template;
