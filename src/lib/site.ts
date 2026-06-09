export const SITE = {
  name: "steep",
  domain: "buy.shipsteep.com",
  url: "https://buy.shipsteep.com",
  // Live preview iframe: real prod storefront so the page looks
  // populated immediately.
  demoUrl: "https://www.shipsteep.com",
  // Spawn flow: opening this in a new tab gives the visitor an
  // isolated sandbox (HMAC-signed tenant cookie, 4h idle TTL).
  demoSpawnUrl: "https://demo.shipsteep.com/demo",
  componentsUrl: "https://steep-components.shipsteep.com",
  // Stripe Payment Link → $199 one-off, captures GitHub username via
  // custom field, redirects to /thanks. Override with the env var if
  // you swap to a different link later.
  stripePaymentLinkUrl:
    process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK_URL ??
    "https://buy.stripe.com/3cI00l4YV7zO89Y8Mf0co00",
  contactEmail: "shipsteep@gmail.com",
  twitterHandle: "@shipsteep",
  founderName: "Shashank",
} as const;
