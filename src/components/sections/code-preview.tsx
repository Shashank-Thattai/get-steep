"use client";
import { Tabs } from "@base-ui/react/tabs";
import { useState } from "react";

const samples = [
  {
    key: "rls",
    label: "RLS policy",
    file: "supabase/migrations/001_initial_schema.sql",
    code: `-- Buyers can read only their own orders.
CREATE POLICY "buyers_read_own_orders"
  ON public.orders
  FOR SELECT
  USING (auth.uid() = user_id);

-- And only via the same row's order_items.
CREATE POLICY "buyers_read_own_items"
  ON public.order_items
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.orders o
      WHERE o.id = order_id AND o.user_id = auth.uid()
    )
  );`,
  },
  {
    key: "webhook",
    label: "Stripe webhook",
    file: "src/app/api/webhooks/stripe/route.ts",
    code: `export async function POST(req: Request) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature")!;
  const event = stripe.webhooks.constructEvent(
    body, sig, process.env.STRIPE_WEBHOOK_SECRET!,
  );

  // Idempotent — same event id processed once.
  const { error } = await supabase
    .from("processed_stripe_events")
    .insert({ id: event.id });
  if (error?.code === "23505") return Response.json({ ok: true });

  await handleEvent(event);
  return Response.json({ ok: true });
}`,
  },
  {
    key: "download",
    label: "Download signing",
    file: "src/lib/download-sign.ts",
    code: `import { createHmac } from "node:crypto";

export function signDownload(itemId: string, orderId: string) {
  const exp = Math.floor(Date.now() / 1000) + 60 * 15; // 15 min
  const payload = \`\${orderId}.\${itemId}.\${exp}\`;
  const sig = createHmac("sha256", process.env.DOWNLOAD_SIGNING_SECRET!)
    .update(payload)
    .digest("hex");
  return \`/api/orders/download/\${itemId}?exp=\${exp}&sig=\${sig}&o=\${orderId}\`;
}`,
  },
];

export function CodePreview() {
  const [active, setActive] = useState("rls");
  const sample = samples.find((s) => s.key === active)!;
  return (
    <section className="steep-section">
      <div className="steep-container">
        <p className="steep-caps mb-2 text-steep-ink-3">09 · Inside the code</p>
        <h2 className="steep-h2 mb-10 max-w-[26ch]">
          Real snippets. Verified at build time.
        </h2>
        <Tabs.Root value={active} onValueChange={(v) => setActive(v as string)}>
          <Tabs.List className="flex flex-wrap gap-1 border-b border-steep-line">
            {samples.map((s) => (
              <Tabs.Tab
                key={s.key}
                value={s.key}
                className={`steep-caps cursor-pointer rounded-t-md px-4 py-3 transition ${
                  active === s.key
                    ? "bg-steep-ink text-steep-bg"
                    : "text-steep-ink-3 hover:text-steep-ink"
                }`}
              >
                {s.label}
              </Tabs.Tab>
            ))}
          </Tabs.List>
        </Tabs.Root>
        <div className="overflow-hidden rounded-b-xl border border-t-0 border-steep-line bg-steep-ink">
          <div className="flex items-center justify-between border-b border-steep-ink-2 px-4 py-2">
            <span className="steep-meta text-steep-ink-4">{sample.file}</span>
            <span className="steep-meta text-steep-sage">{sample.label}</span>
          </div>
          <pre className="overflow-x-auto p-5 text-[13px] leading-relaxed text-steep-bg">
            <code className="font-mono">{sample.code}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}
