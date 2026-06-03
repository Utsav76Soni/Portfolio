export interface NavLink {
  label: string;
  href: string;
}

export interface Technology {
  name: string;
  icon: string;
}

export interface TechnologySection {
  id: string;
  title: string;
  technologies: Technology[];
}

export interface ProjectFeature {
  text: string;
}

export interface ProjectStoreLinks {
  /** Google Play Store URL */
  android?: string;
  /** Apple App Store URL */
  ios?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  tech: string[];
  gradient: string;
  accent: string;
  imageAlt: string;
  storeLinks?: ProjectStoreLinks;
}

export interface WhyWorkCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}
