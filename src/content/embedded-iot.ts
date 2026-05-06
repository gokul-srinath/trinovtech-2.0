import type { Section } from '@/lib/types'

export const embeddedIotSections: Section[] = [
  {
    id: 'hero',
    type: 'solution_detail_hero',
    props: {
      heading: 'Engineering Intelligence From Silicon To Smart Systems',
      highlight: '',
      tail: '',
      imagePath: '/detail page imgs/banner bg.png',
    },
  },
  {
    id: 'intro',
    type: 'solution_intro',
    props: {
      heading: 'Embedded Systems & IoT Solutions',
      description:"We design and build robust embedded systems and IoT solutions tailored for real-world performance. From hardware architecture to firmware and cloud integration, our approach ensures seamless connectivity, reliability, and scalability across industries. Every solution is engineered to handle practical field challenges while maintaining high efficiency and long-term stability. \
Our team brings deep expertise in system design, PCB development, firmware engineering, and Linux-based platforms—enabling complete product development under one roof. We focus on delivering optimized, production-ready solutions that integrate smoothly with your ecosystem and evolve with your business needs."
      },
  },
  {
    id: 'features',
    type: 'solution_features',
    props: {
      features: [
        {
          heading: 'End-To-End Engineering',
          description:
            'Complete Ownership From Hardware Design To Firmware Development, Ensuring Seamless Integration Across All System Dependencies.',
          // iconPath: '/detail page icons/Layer_1.svg',
        },
        {
          heading: 'Real-World Reliability',
          description:
            'Solutions Built And Tested For Field Conditions With Stress Testing, Thermal Analysis, And Efficient Power Management.',
          // iconPath: '/detail page icons/Capa_1.svg',
        },
        {
          heading: 'Scalable Architecture',
          description:
            'Future-Ready Designs That Support Upgrades, Integrations, And Deployment Across Multiple Environments, Simplifying The System.',
          // iconPath: '/detail page icons/Mask group.svg',
        },
      ],
    },
  },
  {
    id: 'workflow',
    type: 'solution_workflow',
    props: {
      heading: 'Work Flow',
      steps: [
        {
          title: 'Requirement Understanding & Feasibility Analysis',
          description:
            'We Analyze Your Use Case, Technical Requirements, And Field Conditions To Define A Clear And Practical System Approach.',
        },
        {
          title: 'System Architecture & Component Selection',
          description:
            'We Design The System Architecture And Select The Right Processors, Sensors, And Communication Modules For Optimal Performance.',
        },
        {
          title: 'PCB Design & Hardware Development',
          description:
            'We Develop Efficient And Reliable PCB Designs With Proper Layout, Power Management, And Manufacturability Considerations.',
        },
        {
          title: 'Firmware Development & Device Control',
          description:
            'We Build Stable Firmware To Handle Device Logic, Real-Time Operations, And Seamless Communication Between Components.',
        },
        {
          title: 'Linux/RTOS & Driver Development',
          description:
            'We Customize Linux Or RTOS Environments, Develop Drivers, And Integrate APIs And Communication Protocols For Real-Time Data Flow.',
        },
        {
          title: 'System Integration With Cloud & Applications',
          description:
            'We Connect Devices With Cloud Platforms And Applications Using Modern APIs And Communication Protocols For Real-Time Data Flow.',
        },
        {
          title: 'Testing, Validation & Deployment Support',
          description:
            'We Run Complete System Reliability Through Rigorous Testing, Field Validation, And Smooth Deployment Support.',
        },
      ],
    },
  },
  {
    id: 'services',
    type: 'solution_services',
    props: {
      heading: 'CORE SERVICES WE OFFER',
      services: [
        {
          heading: 'PCB Design & Hardware Development',
          description:
            'We Design Custom PCBs With Optimized Layouts, Power Distribution, And Thermal Considerations For Robust Embedded Systems.',
          imagePath: '/detail page imgs/img1.png',
          ctaLabel: 'Get Started',
          ctaHref: '/contact',
        },
        {
          heading: 'Embedded Firmware Development',
          description:
            'We Develop Reliable Firmware For Microcontrollers And Processors, Ensuring Efficient Device Control And Communication.',
          imagePath: '/detail page imgs/img2.png',
          ctaLabel: 'Get Started',
          ctaHref: '/contact',
        },
        {
          heading: 'Embedded Linux Development',
          description:
            'We Customize Linux Distributions, Develop Drivers, And Build Ready-To-Deploy Embedded Linux Systems For Real-Time Applications.',
          imagePath: '/detail page imgs/img3.png',
          ctaLabel: 'Get Started',
          ctaHref: '/contact',
        },
      ],
    },
  },
  {
    id: 'quote',
    type: 'solution_quote',
    props: {
      quote:
        'Built for performance. Designed for reliability. Engineered to scale.',
      imagePath: '/detail page imgs/img4.png',
    },
  },
  {
    id: 'contact',
    type: 'solution_contact',
    props: {
      heading: 'Contact Us',
      contacts: [
        {
          iconPath: '/contact icons/Layer_1.svg',
          label: 'Email',
          value: 'info@trinovtech.in',
          href: 'mailto:info@trinovtech.in',
        },
        {
          iconPath: '/contact icons/Laag_1.svg',
          label: 'Phone',
          value: '+91 73958 81708',
          href: 'tel:+917395881708',
        },
        {
          iconPath: '/contact icons/Layer_1-1.svg',
          label: 'Phone',
          value: '+91 91504 11708',
          href: 'tel:+919150411708',
        },
      ],
    },
  },
  {
    id: 'icon-badges',
    type: 'solution_icon_badges',
    props: {
      badges: [
        {
          iconPath: '/detailpageicons/Capa_1.svg',
          heading: 'BUILT FOR PERFORMANCE',
          subheading: 'High Efficiency, Real-Time Operations',
        },
        {
          iconPath: '/detailpageicons/Layer_1.svg',
          heading: 'DESIGNED FOR RELIABILITY',
          subheading: 'Rigorous Testing For Field Environments',
        },
        {
          iconPath: '/detailpageicons/Mask group.svg',
          heading: 'ENGINEERED TO SCALE',
          subheading: 'Future-Ready Architecture For Expandable Systems',
        },
      ],
    },
  },
]
