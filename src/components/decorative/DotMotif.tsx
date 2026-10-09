import React from 'react'

export default function DotMotif({ className }:{ className?: string }){
  return (
    <div className={`flex items-center gap-2 ${className ?? ''}`} aria-hidden>
      <span className="h-2 w-2 rounded-full bg-rust-500 block"></span>
      <span className="h-2 w-2 rounded-full bg-rust-500 block"></span>
      <span className="h-2 w-2 rounded-full bg-rust-500 block"></span>
    </div>
  )
}
