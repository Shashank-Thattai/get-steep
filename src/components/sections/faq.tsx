"use client";
import { Accordion } from "@base-ui/react/accordion";
import { Plus } from "lucide-react";

const items = [
  {
    q: "What do I get exactly?",
    a: "A private GitHub repo invite to the full Next.js 16 codebase, plus 49 SQL migrations, 7 email templates, 23 docs pages. Set up Supabase + Stripe + Resend, deploy to Vercel, and you have a working store. Lifetime updates pushed to the same repo.",
  },
  {
    q: "Can I resell it? Can I fork and sell as my own template?",
    a: "No. The license lets you build unlimited stores for yourself or one-off client work, but you cannot resell, redistribute, sublicense, or repackage steep as a competing template. See the full license link below.",
  },
  {
    q: "What's the license, in plain English?",
    a: "Use it for any number of your own stores. Use it for client work (one store per client). Don't sell it. Don't open-source it. Don't make a competing template from it. Beyond that, change anything you want.",
  },
  {
    q: "How long does setup take?",
    a: "~2 hours if you've used Next.js + Supabase before. Closer to 4 hours if it's your first time. The Quick Start doc walks through every account, env var, and command.",
  },
  {
    q: "What does hosting cost me?",
    a: "$0 to start. Vercel free tier (100GB/mo bandwidth) + Supabase free tier (500MB DB, 50K MAU) + Stripe pay-as-you-go (~3%/charge, no monthly) + Resend free tier (3K emails/month). You only pay services as you scale past the free tiers.",
  },
  {
    q: "Can I use this without writing code?",
    a: "The site editor handles copy, colors, logo, products, prices, coupons. For deeper changes (new sections, layout tweaks), you (or a dev) edit React. Most owners can run the store day-to-day without touching code.",
  },
  {
    q: "What if I get stuck?",
    a: "Ships with a TROUBLESHOOTING.md covering the common gotchas. For anything else, email shipsteep@gmail.com — I read everything. Buyers also get a private Discord (early-access tier).",
  },
  {
    q: "Is it actively maintained?",
    a: "Yes — see the public roadmap. Recent additions: WebAuthn passkeys, refund flow, RLS audit, site editor v2. Lifetime updates ship to your repo automatically.",
  },
  {
    q: "What if you stop maintaining it?",
    a: "You own the code. Updates are a bonus, not a dependency. The stack (Next.js, Supabase, Stripe, Resend) outlives any single maintainer.",
  },
  {
    q: "Can I get a refund?",
    a: "14-day refund — no refund after download or accepting invite. The refund window is 14 days from purchase, but the refund becomes void once any of: (a) you've downloaded any file, (b) you've accepted the GitHub collaborator invite, (c) you've viewed the order confirmation page, or (d) a share link has been sent via email. Physical products keep the existing 30-day-before-shipment / case-by-case-after policy.",
  },
  {
    q: "What's the difference between steep and ShipFast?",
    a: "ShipFast is a SaaS boilerplate — you build the product on top. steep is a finished store — you add products and ship. Different lanes; pick steep if you're selling, ShipFast if you're building a SaaS.",
  },
  {
    q: "What's the difference between steep and Shopify?",
    a: "Shopify is rented; steep is owned. After ~7 months of Shopify Basic, you've spent more than steep ever costs. Shopify is also locked-down — you customize themes, not the cart logic. steep gives you the source.",
  },
  {
    q: "Does it handle physical products?",
    a: "Yes. Shippo is wired for live shipping rates (USPS, UPS, FedEx) in checkout, atomic inventory reservation prevents overselling, and admins can buy + print labels from the order page or enter manual tracking numbers. Saved addresses and refund flow included.",
  },
  {
    q: "Does it handle subscriptions / recurring billing?",
    a: "Yes. Stripe Subscriptions wired — monthly or yearly, optional free trials, mixed cart (sub + one-time digital items in same checkout), customer portal + native cancel/resume, 3-day grace period on past_due. Admin dashboard shows MRR / ARR / churn. Dunning + lifecycle emails (trial ending, payment failed, canceled, renewed) all sent through Resend.",
  },
  {
    q: "Can I sell digital + physical + subscriptions from the same store?",
    a: "Yes. Each product has a 'billing type' (one-time or subscription) plus a 'physical' flag. The cart handles mixed orders correctly. Subscriptions check out via Stripe's subscription mode; one-time items go via standard checkout; mixed (sub + digital one-time) co-bills in a single session via Stripe's add_invoice_items.",
  },
  {
    q: "Does it handle digital downloads?",
    a: "Yes. HMAC-signed download URLs with short expiry — no guessable item IDs. The buyer's account page shows their entitlements. Re-download is supported.",
  },
  {
    q: "Can I sell both digital and physical from the same store?",
    a: "Yes. Products can be either; the cart handles mixed orders. Shipping only charges on the physical line items, downloads only fulfill on the digital ones.",
  },
  {
    q: "What payment methods can I use?",
    a: "Stripe — credit/debit, Apple Pay, Google Pay, and Klarna/Affirm if you enable them in your Stripe dashboard. Express checkout from the PDP for fewer clicks.",
  },
  {
    q: "Why no PayPal?",
    a: "Stripe covers ~95% of US buyer payment methods. Adding PayPal is a real integration — out of scope for v1. If demand is high, it's on the roadmap.",
  },
];

export function Faq() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  };

  return (
    <section id="faq" className="steep-section">
      <div className="steep-container max-w-3xl">
        <p className="steep-caps mb-2 text-steep-ink-3">15 · FAQ</p>
        <h2 className="steep-h2 mb-10">Frequently asked.</h2>
        <Accordion.Root className="divide-y divide-steep-line border-y border-steep-line">
          {items.map(({ q, a }) => (
            <Accordion.Item key={q} className="py-1">
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-5 text-left">
                  <span className="steep-h3 font-medium">{q}</span>
                  <Plus
                    className="size-5 shrink-0 text-steep-ink-3 transition group-data-[panel-open]:rotate-45"
                    strokeWidth={1.5}
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Panel className="steep-body pb-5 pr-9 text-steep-ink-2">
                {a}
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion.Root>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
          }}
        />
      </div>
    </section>
  );
}
