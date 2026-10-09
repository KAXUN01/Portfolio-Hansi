import React from 'react'
import { siteData } from '../../lib/data'
import SectionHeading from '../ui/SectionHeading'
import SectionWrapper from '../layout/SectionWrapper'

export default function Education() {
  return (
    <SectionWrapper id="education" className="bg-[var(--color-ivory-50)]">
      <SectionHeading number={2} title="Education" subtitle="Academic foundations aligned with analytics, business thinking, and evidence-based learning." />

      <div className="relative mt-10 ml-0 md:ml-6">
        <div className="absolute left-[11px] top-4 bottom-4 w-px bg-[var(--color-line)]" />

        <div className="space-y-8">
          {siteData.education.map((item, index) => (
            <article
              key={item.degree}
              className="relative pl-10 transition-transform duration-200 hover:-translate-y-0.5"
            >
              <span className="absolute left-0 top-2 flex h-6 w-6 items-center justify-center rounded-full border border-[var(--color-navy-900)] bg-[var(--color-ivory-50)] text-[10px] font-semibold text-[var(--color-navy-900)]">
                {index + 1}
              </span>

              <div className="rounded-[1.75rem] border border-[var(--color-line)] bg-white/80 p-5 sm:p-6">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-navy-500)]">
                  {item.period}
                </p>
                <h3 className="mt-4 text-2xl leading-tight text-[var(--color-navy-900)]">{item.degree}</h3>
                <p className="mt-3 text-base text-[var(--color-charcoal)]">{item.institution}</p>

                {item.gpa && (
                  <div className="mt-5 flex items-center justify-between border-t border-[var(--color-line)] pt-4">
                    <span className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      {item.status || 'GPA'}
                    </span>
                    <span className="font-display text-2xl text-[var(--color-navy-900)]">{item.gpa}</span>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
