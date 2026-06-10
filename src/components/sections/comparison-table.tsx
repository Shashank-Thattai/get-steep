import { Check, X } from "lucide-react";

type Cell = string | boolean;
const cols = ["steep", "Shopify", "GoDaddy", "ShipFast", "DIY"] as const;
const rows: { label: string; values: [Cell, Cell, Cell, Cell, Cell] }[] = [
  { label: "Price", values: ["$199 once", "$39/mo", "$20.99/mo (Commerce)", "$199–$299 once", "$0 + time"] },
  { label: "Setup time", values: ["~2 hours", "~1 day", "~1 day", "~hours (then build product)", "80–200 hrs"] },
  { label: "Own the code", values: [true, false, false, true, true] },
  { label: "Storefront included", values: [true, true, true, false, false] },
  { label: "Admin panel included", values: [true, true, true, false, false] },
  { label: "Cart + PDP + checkout", values: [true, true, true, false, false] },
  { label: "Coupons / refund flow", values: [true, true, "partial", false, false] },
  { label: "Subscription billing (Stripe)", values: [true, "addon", false, true, false] },
  { label: "MRR / ARR / churn dashboard", values: [true, false, false, false, false] },
  { label: "Customer portal + cancel UI", values: [true, false, false, "partial", false] },
  { label: "Live shipping rates (Shippo)", values: [true, true, "partial", false, false] },
  { label: "Inventory + oversell protection", values: [true, true, "partial", false, false] },
  { label: "Digital downloads (signed URLs)", values: [true, "addon", false, false, false] },
  { label: "MFA / passkeys", values: [true, "admin only", false, false, false] },
  { label: "Customizable (source)", values: [true, false, false, true, true] },
  { label: "5-year TCO", values: ["$199", "$2,340", "$1,200+", "$199–$299 + dev hrs", "$0 + 200 hrs"] },
];

function Cell({ v }: { v: Cell }) {
  if (v === true)
    return (
      <>
        <Check aria-hidden className="size-4 text-steep-moss" />
        <span className="sr-only">Included</span>
      </>
    );
  if (v === false)
    return (
      <>
        <X aria-hidden className="size-4 text-steep-err" />
        <span className="sr-only">Not included</span>
      </>
    );
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
          Every number is verifiable. ShipFast is a SaaS boilerplate (you build
          the product on top) — fair comparison because both are indie kits at
          similar price points, but they solve different problems.
        </p>
        <p className="steep-meta mt-2 text-steep-ink-3">
          Verified June 10, 2026 against shopify.com/pricing, shipfa.st, godaddy.com/websites/ecommerce-website.
        </p>
      </div>
    </section>
  );
}
