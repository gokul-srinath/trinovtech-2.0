import { Container } from '@/components/shared/Container'

interface SolutionIntroProps {
  heading: string
  description: string
}

export function SolutionIntro({ heading, description }: SolutionIntroProps) {
  return (
    <section className="w-full py-12 md:py-20" style={{ background: '#EDFFE4' }}>
      <Container>
        <div className="flex flex-col gap-6 max-w-[1100px]">
          <h2
            style={{
              color: 'var(--heading1)',
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              fontWeight: 700,
              lineHeight: '1.2',
            }}
          >
            {heading}
          </h2>
          <p
            style={{
              color: 'var(--color-body)',
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(1rem, 2vw, 1.5rem)',
              fontWeight: 400,
              lineHeight: '1.6',
            }}
          >
            {description}
          </p>
        </div>
      </Container>
    </section>
  )
}
