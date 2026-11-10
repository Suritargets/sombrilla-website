"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const company = String(form.get("company") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    setSending(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          phone: form.get("phone") ?? "",
          message: company ? `Company / Organization: ${company}

${message}` : message,
          website: form.get("website") ?? "",
        }),
      });
      if (!res.ok) throw new Error();
      setSent(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div className="flex flex-col items-start gap-3 rounded-xl border bg-mint-soft/50 p-8">
        <CheckCircle2 className="size-8 text-mint-strong" />
        <h3 className="text-lg font-bold">Thank you!</h3>
        <p className="text-sm text-navy/70">Your message has been received. We&apos;ll get back to you as soon as possible.</p>
      </div>
    );
  }

  return (
    <form
      className="grid gap-5 sm:grid-cols-2"
      onSubmit={onSubmit}
    >
      <div className="grid gap-2">
        <Label htmlFor="name">Full Name <span className="text-destructive">*</span></Label>
        <Input id="name" name="name" required placeholder="Your name" className="h-11" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email Address <span className="text-destructive">*</span></Label>
        <Input id="email" name="email" type="email" required placeholder="your@email.com" className="h-11" />
      </div>
      <div className="grid gap-2 sm:col-span-2">
        <Label htmlFor="company">Company / Organization</Label>
        <Input id="company" name="company" placeholder="Your company" className="h-11" />
      </div>
      <div className="grid gap-2 sm:col-span-2">
        <Label htmlFor="message">Message <span className="text-destructive">*</span></Label>
        <Textarea id="message" name="message" required placeholder="How can we help you?" className="min-h-32" />
      </div>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      {error && <p className="text-sm text-destructive sm:col-span-2">{error}</p>}
      <div className="sm:col-span-2">
        <Button type="submit" disabled={sending} className="h-12 gap-2 rounded-lg bg-mint px-6 text-[15px] font-semibold text-navy hover:bg-mint-strong/90">
          {sending ? <Loader2 className="size-4 animate-spin" /> : null} Send Message <ArrowRight className="size-4" />
        </Button>
      </div>
    </form>
  );
}
