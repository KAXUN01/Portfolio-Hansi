"use client"

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, BarChart3, Sparkles } from 'lucide-react'
import SectionWrapper from '../layout/SectionWrapper'
import Button from '../ui/Button'
import Eyebrow from '../ui/Eyebrow'
import ImageFrame from '../ui/ImageFrame'
import { siteData } from '../../lib/data'
import { imagePresets } from '../../lib/images'

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()

  const textInitial = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }
  const textTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const }

  return (
    <SectionWrapper id="hero" className="min-h-screen pt-32 sm:pt-36">
      <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.9fr] lg:gap-14">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          animate={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={textTransition}
          className="max-w-[680px]"
        >
          <Eyebrow>Data-driven thinking</Eyebrow>

          <motion.h1
            initial={textInitial}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...textTransition, delay: prefersReducedMotion ? 0 : 0.08 }}
            className="mt-5 max-w-[10ch] text-[clamp(2.8rem,12vw,6rem)] leading-[0.82] tracking-[-0.06em] text-[var(--color-navy-900)]"
          >
            Turning data
            <br />
            into better
            <br />
            decisions.
          </motion.h1>

          <motion.p
            initial={textInitial}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...textTransition, delay: prefersReducedMotion ? 0 : 0.14 }}
            className="mt-6 max-w-xl text-base leading-7 text-[var(--color-charcoal)]/90 sm:text-lg"
          >
            I develop practical skills in Python, R, SQL, Tableau, Power BI and statistical analysis to turn data into clearer business decisions.
          </motion.p>

          <motion.div
            initial={textInitial}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...textTransition, delay: prefersReducedMotion ? 0 : 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Button as="a" href="#projects" className="gap-2">
              Explore My Work <ArrowRight size={16} />
            </Button>
            <Button as="a" href="#contact" variant="secondary">
              Let&apos;s Connect
            </Button>
          </motion.div>

          <motion.div
            initial={textInitial}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...textTransition, delay: prefersReducedMotion ? 0 : 0.26 }}
            className="mt-10 flex flex-wrap items-center gap-4 text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]"
          >
            <span className="flex items-center gap-2">
              <Sparkles size={12} className="text-[var(--color-terra-500)]" />
              Data + business + human thinking
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="motif-block -left-6 top-3 hidden md:block" />
          <div className="absolute -left-14 top-24 hidden h-24 w-24 rounded-full border border-[var(--color-line)] bg-[rgba(255,255,255,0.5)] md:block" />
          <div className="absolute -right-3 bottom-10 hidden h-20 w-20 rounded-full border border-[var(--color-line)] bg-[rgba(166,83,53,0.06)] md:block" />
          <motion.svg
            className="absolute -right-6 top-14 hidden h-32 w-32 md:block"
            viewBox="0 0 160 120"
            aria-hidden="true"
            animate={prefersReducedMotion ? undefined : { y: [0, -6, 0] }}
            transition={prefersReducedMotion ? undefined : { duration: 9, ease: 'easeInOut', repeat: Infinity }}
          >
            <path d="M6 86 C 28 30, 78 22, 112 44 S 152 78, 154 40" fill="none" stroke="rgba(23,43,77,0.28)" strokeWidth="2" strokeLinecap="round" />
          </motion.svg>

          <motion.div
            animate={prefersReducedMotion ? undefined : { y: [0, -6, 0] }}
            transition={prefersReducedMotion ? undefined : { duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            <ImageFrame
              src={siteData.heroImage.src}
              alt={siteData.heroImage.alt}
              width={siteData.heroImage.width}
              height={siteData.heroImage.height}
              priority={true}
              sizes={imagePresets.profileHero.sizes}
              objectPosition={siteData.heroImage.objectPosition || 'center center'}
              className="image-arch aspect-[1134/1086] w-full border-[1.5px] border-[var(--color-line)] bg-[var(--color-ivory-100)]"
            />
          </motion.div>

          <motion.div
            animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }}
            transition={prefersReducedMotion ? undefined : { duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
            className="absolute -bottom-4 left-5 rounded-full border border-[var(--color-line)] bg-[rgba(247,243,234,0.9)] px-4 py-2 shadow-[0_18px_40px_rgba(23,43,77,0.08)] backdrop-blur-sm"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-navy-500)]">Hansi Thennakoon</span>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
