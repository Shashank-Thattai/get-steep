import { X } from "lucide-react";

const items = [
  "you want a generic SaaS boilerplate — try ShipFast or makerkit",
  "you want WooCommerce or anything PHP — steep is JS-only",
  "you have >100k SKUs or need warehouse integration — Shopify Plus fits better",
  "you need B2B net-30 invoicing or quote-to-cash — outside steep's scope",
  "you don't write code AND don't want a dev to do one-time setup — Shopify is easier",
];

export function SkipIf() {
  return (
    <section className="steep-section bg-steep-paper">
      <div className="steep-container max-w-3xl">
        <p className="steep-caps mb-2 text-steep-ink-3">10 · Honest disclaimer</p>
        <h2 className="steep-h2 mb-6">Skip steep if…</h2>
        <ul className="space-y-3">
          {items.map((it) => (
            <li
              key={it}
              className="steep-body flex items-start gap-3 rounded-lg border border-steep-line bg-steep-bone p-4 text-steep-ink-2"
            >
              <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-steep-err/10 text-steep-err">
                <X className="size-3" strokeWidth={2.5} />
              </span>
              <span>{it}</span>
            </li>
          ))}
        </ul>
        <p className="steep-meta mt-6 text-steep-ink-3">
          A clear no saves you a refund. If steep doesn&apos;t fit, walk away
          knowing.
        </p>
      </div>
    </section>
  );
}
