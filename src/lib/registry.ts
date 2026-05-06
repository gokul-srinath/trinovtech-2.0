/**
 * Component Registry
 * Maps section type → dynamic React component
 * All components are code-split via dynamic() for optimal bundle size
 */

import dynamic from 'next/dynamic'

export const REGISTRY = {
  hero_card: dynamic(() =>
    import('@/components/sections/HeroCard').then((mod) => mod.HeroCard)
  ),
  feature_card: dynamic(() =>
    import('@/components/sections/FeatureCard').then((mod) => mod.FeatureCard)
  ),
  solution_cards: dynamic(() =>
    import('@/components/sections/SolutionCards').then((mod) => mod.SolutionCards)
  ),
  quote_card: dynamic(() =>
    import('@/components/sections/QuoteCard').then((mod) => mod.QuoteCard)
  ),
  services_grid: dynamic(() =>
    import('@/components/sections/services/ServicesGrid').then((mod) => mod.ServicesGrid)
  ),
  scroll_scrub: dynamic(() =>
    import('@/components/sections/ScrollScrubSection').then(
      (mod) => mod.ScrollScrubSection
    )
  ),
  video_section: dynamic(() =>
    import('@/components/sections/VideoSection').then((mod) => mod.VideoSection)
  ),
  cta_banner: dynamic(() =>
    import('@/components/sections/CtaBanner').then((mod) => mod.CtaBanner)
  ),
  testimonials: dynamic(() =>
    import('@/components/sections/Testimonials').then((mod) => mod.Testimonials)
  ),
  faq: dynamic(() =>
    import('@/components/sections/FAQ').then((mod) => mod.FAQ)
  ),
  about_us_hero: dynamic(() =>
    import('@/components/sections/Aboutus/AboutUsHero').then((mod) => mod.AboutUsHero)
  ),
  about_us_card: dynamic(() =>
    import('@/components/sections/Aboutus/AboutUsCard').then((mod) => mod.AboutUsCard)
  ),
  solutions_hero: dynamic(() =>
    import('@/components/sections/SolutionsHero').then((mod) => mod.SolutionsHero)
  ),
  solutions_card: dynamic(() =>
    import('@/components/sections/SolutionsCard').then((mod) => mod.SolutionsCard)
  ),
  services_hero: dynamic(() =>
    import('@/components/sections/services/ServicesHero').then((mod) => mod.ServicesHero)
  ),
  services_carousel: dynamic(() =>
    import('@/components/sections/services/ServicesCarousel').then((mod) => mod.ServicesCarousel)
  ),
  solution_detail_hero: dynamic(() =>
    import('@/components/sections/SolutionDetailHero').then((mod) => mod.SolutionDetailHero)
  ),
  solution_intro: dynamic(() =>
    import('@/components/sections/SolutionIntro').then((mod) => mod.SolutionIntro)
  ),
  solution_features: dynamic(() =>
    import('@/components/sections/SolutionFeatures').then((mod) => mod.SolutionFeatures)
  ),
  solution_workflow: dynamic(() =>
    import('@/components/sections/SolutionWorkflow').then((mod) => mod.SolutionWorkflow)
  ),
  solution_services: dynamic(() =>
    import('@/components/sections/SolutionServices').then((mod) => mod.SolutionServices)
  ),
  solution_quote: dynamic(() =>
    import('@/components/sections/SolutionQuote').then((mod) => mod.SolutionQuote)
  ),
  solution_contact: dynamic(() =>
    import('@/components/sections/SolutionContact').then((mod) => mod.SolutionContact)
  ),
  solution_icon_badges: dynamic(() =>
    import('@/components/sections/SolutionIconBadges').then((mod) => mod.SolutionIconBadges)
  ),
} as const

export type ComponentType = keyof typeof REGISTRY
