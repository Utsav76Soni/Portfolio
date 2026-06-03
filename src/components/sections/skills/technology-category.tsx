"use client";

import { motion } from "framer-motion";
import type { TechnologySection } from "@/types";
import { TechLogo } from "@/components/common/tech-logo";
import { cn } from "@/lib/utils";

interface TechnologyCategoryProps {
  section: TechnologySection;
  index: number;
}

export function TechnologyCategory({ section, index }: TechnologyCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="space-y-6"
    >
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <h3 className="shrink-0 text-lg font-semibold text-foreground sm:text-xl">
          {section.title}
        </h3>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {section.technologies.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.35 }}
            whileHover={{ y: -6, scale: 1.03 }}
            className={cn(
              "group flex flex-col items-center gap-3 rounded-2xl border border-border/60 bg-card/80 p-5 transition-all duration-300",
              "hover:border-primary/40 hover:bg-primary/5 hover:shadow-[0_0_24px_var(--electric-glow)]"
            )}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-background/80 transition-transform group-hover:scale-110">
              <TechLogo icon={tech.icon} name={tech.name} size="lg" />
            </div>
            <span className="text-center text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground sm:text-sm">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
