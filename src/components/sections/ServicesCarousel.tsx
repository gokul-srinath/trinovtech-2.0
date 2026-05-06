'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { Container } from '@/components/shared/Container'
import { ServiceCarouselCard } from './ServiceCarouselCard'
import { Svg1Animated } from './Svg1Animated'
import { Svg4Animated } from './Svg4Animated'
import { Svg5Animated } from './Svg5Animated'

interface ServiceSlide {
  svgPath: string
  heading: string
  description: string
  animatedSvg?: string
  bgColor?: string
  textColor?: string
  borderColor?: string
  svgFillColor?: string
  invert?: boolean
}

interface ServicesCarouselProps {
  slides: ServiceSlide[]
  autoPlayDelay?: number
}

const SVG_MAP: Record<string, (key: number, fill?: string) => React.ReactNode> = {
  svg1: (key, fill) => <Svg1Animated animKey={key} fillColor={fill} />,
  svg4: (key, fill) => <Svg4Animated animKey={key} fillColor={fill} />,
  svg5: (key, fill) => <Svg5Animated animKey={key} fillColor={fill} />,
}

export function ServicesCarousel({ slides, autoPlayDelay = 3000 }: ServicesCarouselProps) {
  const [active, setActive] = useState(0)
  const pausedRef = useRef(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const advance = useCallback(
    () => setActive((i) => (i + 1) % slides.length),
    [slides.length],
  )

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      if (!pausedRef.current) advance()
    }, autoPlayDelay)
  }, [advance, autoPlayDelay])

  useEffect(() => {
    resetTimer()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [resetTimer])

  const prev = useCallback(() => {
    setActive((i) => (i - 1 + slides.length) % slides.length)
    resetTimer()
  }, [slides.length, resetTimer])

  const next = useCallback(() => {
    advance()
    resetTimer()
  }, [advance, resetTimer])

  const goTo = useCallback(
    (i: number) => {
      setActive(i)
      resetTimer()
    },
    [resetTimer],
  )

  const slide = slides[active]
  const svgFactory = slide.animatedSvg ? SVG_MAP[slide.animatedSvg] : undefined

  return (
    <section
      className="w-full py-10 md:py-16"
      style={{ background: 'var(--bg, #FAF9F6)' }}
      onMouseEnter={() => { pausedRef.current = true }}
      onMouseLeave={() => { pausedRef.current = false }}
    >
      <Container>
        <ServiceCarouselCard
          key={active}
          svgComponent={svgFactory ? svgFactory(active, slide.svgFillColor) : undefined}
          svgPath={svgFactory ? undefined : slide.svgPath}
          heading={slide.heading}
          description={slide.description}
          bgColor={slide.bgColor}
          textColor={slide.textColor}
          borderColor={slide.borderColor}
          invert={slide.invert}
        />

        {/* Dots + arrows */}
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
                onClick={() => goTo(i)}
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
