import React from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function ProjectCard({
  title,
  stack,
  description
}: {
  title: string
  stack: string[]
  description: string
}) {
  return (
    <article className="editorial-card group rounded-[2rem] p-6 sm:p-7">
      <div className="flex items-center justify-between gap-4">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-navy-500)]">
          Case study
        </p>
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-line)] bg-[var(--color-ivory-50)] text-[var(--color-navy-900)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          <ArrowUpRight size={16} />
        </span>
      </div>

      <h3 className="mt-6 text-2xl leading-tight text-[var(--color-navy-900)] sm:text-[2rem]">
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
    </article>
  )
}
