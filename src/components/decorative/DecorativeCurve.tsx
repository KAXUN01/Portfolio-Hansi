import React from 'react'

export default function DecorativeCurve({ className, color = '#F5EDE0' }:{ className?: string, color?: string }){
  return (
    <svg className={className} viewBox="0 0 800 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,120 C150,200 350,0 800,80 L800,200 L0,200 Z" fill={color} />
    </svg>
  )
}
