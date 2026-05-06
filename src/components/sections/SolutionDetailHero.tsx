import Image from 'next/image'
import { Container } from '@/components/shared/Container'

interface SolutionDetailHeroProps {
  heading: string
  highlight: string
  tail: string
  imagePath: string
}

export function SolutionDetailHero({ heading, highlight, tail, imagePath }: SolutionDetailHeroProps) {
  return (
    <section
      className="w-full relative overflow-hidden"
      style={{
        height: 'clamp(320px, 45vw, 520px)',
        background: '#1f7a63',
      }}
    >
      {/* Background image -- right half, hidden on mobile */}
      <div
        className="hidden md:block absolute inset-y-0 right-0"
        style={{ width: '70%' }}
      >
        <Image
          src={imagePath}
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Text content -- inside Container for consistent alignment */}
      <Container className="relative z-10 flex items-center h-full">
        <h1
          className="max-w-[90%] md:max-w-[42%]"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(1.4rem, 2.8vw, 2.4rem)',
            fontWeight: 900,
            lineHeight: 1.3,
            color: '#fff',
          }}
        >
          {heading}{' '}
          {highlight && <span style={{ color: 'var(--heading1)' }}>{highlight}</span>}
          {tail && <>{' '}{tail}</>}
        </h1>
      </Container>
    </section>
  )
}
