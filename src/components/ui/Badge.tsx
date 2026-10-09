import React from 'react'

export default function Badge({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center rounded-full border border-[var(--color-line)] bg-[var(--color-ivory-100)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--color-navy-900)] ${className}`}>
      {children}
    </span>
  )
}
