import SectionRenderer from '@/components/SectionRenderer'
import { aboutUsSections } from '@/content/aboutus'

export const metadata = {
  title: 'About Us — Trinovtech',
  description: 'At TrinovTech, we transform complex challenges into simple, scalable solutions.',
}

export default function AboutUsPage() {
  return (
    <main>
      <SectionRenderer sections={aboutUsSections} />
    </main>
  )
}
