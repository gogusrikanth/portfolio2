// src/components/Certifications.js
import React from 'react'
import './Certifications.css'

const Certifications = () => {
  return (
    <section className="certifications-section">
      <h2>Certifications</h2>
      <div className="certification-card">
        <img
          src="path-to-your-certificate-image.jpg"
          alt="Certificate"
          className="certificate-image"
        />
        <div className="certificate-details">
          <h3>Certificate Name</h3>
          <p>
            Details about the certification, such as the issuing organization,
            date received, etc.
          </p>
        </div>
      </div>
      <div className="certification-card">
        <img
          src="path-to-your-certificate-image.jpg"
          alt="Certificate"
          className="certificate-image"
        />
        <div className="certificate-details">
          <h3>Certificate Name</h3>
          <p>
            Details about the certification, such as the issuing organization,
            date received, etc.
          </p>
        </div>
      </div>
      {/* Add more certification cards as needed */}
    </section>
  )
}

export default Certifications
