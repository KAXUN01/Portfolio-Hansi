import React from 'react'
import { siteData } from '../../lib/data'
import SectionHeading from '../ui/SectionHeading'
import SectionWrapper from '../layout/SectionWrapper'

export default function Education() {
  return (
    <SectionWrapper id="education" className="bg-[var(--color-ivory-50)]">
      <SectionHeading number={2} title="Education" subtitle="Academic training grounded in analytics, business context, and evidence-based thinking." />

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {siteData.education.map((item) => (
          <article key={item.degree} className="editorial-card rounded-[2rem] p-6 sm:p-7">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-navy-500)]">
              {item.period}
            </p>
            <h3 className="mt-4 text-2xl leading-tight text-[var(--color-navy-900)]">
              {item.degree}
            </h3>
            <p className="mt-3 text-base text-[var(--color-charcoal)]">{item.institution}</p>
            {item.gpa && (
              <div className="mt-6 flex items-center justify-between border-t border-[var(--color-line)] pt-4">
                <span className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">GPA</span>
                <span className="font-display text-2xl text-[var(--color-navy-900)]">{item.gpa}</span>
              </div>
            )}
          </article>
        ))}
      </div>
    </SectionWrapper>
  )
}
