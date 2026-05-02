/**
 * VideoSection Component
 * Full-width video with poster image and fallback
 */

interface VideoSectionProps {
  heading: string
  videoPath: string
  posterPath: string
  fallbackImagePath?: string
}

export function VideoSection({
  heading,
  videoPath,
  posterPath,
  fallbackImagePath,
}: VideoSectionProps) {
  return (
    <section className="section py-section">
      <div className="max-w-6xl mx-auto px-gap">
        <h2 className="text-heading1 text-3xl md:text-4xl text-center mb-section">
          {heading}
        </h2>

        <div className="relative w-full bg-black rounded-card overflow-hidden">
          <video
            controls
            poster={posterPath}
            className="w-full h-auto"
            playsInline
          >
            <source src={videoPath} type="video/mp4" />
            {fallbackImagePath && (
              <img
                src={fallbackImagePath}
                alt={heading}
                className="w-full h-auto"
              />
            )}
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  )
}
