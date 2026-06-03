"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import { PROFILE } from "@/lib/data/profile";
import { SectionHeading } from "@/components/common/section-heading";
import { ContactForm } from "@/components/sections/contact/contact-form";
import { GlassCard } from "@/components/common/glass-card";

const SOCIAL_LINKS = [
  { name: "GitHub", href: PROFILE.github, icon: Github },
  { name: "LinkedIn", href: PROFILE.linkedin, icon: Linkedin },
];

export function ContactSection() {
  return (
    <section id="contact" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Get In Touch"
          title="Let's Build Something Great"
          description="Have a project in mind? I'd love to hear from you."
        />

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 lg:col-span-2"
          >
            <GlassCard>
              <h3 className="text-xl font-bold text-foreground">{PROFILE.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                React Native Developer & Full Stack Engineer
              </p>

              <div className="mt-6 space-y-4">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-sm break-all">{PROFILE.email}</span>
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-sm">Available Worldwide (Remote)</span>
                </div>
              </div>

              <div className="mt-8">
                <p className="mb-4 text-sm font-semibold text-foreground">Connect</p>
                <div className="flex gap-3">
                  {SOCIAL_LINKS.map((social) => (
                    <motion.div key={social.name} whileHover={{ y: -4, scale: 1.05 }}>
                      <Link
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background/50 text-muted-foreground transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
                        aria-label={social.name}
                      >
                        <social.icon className="h-5 w-5" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
