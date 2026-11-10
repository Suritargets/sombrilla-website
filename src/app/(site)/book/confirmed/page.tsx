import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata = { title: "Appointment confirmed" };

export default function ConfirmedPage() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-6 py-24 text-center">
      <CheckCircle2 className="h-16 w-16 text-mint-strong" />
      <h1 className="mt-6 text-2xl font-bold text-navy">Your appointment is confirmed!</h1>
      <p className="mt-3 text-muted-foreground">
        You will receive a confirmation email with all the details in a few moments.
        If you cannot make it, use the cancellation link in that email.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-navy px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-deep"
      >
        Back to home
      </Link>
    </section>
  );
}
