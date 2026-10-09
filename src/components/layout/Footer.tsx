import React from 'react'

export default function Footer(){
  return (
    <footer className="py-8 bg-cream-100 border-t border-cream-300 mt-16">
      <div className="container text-center text-sm text-charcoal">
        © {new Date().getFullYear()} Hansi Thennakoon — Designed for Business Analytics internships.
      </div>
    </footer>
  )
}
