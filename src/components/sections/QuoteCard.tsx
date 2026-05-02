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
      <div className="w-[90%] sm:w-[80%] xl:w-[1320px] max-w-[1320px] mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div className="w-full lg:flex-1 flex flex-col gap-6">
          <h2
            style={{
              color: '#1F7A63',
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(20px, 3vw, 40px)',
              fontWeight: 700,
              lineHeight: '1.4',
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
            </a>
          )}
        </div>

        {assetPath && (
          <div className="w-full lg:flex-1 flex items-center justify-center lg:justify-end">
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
