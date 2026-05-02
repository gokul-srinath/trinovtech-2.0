'use client'

import { Section } from '@/lib/types'
import { REGISTRY, ComponentType } from '@/lib/registry'
import { Suspense } from 'react'

interface SectionRendererProps {
  sections: Section[]
}

/**
 * SectionRenderer
 * Renders an array of sections dynamically based on their type
 * Each section component is lazy-loaded via Suspense
 */
export default function SectionRenderer({ sections }: SectionRendererProps) {
  return (
    <>
      {sections.map((section) => {
        const Component = REGISTRY[section.type as ComponentType] as any

        if (!Component) {
          console.warn(`Unknown section type: ${section.type}`)
          return null
        }

        return (
          <div id={section.id} key={section.id}>
            <Suspense fallback={<div className="section h-96 bg-card animate-pulse" />}>
              <Component {...section.props} />
            </Suspense>
          </div>
        )
      })}
    </>
  )
}
