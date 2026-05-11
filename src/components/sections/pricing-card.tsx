import { Check, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";
import { COHORT, currentPrice, nextThreshold } from "@/lib/early-count";

const included = [
  "Full Next.js 16 source code",
  "All 49 SQL migrations + current.sql",
  "Admin panel + no-code site editor",
  "Stripe checkout + automatic tax",
  "Shippo shipping (USPS/UPS/FedEx) + label printing",
  "Atomic inventory + variant management",
  "HMAC-signed downloads for digital products",
  "Resend transactional emails (7 templates)",
  "Supabase auth + RLS + MFA + passkeys",
  "23 docs pages + 5 Playwright e2e suites",
  "Lifetime updates",
  "30-day refund — no questions",
  "MIT-style license (no resale, no fork-and-sell)",
];

export function PricingCard() {
  const price = currentPrice();
  const next = nextThreshold();
  return (
    <section id="pricing" className="steep-section bg-steep-paper">
      <div className="steep-container max-w-3xl">
        <p className="steep-caps mb-2 text-steep-ink-3">14 · Pricing</p>
        <h2 className="steep-h2 mb-10 text-center">One price. One product.</h2>

        <div className="rounded-xl border border-steep-line bg-steep-bone p-8 shadow-[var(--steep-shadow-3)] sm:p-12">
          <div className="mb-8 text-center">
            <div className="steep-caps mb-3 inline-flex items-center gap-2 rounded-sm bg-steep-moss/10 px-2 py-1 text-steep-moss">
              <span className="size-1.5 rounded-full bg-steep-moss" />
              Pre-launch · {COHORT.sold} of {COHORT.earlySeats} early seats sold
            </div>
            <div className="steep-display text-7xl text-steep-moss">${price}</div>
            <p className="steep-meta mt-2 text-steep-ink-3">
              one-time · {next
                ? `then $${next.price} after ${next.at} buyers`
                : "current price"}
            </p>
          </div>

          <ul className="mb-8 grid gap-3 sm:grid-cols-2">
            {included.map((i) => (
              <li key={i} className="steep-body flex items-start gap-2 text-steep-ink-2">
                <Check className="mt-1 size-4 shrink-0 text-steep-moss" strokeWidth={2.5} />
                <span>{i}</span>
              </li>
            ))}
          </ul>

          <a
            href={SITE.stripePaymentLinkUrl}
            className="flex w-full items-center justify-center gap-2 rounded-md bg-steep-moss px-5 py-4 text-base font-medium text-steep-bg shadow-sm transition hover:bg-steep-moss-2"
          >
            Get steep — ${price}
            <ArrowRight className="size-4" />
          </a>
          <p className="steep-meta mt-4 text-center text-steep-ink-3">
            Secure checkout on Stripe · refund in one email · no subscription
          </p>
        </div>
      </div>
    </section>
  );
}
