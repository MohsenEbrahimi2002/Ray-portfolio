"use client"
import Projects from './Projects'
import SectionHeading from './SectionHeading'
import { projectsData } from '@/lib/data'
import { useInViewSection } from '@/lib/hook'
import React from 'react';

function ProjectSection() {
 const {ref} = useInViewSection('Projects', 0.33)
  return (
    <section ref={ref} className='mt-28'>
    <SectionHeading>My Project</SectionHeading>
    <div>
        {projectsData.map((project , index) => (
            <React.Fragment key={index}>
            <Projects {...project}/>
            </React.Fragment>
        ))}
    </div>
    </section>
  )
}

export default ProjectSection