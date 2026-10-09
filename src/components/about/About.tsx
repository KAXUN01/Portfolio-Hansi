import React from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { siteData } from '../../lib/data'
import SectionWrapper from '../layout/SectionWrapper'
import SectionHeading from '../ui/SectionHeading'
import Badge from '../ui/Badge'

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-[var(--color-ivory-50)]">
      <SectionHeading number={1} title="About" subtitle="A business-minded undergraduate focused on data, insight, and practical decision support." />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <p className="max-w-2xl text-lg leading-8 text-[var(--color-charcoal)]">
            {siteData.profileSummary}
          </p>

          <div className="flex flex-wrap gap-3">
            <Badge>Python</Badge>
            <Badge>R</Badge>
            <Badge>Tableau</Badge>
            <Badge>Power BI</Badge>
            <Badge>Excel</Badge>
          </div>
        </div>

        <aside className="editorial-card rounded-[2rem] p-6 sm:p-7">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-navy-500)]">
            Contact
          </p>

          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <Mail size={16} className="mt-1 text-[var(--color-terra-500)]" />
              <a href={`mailto:${siteData.contact.email}`} className="text-sm text-[var(--color-charcoal)] hover:text-[var(--color-navy-700)]">
                {siteData.contact.email}
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={16} className="mt-1 text-[var(--color-terra-500)]" />
              <a href={`tel:${siteData.contact.phone}`} className="text-sm text-[var(--color-charcoal)] hover:text-[var(--color-navy-700)]">
                {siteData.contact.phone}
              </a>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={16} className="mt-1 text-[var(--color-terra-500)]" />
              <p className="text-sm text-[var(--color-charcoal)]">{siteData.contact.address}</p>
            </div>
          </div>
        </aside>
      </div>
    </SectionWrapper>
  )
}
