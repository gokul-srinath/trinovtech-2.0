import SectionRenderer from '@/components/SectionRenderer'
import { servicesSections } from '@/content/services'

export const metadata = {
  title: 'Services — Trinovtech',
  description: 'End-to-end tech services across IoT, cloud, and full-stack product development.',
}

export default function ServicesPage() {
  return (
    <main>
      <SectionRenderer sections={servicesSections} />
    </main>
  )
}
