/**
 * Admin layout — standalone, no main site Navbar/Footer
 */
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: '100vh', background: '#F7F8FA' }}>
      {children}
    </div>
  )
}
