import SectionRenderer from '@/components/SectionRenderer'
import { embeddedIotSections } from '@/content/embedded-iot'

export const metadata = {
  title: 'Embedded Systems & IoT Solutions — Trinovtech',
  description: 'Engineering Intelligence From Silicon To Smart Systems',
}

export default function EmbeddedIotPage() {
  return (
    <main>
      <SectionRenderer sections={embeddedIotSections} />
    </main>
  )
}
