import { User, Building2, Briefcase } from "lucide-react";

const personas = [
  {
    Icon: User,
    label: "Solo dev",
    desc: "You built a thing — a template, a guide, a tool — and you&apos;re tired of explaining Gumroad fees and missing checkout fields. You want a real store you control.",
  },
  {
    Icon: Briefcase,
    label: "Indie founder",
    desc: "You sell digital goods full-time. Shopify works but bleeds margin and locks you in. steep gives you the same surface area without the rent.",
  },
  {
    Icon: Building2,
    label: "Agency",
    desc: "You build sites for clients who need a store. Buy steep once, fork-per-client, ship in days instead of months. (Resale terms in the license.)",
  },
];

export function WhoFor() {
  return (
    <section className="steep-section">
      <div className="steep-container">
        <p className="steep-caps mb-2 text-steep-ink-3">11 · Who it&apos;s for</p>
        <h2 className="steep-h2 mb-10 max-w-[26ch]">Three kinds of buyer.</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {personas.map(({ Icon, label, desc }) => (
            <div
              key={label}
              className="rounded-lg border border-steep-line bg-steep-bone p-6"
            >
              <Icon className="mb-4 size-5 text-steep-moss" strokeWidth={1.5} />
              <div className="steep-h3 mb-2">{label}</div>
              <p
                className="steep-body-sm text-steep-ink-2"
                dangerouslySetInnerHTML={{ __html: desc }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
