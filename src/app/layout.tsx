import type { Metadata } from 'next'
import '../styles/globals.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Trinovtech — Tech Solutions & Consulting',
  description: 'End-to-end tech consulting services for embedded systems, SaaS, and cloud infrastructure.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-bg text-body">
        <Navbar />
        <div className="pt-24">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
