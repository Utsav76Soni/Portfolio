"use client";

import { motion } from "framer-motion";
import { useMousePosition } from "@/hooks/use-mouse-position";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useEffect } from "react";

export function CustomCursor() {
  const { x, y } = useMousePosition();
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    if (!isDesktop) return;
    document.body.classList.add("custom-cursor-active");
    return () => document.body.classList.remove("custom-cursor-active");
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden mix-blend-difference lg:block"
        animate={{ x: x - 8, y: y - 8 }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      >
        <div className="h-4 w-4 rounded-full bg-primary" />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden lg:block"
        animate={{ x: x - 20, y: y - 20 }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8 }}
      >
        <div className="h-10 w-10 rounded-full border border-primary/40 bg-primary/5" />
      </motion.div>
    </>
  );
}
