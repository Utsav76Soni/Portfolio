"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, FolderOpen } from "lucide-react";
import { PROFILE } from "@/lib/data/profile";
import { AnimatedBackground } from "@/components/effects/animated-background";
import { Button } from "@/components/ui/button";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24 pb-16"
    >
      <AnimatedBackground />

      <div className="relative z-10 mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center"
        >
          <motion.div variants={item}>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary sm:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Available for opportunities
            </span>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 text-sm font-medium text-muted-foreground sm:text-base"
          >
            {PROFILE.name}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-3 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span className="text-gradient glow-text">{PROFILE.title}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {PROFILE.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="#projects">
                <FolderOpen />
                View Projects
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
              <Link href="#contact">
                <Mail />
                Contact Me
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <a href={PROFILE.resumeUrl} download>
                <Download />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary"
        aria-label="Scroll to about section"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="h-6 w-6" />
        </motion.div>
      </motion.a>
    </section>
  );
}
