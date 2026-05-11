import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";
import { COHORT, currentPrice, nextThreshold } from "@/lib/early-count";

export function Hero() {
  const price = currentPrice();
  const next = nextThreshold();
  return (
    <section className="steep-section relative overflow-hidden">
      <div className="steep-container grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <div className="steep-caps mb-6 inline-flex items-center gap-2 rounded-sm bg-steep-paper px-2 py-1 text-steep-ink-2">
            <span className="size-1.5 rounded-full bg-steep-moss" />
            Pre-launch · {COHORT.sold} of {COHORT.earlySeats} early seats
          </div>
          <h1 className="steep-display mb-6 max-w-[16ch]">
            Launch your storefront this weekend.
          </h1>
          <p className="steep-body mb-8 max-w-[56ch] text-steep-ink-2">
            steep is a finished Next.js store. Sell digital downloads or ship
            physical goods. Cart, checkout, admin, email, shipping, inventory —
            all wired. Pay once. Own the code.
          </p>
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <a
              href={SITE.stripePaymentLinkUrl}
              className="inline-flex items-center gap-2 rounded-md bg-steep-moss px-5 py-3 text-base font-medium text-steep-bg shadow-sm transition hover:bg-steep-moss-2"
            >
              Get steep — ${price}
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-md border border-steep-line bg-steep-bone px-5 py-3 text-base text-steep-ink hover:bg-steep-paper"
            >
              Try the live demo
            </a>
          </div>
          <p className="steep-meta text-steep-ink-3">
            30-day refund · Lifetime updates · MIT-style license (no resale)
            {next && (
              <>
                {" · "}
                <span className="text-steep-ink-2">
                  ${price} for the first {COHORT.earlySeats}, then ${next.price}
                </span>
              </>
            )}
          </p>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-steep-line bg-steep-bone shadow-[var(--steep-shadow-3)]">
          <div className="absolute inset-x-0 top-0 flex h-8 items-center gap-1.5 border-b border-steep-line bg-steep-paper px-3">
            <span className="size-2 rounded-full bg-steep-ink-4/40" />
            <span className="size-2 rounded-full bg-steep-ink-4/40" />
            <span className="size-2 rounded-full bg-steep-ink-4/40" />
            <span className="steep-meta ml-3 text-steep-ink-3">
              {SITE.demoUrl.replace(/^https?:\/\//, "")}
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
