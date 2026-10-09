import React from 'react'

export default function MiniBarChart({ className = '' }: { className?: string }) {
  const values = [18, 36, 52, 41, 68, 74]

  return (
    <div className={`flex h-full w-full items-end gap-2 ${className}`}>
      {values.map((value, index) => (
        <div
          key={`${value}-${index}`}
          className="flex-1 rounded-t-[0.7rem] bg-[var(--color-navy-900)]/80"
          style={{ height: `${value}%` }}
        />
      ))}
    </div>
  )
}
