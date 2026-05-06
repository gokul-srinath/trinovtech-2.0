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
          className={`flex flex-col gap-28 items-center ${
            invert ? 'md:flex-row-reverse' : 'md:flex-row'
          }`}
        >
          {/* Image block */}
          <div className="w-full md:w-[45%] shrink-0">
  <div
    className="relative w-full overflow-hidden flex flex-col justify-end items-center"
    style={{
      borderRadius: '20px',
      background: '#8BC926',
      minHeight: '400px',
      paddingTop: '158px',
    }}
  >
    <Image
      src={imagePath}
      alt={heading}
      width={600}
      height={400}
      sizes="(max-width: 768px) 100vw, 45vw"
      className="w-full h-auto object-contain object-bottom"
    />
  </div>
</div>
          

          {/* Text block */}
          <div className="flex flex-col gap-8 md:w-[55%]">
            <h2
              style={{
                color: 'var(--color-heading2)',
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'var(--text-h1)',
                fontWeight: 700,
                lineHeight: 1.3,
              }}
            >
              {heading}
            </h2>
            <p
              style={{
                color: 'var(--color-heading2)',
                fontFamily: 'Inter, sans-serif',
                fontSize: '24px',
                fontWeight: 700,
                lineHeight: '1.6',
                letterSpacing: '1.2px'
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
