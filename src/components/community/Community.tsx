import React from 'react'
import SectionHeading from '../ui/SectionHeading'
import { siteData } from '../../lib/data'
import SectionWrapper from '../layout/SectionWrapper'

export default function Community() {
  return (
    <SectionWrapper id="community">
      <SectionHeading number={5} title="Community & Leadership" subtitle="Community impact and leadership experiences that show initiative beyond the classroom." />

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {siteData.community.map((item) => (
          <article key={item.activity} className="editorial-card rounded-[2rem] p-6">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-navy-500)]">{item.focus}</p>
            <h3 className="mt-4 text-2xl leading-tight text-[var(--color-navy-900)]">{item.activity}</h3>
          </article>
        ))}

        <article className="editorial-card rounded-[2rem] p-6">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-navy-500)]">Beyond academics</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-[var(--color-charcoal)]">
            <li>Games Captain and Senior Prefect</li>
            <li>Senior Girl Guide, chess and table tennis participation</li>
            <li>Member of the NSBM Sports Fiesta Badminton Team (2024, 2025)</li>
          </ul>
        </article>
      </div>
    </SectionWrapper>
  )
}
