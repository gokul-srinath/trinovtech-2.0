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
        width: '100%',
        height: status === 'loading' ? '0px' : '100vh',
        overflow: 'hidden',
        position: 'relative',
        background: '#000',
        transition: 'height 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
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
        onCanPlayThrough={() => setStatus('ready')}
        onError={() => setStatus('error')}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: status === 'ready' ? 1 : 0,
          transform: status === 'ready' ? 'scale(1)' : 'scale(1.04)',
          transition: 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />
    </section>
  )
}
