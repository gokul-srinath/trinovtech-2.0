import Image from 'next/image'
import { Container } from '@/components/shared/Container'

interface SolutionQuoteProps {
  quote: string
  imagePath: string
}

export function SolutionQuote({ quote, imagePath }: SolutionQuoteProps) {
  return (
    <section className="w-full py-12 md:py-20" style={{ background: '#EDFFE4' }}>
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-white rounded-[24px] p-8 md:p-12 shadow-sm">
          <div className="flex-1">
            <p
              style={{
                color: '#118496',
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(1.25rem, 2.5vw, 2rem)',
                fontWeight: 700,
                lineHeight: '1.4',
                fontStyle: 'italic',
              }}
            >
              "{quote}"
            </p>
          </div>
          <div className="w-full md:w-[40%] shrink-0">
            <div className="w-full aspect-square rounded-[20px] overflow-hidden">
              <Image
                src={imagePath}
                alt="Quote illustration"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
