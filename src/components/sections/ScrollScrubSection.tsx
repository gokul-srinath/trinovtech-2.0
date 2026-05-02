/**
 * ScrollScrubSection Component
 * Scroll-triggered frame animation (SVG or canvas)
 * Placeholder — full implementation in references/components.md
 */

interface ScrollScrubSectionProps {
  heading: string
  framePrefix: string
  frameCount: number
  framePad?: number
  scrubType?: 'svg' | 'canvas'
}

export function ScrollScrubSection({
  heading,
  framePrefix,
  frameCount,
  framePad = 3,
  scrubType = 'svg',
}: ScrollScrubSectionProps) {
  return (
    <section className="section py-section">
      <div className="max-w-6xl mx-auto px-gap">
        <h2 className="text-heading1 text-3xl md:text-4xl text-center mb-section">
          {heading}
        </h2>

        {/* Placeholder for scroll scrub animation */}
        <div className="bg-card rounded-card p-section h-96 flex items-center justify-center">
          <p className="text-body opacity-50">
            Scroll animation — {frameCount} frames, {scrubType} format
          </p>
        </div>
      </div>
    </section>
  )
}
