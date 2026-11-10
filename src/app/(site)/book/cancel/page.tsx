import { Suspense } from "react";
import { CancelClient } from "./cancel-client";

export const metadata = { title: "Cancel appointment" };

export default function CancelPage() {
  return (
    <section className="mx-auto max-w-md px-6 py-24">
      <Suspense fallback={null}>
        <CancelClient />
      </Suspense>
    </section>
  );
}
