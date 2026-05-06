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
      className="w-full relative"
      style={{ 
        minHeight: '90vh', 
        background: '#1f7a63', 
        paddingTop: 'clamp(80px, 12vh, 120px)',
        paddingBottom: 'clamp(40px, 8vh, 80px)',
        overflow: 'visible',
      }}
    >
      {/* Background Image - Right side, extends beyond container */}
      <div 
        className="absolute top-0 bottom-0"
        style={{ 
          width: '100%',
          height: '100%',
          // rotate: '10deg',
          // border: '2px solid #fff',
          right: '-30%',
          // padding:'0 !important'
        }}
      >
        <Image
          src={imagePath}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Text Content */}
      <div
        className="relative z-10 flex items-center"
        style={{
          minHeight: 'calc(90vh - clamp(80px, 12vh, 120px) - clamp(40px, 8vh, 80px))',
          paddingLeft: 'clamp(20px, 8vw, 120px)',
          paddingRight: 'clamp(20px, 8vw, 120px)',
        }}
      >
        <h1
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(1.6rem, 3.5vw, 3rem)',
            fontWeight: 900,
            lineHeight: 'normal',
            color: '#fff',
            maxWidth: '890px',
          }}
        >
          {heading}{' '}
          <span style={{ color: 'var(--heading1)' }}>{highlight}</span>
          {' '}{tail}
        </h1>
      </div>
    </section>
  )
}
