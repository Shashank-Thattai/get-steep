"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { currentPrice, nextThreshold } from "@/lib/early-count";

/**
 * Bottom-of-screen CTA that slides in after the buyer has scrolled past
 * the hero (~600px). Provides a always-on Buy button without doubling
 * up on the pricing section's CTA. Hides on the pricing section itself.
 */
export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > 600;
      // Hide when the pricing section is in view (double-CTA noise).
      const pricing = document.getElementById("pricing");
      const inPricing = pricing
        ? pricing.getBoundingClientRect().top < window.innerHeight * 0.8 &&
          pricing.getBoundingClientRect().bottom > 0
        : false;
      setVisible(past && !inPricing);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const price = currentPrice();
  const next = nextThreshold();
  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-steep-line bg-steep-bone shadow-[var(--steep-shadow-3)] transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="steep-container flex flex-wrap items-center justify-between gap-3 py-3">
        <div className="flex items-center gap-3">
          <div className="steep-display text-2xl text-steep-moss leading-none">
            ${price}
          </div>
          <div className="steep-body-sm text-steep-ink-2">
            <div className="font-medium">steep — finished storefront kit</div>
            <div className="text-steep-ink-3 text-[12px]">
              {next
                ? `Goes to $${next.price} at ${next.at} buyers · 14-day refund — no refund after download or invite`
                : "14-day refund — no refund after download or invite · Lifetime updates"}
            </div>
          </div>
        </div>
        <a
          href="https://www.shipsteep.com/products/steep"
          className="inline-flex items-center gap-2 rounded-md bg-steep-moss px-5 py-2.5 text-sm font-medium text-steep-bg hover:bg-steep-moss-2"
        >
          Get steep — ${price}
          <ArrowRight className="size-4" />
        </a>
      </div>
    </div>
  );
}
