'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Container } from '@/components/shared/Container'

const navItems = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Services', href: '#services' },
  { label: 'Career', href: '#career' },
  { label: 'Blogs', href: '#blogs' },
]

export default function Navbar() {
  const [rotation, setRotation] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setRotation(window.scrollY * 0.08)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const handler = () => setMenuOpen(false)
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [menuOpen])

  return (
    <header className="fixed left-1/2 top-4 z-50 w-[90%] max-w-[1320px] -translate-x-1/2 rounded-[14px] border border-[rgba(44,62,145,0.15)] bg-[#eef4fb] shadow-[0_8px_32px_-8px_rgba(15,23,42,0.14)] transition-shadow duration-300">
      <div className="flex h-[68px] items-center gap-2 px-4 sm:px-5">
        <a href="/" className="flex shrink-0 items-center">
          <span
            className="flex h-11 w-11 items-center justify-center"
            style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 0.1s linear' }}
          >
            <Image src="/trinovtech modular logo.svg" alt="Trinovtech" width={44} height={44} priority />
          </span>
        </a>

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

        <a
          href="/contact"
          className="ml-auto hidden rounded-[10px] bg-[#1f7a63] px-5 py-2.5 text-[15px] font-semibold text-white transition hover:bg-[#196749] md:inline-flex"
        >
          Contact Us
        </a>

        <div className="ml-auto flex items-center gap-2 md:hidden">
          <a href="/contact" className="rounded-[10px] bg-[#1f7a63] px-4 py-2 text-sm font-semibold text-white">
            Contact Us
          </a>

          <button
            onClick={(e) => { e.stopPropagation(); setMenuOpen((v) => !v) }}
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-lg transition-colors hover:bg-[rgba(31,122,99,0.08)]"
            aria-label="Toggle menu"
          >
            <span
              className="block h-[2px] w-5 rounded-full bg-[#1a2340] transition-all duration-300"
              style={{ transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }}
            />
            <span
              className="block h-[2px] w-5 rounded-full bg-[#1a2340] transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block h-[2px] w-5 rounded-full bg-[#1a2340] transition-all duration-300"
              style={{ transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }}
            />
          </button>
        </div>
      </div>

      <div
        className="overflow-hidden transition-all duration-300 md:hidden"
        style={{ maxHeight: menuOpen ? '320px' : '0px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <nav className="flex flex-col px-4 pb-4 pt-1 gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-2.5 text-[15px] font-medium text-[#1a2340] transition-colors hover:bg-[rgba(31,122,99,0.08)] hover:text-[#1f7a63]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
