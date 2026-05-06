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
          heading: 'Mobile App Development',
          description:
            'We develop secure, scalable mobile applications tailored to your business needs. Our team designs and builds native iOS and Android apps with intuitive interfaces and seamless performance, ensuring a smooth user experience across platforms.',
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
          heading: 'Cloud Operations',
          description:'We monitor, manage, and optimize your cloud infrastructure, ensuring high availability, performance, and cost efficiency. so you can focus on your core business while we handle the rest.',
        },
      ],
    },
  },
]
