"use client";

import { TECHNOLOGY_SECTIONS } from "@/lib/data/technology-sections";
import { SectionHeading } from "@/components/common/section-heading";
import { TechnologyCategory } from "@/components/sections/skills/technology-category";

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding relative bg-muted/20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Expertise"
          title="Skills & Technologies"
          description="Technologies I work with — organized by domain with official brand identities."
        />

        <div className="space-y-14 lg:space-y-16">
          {TECHNOLOGY_SECTIONS.map((section, index) => (
            <TechnologyCategory
              key={section.id}
              section={section}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
