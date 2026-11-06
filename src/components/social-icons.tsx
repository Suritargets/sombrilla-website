import type { SVGProps } from "react";
import { site } from "@/lib/site";

const base = { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": true } as const;

export const LinkedinIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11.5H3V9.75Zm6.5 0h3.83v1.57h.06c.53-1 1.84-2.07 3.78-2.07 4.04 0 4.78 2.66 4.78 6.1v5.9h-4v-5.23c0-1.25-.02-2.85-1.74-2.85-1.74 0-2 1.36-2 2.76v5.32h-4V9.75Z" />
  </svg>
);
export const FacebookIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M13.5 22v-8.2h2.8l.5-3.3h-3.3V8.4c0-.95.4-1.7 1.8-1.7h1.6V3.8c-.3 0-1.3-.15-2.4-.15-2.5 0-4.1 1.5-4.1 4.2v2.65H7.6v3.3h2.8V22h3.1Z" />
  </svg>
);

export const socials = [
  { label: "Facebook", href: site.facebook, Icon: FacebookIcon },
  { label: "LinkedIn", href: site.linkedin, Icon: LinkedinIcon },
];
