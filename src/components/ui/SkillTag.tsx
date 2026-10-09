import React from 'react'

export default function SkillTag({ label }:{ label: string }){
  return (
    <span className="inline-block bg-cream-100 text-sm text-charcoal px-3 py-1 rounded-full border border-cream-300">{label}</span>
  )
}
