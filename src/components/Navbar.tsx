'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const navItems = [
  { label: 'About Us', href: '#about-us' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Services', href: '#services' },
  { label: 'Career', href: '#career' },
  { label: 'Blogs', href: '#blogs' },
]

export default function Navbar() {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const handleScroll = () => setRotation(window.scrollY * 0.08)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed left-1/2 top-4 z-50 w-[min(95%,1100px)] -translate-x-1/2 rounded-[14px] border border-[rgba(44,62,145,0.15)] bg-[#eef4fb] shadow-[0_8px_32px_-8px_rgba(15,23,42,0.14)] transition-shadow duration-300">
      <div className="flex h-[68px] items-center gap-2 px-4 sm:px-5">

        {/* Logo */}
        <a href="#home" className="flex shrink-0 items-center">
          <span
            className="flex h-11 w-11 items-center justify-center"
            style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 0.1s linear' }}
          >
            <Image
              src="/trinovtech modular logo.svg"
              alt="Trinovtech"
              width={44}
              height={44}
              priority
            />
          </span>
        </a>

        {/* Nav links */}
        <nav className="hidden flex-1 items-center justify-start gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-4 py-2 text-[15px] font-medium text-[#1a2340] transition-colors hover:text-[#1f7a63]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="ml-auto hidden rounded-[10px] bg-[#1f7a63] px-5 py-2.5 text-[15px] font-semibold text-white transition hover:bg-[#196749] md:inline-flex"
        >
          Contact Us
        </a>

        {/* Mobile CTA */}
        <a
          href="#contact"
          className="ml-auto rounded-[10px] bg-[#1f7a63] px-4 py-2 text-sm font-semibold text-white md:hidden"
        >
          Contact Us
        </a>
      </div>
    </header>
  )
}
