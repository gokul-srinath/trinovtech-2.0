import Image from 'next/image'

interface SolutionCardItem {
  heading: string
  description: string
  ctaLabel?: string
  ctaHref?: string
  assetPath?: string
  bgColor: string
  headingColor?: string
  textColor?: string
  imageFullSize?: boolean
}

interface SolutionCardsProps {
  cards: SolutionCardItem[]
}

export function SolutionCards({ cards }: SolutionCardsProps) {
  return (
    <section className="w-full py-8">
      <div
        style={{ width: 'min(95%, 1100px)' }}
        className="mx-auto flex flex-col lg:flex-row gap-6"
      >
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="relative flex flex-col overflow-hidden"
            style={{
              maxWidth: '100%',
              height: '600px',
              borderRadius: '30px',
              background: card.bgColor,
              boxShadow: '-1px -1px 4px 0 rgba(0,0,0,0.25), 1px 1px 4px 0 rgba(0,0,0,0.25)',
              flex: '1 1 0',
            }}
          >
            {/* Content top */}
            <div className="flex flex-col gap-4 p-10 z-10">
              <h3
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '28px',
                  fontWeight: 700,
                  lineHeight: '36px',
                  color: card.headingColor ?? '#1A1A1A',
                  textTransform: 'capitalize',
                }}
              >
                {card.heading}
              </h3>
              <p
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '14px',
                  lineHeight: '22px',
                  color: card.textColor ?? '#1A1A1A',
                  opacity: 0.8,
                  maxWidth: '320px',
                }}
              >
                {card.description}
              </p>
              {card.ctaLabel && (
                <a
                  href={card.ctaHref ?? '#'}
                  className="group inline-flex items-center gap-1 text-sm font-semibold transition-all duration-200 hover:gap-2"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    color: card.headingColor ?? '#1A1A1A',
                  }}
                >
                  {card.ctaLabel}
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </a>
              )}
            </div>

            {/* Image anchored bottom-right, flush with card edge, behind text */}
            {card.assetPath && (
              <div
                className="absolute bottom-0 right-0 z-0"
                style={{
                  width: card.imageFullSize ? '100%' : '80%',
                  height: card.imageFullSize ? '100%' : '65%',
                }}
              >
                <Image
                  src={card.assetPath}
                  alt={card.heading}
                  fill
                  className="object-contain"
                  style={{ objectPosition: 'right bottom' }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
