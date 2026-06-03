"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { PROFILE } from "@/lib/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-background/80">
      <div className="section-padding mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <p className="flex flex-wrap items-center justify-center gap-1 text-sm text-muted-foreground sm:text-base">
            Designed & Developed by{" "}
            <span className="font-semibold text-foreground">{PROFILE.name}</span>
            <Heart className="mx-1 h-4 w-4 fill-primary text-primary" aria-hidden />
          </p>
          <p className="max-w-md text-sm italic text-primary/80">
            &ldquo;{PROFILE.footerTagline}&rdquo;
          </p>
          <p className="text-xs text-muted-foreground">
            © {year} {PROFILE.name}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
