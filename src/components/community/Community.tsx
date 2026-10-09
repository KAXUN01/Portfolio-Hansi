import React from 'react'
import SectionHeading from '../ui/SectionHeading'
import { siteData } from '../../lib/data'
import SectionWrapper from '../layout/SectionWrapper'

export default function Community() {
  return (
    <SectionWrapper id="community" className="bg-[var(--color-ivory-50)]">
      <SectionHeading
        number={5}
        title="Beyond the Data"
        subtitle="Leadership, discipline and collaboration beyond the classroom, shaped through school and university activities."
      />

      <div className="relative mt-10 ml-0 md:ml-6">
        <div className="absolute left-[11px] top-4 bottom-4 w-px bg-[var(--color-line)]" />

        <div className="space-y-6">
          {siteData.community.map((item) => (
            <article key={item.activity} className="relative pl-10">
              <span className="absolute left-0 top-3 flex h-6 w-6 items-center justify-center rounded-full border border-[var(--color-navy-900)] bg-[var(--color-ivory-50)]">
                <span className="h-2 w-2 rounded-full bg-[var(--color-terra-500)]" />
              </span>

              <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-white/80 p-5 transition-transform duration-200 hover:-translate-y-0.5">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-navy-500)]">
                  {item.focus}
                </p>
                <h3 className="mt-3 text-xl leading-snug text-[var(--color-navy-900)] sm:text-2xl">
                  {item.activity}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
