import React from 'react'
import { siteData } from '../../lib/data'
import SectionHeading from '../ui/SectionHeading'
import SectionWrapper from '../layout/SectionWrapper'

export default function Certifications() {
  return (
    <SectionWrapper id="certifications" className="bg-white">
      <SectionHeading number={4} title="Certifications" subtitle="Additional learning that supports analytical capability, business insight, and digital fluency." />

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {siteData.certifications.map((item) => (
          <article
            key={item.title}
            className="group rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-ivory-50)] p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[rgba(23,43,77,0.25)] hover:bg-white sm:p-6"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-navy-500)]">
                {item.provider}
              </p>
              {item.status && (
                <span className="rounded-full border border-[var(--color-line)] bg-white px-2 py-1 text-[9px] font-medium uppercase tracking-[0.18em] text-[var(--color-terra-500)]">
                  {item.status}
                </span>
              )}
            </div>

            <h3 className="mt-4 text-xl leading-snug text-[var(--color-navy-900)]">{item.title}</h3>

            <p className="mt-5 text-sm text-[var(--color-muted)]">
              {typeof item.year === 'number' ? item.year : item.year}
            </p>
          </article>
        ))}
      </div>
    </SectionWrapper>
  )
}
