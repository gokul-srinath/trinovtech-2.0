import Image from 'next/image'

interface SolutionsHeroProps {
  heading: string
  highlight: string
  tail: string
  imagePath: string
}

export function SolutionsHero({ heading, highlight, tail, imagePath }: SolutionsHeroProps) {
  return (
    <section
      className="relative w-full flex items-center overflow-hidden pt-24"
      style={{ minHeight: '94vh', background: '#1f7a63' }}
    >
      {/* Left — text */}
      <div
        className="flex-1 flex items-center z-10"
        style={{ paddingLeft: 'clamp(24px, 8vw, 120px)', paddingRight: '4vw' }}
      >
        <h1
         style={{
  fontFamily: 'Inter, sans-serif',
  fontSize: 'clamp(1.6rem, 3.5vw, 3rem)',
  fontWeight: 900,
  fontStyle: 'normal',
  lineHeight: 'normal',
  color: '#EDFFE4',
  maxWidth: '890px',
}}
        >
          {heading}{' '}
          <span style={{ color: 'var(--heading1)' }}>{highlight}</span>
          {tail}
        </h1>
      </div>

      {/* Right — image */}
      <div
        className="hidden md:flex shrink-0 items-end"
        style={{ width: 'clamp(300px, 45vw, 620px)', paddingRight: 'clamp(16px, 4vw, 60px)' }}
      >
        <Image
          src={imagePath}
          alt="Solutions"
          width={620}
          height={500}
          sizes="45vw"
          className="w-full h-auto object-contain object-bottom"
          priority
        />
      </div>
    </section>
  )
}
