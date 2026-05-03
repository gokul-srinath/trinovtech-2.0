import SectionRenderer from '@/components/SectionRenderer'
import { solutionsSections } from '@/content/solutions'

export const metadata = {
  title: 'Solutions — Trinovtech',
  description: 'Our solutions are designed to drive meaningful business outcomes and simplify complexity.',
}

export default function SolutionsPage() {
  return (
    <main>
      <SectionRenderer sections={solutionsSections} />
    </main>
  )
}
