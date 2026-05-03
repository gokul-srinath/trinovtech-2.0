import type { Section } from '@/lib/types'

export const solutionsSections: Section[] = [
  {
    id: 'solutions-hero',
    type: 'solutions_hero',
    props: {
      heading: 'Our solutions are designed to drive ',
      highlight: 'meaningful business outcomes',
      tail: ' and simplify complexity',
      imagePath: '/solutions/banner.png',
    },
  },
  {
    id: 'embedded-iot',
    type: 'solutions_card',
    props: {
      heading: 'Embedded Systems And IoT',
      text: 'We Are A Trusted Team Building Scalable Solutions Across Modern Platforms.',
      imagePath: '/solutions/img1.png',
      ctaLabel: 'Know More',
      ctaHref: '#embedded-iot',
      ctaColor: '#2d9cdb',
      invert: false,
    },
  },
  {
    id: 'saas-enterprise',
    type: 'solutions_card',
    props: {
      heading: 'SaaS And Enterprise Aplication',
      text: 'We Are A Trusted Team Building Scalable Solutions Across Modern Platforms.',
      imagePath: '/solutions/img2.png',
      ctaLabel: 'Know More',
      ctaHref: '#saas-enterprise',
      ctaColor: '#2EB673',
      invert: true,
    },
  },
  {
    id: 'managed-cloud',
    type: 'solutions_card',
    props: {
      heading: 'Managed Cloud Services',
      text: 'We Are A Trusted Team Building Scalable Solutions Across Modern Platforms.',
      imagePath: '/solutions/img3.png',
      ctaLabel: 'Know More',
      ctaHref: '#managed-cloud',
      ctaColor: '#8BC926',
      invert: false,
    },
  },
]
