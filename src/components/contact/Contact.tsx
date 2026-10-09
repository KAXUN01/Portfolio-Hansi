import React from 'react'
import { ArrowRight, ArrowUpRight, Mail, Phone } from 'lucide-react'
import { siteData } from '../../lib/data'
import SectionWrapper from '../layout/SectionWrapper'
import Button from '../ui/Button'

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="pb-20">
      <div className="editorial-card rounded-[2rem] p-6 sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-line)] bg-[rgba(255,255,255,0.6)] text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--color-navy-700)]">
                    06
                  </span>
                  <span className="soft-divider w-10" />
                </div>

                <h2 className="mt-4 text-[clamp(2.8rem,5vw,5.2rem)] leading-[0.9] tracking-[-0.06em] text-[var(--color-navy-900)]">
                  Let&apos;s talk about ideas <span className="text-[var(--color-navy-900)]">&amp;</span> opportunities.
                </h2>

                <p className="mt-4 max-w-xl text-base text-[var(--color-muted)]">
                  Open to projects and business-focused roles where thoughtful analysis can help teams make better decisions.
                </p>
              </div>

              <div className="flex items-center gap-4 md:justify-end">
                <span className="soft-divider w-14" />
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.25rem] border border-[var(--color-line)] bg-white/80 p-4">
                <Mail size={16} className="text-[var(--color-terra-500)]" />
                <p className="mt-3 text-[10px] uppercase tracking-[0.22em] text-[var(--color-navy-500)]">
                  Email
                </p>
                <a href={`mailto:${siteData.contact.email}`} className="mt-2 block text-sm leading-6 hover:text-[var(--color-navy-700)]">
                  {siteData.contact.email}
                </a>
              </div>

              <div className="rounded-[1.25rem] border border-[var(--color-line)] bg-white/80 p-4">
                <Phone size={16} className="text-[var(--color-terra-500)]" />
                <p className="mt-3 text-[10px] uppercase tracking-[0.22em] text-[var(--color-navy-500)]">
                  Phone
                </p>
                <a href={`tel:${siteData.contact.phone}`} className="mt-2 block text-sm leading-6 hover:text-[var(--color-navy-700)]">
                  {siteData.contact.phone}
                </a>
              </div>

              <div className="rounded-[1.25rem] border border-[var(--color-line)] bg-white/80 p-4">
                <ArrowUpRight size={16} className="text-[var(--color-terra-500)]" />
                <p className="mt-3 text-[10px] uppercase tracking-[0.22em] text-[var(--color-navy-500)]">
                  LinkedIn
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--color-charcoal)]">
                  {siteData.contact.linkedIn}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-ivory-50)] p-5 sm:p-6">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-navy-500)]">
              Reach out
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <Button as="a" href={`mailto:${siteData.contact.email}`} className="w-full justify-between gap-3">
                Send an Email <ArrowRight size={16} />
              </Button>

              <Button as="button" variant="secondary" type="button" className="w-full justify-between gap-3">
                Connect on LinkedIn <ArrowUpRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
