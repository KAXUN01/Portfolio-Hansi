"use client"
import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }
  }
}

export default function SectionWrapper({
  id,
  children,
  className = ''
}: {
  id?: string
  children: React.ReactNode
  className?: string
}) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id={id} className={`section-shell py-20 sm:py-24 ${className}`}>
      <div className="container">
        <motion.div
          initial={prefersReducedMotion ? false : 'hidden'}
          whileInView={prefersReducedMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.15 }}
          variants={reveal}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}
