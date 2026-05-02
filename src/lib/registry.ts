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
  services_grid: dynamic(() =>
    import('@/components/sections/ServicesGrid').then((mod) => mod.ServicesGrid)
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
} as const

export type ComponentType = keyof typeof REGISTRY
