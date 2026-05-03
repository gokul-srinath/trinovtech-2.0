import Image from 'next/image'
import { Container } from '@/components/shared/Container'

interface AboutUsCardProps {
  heading: string
  text: string
  imagePath: string
  invert?: boolean
}

export function AboutUsCard({ heading, text, imagePath, invert = false }: AboutUsCardProps) {
  return (
    <section className="w-full py-12">
      <Container>
        <div
          className={`flex flex-col gap-10 items-center ${
            invert ? 'md:flex-row-reverse' : 'md:flex-row'
          }`}
        >
          {/* Image block */}
          <div className="w-full md:w-[45%] shrink-0">
            <div
              className="relative w-full overflow-hidden"
              style={{
                borderRadius: '20px',
                background: '#8BC926',
                aspectRatio: '4/3',
              }}
            >
              <Image
                src={imagePath}
                alt={heading}
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Text block */}
          <div className="flex flex-col gap-4 md:w-[55%]">
            <h2
              style={{
                color: 'var(--color-heading2)',
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'var(--text-h2)',
                fontWeight: 700,
                lineHeight: 1.3,
              }}
            >
              {heading}
            </h2>
            <p
              style={{
                color: 'var(--color-heading2)',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '16px',
                fontWeight: 600,
                lineHeight: '1.6',
              }}
            >
              {text}
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
