import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { siteData } from '../../lib/data'
import SectionWrapper from '../layout/SectionWrapper'
import SectionHeading from '../ui/SectionHeading'
import Badge from '../ui/Badge'
import ImageFrame from '../ui/ImageFrame'
import { imagePresets } from '../../lib/images'

export default function About() {
  const currentStudy = siteData.education[0]

  return (
    <SectionWrapper id="about" className="bg-[var(--color-ivory-50)]">
      <div className="relative">
        <svg className="absolute right-0 top-0 hidden h-28 w-52 md:block" viewBox="0 0 220 120" aria-hidden="true">
          <path d="M0 90 C 60 20, 110 18, 150 54 S 205 85, 220 45" fill="none" stroke="rgba(166,83,53,0.55)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      <SectionHeading
        number={1}
        title="About"
        subtitle="Building practical skills in analysis, business intelligence, and decision support."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div className="relative">
          <ImageFrame
            src={siteData.aboutImage.src}
            alt={siteData.aboutImage.alt}
            width={siteData.aboutImage.width}
            height={siteData.aboutImage.height}
            sizes={imagePresets.profileAbout.sizes}
            objectPosition={siteData.aboutImage.objectPosition || 'center center'}
            className="h-[500px] w-full border-[1.5px] border-[var(--color-line)] bg-[var(--color-ivory-100)]"
          />
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-navy-500)]">
              Analytical lens
            </p>
            <p className="text-lg leading-8 text-[var(--color-charcoal)]">
              I am an undergraduate student with a strong interest in data analysis, business intelligence, and data-driven decision-making. My academic journey has helped me build practical skills in Python, R, Microsoft Excel, Tableau, and statistical analysis, and I am continuously developing my ability to turn raw data into clear, actionable business insight.
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

          
        </div>
      </div>
    </SectionWrapper>
  )
}
