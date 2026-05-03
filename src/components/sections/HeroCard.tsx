import Image from 'next/image'
import { Container } from '@/components/shared/Container'

interface HeroCardProps {
  heading: string
  subtext?: string
  ctaLabel?: string
  ctaHref?: string
  assetPath?: string
  assetType?: 'image' | 'video'
}

export function HeroCard({
  heading,
  subtext,
  ctaLabel,
  ctaHref = '#',
  assetPath,
  assetType = 'image',
}: HeroCardProps) {
  return (
    <section className="w-full pt-28 pb-10">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 w-full flex flex-col gap-6 text-center md:text-left items-center md:items-start">
            <h1
              style={{
                color: '#1A1A1A',
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'var(--text-hero)',
                fontWeight: 700,
                lineHeight: 1.109,
                textTransform: 'capitalize',
              }}
              dangerouslySetInnerHTML={{ __html: heading }}
            />

            {subtext && (
              <p
                style={{
                  color: '#1A1A1A',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '26px',
                  opacity: 0.7,
                  maxWidth: '480px',
                }}
              >
                {subtext}
              </p>
            )}

            {ctaLabel && (
              <a
                href={ctaHref}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-[12px] px-7 py-3.5 text-white font-semibold text-base transition-all duration-300"
                style={{
                  backgroundColor: '#1A1A1A',
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
                <Image
                  src="/Vector.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            )}
          </div>

          {assetPath && assetType === 'image' && (
            <div className="hidden md:flex flex-1 w-full items-center justify-center md:justify-end">
              <Image
                src={assetPath}
                alt="Hero"
                width={560}
                height={460}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full max-w-[520px] h-auto object-contain rounded-2xl"
                priority
              />
            </div>
          )}

          {assetPath && assetType === 'video' && (
            <div className="hidden md:flex flex-1 w-full items-center justify-end">
              <video
                src={assetPath}
                className="w-full max-w-[520px] h-auto rounded-2xl"
                autoPlay muted loop playsInline
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
