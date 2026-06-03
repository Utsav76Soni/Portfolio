"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hover3d?: boolean;
  glow?: boolean;
}

export function GlassCard({
  children,
  className,
  hover3d = true,
  glow = false,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={
        hover3d
          ? {
              y: -8,
              rotateX: 2,
              rotateY: -2,
              transition: { duration: 0.3 },
            }
          : undefined
      }
      className={cn(
        "glass group relative overflow-hidden rounded-2xl p-6 transition-shadow duration-300",
        hover3d && "perspective-1000",
        glow && "hover:glow-blue",
        className
      )}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
