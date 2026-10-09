import '../styles/globals.css'
import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

export const metadata = {
  title: 'Hansi Thennakoon — Portfolio',
  description: 'Portfolio of a business-focused undergraduate'
}

export default function RootLayout({ children }:{children: React.ReactNode}){
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans bg-white text-charcoal">
        <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-white focus:p-2 focus:rounded">Skip to content</a>
        <Navbar />
        <div id="content" className="pt-20">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
