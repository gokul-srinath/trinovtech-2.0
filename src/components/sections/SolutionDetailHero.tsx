import Image from 'next/image'

interface SolutionDetailHeroProps {
  heading: string
  highlight: string
  tail: string
  imagePath: string
}

export function SolutionDetailHero({ heading, highlight, tail, imagePath }: SolutionDetailHeroProps) {
  return (
    <section
      className="w-full relative overflow-visible"
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

      {/* Text content -- vertically centered, left side */}
      <div
        className="relative z-10 flex items-center h-full"
        style={{
          paddingLeft: 'clamp(20px, 8vw, 120px)',
          paddingRight: '20px',
        }}
      >
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
      </div>
    </section>
  )
}
