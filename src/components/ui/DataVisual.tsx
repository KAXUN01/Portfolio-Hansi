import React from 'react'

type DataVisualProps = {
  variant?: 'bars' | 'line' | 'points' | 'kpi' | 'grid'
  className?: string
}

export default function DataVisual({ variant = 'bars', className = '' }: DataVisualProps) {
  if (variant === 'line') {
    return (
      <div className={`relative h-full w-full overflow-hidden ${className}`}>
        <svg viewBox="0 0 400 220" className="h-full w-full" preserveAspectRatio="none" aria-hidden="true">
          <g fill="none" stroke="rgba(23,43,77,0.15)" strokeWidth="1">
            <path d="M0 40H400M0 110H400M0 180H400" />
            <path d="M60 0V220M150 0V220M240 0V220M330 0V220" />
          </g>
          <path d="M10 160C80 132, 110 140, 170 100S260 40, 390 80" stroke="rgba(166,83,53,0.9)" strokeWidth="3" fill="none" strokeLinecap="round" />
          <g fill="rgba(23,43,77,0.82)">
            <circle cx="10" cy="160" r="4" />
            <circle cx="170" cy="100" r="4" />
            <circle cx="390" cy="80" r="4" />
          </g>
        </svg>
      </div>
    )
  }

  if (variant === 'points') {
    return (
      <div className={`relative h-full w-full overflow-hidden ${className}`}>
        <svg viewBox="0 0 400 220" className="h-full w-full" preserveAspectRatio="none" aria-hidden="true">
          <g fill="none" stroke="rgba(23,43,77,0.15)" strokeWidth="1">
            <path d="M0 40H400M0 110H400M0 180H400" />
            <path d="M60 0V220M150 0V220M240 0V220M330 0V220" />
          </g>
          <g fill="rgba(23,43,77,0.8)">
            <circle cx="55" cy="146" r="5" />
            <circle cx="135" cy="120" r="5" />
            <circle cx="220" cy="90" r="5" />
            <circle cx="305" cy="70" r="5" />
            <circle cx="355" cy="52" r="5" />
          </g>
        </svg>
      </div>
    )
  }

  if (variant === 'kpi') {
    return (
      <div className={`grid h-full w-full grid-cols-3 gap-2 p-3 ${className}`}>
        {['12', '24', '48'].map((value, index) => (
          <div key={value} className="flex flex-col justify-between rounded-[0.9rem] border border-[var(--color-line)] bg-white/70 p-2">
            <span className="text-[9px] uppercase tracking-[0.16em] text-[var(--color-muted)]">
              {index === 0 ? 'A' : index === 1 ? 'B' : 'C'}
            </span>
            <span className="mt-3 font-display text-xl text-[var(--color-navy-900)]">{value}</span>
          </div>
        ))}
      </div>
    )
  }

  if (variant === 'grid') {
    return (
      <div className={`relative h-full w-full overflow-hidden ${className}`}>
        <svg viewBox="0 0 400 220" className="h-full w-full" preserveAspectRatio="none" aria-hidden="true">
          <g fill="none" stroke="rgba(23,43,77,0.15)" strokeWidth="1">
            <path d="M0 0V220H400M0 0H400M0 110H400M200 0V220M0 220H400" />
          </g>
          <rect x="45" y="135" width="86" height="48" rx="8" fill="rgba(49,87,122,0.15)" />
          <rect x="168" y="90" width="88" height="93" rx="8" fill="rgba(166,83,53,0.12)" />
          <rect x="285" y="60" width="70" height="123" rx="8" fill="rgba(23,43,77,0.08)" />
        </svg>
      </div>
    )
  }

  return (
    <div className={`flex h-full w-full items-end gap-2 p-3 ${className}`}>
      {[28, 46, 62, 54, 78, 58].map((value, index) => (
        <div key={value + index} className="flex-1 rounded-t-[0.75rem] bg-[var(--color-navy-900)]/80" style={{ height: `${value}%` }} />
      ))}
    </div>
  )
}
