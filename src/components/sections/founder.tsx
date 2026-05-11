import { SITE } from "@/lib/site";

export function Founder() {
  return (
    <section className="steep-section bg-steep-paper">
      <div className="steep-container max-w-3xl">
        <p className="steep-caps mb-2 text-steep-ink-3">12 · Founder note</p>
        <div className="rounded-xl border border-steep-line bg-steep-bone p-8 sm:p-10">
          <div className="mb-6 flex items-center gap-4">
            <div className="size-12 shrink-0 rounded-full bg-steep-moss/10 ring-1 ring-steep-moss/20" />
            <div>
              <div className="steep-h3">{SITE.founderName}</div>
              <div className="steep-meta text-steep-ink-3">
                Built steep · sells on it
              </div>
            </div>
          </div>
          <p className="steep-body mb-4 text-steep-ink-2">
            I&apos;m {SITE.founderName}. I built steep because I needed a real
            store to sell my own work, and every option was either too rigid
            (Shopify) or too generic (boilerplates). steep is the version I
            wanted: production-quality, finished, mine to change.
          </p>
          <p className="steep-body mb-4 text-steep-ink-2">
            The live demo at{" "}
            <a
              className="underline decoration-steep-line underline-offset-4 hover:text-steep-ink"
              href={SITE.demoUrl}
            >
              {SITE.demoUrl.replace(/^https?:\/\//, "")}
            </a>{" "}
            runs the same code you&apos;re buying. That&apos;s where my own
            products are sold.
          </p>
          <p className="steep-body text-steep-ink-2">
            If something&apos;s broken or missing, email me at{" "}
            <a
              className="underline decoration-steep-line underline-offset-4 hover:text-steep-ink"
              href={`mailto:${SITE.contactEmail}`}
            >
              {SITE.contactEmail}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
