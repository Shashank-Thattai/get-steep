import { Check, ArrowRight, Lock } from "lucide-react";
import { SITE } from "@/lib/site";
import { COHORT, currentPrice, nextThreshold } from "@/lib/early-count";

const included = [
  "Full Next.js 16 source code",
  "All SQL migrations + current.sql snapshot",
  "Admin panel + no-code site editor",
  "Stripe checkout + automatic tax",
  "Stripe Subscriptions + customer portal + cancel UI",
  "MRR / ARR / churn admin dashboard",
  "Shippo shipping (USPS/UPS/FedEx) + label printing",
  "Atomic inventory + variant management",
  "HMAC-signed downloads + per-purchase license keys",
  "Resend transactional emails (12 templates: orders, shipping, refunds, subscriptions)",
  "Supabase auth + RLS + MFA + passkeys",
  "23 docs pages + Playwright e2e suites",
  "Lifetime updates (covers v1.1 SaaS + future net-new features)",
  "30-day refund — no questions",
  "MIT-style license (no resale, no fork-and-sell)",
];

export function PricingCard() {
  const price = currentPrice();
  const next = nextThreshold();
  const seatsLeft = next ? next.at - COHORT.sold : 0;
  const cohortPct = next ? Math.round((COHORT.sold / next.at) * 100) : 100;
  return (
    <section id="pricing" className="steep-section bg-steep-paper">
      <div className="steep-container max-w-3xl">
        <p className="steep-caps mb-2 text-steep-ink-3">14 · Pricing</p>
        <h2 className="steep-h2 mb-3 text-center">
          Lock in ${price} before it goes up.
        </h2>
        <p className="steep-body mb-10 max-w-2xl mx-auto text-center text-steep-ink-2">
          {next
            ? `Pre-launch cohort: $${price} for the first ${next.at} buyers. Then $${next.price}. Then $${COHORT.finalPriceUsd}. The number ticks up as real buyers join — no fake countdowns.`
            : `Current price: $${price}. Lifetime updates included.`}
        </p>

        <div className="rounded-xl border-2 border-steep-moss bg-steep-bone p-8 shadow-[var(--steep-shadow-3)] sm:p-12">
          {/* Cohort visual at top */}
          {next && (
            <div className="mb-8 rounded-lg border border-steep-line bg-steep-paper/50 p-4">
              <div className="mb-2 flex items-baseline justify-between">
                <span className="steep-caps text-steep-moss">
                  Early access · {seatsLeft} seat
                  {seatsLeft === 1 ? "" : "s"} left at ${price}
                </span>
                <span className="steep-meta text-steep-ink-3 tabular">
                  {COHORT.sold} / {next.at}
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-steep-line">
                <div
                  className="h-full rounded-full bg-steep-moss transition-all"
                  style={{ width: `${cohortPct}%` }}
                />
              </div>
            </div>
          )}

          {/* Price block */}
          <div className="mb-8 text-center">
            <div className="flex items-baseline justify-center gap-3">
              <span className="steep-display text-7xl text-steep-moss">
                ${price}
              </span>
              {next && (
                <span className="text-2xl text-steep-ink-4 line-through tabular">
                  ${next.price}
                </span>
              )}
            </div>
            <p className="steep-meta mt-3 text-steep-ink-2">
              <strong className="font-medium">One-time payment.</strong>{" "}
              {next
                ? `Goes to $${next.price} once ${next.at} buyers join.`
                : "Lifetime updates included."}
            </p>
          </div>

          <ul className="mb-8 grid gap-3 sm:grid-cols-2">
            {included.map((i) => (
              <li key={i} className="steep-body-sm flex items-start gap-2 text-steep-ink-2">
                <Check className="mt-1 size-4 shrink-0 text-steep-moss" strokeWidth={2.5} />
                <span>{i}</span>
              </li>
            ))}
          </ul>

          <a
            href={SITE.stripePaymentLinkUrl}
            className="group flex w-full items-center justify-center gap-2 rounded-md bg-steep-moss px-5 py-4 text-lg font-medium text-steep-bg shadow-[var(--steep-shadow-2)] transition hover:bg-steep-moss-2 hover:shadow-[var(--steep-shadow-3)]"
          >
            <Lock className="size-4" strokeWidth={2.5} />
            Lock in ${price} — Get steep now
            <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
          </a>
          <p className="steep-meta mt-4 text-center text-steep-ink-3">
            Secure checkout on Stripe · refund in one email · no subscription
          </p>
        </div>

        {/* Comparison anchor */}
        <p className="steep-meta mt-6 text-center text-steep-ink-3">
          That&apos;s less than 7 months of Shopify Basic. Less than ShipFast All-in
          ($249). Less than 3 billable hours.
        </p>
      </div>
    </section>
  );
}
