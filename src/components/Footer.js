import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div id="sectionfooter">
      <div className="footer-container pt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3 mb-3">
              <div className="d-flex flex-row">
                <img
                  src="/assets/images/profile.jpg"
                  className="footer-image mr-3"
                  alt="Profile"
                />
                <div>
                  <h1 className="footer-heading">Srikanth</h1>
                  <p className="footer-description">Frontend Developer</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 mb-3">
              <h1 className="footer-heading">Phone No.</h1>
              <div>
                <i className="fas fa-phone-alt footer-icon"></i>
                <a href="tel:+917780226223" className="footer-description ml-2">
                  7780226223
                </a>
              </div>
            </div>
            <div className="col-12 col-md-3 mb-3">
              <h1 className="footer-heading">E-mail</h1>
              <div>
                <i className="fas fa-envelope footer-icon"></i>
                <a
                  href="mailto:gogusrikanth14@gmail.com"
                  className="footer-description ml-2"
                >
                  gogusrikanth
                  <br />
                  14@gmail.com
                </a>
              </div>
            </div>
            <div className="col-12 col-md-3 mb-3">
              <h1 className="footer-heading">Address</h1>
              <div>
                <i className="fas fa-map-marked-alt footer-icon"></i>
                <span className="footer-description ml-2">
                  Hyderabad, Telangana, India.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-right-container text-center mt-3">
          <i className="fas fa-copyright footer-icon"></i>
          <span className="copy-right-description">
            2024 by Gogu Srikanth. Created with React
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
