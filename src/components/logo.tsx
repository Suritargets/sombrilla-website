import Image from "next/image";
import { cn } from "@/lib/utils";

/** Officieel logo. `light` = witte versie voor donkere achtergrond. */
export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <Image
      src={light ? "/images/logo-alt.png" : "/images/logo.png"}
      alt="Sombrilla Group of Companies"
      width={900}
      height={312}
      priority
      className={cn("h-11 w-auto", className)}
    />
  );
}
