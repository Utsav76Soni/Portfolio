"use client";

import { motion } from "framer-motion";
import { useMousePosition } from "@/hooks/use-mouse-position";

export function MouseGradient() {
  const { x, y } = useMousePosition();

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0 opacity-40"
      animate={{
        background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(56, 189, 248, 0.15), transparent 40%)`,
      }}
      transition={{ type: "tween", duration: 0.1 }}
      aria-hidden
    />
  );
}
