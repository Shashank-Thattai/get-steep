import { Quote } from "lucide-react";

const featured = {
  quote: "{{REPLACE_WITH_REAL_TESTIMONIAL_QUOTE}} — short, concrete, results-oriented.",
  name: "{{NAME}}",
  role: "{{ROLE}}",
};

export function Testimonials() {
  return (
    <section className="steep-section">
      <div className="steep-container">
        <p className="steep-caps mb-2 text-steep-ink-3">13 · What buyers say</p>
        <h2 className="steep-h2 mb-10 max-w-[26ch]">
          Early days. One real voice so far.
        </h2>

        <div className="grid gap-4 md:grid-cols-[1.4fr_1fr]">
          <figure className="rounded-xl border border-steep-line bg-steep-bone p-8">
            <Quote className="mb-4 size-5 text-steep-moss" strokeWidth={1.5} />
            <blockquote className="steep-h3 mb-6 font-normal text-steep-ink-2">
              &ldquo;{featured.quote}&rdquo;
            </blockquote>
            <figcaption>
              <div className="steep-body font-medium">{featured.name}</div>
              <div className="steep-meta text-steep-ink-3">{featured.role}</div>
            </figcaption>
          </figure>

          <div className="rounded-xl border border-dashed border-steep-line bg-steep-paper p-8 text-center">
            <div className="steep-caps mb-2 text-steep-ink-3">Your quote here</div>
            <p className="steep-body text-steep-ink-2">
              You&apos;d be one of the first {25} buyers. Your testimonial gets
              featured here for life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
