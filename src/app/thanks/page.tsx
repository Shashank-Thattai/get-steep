import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SITE } from "@/lib/site";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Order received — your repo invite is coming",
  // Don't index — buyers reach this only from Stripe's redirect.
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  return (
    <main className="flex flex-1 items-center justify-center steep-section">
      <div className="steep-container max-w-2xl">
        <div className="rounded-xl border border-steep-line bg-steep-bone p-8 sm:p-12">
          <div className="mb-6 inline-flex size-12 items-center justify-center rounded-full bg-steep-moss/10 text-steep-moss">
            <CheckCircle2 className="size-6" />
          </div>

          <p className="steep-caps mb-2 text-steep-ink-3">Order received</p>
          <h1 className="steep-h1 mb-6">Welcome to steep.</h1>

          <p className="steep-body mb-4 text-steep-ink-2">
            Your payment went through. Stripe will email a receipt to the
            address you used at checkout — should arrive within a minute or two.
          </p>

          <p className="steep-body mb-8 text-steep-ink-2">
            Next: I&apos;ll send your private GitHub repo invite to the
            username you entered, within{" "}
            <strong>24 hours (usually within an hour during US business
            time)</strong>.
          </p>

          <div className="mb-8 rounded-lg border border-steep-line bg-steep-paper p-5">
            <p className="steep-caps mb-3 text-steep-ink-3">What happens next</p>
            <ol className="space-y-2 steep-body-sm text-steep-ink-2">
              <li>
                <strong className="font-medium">1.</strong> Check your email
                inbox for the Stripe receipt
              </li>
              <li>
                <strong className="font-medium">2.</strong> Watch your GitHub
                notifications — you&apos;ll get an invite to a private repo
                named <code className="rounded bg-steep-bone px-1 py-0.5 font-mono text-xs">steep</code>
              </li>
              <li>
                <strong className="font-medium">3.</strong> Accept the invite,
                clone the repo, follow <code className="rounded bg-steep-bone px-1 py-0.5 font-mono text-xs">QUICK_START.md</code> at the root
              </li>
              <li>
                <strong className="font-medium">4.</strong> You&apos;re selling
                this weekend.
              </li>
            </ol>
          </div>

          <div className="mb-6 rounded-lg border-l-4 border-steep-amber bg-steep-paper/60 p-4 text-steep-ink-2">
            <p className="steep-body-sm">
              <strong>Forgot to fill in your GitHub username at checkout?</strong>{" "}
              Reply to the Stripe receipt email with your username and
              I&apos;ll match it up.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${SITE.contactEmail}?subject=steep%20-%20repo%20invite%20followup`}
              className="inline-flex items-center gap-2 rounded-md bg-steep-moss px-5 py-3 text-base font-medium text-steep-bg hover:bg-steep-moss-2"
            >
              Email {SITE.founderName}
              <ArrowRight className="size-4" />
            </a>
            <Link
              href="/"
              className="inline-flex items-center rounded-md border border-steep-line bg-steep-bone px-5 py-3 text-base text-steep-ink hover:bg-steep-paper"
            >
              Back to the buy page
            </Link>
          </div>

          <p className="steep-meta mt-8 text-steep-ink-3">
            30-day refund · Lifetime updates · License terms at{" "}
            <Link href="/" className="underline">buy.steep.shashankthattai.dev</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
