import {
  Award, Briefcase, CalendarDays, Heart, Lightbulb, Monitor, ShieldCheck, Sparkles, Target, TrendingUp, Users,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  shield: ShieldCheck,
  badge: Award,
  users: Users,
  heart: Heart,
  target: Target,
  trending: TrendingUp,
  consulting: Lightbulb,
  business: Briefcase,
  technology: Monitor,
  events: CalendarDays,
  misc: Sparkles,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const C = map[name] ?? ShieldCheck;
  return <C className={className} strokeWidth={1.6} />;
}
