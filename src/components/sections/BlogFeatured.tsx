import Image from 'next/image'
import { Container } from '@/components/shared/Container'

interface BlogFeaturedProps {
  tag?: string
  title: string
  excerpt: string
  author?: string
  date?: string
  readTime?: string
  imagePath?: string
  href?: string
}

export function BlogFeatured({
  tag = 'Featured',
  title,
  excerpt,
  author,
  date,
  readTime,
  imagePath,
  href = '#',
}: BlogFeaturedProps) {
  return (
    <section className="w-full py-6">
      <Container>
        <a
          href={href}
          className="group flex flex-col md:flex-row items-stretch gap-0 rounded-[24px] overflow-hidden transition-shadow duration-300 hover:shadow-[0_8px_40px_rgba(31,122,99,0.16)]"
          style={{
            background: '#F5F5F5',
            boxShadow: '-1px -1px 4px 0 rgba(0,0,0,0.10), 1px 1px 4px 0 rgba(0,0,0,0.10)',
            textDecoration: 'none',
          }}
        >
          {/* Image */}
          {imagePath && (
            <div className="relative w-full md:w-[55%] shrink-0" style={{ minHeight: '260px' }}>
              <Image
                src={imagePath}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 55vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          )}

          {/* Content */}
          <div className="flex flex-col justify-center gap-5 p-8 md:p-10 w-full">
            {/* Tag */}
            <span
              style={{
                display: 'inline-block',
                background: '#1F7A63',
                color: '#fff',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '12px',
                fontWeight: 600,
                borderRadius: '9999px',
                padding: '4px 14px',
                width: 'fit-content',
                letterSpacing: '0.04em',
              }}
            >
              {tag}
            </span>

            {/* Title */}
            <h2
              style={{
                color: '#1A1A1A',
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                fontWeight: 700,
                lineHeight: 1.35,
                textTransform: 'capitalize',
              }}
            >
              {title}
            </h2>

            {/* Excerpt */}
            <p
              style={{
                color: '#1A1A1A',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '15px',
                lineHeight: '25px',
                opacity: 0.65,
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {excerpt}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mt-auto">
              {author && (
                <span
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#1F7A63',
                  }}
                >
                  {author}
                </span>
              )}
              {date && (
                <span
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '13px',
                    color: '#1A1A1A',
                    opacity: 0.5,
                  }}
                >
                  {date}
                </span>
              )}
              {readTime && (
                <span
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '13px',
                    color: '#1A1A1A',
                    opacity: 0.5,
                  }}
                >
                  · {readTime}
                </span>
              )}

              {/* Read more arrow */}
              <span
                className="ml-auto flex items-center gap-1.5 transition-all duration-300 group-hover:gap-3"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#1F7A63',
                }}
              >
                Read More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1F7A63" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </div>
          </div>
        </a>
      </Container>
    </section>
  )
}
