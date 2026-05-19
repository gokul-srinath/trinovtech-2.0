'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Container } from '@/components/shared/Container'

export interface BlogPost {
  tag?: string
  title: string
  excerpt: string
  author?: string
  date?: string
  readTime?: string
  imagePath?: string
  href?: string
}

interface BlogGridProps {
  heading?: string
  posts: BlogPost[]
  postsPerPage?: number
}

export function BlogGrid({ heading, posts, postsPerPage = 6 }: BlogGridProps) {
  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(posts.length / postsPerPage)
  const visible = posts.slice((page - 1) * postsPerPage, page * postsPerPage)

  return (
    <section className="w-full py-8">
      <Container>
        {heading && (
          <h2
            className="mb-8"
            style={{
              color: '#1A1A1A',
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'var(--text-h2)',
              fontWeight: 700,
              lineHeight: 1.3,
              textTransform: 'capitalize',
            }}
          >
            {heading}
          </h2>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {visible.map((post, i) => (
            <a
              key={i}
              href={post.href ?? '#'}
              className="group flex flex-col rounded-[20px] overflow-hidden transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(31,122,99,0.15)]"
              style={{
                background: '#F5F5F5',
                boxShadow: '-1px -1px 4px 0 rgba(0,0,0,0.08), 1px 1px 4px 0 rgba(0,0,0,0.08)',
                textDecoration: 'none',
              }}
            >
              {/* Card image */}
              <div className="relative w-full overflow-hidden" style={{ height: '200px' }}>
                {post.imagePath ? (
                  <Image
                    src={post.imagePath}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div
                    className="w-full h-full"
                    style={{ background: 'rgba(31,122,99,0.08)' }}
                  />
                )}
              </div>

              {/* Card content */}
              <div className="flex flex-col gap-3 p-5 flex-1">
                {/* Tag */}
                {post.tag && (
                  <span
                    style={{
                      display: 'inline-block',
                      background: 'rgba(31,122,99,0.12)',
                      color: '#1F7A63',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '11px',
                      fontWeight: 600,
                      borderRadius: '9999px',
                      padding: '3px 12px',
                      width: 'fit-content',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {post.tag}
                  </span>
                )}

                {/* Title */}
                <h3
                  style={{
                    color: '#1A1A1A',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '16px',
                    fontWeight: 700,
                    lineHeight: 1.4,
                    textTransform: 'capitalize',
                  }}
                >
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p
                  style={{
                    color: '#1A1A1A',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '13px',
                    lineHeight: '21px',
                    opacity: 0.6,
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    flex: 1,
                  }}
                >
                  {post.excerpt}
                </p>

                {/* Meta + Read more */}
                <div className="flex items-center gap-3 mt-auto pt-2" style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}>
                  <span
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '12px',
                      color: '#1F7A63',
                      fontWeight: 600,
                    }}
                  >
                    {post.author ?? ''}
                  </span>
                  {post.date && (
                    <span
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '12px',
                        color: '#1A1A1A',
                        opacity: 0.45,
                      }}
                    >
                      {post.date}
                    </span>
                  )}
                  <span
                    className="ml-auto flex items-center gap-1 transition-all duration-300 group-hover:gap-2"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '12px',
                      fontWeight: 600,
                      color: '#1F7A63',
                    }}
                  >
                    Read More
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1F7A63" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => { setPage(p); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '1.5px solid',
                  borderColor: p === page ? '#1F7A63' : 'rgba(31,122,99,0.25)',
                  background: p === page ? '#1F7A63' : 'transparent',
                  color: p === page ? '#fff' : '#1F7A63',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {p}
              </button>
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}
