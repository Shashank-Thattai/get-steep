import {
  Database, Key, Fingerprint, FileLock, ShieldCheck, Gauge, ScrollText, Webhook,
} from "lucide-react";

const items = [
  { Icon: Database, name: "RLS", body: "Buyers see only their own orders — enforced at the database row level, not in code." },
  { Icon: Key, name: "MFA", body: "TOTP second factor for all admin accounts, with backup codes." },
  { Icon: Fingerprint, name: "Passkeys", body: "WebAuthn passwordless auth for admins. Hardware key support." },
  { Icon: FileLock, name: "Signed downloads", body: "HMAC-signed URLs with short expiry — no guessing item IDs." },
  { Icon: ShieldCheck, name: "CSRF", body: "Token validation on every mutating request. Cookies are SameSite=Lax." },
  { Icon: Gauge, name: "Rate-limit", body: "Per-IP throttling on auth and checkout endpoints. Coupon brute-force blocked." },
  { Icon: ScrollText, name: "Audit log", body: "Every admin write is recorded with actor, IP, before/after." },
  { Icon: Webhook, name: "Stripe sig verify", body: "Webhooks require Stripe signature + idempotent event processing." },
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
