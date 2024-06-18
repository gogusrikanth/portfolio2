import React from 'react'
import './Projects.css'

const Projects = () => {
  return (
    <section className='projects-section'>
      <h2>Projects</h2>
      <div className='project-card'>
        <h3>Project Name</h3>
        <p>
          Project description goes here. It explains what the project is about
          and the technologies used.
        </p>
        <a
          href='https://github.com/yourprojectlink'
          target='_blank'
          rel='noopener noreferrer'
        >
          Visit my project
        </a>
      </div>
      <div className='project-card'>
        <h3>Another Project</h3>
        <p>
          Project description goes here. It explains what the project is about
          and the technologies used.
        </p>
        <a
          href='https://github.com/yourprojectlink'
          target='_blank'
          rel='noopener noreferrer'
        >
          Visit my project
        </a>
      </div>
    </section>
  )
}

export default Projects
