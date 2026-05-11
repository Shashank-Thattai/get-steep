import Link from "next/link";
import { SITE } from "@/lib/site";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-steep-line bg-steep-bg/85 backdrop-blur">
      <div className="steep-container flex h-14 items-center justify-between">
        <Link href="/" className="steep-display text-[22px] leading-none tracking-tight">
          steep
        </Link>
        <nav className="hidden gap-8 sm:flex">
          <a href="#demo" className="steep-caps text-steep-ink-3 hover:text-steep-ink">Demo</a>
          <a href="#pricing" className="steep-caps text-steep-ink-3 hover:text-steep-ink">Pricing</a>
          <a href="#faq" className="steep-caps text-steep-ink-3 hover:text-steep-ink">FAQ</a>
        </nav>
        <a
          href={SITE.stripePaymentLinkUrl}
          className="rounded-md bg-steep-moss px-3 py-1.5 text-sm font-medium text-steep-bg hover:bg-steep-moss-2"
        >
          Get steep
        </a>
      </div>
    </header>
  );
}
