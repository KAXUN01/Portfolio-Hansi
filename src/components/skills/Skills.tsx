import React from 'react'
import SectionHeading from '../ui/SectionHeading'
import SectionWrapper from '../layout/SectionWrapper'
import Tag from '../ui/Tag'

const skillGroups = [
  {
    title: 'Data & Analytics',
    items: ['Python', 'R', 'RStudio', 'SQL', 'Statistical Analysis']
  },
  {
    title: 'Business Intelligence',
    items: ['Tableau', 'Microsoft Power BI', 'Data Visualization', 'Data Storytelling']
  },
  {
    title: 'Productivity',
    items: ['Microsoft Excel', 'Microsoft Word', 'Microsoft PowerPoint']
  },
  {
    title: 'Creative',
    items: ['Canva', 'Graphic Design']
  },
  {
    title: 'Soft Skills',
    items: [
      'Communication',
      'Teamwork & Collaboration',
      'Leadership',
      'Problem Solving',
      'Critical Thinking',
      'Creativity',
      'Adaptability',
      'Ability to Work Under Pressure',
      'Group Work Coordination'
    ]
  }
]

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-[var(--color-ivory-50)]">
      <SectionHeading
        number={3}
        title="Analytics Toolkit"
        subtitle="A concise toolkit shaped around analysis, visualization, business thinking, and collaborative problem solving."
      />

      <div className="relative mt-10 overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-white/60 p-4 sm:p-6 lg:p-8">
        <div className="pointer-events-none absolute inset-0 opacity-55">
          <svg viewBox="0 0 800 500" className="h-full w-full" preserveAspectRatio="none" aria-hidden="true">
            <g fill="none" stroke="rgba(23,43,77,0.12)" strokeWidth="1">
              <path d="M0 70H800M0 170H800M0 270H800M0 370H800" />
              <path d="M120 0V500M260 0V500M400 0V500M540 0V500M680 0V500" />
            </g>
            <path d="M0 320C110 280, 140 250, 220 220S380 120, 520 200S680 220, 800 180" stroke="rgba(166,83,53,0.75)" strokeWidth="2" fill="none" />
            <g fill="rgba(23,43,77,0.75)">
              <circle cx="0" cy="320" r="4" />
              <circle cx="220" cy="220" r="4" />
              <circle cx="520" cy="200" r="4" />
              <circle cx="800" cy="180" r="4" />
            </g>
          </svg>
        </div>

        <div className="relative grid gap-5 lg:grid-cols-2 xl:grid-cols-5">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="group rounded-[1.5rem] border border-[var(--color-line)] bg-[rgba(255,255,255,0.8)] p-5 transition-transform duration-200 hover:-translate-y-1 hover:border-[rgba(23,43,77,0.26)]"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--color-navy-500)]">
                {group.title}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
