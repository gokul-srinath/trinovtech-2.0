/**
 * Home Page Content
 * Typed data structure — will be swapped with Supabase later without refactoring components
 * Update this file to change page content; components remain static
 */

import type { Section } from '@/lib/types'

export const homeSections: Section[] = [
  {
    id: 'intro-video',
    type: 'video_section',
    props: {
      videoPath: '/videos/magnific_create-moving-image_2893769832.mp4',
      mobileVideoPath: '/videos/mobile.mp4',
    },
  },
  {
    id: 'services-icon-grid',
    type: 'services_icon_grid',
    props: {
      heading: 'We Offer End-To-End<br />Tech Consulting Services',
      subtext:
        'We Deliver Complete Tech Solutions, From Concept To Production, Built For Scale And Reliability.',
      ctaLabel: 'Explore',
      ctaHref: '/services',
      moreLabel: 'AND MANY MORE ...',
      imagePath: '/images/image 4-1.png',
      services: [
        { label: 'Artificial Intelligence', svgPath: '/services-icons/ai.svg' },
        { label: 'Internet Of Things',      svgPath: '/services-icons/iot.svg' },
        { label: 'Devops & Cloud',          svgPath: '/services-icons/devops.svg' },
        { label: 'MCU Programming',         svgPath: '/services-icons/mcu.svg' },
        { label: 'Pcb Designing',           svgPath: '/services-icons/pcb.svg' },
        { label: 'RTOS Development',        svgPath: '/services-icons/rtos.svg' },
        { label: 'Mobile App',              svgPath: '/services-icons/mobile.svg' },
        { label: 'Web App',                 svgPath: '/services-icons/web.svg' },
      ],
    },
  },
  {
    id: 'feature',
    type: 'feature_card',
    props: {
      heading: 'Build Your Own Product',
      description: "Are you looking for a flexible development team you can scale up or down as needed? You're in the right place. We help you build the right product with high quality.",
      assetPath: '/images/image 6.png',
      ctaLabel: 'Contact Us',
      ctaHref: '#contact',
      imagePosition: 'left',
    },
  },
  {
    id: 'solution-cards',
    type: 'solution_cards',
    props: {
      cards: [
        {
          heading: 'Solutions We Provide',
          description: 'We Build Innovative, Future-Ready Solutions—Owned End-To-End, Executed With Excellence, And Designed To Scale With Your Growth.',
          ctaLabel: 'Get Started',
          ctaHref: '#solutions',
          assetPath: '/images/image 17.png',
          bgColor: '#C1E296',
          headingColor: '#1A1A1A',
          textColor: '#1A1A1A',
        },
        {
          heading: 'Service We Offer',
          description: 'We Also Provide Rapid Support And Quick-Fix Services Across IoT Platforms, Cloud Infrastructure, And Enterprise Software.',
          ctaLabel: 'Get Started',
          ctaHref: '#services',
          assetPath: '/images/image 16.png',
          bgColor: '#1f7a63',
          headingColor: '#ffffff',
          textColor: '#ffffff',
          imageFullSize: true,
        },
      ],
    },
  },
  {
    id: 'quote',
    type: 'quote_card',
    props: {
      quote: '"We Are A Trusted Team Delivering Scalable Solutions Across Embedded, IoT, Cloud, And Full-Stack Platforms— Ensuring Seamless Execution."',
      ctaLabel: 'Check Our Blogs',
      ctaHref: '#blogs',
      assetPath: '/images/image 4.png',
    },
  },
  {
    id: 'cta-banner',
    type: 'cta_banner',
    props: {
      heading: 'Ready to Start Your Project?',
      description: "Let's collaborate to turn your vision into reality. We partner closely with your team to understand your goals and deliver solutions that go beyond expectations.",
      features: [
        { iconPath: '/cta/Icons.svg', label: 'Reliable Delivery', sublabel: 'On time, every time' },
        { iconPath: '/cta/Frame 209 (1).svg', label: 'Client-Centric Approach', sublabel: 'You come first, always' },
        { iconPath: '/cta/Layer_1.svg', label: 'Scalable Solutions', sublabel: 'From idea to deployment' },
        { iconPath: '/cta/Frame 209.svg', label: 'Seamless Execution', sublabel: 'From idea to delivery' },
        { iconPath: '/cta/Frame.svg', label: 'Quality Assured', sublabel: 'Tested, validated, delivered' },
      ],
    },
  },
]
