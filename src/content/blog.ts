/**
 * Blog Page Content
 * Typed data structure — will be swapped with Supabase later without refactoring components
 * Update this file to change page content; components remain static
 */

import type { Section } from '@/lib/types'

export const blogSections: Section[] = [
  {
    id: 'blog-hero',
    type: 'blog_hero',
    props: {
      heading: 'Insights, Ideas &amp;<br />Tech Deep-Dives',
      subtext: 'Stay up to date with the latest in embedded systems, IoT, cloud infrastructure, and full-stack development.',
      searchPlaceholder: 'Search articles...',
      categories: ['Embedded Systems', 'IoT', 'Cloud', 'Web Dev', 'UI/UX'],
      assetPath: '/images/image 4-1.png',
    },
  },
  {
    id: 'blog-featured',
    type: 'blog_featured',
    props: {
      tag: 'Featured',
      title: 'Lorem Ipsum Is Simply Dummy Text Of The Printing',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      author: 'Trinovtech',
      date: 'May 10, 2026',
      readTime: '5 min read',
      imagePath: '/images/image 6.png',
      href: '#',
    },
  },
  {
    id: 'blog-grid',
    type: 'blog_grid',
    props: {
      heading: 'Latest Articles',
      postsPerPage: 6,
      posts: [
        {
          tag: 'Embedded Systems',
          title: 'Lorem Ipsum Is Simply',
          excerpt:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          author: 'Trinovtech',
          date: 'May 8, 2026',
          readTime: '4 min read',
          imagePath: '/images/image 17.png',
          href: '#',
        },
        {
          tag: 'IoT',
          title: 'Lorem Ipsum Is Simply',
          excerpt:
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          author: 'Trinovtech',
          date: 'May 6, 2026',
          readTime: '3 min read',
          imagePath: '/images/image 16.png',
          href: '#',
        },
        {
          tag: 'Cloud',
          title: 'Lorem Ipsum Is Simply',
          excerpt:
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          author: 'Trinovtech',
          date: 'May 4, 2026',
          readTime: '6 min read',
          imagePath: '/images/image 4.png',
          href: '#',
        },
        {
          tag: 'Web Dev',
          title: 'Lorem Ipsum Is Simply',
          excerpt:
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          author: 'Trinovtech',
          date: 'May 2, 2026',
          readTime: '5 min read',
          imagePath: '/images/image 4-1.png',
          href: '#',
        },
        {
          tag: 'UI/UX',
          title: 'Lorem Ipsum Is Simply',
          excerpt:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
          author: 'Trinovtech',
          date: 'Apr 30, 2026',
          readTime: '4 min read',
          imagePath: '/images/image 17.png',
          href: '#',
        },
        {
          tag: 'Embedded Systems',
          title: 'Lorem Ipsum Is Simply',
          excerpt:
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
          author: 'Trinovtech',
          date: 'Apr 28, 2026',
          readTime: '3 min read',
          imagePath: '/images/image 16.png',
          href: '#',
        },
        {
          tag: 'IoT',
          title: 'Lorem Ipsum Is Simply',
          excerpt:
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          author: 'Trinovtech',
          date: 'Apr 26, 2026',
          readTime: '5 min read',
          imagePath: '/images/image 4.png',
          href: '#',
        },
        {
          tag: 'Cloud',
          title: 'Lorem Ipsum Is Simply',
          excerpt:
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          author: 'Trinovtech',
          date: 'Apr 24, 2026',
          readTime: '6 min read',
          imagePath: '/images/image 4-1.png',
          href: '#',
        },
        {
          tag: 'Web Dev',
          title: 'Lorem Ipsum Is Simply',
          excerpt:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
          author: 'Trinovtech',
          date: 'Apr 22, 2026',
          readTime: '4 min read',
          imagePath: '/images/image 17.png',
          href: '#',
        },
      ],
    },
  },
  {
    id: 'blog-cta',
    type: 'cta_banner',
    props: {
      heading: 'Ready to Start Your Project?',
      description:
        "Let's collaborate to turn your vision into reality. We partner closely with your team to understand your goals and deliver solutions that go beyond expectations.",
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
