import { Check, X } from "lucide-react";

type Cell = string | boolean;
const cols = ["steep", "Shopify", "GoDaddy", "ShipFast", "DIY"] as const;
const rows: { label: string; values: [Cell, Cell, Cell, Cell, Cell] }[] = [
  { label: "Price", values: ["$199 once", "$29/mo", "$10–25/mo", "$249 once", "$0 + time"] },
  { label: "Setup time", values: ["~2 hours", "~1 day", "~1 day", "1–2 weeks", "80–200 hrs"] },
  { label: "Own the code", values: [true, false, false, true, true] },
  { label: "Storefront included", values: [true, true, true, false, false] },
  { label: "Admin panel included", values: [true, true, true, false, false] },
  { label: "Cart + PDP + checkout", values: [true, true, true, false, false] },
  { label: "Coupons / refund flow", values: [true, true, "partial", false, false] },
  { label: "MFA / passkeys", values: [true, "addon", false, false, false] },
  { label: "Signed downloads", values: [true, false, false, false, false] },
  { label: "Customizable (source)", values: [true, false, false, true, true] },
  { label: "5-year TCO", values: ["$199", "$1,740", "$1,200+", "$249 + dev hrs", "$0 + 200 hrs"] },
];

function Cell({ v }: { v: Cell }) {
  if (v === true) return <Check className="size-4 text-steep-moss" />;
  if (v === false) return <X className="size-4 text-steep-ink-4" />;
  return <span className="steep-meta text-steep-ink-2">{v}</span>;
}

export function ComparisonTable() {
  return (
    <section className="steep-section bg-steep-paper">
      <div className="steep-container">
        <p className="steep-caps mb-2 text-steep-ink-3">04 · Head-to-head</p>
        <h2 className="steep-h2 mb-10 max-w-[24ch]">
          steep vs the alternatives.
        </h2>
        <div className="overflow-x-auto rounded-xl border border-steep-line bg-steep-bone">
          <table className="w-full min-w-[640px] border-collapse">
            <thead>
              <tr className="border-b border-steep-line">
                <th className="steep-caps p-4 text-left text-steep-ink-3"></th>
                {cols.map((c) => (
                  <th
                    key={c}
                    className={`steep-caps p-4 text-left ${
                      c === "steep" ? "text-steep-moss" : "text-steep-ink-3"
                    }`}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-b border-steep-line last:border-0">
                  <td className="steep-body p-4 font-medium">{row.label}</td>
                  {row.values.map((v, i) => (
                    <td
                      key={i}
                      className={`p-4 ${i === 0 ? "bg-steep-paper/60" : ""}`}
                    >
                      <Cell v={v} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="steep-meta mt-4 text-steep-ink-3">
          Every number is verifiable. ShipFast is for SaaS, not stores — listed
          for context only.
        </p>
      </div>
    </section>
  );
}
