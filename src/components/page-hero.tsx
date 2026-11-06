import Image from "next/image";
import { cn } from "@/lib/utils";

/** Hero voor binnenpagina's: tekst links, foto die rechts uitvloeit. */
export function PageHero({
  eyebrow,
  title,
  text,
  image,
  dark = false,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
  image: string;
  dark?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <section className={cn("relative overflow-hidden", dark ? "bg-navy text-white" : "bg-white")}>
      <div className="absolute inset-y-0 right-0 w-full md:w-[62%]">
        <Image src={image} alt="" fill priority sizes="(min-width:768px) 62vw, 100vw" className="object-cover" />
        <div className={cn("absolute inset-0 bg-gradient-to-r", dark ? "from-navy via-navy/85 to-navy/10" : "from-white via-white/90 to-white/10")} />
      </div>
      <div className="container-x relative py-14 sm:py-20 lg:py-24">
        <p className={cn("eyebrow", dark && "text-white/70")}>{eyebrow}</p>
        <h1 className="mt-5 max-w-xl text-4xl leading-[1.08] font-extrabold tracking-tight sm:text-5xl">{title}</h1>
        {text && <p className={cn("mt-5 max-w-md text-base leading-relaxed", dark ? "text-white/85" : "text-navy/70")}>{text}</p>}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}
