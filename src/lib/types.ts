/**
 * Core type definitions for the Trinovtech SPA
 * All content sections extend the `Section` interface
 */

export interface Section {
  id: string
  type: SectionType
  props: Record<string, any>
}

export type SectionType =
  | 'hero_card'
  | 'feature_card'
  | 'solution_cards'
  | 'quote_card'
  | 'services_grid'
  | 'scroll_scrub'
  | 'video_section'
  | 'cta_banner'
  | 'testimonials'
  | 'faq'
  | 'about_us_hero'
  | 'about_us_card'
  | 'solutions_hero'
  | 'solutions_card'
  | 'services_hero'
  | 'services_carousel'
  | 'solution_detail_hero'
  | 'solution_intro'
  | 'solution_features'
  | 'solution_workflow'
  | 'solution_services'
  | 'solution_quote'
  | 'solution_contact'
  | 'solution_icon_badges'
  | 'blog_hero'
  | 'blog_featured'
  | 'blog_grid'
  | 'services_icon_grid'

/**
 * Image asset with optimization metadata
 */
export interface ImageAsset {
  path: string
  alt: string
  width: number
  height: number
  blurHash?: string
  sizes?: string
}

/**
 * Video asset with poster and fallback
 */
export interface VideoAsset {
  videoPath: string
  posterPath: string
  fallbackImagePath?: string
  width: number
  height: number
}

/**
 * Generic card item (used in grids, lists, etc.)
 */
export interface CardItem {
  heading: string
  description?: string
  assetPath?: string
  href?: string
  icon?: string
}
