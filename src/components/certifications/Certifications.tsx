import React from 'react'
import { siteData } from '../../lib/data'
import SectionHeading from '../ui/SectionHeading'
import SectionWrapper from '../layout/SectionWrapper'

export default function Certifications() {
  return (
    <SectionWrapper id="certifications" className="bg-[var(--color-ivory-50)]">
      <SectionHeading number={4} title="Certifications" subtitle="Selected learning experiences that reinforce business intelligence, data fluency, and applied AI literacy." />

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {siteData.certifications.map((item) => (
          <article key={item.title} className="editorial-card rounded-[1.75rem] p-5 sm:p-6">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-navy-500)]">
              {item.provider}
            </p>
            <h3 className="mt-4 text-xl leading-snug text-[var(--color-navy-900)]">{item.title}</h3>
            <p className="mt-4 text-sm text-[var(--color-muted)]">{item.year}</p>
          </article>
        ))}
      </div>
    </SectionWrapper>
  )
}
