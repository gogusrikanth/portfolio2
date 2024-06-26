// src/components/Skills.js
import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div className="about-bottom-container">
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center mb-4">
            <p className="about-title">Skills</p>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <div className="shadow skill-card text-center pt-3 pb-3 mb-3">
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-html-img.png"
                className="skill-image img-fluid"
                alt="HTML"
              />
              <h1 className="skill-name">HTML</h1>
              <a
                className="certification-link"
                href="https://certificates.ccbp.in/academy/static-website?id=USDDCDTJMG"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certification
              </a>
            </div>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <div className="shadow skill-card text-center pt-3 pb-3 mb-3">
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-css-img.png"
                className="skill-image img-fluid"
                alt="CSS"
              />
              <h1 className="skill-name">CSS</h1>
              <a
                className="certification-link"
                href="https://certificates.ccbp.in/academy/responsive-web-design-using-flexbox?id=HIQYPIKKWT"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certification
              </a>
            </div>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <div className="shadow skill-card text-center pt-3 pb-3 mb-3">
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-bootstrap-img.png"
                className="skill-image img-fluid"
                alt="Bootstrap"
              />
              <h1 className="skill-name">Bootstrap</h1>
              <a
                className="certification-link"
                href="https://certificates.ccbp.in/academy/build-your-own-responsive-website?id=KMTKPAPVCS"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certification
              </a>
            </div>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <div className="shadow skill-card text-center pt-3 pb-3 mb-3">
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-js-img.png"
                className="skill-image img-fluid"
                alt="JavaScript"
              />
              <h1 className="skill-name">JavaScript</h1>
              <a
                className="certification-link"
                href="https://certificates.ccbp.in/academy/dynamic-web-application?id=GLXNGOHASK"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certification
              </a>
            </div>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <div className="shadow skill-card text-center pt-3 pb-3 mb-3">
              <img
                src="/python.jpg"
                className="skill-image img-fluid"
                alt="Python"
              />
              <h1 className="skill-name">Python</h1>
              <a
                className="certification-link"
                href="https://certificates.ccbp.in/academy/programming-foundations-with-python?id=ZECPVJFMQP"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certification
              </a>
            </div>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <div className="shadow skill-card text-center pt-3 pb-3 mb-3">
              <img
                src="/db.jpg"
                className="skill-image img-fluid"
                alt="Database"
              />
              <h1 className="skill-name">Database</h1>
              <a
                className="certification-link"
                href="https://certificates.ccbp.in/academy/introduction-to-databases?id=VSMIMHVNAY"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certification
              </a>
            </div>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <div className="shadow skill-card text-center pt-3 pb-3 mb-3">
              <img
                src="/react.jpg"
                className="skill-image img-fluid"
                alt="React"
              />
              <h1 className="skill-name">React</h1>
              <a
                className="certification-link"
                href="https://certificates.ccbp.in/academy/react-js?id=IXSONHWDJO"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certification
              </a>
            </div>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <div className="shadow skill-card text-center pt-3 pb-3 mb-3">
              <img
                src="node.jpg"
                className="skill-image img-fluid"
                alt="Node"
              />
              <h1 className="skill-name">Node</h1>
              <a
                className="certification-link"
                href="https://certificates.ccbp.in/academy/node-js?id=NNBMXXDLWO"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certification
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
