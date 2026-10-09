import React from 'react'
import Hero from '../components/hero/Hero'
import About from '../components/about/About'
import Education from '../components/education/Education'
import Projects from '../components/projects/Projects'
import Skills from '../components/skills/Skills'
import Certifications from '../components/certifications/Certifications'
import Impact from '../components/impact/Impact'
import Community from '../components/community/Community'
import Contact from '../components/contact/Contact'

export default function Page(){
  return (
    <main>
      <Hero />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Certifications />
      <Impact />
      <Community />
      <Contact />
    </main>
  )
}
