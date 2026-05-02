import Navbar from '@/components/Navbar'

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#EDFFE4' }}>
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        {children}
      </div>
    </div>
  )
}
