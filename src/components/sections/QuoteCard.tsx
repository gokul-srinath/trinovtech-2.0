import Image from 'next/image'

interface QuoteCardProps {
  quote: string
  ctaLabel?: string
  ctaHref?: string
  assetPath?: string
}

export function QuoteCard({
  quote,
  ctaLabel,
  ctaHref = '#',
  assetPath,
}: QuoteCardProps) {
  return (
    <section className="w-full py-8">
      <div
        className="mx-auto flex flex-col lg:flex-row items-center gap-10 rounded-[30px] overflow-hidden"
        style={{
          width: 'min(95%, 1100px)',
          background: '#F5F5F5',
          boxShadow: '-1px -1px 4px 0 rgba(0,0,0,0.25), 1px 1px 4px 0 rgba(0,0,0,0.25)',
          padding: '50px 49.5px',
        }}
      >
        {/* Left: quote + CTA */}
        <div className="flex-1 flex flex-col gap-6">
          <h2
            style={{
              color: '#1F7A63',
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(24px, 3vw, 40px)',
              fontWeight: 700,
              lineHeight: '52px',
              letterSpacing: '-0.312px',
              textTransform: 'capitalize',
            }}
          >
            {quote}
          </h2>

          {ctaLabel && (
            <a
              href={ctaHref}
              className="group relative inline-flex items-center gap-2 overflow-hidden px-7 py-3.5 font-semibold text-base text-white transition-all duration-300"
              style={{
                borderRadius: '10px',
                background: '#1F7A63',
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
        {assetPath && (
          <div className="flex-1 flex items-center justify-center lg:justify-end">
            <Image
              src={assetPath}
              alt="Quote visual"
              width={500}
              height={400}
              className="w-full max-w-[460px] h-auto object-cover rounded-2xl"
            />
          </div>
        )}
      </div>
    </section>
  )
}
