import Image from 'next/image'
import { Container } from '@/components/shared/Container'

interface IconBadge {
  iconPath: string
  heading: string
  subheading: string
}

interface SolutionIconBadgesProps {
  badges: IconBadge[]
}

export function SolutionIconBadges({ badges }: SolutionIconBadgesProps) {
  return (
    <section className="w-full py-12 md:py-16" style={{ background: '#EDFFE4' }}>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {badges.map((badge, idx) => (
            <div key={idx} className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-[#1f7a63] p-4">
                <Image
                  src={badge.iconPath}
                  alt={badge.heading}
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3
                  className="mb-1"
                  style={{
                    color: 'var(--heading1)',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                    fontWeight: 700,
                    lineHeight: '1.3',
                    textTransform: 'uppercase',
                  }}
                >
                  {badge.heading}
                </h3>
                <p
                  style={{
                    color: 'var(--color-body)',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(0.875rem, 1.25vw, 1rem)',
                    fontWeight: 400,
                    lineHeight: '1.4',
                  }}
                >
                  {badge.subheading}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
