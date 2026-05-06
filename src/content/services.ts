import type { Section } from '@/lib/types'

export const servicesSections: Section[] = [
  {
    id: 'services-hero',
    type: 'services_hero',
    props: {
      heading: 'We Provide',
      tail: ' from hardware to cloud to SaaS.',
      highlight: 'complete technology servicess',
      imagePath: '/services/banner.svg',
    },
  },
  {
    id: 'services-carousel',
    type: 'services_carousel',
    props: {
      slides: [
        {
          svgPath: '/services/svg1.svg',
          animatedSvg: 'svg1',
          heading: 'Embedded Systems & IoT',
          description:
            'From firmware development to full IoT platform integration, we build reliable embedded solutions that connect hardware to the cloud. Our team handles everything from sensor interfacing to real-time data pipelines.',
        },
        {
          svgPath: '/services/svg4.svg',
          animatedSvg: 'svg4',
          heading: 'Cloud Infrastructure Engineering',
          bgColor: '#F1F5F9',
          textColor: '#36445A',
          borderColor: 'var(--heading1, #2D9CDB)',
          svgFillColor: '#36445A',
          invert: true,
          description:
            'We Are A Trusted Team Building Scalable Solutions Across Modern Platforms.',
        },
        {
          svgPath: '/services/svg5.svg',
          animatedSvg: 'svg5',
          heading: 'Full-Stack Product Development',
          description:
            'From concept to production, we design and build scalable web and mobile products. Our cross-functional teams cover UX design, frontend, backend, and QA — delivering complete, production-ready software.',
        },
      ],
    },
  },
]
