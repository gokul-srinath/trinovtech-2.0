'use client'

import { useState, useRef } from 'react'

interface VideoSectionProps {
  videoPath: string
}

export function VideoSection({ videoPath }: VideoSectionProps) {
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')
  const videoRef = useRef<HTMLVideoElement>(null)

  if (status === 'error') return null

  return (
    <section
      style={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        background: '#000',
        // Hide until video is ready to avoid flash
        opacity: status === 'ready' ? 1 : 0,
        transition: 'opacity 0.6s ease',
        // Still occupy space while loading so layout doesn't shift
        display: status === 'error' ? 'none' : 'block',
      }}
    >
      <video
        ref={videoRef}
        src={videoPath}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onCanPlay={() => setStatus('ready')}
        onError={() => setStatus('error')}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </section>
  )
}
