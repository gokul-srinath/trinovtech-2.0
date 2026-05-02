/**
 * FAQ Component
 * Collapsible FAQ items
 */

'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  heading: string
  items: FAQItem[]
}

export function FAQ({ heading, items }: FAQProps) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="section py-section">
      <div className="max-w-4xl mx-auto px-gap">
        <h2 className="text-heading1 text-3xl md:text-4xl text-center mb-section">
          {heading}
        </h2>

        <div className="space-y-gap">
          {items.map((item, idx) => (
            <div key={idx} className="card border-l-4 border-heading2">
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full text-left flex justify-between items-center gap-gap"
              >
                <h3 className="text-heading2 font-bold">{item.question}</h3>
                <span className="text-xl">{open === idx ? '−' : '+'}</span>
              </button>
              {open === idx && (
                <p className="text-body text-sm mt-gap opacity-80">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
