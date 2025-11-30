import CtaSection from '@/components/sections/home/CtaSection'
import CategoriesPreviewSection from '@/components/sections/home/CategoriesPreviewSection'
import CraftsmanshipSection from '@/components/sections/home/CraftsmanshipSection'
import HeroSection from '@/components/sections/home/HeroSection'
import ServiceAreasSection from '@/components/sections/home/ServiceAreasSection'
import SpecializationsSection from '@/components/sections/home/SpecializationsSection'
import TestimonialsSection from '@/components/sections/home/TestimonialsSection'
import WhyChooseUsSection from '@/components/sections/home/WhyChooseUsSection'
import SEOHead from '@/components/ui/SEOHead'
import { pageMeta } from '@/data/meta'

const HomePage = () => {
  const meta = pageMeta.home

  return (
    <>
      <SEOHead meta={meta} />
      <HeroSection />
      <SpecializationsSection />
      <WhyChooseUsSection />
      <CategoriesPreviewSection />
      <CraftsmanshipSection />
      <ServiceAreasSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  )
}

export default HomePage

