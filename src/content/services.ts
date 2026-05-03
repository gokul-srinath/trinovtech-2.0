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
          heading: 'Embedded Systems & IoT',
          description:
            'From firmware development to full IoT platform integration, we build reliable embedded solutions that connect hardware to the cloud. Our team handles everything from sensor interfacing to real-time data pipelines.',
        },
        {
          svgPath: '/services/svg2.svg',
          heading: 'Cloud & DevOps',
          description:
            'We architect, migrate, and manage cloud infrastructure on AWS, Azure, and GCP. Our DevOps practice automates CI/CD pipelines, infrastructure-as-code, and monitoring so your team ships faster with confidence.',
        },
        {
          svgPath: '/services/svg3.svg',
          heading: 'Full-Stack Product Development',
          description:
            'From concept to production, we design and build scalable web and mobile products. Our cross-functional teams cover UX design, frontend, backend, and QA — delivering complete, production-ready software.',
        },
      ],
    },
  },
]
