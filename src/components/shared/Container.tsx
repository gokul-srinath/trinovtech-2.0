export function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`w-[90%] mx-auto max-w-[1320px] ${className}`}>
      {children}
    </div>
  )
}
