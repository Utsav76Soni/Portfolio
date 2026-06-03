import { siteConfig } from "@/lib/seo";
import { PROFILE } from "@/lib/data/profile";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PROFILE.name,
    jobTitle: PROFILE.title,
    description: siteConfig.description,
    email: PROFILE.email,
    url: siteConfig.url,
    sameAs: [PROFILE.github, PROFILE.linkedin],
    knowsAbout: [
      "React Native",
      "Full Stack Development",
      "Mobile Applications",
      "Node.js",
      "TypeScript",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
