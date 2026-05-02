import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Trinovtech — Tech Solutions & Consulting',
  description: 'End-to-end tech consulting services for embedded systems, SaaS, and cloud infrastructure.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen text-body" style={{ backgroundColor: '#EDFFE4' }}>
        {children}
      </body>
    </html>
  )
}
