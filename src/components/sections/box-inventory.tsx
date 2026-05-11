export function BoxInventory() {
  const items: { count: string; label: string }[] = [
    { count: "49", label: "SQL migrations" },
    { count: "11", label: "admin pages" },
    { count: "7", label: "transactional emails" },
    { count: "38", label: "React components" },
    { count: "23", label: "docs pages" },
    { count: "5", label: "Playwright e2e suites" },
    { count: "1", label: "no-code site editor" },
    { count: "1", label: "brand-voice AI hook" },
  ];
  return (
    <section className="steep-section">
      <div className="steep-container">
        <p className="steep-caps mb-2 text-steep-ink-3">05 · What&apos;s in the box</p>
        <h2 className="steep-h2 mb-10 max-w-[24ch]">
          Real product. Counted, not vibes.
        </h2>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-steep-line bg-steep-line sm:grid-cols-4">
          {items.map((it) => (
            <div key={it.label} className="bg-steep-bone p-6">
              <div className="steep-display text-4xl text-steep-moss sm:text-5xl">
                {it.count}
              </div>
              <div className="steep-meta mt-2 text-steep-ink-2">{it.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
