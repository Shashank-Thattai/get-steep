import {
  Database, Key, Fingerprint, FileLock, ShieldCheck, Gauge, ScrollText, Webhook,
} from "lucide-react";

const items = [
  { Icon: Database, name: "RLS on every table", body: "Buyers see only their own orders — enforced at the database row level, not in code." },
  { Icon: Fingerprint, name: "MFA + WebAuthn passkeys for admin", body: "TOTP and hardware-backed passkeys for every admin account. No password-only logins." },
  { Icon: ShieldCheck, name: "CSP nonces, no unsafe-inline", body: "Strict Content Security Policy with per-request nonces. No inline scripts or styles." },
  { Icon: Gauge, name: "Per-IP rate limiting", body: "Throttling on auth, checkout, and coupon endpoints. Brute-force attempts are blocked." },
  { Icon: Webhook, name: "Stripe / Shippo / LemonSqueezy webhook signatures verified", body: "Every webhook is HMAC-verified and idempotent. Replays are rejected." },
  { Icon: FileLock, name: "HMAC-signed downloads (5-min TTL, 10-download cap, email watermark)", body: "Download URLs expire in 5 minutes, cap at 10 downloads per purchase, and embed the buyer email watermark." },
  { Icon: Key, name: "STEEP_LICENSE_ID watermark (DMCA-traceable per buyer)", body: "Every buyer's repo carries a unique license ID — if it leaks, the DMCA trail is unambiguous." },
  { Icon: ScrollText, name: "462 unit tests + Playwright E2E + 78% coverage", body: "Security regressions get caught before they ship. The test suite is part of the kit." },
];

export function SecurityGrid() {
  return (
    <section className="steep-section bg-steep-moss text-steep-bg">
      <div className="steep-container">
        <p className="steep-caps mb-2 text-steep-sage">08 · Security</p>
        <h2 className="steep-h2 mb-10 max-w-[26ch] text-steep-bg">
          Built like the bank doesn&apos;t trust you.
        </h2>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl bg-steep-moss-2 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ Icon, name, body }) => (
            <div key={name} className="bg-steep-moss p-6">
              <Icon className="mb-4 size-5 text-steep-sage" strokeWidth={1.5} />
              <div className="steep-h3 mb-2 text-steep-bg">{name}</div>
              <p className="steep-body-sm text-steep-sage-2">{body}</p>
            </div>
          ))}
        </div>
        <p className="steep-meta mt-6 text-steep-sage">
          Most boilerplates ship none of this. steep ships all of it on day zero.
        </p>
      </div>
    </section>
  );
}
