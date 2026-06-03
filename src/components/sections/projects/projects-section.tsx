"use client";

import { PROJECTS } from "@/lib/data/projects";
import { SectionHeading } from "@/components/common/section-heading";
import { ProjectCard } from "@/components/sections/projects/project-card";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Portfolio"
          title="Featured Projects"
          description="Premium mobile applications built for real-world food delivery ecosystems."
        />

        <div className="space-y-24 lg:space-y-32">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
