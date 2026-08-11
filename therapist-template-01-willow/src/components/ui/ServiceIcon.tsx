import {
  Wind,
  Waves,
  Compass,
  Heart,
  CloudRain,
  Sprout,
  Leaf,
  Sun,
  Moon,
  Anchor,
  type LucideIcon,
} from "lucide-react";

/**
 * Maps the `icon` string in content/services.ts to a Lucide component.
 * Add to this record if a client needs an icon that isn't here yet.
 * Falls back to Leaf so a typo never breaks the build.
 */
const ICONS: Record<string, LucideIcon> = {
  Wind,
  Waves,
  Compass,
  Heart,
  CloudRain,
  Sprout,
  Leaf,
  Sun,
  Moon,
  Anchor,
};

export function ServiceIcon({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  const Icon = ICONS[name] ?? Leaf;
  return <Icon className={className} strokeWidth={1.4} aria-hidden="true" />;
}
