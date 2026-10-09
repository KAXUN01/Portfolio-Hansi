import React from 'react'

export default function Tag({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center rounded-full border border-[var(--color-line)] bg-white px-2.5 py-1 text-[11px] font-medium tracking-[0.06em] text-[var(--color-muted)] uppercase ${className}`}>
      {children}
    </span>
  )
}
