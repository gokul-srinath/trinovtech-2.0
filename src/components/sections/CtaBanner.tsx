import { Container } from '@/components/shared/Container'

interface CtaFeature {
  iconPath: string
  label: string
  sublabel: string
}

interface CtaBannerProps {
  heading: string
  description?: string
  features?: CtaFeature[]
}

export function CtaBanner({ heading, description, features = [] }: CtaBannerProps) {
  return (
    <section className="w-full py-8">
      <Container>
        <div
          className="rounded-[30px] overflow-hidden"
          style={{
            background: '#1F7A63',
            padding: 'clamp(28px, 5vw, 52px) clamp(16px, 4vw, 48px) clamp(24px, 4vw, 44px)',
          }}
        >
          <div className="text-center mb-10">
            <h2
              style={{
                color: '#fff',
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(22px, 3vw, 32px)',
                fontWeight: 700,
                lineHeight: '1.3',
                textTransform: 'capitalize',
                marginBottom: '12px',
              }}
            >
              {heading}
            </h2>
            {description && (
              <p
                style={{
                  color: 'rgba(255,255,255,0.8)',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '14px',
                  lineHeight: '22px',
                  maxWidth: '520px',
                  margin: '0 auto',
                }}
              >
                {description}
              </p>
            )}
          </div>

          {features.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center gap-2 text-center"
                  style={{
                    background: '#fff',
                    borderRadius: '15px',
                    padding: '20px 16px',
                  }}
                >
                  <img
                    src={f.iconPath}
                    alt={f.label}
                    style={{ minWidth: '70px', minHeight: '70px', objectFit: 'contain' }}
                  />
                  <span
                    style={{
                      color: '#1F7A63',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '13px',
                      fontWeight: 600,
                      lineHeight: '18px',
                    }}
                  >
                    {f.label}
                  </span>
                  {f.sublabel && (
                    <span
                      style={{
                        color: 'rgba(31,122,99,0.7)',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '11px',
                        lineHeight: '16px',
                      }}
                    >
                      {f.sublabel}
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
