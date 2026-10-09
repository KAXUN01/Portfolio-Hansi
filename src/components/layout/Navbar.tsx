"use client"
import React, { useState } from 'react'

export default function Navbar() {
  const links = [
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' }
  ]

  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <div className="container">
        <div className="flex items-center justify-between rounded-full border border-[var(--color-line)] bg-[rgba(247,243,234,0.9)] px-4 py-3 backdrop-blur-sm shadow-[0_10px_30px_rgba(23,43,77,0.06)]">
          <a href="#hero" className="font-display text-base tracking-[-0.04em] text-[var(--color-navy-900)] sm:text-lg">
            Hansi Thennakoon
          </a>

          <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--color-navy-700)] transition-colors hover:text-[var(--color-terra-500)]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-[var(--color-navy-900)] bg-[var(--color-navy-900)] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--color-ivory-50)] transition-colors hover:bg-[var(--color-navy-700)]"
            >
              Work with me
            </a>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label="Toggle navigation"
              onClick={() => setOpen((value) => !value)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-line)] bg-white text-[var(--color-navy-900)]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className={`${open ? 'block' : 'hidden'} md:hidden`}
        >
          <div className="mt-3 rounded-[1.5rem] border border-[var(--color-line)] bg-white/95 p-4 shadow-[0_18px_40px_rgba(23,43,77,0.08)]">
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-full px-3 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--color-navy-700)] transition-colors hover:bg-[var(--color-ivory-50)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}
