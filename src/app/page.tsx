import SectionRenderer from '@/components/SectionRenderer'
import { homeSections } from '@/content/home'

export default function Home() {
  return (
    <main className="pt-24">
      <SectionRenderer sections={homeSections} />
    </main>
  )
}
