import { Container } from '@/components/shared/Container'

interface WorkflowStep {
  title: string
  description: string
}

interface SolutionWorkflowProps {
  heading: string
  steps: WorkflowStep[]
}

export function SolutionWorkflow({ heading, steps }: SolutionWorkflowProps) {
  return (
    <section className="w-full py-12 md:py-20" style={{ background: '#EDFFE4', paddingLeft: 'clamp(20px, 8vw, 120px)', paddingRight: 'clamp(20px, 4vw, 60px)' }}>
      <Container>
        <h2
          className="mb-8 md:mb-12"
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
        <div className="flex flex-col gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-4 md:gap-6">
              <div
                className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center"
                style={{ background: '#1f7a63' }}
              >
                <span
                  style={{
                    color: '#fff',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                    fontWeight: 700,
                  }}
                >
                  {idx + 1}
                </span>
              </div>
              <div className="flex-1">
                <h3
                  className="mb-2"
                  style={{
                    color: 'var(--heading1)',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
                    fontWeight: 700,
                    lineHeight: '1.3',
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    color: 'var(--color-body)',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)',
                    fontWeight: 400,
                    lineHeight: '1.6',
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
