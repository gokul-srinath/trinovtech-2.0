'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Container } from '@/components/shared/Container'

interface BlogHeroProps {
  heading: string
  subtext?: string
  searchPlaceholder?: string
  categories?: string[]
  assetPath?: string
}

export function BlogHero({
  heading,
  subtext,
  searchPlaceholder = 'Search articles...',
  categories = [],
  assetPath,
}: BlogHeroProps) {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  return (
    <section className="w-full pt-28 pb-10">
      <Container>
        {/* Top row: heading + image */}
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12 mb-10">
          <div className="flex-1 w-full flex flex-col gap-5 text-center md:text-left items-center md:items-start">
            <h1
              style={{
                color: '#1A1A1A',
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'var(--text-hero)',
                fontWeight: 700,
                lineHeight: 1.15,
                textTransform: 'capitalize',
              }}
              dangerouslySetInnerHTML={{ __html: heading }}
            />
            {subtext && (
              <p
                style={{
                  color: '#1A1A1A',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '26px',
                  opacity: 0.7,
                  maxWidth: '480px',
                }}
              >
                {subtext}
              </p>
            )}
          </div>

          {assetPath && (
            <div className="hidden md:flex flex-1 w-full items-center justify-end">
              <Image
                src={assetPath}
                alt="Blog Hero"
                width={520}
                height={400}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full max-w-[480px] h-auto object-contain rounded-2xl"
                priority
              />
            </div>
          )}
        </div>

        {/* Search bar */}
        <div className="relative w-full max-w-2xl mb-8">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={searchPlaceholder}
            style={{
              width: '100%',
              padding: '14px 52px 14px 20px',
              borderRadius: '12px',
              border: '1.5px solid rgba(31,122,99,0.25)',
              background: '#fff',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '15px',
              color: '#1A1A1A',
              outline: 'none',
              boxShadow: '0 2px 12px rgba(31,122,99,0.07)',
            }}
          />
          <div
            className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-lg"
            style={{
              width: '32px',
              height: '32px',
              background: '#1F7A63',
              borderRadius: '8px',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>

        {/* Category tabs */}
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {['All', ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '8px 20px',
                  borderRadius: '9999px',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '13px',
                  fontWeight: 600,
                  border: '1.5px solid',
                  borderColor: activeCategory === cat ? '#1F7A63' : 'rgba(31,122,99,0.25)',
                  background: activeCategory === cat ? '#1F7A63' : 'transparent',
                  color: activeCategory === cat ? '#fff' : '#1F7A63',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}
