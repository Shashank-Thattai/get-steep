# get-steep

Buy-page for [steep](https://steep.shashankthattai.dev) — the finished
Next.js storefront kit. Deploys to `buy.steep.shashankthattai.dev`.

## Stack
- Next.js 16 (App Router, Turbopack, Server Components)
- Tailwind 4 with steep brand tokens (Bone & Moss, ported from `/kit`)
- Base UI primitives (Tabs, Accordion)
- Fraunces (display) · Inter Tight (sans) · JetBrains Mono — same triplet as the kit
- Zero analytics SDKs

## Dev
```bash
npm install
npm run dev          # http://localhost:3002
npm run typecheck
npm run build
```

The page composes 17 sections from `src/components/sections/*` — each
section is a self-contained server (or client where needed) component
with copy inlined. Iterate on copy directly in the component files.

## Configure
- `src/lib/site.ts` — name, domain, contact email, Stripe payment link
- `src/lib/early-count.ts` — cohort pricing thresholds + sold count
- `src/app/layout.tsx` — metadata, OG description
- `src/app/globals.css` — brand tokens (matches `/kit`)

## Deploy
```bash
vercel link
vercel --prod
```
Then add `buy.steep.shashankthattai.dev` in the Vercel project's Domains
tab. Set env `NEXT_PUBLIC_STRIPE_PAYMENT_LINK_URL` to your Stripe
payment-link URL.

## Roadmap (post-launch)
- Plausible analytics (privacy-respecting, no banner)
- Stripe webhook → auto-increment cohort count
- Stripe webhook → Resend repo-invite email
- Real screenshots for the feature tabs (currently dashed placeholders)
- Shiki syntax-highlight the code preview (currently plain `<pre>`)
- Optional dark theme toggle
