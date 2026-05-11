export const SITE = {
  name: "steep",
  domain: "buy.steep.shashankthattai.dev",
  url: "https://buy.steep.shashankthattai.dev",
  demoUrl: "https://steep.shashankthattai.dev",
  componentsUrl: "https://steep-components.shashankthattai.dev",
  // TODO: replace with real Stripe Payment Link before launch
  stripePaymentLinkUrl:
    process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK_URL ?? "#pricing",
  // TODO: real contact email
  contactEmail: "shashank@steep.shashankthattai.dev",
  twitterHandle: "@shashankthattai",
  founderName: "Shashank",
} as const;
