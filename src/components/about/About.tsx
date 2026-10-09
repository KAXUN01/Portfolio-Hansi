import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { siteData } from '../../lib/data'
import SectionWrapper from '../layout/SectionWrapper'
import SectionHeading from '../ui/SectionHeading'
import Badge from '../ui/Badge'
import ImageFrame from '../ui/ImageFrame'

export default function About() {
  const currentStudy = siteData.education[0]

  return (
    <SectionWrapper id="about" className="bg-[var(--color-ivory-50)]">
      <SectionHeading
        number={1}
        title="About"
        subtitle="Business Analytics undergraduate building practical skills in analysis, business intelligence, and decision support."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div className="relative">
          <ImageFrame className="h-[500px] w-full border-[1.5px] border-[var(--color-line)] bg-[var(--color-ivory-100)]">
            <div className="relative h-full overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.9),_rgba(239,230,216,0.8)_28%,_rgba(49,87,122,0.15)_100%)] p-6">
              <div className="absolute inset-0 opacity-60">
                <svg viewBox="0 0 420 520" className="h-full w-full" preserveAspectRatio="none" aria-hidden="true">
                  <g fill="none" stroke="rgba(23,43,77,0.18)" strokeWidth="1">
                    <path d="M0 90H420M0 190H420M0 290H420M0 390H420" />
                    <path d="M80 0V520M180 0V520M280 0V520M380 0V520" />
                  </g>
                  <path d="M30 330 C110 270, 150 270, 230 220 S350 130, 390 170" stroke="rgba(166,83,53,0.95)" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <g fill="rgba(23,43,77,0.9)">
                    <circle cx="30" cy="330" r="5" />
                    <circle cx="110" cy="270" r="5" />
                    <circle cx="230" cy="220" r="5" />
                    <circle cx="350" cy="130" r="5" />
                    <circle cx="390" cy="170" r="5" />
                  </g>
                </svg>
              </div>

              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--color-navy-500)]">
                    01 / About
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-line)] bg-white/80 text-[var(--color-navy-900)]">
                    <ArrowUpRight size={16} />
                  </span>
                </div>

                <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-[rgba(255,255,255,0.72)] p-4 backdrop-blur-sm">
                  <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-navy-500)]">
                    Currently
                  </p>
                  <p className="mt-4 font-display text-3xl leading-none text-[var(--color-navy-900)]">
                    {currentStudy.degree}
                  </p>
                  <p className="mt-4 text-sm text-[var(--color-charcoal)]">{currentStudy.institution}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-[var(--color-line)] pt-3">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">GPA</span>
                    <span className="font-display text-2xl text-[var(--color-navy-900)]">3.41</span>
                  </div>
                </div>
              </div>
            </div>
          </ImageFrame>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-navy-500)]">
              Business Analytics Undergraduate
            </p>
            <p className="text-lg leading-8 text-[var(--color-charcoal)]">
              I am a Business Analytics undergraduate with a strong interest in data analysis, business intelligence, and data-driven decision-making. My academic journey has helped me build practical skills in Python, R, Microsoft Excel, Tableau, and statistical analysis, and I am continuously developing my ability to turn raw data into clear, actionable business insight.
            </p>
            <p className="text-lg leading-8 text-[var(--color-charcoal)]">
              I enjoy working with analytical problems, understanding patterns in data, and using business context to support better decisions. Through academic projects and structured learning, I am developing the technical and analytical foundation needed to contribute to an internship opportunity where I can apply and strengthen these skills.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Badge>Python</Badge>
            <Badge>R</Badge>
            <Badge>SQL</Badge>
            <Badge>Tableau</Badge>
            <Badge>Power BI</Badge>
            <Badge>Excel</Badge>
          </div>

          <div className="border-t border-[var(--color-line)] pt-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-navy-500)]">
              Currently
            </p>
            <div className="mt-4 space-y-2 text-base text-[var(--color-charcoal)]">
              <p>{currentStudy.degree}</p>
              <p>{currentStudy.institution}</p>
              <p>GPA: {currentStudy.gpa}</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
