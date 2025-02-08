import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { PartnersSection } from "@/components/partners-section"
import { FeatureSection } from "@/components/feature-section"
import { StepsSection } from "@/components/steps-section"
import { FeaturesGrid } from "@/components/features-grid"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <HeroSection />
        <PartnersSection />
        <FeatureSection />
        <StepsSection />
        <FeaturesGrid />
      </main>
      <SiteFooter />
    </div>
  )
}

