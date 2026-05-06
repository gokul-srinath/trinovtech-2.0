import Image from 'next/image'
import { Container } from '@/components/shared/Container'

interface ServiceCard {
  heading: string
  description: string
  imagePath: string
  ctaLabel?: string
  ctaHref?: string
}

interface SolutionServicesProps {
  heading: string
  services: ServiceCard[]
}

export function SolutionServices({ heading, services }: SolutionServicesProps) {
  return (
    <section className="w-full py-12 md:py-20" style={{ background: 'var(--heading2)' }}>
      <Container>
        <h2
          className="mb-8 md:mb-12 text-center"
          style={{
            color: '#fff',
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
            fontWeight: 700,
            lineHeight: '1.2',
          }}
        >
          {heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-4 p-6 rounded-[20px]"
              style={{ background: 'rgba(0, 0, 0, 0.2)', backdropFilter: 'blur(10px)' }}
            >
              <div className="w-full aspect-[4/3] rounded-[12px] overflow-hidden bg-white/5">
                <Image
                  src={service.imagePath}
                  alt={service.heading}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3
                style={{
                  color: '#fff',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
                  fontWeight: 700,
                  lineHeight: '1.3',
                }}
              >
                {service.heading}
              </h3>
              <p
                style={{
                  color: '#E5E5E5',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                  fontWeight: 400,
                  lineHeight: '1.5',
                }}
              >
                {service.description}
              </p>
              {service.ctaLabel && (
                <a
                  href={service.ctaHref || '#'}
                  className="group inline-flex items-center gap-2 text-white font-semibold mt-2"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                  }}
                >
                  {service.ctaLabel}
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
