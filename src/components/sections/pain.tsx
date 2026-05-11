export function PainBlock() {
  const rows = [
    { label: "Shopify Basic", math: "$29/mo × 60 mo", total: "$1,740", muted: true },
    { label: "Custom build", math: "120 hrs × $80/hr", total: "$9,600", muted: true },
    { label: "steep", math: "one-time", total: "$199", muted: false },
  ];
  return (
    <section className="steep-section">
      <div className="steep-container">
        <p className="steep-caps mb-2 text-steep-ink-3">03 · The math</p>
        <h2 className="steep-h2 mb-10 max-w-[22ch]">
          Five years on Shopify, or pay once.
        </h2>
        <div className="overflow-hidden rounded-xl border border-steep-line bg-steep-bone">
          {rows.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-[1fr_auto] items-baseline gap-4 px-6 py-6 sm:grid-cols-[1fr_1fr_auto] sm:px-8 ${
                i > 0 ? "border-t border-steep-line" : ""
              } ${row.muted ? "text-steep-ink-3" : "text-steep-ink"}`}
            >
              <span className="steep-h3 col-span-2 sm:col-span-1">
                {row.label}
              </span>
              <span className="steep-meta text-steep-ink-3 sm:order-2">
                {row.math}
              </span>
              <span
                className={`steep-price text-2xl sm:order-3 sm:text-3xl ${
                  !row.muted ? "text-steep-moss" : ""
                }`}
              >
                {row.total}
              </span>
            </div>
          ))}
        </div>
        <p className="steep-body mt-6 max-w-[60ch] text-steep-ink-2">
          Saves ~$1,540 over 5 years vs Shopify. Saves ~$9,400 vs building it
          yourself. Ships this weekend.
        </p>
      </div>
    </section>
  );
}
