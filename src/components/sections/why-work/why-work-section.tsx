"use client";

import { motion } from "framer-motion";
import { WHY_WORK_CARDS } from "@/lib/data/why-work";
import { SectionHeading } from "@/components/common/section-heading";
import { GlassCard } from "@/components/common/glass-card";
import { DynamicIcon } from "@/components/common/icon-map";

export function WhyWorkSection() {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" aria-hidden />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="Why Work With Me"
          title="Delivering Exceptional Results"
          description="Partner with an engineer who understands mobile, backend, and user experience end to end."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_WORK_CARDS.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard glow className="h-full text-center sm:text-left">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400/20 to-indigo-600/20 text-primary sm:mx-0"
                >
                  <DynamicIcon name={card.icon} className="h-7 w-7" />
                </motion.div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
