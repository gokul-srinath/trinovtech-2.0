'use client'

import { useState, useRef, useEffect } from 'react'

interface VideoSectionProps {
  videoPath: string
  mobileVideoPath?: string
}

export function VideoSection({ videoPath, mobileVideoPath }: VideoSectionProps) {
  const [isMobile, setIsMobile] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    setIsMobile(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const currentVideoPath = isMobile && mobileVideoPath ? mobileVideoPath : videoPath
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')

  useEffect(() => {
    setStatus('loading')
  }, [currentVideoPath])

  if (status === 'error') return null

  return (
    <section
      style={{
        width: '100%',
        height: status === 'loading' ? '0px' : '100vh',
        maxHeight: isMobile ? '558px' : undefined,
        overflow: 'hidden',
        position: 'relative',
        background: '#000',
        transition: 'height 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <video
        ref={videoRef}
        key={currentVideoPath}
        src={currentVideoPath}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
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
