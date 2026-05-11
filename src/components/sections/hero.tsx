import { ArrowRight, Shield, RefreshCw, Infinity as InfinityIcon } from "lucide-react";
import { SITE } from "@/lib/site";
import { COHORT, currentPrice, nextThreshold } from "@/lib/early-count";

export function Hero() {
  const price = currentPrice();
  const next = nextThreshold();
  const seatsLeft = next ? next.at - COHORT.sold : 0;
  const cohortPct = next ? Math.round((COHORT.sold / next.at) * 100) : 100;

  return (
    <section className="steep-section relative overflow-hidden">
      <div className="steep-container grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          {/* Cohort badge — bigger, more visible */}
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-steep-moss/20 bg-steep-moss/5 px-3 py-1.5">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-steep-moss opacity-50" />
              <span className="relative inline-flex size-2 rounded-full bg-steep-moss" />
            </span>
            <span className="steep-caps text-steep-moss">Early access live</span>
            <span className="steep-body-sm font-medium text-steep-ink">
              {COHORT.sold}/{next ? next.at : COHORT.midSeats} at ${price}
            </span>
          </div>

          <h1 className="steep-display mb-6 max-w-[16ch]">
            Launch your storefront this weekend.
          </h1>

          <p className="steep-body mb-8 max-w-[56ch] text-steep-ink-2">
            steep is a finished Next.js store. Sell digital downloads, ship
            physical goods, or charge recurring subscriptions. Cart, checkout,
            admin, email, shipping, inventory, MRR dashboard — all wired. Pay
            once. Own the code.
          </p>

          <div className="mb-5 flex flex-wrap items-center gap-3">
            <a
              href={SITE.stripePaymentLinkUrl}
              className="group inline-flex items-center gap-2 rounded-md bg-steep-moss px-6 py-3.5 text-base font-medium text-steep-bg shadow-[var(--steep-shadow-2)] transition hover:bg-steep-moss-2 hover:shadow-[var(--steep-shadow-3)]"
            >
              Get steep — ${price}
              <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-md border border-steep-line bg-steep-bone px-5 py-3 text-base text-steep-ink hover:bg-steep-paper"
            >
              Try the live demo
            </a>
          </div>

          {/* Honest urgency — real cohort, visible "next price" anchor */}
          {next && (
            <div className="mb-6 rounded-lg border border-steep-line bg-steep-paper/60 p-3.5">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <div className="steep-body-sm text-steep-ink-2">
                  <strong className="font-medium text-steep-ink">
                    ${price}
                  </strong>{" "}
                  for the next{" "}
                  <strong className="font-medium tabular text-steep-ink">
                    {seatsLeft}
                  </strong>{" "}
                  buyer{seatsLeft === 1 ? "" : "s"}.
                </div>
                <div className="steep-meta text-steep-ink-3">
                  Then{" "}
                  <span className="line-through">${price}</span>{" "}
                  <strong className="font-medium text-steep-amber tabular">
                    ${next.price}
                  </strong>
                </div>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-steep-line">
                <div
                  className="h-full rounded-full bg-steep-moss transition-all"
                  style={{ width: `${cohortPct}%` }}
                />
              </div>
            </div>
          )}

          {/* Trust pills — visible reassurance */}
          <div className="flex flex-wrap gap-x-4 gap-y-1.5">
            <span className="inline-flex items-center gap-1.5 text-[12px] text-steep-ink-2">
              <RefreshCw className="size-3.5 text-steep-moss" strokeWidth={2} />
              30-day refund, no questions
            </span>
            <span className="inline-flex items-center gap-1.5 text-[12px] text-steep-ink-2">
              <InfinityIcon className="size-3.5 text-steep-moss" strokeWidth={2} />
              Lifetime updates included
            </span>
            <span className="inline-flex items-center gap-1.5 text-[12px] text-steep-ink-2">
              <Shield className="size-3.5 text-steep-moss" strokeWidth={2} />
              MIT-style license
            </span>
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-steep-line bg-steep-bone shadow-[var(--steep-shadow-3)]">
          <div className="absolute inset-x-0 top-0 z-10 flex h-8 items-center gap-1.5 border-b border-steep-line bg-steep-paper px-3">
            <span className="size-2 rounded-full bg-steep-ink-4/40" />
            <span className="size-2 rounded-full bg-steep-ink-4/40" />
            <span className="size-2 rounded-full bg-steep-ink-4/40" />
            <span className="steep-meta ml-3 text-steep-ink-3">
              {SITE.demoUrl.replace(/^https?:\/\//, "")}
            </span>
            <span className="ml-auto rounded-sm bg-steep-moss/10 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-steep-moss">
              live
            </span>
          </div>
          <iframe
            src={SITE.demoUrl}
            title="steep live demo"
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            className="absolute inset-0 mt-8 size-full"
          />
        </div>
      </div>
    </section>
  );
}
