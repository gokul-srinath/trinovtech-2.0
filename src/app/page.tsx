import SectionRenderer from '@/components/SectionRenderer'
import { homeSections } from '@/content/home'

export default function Home() {
  return (
    <main>
      <SectionRenderer sections={homeSections} />
    </main>
  )
}
