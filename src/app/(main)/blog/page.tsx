import { BlogHero } from '@/components/sections/BlogHero'
import { BlogFeatured } from '@/components/sections/BlogFeatured'
import { BlogGrid } from '@/components/sections/BlogGrid'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { getFeaturedPost, getGridPosts } from '@/lib/blog-api'

export const dynamic = 'force-dynamic'   // always fetch fresh from Supabase
export const revalidate = 0

export const metadata = {
  title: 'Blog — Trinovtech',
  description: 'Insights, ideas and tech deep-dives on embedded systems, IoT, cloud infrastructure, and full-stack development.',
}

export default async function BlogPage() {
  const [featured, gridPosts] = await Promise.all([
    getFeaturedPost(),
    getGridPosts(),
  ])

  return (
    <main>
      <BlogHero
        heading="Insights, Ideas &<br />Tech Deep-Dives"
        subtext="Stay up to date with the latest in embedded systems, IoT, cloud infrastructure, and full-stack development."
        searchPlaceholder="Search articles..."
        categories={['Embedded Systems', 'IoT', 'Cloud', 'Web Dev', 'UI/UX']}
        assetPath="/images/image 4-1.png"
      />

      {featured && (
        <BlogFeatured
          tag={featured.tag ?? 'Featured'}
          title={featured.title}
          excerpt={featured.excerpt ?? ''}
          author={featured.author}
          date={featured.date}
          readTime={featured.readTime}
          imagePath={featured.imagePath}
          href={featured.href ?? '#'}
        />
      )}

      {gridPosts.length > 0 && (
        <BlogGrid
          heading="Latest Articles"
          posts={gridPosts}
          postsPerPage={6}
        />
      )}

      <CtaBanner
        heading="Ready to Start Your Project?"
        description="Let's collaborate to turn your vision into reality. We partner closely with your team to understand your goals and deliver solutions that go beyond expectations."
        features={[
          { iconPath: '/cta/Icons.svg', label: 'Reliable Delivery', sublabel: 'On time, every time' },
          { iconPath: '/cta/Frame 209 (1).svg', label: 'Client-Centric Approach', sublabel: 'You come first, always' },
          { iconPath: '/cta/Layer_1.svg', label: 'Scalable Solutions', sublabel: 'From idea to deployment' },
          { iconPath: '/cta/Frame 209.svg', label: 'Seamless Execution', sublabel: 'From idea to delivery' },
          { iconPath: '/cta/Frame.svg', label: 'Quality Assured', sublabel: 'Tested, validated, delivered' },
        ]}
      />
    </main>
  )
}
