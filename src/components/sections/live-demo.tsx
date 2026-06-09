import { ExternalLink } from "lucide-react";
import { SITE } from "@/lib/site";

export function LiveDemo() {
  return (
    <section id="demo" className="steep-section bg-steep-paper">
      <div className="steep-container">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="steep-caps mb-2 text-steep-ink-3">02 · Live demo</p>
            <h2 className="steep-h2 max-w-[28ch]">
              This is the live store. Same code you&apos;re buying.
            </h2>
          </div>
          <a
            href={SITE.demoSpawnUrl}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-md border border-steep-line bg-steep-bone px-4 py-2 text-sm hover:bg-steep-bg"
          >
            Spin up your own sandbox <ExternalLink className="size-3.5" />
          </a>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-steep-line bg-steep-bone shadow-[var(--steep-shadow-3)]">
          <iframe
            src={SITE.demoUrl}
            title="steep live demo, full"
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            className="size-full"
          />
          <noscript>
            <div className="absolute inset-0 flex items-center justify-center bg-steep-bone p-6 text-center">
              <p className="steep-body text-steep-ink-2">
                Live demo at{" "}
                <a
                  href={SITE.demoUrl}
                  className="underline decoration-steep-line underline-offset-4 hover:text-steep-ink"
                >
                  www.shipsteep.com
                </a>
                .
              </p>
            </div>
          </noscript>
        </div>
        <p className="steep-meta mt-4 text-steep-ink-3">
          The iframe above is the live store, read-only. Click &quot;Spin up
          your own sandbox&quot; to get a private, isolated copy you can
          actually click around in — admin access, test Stripe checkout,
          the works. Auto-resets after 4 hours.
        </p>
      </div>
    </section>
  );
}
