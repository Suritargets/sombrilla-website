import { Suspense } from "react";
import { PageHero } from "@/components/page-hero";
import { BookingFlow } from "./booking-flow";

export const metadata = { title: "Book an appointment" };

export default function BookPage() {
  return (
    <>
      <PageHero dark image="/images/home-team.jpg" eyebrow="Book" title="Book an appointment" text="Choose a service and a time that suits you. We will confirm by email." />
      <section className="container-x py-16">
        <Suspense fallback={<p className="text-sm text-muted-foreground">Loading…</p>}>
          <BookingFlow />
        </Suspense>
      </section>
    </>
  );
}
