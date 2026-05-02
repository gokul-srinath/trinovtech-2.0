import Image from 'next/image'

interface FeatureCardProps {
  heading: string
  description?: string
  assetPath?: string
  ctaLabel?: string
  ctaHref?: string
  imagePosition?: 'left' | 'right'
}

export function FeatureCard({
  heading,
  description,
  assetPath,
  ctaLabel = 'Contact Us',
  ctaHref = '#',
  imagePosition = 'left',
}: FeatureCardProps) {
  const imageFirst = imagePosition === 'left'

  return (
    <section className="w-full py-6">
      <div
        className="w-[90%] sm:w-[80%] xl:w-[1320px] max-w-[1320px] mx-auto flex flex-col lg:flex-row items-center gap-8 rounded-[30px] overflow-hidden"
        style={{
          background: '#F5F5F5',
          boxShadow: '-1px -1px 4px 0 rgba(0,0,0,0.25), 1px 1px 4px 0 rgba(0,0,0,0.25)',
          padding: 'clamp(28px, 5vw, 50px) clamp(20px, 4.5vw, 49.5px)',
        }}
      >
        {assetPath && (
          <div className={`w-full lg:flex-1 ${imageFirst ? 'lg:order-1' : 'lg:order-2'}`}>
            <Image
              src={assetPath}
              alt={heading}
              width={500}
              height={400}
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        )}

        <div className={`w-full lg:flex-1 flex flex-col gap-5 ${imageFirst ? 'lg:order-2' : 'lg:order-1'}`}>
          <h2
            style={{
              color: '#1A1A1A',
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(26px, 4vw, 40px)',
              fontWeight: 700,
              lineHeight: '1.3',
              textTransform: 'capitalize',
            }}
          >
            {heading}
          </h2>

          {description && (
            <p
              style={{
                color: '#1A1A1A',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '16px',
                lineHeight: '26px',
                opacity: 0.7,
              }}
            >
              {description}
            </p>
          )}

          <a
            href={ctaHref}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-[12px] px-7 py-3.5 font-semibold text-base transition-all duration-300"
            style={{
              backgroundColor: '#1A1A1A',
              color: '#fff',
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
        </div>
      </div>
    </section>
  )
}
