"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, BarChart3, Sparkles } from 'lucide-react'
import SectionWrapper from '../layout/SectionWrapper'
import Button from '../ui/Button'
import Eyebrow from '../ui/Eyebrow'
import ImageFrame from '../ui/ImageFrame'

export default function Hero() {
  return (
    <SectionWrapper id="hero" className="min-h-screen pt-32 sm:pt-36">
      <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.9fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[680px]"
        >
          <Eyebrow>Business Analytics</Eyebrow>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-[3.1rem] leading-[0.85] tracking-[-0.06em] text-[var(--color-navy-900)] sm:text-[4.3rem] lg:text-[6rem]"
          >
            Turning data
            <br />
            into better
            <br />
            decisions.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-base leading-7 text-[var(--color-charcoal)]/90 sm:text-lg"
          >
            Business Analytics undergraduate developing practical skills in Python, R, SQL, Tableau, Power BI and statistical analysis.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
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
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4 text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]"
          >
            <span className="flex items-center gap-2">
              <Sparkles size={12} className="text-[var(--color-terra-500)]" />
              Data + business + human thinking
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -left-7 top-10 hidden h-28 w-28 rounded-full border border-[var(--color-line)] bg-[var(--color-ivory-100)] md:block" />
          <div className="absolute -right-3 bottom-10 hidden h-20 w-20 rounded-full border border-[var(--color-line)] bg-[rgba(166,83,53,0.06)] md:block" />

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            <ImageFrame className="image-arch h-[500px] w-full border-[1.5px] border-[var(--color-line)] bg-[var(--color-ivory-100)] sm:h-[560px]">
              <div className="relative h-full overflow-hidden bg-[radial-gradient(circle_at_20%_20%,_rgba(255,255,255,0.85),_rgba(239,230,216,0.8)_25%,_rgba(33,70,109,0.18)_100%)] p-6 sm:p-8">
                <div className="absolute inset-0 opacity-60">
                  <svg viewBox="0 0 500 620" className="h-full w-full" preserveAspectRatio="none" aria-hidden="true">
                    <g fill="none" stroke="rgba(23,43,77,0.20)" strokeWidth="1">
                      <path d="M0 70L500 70M0 170L500 170M0 270L500 270M0 370L500 370M0 470L500 470" />
                      <path d="M70 0V620M180 0V620M290 0V620M400 0V620" />
                    </g>
                    <path d="M30 420 C120 320, 180 350, 240 250 S380 140, 470 200" stroke="rgba(166,83,53,0.9)" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <g fill="rgba(23,43,77,0.9)">
                      <circle cx="30" cy="420" r="5" />
                      <circle cx="120" cy="320" r="5" />
                      <circle cx="240" cy="250" r="5" />
                      <circle cx="380" cy="140" r="5" />
                      <circle cx="470" cy="200" r="5" />
                    </g>
                  </svg>
                </div>

                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex justify-between gap-4">
                    <div className="rounded-full border border-[var(--color-line)] bg-white/80 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--color-navy-700)]">
                      Hansi Thennakoon
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-line)] bg-white/80 text-[var(--color-navy-900)]">
                      <BarChart3 size={18} />
                    </div>
                  </div>

                  <div className="max-w-[240px] self-end rounded-[1.5rem] border border-[var(--color-line)] bg-[rgba(255,255,255,0.72)] p-4 backdrop-blur-sm">
                    <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-navy-500)]">
                      Insight
                    </p>
                    <p className="mt-3 font-display text-3xl leading-none text-[var(--color-navy-900)]">
                      Data with
                      <br />
                      business context.
                    </p>
                  </div>
                </div>
              </div>
            </ImageFrame>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
            className="absolute -bottom-4 left-5 rounded-full border border-[var(--color-line)] bg-[rgba(247,243,234,0.9)] px-4 py-2 shadow-[0_18px_40px_rgba(23,43,77,0.08)] backdrop-blur-sm"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-navy-500)]">Python • R • SQL</span>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
