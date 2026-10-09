import React from 'react'
import { ArrowUpRight } from 'lucide-react'

type ProjectCardProps = {
  number: string
  title: string
  category: string
  stack: string[]
  description: string
  period?: string
  visual?: 'trend' | 'distribution' | 'performance' | 'dashboard' | 'energy' | 'community'
  featured?: boolean
  href?: string
}

const visualMap = {
  trend: {
    label: 'Trend analysis',
    pattern: 'bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.9),rgba(239,230,216,0.8)_25%,rgba(49,87,122,0.18)_100%)]'
  },
  distribution: {
    label: 'Distribution',
    pattern: 'bg-[linear-gradient(135deg,rgba(23,43,77,0.08),rgba(166,83,53,0.10))]'
  },
  performance: {
    label: 'Performance',
    pattern: 'bg-[linear-gradient(135deg,rgba(49,87,122,0.10),rgba(255,255,255,0.8))]'
  },
  dashboard: {
    label: 'Dashboard',
    pattern: 'bg-[linear-gradient(135deg,rgba(23,43,77,0.05),rgba(166,83,53,0.08))]'
  },
  energy: {
    label: 'Transition',
    pattern: 'bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),rgba(49,87,122,0.12)_40%,rgba(166,83,53,0.08)_100%)]'
  },
  community: {
    label: 'Impact',
    pattern: 'bg-[linear-gradient(135deg,rgba(23,43,77,0.04),rgba(255,255,255,0.8))]'
  }
} as const

export default function ProjectCard({
  number,
  title,
  category,
  stack,
  description,
  period,
  visual = 'trend',
  featured = false,
  href
}: ProjectCardProps) {
  const currentVisual = visualMap[visual]
  const cardSize = featured ? 'lg:col-span-2' : ''

  return (
    <article className={`group overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-white shadow-[0_18px_45px_rgba(23,43,77,0.06)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(23,43,77,0.08)] ${cardSize}`}>
      <div className={`relative p-5 sm:p-6 ${featured ? 'sm:p-7' : ''}`}>
        <div className="flex items-center justify-between gap-4">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-navy-500)]">
            {number}
          </p>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-line)] bg-[var(--color-ivory-50)] text-[var(--color-navy-900)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ArrowUpRight size={16} />
          </span>
        </div>

        <div className={`mt-5 h-40 overflow-hidden rounded-[1.5rem] border border-[var(--color-line)] ${currentVisual.pattern}`}>
          <div className="relative h-full w-full overflow-hidden">
            <svg viewBox="0 0 800 300" className="h-full w-full" preserveAspectRatio="none" aria-hidden="true">
              <g fill="none" stroke="rgba(23,43,77,0.18)" strokeWidth="1">
                <path d="M0 70H800M0 150H800M0 230H800" />
                <path d="M120 0V300M250 0V300M380 0V300M510 0V300M640 0V300" />
              </g>
              <path d="M20 200C130 160, 180 120, 270 150S410 180, 510 110S660 70, 780 110" stroke="rgba(166,83,53,0.9)" strokeWidth="3" fill="none" strokeLinecap="round" />
              <g fill="rgba(23,43,77,0.8)">
                <circle cx="20" cy="200" r="5" />
                <circle cx="270" cy="150" r="5" />
                <circle cx="510" cy="110" r="5" />
                <circle cx="780" cy="110" r="5" />
              </g>
            </svg>
            <div className="absolute inset-x-0 bottom-0 flex justify-between px-4 pb-3 text-[9px] font-medium uppercase tracking-[0.18em] text-[var(--color-navy-500)]">
              <span>{currentVisual.label}</span>
              {period && <span>{period}</span>}
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-navy-500)]">{category}</span>
          {href ? (
            <a href={href} className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--color-terra-500)]">
              View project
            </a>
          ) : (
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">
              Case study
            </span>
          )}
        </div>

        <h3 className={`mt-5 text-[1.9rem] leading-none text-[var(--color-navy-900)] ${featured ? 'sm:text-[2.3rem]' : ''}`}>
          {title}
        </h3>

        <p className="mt-4 text-base leading-7 text-[var(--color-charcoal)]/90">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="inline-flex rounded-full border border-[var(--color-line)] bg-[var(--color-ivory-50)] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--color-navy-700)]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
