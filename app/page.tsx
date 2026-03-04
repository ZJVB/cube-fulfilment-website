import { SiteHeader } from "@/components/site-header"
import { HeroBanner } from "@/components/sections/hero-banner"
import { QuantityStats } from "@/components/sections/quantity-stats"
import { IntroduceSection } from "@/components/sections/introduce-section"
import { ServiceSection } from "@/components/sections/service-section"
import { SolutionsSection } from "@/components/sections/solutions-section"
import { ProductSection } from "@/components/sections/product-section"
import { DeviceSection } from "@/components/sections/device-section"
import { TestimonialSection } from "@/components/sections/testimonial-section"
import { CooperateSection } from "@/components/sections/cooperate-section"
import { InformationSection } from "@/components/sections/information-section"
import { CtaSection } from "@/components/sections/cta-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-20">
        <HeroBanner />
        <QuantityStats />
        <IntroduceSection />
        <ServiceSection />
        <SolutionsSection />
        <ProductSection />
        <DeviceSection />
        <TestimonialSection />
        <CooperateSection />
        <InformationSection />
        <CtaSection />
        <ExperienceSection />
      </main>
      <SiteFooter />
    </>
  )
}
