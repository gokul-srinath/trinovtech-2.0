/**
 * HeroCard Component
 * Full-width hero section with heading, subtext, CTA, and optional asset
 * Appears above the fold — always renders (not lazy-loaded)
 */

interface HeroCardProps {
  heading: string
  subtext?: string
  ctaLabel?: string
  ctaHref?: string
  assetPath?: string
  assetType?: 'image' | 'video'
}

export function HeroCard({
  heading,
  subtext,
  ctaLabel,
  ctaHref = '#',
  assetPath,
  assetType = 'image',
}: HeroCardProps) {
  return (
    <section className="section bg-gradient-to-br from-card via-bg to-bg min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-gap grid grid-cols-1 md:grid-cols-2 gap-section items-center">
        {/* Content */}
        <div className="space-y-gap">
          <h1 className="text-heading1 text-4xl md:text-5xl leading-tight">
            {heading && <div dangerouslySetInnerHTML={{ __html: heading }} />}
          </h1>
          {subtext && (
            <p className="text-body text-lg text-body opacity-80">{subtext}</p>
          )}
          {ctaLabel && (
            <a href={ctaHref} className="btn btn-primary inline-block">
              {ctaLabel}
            </a>
          )}
        </div>

        {/* Asset */}
        {assetPath && (
          <div className="flex items-center justify-center">
            {assetType === 'image' ? (
              <img
                src={assetPath}
                alt="Hero asset"
                className="w-full h-auto rounded-card shadow-lg"
              />
            ) : (
              <video
                src={assetPath}
                className="w-full h-auto rounded-card shadow-lg"
                autoPlay
                muted
                loop
                playsInline
              />
            )}
          </div>
        )}
      </div>
    </section>
  )
}
