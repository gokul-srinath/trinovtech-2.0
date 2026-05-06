import Image from 'next/image'
import { Container } from '@/components/shared/Container'

interface ServiceItem {
  heading: string
  description?: string
  assetPath?: string
  href?: string
}

interface ServicesGridProps {
  heading: string
  items: ServiceItem[]
  columns?: 2 | 3 | 4
}

export function ServicesGrid({ heading, items, columns = 3 }: ServicesGridProps) {
  const gridClass = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 xl:grid-cols-4',
  }[columns]

  return (
    <section className="w-full py-[var(--space-section)]">
      <Container>
        <div className="mb-10 text-center">
          <h2 style={{ fontSize: 'var(--text-h2)', fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>{heading}</h2>
        </div>
        <div className={`grid grid-cols-1 ${gridClass} gap-6`}>
          {items.map((item, idx) => (
            <a
              key={idx}
              href={item.href || '#'}
              className="flex flex-col transition-shadow hover:shadow-xl"
              style={{
                padding: 'clamp(24px, 4vw, 50px) clamp(20px, 4vw, 49.5px)',
                borderRadius: '30px',
                background: '#F5F5F5',
                boxShadow: '-1px -1px 4px 0 rgba(0,0,0,0.25), 1px 1px 4px 0 rgba(0,0,0,0.25)',
              }}
            >
              {item.assetPath && (
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={item.assetPath}
                    alt={item.heading}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover rounded-md"
                  />
                </div>
              )}
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'var(--text-h3)', fontWeight: 700, marginBottom: '8px', color: '#1A1A1A' }}>
                {item.heading}
              </h3>
              {item.description && (
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', opacity: 0.7, color: '#1A1A1A' }}>{item.description}</p>
              )}
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}
