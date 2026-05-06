'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { type ReactNode } from 'react'

interface ServiceCarouselCardProps {
  svgComponent?: ReactNode
  svgPath?: string
  heading: string
  description: string
  bgColor?: string
  textColor?: string
  borderColor?: string
  invert?: boolean
}

const imageVariants = {
  initial: { opacity: 0, scale: 0.92 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.25 } },
}

export function ServiceCarouselCard({
  svgComponent,
  svgPath,
  heading,
  description,
  bgColor = '#36445A',
  textColor,
  borderColor,
  invert = false,
}: ServiceCarouselCardProps) {
  const resolvedTextColor = textColor ?? '#F1F5F9'
  const resolvedDescColor = textColor ?? '#F0F6FF'
  const resolvedBorderColor = borderColor ?? bgColor

  const svgPanel = (
    <div
      className="relative shrink-0 w-full md:w-[48%]"
      style={{ height: 'clamp(260px, 40vw, 523px)' }}
    >
      <AnimatePresence mode="wait">
        {svgComponent ? (
          <motion.div
            key="inline-svg"
            className="w-full h-full flex items-end justify-center p-4"
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {svgComponent}
          </motion.div>
        ) : svgPath ? (
          <motion.div
            key={svgPath}
            className="relative w-full h-full"
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Image
              src={svgPath}
              alt={heading}
              fill
              sizes="(max-width: 768px) 100vw, 48vw"
              className="object-contain object-bottom"
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )

  const textPanel = (
    <div
      className="flex flex-col flex-1 z-10 justify-center"
      style={{ padding: 'clamp(28px, 4vw, 52px)' }}
    >
      <h2
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 'clamp(2rem, 4.5vw, 64px)',
          fontWeight: 700,
          lineHeight: 'normal',
          textTransform: 'capitalize',
          color: resolvedTextColor,
          marginBottom: '24px',
        }}
      >
        {heading}
      </h2>

      <p
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 'clamp(16px, 2vw, 24px)',
          fontWeight: 700,
          lineHeight: '120.902%',
          letterSpacing: '1.2px',
          textTransform: 'capitalize',
          color: resolvedDescColor,
        }}
      >
        {description}
      </p>
    </div>
  )

  return (
    <div
      className="relative w-full overflow-hidden flex flex-col md:flex-row"
      style={{
        height: 'clamp(420px, 60vw, 523px)',
        borderRadius: '30px',
        border: `2px solid ${resolvedBorderColor}`,
        background: bgColor,
      }}
    >
      {invert ? (
        <>
          {textPanel}
          {svgPanel}
        </>
      ) : (
        <>
          {svgPanel}
          {textPanel}
        </>
      )}
    </div>
  )
}
