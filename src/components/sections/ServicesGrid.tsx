/**
 * ServicesGrid Component
 * Grid of service cards with optional icons/images
 */

interface ServiceItem {
  heading: string
  description?: string
  assetPath?: string
  href?: string
}

interface ServicesGridProps {
  heading: string
  items: ServiceItem[]
  columns?: 2 | 3 | 4
}

export function ServicesGrid({
  heading,
  items,
  columns = 3,
}: ServicesGridProps) {
  const gridClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  }[columns]

  return (
    <section className="section py-section">
      <div className="max-w-6xl mx-auto px-gap">
        {/* Heading */}
        <div className="mb-section text-center">
          <h2 className="text-heading1 text-3xl md:text-4xl">{heading}</h2>
        </div>

        {/* Grid */}
        <div className={`grid grid-cols-1 ${gridClass} gap-gap`}>
          {items.map((item, idx) => (
            <a
              key={idx}
              href={item.href || '#'}
              className="card hover:shadow-lg transition-shadow"
            >
              {item.assetPath && (
                <img
                  src={item.assetPath}
                  alt={item.heading}
                  className="w-full h-48 object-cover rounded-md mb-gap"
                />
              )}
              <h3 className="text-heading2 text-xl font-bold mb-gap/2">
                {item.heading}
              </h3>
              {item.description && (
                <p className="text-body text-sm opacity-70">{item.description}</p>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
