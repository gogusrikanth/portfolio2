// src/components/Projects.js
import React from 'react'
import './Projects.css'

const Projects = () => {
  return (
    <div id="sectionprojects" className="py-5">
      <div className="portfolio-container">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h1 className="about-heading">Projects I have done</h1>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <div className="shadow projects-card mb-3">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-project-1-img.png"
                  className="portfolio-image img-fluid"
                  alt="Project 1"
                />
                <div className="p-3">
                  <p className="project-title">Web design</p>
                  <h1 className="project-heading">Royal Grand Hotel</h1>
                  <p className="project-description">
                    Royal Grand Hotel is a Simple Static Website. We can use
                    this layout for building other websites...
                  </p>
                  <a className="project-link" href="google.com">
                    Read More{' '}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <div className="shadow projects-card mb-3">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-project-2-img.png"
                  className="portfolio-image img-fluid"
                  alt="Project 2"
                />
                <div className="p-3">
                  <p className="project-title">Web design</p>
                  <h1 className="project-heading">Happy Meals</h1>
                  <p className="project-description">
                    Happy Meals is the best-in-class food ordering page today.
                    With interactive UI/UX and simple call to actions.
                  </p>
                  <a className="project-link" href="google.com">
                    Read More{' '}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
