import React from 'react'
import { siteData } from '../../lib/data'
import SectionHeading from '../ui/SectionHeading'
import ProjectCard from '../ui/ProjectCard'
import SectionWrapper from '../layout/SectionWrapper'

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="bg-[var(--color-ivory-50)]">
      <SectionHeading
        number={3}
        title="Selected Work"
        subtitle="A collection of analytical projects exploring data, business performance, visualization and decision-making."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {siteData.projects.map((project) => (
          <ProjectCard
            key={project.id}
            number={project.number}
            title={project.title}
            category={project.category}
            stack={project.stack}
            description={project.description}
            period={project.period}
            visual={project.visual}
            featured={project.featured}
            href={project.href}
          />
        ))}
      </div>
    </SectionWrapper>
  )
}
