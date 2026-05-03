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
    <section className="w-full py-12">
      <Container>
        <div
          className={`flex flex-col gap-10 items-center ${
            invert ? 'md:flex-row-reverse' : 'md:flex-row'
          }`}
        >
          {/* Text block */}
          <div className="flex flex-col gap-5 md:w-[50%]">
            <h2
              style={{
                color: 'var(--heading1)',
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'var(--text-h2)',
                fontWeight: 700,
                lineHeight: 1.3,
              }}
            >
              {heading}
            </h2>
            <p
              style={{
                color: 'var(--color-body)',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '1.6',
              }}
            >
              {text}
            </p>
            <a
              href={ctaHref}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-[8px] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300"
              style={{
                backgroundColor: ctaColor,
                fontFamily: 'Poppins, sans-serif',
                width: 'fit-content',
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

          {/* Image block */}
          <div className="w-full md:w-[50%] shrink-0">
            <div
              className="relative w-full overflow-hidden"
              style={{ 
                borderRadius: invert ? '20px 0 0 20px' : '0 20px 20px 0',
                aspectRatio: '4/3' }}
            >
              <Image
                src={imagePath}
                alt={heading}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
