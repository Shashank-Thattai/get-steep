import { SITE } from "@/lib/site";

const cols = [
  {
    title: "Product",
    links: [
      { label: "Live demo", href: SITE.demoUrl },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "License", href: "/legal/license" },
      { label: "Terms", href: "/legal/terms" },
      { label: "Privacy", href: "/legal/privacy" },
    ],
  },
  {
    title: "Sibling projects",
    links: [
      { label: "steep store", href: SITE.demoUrl },
      { label: "steep components", href: SITE.componentsUrl },
    ],
  },
  {
    title: "Built with",
    links: [
      { label: "Next.js 16", href: "https://nextjs.org" },
      { label: "Supabase", href: "https://supabase.com" },
      { label: "Stripe", href: "https://stripe.com" },
      { label: "Resend", href: "https://resend.com" },
      { label: "Vercel", href: "https://vercel.com" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-steep-line bg-steep-bg">
      <div className="steep-container py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <div className="steep-display mb-3 text-3xl leading-none">steep</div>
            <p className="steep-body-sm max-w-[30ch] text-steep-ink-3">
              A finished Next.js storefront. Digital or physical. Own the code.
              Ship today.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="steep-caps mb-4 text-steep-ink-3">{c.title}</div>
              <ul className="space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="steep-body-sm text-steep-ink-2 hover:text-steep-ink"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="steep-hairline mt-12 flex flex-wrap items-center justify-between gap-3 pt-6">
          <p className="steep-meta text-steep-ink-3">
            © 2026 steep · built with steep itself
          </p>
          <p className="steep-meta text-steep-ink-3">
            No analytics SDKs on this page
          </p>
        </div>
      </div>
    </footer>
  );
}
