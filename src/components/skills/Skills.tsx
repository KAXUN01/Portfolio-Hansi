import React from 'react'
import { siteData } from '../../lib/data'
import SectionHeading from '../ui/SectionHeading'
import SectionWrapper from '../layout/SectionWrapper'
import Tag from '../ui/Tag'

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeading number={3} title="Skills & Tools" subtitle="Analytical methods and business tools I use to translate raw data into practical insight." />

      <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        <div className="editorial-card rounded-[2rem] p-6">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-navy-500)]">Data analysis</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {['Python', 'R', 'SQL', 'Excel'].map((skill) => (
              <Tag key={skill}>{skill}</Tag>
            ))}
          </div>
        </div>

        <div className="editorial-card rounded-[2rem] p-6">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-navy-500)]">Visualization</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {['Tableau', 'Power BI', 'Canva', 'Matplotlib'].map((skill) => (
              <Tag key={skill}>{skill}</Tag>
            ))}
          </div>
        </div>

        <div className="editorial-card rounded-[2rem] p-6">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-navy-500)]">Business tools</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {['PowerPoint', 'Word', 'Reporting', 'Decision support'].map((skill) => (
              <Tag key={skill}>{skill}</Tag>
            ))}
          </div>
        </div>

        <div className="editorial-card rounded-[2rem] p-6">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-navy-500)]">Mindset</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {['Problem solving', 'Critical thinking', 'Stakeholder communication', 'Research'].map((skill) => (
              <Tag key={skill}>{skill}</Tag>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
