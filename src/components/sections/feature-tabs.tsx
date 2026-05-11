"use client";
import { Tabs } from "@base-ui/react/tabs";
import { useState } from "react";

const tabs = [
  {
    key: "storefront",
    label: "Storefront",
    bullets: [
      "Collections, product pages, search, wishlist, recently-viewed",
      "Mobile-first — sheet drawer cart, iOS-safe layouts",
      "Sub-second loads, server components throughout",
    ],
  },
  {
    key: "admin",
    label: "Admin",
    bullets: [
      "Create products without code",
      "Site editor for copy, colors, logo",
      "Run sales, issue refunds, see orders",
    ],
  },
  {
    key: "checkout",
    label: "Checkout",
    bullets: [
      "Stripe Hosted Checkout · Apple Pay · Google Pay",
      "Express checkout from the PDP",
      "Coupon engine + Stripe Tax automatic",
    ],
  },
  {
    key: "email",
    label: "Email",
    bullets: [
      "Order confirmation · shipping · refund · abandoned cart",
      "Branded with your colors and logo",
      "Powered by Resend (3K/month free)",
    ],
  },
  {
    key: "security",
    label: "Security",
    bullets: [
      "Row-level security on every buyer row",
      "MFA + WebAuthn passkeys for admins",
      "HMAC-signed download URLs, audit log",
    ],
  },
  {
    key: "physical",
    label: "Physical",
    bullets: [
      "Live shipping rates via Shippo — USPS, UPS, FedEx in checkout",
      "Atomic inventory reservation — no overselling under load",
      "Buy + print labels from admin, or accept manual tracking",
    ],
  },
  {
    key: "mobile",
    label: "Mobile",
    bullets: [
      "375px first — every screen tested at iPhone SE",
      "iOS-safe 100dvh, 44px tap targets",
      "Sheet drawer cart instead of overlay",
    ],
  },
];

export function FeatureTabs() {
  const [active, setActive] = useState("storefront");
  return (
    <section className="steep-section bg-steep-paper">
      <div className="steep-container">
        <p className="steep-caps mb-2 text-steep-ink-3">06 · Features</p>
        <h2 className="steep-h2 mb-10 max-w-[26ch]">
          Six surfaces. All finished.
        </h2>
        <Tabs.Root value={active} onValueChange={(v) => setActive(v as string)}>
          <Tabs.List className="flex flex-wrap gap-1 border-b border-steep-line">
            {tabs.map((t) => (
              <Tabs.Tab
                key={t.key}
                value={t.key}
                className={`steep-caps cursor-pointer rounded-t-md px-4 py-3 transition ${
                  active === t.key
                    ? "bg-steep-bone text-steep-ink"
                    : "text-steep-ink-3 hover:text-steep-ink"
                }`}
              >
                {t.label}
              </Tabs.Tab>
            ))}
          </Tabs.List>
          {tabs.map((t) => (
            <Tabs.Panel
              key={t.key}
              value={t.key}
              className="grid gap-8 rounded-b-xl border border-t-0 border-steep-line bg-steep-bone p-8 lg:grid-cols-[1fr_1.4fr]"
            >
              <div>
                <h3 className="steep-h3 mb-4">{t.label}</h3>
                <ul className="space-y-3">
                  {t.bullets.map((b) => (
                    <li key={b} className="steep-body flex gap-3 text-steep-ink-2">
                      <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-steep-moss" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="aspect-video rounded-lg border border-dashed border-steep-line bg-steep-paper">
                <p className="steep-meta flex h-full items-center justify-center text-steep-ink-3">
                  screenshot — /public/screenshots/{t.key}.png
                </p>
              </div>
            </Tabs.Panel>
          ))}
        </Tabs.Root>
      </div>
    </section>
  );
}
