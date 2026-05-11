import { ArrowRight } from "lucide-react";
import { COHORT, currentPrice, nextThreshold } from "@/lib/early-count";

/**
 * Sticky top announcement bar — sits above the nav, visible the whole
 * scroll. Honest urgency: shows the real cohort count + the real next
 * price. No fake countdowns.
 */
export function EarlyAccessBar() {
  const price = currentPrice();
  const next = nextThreshold();
  const seatsLeft = next ? next.at - COHORT.sold : 0;
  if (!next) return null;
  return (
    <a
      href="#pricing"
      className="block bg-steep-moss text-steep-bg hover:bg-steep-moss-2 transition-colors"
    >
      <div className="steep-container flex flex-wrap items-center justify-center gap-x-4 gap-y-1 py-2 text-center">
        <span className="steep-caps text-steep-sage">Early access</span>
        <span className="steep-body-sm">
          <strong className="font-medium">${price}</strong> for the next{" "}
          <strong className="font-medium tabular">{seatsLeft}</strong> buyer
          {seatsLeft === 1 ? "" : "s"} · then{" "}
          <span className="line-through opacity-70">${price}</span>{" "}
          <strong className="font-medium">${next.price}</strong>
        </span>
        <span className="inline-flex items-center gap-1 text-sm font-medium">
          Lock in <ArrowRight className="size-3.5" />
        </span>
      </div>
    </a>
  );
}
