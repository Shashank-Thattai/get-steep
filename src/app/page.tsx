import { Nav } from "@/components/meta/nav";
import { EarlyAccessBar } from "@/components/meta/early-access-bar";
import { StickyCta } from "@/components/meta/sticky-cta";
import { Hero } from "@/components/sections/hero";
import { LiveDemo } from "@/components/sections/live-demo";
import { PainBlock } from "@/components/sections/pain";
import { ComparisonTable } from "@/components/sections/comparison-table";
import { BoxInventory } from "@/components/sections/box-inventory";
import { FeatureTabs } from "@/components/sections/feature-tabs";
import { TechStack } from "@/components/sections/tech-stack";
import { SecurityGrid } from "@/components/sections/security-grid";
import { CodePreview } from "@/components/sections/code-preview";
import { SkipIf } from "@/components/sections/skip-if";
import { WhoFor } from "@/components/sections/who-for";
import { Founder } from "@/components/sections/founder";
import { Testimonials } from "@/components/sections/testimonials";
import { PricingCard } from "@/components/sections/pricing-card";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";

export default function Page() {
  return (
    <>
      <EarlyAccessBar />
      <Nav />
      <main className="flex-1">
        <Hero />
        <LiveDemo />
        <PainBlock />
        <ComparisonTable />
        <BoxInventory />
        <FeatureTabs />
        <TechStack />
        <SecurityGrid />
        <CodePreview />
        <SkipIf />
        <WhoFor />
        <Founder />
        <Testimonials />
        <PricingCard />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
