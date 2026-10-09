import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import ProjectVisual from './ProjectVisual'

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
  trend: { label: 'Trend analysis', variant: 'line' as const },
  distribution: { label: 'Distribution', variant: 'points' as const },
  performance: { label: 'Performance', variant: 'bars' as const },
  dashboard: { label: 'Dashboard', variant: 'kpi' as const },
  energy: { label: 'Transition', variant: 'grid' as const },
  community: { label: 'Impact', variant: 'bars' as const }
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
    <article className={`group overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-[rgba(255,255,255,0.8)] shadow-[0_18px_45px_rgba(23,43,77,0.06)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(23,43,77,0.08)] ${cardSize}`}>
      <div className={`relative p-5 sm:p-6 ${featured ? 'sm:p-7' : ''}`}>
        <div className="flex items-center justify-between gap-4">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-navy-500)]">
            {number}
          </p>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-line)] bg-[var(--color-ivory-50)] text-[var(--color-navy-900)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ArrowUpRight size={16} />
          </span>
        </div>

        <div className="relative mt-5 h-40 overflow-hidden rounded-[1.5rem] border border-[var(--color-line)] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.9),_rgba(239,230,216,0.8)_25%,_rgba(49,87,122,0.12)_100%)]">
          <div className="absolute right-3 top-3 h-10 w-10 rounded-full border border-[var(--color-line)] bg-[rgba(255,255,255,0.65)]" />
          <ProjectVisual variant={currentVisual.variant} />
          <div className="absolute inset-x-0 bottom-0 flex justify-between px-4 pb-3 text-[9px] font-medium uppercase tracking-[0.18em] text-[var(--color-navy-500)]">
            <span>{currentVisual.label}</span>
            {period && <span>{period}</span>}
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
