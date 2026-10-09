import React from 'react'

type ImageFrameProps = {
  src?: string
  alt?: string
  className?: string
  children?: React.ReactNode
}

export default function ImageFrame({ src, alt = '', className = '', children }: ImageFrameProps) {
  const base = 'relative overflow-hidden rounded-[28px] border border-[var(--color-line)] bg-[var(--color-ivory-100)] shadow-[0_18px_48px_rgba(23,43,77,0.08)]'

  if (src) {
    return (
      <div className={`${base} ${className}`}>
        <img src={src} alt={alt} className="h-full w-full object-cover object-center" />
      </div>
    )
  }

  return <div className={`${base} ${className}`}>{children}</div>
}
