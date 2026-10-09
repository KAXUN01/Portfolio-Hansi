import React from 'react'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { siteData } from '../../lib/data'
import SectionWrapper from '../layout/SectionWrapper'
import Button from '../ui/Button'

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="pb-24">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <SectionHeading number={6} title="Contact" subtitle="Open to internship opportunities where I can contribute with analytics, visual thinking, and business problem solving." />

          <div className="mt-8 space-y-4 text-base text-[var(--color-charcoal)]">
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-[var(--color-terra-500)]" />
              <a href={`mailto:${siteData.contact.email}`} className="hover:text-[var(--color-navy-700)]">
                {siteData.contact.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-[var(--color-terra-500)]" />
              <a href={`tel:${siteData.contact.phone}`} className="hover:text-[var(--color-navy-700)]">
                {siteData.contact.phone}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-[var(--color-terra-500)]" />
              <span>{siteData.contact.address}</span>
            </div>
          </div>
        </div>

        <div className="editorial-card rounded-[2rem] p-6 sm:p-8">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-navy-500)]">Available for</p>
          <h3 className="mt-4 font-display text-3xl leading-none text-[var(--color-navy-900)]">
            Business analytics internships
          </h3>
          <p className="mt-4 text-base leading-7 text-[var(--color-charcoal)]">
            I’m eager to contribute to teams that value insight, clarity, and data-informed decision making.
          </p>
          <div className="mt-6">
            <Button as="a" href={`mailto:${siteData.contact.email}`} className="gap-2">
              Send an email <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
