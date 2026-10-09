import React from 'react'

export default function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex min-h-[86px] flex-col justify-between rounded-[1rem] border border-[var(--color-line)] bg-white/75 p-3">
      <span className="text-[9px] uppercase tracking-[0.18em] text-[var(--color-muted)]">{label}</span>
      <span className="mt-3 font-display text-2xl text-[var(--color-navy-900)]">{value}</span>
    </div>
  )
}
