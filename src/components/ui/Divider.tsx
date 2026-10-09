import React from 'react'

export default function Divider({ className }:{ className?: string }){
  return (
    <div className={`w-full h-px bg-rust-500 my-6 ${className ?? ''}`} />
  )
}
