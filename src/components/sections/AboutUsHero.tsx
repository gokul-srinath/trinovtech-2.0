import Image from 'next/image'

interface AboutUsHeroProps {
  heading: string
  highlight: string
  tail: string
  imagePath: string
}

export function AboutUsHero({ heading, highlight, tail, imagePath }: AboutUsHeroProps) {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: '94vh' }}>
      {/* Background image — stretches to fill */}
      <Image
        src={imagePath}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority
      />

      {/* Text overlay — bottom-left, matching Figma */}
      <div
        className="absolute inset-0 flex items-center"
        style={{ paddingLeft: 'clamp(24px, 8vw, 120px)', paddingBottom: 'clamp(32px, 8vh, 80px)', paddingRight: '40%' }}
      >
        <h1
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: 'clamp(1.75rem, 4vw, 3.25rem)',
            fontWeight: 700,
            lineHeight: 1.25,
            color: '#1a1a1a',
          }}
        >
          {heading}{' '}
          <span style={{ color: '#1f7a63' }}>{highlight}</span>{' '}
          {tail}
        </h1>
      </div>
    </section>
  )
}
