import React from 'react'

export default function NavyBlock({ className }:{ className?: string }){
  return (
    <div className={`bg-navy-700 ${className ?? ''}`} />
  )
}
