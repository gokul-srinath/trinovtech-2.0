import Image from 'next/image'
import { Container } from '@/components/shared/Container'

export interface ServiceIconItem {
  label: string
  svgPath: string
}

interface ServicesIconGridProps {
  heading: string
  subtext?: string
  ctaLabel?: string
  ctaHref?: string
  services: ServiceIconItem[]
  moreLabel?: string
  imagePath?: string
}

export function ServicesIconGrid({
  heading,
  subtext,
  ctaLabel = 'Explore',
  ctaHref = '#',
  services,
  moreLabel = 'AND MANY MORE ...',
  imagePath,
}: ServicesIconGridProps) {
  return (
    <section className="w-full py-8">
      <Container>
        {/*
         * Outer row — Figma Frame 333 (outer):
         *   flex-direction: row, gap: 48px, width: 1320px
         */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            gap: '48px',
          }}
        >
          {/* ── LEFT COLUMN — Frame 331: flex-col, gap: 33px, width: 609px ── */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '33px',
              flex: '0 0 auto',
              width: 'min(609px, 100%)',
            }}
          >
            {/* Frame 212 — heading + subtext stack, gap: 6px */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '6px',
              }}
            >
              {/* Heading — 40px/700, #1F7A63, capitalize */}
              <h2
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: 'clamp(26px, 3vw, 40px)',
                  lineHeight: '47px',
                  textTransform: 'capitalize',
                  color: '#1F7A63',
                  margin: 0,
                  maxWidth: 519,
                }}
                dangerouslySetInnerHTML={{ __html: heading }}
              />

              {/* Subtext — 16px/500, #000, capitalize */}
              {subtext && (
                <p
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '24px',
                    textTransform: 'capitalize',
                    color: '#000000',
                    margin: 0,
                    maxWidth: 532,
                  }}
                >
                  {subtext}
                </p>
              )}
            </div>

            {/*
             * Icon grid — Figma Frame 333 (inner):
             *   flex-wrap, gap: 15px, 525×390px
             */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'flex-start',
                alignContent: 'flex-start',
                gap: '15px',
                width: '100%',
                maxWidth: 525,
              }}
            >
              {services.map((svc, i) => (
                <div
                  key={i}
                  className="transition-shadow duration-200 hover:shadow-md"
                  style={{
                    position: 'relative',
                    width: '150px',
                    height: '120px',
                    background: 'rgba(31, 122, 99, 0.05)',
                    borderRadius: '15px',
                    flexShrink: 0,
                    overflow: 'visible',
                  }}
                >
                  {/* Illustration — centered horizontally, top ~10–13px */}
                  {svc.svgPath && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '10px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 100,
                        height: 80,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Image
                        src={svc.svgPath}
                        alt={svc.label}
                        width={100}
                        height={80}
                        style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                      />
                    </div>
                  )}

                  {/* Label — top: 100px, centered, 12px/700, #1F7A63 */}
                  <span
                    style={{
                      position: 'absolute',
                      top: '100px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      whiteSpace: 'nowrap',
                      fontFamily: 'Poppins, sans-serif',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: '12px',
                      lineHeight: '18px',
                      color: '#1F7A63',
                    }}
                  >
                    {svc.label}
                  </span>
                </div>
              ))}

              {/* AND MANY MORE — Frame 310: same 150×120px tile, text centred */}
              {moreLabel && (
                <div
                  style={{
                    position: 'relative',
                    width: '150px',
                    height: '120px',
                    background: 'rgba(31, 122, 99, 0.05)',
                    borderRadius: '15px',
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: '15px',
                      lineHeight: '22px',
                      color: '#1F7A63',
                      textAlign: 'center',
                      padding: '0 10px',
                    }}
                  >
                    {moreLabel}
                  </span>
                </div>
              )}
            </div>

            {/*
             * CTA Button — Frame 330 / Frame 213 / Background:
             *   520×60px, #1F7A63, border-radius: 10px
             *   "Explore" (20px/400, #F1F5F9) + arrow icon
             */}
            <a
              href={ctaHref}
              className="group relative overflow-hidden"
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '15px',
                width: 'min(520px, 100%)',
                height: '60px',
                background: '#1F7A63',
                borderRadius: '10px',
                textDecoration: 'none',
                paddingLeft: '36px',
              }}
            >
              {/* Shimmer on hover */}
              <span
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out pointer-events-none"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)' }}
              />
              <span
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '20px',
                  lineHeight: '30px',
                  color: '#F1F5F9',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {ctaLabel}
              </span>
              {/* Arrow — Figma: 29×30px, color #F1F5F9 */}
              <svg
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                width="29"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#F1F5F9"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" stroke="#F1F5F9" strokeWidth="2" fill="none" />
                <line x1="8" y1="12" x2="16" y2="12" />
                <polyline points="12 8 16 12 12 16" />
              </svg>
            </a>
          </div>

          {/* ── RIGHT COLUMN — Frame 216: 661×665px, border-radius: 10px, overflow hidden ── */}
          {imagePath && (
            <div
              className="hidden md:block"
              style={{
                position: 'relative',
                flex: '1 1 0',
                minHeight: 500,
                maxHeight: 665,
                borderRadius: '10px',
                overflow: 'hidden',
                alignSelf: 'stretch',
              }}
            >
              <Image
                src={imagePath}
                alt="Tech Consulting Team"
                fill
                sizes="(max-width: 768px) 100vw, 661px"
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                priority
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
