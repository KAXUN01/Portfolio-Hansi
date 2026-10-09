"use client"
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

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
  const [activeSection, setActiveSection] = useState('about')
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry) {
          const id = visibleEntry.target.id
          setActiveSection(id)
        }
      },
      {
        rootMargin: '-30% 0px -45% 0px',
        threshold: [0.2, 0.4, 0.6]
      }
    )

    links.forEach(({ href }) => {
      const section = document.querySelector(href)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <div className="container">
        <div className="flex items-center justify-between rounded-full border border-[var(--color-line)] bg-[rgba(247,243,234,0.9)] px-4 py-3 backdrop-blur-sm shadow-[0_10px_30px_rgba(23,43,77,0.06)]">
          <a href="#hero" className="font-display text-base tracking-[-0.04em] text-[var(--color-navy-900)] sm:text-lg">
            Hansi Thennakoon
          </a>

          <nav aria-label="Primary navigation" className="hidden items-center gap-2 md:flex">
            {links.map((link) => {
              const isActive = activeSection === link.href.replace('#', '')

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-full px-3 py-2 text-[11px] font-medium uppercase tracking-[0.18em] transition-colors duration-200 ${
                    isActive ? 'text-[var(--color-navy-900)]' : 'text-[var(--color-navy-700)] hover:text-[var(--color-terra-500)]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-full border border-[var(--color-line)] bg-[rgba(255,255,255,0.7)]"
                      transition={{ duration: prefersReducedMotion ? 0 : 0.2, ease: 'easeOut' }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              )
            })}
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

        <AnimatePresence>
          {open && (
            <motion.nav
              id="mobile-nav"
              aria-label="Mobile navigation"
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.22, ease: 'easeOut' }}
              className="md:hidden"
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
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
