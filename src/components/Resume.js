import React from 'react'
import './Resume.css'

const Resume = () => {
  return (
    <section className='resume-section'>
      <h2>Resume</h2>
      <div className='download-resume'>
        <a href='path-to-your-resume.pdf' download>
          Download My Resume
        </a>
      </div>
    </section>
  )
}

export default Resume
