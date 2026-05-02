import Image from 'next/image'

const contactItems = [
  {
    icon: '/contact icons/Layer_1-1.svg',
    label: 'Email',
    value: 'info@trinovtech.in',
    href: 'mailto:info@trinovtech.in',
  },
  {
    icon: '/contact icons/Layer_1.svg',
    label: 'Whatsapp',
    value: '+91 73958 81708',
    href: 'https://wa.me/917395881708',
  },
  {
    icon: '/contact icons/Laag_1.svg',
    label: 'Phone',
    value: '+91 91504 11708',
    href: 'tel:+919150411708',
  },
]

export default function ContactPage() {
  return (
    <main className="w-full pt-28 pb-16">
      <div
        style={{ width: 'min(95%, 1100px)' }}
        className="mx-auto flex flex-col gap-12"
      >
        {/* Heading */}
        <div className="flex flex-col gap-3">
          <h1
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 700,
              lineHeight: '1.2',
              color: '#1F7A63',
              textTransform: 'capitalize',
            }}
          >
            Get In Touch
          </h1>
          <p
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '15px',
              lineHeight: '24px',
              color: '#1A1A1A',
              opacity: 0.7,
              maxWidth: '480px',
            }}
          >
            Reach out through any of the channels below — we typically respond within a few hours.
          </p>
        </div>

        {/* 3 contact cards */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {contactItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              className="flex flex-col items-center justify-center gap-5 transition-transform duration-200 hover:scale-[1.03]"
              style={{
                background: '#1F7A63',
                borderRadius: '24px',
                width: '220px',
                padding: '36px 24px 32px',
                textDecoration: 'none',
                boxShadow: '0 4px 24px rgba(31,122,99,0.18)',
                flex: '0 0 220px',
              }}
            >
              {/* Icon box */}
              <div
                className="flex items-center justify-center"
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '18px',
                  background: '#DFFFD6',
                }}
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={60}
                  height={60}
                  style={{ objectFit: 'contain' }}
                />
              </div>

              {/* Value */}
              <span
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#fff',
                  textAlign: 'center',
                  lineHeight: '22px',
                }}
              >
                {item.value}
              </span>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}
