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
        <Eyebrow>{number ? `${String(number).padStart(2, '0')}` : 'Section'}</Eyebrow>
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
