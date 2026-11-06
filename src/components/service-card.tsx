import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/icon";
import type { Service } from "@/lib/site";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border bg-white shadow-[0_2px_14px_rgba(11,26,63,.05)] transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(11,26,63,.12)]"
    >
      <div className="relative h-40 w-full">
        <Image src={service.image} alt="" fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover" />
        <span className="absolute -bottom-6 left-5 z-10 flex size-12 items-center justify-center rounded-full bg-white text-mint-strong shadow-md">
          <Icon name={service.icon} className="size-5" />
        </span>
      </div>
      <div className="flex flex-1 flex-col px-5 pt-9 pb-5">
        <h3 className="text-base font-bold text-navy">{service.title}</h3>
        <div className="mt-2 flex flex-1 items-end justify-between gap-3">
          <p className="line-clamp-3 text-[13px] leading-relaxed text-navy/65">{service.intro[0]}</p>
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-mint-soft text-navy transition-colors group-hover:bg-mint">
            <ArrowRight className="size-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
