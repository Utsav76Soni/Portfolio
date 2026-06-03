"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Code2, Rocket } from "lucide-react";
import { PROFILE } from "@/lib/data/profile";
import { SectionHeading } from "@/components/common/section-heading";
import { GlassCard } from "@/components/common/glass-card";

export function AboutSection() {
  return (
    <section id="about" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="About Me"
          title="Crafting Digital Excellence"
          description="Building mobile-first solutions with precision and passion."
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard glow className="h-full">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-indigo-600">
                  <Code2 className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{PROFILE.name}</h3>
                  <p className="text-sm text-primary">React Native & Full Stack Engineer</p>
                </div>
              </div>
              <p className="leading-relaxed text-muted-foreground">{PROFILE.about}</p>
              <div className="mt-8 flex gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-gradient-blue">3+</p>
                  <p className="text-xs text-muted-foreground">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-gradient-blue">10+</p>
                  <p className="text-xs text-muted-foreground">Projects Delivered</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-gradient-blue">100%</p>
                  <p className="text-xs text-muted-foreground">Client Focus</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <GlassCard className="h-full">
              <div className="mb-6 flex items-center gap-3">
                <Rocket className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Focus Areas</h3>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {PROFILE.focusAreas.map((area, i) => (
                  <motion.li
                    key={area}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3 rounded-lg border border-border/50 bg-background/30 p-3 transition-colors hover:border-primary/30 hover:bg-primary/5"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm font-medium text-foreground">{area}</span>
                  </motion.li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
