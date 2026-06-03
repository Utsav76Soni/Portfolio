"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiAppstore, SiGoogleplay } from "react-icons/si";
import type { ProjectStoreLinks } from "@/types";
import { cn } from "@/lib/utils";

interface ProjectStoreLinksProps {
  links: ProjectStoreLinks;
  projectTitle: string;
  className?: string;
}

export function ProjectStoreLinksBar({
  links,
  projectTitle,
  className,
}: ProjectStoreLinksProps) {
  const items = [
    {
      platform: "Android",
      href: links.android,
      Icon: SiGoogleplay,
      color: "#34A853",
      label: `Download ${projectTitle} on Google Play`,
    },
    {
      platform: "iOS",
      href: links.ios,
      Icon: SiAppstore,
      color: "#ffffff",
      label: `Download ${projectTitle} on the App Store`,
    },
  ].filter((item) => Boolean(item.href));

  if (items.length === 0) return null;

  return (
    <div className={cn("space-y-3", className)}>
      <p className="text-sm font-semibold uppercase tracking-wider text-foreground">
        Download App
      </p>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <motion.div key={item.platform} whileHover={{ y: -4, scale: 1.02 }}>
            <Link
              href={item.href!}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className={cn(
                "group flex items-center gap-3 rounded-xl border border-border/60 bg-card/80 px-4 py-3 transition-all duration-300",
                "hover:border-primary/40 hover:bg-primary/5 hover:shadow-[0_0_20px_var(--electric-glow)]"
              )}
            >
              <span
                className="flex h-11 w-11 items-center justify-center rounded-lg bg-background/80 transition-transform group-hover:scale-110"
                style={{ color: item.color }}
              >
                <item.Icon className="h-7 w-7" aria-hidden />
              </span>
              <span className="flex flex-col text-left">
                <span className="text-xs text-muted-foreground">
                  Get it on
                </span>
                <span className="text-sm font-semibold text-foreground">
                  {item.platform === "Android" ? "Google Play" : "App Store"}
                </span>
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
