import {
  Atom,
  Braces,
  Database,
  FileCode,
  Flame,
  GitBranch,
  Github,
  Layers,
  Layout,
  Plug,
  Route,
  Server,
  Smartphone,
  Triangle,
  Wind,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Smartphone,
  Layout,
  Server,
  Database,
  Wrench,
  Layers,
  Plug,
  Zap,
  Atom,
  Triangle,
  FileCode,
  Braces,
  Route,
  Flame,
  GitBranch,
  Github,
  Wind,
};

export function getIcon(name: string): LucideIcon {
  return ICON_MAP[name] ?? Atom;
}

export function DynamicIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = getIcon(name);
  return <Icon className={className} aria-hidden />;
}
