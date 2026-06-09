/**
 * Cohort scarcity — real number, not a fake countdown.
 *
 * v1: static config. Buyer count is incremented manually after each sale.
 * v2 (Phase F): increment automatically via Stripe webhook → Supabase.
 */
export const COHORT = {
  sold: 2,
  earlySeats: 10,
  earlyPriceUsd: 199,
  midPriceUsd: 250,
  midSeats: 50,
  finalPriceUsd: 299,
} as const;

export function currentPrice(): number {
  if (COHORT.sold < COHORT.earlySeats) return COHORT.earlyPriceUsd;
  if (COHORT.sold < COHORT.midSeats) return COHORT.midPriceUsd;
  return COHORT.finalPriceUsd;
}

export function nextThreshold(): { price: number; at: number } | null {
  if (COHORT.sold < COHORT.earlySeats) {
    return { price: COHORT.midPriceUsd, at: COHORT.earlySeats };
  }
  if (COHORT.sold < COHORT.midSeats) {
    return { price: COHORT.finalPriceUsd, at: COHORT.midSeats };
  }
  return null;
}

export function seatsRemainingInCohort(): number {
  if (COHORT.sold < COHORT.earlySeats) return COHORT.earlySeats - COHORT.sold;
  if (COHORT.sold < COHORT.midSeats) return COHORT.midSeats - COHORT.sold;
  return 0;
}
