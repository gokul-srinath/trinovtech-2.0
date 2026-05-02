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
    <main className="flex flex-col sm:flex-row flex-wrap gap-6 items-center justify-center px-6 py-8">
      {contactItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          target={item.href.startsWith('http') ? '_blank' : undefined}
          rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
          className="flex flex-col items-center justify-center gap-5 transition-transform duration-200 hover:scale-[1.03]"
          style={{
            background: '#2E8B57',
            borderRadius: '24px',
            width: 'clamp(160px, 28vw, 220px)',
            padding: 'clamp(24px, 4vw, 36px) clamp(16px, 3vw, 24px)',
            textDecoration: 'none',
            boxShadow: '0 4px 24px rgba(31,122,99,0.18)',
          }}
        >
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
    </main>
  )
}
