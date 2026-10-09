import React from 'react'

export default function MiniLineChart({ className = '' }: { className?: string }) {
  return (
    <div className={`h-full w-full ${className}`}>
      <svg viewBox="0 0 400 220" className="h-full w-full" preserveAspectRatio="none" aria-hidden="true">
        <g fill="none" stroke="rgba(23,43,77,0.16)" strokeWidth="1">
          <path d="M0 40H400M0 110H400M0 180H400" />
          <path d="M60 0V220M150 0V220M240 0V220M330 0V220" />
        </g>
        <path d="M10 160C70 140, 120 110, 180 100S270 40, 390 80" stroke="rgba(166,83,53,0.9)" strokeWidth="3" fill="none" strokeLinecap="round" />
        <g fill="rgba(23,43,77,0.8)">
          <circle cx="10" cy="160" r="4" />
          <circle cx="180" cy="100" r="4" />
          <circle cx="390" cy="80" r="4" />
        </g>
      </svg>
    </div>
  )
}
