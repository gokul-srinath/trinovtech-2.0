'use client'

import Image from 'next/image'
import { useState, useCallback } from 'react'
import { Container } from '@/components/shared/Container'
import { Svg1Animated } from './Svg1Animated'

interface ServiceSlide {
  svgPath: string
  heading: string
  description: string
}

interface ServicesCarouselProps {
  slides: ServiceSlide[]
}

export function ServicesCarousel({ slides }: ServicesCarouselProps) {
  const [active, setActive] = useState(0)

  const prev = useCallback(() => setActive((i) => (i - 1 + slides.length) % slides.length), [slides.length])
  const next = useCallback(() => setActive((i) => (i + 1) % slides.length), [slides.length])

  const slide = slides[active]

  return (
    <section className="w-full py-10 md:py-16" style={{ background: 'var(--bg, #FAF9F6)' }}>
      <Container>
        {/* Card */}
        <div
          className="relative w-full overflow-hidden flex flex-col md:flex-row"
          style={{
            height: 'clamp(420px, 60vw, 523px)',
            borderRadius: '30px',
            border: '3px solid #36445A',
            background: '#36445A',
          }}
        >
          {/* ── Left: SVG anchored to bottom ── */}
          <div
            className="relative shrink-0 w-full md:w-[48%]"
            style={{ height: 'clamp(260px, 40vw, 523px)' }}
          >
            {active === 0 ? (
              <div className="w-full h-full flex items-end justify-center p-4">
                <Svg1Animated animKey={active} />
              </div>
            ) : (
              <Image
                key={slide.svgPath}
                src={slide.svgPath}
                alt={slide.heading}
                fill
                sizes="(max-width: 768px) 100vw, 48vw"
                className="object-contain object-bottom"
                priority
              />
            )}
          </div>

          {/* ── Right: text side ── */}
          <div
            className="flex flex-col flex-1 z-10"
            style={{ padding: 'clamp(28px, 4vw, 52px)' }}
          >
            {/* Heading */}
            <h2
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(2rem, 4.5vw, 64px)',
                fontWeight: 700,
                fontStyle: 'normal',
                lineHeight: 'normal',
                textTransform: 'capitalize',
                color: '#F1F5F9',
                marginBottom: '24px',
              }}
            >
              {slide.heading}
            </h2>

            {/* Description */}
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '24px',
                fontWeight: 700,
                fontStyle: 'normal',
                lineHeight: '120.902%',
                letterSpacing: '1.2px',
                textTransform: 'capitalize',
                color: '#F0F6FF',
              }}
            >
              {slide.description}
            </p>

          </div>


        </div>

        {/* Dots + arrows — outside card, bottom center */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <button
            onClick={prev}
            aria-label="Previous"
            className="flex items-center justify-center rounded-full border transition-all duration-200 hover:bg-[#36445A] hover:text-white"
            style={{ width: 38, height: 38, borderColor: '#36445A', color: '#36445A', background: 'transparent', flexShrink: 0 }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 13L5 8L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to slide ${i + 1}`}
                style={{
                  width: i === active ? 28 : 10,
                  height: 10,
                  borderRadius: 999,
                  background: i === active ? '#36445A' : '#C4D4DE',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  transition: 'width 0.3s ease, background 0.3s ease',
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next"
            className="flex items-center justify-center rounded-full border transition-all duration-200 hover:bg-[#36445A] hover:text-white"
            style={{ width: 38, height: 38, borderColor: '#36445A', color: '#36445A', background: 'transparent', flexShrink: 0 }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </Container>
    </section>
  )
}
