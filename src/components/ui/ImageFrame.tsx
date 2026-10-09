import React from 'react'
import Image from 'next/image'

type ImageFrameProps = {
  src?: string
  alt?: string
  className?: string
  width?: number
  height?: number
  priority?: boolean
  sizes?: string
  objectPosition?: string
  children?: React.ReactNode
}

export default function ImageFrame({
  src,
  alt = '',
  className = '',
  width = 1200,
  height = 900,
  priority = false,
  sizes,
  objectPosition = 'center center',
  children
}: ImageFrameProps) {
  const base = 'relative overflow-hidden rounded-[28px] border border-[var(--color-line)] bg-[var(--color-ivory-100)] shadow-[0_18px_48px_rgba(23,43,77,0.08)]'

  if (src) {
    return (
      <div className={`${base} ${className}`}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes={sizes || '(max-width: 768px) 100vw, 50vw'}
          className="h-full w-full object-cover"
          style={{ objectPosition }}
          loading={priority ? 'eager' : 'lazy'}
        />
      </div>
    )
  }

  return <div className={`${base} ${className}`}>{children}</div>
}
