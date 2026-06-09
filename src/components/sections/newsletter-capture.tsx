"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

export function NewsletterCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");
    try {
      const res = await fetch("https://www.shipsteep.com/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("subscribe failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="steep-section">
      <div className="steep-container max-w-2xl">
        <p className="steep-caps mb-2 text-steep-ink-3">16 · Stay in the loop</p>
        <h2 className="steep-h2 mb-4">Get launch updates</h2>
        <p className="steep-body mb-6 text-steep-ink-2">
          When v1.1 ships, when discounts open, when the kit hits new milestones. One email per month, maybe less. Unsubscribe anytime.
        </p>
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            disabled={status === "submitting"}
            className="flex-1 rounded-md border border-steep-line bg-steep-bone px-4 py-3 text-base text-steep-ink placeholder:text-steep-ink-4 focus:border-steep-moss focus:outline-none"
          />
          <button
            type="submit"
            disabled={status === "submitting"}
            className="group inline-flex items-center justify-center gap-2 rounded-md bg-steep-moss px-5 py-3 text-base font-medium text-steep-bg shadow-[var(--steep-shadow-2)] transition hover:bg-steep-moss-2 hover:shadow-[var(--steep-shadow-3)] disabled:opacity-60"
          >
            {status === "submitting" ? "Sending…" : "Notify me"}
            <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
          </button>
        </form>
        {status === "success" && (
          <p className="steep-meta mt-3 text-steep-moss">
            You&apos;re on the list.
          </p>
        )}
        {status === "error" && (
          <p className="steep-meta mt-3 text-steep-amber">
            Could not subscribe. Try again or email{" "}
            <a
              className="underline decoration-steep-line underline-offset-4 hover:text-steep-ink"
              href="mailto:shipsteep@gmail.com"
            >
              shipsteep@gmail.com
            </a>
            .
          </p>
        )}
      </div>
    </section>
  );
}
