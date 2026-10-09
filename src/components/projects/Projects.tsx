import React from 'react'
import { siteData } from '../../lib/data'
import SectionHeading from '../ui/SectionHeading'
import ProjectCard from '../ui/ProjectCard'
import SectionWrapper from '../layout/SectionWrapper'

export default function Projects(){
  return (
    <SectionWrapper id="projects">
      <SectionHeading number={4} title="Projects" subtitle="Selected academic and analytical projects" />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {siteData.projects.map(p=> (
          <ProjectCard key={p.title} title={p.title} stack={p.stack} description={p.description} />
        ))}
      </div>
    </SectionWrapper>
  )
}
