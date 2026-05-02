/**
 * FeatureCard Component
 * Lazy-loaded feature section with heading, description, and optional image
 */

interface FeatureCardProps {
  heading: string
  description?: string
  assetPath?: string
  ctaHref?: string
}

export function FeatureCard({
  heading,
  description,
  assetPath,
  ctaHref = '#',
}: FeatureCardProps) {
  return (
    <section className="section py-section">
      <div className="max-w-6xl mx-auto px-gap">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-section items-center">
          {/* Image */}
          {assetPath && (
            <div className="order-2 md:order-1">
              <img
                src={assetPath}
                alt={heading}
                className="w-full h-auto rounded-card shadow-lg"
              />
            </div>
          )}

          {/* Content */}
          <div className={`${assetPath ? 'order-1 md:order-2' : ''} space-y-gap`}>
            <h2 className="text-heading1 text-3xl md:text-4xl">{heading}</h2>
            {description && (
              <p className="text-body text-lg opacity-80">{description}</p>
            )}
            <a href={ctaHref} className="btn btn-secondary inline-block">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
