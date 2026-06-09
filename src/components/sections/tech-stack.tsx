const stack = [
  { name: "Next.js 16", does: "App Router, Server Components, Turbopack — runs the whole storefront." },
  { name: "Supabase", does: "Auth, Postgres, RLS, file storage. Free for early launches." },
  { name: "Stripe", does: "Checkout, Apple/Google Pay, automatic tax, refunds." },
  { name: "Resend", does: "Order + abandoned-cart emails. 3K/month free." },
  { name: "Vercel", does: "Hosting. Free tier easily handles early traffic." },
  { name: "Tailwind 4", does: "Design tokens, dark/light themes, mobile-first." },
  { name: "Base UI", does: "Accessible primitives — tabs, accordion, popover, dialog." },
  { name: "Sentry (opt)", does: "Error monitoring + source maps. Free dev tier." },
];

export function TechStack() {
  return (
    <section className="steep-section">
      <div className="steep-container">
        <p className="steep-caps mb-2 text-steep-ink-3">07 · Stack</p>
        <h2 className="steep-h2 mb-4 max-w-[26ch]">
          Boring, proven, owned by you.
        </h2>
        <p className="steep-body mb-10 max-w-[60ch] text-steep-ink-2">
          Picked boring tech on purpose. Swap any layer.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stack.map((s) => (
            <div
              key={s.name}
              className="rounded-lg border border-steep-line bg-steep-bone p-5 transition hover:border-steep-moss hover:shadow-[var(--steep-shadow-2)]"
            >
              <div className="steep-h3 mb-2">{s.name}</div>
              <p className="steep-body-sm text-steep-ink-2">{s.does}</p>
            </div>
          ))}
        </div>
        <p className="steep-meta mt-6 text-steep-ink-3">
          No proprietary lock-in. Swap any layer and the rest still works.
        </p>
      </div>
    </section>
  );
}
