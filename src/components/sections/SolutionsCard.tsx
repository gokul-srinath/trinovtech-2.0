import Image from 'next/image'
import { Container } from '@/components/shared/Container'

interface SolutionsCardProps {
  heading: string
  text: string
  imagePath: string
  ctaLabel?: string
  ctaHref?: string
  ctaColor?: string
  invert?: boolean
}

export function SolutionsCard({
  heading,
  text,
  imagePath,
  ctaLabel = 'Know More',
  ctaHref = '#',
  ctaColor = '#1f7a63',
  invert = false,
}: SolutionsCardProps) {
  return (
    <section className="w-full py-10 md:py-16">
      <Container>
        <div
          className={`flex flex-col gap-8 items-center mt-12 ${
            invert ? 'md:flex-row-reverse' : 'md:flex-row'
          }`}
        >
          {/* Text block */}
          <div className="flex flex-col gap-5 w-full md:w-[50%]">
            <h2
              style={{
                color: 'var(--heading1)',
                fontFamily: 'Inter, sans-serif',
                fontSize: 'var(--text-h1)',
                fontWeight: 700,
                textTransform: 'capitalize'
              }}
            >
              {heading}
            </h2>
            <p
              style={{
                color: 'var(--color-body)',
                fontFamily: 'Inter, sans-serif',
                fontSize: 'var(--font-body-size)',
                fontWeight: 'var(--font-body-weight)',
                lineHeight: '29px',
                letterSpacing: '1.2px',
                textTransform: 'capitalize'
              }}
            >
              {text}
            </p>
            <a
              href={ctaHref}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-[8px] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300"
              style={{
                backgroundColor: ctaColor,
                fontFamily: 'Inter, sans-serif',
                width: 'fit-content',
                fontSize: 'var(--font-btn-size)',
                fontWeight: 'var(--font-body-weight)',
              }}
            >
              <span
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)' }}
              />
              <span className="relative z-10 group-hover:tracking-wide transition-all duration-300">
                {ctaLabel}
              </span>
            </a>
          </div>

          {/* Image block — fluid on mobile, 600×600 capped on desktop */}
          <div className="w-full md:w-[50%] shrink-0 flex justify-center">
            <div
              className="w-full"
              style={{
                borderRadius: invert ? '20px 0 0 20px' : '0 20px 20px 0',
                overflow: 'hidden',
                maxWidth: '600px',
                /* fluid height: 80vw on mobile, capped at 600px on desktop */
                height: 'min(80vw, 600px)',
              }}
            >
              <Image
                src={imagePath}
                alt={heading}
                width={600}
                height={600}
                sizes="(max-width: 768px) 90vw, 600px"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
