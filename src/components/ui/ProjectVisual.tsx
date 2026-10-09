import React from 'react'
import DataVisual from './DataVisual'
import MiniBarChart from './MiniBarChart'
import MiniLineChart from './MiniLineChart'
import MetricCard from './MetricCard'

export default function ProjectVisual({ variant = 'bars' }: { variant?: 'bars' | 'line' | 'points' | 'kpi' | 'grid' }) {
  const common = 'relative h-full w-full overflow-hidden rounded-[1.25rem] border border-[var(--color-line)] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.9),_rgba(239,230,216,0.8)_20%,_rgba(49,87,122,0.12)_100%)]'

  if (variant === 'line') {
    return (
      <div className={`${common} p-3`}>
        <MiniLineChart className="h-full w-full" />
      </div>
    )
  }

  if (variant === 'points') {
    return (
      <div className={`${common} p-3`}>
        <DataVisual variant="points" className="h-full w-full" />
      </div>
    )
  }

  if (variant === 'kpi') {
    return (
      <div className={`${common} p-3`}>
        <div className="grid h-full w-full grid-cols-3 gap-2">
          <MetricCard label="A" value="12" />
          <MetricCard label="B" value="24" />
          <MetricCard label="C" value="48" />
        </div>
      </div>
    )
  }

  if (variant === 'grid') {
    return (
      <div className={`${common} p-3`}>
        <DataVisual variant="grid" className="h-full w-full" />
      </div>
    )
  }

  return (
    <div className={`${common} p-3`}>
      <MiniBarChart className="h-full w-full" />
    </div>
  )
}
