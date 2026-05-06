import Image from 'next/image'
import { Container } from '@/components/shared/Container'

interface ContactItem {
  iconPath: string
  label: string
  value: string
  href: string
}

interface SolutionContactProps {
  heading: string
  contacts: ContactItem[]
}

export function SolutionContact({ heading, contacts }: SolutionContactProps) {
  return (
    <section className="w-full py-12 md:py-20" style={{ background: '#1f7a63' }}>
      <Container>
        <div className='flex flex-col gap-12'>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-full mx-auto">
            {contacts.map((contact, idx) => (
              <a
                key={idx}
                href={contact.href}
                className="flex flex-col items-center justify-center hover:scale-105 transition-transform"
                style={{
                  padding: 'clamp(2rem, 5vw, 4rem)',
                  borderRadius: '30px',
                  border: '1px solid rgba(0, 0, 0, 0.10)',
                  background: '#F1F5F9',
                  boxShadow: '4px 4px 4px 0 rgba(0, 0, 0, 0.25)',
                  gap: 'clamp(1rem, 2vw, 1.5rem)',
                }}
              >

                <div className="w-48 h-48 flex items-center justify-center" style={{ backgroundColor: '#EDFFE4', borderRadius: '30px' ,boxShadow: '4px 4px 4px 0 rgba(0, 0, 0, 0.25)'}}>
                  <Image
                    src={contact.iconPath}
                    alt={contact.label}
                    width={64}
                    height={64}
                    className="w-24 h-24"
                  />
                </div>
                <p
                  style={{
                    color: 'var(--heading2)',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(0.875rem, 1.25vw, 2.25rem)',
                    fontWeight: 400,
                    textAlign: 'center',

                    letterSpacing: '0.05em',
                  }}
                >
                  {contact.value}
                </p>
              </a>

            ))}
          </div>
          <div className='border-t border-white/55'></div>
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
        </div>
      </Container>
    </section>
  )
}
