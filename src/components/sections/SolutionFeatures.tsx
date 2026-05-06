import Image from 'next/image'
import { Container } from '@/components/shared/Container'

interface FeatureItem {
  heading: string
  description: string
  iconPath: string
}

interface SolutionFeaturesProps {
  features: FeatureItem[]
}

export function SolutionFeatures({ features }: SolutionFeaturesProps) {
  return (
    <section className="w-full py-12 md:py-16" style={{ background: '#EDFFE4', paddingLeft: 'clamp(20px, 8vw, 120px)', paddingRight: 'clamp(20px, 4vw, 60px)' }}>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-4 p-6 md:p-8"
              style={{
                borderRadius: '30px',
                borderTop: '15px solid #1F7A63',
                background: 'var(--color-bg)',
                boxShadow: '-1px -1px 4px 0 rgba(0, 0, 0, 0.25), 1px 1px 4px 0 rgba(0, 0, 0, 0.25)',
                padding: 'clamp(3rem, 6vw, 5.5rem) clamp(0.5rem, 0.8vw, 0.55rem) clamp(2rem, 4vw, 3.5rem) clamp(1.5rem, 2.5vw, 2.5rem)'

              }}
            >
              <h3
                style={{
                  color: 'var(--heading1)',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(1.125rem, 2vw, 3rem)',
                  fontWeight: 700,
                  lineHeight: '1.3',
                }}
              >
                {feature.heading}
              </h3>
              <p
                style={{
                  color: 'var(--color-body)',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)',
                  fontWeight: 400,
                  lineHeight: '1.5',
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
