import { ArrowRight } from "lucide-react";
import { currentPrice } from "@/lib/early-count";

export function FinalCta() {
  const price = currentPrice();
  return (
    <section className="steep-section bg-steep-moss text-steep-bg">
      <div className="steep-container max-w-3xl text-center">
        <h2 className="steep-display mb-6 text-steep-bg">
          Your store. Your code. This weekend.
        </h2>
        <a
          href="https://www.shipsteep.com/products/steep"
          className="inline-flex items-center gap-2 rounded-md bg-steep-bg px-6 py-4 text-base font-medium text-steep-moss shadow-sm transition hover:bg-steep-paper"
        >
          Get steep — ${price}
          <ArrowRight className="size-4" />
        </a>
        <p className="steep-meta mt-4 text-steep-sage">
          14-day refund · Lifetime updates · Pay once
        </p>
      </div>
    </section>
  );
}
