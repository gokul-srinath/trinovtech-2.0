import Image from 'next/image'

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
      <div style={{ width: 'min(95%, 1100px)' }} className="mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

        {/* Left: text content */}
        <div className="flex-1 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
          <h1
            style={{
              color: '#1A1A1A',
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(32px, 5vw, 64px)',
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
              <svg
                className="relative z-10 w-4 h-4 transition-all duration-300 group-hover:translate-x-1"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
              >
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 8l4 4-4 4" />
              </svg>
            </a>
          )}
        </div>

        {/* Right: image */}
        {assetPath && assetType === 'image' && (
          <div className="flex-1 flex items-center justify-center lg:justify-end">
            <Image
              src={assetPath}
              alt="Hero"
              width={560}
              height={460}
              className="w-full max-w-[520px] h-auto object-contain rounded-2xl"
              priority
            />
          </div>
        )}

        {assetPath && assetType === 'video' && (
          <div className="flex-1 flex items-center justify-end">
            <video
              src={assetPath}
              className="w-full max-w-[520px] h-auto rounded-2xl"
              autoPlay muted loop playsInline
            />
          </div>
        )}

      </div>
    </section>
  )
}
