export const SITE = {
  name: "steep",
  domain: "buy.steep.shashankthattai.dev",
  url: "https://buy.steep.shashankthattai.dev",
  // Live preview iframe: real prod storefront so the page looks
  // populated immediately.
  demoUrl: "https://steep.shashankthattai.dev",
  // Spawn flow: opening this in a new tab gives the visitor an
  // isolated sandbox (HMAC-signed tenant cookie, 4h idle TTL).
  demoSpawnUrl: "https://demo.steep.shashankthattai.dev/demo",
  componentsUrl: "https://steep-components.shashankthattai.dev",
  // Stripe Payment Link → $199 one-off, captures GitHub username via
  // custom field, redirects to /thanks. Override with the env var if
  // you swap to a different link later.
  stripePaymentLinkUrl:
    process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK_URL ??
    "https://buy.stripe.com/3cI00l4YV7zO89Y8Mf0co00",
  // TODO: real contact email
  contactEmail: "shashank@steep.shashankthattai.dev",
  twitterHandle: "@shashankthattai",
  founderName: "Shashank",
} as const;
