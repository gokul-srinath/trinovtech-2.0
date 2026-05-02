/**
 * Testimonials Component
 * Carousel or grid of testimonial cards
 */

interface Testimonial {
  name: string
  title: string
  quote: string
  image?: string
}

interface TestimonialsProps {
  heading: string
  testimonials: Testimonial[]
}

export function Testimonials({
  heading,
  testimonials,
}: TestimonialsProps) {
  return (
    <section className="section py-section">
      <div className="max-w-6xl mx-auto px-gap">
        <h2 className="text-heading1 text-3xl md:text-4xl text-center mb-section">
          {heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gap">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="card space-y-gap">
              <p className="text-body text-sm italic">{testimonial.quote}</p>
              <div className="flex items-center gap-gap">
                {testimonial.image && (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                )}
                <div>
                  <p className="font-bold text-heading2">{testimonial.name}</p>
                  <p className="text-xs opacity-70">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
