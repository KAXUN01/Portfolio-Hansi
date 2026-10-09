import React from 'react'

export default function Footer(){
  return (
    <footer className="border-t border-[var(--color-line)] py-8">
      <div className="container flex flex-col gap-2 text-sm text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Hansi Thennakoon</p>
        <p>Business Analytics undergraduate</p>
      </div>
    </footer>
  )
}
