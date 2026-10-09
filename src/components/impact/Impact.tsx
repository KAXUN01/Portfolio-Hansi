import React from 'react'
import SectionHeading from '../ui/SectionHeading'
import SectionWrapper from '../layout/SectionWrapper'

const initiatives = [
  {
    number: '10',
    label: 'SDG 10',
    title: 'A Book for Every Child',
    description:
      'Contributed to a reading-access initiative at Kananwila Sugathapala Vidyalaya by helping establish a mini-library and support inclusive educational opportunities.',
    kind: 'bars'
  },
  {
    number: '10 / 12',
    label: 'SDG 10 & SDG 12',
    title: 'Empower Her',
    description:
      'Participated in a women-focused skill-development initiative aimed at supporting sustainable livelihoods, self-employment and practical community support.',
    kind: 'wave'
  }
]

export default function Impact() {
  return (
    <SectionWrapper id="impact" className="bg-[var(--color-ivory-50)]">
      <SectionHeading
        number={4}
        title="Impact"
        subtitle="Where analytical thinking meets social opportunity, access and community support."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_1.5fr]">
        <div className="editorial-card rounded-[2rem] p-6 sm:p-8">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-navy-500)]">
            Portfolio positioning
          </p>

          <p className="mt-6 max-w-md font-display text-3xl leading-tight text-[var(--color-navy-900)] sm:text-4xl">
            “Business analytics is not only about numbers — it is also about understanding people, systems and opportunities.”
          </p>

          <div className="mt-8 rounded-[1.5rem] border border-[var(--color-line)] bg-white/70 p-4">
            <div className="flex h-24 items-end gap-2">
              {[22, 38, 52, 74, 48, 64].map((height, index) => (
                <span
                  key={index}
                  className="w-full rounded-t-md bg-[var(--color-navy-900)]/8"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            <div className="mt-4 h-px w-full bg-[var(--color-line)]" />
            <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
              <span>people</span>
              <span>systems</span>
              <span>opportunity</span>
            </div>
          </div>
        </div>

        <div className="grid gap-5">
          {initiatives.map((item) => (
            <article key={item.title} className="editorial-card rounded-[2rem] p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div className="text-5xl font-display leading-none text-[var(--color-navy-900)] sm:text-6xl">
                  {item.number}
                </div>
                <span className="inline-flex rounded-full border border-[var(--color-line)] bg-white/80 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-[var(--color-navy-500)]">
                  {item.label}
                </span>
              </div>

              <h3 className="mt-5 text-2xl leading-tight text-[var(--color-navy-900)] sm:text-[2rem]">
                {item.title}
              </h3>

              <p className="mt-3 max-w-xl text-base leading-7 text-[var(--color-charcoal)]">
                {item.description}
              </p>

              <div className="mt-6 overflow-hidden rounded-[1.25rem] border border-[var(--color-line)] bg-[var(--color-ivory-50)] p-3">
                {item.kind === 'bars' ? (
                  <div className="flex h-14 items-end gap-2">
                    {[32, 50, 42, 68, 58, 82].map((height, index) => (
                      <span
                        key={index}
                        className="w-full rounded-t-md bg-[var(--color-terra-400)]/75"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                ) : (
                  <svg viewBox="0 0 320 80" className="h-14 w-full" aria-hidden="true">
                    <path
                      d="M0 60 C 40 70, 60 25, 90 42 S 155 68, 190 38 S 260 18, 320 28"
                      fill="none"
                      stroke="rgba(23, 43, 77, 0.8)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    {[40, 100, 160, 220, 280].map((x) => (
                      <circle key={x} cx={x} cy={x < 200 ? 42 : 28} r="3" fill="rgba(166, 83, 53, 0.75)" />
                    ))}
                  </svg>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
