import { cn } from "@/lib/utils";

const MAP: Record<string, { label: string; cls: string }> = {
  confirmed: { label: "Bevestigd", cls: "bg-mint-strong/10 text-mint-strong" },
  pending: { label: "In afwachting", cls: "bg-amber-100 text-amber-700" },
  cancelled: { label: "Geannuleerd", cls: "bg-destructive/10 text-destructive" },
  completed: { label: "Afgerond", cls: "bg-navy/10 text-navy" },
};

export function StatusBadge({ status }: { status: string }) {
  const s = MAP[status] ?? { label: status, cls: "bg-muted text-muted-foreground" };
  return (
    <span className={cn("inline-block rounded-full px-2.5 py-0.5 text-xs font-medium", s.cls)}>
      {s.label}
    </span>
  );
}
