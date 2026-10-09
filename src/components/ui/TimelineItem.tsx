import React from 'react'

export default function TimelineItem({ degree, institution, period, gpa }:{ degree:string, institution:string, period?:string, gpa?:string }){
  return (
    <div className="flex gap-6 items-start">
      <div className="flex-shrink-0 mt-1">
        <div className="h-3 w-3 bg-navy-700 rounded-full" />
      </div>
      <div>
        <div className="text-sm text-navy-700 font-semibold">{degree}</div>
        <div className="text-sm text-charcoal">{institution} {gpa && <span className="text-xs text-charcoal">• GPA {gpa}</span>}</div>
        {period && <div className="text-xs mt-1 text-navy-500">{period}</div>}
      </div>
    </div>
  )
}
