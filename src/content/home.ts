/**
 * Home Page Content
 * Typed data structure — will be swapped with Supabase later without refactoring components
 * Update this file to change page content; components remain static
 */

import type { Section } from '@/lib/types'

export const homeSections: Section[] = [
  {
    id: 'hero',
    type: 'hero_card',
    props: {
      heading: 'We Offer <em>End-To-End</em><br />Tech Consulting Services',
      subtext:
        'We Deliver Complete Tech Solutions, From Concept To Production, Built For Scale And Reliability.',
      ctaLabel: 'Know More',
      ctaHref: '#services',
      assetPath: '/assets/images/hero-team.webp',
      assetType: 'image',
    },
  },
  {
    id: 'services',
    type: 'services_grid',
    props: {
      heading: 'Services We Provide',
      items: [
        {
          heading: 'Embedded Systems And IoT',
          description: 'Custom hardware solutions and embedded software development',
          assetPath: '/assets/images/iot.webp',
          href: '#',
        },
        {
          heading: 'SaaS And Enterprise Application',
          description: 'Scalable web and mobile applications built for enterprise',
          assetPath: '/assets/images/saas.webp',
          href: '#',
        },
        {
          heading: 'Managed Cloud Services',
          description: 'Infrastructure management and cloud optimization',
          assetPath: '/assets/images/cloud.webp',
          href: '#',
        },
      ],
    },
  },
  {
    id: 'cta-banner',
    type: 'cta_banner',
    props: {
      heading: 'Ready to Transform Your Tech?',
      description: "Let's discuss your project requirements and timeline",
      ctaLabel: 'Contact Us',
      ctaHref: '#contact',
      backgroundColor: 'heading2',
    },
  },
]
