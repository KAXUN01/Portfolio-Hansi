import React from 'react'

export default function Eyebrow({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-navy-500)] ${className}`}>
      {children}
    </p>
  )
}
