"use client";

import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";
import type { Project } from "@/types";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/common/glass-card";
import { ProjectStoreLinksBar } from "@/components/sections/projects/project-store-links";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "grid items-center gap-8 lg:grid-cols-2 lg:gap-16",
        !isEven && "lg:[&>*:first-child]:order-2"
      )}
    >
      {/* Device mockup */}
      <GlassCard hover3d={false} className="relative overflow-hidden p-0">
        <div
          className={cn(
            "relative flex min-h-[320px] items-center justify-center bg-gradient-to-br p-8 sm:min-h-[400px]",
            project.gradient
          )}
        >
          <motion.div
            whileHover={{ y: -12, rotateY: 5, rotateX: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="perspective-1000 relative"
          >
            {/* Phone frame */}
            <div className="relative mx-auto w-[200px] rounded-[2rem] border-4 border-foreground/10 bg-foreground/5 p-2 shadow-2xl sm:w-[240px]">
              <div className="absolute left-1/2 top-3 h-1.5 w-16 -translate-x-1/2 rounded-full bg-foreground/20" />
              <div className="mt-6 overflow-hidden rounded-[1.5rem] bg-gradient-to-b from-slate-900 to-slate-800 p-4">
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-primary/80" />
                  <div className="space-y-1">
                    <div className="h-2 w-20 rounded bg-primary/40" />
                    <div className="h-1.5 w-14 rounded bg-foreground/20" />
                  </div>
                </div>
                <div className="space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex gap-2 rounded-lg bg-foreground/5 p-2"
                    >
                      <div className="h-10 w-10 shrink-0 rounded-md bg-primary/30" />
                      <div className="flex-1 space-y-1">
                        <div className="h-2 w-full rounded bg-foreground/15" />
                        <div className="h-1.5 w-2/3 rounded bg-foreground/10" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-center">
                  <Smartphone className="h-16 w-16 text-primary/50" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute right-4 top-4 rounded-lg glass px-3 py-1.5 text-xs font-medium text-primary"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Case Study
          </motion.div>
        </div>
      </GlassCard>

      {/* Content */}
      <div className="space-y-6">
        <div>
          <span className="text-sm font-medium text-primary">
            Project {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">
            Key Features
          </h4>
          <ul className="grid gap-2 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="default">
              {tech}
            </Badge>
          ))}
        </div>

        {project.storeLinks && (
          <ProjectStoreLinksBar
            links={project.storeLinks}
            projectTitle={project.title}
          />
        )}
      </div>
    </motion.article>
  );
}
