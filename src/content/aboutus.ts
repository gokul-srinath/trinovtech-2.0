import type { Section } from '@/lib/types'

export const aboutUsSections: Section[] = [
  {
    id: 'about-hero',
    type: 'about_us_hero',
    props: {
      heading: 'At TrinovTech,',
      highlight: 'We Transform Complex Challenges',
      tail: 'Into Simple, Scalable Solutions.',
      imagePath: '/AboutUs/banner.png',
    },
  },
  {
    id: 'who-we-are',
    type: 'about_us_card',
    props: {
      heading: 'Who We Are',
      text: 'We Are A Trusted Team Building Scalable Solutions Across Modern Platforms.',
      imagePath: '/AboutUs/img1.png',
      invert: false,
    },
  },
  {
    id: 'problem-we-solve',
    type: 'about_us_card',
    props: {
      heading: 'Problem We Solve',
      text: 'On-Demand Expertise To Reduce Costs And Speed Up Development.',
      imagePath: '/AboutUs/img2.png',
      invert: true,
    },
  },
  {
    id: 'what-we-do',
    type: 'about_us_card',
    props: {
      heading: 'What We Do',
      text: 'We Develop End-To-End Solutions Built For Scale, Seamless Integration And Reliable Performance.',
      imagePath: '/AboutUs/img3.png',
      invert: false,
    },
  },
]
