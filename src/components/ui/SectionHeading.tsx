import React from 'react'
import Eyebrow from './Eyebrow'

export default function SectionHeading({
  number,
  title,
  subtitle,
  className = ''
}: {
  number?: string | number
  title: string
  subtitle?: string
  className?: string
}) {
  return (
    <div className={`flex flex-col gap-4 md:flex-row md:items-end md:justify-between ${className}`}>
      <div className="max-w-2xl">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-line)] bg-[rgba(255,255,255,0.6)] text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--color-navy-700)]">
            {number ? `${String(number).padStart(2, '0')}` : 'Section'}
          </span>
          <span className="soft-divider w-10" />
        </div>
        <h2 className="mt-4 text-4xl leading-none text-[var(--color-navy-900)] sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        {subtitle && <p className="mt-4 max-w-xl text-base text-[var(--color-muted)]">{subtitle}</p>}
      </div>

      <div className="flex items-center gap-4 md:justify-end">
        <span className="soft-divider w-14" />
        <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-navy-500)]">
          Business Analytics
        </p>
      </div>
    </div>
  )
}
