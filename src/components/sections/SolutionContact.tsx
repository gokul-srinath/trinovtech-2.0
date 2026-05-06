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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-[900px] mx-auto">
          {contacts.map((contact, idx) => (
            <a
              key={idx}
              href={contact.href}
              className="flex flex-col items-center gap-4 p-6 rounded-[16px] bg-white hover:scale-105 transition-transform"
            >
              <div className="w-16 h-16 flex items-center justify-center">
                <Image
                  src={contact.iconPath}
                  alt={contact.label}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <p
                style={{
                  color: 'var(--heading1)',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                  fontWeight: 600,
                  textAlign: 'center',
                }}
              >
                {contact.value}
              </p>
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}
