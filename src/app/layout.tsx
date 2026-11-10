import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Sombrilla Group – Developing businesses to achieve the results you desire",
    template: "%s | Sombrilla Group of Companies",
  },
  description:
    "Sombrilla Group of Companies provides solutions for business development and outsourcing needs: consulting, business, technology and event management.",
};

const clerkReady =
  !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
  !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.includes("placeholder");

export default function RootLayout({ children }: LayoutProps<"/">) {
  const html = (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white font-sans text-navy">
        {children}
      </body>
    </html>
  );
  return clerkReady ? <ClerkProvider>{html}</ClerkProvider> : html;
}
