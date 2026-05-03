import Image from 'next/image'

interface ServicesHeroProps {
  heading: string
  highlight: string
  tail: string
  imagePath: string
}

export function ServicesHero({ heading, highlight, tail, imagePath }: ServicesHeroProps) {
  return (
    <section
      className="w-full flex flex-col md:flex-row items-center overflow-hidden"
      style={{ minHeight: '90vh', background: 'var(--bg, #FAF9F6)', paddingTop: 'clamp(80px, 12vh, 120px)' }}
    >
      {/* Left — text */}
      <div
        className="flex-1 flex items-center z-10 py-10 md:py-0"
        style={{
          paddingLeft: 'clamp(20px, 8vw, 120px)',
          paddingRight: 'clamp(20px, 4vw, 60px)',
        }}
      >
        <h1
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(1.6rem, 3.5vw, 3rem)',
            fontWeight: 900,
            fontStyle: 'normal',
            lineHeight: 'normal',
            color: '#1A1A1A',
            maxWidth: '890px',
          }}
        >
          {heading}{' '}
          <span style={{ color: 'var(--heading2)' }}>{highlight}</span>
          {tail}
        </h1>
      </div>

      {/* Right — svg, hidden on mobile */}
      <div
        className="hidden md:flex shrink-0 items-center self-stretch justify-center"
        style={{
          width: 'clamp(280px, 44vw, 600px)',
          paddingRight: 'clamp(16px, 4vw, 60px)',
        }}
      >
        <Image
          src={imagePath}
          alt="Services"
          width={600}
          height={520}
          sizes="44vw"
          className="w-full h-auto object-contain object-bottom"
          priority
        />
      </div>
    </section>
  )
}
