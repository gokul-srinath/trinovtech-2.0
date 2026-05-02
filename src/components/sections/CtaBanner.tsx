/**
 * CtaBanner Component
 * Full-width call-to-action banner
 */

interface CtaBannerProps {
  heading: string
  description?: string
  ctaLabel?: string
  ctaHref?: string
  backgroundColor?: 'heading1' | 'heading2' | 'body'
}

export function CtaBanner({
  heading,
  description,
  ctaLabel,
  ctaHref = '#',
  backgroundColor = 'heading2',
}: CtaBannerProps) {
  const bgClass = {
    heading1: 'bg-heading1',
    heading2: 'bg-heading2',
    body: 'bg-body',
  }[backgroundColor]

  return (
    <section className={`section py-section ${bgClass}`}>
      <div className="max-w-6xl mx-auto px-gap text-center text-white space-y-gap">
        <h2 className="text-3xl md:text-4xl font-bold">{heading}</h2>
        {description && <p className="text-lg opacity-90">{description}</p>}
        {ctaLabel && (
          <a href={ctaHref} className="btn btn-primary inline-block">
            {ctaLabel}
          </a>
        )}
      </div>
    </section>
  )
}
